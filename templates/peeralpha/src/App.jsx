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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


                    (function() {
                      const cards = document.querySelectorAll('.spotlight-card');
                      cards.forEach(card => {
                        card.addEventListener('mousemove', (e) => {
                          const rect = card.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const y = e.clientY - rect.top;
                          card.style.setProperty('--mouse-x', `${x}px`);
                          card.style.setProperty('--mouse-y', `${y}px`);
                        });
                      });
                    })();
                  


            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          


            (function(){const el=document.getElementById('persona-text');if(!el)return;const texts=["têm pouco ou nenhum conhecimento","não têm tempo para analisar gráficos","amam o mercado crypto","sabem que o Brasil só come o seu dinheiro"];let idx=0;setInterval(()=>{el.style.opacity='0';el.style.transform='translateY(10px)';setTimeout(()=>{idx=(idx+1)%texts.length;el.innerText=texts[idx];el.style.opacity='1';el.style.transform='translateY(0)';},500);},3000);})();
          


        (function () {
          const state = { plan: 'gold' };

          const plans = {
            gold: {
              name: 'Gold',
              tagline: 'Para quem está começando',
              price: '49,90',
              originalPrice: '97',
              cta: 'Assinar Gold',
              features: [
                '10 Estratégias',
                '3 Bots Ativos',
                '50 Backtests/mês',
                '3 Gerações IA/mês',
                'Trading real com Binance'
              ]
            },
            diamond: {
              name: 'Diamond',
              tagline: 'Para traders profissionais',
              price: '149,90',
              originalPrice: null,
              cta: 'Assinar Diamond',
              features: [
                '50 Estratégias',
                '20 Bots Ativos',
                '200 Backtests/mês',
                '15 Gerações IA/mês',
                'Trading real com Binance',
                'Suporte prioritário'
              ]
            }
          };

          const els = {
            btns: document.querySelectorAll('.plan-select-btn'),
            name: document.querySelector('#planName'),
            tagline: document.querySelector('#planTagline'),
            price: document.querySelector('#planPrice'),
            originalPrice: document.querySelector('#planOriginalPrice'),
            list: document.querySelector('#featureList'),
            cta: document.querySelector('#ctaBtn')
          };

          function render() {
            const p = plans[state.plan];
            els.name.textContent = p.name;
            els.tagline.textContent = p.tagline.toUpperCase();
            els.price.textContent = p.price;

            if (els.originalPrice) {
                if (p.originalPrice) {
                    els.originalPrice.textContent = 'R$ ' + p.originalPrice;
                    els.originalPrice.classList.remove('hidden');
                } else {
                    els.originalPrice.classList.add('hidden');
                }
            }

            els.cta.textContent = p.cta;

            els.list.innerHTML = p.features.map(f =>
              `<li class="flex items-start gap-3">
                <iconify-icon icon="lucide:check" class="text-[#F5A623] mt-0.5" width="16"></iconify-icon>
                <span class="text-[#FAFAFA]">${f}</span>
              </li>`
            ).join('');

            els.btns.forEach(btn => {
              const isSelected = btn.dataset.planSelect === state.plan;
              if(isSelected) {
                btn.classList.add('border-[#F5A623]', 'bg-[#F5A623]/5');
                btn.classList.remove('border-[#2A2A32]', 'bg-[#1C1C21]');
                const iconBox = btn.querySelector('iconify-icon').parentElement;
                iconBox.classList.add('bg-[#F5A623]', 'text-[#0D0D0F]');
                iconBox.classList.remove('bg-[#2A2A32]', 'text-[#A1A1AA]');
              } else {
                btn.classList.remove('border-[#F5A623]', 'bg-[#F5A623]/5');
                btn.classList.add('border-[#2A2A32]', 'bg-[#1C1C21]');
                const iconBox = btn.querySelector('iconify-icon').parentElement;
                iconBox.classList.remove('bg-[#F5A623]', 'text-[#0D0D0F]');
                iconBox.classList.add('bg-[#2A2A32]', 'text-[#A1A1AA]');
              }
            });
          }

          els.btns.forEach(btn => {
            btn.addEventListener('click', () => {
              state.plan = btn.dataset.planSelect;
              render();
            });
          });

          render();
        })();
      


      const textElement = document.getElementById('typing-text');
      const phrases = [
          { text: 'Alta', colorClass: 'text-[#22C55E]' },
          { text: 'Baixa', colorClass: 'text-[#EF4444]' }
      ];
      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function typeEffect() {
          const current = phrases[phraseIndex];

          if (isDeleting) {
              charIndex--;
              textElement.textContent = current.text.substring(0, charIndex);
          } else {
              if (charIndex === 0) {
                  textElement.classList.remove('text-[#22C55E]', 'text-[#EF4444]');
                  textElement.classList.add(current.colorClass);
              }
              charIndex++;
              textElement.textContent = current.text.substring(0, charIndex);
          }

          let speed = isDeleting ? 50 : 150;

          if (!isDeleting && charIndex === current.text.length) {
              isDeleting = true;
              speed = 2000;
          } else if (isDeleting && charIndex === 0) {
              isDeleting = false;
              phraseIndex = (phraseIndex + 1) % phrases.length;
              speed = 500;
          }

          setTimeout(typeEffect, speed);
      }

      typeEffect();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 glass-panel transition-all duration-300 border-white/5 border-b top-0 right-0 left-0">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-2 gap-y-2 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="overflow-hidden shrink-0 w-10 h-10 rounded-lg relative">
<img alt="PeerAlpha Logo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2624f4e0-1b35-44b5-a46e-50c3444b27be_320w.png"/>
</div>
<span className="group-hover:text-[#F5A623] transition-colors text-lg font-semibold text-[#FAFAFA] tracking-tight font-sans" style={{}}>
            PeerAlpha
          </span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors" href="#funcionalidades">
            Funcionalidades
          </a>
<a className="text-sm font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors" href="#como-funciona">
            Como funciona
          </a>
<a className="text-sm font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors" href="#resultados">
            Resultados
          </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-semibold text-[#FAFAFA] hover:text-[#F5A623] transition-colors" href="#">
            Login
          </a>
<a className="px-5 py-2.5 rounded-lg bg-[#F5A623] hover:bg-[#FFB84D] active:bg-[#E09000] text-[#0D0D0F] text-sm font-semibold transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(245,166,35,0.3)]" href="#">
            Começar Agora
          </a>
</div>
</div>
</nav>

<header className="min-h-screen flex overflow-hidden pt-20 relative perspective-container items-center justify-center bg-[#0D0D0F]">

<div className="absolute inset-0 w-full h-full z-0" data-container-bg="true">

<div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '100%', height: '100%'}}></div>

</div>

