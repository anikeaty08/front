import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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



        // Initialize Lucide Icons
        lucide.createIcons();

        const titles = ["Dados Pessoais", "Sobre o Vídeo", "Detalhes Extras", "Resumo Final"];

        function toggleOutro(fieldId) {
            const select = document.getElementById(fieldId);
            const outroInput = document.getElementById(fieldId + '-outro');
            if(select.value === 'outro') {
                outroInput.classList.remove('hidden');
                outroInput.required = true;
            } else {
                outroInput.classList.add('hidden');
                outroInput.required = false;
            }
        }

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        function validateAndNext(currentStep) {
            let isValid = true;

            document.querySelectorAll('[id^="err-"]').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('input, select').forEach(el => el.classList.remove('border-red-500'));

            if (currentStep === 1) {
                const nome = document.getElementById('nome');
                const email = document.getElementById('email');
                const wpp = document.getElementById('whatsapp');

                if (nome.value.trim().length < 2) {
                    document.getElementById('err-nome').classList.remove('hidden');
                    nome.classList.add('border-red-500');
                    isValid = false;
                }
                if (!validateEmail(email.value)) {
                    document.getElementById('err-email').classList.remove('hidden');
                    email.classList.add('border-red-500');
                    isValid = false;
                }
                if (wpp.value.trim().length < 8) {
                    document.getElementById('err-whatsapp').classList.remove('hidden');
                    wpp.classList.add('border-red-500');
                    isValid = false;
                }
            }

            if (currentStep === 2) {
                const ocasiao = document.getElementById('ocasiao');
                const clima = document.getElementById('clima');
                const destinatario = document.getElementById('destinatario');

                if (!ocasiao.value) {
                    document.getElementById('err-ocasiao').classList.remove('hidden');
                    ocasiao.classList.add('border-red-500');
                    isValid = false;
                }
                if (!clima.value) {
                    document.getElementById('err-clima').classList.remove('hidden');
                    clima.classList.add('border-red-500');
                    isValid = false;
                }
                if (destinatario.value.trim().length < 2) {
                    document.getElementById('err-destinatario').classList.remove('hidden');
                    destinatario.classList.add('border-red-500');
                    isValid = false;
                }
            }

            if (isValid) {
                if(currentStep === 3) populateSummary();
                goToStep(currentStep + 1);
            }
        }

        function goToStep(step) {
            for(let i=1; i<=4; i++) {
                document.getElementById('step-'+i).classList.add('hidden');
                const prog = document.getElementById('prog-'+i);
                if(i <= step) {
                    prog.classList.remove('bg-[#284239]/10');
                    prog.classList.add('bg-[#284239]');
                } else {
                    prog.classList.remove('bg-[#284239]');
                    prog.classList.add('bg-[#284239]/10');
                }
            }
            document.getElementById('step-'+step).classList.remove('hidden');
            
            document.getElementById('step-title-display').innerText = titles[step-1];
            document.getElementById('step-count-display').innerText = `Passo ${step} de 4`;
            
            if(window.innerWidth < 1024) {
                document.getElementById('pedido').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        function populateSummary() {
            let ocasiaoVal = document.getElementById('ocasiao').value;
            if(ocasiaoVal === 'outro') ocasiaoVal = document.getElementById('ocasiao-outro').value;
            
            let climaVal = document.getElementById('clima').value;
            if(climaVal === 'outro') climaVal = document.getElementById('clima-outro').value;

            const destVal = document.getElementById('destinatario').value;
            const wppVal = document.getElementById('whatsapp').value;

            document.getElementById('resumo-destinatario').innerText = destVal;
            document.getElementById('resumo-ocasiao').innerText = ocasiaoVal || '-';
            document.getElementById('resumo-clima').innerText = climaVal || '-';
            document.getElementById('resumo-contato').innerText = wppVal;
        }

        function processPayment() {
            const btn = event.currentTarget;
            const originalText = btn.innerHTML;
            btn.innerHTML = `<i data-lucide="loader-2" stroke-width="1.5" class="w-5 h-5 animate-spin"></i> Processando...`;
            lucide.createIcons();
            btn.classList.add('opacity-80', 'cursor-not-allowed');
            btn.classList.remove('hover:scale-[1.02]');
            
            setTimeout(() => {
                alert("Redirecionamento para o gateway de pagamento aconteceria aqui.");
                btn.innerHTML = originalText;
                btn.classList.remove('opacity-80', 'cursor-not-allowed');
                btn.classList.add('hover:scale-[1.02]');
                lucide.createIcons();
            }, 1500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="w-full z-50 absolute top-0 left-0">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">

<nav className="hidden lg:flex items-center gap-8 text-base font-light text-white/90">
<a className="hover:text-white transition-colors" href="#como-funciona">Como Funciona</a>
<a className="hover:text-white transition-colors" href="#exemplos">Exemplos</a>
<a className="hover:text-white transition-colors" href="#depoimentos">Depoimentos</a>
</nav>

<div className="flex items-center gap-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="font-serif text-3xl tracking-tight">VidAI</span>
</div>

<div className="flex items-center gap-6 text-base font-light text-white/90">
<a className="hidden md:flex items-center gap-2 hover:text-white transition-colors" href="#pedido">
<i className="w-5 h-5" data-lucide="video" strokeWidth="1.5"></i>
                    Criar
                </a>
<a className="hover:text-white transition-colors" href="#pedido">Painel (0)</a>
</div>
</div>
</header>
<main className="flex-grow flex flex-col pt-24">

<section className="relative max-w-[90rem] mx-auto w-full px-6 lg:px-12 pt-12 pb-32 lg:py-24 flex flex-col lg:flex-row items-center min-h-[85vh]">

<div className="w-full lg:w-[55%] z-20 flex flex-col justify-center mt-10 lg:mt-0">
<h1 className="font-serif text-6xl md:text-[5.5rem] lg:text-[6.5rem] leading-[1.05] tracking-tighter font-normal text-[#FDFCF8] mb-8 max-w-2xl">
                    Surpreenda<br/>quem você<br/>ama.
                </h1>
<p className="text-lg lg:text-xl font-light text-white/80 max-w-lg mb-12 leading-relaxed">
                    Esqueça as mensagens de texto chatas. Crie vídeos curtos, personalizados e divertidos para qualquer ocasião. Você escolhe o tema, a IA cria a mágica, e entregamos no seu celular.
                </p>
<a className="bg-[#F4DABF] text-[#284239] text-base lg:text-lg font-normal rounded-full px-8 py-4 w-max hover:bg-[#ebd0b5] transition-transform hover:scale-[1.02] flex items-center gap-3" href="#pedido">
                    Gerar Vídeo Agora
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="w-full lg:w-[45%] z-20 flex justify-center lg:justify-end mt-16 lg:mt-0 relative perspective-1000">
<div className="bg-[#FDFCF8] text-[#284239] p-6 lg:p-8 rounded-[2rem] w-full max-w-sm shadow-[0_30px_60px_rgba(0,0,0,0.4)] lg:rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
<div className="aspect-[3/4] bg-gray-200 rounded-2xl mb-6 relative overflow-hidden group">
<img alt="Exemplo" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517404215738-15263e9f9178?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=800"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
<div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
<i className="w-8 h-8 ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
</div>
<h3 className="font-serif text-3xl tracking-tight mb-3">Vídeo Surpresa</h3>
<p className="text-base font-light mb-8 text-[#284239]/80 leading-relaxed">Um presente inesquecível e divertido gerado por inteligência artificial.*</p>
<div className="flex justify-between items-center bg-[#284239] text-[#FDFCF8] p-2 pl-6 rounded-2xl">
<span className="text-lg font-normal tracking-tight">R$ 29,90</span>
<a className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors" href="#pedido">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 overflow-hidden pointer-events-none flex justify-center z-0 translate-y-1/3 opacity-40 mix-blend-overlay">
<span className="font-serif text-[40vw] text-[#FDFCF8] tracking-tighter leading-none select-none">VidAI</span>
</div>
</section>

<section className="max-w-[90rem] mx-auto w-full px-6 lg:px-12 py-24 relative z-10" id="como-funciona">
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-16 text-center">Como funciona</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="bg-[#FDFCF8] text-[#284239] p-8 lg:p-10 rounded-[2rem] flex flex-col items-center text-center shadow-xl">
<div className="w-16 h-16 rounded-full bg-[#314F44]/5 flex items-center justify-center mb-6">
<i className="w-8 h-8 text-[#284239]" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-4">1. Preencha os dados</h3>
<p className="text-base font-light text-[#284239]/80 leading-relaxed">Nos conte a ocasião, o clima do vídeo e alguns detalhes sobre quem vai receber a surpresa.</p>
</div>

<div className="bg-[#FDFCF8] text-[#284239] p-8 lg:p-10 rounded-[2rem] flex flex-col items-center text-center shadow-xl">
<div className="w-16 h-16 rounded-full bg-[#314F44]/5 flex items-center justify-center mb-6">
<i className="w-8 h-8 text-[#284239]" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-4">2. Pagamento Seguro</h3>
<p className="text-base font-light text-[#284239]/80 leading-relaxed">Faça o pagamento único de R$ 29,90 através do nosso sistema seguro via PIX ou Cartão.</p>
</div>

<div className="bg-[#FDFCF8] text-[#284239] p-8 lg:p-10 rounded-[2rem] flex flex-col items-center text-center shadow-xl">
<div className="w-16 h-16 rounded-full bg-[#314F44]/5 flex items-center justify-center mb-6">
<i className="w-8 h-8 text-[#284239]" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-4">3. Receba no WhatsApp</h3>
<p className="text-base font-light text-[#284239]/80 leading-relaxed">Em até 24 horas, o vídeo finalizado em alta qualidade (9:16) chega direto no seu celular.</p>
</div>
</div>
</section>

<section className="max-w-[90rem] mx-auto w-full px-6 lg:px-12 py-24 border-t border-white/10 relative z-10" id="exemplos">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-4">Coleção de Momentos</h2>
<p className="text-lg font-light text-white/80">Explore alguns dos estilos mais pedidos criados pela nossa inteligência artificial.</p>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="flex overflow-x-auto hide-scrollbar gap-8 pb-8 snap-x snap-mandatory">

<div className="snap-center shrink-0 w-72 lg:w-80 bg-[#FDFCF8] rounded-[2rem] p-4 relative overflow-hidden group shadow-lg">
<div className="aspect-[9/16] bg-gray-200 rounded-2xl relative overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1517404215738-15263e9f9178?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=700"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
<i className="w-6 h-6 ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="pt-6 pb-2 px-2 text-[#284239] text-center">
<p className="font-serif text-2xl tracking-tight">Aniversário</p>
</div>
</div>

<div className="snap-center shrink-0 w-72 lg:w-80 bg-[#FDFCF8] rounded-[2rem] p-4 relative overflow-hidden group shadow-lg">
<div className="aspect-[9/16] bg-gray-200 rounded-2xl relative overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=700"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
<i className="w-6 h-6 ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="pt-6 pb-2 px-2 text-[#284239] text-center">
<p className="font-serif text-2xl tracking-tight">Romântico</p>
</div>
</div>

<div className="snap-center shrink-0 w-72 lg:w-80 bg-[#FDFCF8] rounded-[2rem] p-4 relative overflow-hidden group shadow-lg">
<div className="aspect-[9/16] bg-gray-200 rounded-2xl relative overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=700"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
<i className="w-6 h-6 ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="pt-6 pb-2 px-2 text-[#284239] text-center">
<p className="font-serif text-2xl tracking-tight">Desculpas</p>
</div>
</div>
</div>
</section>

<section className="max-w-[90rem] mx-auto w-full px-6 lg:px-12 py-24 relative z-10" id="depoimentos">
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-16 text-center">Experiências Reais</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
<div className="bg-[#FDFCF8] text-[#284239] p-10 rounded-[2rem] shadow-xl relative">
<i className="w-12 h-12 text-[#314F44]/10 absolute top-8 right-8" data-lucide="quote" strokeWidth="1.5"></i>
<div className="flex items-center gap-1 text-[#284239] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg font-light leading-relaxed mb-8">"Pedi um vídeo para o aniversário de 50 anos da minha mãe. Ela chorou de rir! Foi muito elegante, fácil de fazer e chegou no WhatsApp no mesmo dia com uma qualidade impecável."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=1"/>
</div>
<p className="text-base font-normal tracking-tight">Camila Oliveira</p>
</div>
</div>
<div className="bg-[#FDFCF8] text-[#284239] p-10 rounded-[2rem] shadow-xl relative">
<i className="w-12 h-12 text-[#314F44]/10 absolute top-8 right-8" data-lucide="quote" strokeWidth="1.5"></i>
<div className="flex items-center gap-1 text-[#284239] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg font-light leading-relaxed mb-8">"Usei para mandar um pedido de desculpas para minha namorada com uma vibe divertida. Salvou meu relacionamento! O cuidado nos detalhes impressiona."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=2"/>
</div>
<p className="text-base font-normal tracking-tight">Rafael Souza</p>
</div>
</div>
</div>
</section>

<section className="w-full px-6 py-24 scroll-mt-24 relative z-10 flex justify-center" id="pedido">
<div className="bg-[#FDFCF8] text-[#284239] rounded-[2.5rem] p-8 md:p-14 w-full max-w-2xl shadow-2xl">

<div className="mb-12">
<div className="flex justify-between items-end mb-4">
<h2 className="font-serif text-3xl tracking-tight" id="step-title-display">Dados Pessoais</h2>
<span className="text-sm font-light text-[#284239]/60" id="step-count-display">Passo 1 de 4</span>
</div>
<div className="flex gap-2">
<div className="h-1 flex-1 rounded-full bg-[#284239] transition-colors duration-500" id="prog-1"></div>
<div className="h-1 flex-1 rounded-full bg-[#284239]/10 transition-colors duration-500" id="prog-2"></div>
<div className="h-1 flex-1 rounded-full bg-[#284239]/10 transition-colors duration-500" id="prog-3"></div>
<div className="h-1 flex-1 rounded-full bg-[#284239]/10 transition-colors duration-500" id="prog-4"></div>
</div>
</div>
<form className="text-base" id="order-form" onsubmit="event.preventDefault();">

<div className="space-y-8 animate-[fadeIn_0.5s_ease-out]" id="step-1">
<p className="text-base font-light text-[#284239]/70 leading-relaxed">Precisamos de algumas informações essenciais para enviar o seu vídeo finalizado.</p>
<div className="space-y-6">
<div className="relative">
<label className="block text-sm font-light text-[#284239]/70 mb-2" htmlFor="nome">Seu nome completo</label>
<input className="w-full bg-transparent border-b border-[#284239]/20 text-lg px-0 py-3 outline-none focus:border-[#284239] transition-colors placeholder:text-[#284239]/30 font-light" id="nome" minlength="2" placeholder="Maria Silva" required="" type="text"/>
<span className="text-red-500 text-sm mt-2 hidden absolute -bottom-6" id="err-nome">Preencha um nome válido.</span>
</div>
<div className="relative pt-2">
<label className="block text-sm font-light text-[#284239]/70 mb-2" htmlFor="email">Seu endereço de e-mail</label>
<input className="w-full bg-transparent border-b border-[#284239]/20 text-lg px-0 py-3 outline-none focus:border-[#284239] transition-colors placeholder:text-[#284239]/30 font-light" id="email" placeholder="maria@exemplo.com" required="" type="email"/>
<span className="text-red-500 text-sm mt-2 hidden absolute -bottom-6" id="err-email">E-mail inválido.</span>
</div>
<div className="relative pt-2">
<label className="block text-sm font-light text-[#284239]/70 mb-2" htmlFor="whatsapp">Seu WhatsApp (com DDD)</label>
<input className="w-full bg-transparent border-b border-[#284239]/20 text-lg px-0 py-3 outline-none focus:border-[#284239] transition-colors placeholder:text-[#284239]/30 font-light" id="whatsapp" placeholder="(11) 90000-0000" required="" type="tel"/>
<span className="text-red-500 text-sm mt-2 hidden absolute -bottom-6" id="err-whatsapp">Número inválido.</span>
</div>
<label className="flex items-start gap-4 relative cursor-pointer group pt-8">
<input className="peer sr-only" id="marketing" type="checkbox"/>
<div className="w-5 h-5 rounded border border-[#284239]/30 peer-checked:bg-[#284239] peer-checked:border-[#284239] flex items-center justify-center transition-all mt-0.5 group-hover:border-[#284239]">
<i className="text-[#FDFCF8] w-3 h-3 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-sm font-light text-[#284239]/80 leading-relaxed">Aceito receber comunicações sobre o status do meu pedido.</span>
</label>
</div>
<div className="pt-8 flex justify-end">
<button className="bg-[#F4DABF] text-[#284239] text-base font-normal py-4 px-10 rounded-full hover:bg-[#ebd0b5] transition-transform hover:scale-[1.02] flex items-center justify-center gap-3" onclick="validateAndNext(1)" type="button">
                                Continuar
                                <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="space-y-8 hidden animate-[fadeIn_0.5s_ease-out]" id="step-2">
<p className="text-base font-light text-[#284239]/70 leading-relaxed">Defina o tom e a direção do presente.</p>
<div className="space-y-6">
<div className="relative">
<label className="block text-sm font-light text-[#284239]/70 mb-2" htmlFor="ocasiao">Ocasião</label>
<div className="relative">
<select className="w-full appearance-none bg-transparent border-b border-[#284239]/20 text-lg px-0 py-3 outline-none focus:border-[#284239] transition-colors font-light text-[#284239] cursor-pointer" id="ocasiao" onchange="toggleOutro('ocasiao')" required="">
<option className="text-gray-400" disabled="" selected="" value="">Selecione uma opção...</option>
<option value="aniversario">Aniversário</option>
<option value="piada">Piada / Zueira</option>
<option value="namoro">Aniversário de Namoro/Casamento</option>
<option value="desculpas">Pedido de Desculpas</option>
<option value="casamento">Mensagem de Casamento</option>
<option value="outro">Outro</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pointer-events-none text-[#284239]/50">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<input className="hidden mt-4 w-full bg-transparent border-b border-[#284239]/20 text-lg px-0 py-3 outline-none focus:border-[#284239] font-light" id="ocasiao-outro" placeholder="Especifique a ocasião" type="text"/>
<span className="text-red-500 text-sm mt-2 hidden absolute -bottom-6" id="err-ocasiao">Selecione uma ocasião.</span>
</div>
<div className="relative pt-4">
<label className="block text-sm font-light text-[#284239]/70 mb-2" htmlFor="clima">Tom da Mensagem</label>
<div className="relative">
<select className="w-full appearance-none bg-transparent border-b border-[#284239]/20 text-lg px-0 py-3 outline-none focus:border-[#284239] transition-colors font-light text-[#284239] cursor-pointer" id="clima" onchange="toggleOutro('clima')" required="">
<option disabled="" selected="" value="">Selecione uma opção...</option>
<option value="romantico">Romântico &amp; Emocionante</option>
<option value="picante">Ousado / Picante</option>
<option value="engracado">Divertido &amp; Engraçado</option>
<option value="outro">Outro</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pointer-events-none text-[#284239]/50">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<input className="hidden mt-4 w-full bg-transparent border-b border-[#284239]/20 text-lg px-0 py-3 outline-none focus:border-[#284239] font-light" id="clima-outro" placeholder="Especifique o tom" type="text"/>
<span className="text-red-500 text-sm mt-2 hidden absolute -bottom-6" id="err-clima">Selecione o tom.</span>
</div>
<div className="relative pt-4">
<label className="block text-sm font-light text-[#284239]/70 mb-2" htmlFor="destinatario">Para quem é o vídeo?</label>
<input className="w-full bg-transparent border-b border-[#284239]/20 text-lg px-0 py-3 outline-none focus:border-[#284239] transition-colors placeholder:text-[#284239]/30 font-light" id="destinatario" placeholder="Nome ou Apelido" required="" type="text"/>
<span className="text-red-500 text-sm mt-2 hidden absolute -bottom-6" id="err-destinatario">Preencha o nome.</span>
</div>
</div>
<div className="pt-8 flex gap-4">
<button className="w-1/3 border border-[#284239]/20 text-[#284239] text-base py-4 rounded-full font-normal hover:bg-[#284239]/5 transition-colors flex items-center justify-center" onclick="goToStep(1)" type="button">
                                Voltar
                            </button>
<button className="w-2/3 bg-[#F4DABF] text-[#284239] text-base py-4 rounded-full font-normal hover:bg-[#ebd0b5] transition-transform hover:scale-[1.02] flex items-center justify-center gap-3" onclick="validateAndNext(2)" type="button">
                                Continuar
                                <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="space-y-8 hidden animate-[fadeIn_0.5s_ease-out]" id="step-3">
<p className="text-base font-light text-[#284239]/70 leading-relaxed">Pequenos detalhes fazem toda a diferença para a Inteligência Artificial.</p>
<div className="space-y-6">
<div>
<label className="block text-sm font-light text-[#284239]/70 mb-2" htmlFor="idade">Idade <span className="text-[#284239]/40 italic">(Opcional)</span></label>
<input className="w-full bg-transparent border-b border-[#284239]/20 text-lg px-0 py-3 outline-none focus:border-[#284239] transition-colors placeholder:text-[#284239]/30 font-light" id="idade" placeholder="Ex: 30" type="number"/>
</div>
<div className="pt-4">
<label className="block text-sm font-light text-[#284239]/70 mb-2" htmlFor="instrucoes">Instruções Extras <span className="text-[#284239]/40 italic">(Opcional)</span></label>
<textarea className="w-full bg-transparent border border-[#284239]/20 rounded-2xl text-lg px-4 py-4 outline-none focus:border-[#284239] transition-colors placeholder:text-[#284239]/30 font-light resize-none mt-2" id="instrucoes" placeholder="Conte algo peculiar ou específico que o robô deve mencionar..." rows="3"></textarea>
</div>
</div>
<div className="pt-8 flex gap-4">
<button className="w-1/3 border border-[#284239]/20 text-[#284239] text-base py-4 rounded-full font-normal hover:bg-[#284239]/5 transition-colors flex items-center justify-center" onclick="goToStep(2)" type="button">
                                Voltar
                            </button>
<button className="w-2/3 bg-[#F4DABF] text-[#284239] text-base py-4 rounded-full font-normal hover:bg-[#ebd0b5] transition-transform hover:scale-[1.02] flex items-center justify-center gap-3" onclick="validateAndNext(3)" type="button">
                                Revisar Pedido
                            </button>
</div>
</div>

<div className="space-y-8 hidden animate-[fadeIn_0.5s_ease-out]" id="step-4">
<p className="text-base font-light text-[#284239]/70 leading-relaxed">Confira os detalhes da sua encomenda antes de prosseguir.</p>
<div className="bg-[#284239]/5 rounded-3xl p-6 lg:p-8 space-y-4 text-base font-light">
<div className="flex justify-between border-b border-[#284239]/10 pb-4">
<span className="text-[#284239]/60">Destinatário:</span>
<span className="font-normal text-[#284239]" id="resumo-destinatario">-</span>
</div>
<div className="flex justify-between border-b border-[#284239]/10 pb-4">
<span className="text-[#284239]/60">Ocasião:</span>
<span className="text-[#284239] capitalize" id="resumo-ocasiao">-</span>
</div>
<div className="flex justify-between border-b border-[#284239]/10 pb-4">
<span className="text-[#284239]/60">Tom / Clima:</span>
<span className="text-[#284239] capitalize" id="resumo-clima">-</span>
</div>
<div className="flex justify-between border-b border-[#284239]/10 pb-4">
<span className="text-[#284239]/60">Contato:</span>
<span className="text-[#284239] truncate max-w-[150px]" id="resumo-contato">-</span>
</div>
<div className="flex justify-between pt-4 items-center">
<span className="font-normal text-[#284239]">Total:</span>
<span className="font-serif text-3xl tracking-tight text-[#284239]">R$ 29,90</span>
</div>
</div>
<div className="pt-4 flex flex-col gap-4">
<button className="w-full bg-[#314F44] text-[#FDFCF8] text-lg py-5 rounded-full font-normal hover:bg-[#233a32] transition-transform hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3 relative" onclick="processPayment()" type="button">
<i className="w-5 h-5 opacity-80" data-lucide="lock" strokeWidth="1.5"></i>
                                Finalizar Pedido via PIX
                            </button>
<button className="w-full text-[#284239]/60 text-base py-2 font-light hover:text-[#284239] transition-colors flex items-center justify-center" onclick="goToStep(3)" type="button">
                                Editar informações
                            </button>
</div>
</div>
</form>
</div>
</section>
</main>

<footer className="border-t border-white/10 py-12 mt-auto relative z-10">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12 flex flex-col items-center">
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-white/50" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="font-serif text-2xl tracking-tight text-white/80">VidAI</span>
</div>
<p className="text-sm font-light text-white/50 mb-8 max-w-sm text-center">Arte generativa e inteligência artificial para momentos especiais.</p>
<div className="flex gap-8 text-sm font-light text-white/50">
<a className="hover:text-white transition-colors" href="#">Termos</a>
<a className="hover:text-white transition-colors" href="#">Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Suporte</a>
</div>
</div>
</footer>
<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>


    </>
  );
}