<div className="glow-spot absolute right-1/3 bottom-0" style={{width: '600px', height: '300px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(0,0,0,0) 70%)', animationDelay: '2s'}}></div>

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<video autoplay="" className="w-full h-full object-cover opacity-25 grayscale-[50%]" loop="" muted="" playsinline="">
<source src="https://cdn.pixabay.com/video/2020/11/01/54959-476426463_large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0F]/40 via-transparent to-[#0D0D0F]"></div>
</div>
<div className="z-10 grid lg:grid-cols-2 gap-16 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="lg:text-left text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1C1C21] border border-[#2A2A32] mb-4">
<span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
<span className="uppercase text-xs text-[#A1A1AA] tracking-wide font-mono" style={{}}>
              lançamento peeralpha v3
            </span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
            Lucre na
            <span className="typewriter-cursor text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-[#22C55E]" id="typing-text">
              Alt
            </span>
</h1>
<p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed max-w-lg mx-auto lg:mx-0">
            Reduza Riscos. Utilize inteligência artificial para criar, validar e
            gerir sua carteira de criptomoedas automaticamente.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FAFAFA] hover:bg-white text-[#0D0D0F] font-semibold text-base transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
              Criar Estratégia
            </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-[#FAFAFA] font-semibold text-base hover:bg-[#232329] transition-all border border-[#2A2A32] flex items-center justify-center gap-2 group">
              Ver Backtests
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex lg:justify-start border-[#2A2A32] border-t pt-8 gap-x-8 gap-y-8 items-center justify-center">
<div className="">
<p className="text-3xl font-bold text-[#FAFAFA] font-mono">R$xxx+</p>
<p className="text-xs text-[#71717A] mt-1">Volume Processado</p>
</div>
<div className="">
<p className="text-3xl font-mono font-bold text-[#FAFAFA]">24/7</p>
<p className="text-xs text-[#71717A] mt-1">Monitoramento</p>
</div>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center perspective-container hidden lg:flex">

<img alt="Abstract 3D Background" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] object-cover rounded-full opacity-40 blur-[60px] mix-blend-screen pointer-events-none" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>

<div className="hero-dashboard overflow-hidden bg-[#151518] w-[90%] h-[90%] border-[#2A2A32] border rounded-2xl pt-6 pr-6 pb-6 pl-6 absolute">

<div className="flex items-center justify-between mb-6 border-b border-[#2A2A32] pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
<div className="w-3 h-3 rounded-full bg-[#F5A623]"></div>
<div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
</div>
<div className="text-xs font-mono text-[#71717A]">
                BTC/USDT • PeerAlpha Bot
              </div>
</div>

<div className="relative h-[200px] w-full mb-6">
<svg className="w-full h-full overflow-visible" viewbox="0 0 400 200">

<line className="" stroke="#2A2A32" strokeWidth="1" x1="0" x2="400" y1="40" y2="40"></line>
<line className="" stroke="#2A2A32" strokeWidth="1" x1="0" x2="400" y1="100" y2="100"></line>
<line stroke="#2A2A32" strokeWidth="1" x1="0" x2="400" y1="160" y2="160"></line>

<path className="" d="M0,150 C50,150 80,100 120,110 C160,120 200,180 240,140 C280,100 320,40 400,60" fill="none" filter="drop-shadow(0px 0px 8px rgba(245,166,35,0.5))" stroke="#F5A623" strokeWidth="3"></path>

<path className="" d="M0,150 C50,150 80,100 120,110 C160,120 200,180 240,140 C280,100 320,40 400,60 V200 H0 Z" fill="url(#gradient)" opacity="0.2"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#F5A623"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>

<circle cx="120" cy="110" fill="#151518" r="4" stroke="#EF4444" strokeWidth="2"></circle>
<circle className="" cx="240" cy="140" fill="#151518" r="4" stroke="#22C55E" strokeWidth="2"></circle>
</svg>

<div className="absolute top-[30%] left-[60%] bg-[#1C1C21] border border-[#2A2A32] p-3 rounded-lg shadow-xl transform translate-z-10 animate-bounce" style={{animationDuration: '3s'}}>
<div className="text-[10px] text-[#A1A1AA] mb-1">
                  Lucro Realizado
                </div>
<div className="text-sm font-bold text-[#22C55E]">+12.4%</div>
</div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="bg-[#1C1C21] p-3 rounded-lg">
<div className="text-[10px] text-[#A1A1AA]">Risco</div>
<div className="text-sm font-mono text-[#FAFAFA]">Baixo</div>
</div>
<div className="bg-[#1C1C21] p-3 rounded-lg">
<div className="text-[10px] text-[#A1A1AA]">Win Rate</div>
<div className="text-sm font-mono text-[#22C55E]">68%</div>
</div>
<div className="bg-[#1C1C21] p-3 rounded-lg">
<div className="text-[10px] text-[#A1A1AA]">Status</div>
<div className="text-sm font-mono text-[#F5A623]">Ativo</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="overflow-hidden pt-24 pr-6 pb-24 pl-6 relative" id="como-funciona">

<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2A2A32] to-transparent -translate-y-12 z-0"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-[#F5A623] text-sm font-bold tracking-wider uppercase mb-3 block">
            Fluxo Inteligente
          </span>
<h2 className="text-3xl md:text-4xl font-semibold text-[#FAFAFA] mb-6">
            O Coração da Aplicação
          </h2>
<p className="text-[#A1A1AA]">
            Do planejamento à execução, um pipeline transparente e seguro para
            seus investimentos.
          </p>
</div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="group max-w-7xl mx-auto relative perspective-1000 mt-12 mb-12">


<div className="relative transform-style-preserve-3d -rotate-y-6 rotate-x-3 hover:rotate-x-0 hover:rotate-y-0 transition-transform duration-700 ease-out w-full">

<div className="overflow-hidden [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll w-full z-10 border-0 rounded-none pt-0 pr-0 pb-0 pl-0 relative shadow-2xl">


<div className="z-10 grid md:grid-cols-2 gap-6 relative gap-x-6 gap-y-6">

<div className="group spotlight-card overflow-hidden md:p-10 bg-gradient-to-br from-[#121214] to-[#000000]/0 border-white/5 border rounded-[32px] px-8 py-8 relative shadow-2xl transition-all duration-500 hover:border-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]" style={{-MouseX: '173px', -MouseY: '10px'}}>

<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)', zIndex: '1'}}></div>
<div className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.4), transparent 40%)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor', padding: '1px', zIndex: '50'}}></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_100%_100%,black_40%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-sm z-10 relative">
<div className="flex items-center gap-3 mb-4">
<div className="flex text-sm font-bold text-[#F5A623] font-mono bg-[#F5A623]/10 w-8 h-8 border-[#F5A623]/20 border rounded-full items-center justify-center">
                          1
                        </div>
<h3 className="text-2xl font-medium text-white tracking-tight font-geist">
                          Crie uma estratégia
                        </h3>
</div>
<p className="leading-relaxed text-stone-300 font-geist mt-3">
                        Utilize a PeerAlpha.AI para validar centenas de
                        estratégias simultaneamente e identificar qual delas
                        mais se encaixa no seu perfil de investidor.
                      </p>
</div>

<div className="transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-4 group-hover:-translate-x-2 bg-center opacity-90 w-64 h-64 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6f79903e-24e5-42fc-a801-d9faa5fe2ed3_800w.png)] bg-cover absolute right-0 bottom-0 brightness-50 translate-x-12 translate-y-8"></div>
</div>

<div className="group spotlight-card overflow-hidden md:p-10 bg-[#0A0A0A] border-white/5 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative shadow-2xl transition-all duration-500 hover:border-white/10 hover:bg-[#0C0C0E]" style={{-MouseX: '297px', -MouseY: '149px'}}>

<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)', zIndex: '1'}}></div>
<div className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.4), transparent 40%)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor', padding: '1px', zIndex: '50'}}></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_100%_100%,black_40%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-sm z-10 relative">
<div className="flex items-center gap-3 mb-4">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] font-mono text-sm font-bold">
                          2
                        </div>
<h3 className="text-2xl font-medium text-white tracking-tight font-geist">
                          Valide com dados históricos
                        </h3>
</div>
<p className="leading-relaxed text-stone-300 font-geist mt-3">
                        Aqui você responde à pergunta: “Quanto eu teria ganhado
                        se tivesse usado essa estratégia nos últimos anos?” Com
                        a PeerAlpha, você testa sua estratégia usando dados
                        históricos reais, visualizando todos os pontos de compra
                        e venda, com total transparência.
                      </p>
</div>

<div className="transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-x-4 group-hover:-translate-y-4 bg-center group-hover:opacity-60 opacity-40 w-72 h-72 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e40a7744-73db-4b0e-b0bf-02ff9fe63fe6_800w.png)] bg-cover absolute right-0 bottom-0 translate-x-16 translate-y-16"></div>
</div>

<div className="group spotlight-card relative overflow-hidden rounded-[32px] border border-white/5 bg-[#0A0A0A] p-8 md:p-10 shadow-2xl transition-all duration-500 hover:border-white/10 hover:bg-[#0C0C0E]" style={{-MouseX: '48px', -MouseY: '251px'}}>

<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)', zIndex: '1'}}></div>
<div className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.4), transparent 40%)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor', padding: '1px', zIndex: '50'}}></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_100%_100%,black_40%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-sm z-10 relative">
<div className="flex items-center gap-3 mb-4">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] font-mono text-sm font-bold">
                          3
                        </div>
<h3 className="text-2xl font-medium text-white tracking-tight font-geist">
                          Crie seu primeiro BOT simulado
                        </h3>
</div>
<p className="leading-relaxed text-stone-200 font-geist mt-3">
                        Essa etapa é para você ganhar confiança no seu robô.
                        Deixe ele operando 24/7 com dinheiro fictício e, quando
                        se sentir seguro, avance para o próximo nível.
                      </p>
</div>

<div className="transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:-translate-x-2 bg-center w-64 h-64 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2dffafa-4bdc-460e-86d7-8d785d070e6a_800w.png)] bg-cover absolute right-0 bottom-0 shadow-sm brightness-50 translate-x-10 translate-y-10"></div>
</div>

<div className="group spotlight-card overflow-hidden md:p-10 transition-all duration-500 hover:border-white/10 hover:bg-[#0C0C0E] bg-[#0A0A0A] border-white/5 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative shadow-2xl" style={{-MouseX: '296px', -MouseY: '211px'}}>

<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)', zIndex: '1'}}></div>
<div className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.4), transparent 40%)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor', padding: '1px', zIndex: '50'}}></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_100%_100%,black_40%,transparent_100%)] pointer-events-none"></div>
<div className="z-10 max-w-xs relative">
<div className="flex items-center gap-3 mb-4">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] font-mono text-sm font-bold">
                          4
                        </div>
<h3 className="text-2xl font-medium text-white tracking-tight font-geist">
                          Ative seu BOT real
                        </h3>
</div>
<p className="leading-relaxed text-stone-200 font-geist mt-3">
                        Agora que você confia no seu BOT, conecte sua conta real
                        e comece a operar com dinheiro de verdade. Receba
                        notificações e relatórios em tempo real e acompanhe tudo
                        de perto.
                      </p>
</div>

<div className="pointer-events-none overflow-hidden w-full h-full absolute right-0 bottom-0">
<div className="transition-transform duration-700 ease-out group-hover:scale-105 group-hover:translate-x-8 group-hover:translate-y-4 bg-center w-80 h-80 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9080fb95-c916-4098-b901-bc4cbbc956a8_800w.png)] bg-cover absolute right-0 bottom-0 brightness-50 translate-x-16 translate-y-12"></div>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 bg-[#0D0D0F]" id="resultados">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<span className="text-[#22C55E] text-sm font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
<iconify-icon icon="solar:verified-check-bold" width="16"></iconify-icon>
            Resultados Comprovados
          </span>
<h2 className="text-3xl md:text-4xl font-semibold text-[#FAFAFA] tracking-tight">
            Estratégias Validadas
          </h2>
<p className="text-lg text-[#A1A1AA] max-w-xl mt-4" style={{}}>
            Comparativo real de desempenho: BOT PeerAlpha vs. Rentabilidade da
            Moeda vs. Renda Fixa em 2025.
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="relative bg-[#151518] border border-[#2A2A32] rounded-2xl overflow-hidden group hover:border-[#F5A623]/30 transition-all duration-300">
<div className="p-8 pb-0">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="flex bg-center w-16 h-16 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de7daca7-a4a7-4154-bbed-f88d02966e97_320w.png)] bg-cover border-0 rounded-none items-center justify-center"></div>
<div className="">
<h3 className="text-lg font-semibold text-[#FAFAFA]">XRP</h3>
<p className="text-xs text-[#EF4444] font-mono mt-0.5">
                      Mercado: -40% Queda
                    </p>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] text-xs font-medium">
                  Cenário de Baixa
                </span>
</div>
<div className="flex items-end gap-2 mb-8">
<span className="text-5xl font-mono font-medium text-[#22C55E] tracking-tighter">
                  +47%
                </span>
<span className="text-sm text-[#A1A1AA] mb-1.5">Lucro do BOT</span>
</div>

<div className="space-y-4 mb-8">

<div className="relative">
<div className="flex justify-between text-xs mb-1">
<span className="font-semibold text-[#FAFAFA]">
                      Com PeerAlpha
                    </span>
<span className="font-mono text-[#22C55E]">R$ 1.475</span>
</div>
<div className="h-2 w-full bg-[#2A2A32] rounded-full overflow-hidden">
<div className="h-full bg-[#22C55E] w-[100%] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
</div>
</div>

<div className="relative">
<div className="flex justify-between text-xs mb-1">
<span className="text-[#A1A1AA]">Poupança</span>
<span className="font-mono text-[#FAFAFA]">R$ 1.082</span>
</div>
<div className="h-2 w-full bg-[#2A2A32] rounded-full overflow-hidden">
<div className="h-full bg-[#71717A] w-[73%] rounded-full"></div>
</div>
</div>

<div className="relative">
<div className="flex justify-between text-xs mb-1">
<span className="text-[#A1A1AA]">Sem PeerAlpha (Hold)</span>
<span className="font-mono text-[#EF4444]">R$ 600</span>
</div>
<div className="h-2 w-full bg-[#2A2A32] rounded-full overflow-hidden">
<div className="h-full bg-[#EF4444] w-[40%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="bg-center bg-[#111113] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d6dd30f-ee71-4710-a6c3-6aca409d9700_1600w.png)] bg-cover border-[#2A2A32] border-t pt-10 pr-6 pb-6 pl-6">
<div className="aspect-[2/1] border-dashed flex flex-col hover:text-[#71717A] hover:border-[#52525B] transition-colors cursor-pointer group/upload text-[#52525B] w-full border-0 translate-y-6 items-center justify-center"></div>
</div>
</div>

<div className="relative bg-[#151518] border border-[#2A2A32] rounded-2xl overflow-hidden group hover:border-[#3B82F6]/30 transition-all duration-300">
<div className="p-8 pb-0">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="flex w-16 h-16 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef4d8f07-5fc9-44de-881b-a8c63415c646_320w.png)] bg-cover bg-center border-0 rounded-none items-center justify-center"></div>
<div className="">
<h3 className="text-lg font-semibold text-[#FAFAFA]">
                      Ethereum
                    </h3>
<p className="text-xs text-[#22C55E] font-mono mt-0.5">
                      Mercado: +26% Alta
                    </p>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] text-xs font-medium">
                  Cenário de Alta
                </span>
</div>
<div className="flex items-end gap-2 mb-8">
<span className="text-5xl font-mono font-medium text-[#22C55E] tracking-tighter">
                  +43%
                </span>
<span className="text-sm text-[#A1A1AA] mb-1.5">Lucro do BOT</span>
</div>

<div className="space-y-4 mb-8">

<div className="relative">
<div className="flex justify-between text-xs mb-1">
<span className="font-semibold text-[#FAFAFA]">
                      Com PeerAlpha
                    </span>
<span className="font-mono text-[#22C55E]">R$ 1.465</span>
</div>
<div className="h-2 w-full bg-[#2A2A32] rounded-full overflow-hidden">
<div className="h-full bg-[#22C55E] w-[100%] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
</div>
</div>

<div className="relative">
<div className="flex justify-between text-xs mb-1">
<span className="text-[#A1A1AA]">Sem PeerAlpha (Hold)</span>
<span className="font-mono text-[#FAFAFA]">R$ 1.265</span>
</div>
<div className="h-2 w-full bg-[#2A2A32] rounded-full overflow-hidden">
<div className="h-full bg-[#3B82F6] w-[86%] rounded-full opacity-60"></div>
</div>
</div>

<div className="relative">
<div className="flex justify-between text-xs mb-1">
<span className="text-[#A1A1AA]">Poupança</span>
<span className="font-mono text-[#FAFAFA]">R$ 1.082</span>
</div>
<div className="h-2 w-full bg-[#2A2A32] rounded-full overflow-hidden">
<div className="h-full bg-[#71717A] w-[73%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7c9c03d0-a35f-43e1-a321-620fb5e51d14_1600w.png)] bg-cover border-[#2A2A32] border-t pt-10 pr-6 pb-6 pl-6">
<div className="aspect-[2/1] border-dashed flex flex-col hover:text-[#71717A] hover:border-[#52525B] transition-colors cursor-pointer group/upload text-[#52525B] w-full border-0 rounded-lg items-center justify-center"></div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-[#0D0D0F] border-[#2A2A32] border-t pt-24 pb-24 relative" id="ai-power">
<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute inset-0" data-container-bg="true">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="hRFfUymDGOHwtFe7evR2"></div>

</div>
</div>
<div className="blur-[120px] pointer-events-none bg-[#F5A623]/10 w-[600px] h-[600px] rounded-full absolute top-0 right-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-x-16 gap-y-16 items-center">
<div className="space-y-8">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5A623]/10 text-[#F5A623] text-xs font-mono font-bold mb-6 border border-[#F5A623]/20">
<iconify-icon className="" icon="solar:stars-minimalistic-bold" width="14"></iconify-icon>
                ERA DA INTELIGÊNCIA ARTIFICIAL
              </div>
<h2 className="text-4xl md:text-5xl font-semibold text-[#FAFAFA] tracking-tight leading-[1.15]">
                Pare de usar IA apenas para
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#E09000]">
                  tirar dúvidas
                </span>
                .
              </h2>
<p className="text-2xl mt-4 font-medium text-white">
                Use IA para ganhar dinheiro e proteger seu patrimônio.
              </p>
</div>
<p className="text-[#A1A1AA] text-lg leading-relaxed max-w-lg">
              Você não precisa ter conhecimento técnico em criptomoedas e muito
              menos operar um gráfico o dia todo. Use o poder das principais IAs
              do mercado para fazer esse trabalho por você.
            </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<div className="w-14 h-14 rounded-2xl bg-[#151518] border border-[#2A2A32] flex items-center justify-center group-hover:border-[#10A37F] group-hover:shadow-[0_0_15px_rgba(16,163,127,0.2)] transition-all duration-300">
<iconify-icon className="text-[#52525B] group-hover:text-[#10A37F] transition-colors" icon="simple-icons:openai" width="24"></iconify-icon>
</div>
<span className="text-[10px] text-[#52525B] font-mono font-semibold uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  ChatGPT
                </span>
</div>
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<div className="w-14 h-14 rounded-2xl bg-[#151518] border border-[#2A2A32] flex items-center justify-center group-hover:border-[#D97757] group-hover:shadow-[0_0_15px_rgba(217,119,87,0.2)] transition-all duration-300">
<iconify-icon className="text-[#52525B] group-hover:text-[#D97757] transition-colors" icon="simple-icons:anthropic" width="24"></iconify-icon>
</div>
<span className="text-[10px] text-[#52525B] font-mono font-semibold uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  Claude
                </span>
</div>
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<div className="w-14 h-14 rounded-2xl bg-[#151518] border border-[#2A2A32] flex items-center justify-center group-hover:border-[#4285F4] group-hover:shadow-[0_0_15px_rgba(66,133,244,0.2)] transition-all duration-300">
<iconify-icon className="text-[#52525B] group-hover:text-[#4285F4] transition-colors" icon="simple-icons:googlegemini" width="24"></iconify-icon>
</div>
<span className="text-[10px] text-[#52525B] font-mono font-semibold uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  Gemini
                </span>
</div>
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<div className="w-14 h-14 rounded-2xl bg-[#151518] border border-[#2A2A32] flex items-center justify-center group-hover:border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300">
<iconify-icon className="text-[#52525B] group-hover:text-white transition-colors" icon="simple-icons:x" width="22"></iconify-icon>
</div>
<span className="text-[10px] text-[#52525B] font-mono font-semibold uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  Grok
                </span>
</div>
</div>
</div>
<div className="relative perspective-container">
<div className="absolute inset-0 bg-[#F5A623] rounded-full blur-[80px] opacity-20 animate-pulse"></div>
<div className="card-3d relative bg-[#151518] border border-[#2A2A32] rounded-3xl overflow-hidden shadow-2xl">
<div className="px-6 py-4 bg-[#1C1C21] border-b border-[#2A2A32] flex items-center justify-between">
<span className="text-xs font-mono font-bold text-[#A1A1AA] flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
                  PEERALPHA AI CORE
                </span>
<iconify-icon className="text-[#52525B]" icon="solar:settings-minimalistic-bold" width="18"></iconify-icon>
</div>
<div className="pt-6 pr-6 pb-6 pl-6 space-y-4">
<div className="relative overflow-hidden p-4 rounded-xl bg-[#0D0D0F] border border-[#2A2A32]">
<div className="flex items-center gap-4 relative z-10">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
<iconify-icon icon="lucide:globe" width="24"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-semibold text-[#FAFAFA]">
                          Análise de Notícias
                        </span>
<span className="text-[10px] font-mono text-blue-400">
                          PROCESSING
                        </span>
</div>
<div className="w-full bg-[#2A2A32] h-1.5 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[70%] animate-[progress_2s_ease-in-out_infinite]"></div>
</div>
</div>
</div>
</div>
<div className="relative overflow-hidden p-4 rounded-xl bg-[#0D0D0F] border border-[#2A2A32]">
<div className="flex items-center gap-4 relative z-10">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
<iconify-icon icon="lucide:line-chart" width="24"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-semibold text-[#FAFAFA]">
                          Análise Gráfica
                        </span>
<span className="text-[10px] font-mono text-purple-400">
                          REAL-TIME
                        </span>
</div>
<svg className="w-full h-4" preserveaspectratio="none" viewbox="0 0 100 20">
<path className="animate-[draw_2s_linear_infinite]" d="M0,10 Q20,18 40,5 T80,12 T100,2" fill="none" stroke="#A855F7" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div className="relative overflow-hidden p-4 rounded-xl bg-[#0D0D0F] border border-[#F5A623]/30 shadow-[0_0_20px_rgba(245,166,35,0.05)]">
<div className="flex items-center gap-4 relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#F5A623]/10 flex items-center justify-center text-[#F5A623]">
<iconify-icon className="" icon="lucide:brain" width="24"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-semibold text-[#FAFAFA]">
                          Decisão Lógica
                        </span>
<span className="text-[10px] font-bold font-mono text-[#F5A623] px-2 py-0.5 rounded bg-[#F5A623]/10">
                          COMPRA CONFIRMADA
                        </span>
</div>
<div className="text-xs text-[#A1A1AA] mt-1">
                        Confidence Score:
                        <span className="text-[#FAFAFA]">98.4%</span>
</div>
</div>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,166,35,0.05),transparent)] animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<style className="">
        @keyframes progress { 0% { width: 0%; opacity: 0.5; } 50% { width: 100%; opacity: 1; } 100% { width: 0%; opacity: 0.5; } } @keyframes draw { 0% { stroke-dasharray: 100; stroke-dashoffset: 100; } 50% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -100; } }
      </style>
</section>
<section className="py-24 bg-[#0D0D0F] relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F5A623] rounded-full blur-[120px] opacity-5"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#F5A623] text-sm font-bold tracking-wider uppercase mb-3 block">
            Bastidores do Mercado
          </span>
<h2 className="text-3xl md:text-5xl font-semibold text-[#FAFAFA] tracking-tight leading-tight">
            O segredo que todo banco usa para lucrar com o
            <span className="text-[#F5A623]">SEU</span>
            dinheiro
          </h2>
</div>

<div className="grid md:grid-cols-2 gap-8">

<div className="group relative rounded-2xl overflow-hidden border border-[#2A2A32] shadow-2xl bg-[#151518]">
<div className="aspect-video bg-[#1C1C21] relative overflow-hidden">
<img alt="Mercado Financeiro" className="group-hover:scale-105 transition-transform duration-700 bg-center opacity-100 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf84cf2-f406-45ff-821b-66abbcf29e48_1600w.png"/>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-6"></div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-[#2A2A32] shadow-2xl bg-[#151518]">
<div className="aspect-video bg-[#1C1C21] relative overflow-hidden">
<img alt="Trading Algorítmico" className="group-hover:scale-105 transition-transform duration-700 opacity-100 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e6490656-4124-4cf1-83f1-3679ee4d9be6_1600w.png"/>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#0D0D0F] border-t border-[#2A2A32] relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
<h3 className="text-3xl md:text-5xl font-semibold text-[#FAFAFA] leading-tight tracking-tight">
            O PeerAlpha utiliza estratégias bancárias de trading para operar.
          </h3>
<div className="flex flex-col items-center justify-center gap-3">
<p className="text-xl md:text-2xl text-[#A1A1AA] font-medium tracking-tight">
              Se tornando a ferramenta perfeita para pessoas que
            </p>
<div className="h-16 flex items-center justify-center w-full relative overflow-hidden">
<span className="text-2xl md:text-4xl font-bold text-[#F5A623] tracking-tight transition-all duration-500 opacity-100 transform translate-y-0" id="persona-text">
                têm pouco ou nenhum conhecimento
              </span>
</div>
</div>

</div>
</div>
</section>

<section className="py-24 border-t border-[#2A2A32] relative overflow-hidden bg-[#0D0D0F]">

<div className="opacity-[0.03] absolute top-0 right-0 bottom-0 left-0 bg-[#F5A623]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="md:p-16 overflow-hidden bg-[#151518] border-[#2A2A32] border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">

<div className="absolute top-1/2 right-0 md:right-20 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-5 blur-[100px] pointer-events-none bg-[#F5A623]"></div>
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-8 border bg-[#F5A623]/10 text-[#F5A623] border-[#F5A623]/20">
<iconify-icon icon="solar:shield-check-bold" width="14"></iconify-icon>
                INFRAESTRUTURA BLINDADA
              </div>
<h2 className="text-3xl md:text-5xl font-semibold text-[#FAFAFA] mb-6 tracking-tight">
                Segurança acima de tudo
              </h2>
<p className="text-[#A1A1AA] text-lg leading-relaxed mb-10">
                A PeerAlpha utiliza a maior exchange de criptomoedas do MUNDO
                para operar os BOTs, tornando um processo seguro e
                <span className="text-[#FAFAFA] font-medium border-b border-[#F5A623]">
                  TRANSPARENTE
                </span>
                !
              </p>

<div className="grid sm:grid-cols-1 gap-6">
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-[#1C1C21] border border-[#2A2A32] flex items-center justify-center shrink-0 text-[#F5A623]">
<iconify-icon className="" icon="solar:lock-password-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-[#FAFAFA] font-medium text-lg">
                      Custódia na sua conta
                    </h4>
<p className="text-sm text-[#71717A] mt-1">
                      Seu capital nunca sai da sua corretora. Nós apenas
                      enviamos os sinais.
                    </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-[#1C1C21] border border-[#2A2A32] flex items-center justify-center shrink-0 text-[#F5A623]">
<iconify-icon icon="solar:key-minimalistic-square-3-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-[#FAFAFA] font-medium text-lg">
                      Conexão via API Criptografada
                    </h4>
<p className="text-sm text-[#71717A] mt-1">
                      Execução de ordens rápida sem permissão de saque ou
                      transferência.
                    </p>
</div>
</div>
</div>
</div>

<div className="relative flex items-center justify-center perspective-container">

<div className="card-3d relative z-10 bg-[#1C1C21] border border-[#2A2A32] rounded-2xl p-10 shadow-2xl flex flex-col items-center gap-6 w-full max-w-sm transition-colors duration-500 group hover:border-[#F5A623]/50">
<div className="w-20 h-20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform bg-[#F5A623]/10">
<iconify-icon className="text-[#F5A623]" icon="simple-icons:binance" width="48"></iconify-icon>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-[#FAFAFA]">Binance</div>
<div className="text-sm text-[#52525B] mt-1">
                    Parceiro Oficial de Liquidez
                  </div>
</div>
<div className="w-full h-px bg-[#2A2A32]"></div>
<div className="flex items-center justify-between w-full px-4">
<div className="flex items-center gap-2 text-xs font-mono text-[#52525B]">
<span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
                    API CONECTADA
                  </div>
<iconify-icon className="text-[#52525B]" icon="solar:link-circle-linear" width="20"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#F5A623_0,#F5A623_1px,transparent_0,transparent_50%)] opacity-[0.03] bg-[length:10px_10px] rounded-full blur-xl"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0D0D0F] relative overflow-hidden" id="pricing">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-[#FAFAFA] tracking-tight mb-4">
            Planos simples e transparentes
          </h2>
<p className="text-lg text-[#A1A1AA]">
            Escolha o plano ideal para seus objetivos
          </p>
</div>
<div className="relative overflow-hidden rounded-3xl border border-[#2A2A32] bg-[#151518] shadow-2xl">

<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[100px] bg-[#F5A623]/10"></div>
<div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#22C55E]/5 blur-[100px]"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

<div className="p-8 md:p-12 flex flex-col">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#FAFAFA]">
                Faça como
                <span className="text-[#F5A623]">+2.000 traders</span>
</h2>
<p className="mt-4 text-lg text-[#A1A1AA]">
                Crie
                <span className="text-[#2A2A32]">→</span>
                Teste
                <span className="text-[#2A2A32]">→</span>
                Valide
                <span className="text-[#2A2A32]">→</span>
<span className="text-[#22C55E] font-bold">Lucre</span>
</p>

<div className="mt-10 space-y-4">

<button className="plan-select-btn group w-full text-left rounded-xl p-5 border hover:border-[#F5A623]/50 hover:bg-[#F5A623]/5 transition-all duration-300 relative overflow-hidden border-[#F5A623] bg-[#F5A623]/5" data-plan-select="gold">
<div className="flex items-center justify-between relative z-10">
<div className="flex items-center gap-4">
<img alt="Gold Plan" className="w-16 h-16 object-cover border-0 rounded-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7bd8c27a-aa92-4141-ad2a-fecefda7fe19_320w.png"/>
<div className="">
<p className="text-lg font-semibold text-[#FAFAFA]">Gold</p>
<p className="text-xs text-[#A1A1AA] mt-1 uppercase tracking-wider">
                          Ideal para iniciantes
                        </p>
</div>
</div>
<div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-[#F5A623] group-hover:text-[#0D0D0F] transition-colors bg-[#F5A623] text-[#0D0D0F]">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</div>
</div>
</button>

<button className="plan-select-btn group w-full text-left rounded-xl p-5 border border-[#2A2A32] bg-[#1C1C21] hover:border-[#F5A623]/50 hover:bg-[#F5A623]/5 transition-all duration-300 relative overflow-hidden" data-plan-select="diamond">
<div className="flex items-center justify-between relative z-10">
<div className="flex items-center gap-4 pr-4">
<img alt="Diamond Plan" className="w-16 h-16 object-cover border-0 rounded-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2dcc95d-cb0d-465b-87ec-66cf5e01eff7_320w.png"/>
<div className="">
<p className="text-lg font-semibold text-[#FAFAFA]">
                          Diamond
                        </p>
<p className="uppercase leading-relaxed text-xs text-[#A1A1AA] tracking-wider mt-1">
                          Para traders que operam diversos bots simultaneamente
                        </p>
</div>
</div>
<div className="w-8 h-8 shrink-0 rounded-full bg-[#2A2A32] flex items-center justify-center text-[#A1A1AA] group-hover:bg-[#F5A623] group-hover:text-[#0D0D0F] transition-colors">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</div>
</div>
</button>
</div>
</div>

<div className="p-8 md:p-12 bg-[#0D0D0F]/50 border-t lg:border-t-0 lg:border-l border-[#2A2A32] flex flex-col">

<div className="flex flex-col gap-6 h-full">
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-2xl font-bold text-[#FAFAFA]" id="planName">
                      Gold
                    </h3>
<p className="text-xs text-[#F5A623] uppercase tracking-wider font-bold mt-2" id="planTagline">
                      PARA QUEM ESTÁ COMEÇANDO
                    </p>
</div>
<div className="text-right">
<div className="text-sm text-[#A1A1AA]/60 line-through mb-0.5" id="planOriginalPrice">
                      R$ 97
                    </div>
<div className="flex items-end gap-1 justify-end">
<span className="text-sm text-[#A1A1AA] mb-2">R$</span>
<span className="text-5xl font-mono font-bold text-[#FAFAFA]" id="planPrice">
                        49,90
                      </span>
</div>
<span className="text-xs text-[#52525B]">/mês</span>
</div>
</div>
<div className="w-full h-px bg-[#2A2A32]"></div>
<ul className="space-y-4 text-sm text-[#A1A1AA] flex-1" id="featureList">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5A623] mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span className="text-[#FAFAFA]">10 Estratégias</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5A623] mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span className="text-[#FAFAFA]">3 Bots Ativos</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5A623] mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span className="text-[#FAFAFA]">50 Backtests/mês</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5A623] mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span className="text-[#FAFAFA]">3 Gerações IA/mês</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5A623] mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span className="text-[#FAFAFA]">Trading real com Binance</span>
</li>
</ul>
<a className="w-full py-4 rounded-xl bg-[#F5A623] hover:bg-[#FFB84D] active:bg-[#E09000] text-[#0D0D0F] font-bold text-center transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(245,166,35,0.2)]" href="#" id="ctaBtn">
                  Assinar Gold
                </a>
</div>
</div>
</div>
</div>
<div className="mt-12 relative overflow-hidden rounded-2xl border border-[#F5A623]/20 bg-gradient-to-b from-[#151518] to-[#0D0D0F] p-8 md:p-12 text-center group hover:border-[#F5A623]/40 transition-colors duration-500">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#F5A623] to-transparent shadow-[0_0_15px_#F5A623]"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center text-[#F5A623] mb-6 border border-[#F5A623]/20 shadow-[0_0_30px_rgba(245,166,35,0.1)] group-hover:scale-110 transition-transform duration-500 rotate-3">
<iconify-icon icon="solar:verified-check-bold" width="40"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold text-[#FAFAFA] mb-4 tracking-tight">
              Garantia 30 Dias PeerAlpha
            </h3>
<p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto leading-relaxed">
              Confiamos tanto em nossa Inteligência artificial, que se você não
              recuperar o valor da assinatura
              <span className="text-[#22C55E] font-semibold bg-[#22C55E]/10 px-2 py-0.5 rounded">
                (com LUCRO)
              </span>
              em 30 dias, nós devolvemos 100% do seu dinheiro, sem burocracias e
              100% transparente.
            </p>
<div className="mt-8 flex items-center gap-2 text-[10px] text-[#52525B] font-mono uppercase tracking-wider bg-[#1C1C21] px-3 py-1.5 rounded-full border border-[#2A2A32]">
<iconify-icon icon="solar:document-text-linear" width="12"></iconify-icon>
              *sujeito aos termos
            </div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F5A623] rounded-full blur-[120px] opacity-[0.03] pointer-events-none"></div>
</div>
</div>

</section>
<section className="py-24 bg-[#0D0D0F] border-t border-[#2A2A32] relative overflow-hidden">
<div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#F5A623] rounded-full blur-[150px] opacity-[0.04] pointer-events-none -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-6 border bg-[#F5A623]/10 text-[#F5A623] border-[#F5A623]/20">
<iconify-icon icon="solar:cup-star-bold" width="14"></iconify-icon>
              RECOMPENSAS EXCLUSIVAS
            </div>
<h2 className="text-4xl md:text-5xl font-semibold text-[#FAFAFA] mb-6 tracking-tight leading-tight">
              Receba prêmios e recompensas em
              <span className="text-[#F5A623]">sua casa</span>
</h2>
<p className="text-[#A1A1AA] text-lg leading-relaxed mb-8">
              Junte-se a milhares de pessoas e receba placas de incentivo e
              lucro comprovado. Na PeerAlpha, seus resultados digitais se
              transformam em marcos reais que você pode expor com orgulho.
            </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#F5A623]" icon="solar:verified-check-bold" width="20"></iconify-icon>
<span className="text-[#FAFAFA]">
                  Placas de metal premium personalizadas
                </span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#F5A623]" icon="solar:verified-check-bold" width="20"></iconify-icon>
<span className="text-[#FAFAFA]">
                  Reconhecimento exclusivo por milestones de lucro
                </span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#F5A623]" icon="solar:verified-check-bold" width="20"></iconify-icon>
<span className="text-[#FAFAFA]">
                  Envio gratuito para membros qualificados
                </span>
</li>
</ul>
<button className="px-8 py-4 rounded-xl bg-[#F5A623] hover:bg-[#FFB84D] active:bg-[#E09000] text-[#0D0D0F] font-semibold transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(245,166,35,0.2)] flex items-center gap-2">
<iconify-icon icon="solar:flag-bold" width="20"></iconify-icon>
              Quero minha Placa
            </button>
</div>
<div className="order-1 lg:order-2 flex justify-center perspective-container">
<div className="card-3d relative w-full max-w-[450px] aspect-square bg-[#08080A] rounded-2xl border border-[#2A2A32] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] flex items-center justify-center p-4 transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 group">
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0dfdcf7-d908-4b60-9993-a35bfca91d58_1600w.png)] bg-cover bg-center rounded-lg absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#F5A623] blur-[120px] opacity-20 -z-10"></div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#0D0D0F] border-t border-[#2A2A32] relative overflow-hidden" id="roadmap">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F5A623] rounded-full blur-[150px] opacity-[0.03] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#F5A623] text-sm font-bold tracking-wider uppercase mb-3 block">
            Próximos Passos
          </span>
<h2 className="text-3xl md:text-5xl font-semibold text-[#FAFAFA] tracking-tight mb-6">
            Roadmap 2026
          </h2>
<p className="text-lg text-[#A1A1AA]">
            O futuro da PeerAlpha está sendo construído agora. Veja o que vem
            por aí.
          </p>
</div>
<div className="max-w-4xl mx-auto relative">

<div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-[#2A2A32] -translate-x-1/2"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-center gap-8 group">
<div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#151518] border border-[#F5A623] shadow-[0_0_15px_rgba(245,166,35,0.3)] flex items-center justify-center z-10">
<div className="w-3 h-3 rounded-full bg-[#F5A623]"></div>
</div>
<div className="md:w-1/2 md:text-right md:pr-16 pl-16 md:pl-0 w-full">
<div className="inline-flex items-center gap-2 mb-2 md:justify-end">
<span className="text-[#F5A623] font-mono font-bold text-sm">
                    MARÇO
                  </span>
</div>
<h3 className="text-xl font-semibold text-[#FAFAFA]">
                  Marketplace de Robôs
                </h3>
<p className="text-[#A1A1AA] mt-2">
                  Plataforma para compartilhamento e venda de estratégias
                  automatizadas.
                </p>
</div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 group">
<div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#151518] border border-[#2A2A32] group-hover:border-[#F5A623] transition-colors flex items-center justify-center z-10">
<div className="w-3 h-3 rounded-full bg-[#52525B] group-hover:bg-[#F5A623] transition-colors"></div>
</div>
<div className="hidden md:block md:w-1/2"></div>
<div className="md:w-1/2 md:pl-16 pl-16 w-full text-left">
<div className="inline-flex items-center gap-2 mb-2">
<span className="text-[#A1A1AA] group-hover:text-[#F5A623] transition-colors font-mono font-bold text-sm">
                    JUNHO
                  </span>
</div>
<h3 className="text-xl font-semibold text-[#FAFAFA]">
                  PeerAlphaCoin
                </h3>
<p className="text-[#A1A1AA] mt-2">
                  Lançamento oficial do token de governança e utilidade do
                  ecossistema.
                </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 group">
<div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#151518] border border-[#2A2A32] group-hover:border-[#F5A623] transition-colors flex items-center justify-center z-10">
<div className="w-3 h-3 rounded-full bg-[#52525B] group-hover:bg-[#F5A623] transition-colors"></div>
</div>
<div className="md:w-1/2 md:text-right md:pr-16 pl-16 md:pl-0 w-full">
<div className="inline-flex items-center gap-2 mb-2 md:justify-end">
<span className="text-[#A1A1AA] group-hover:text-[#F5A623] transition-colors font-mono font-bold text-sm">
                    AGOSTO
                  </span>
</div>
<h3 className="text-xl font-semibold text-[#FAFAFA]">
                  Expansão Internacional
                </h3>
<p className="text-[#A1A1AA] mt-2">
                  Inauguração das operações nos EUA e início das operações
                  globais.
                </p>
</div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 group">
<div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#151518] border border-[#2A2A32] group-hover:border-[#F5A623] transition-colors flex items-center justify-center z-10">
<div className="w-3 h-3 rounded-full bg-[#52525B] group-hover:bg-[#F5A623] transition-colors"></div>
</div>
<div className="hidden md:block md:w-1/2"></div>
<div className="md:w-1/2 md:pl-16 pl-16 w-full text-left">
<div className="inline-flex items-center gap-2 mb-2">
<span className="text-[#A1A1AA] group-hover:text-[#F5A623] transition-colors font-mono font-bold text-sm">
                    OUTUBRO
                  </span>
</div>
<h3 className="text-xl font-semibold text-[#FAFAFA]">
                  Evento Presencial
                </h3>
<p className="text-[#A1A1AA] mt-2">
                  Networking exclusivo para usuários PeerAlpha.
                </p>
</div>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#F5A623] hover:bg-[#FFB84D] active:bg-[#E09000] text-[#0D0D0F] font-semibold text-lg transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(245,166,35,0.2)] gap-2 group" href="#">
<span className="">Quero garantir meu acesso antecipado</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#0D0D0F] border-t border-[#2A2A32] relative overflow-hidden" id="suporte">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="bg-[#151518] rounded-3xl border border-[#2A2A32] p-8 md:p-16 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F5A623]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold border bg-[#F5A623]/10 text-[#F5A623] border-[#F5A623]/20">
<iconify-icon icon="solar:headset-bold" width="14"></iconify-icon>
                SUPORTE PREMIUM
              </div>
<h2 className="text-3xl md:text-5xl font-semibold text-[#FAFAFA] tracking-tight leading-tight">
                Tenha um suporte dedicado para você
              </h2>
<p className="text-lg text-[#A1A1AA] leading-relaxed">
                Tire suas dúvidas sobre a plataforma PeerAlpha e criptomoeda.
                Ajudamos você com suas dúvidas e inseguranças em relação ao
                mercado... temos orgulho de dizer que temos uma equipe
                extremamente solícita e acolhedora!
              </p>
<div className="pt-4 space-y-6">
<p className="text-[#FAFAFA] font-medium text-xl flex items-center gap-2">
                  Venha fazer parte!
                </p>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#F5A623] hover:bg-[#FFB84D] active:bg-[#E09000] text-[#0D0D0F] font-semibold text-lg transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(245,166,35,0.2)]" href="#">
                  Criar meu robô lucrativo
                </a>
</div>
</div>

<div className="relative">

<div className="relative z-10 flex flex-col gap-4 max-w-md mx-auto">

<div className="bg-[#1C1C21] border border-[#2A2A32] rounded-2xl rounded-tl-none p-5 self-start max-w-[90%] shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-[#F5A623] flex items-center justify-center text-[#0D0D0F] text-[10px] font-bold">
<iconify-icon icon="solar:user-bold" width="12"></iconify-icon>
</div>
<span className="text-xs text-[#A1A1AA] font-mono">
                      Equipe PeerAlpha
                    </span>
</div>
<p className="text-sm text-[#FAFAFA] leading-relaxed">
                    Olá! Como posso ajudar você a configurar sua primeira
                    estratégia hoje?
                  </p>
</div>

<div className="bg-[#F5A623] text-[#0D0D0F] rounded-2xl rounded-tr-none p-5 self-end max-w-[90%] shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
<p className="text-sm font-semibold leading-relaxed">
                    Tenho insegurança sobre o momento do mercado...
                  </p>
</div>

<div className="bg-[#1C1C21] border border-[#2A2A32] rounded-2xl rounded-tl-none p-5 self-start max-w-[90%] shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-[#F5A623] flex items-center justify-center text-[#0D0D0F] text-[10px] font-bold">
<iconify-icon className="" icon="solar:user-bold" width="12"></iconify-icon>
</div>
<span className="text-xs text-[#A1A1AA] font-mono">
                      Equipe PeerAlpha
                    </span>
</div>
<p className="text-sm text-[#FAFAFA] leading-relaxed">
                    Fique tranquilo! Nossa equipe e nossa IA estão aqui para
                    guiar você em cada passo, minimizando riscos.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="border-t border-[#2A2A32] bg-[#0D0D0F] pt-12 pb-8">
<div className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="overflow-hidden shrink-0 w-10 h-10 rounded-lg relative">
<img alt="PeerAlpha Logo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2624f4e0-1b35-44b5-a46e-50c3444b27be_320w.png"/>
</div>
<span className="group-hover:text-[#F5A623] transition-colors text-lg font-semibold text-[#FAFAFA] tracking-tight font-sans" style={{}}>
            PeerAlpha
          </span>
</a>
<p className="text-xs text-[#52525B] font-mono">
          © 2026 PeerAlpha AI. Todos os direitos reservados.
        </p>
</div>
</footer>



    </>
  );
}
