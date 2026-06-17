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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const state = {
      guardiao: 'Corajoso',
      emocaoDia: 'pensativo',
      corMedo: 'Amarelo',
      animal: 'Raposa',
      social: 'Brincar com amigos',
      problema: 'Pedir ajuda',
      feliz: 'Ganhar um desafio',
      magoa: 'Ficar em silêncio',
      planeja: 'Não planejo',
      atividade: 'Calmas e tranquilas'
    };

    function setSingle(group, value, el) {
      state[group] = value;
      document.querySelectorAll(`[data-group="${group}"]`).forEach(btn => {
        btn.classList.remove('bg-violet-600','text-white','shadow-sm','bg-indigo-600','bg-orange-500','bg-cyan-500','bg-amber-500','bg-emerald-500','ring-4','ring-yellow-200');
        btn.classList.add('bg-white','text-slate-700');
        if (btn.classList.contains('cor-btn')) btn.classList.remove('ring-4','ring-yellow-200');
      });

      if (el.classList.contains('cor-btn')) {
        document.querySelectorAll(`[data-group="${group}"]`).forEach(btn => btn.classList.remove('ring-4','ring-yellow-200'));
        el.classList.add('ring-4','ring-yellow-200');
      } else {
        el.classList.remove('bg-white','text-slate-700');
        if (group === 'guardiao') el.classList.add('bg-violet-600','text-white','shadow-sm');
        else if (group === 'emocaoDia') el.classList.add('bg-indigo-600','text-white','shadow-sm');
        else if (group === 'animal') el.classList.add('bg-orange-500','text-white','shadow-sm');
        else if (group === 'social' || group === 'problema') el.classList.add('bg-cyan-500','text-white','shadow-sm');
        else el.classList.add('bg-amber-500','text-white','shadow-sm');
      }
      gerarRelatorio();
    }

    function updateSlider(id) {
      document.getElementById(id + 'Val').innerText = document.getElementById(id).value + '%';
      const felicidade = parseInt(document.getElementById('felicidade').value);
      const medo = parseInt(document.getElementById('medo').value);
      const raiva = parseInt(document.getElementById('raiva').value);
      let texto = 'Seu coração está contando uma história especial hoje.';
      if (felicidade >= 80) texto = 'Uau! Seu sol tá bem forte hoje!';
      if (medo >= 60) texto = 'Seu monstrinho do medo precisa de abraço e segurança.';
      if (raiva >= 60) texto = 'Seu vulcão está quentinho. Que tal respirar fundo e pedir ajuda?';
      document.getElementById('feedbackTermometro').innerText = texto;
      gerarRelatorio();
    }

    function gerarRelatorio() {
      const nome = document.getElementById('nome').value || 'Alexandre';
      const idade = document.getElementById('idade').value || '8';
      const turma = document.getElementById('turma').value || '5 série';
      const lixo = document.getElementById('lixo').value || 'Medos do pai';
      const coracao = document.getElementById('coracaoLeve').value || 'Sorri';
      const melhoria = document.getElementById('melhoraria').value || 'Tirar nota boa';
      const animalPorque = document.getElementById('animalPorque').value || 'Esperto';

      const medo = document.getElementById('medo').value;
      const tristeza = document.getElementById('tristeza').value;
      const raiva = document.getElementById('raiva').value;
      const ansiedade = document.getElementById('ansiedade').value;
      const autoestima = document.getElementById('autoestima').value;
      const felicidade = document.getElementById('felicidade').value;
      const coragem = document.getElementById('coragem').value;
      const solidao = document.getElementById('solidao').value;

      document.getElementById('rNome').innerText = nome;
      document.getElementById('rIdade').innerText = idade + ' anos';
      document.getElementById('rTurma').innerText = turma;
      document.getElementById('rGuardiao').innerText = state.guardiao;
      document.getElementById('rEmocaoDia').innerText = state.emocaoDia;
      document.getElementById('rCorMedo').innerText = state.corMedo;
      document.getElementById('rLixo').innerText = `"${lixo}"`;
      document.getElementById('rCoracao').innerText = `"${coracao}"`;
      document.getElementById('rMelhoraria').innerText = `"${melhoria}"`;
      document.getElementById('rAnimal').innerText = state.animal;
      document.getElementById('rAnimalPorque').innerText = `"${animalPorque}"`;
      document.getElementById('rSocial').innerText = state.social;
      document.getElementById('rProblema').innerText = state.problema;
      document.getElementById('rFeliz').innerText = state.feliz;
      document.getElementById('rMagoa').innerText = state.magoa;
      document.getElementById('rPlaneja').innerText = state.planeja;
      document.getElementById('rAtividade').innerText = state.atividade;

      const vals = {Medo: medo, Tristeza: tristeza, Raiva: raiva, Ansiedade: ansiedade, Autoestima: autoestima, Felicidade: felicidade, Coragem: coragem, Solidão: solidao};
      Object.entries(vals).forEach(([k,v]) => {
        const id = k.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
        const map = {
          Medo:'Medo', Tristeza:'Tristeza', Raiva:'Raiva', Ansiedade:'Ansiedade',
          Autoestima:'Autoestima', Felicidade:'Felicidade', Coragem:'Coragem', Solidao:'Solidao'
        };
      });

      document.getElementById('rMedo').innerText = medo + '%';
      document.getElementById('rTristeza').innerText = tristeza + '%';
      document.getElementById('rRaiva').innerText = raiva + '%';
      document.getElementById('rAnsiedade').innerText = ansiedade + '%';
      document.getElementById('rAutoestima').innerText = autoestima + '%';
      document.getElementById('rFelicidade').innerText = felicidade + '%';
      document.getElementById('rCoragem').innerText = coragem + '%';
      document.getElementById('rSolidao').innerText = solidao + '%';

      document.getElementById('barMedo').style.width = medo + '%';
      document.getElementById('barTristeza').style.width = tristeza + '%';
      document.getElementById('barRaiva').style.width = raiva + '%';
      document.getElementById('barAnsiedade').style.width = ansiedade + '%';
      document.getElementById('barAutoestima').style.width = autoestima + '%';
      document.getElementById('barFelicidade').style.width = felicidade + '%';
      document.getElementById('barCoragem').style.width = coragem + '%';
      document.getElementById('barSolidao').style.width = solidao + '%';

      const resumo = `${nome} demonstra um perfil único com características especiais identificadas através do mapeamento emocional. Hoje, a emoção predominante foi ${state.emocaoDia}, com guardião interno ${state.guardiao}.`;
      document.getElementById('rResumo').innerText = resumo;

      const conclusao = `${nome} apresenta um perfil emocional único que requer acompanhamento personalizado para potencializar seu desenvolvimento socioemocional. Os indicadores sugerem atenção especial para emoções mais elevadas e reforço contínuo das áreas de proteção emocional.`;
      document.getElementById('rConclusao').innerText = conclusao;

      const relatorioTexto = `
RELATÓRIO EMOCIONAL INFANTIL – MINDKIDS EMOTION PRO+
Nome: ${nome}
Idade: ${idade} anos
Turma: ${turma}
Data: 25/11/2025

Resumo Geral:
${resumo}

Estado Emocional do Dia:
Emoção predominante: ${state.emocaoDia}
Guardião Interno escolhido: ${state.guardiao}

Respostas Simbólicas:
Cor do medo: ${state.corMedo}
Jogaria fora: ${lixo}
Coração leve com: ${coracao}
Desejo de melhoria: ${melhoria}

Autoimagem e Comportamento:
Animal identificação: ${state.animal} - ${animalPorque}
Preferência social: ${state.social}
Resolução de problemas: ${state.problema}

Estilo Emocional:
Fonte de felicidade: ${state.feliz}
Reação à mágoa: ${state.magoa}
Abordagem de tarefas: ${state.planeja}
Preferência de atividades: ${state.atividade}

Mapeamento Quantitativo:
Medo: ${medo}%
Tristeza: ${tristeza}%
Raiva: ${raiva}%
Ansiedade: ${ansiedade}%
Autoestima: ${autoestima}%
Felicidade: ${felicidade}%
Coragem: ${coragem}%
Solidão: ${solidao}%

Conclusão e Recomendações:
${conclusao}

Próximos passos:
- Reforçar pontos fortes identificados
- Trabalhar áreas que necessitam atenção
- Manter acompanhamento regular
- Integrar família e escola no processo

Relatório gerado pelo MINDKIDS EMOTION PRO+
      `.trim();

      const whatsappBase = 'https://api.whatsapp.com/send/?phone=5586999154867&text=';
      document.getElementById('whatsappBtn').href = whatsappBase + encodeURIComponent(relatorioTexto) + '&type=phone_number&app_absent=0&wame_ctl=1';
      document.getElementById('emailBtn').href = 'mailto:empreendedoddofuturo1000@gmail.com?subject=' + encodeURIComponent('Relatório Emocional Infantil - ' + nome) + '&body=' + encodeURIComponent(relatorioTexto);
    }

    function baixarPDF() {
      window.print();
    }

    gerarRelatorio();
  
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
      
<div className="mx-auto max-w-md min-h-screen bg-white shadow-2xl shadow-slate-200/70 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-pink-200/50 blur-2xl"></div>
<div className="absolute top-40 -left-8 h-28 w-28 rounded-full bg-yellow-200/50 blur-2xl"></div>
<div className="absolute bottom-40 right-0 h-36 w-36 rounded-full bg-cyan-200/40 blur-2xl"></div>
<div className="absolute bottom-10 left-8 h-24 w-24 rounded-full bg-violet-200/40 blur-2xl"></div>
</div>
<header className="relative z-10 px-5 pt-5 pb-4 border-b border-slate-100 bg-white/90 backdrop-blur">
<div className="flex items-start justify-between gap-3">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
<span>🧠</span>
<span>MINDKIDS Emotion Pro+</span>
</div>
<h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 leading-tight">
            Meu mapa emocional
          </h1>
<p className="mt-2 text-sm text-slate-500">
            Um espaço seguro, lúdico e acolhedor para escutar o coração das crianças.
          </p>
</div>
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-400 to-orange-300 text-2xl shadow-lg shadow-orange-200/50">
          ⭐
        </div>
</div>
</header>
<nav className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-100">
<div className="overflow-x-auto">
<div className="flex gap-2 px-4 py-3 w-max">
<a className="whitespace-nowrap rounded-full bg-violet-600 text-white px-4 py-2 text-xs font-medium" href="#aba1">Cadastro</a>
<a className="whitespace-nowrap rounded-full bg-slate-100 text-slate-700 px-4 py-2 text-xs font-medium" href="#aba2">Exploração I</a>
<a className="whitespace-nowrap rounded-full bg-slate-100 text-slate-700 px-4 py-2 text-xs font-medium" href="#aba3">Exploração II</a>
<a className="whitespace-nowrap rounded-full bg-slate-100 text-slate-700 px-4 py-2 text-xs font-medium" href="#aba4">Estilo</a>
<a className="whitespace-nowrap rounded-full bg-slate-100 text-slate-700 px-4 py-2 text-xs font-medium" href="#aba5">Termômetro</a>
<a className="whitespace-nowrap rounded-full bg-slate-100 text-slate-700 px-4 py-2 text-xs font-medium" href="#aba6">Relatório</a>
<a className="whitespace-nowrap rounded-full bg-slate-100 text-slate-700 px-4 py-2 text-xs font-medium" href="#aba7">Historinhas</a>
</div>
</div>
</nav>
<main className="relative z-10 px-4 pb-28 space-y-5 pt-4">
<section className="rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50 p-4 shadow-sm" id="aba1">
<div className="flex items-center gap-3">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm text-2xl">🧸</div>
<div>
<p className="text-xs font-medium uppercase tracking-wide text-violet-500">ABA 1</p>
<h2 className="text-xl font-semibold text-slate-900">Cadastro e identidade</h2>
</div>
</div>
<div className="mt-4 grid grid-cols-1 gap-3">
<div>
<label className="mb-1 block text-xs font-medium text-slate-600">Nome da criança</label>
<input className="w-full rounded-2xl border border-white bg-white/90 px-4 py-3 text-sm text-slate-800 outline-none" id="nome" placeholder="Digite o nome" value="Alexandre"/>
</div>
<div className="grid grid-cols-3 gap-3">
<div>
<label className="mb-1 block text-xs font-medium text-slate-600">Idade</label>
<input className="w-full rounded-2xl border border-white bg-white/90 px-4 py-3 text-sm text-slate-800 outline-none" id="idade" value="8"/>
</div>
<div className="col-span-2">
<label className="mb-1 block text-xs font-medium text-slate-600">Turma</label>
<input className="w-full rounded-2xl border border-white bg-white/90 px-4 py-3 text-sm text-slate-800 outline-none" id="turma" value="5 série"/>
</div>
</div>
<div>
<label className="mb-2 block text-xs font-medium text-slate-600">Escolha do avatar guardião interno</label>
<div className="grid grid-cols-2 gap-2">
<button className="guardiao-btn rounded-2xl bg-violet-600 text-white px-3 py-3 text-sm font-medium shadow-sm" data-group="guardiao" onclick="setSingle('guardiao','Corajoso', this)">🛡️ Corajoso</button>
<button className="guardiao-btn rounded-2xl bg-white text-slate-700 px-3 py-3 text-sm font-medium" data-group="guardiao" onclick="setSingle('guardiao','Calminha', this)">☁️ Calminha</button>
<button className="guardiao-btn rounded-2xl bg-white text-slate-700 px-3 py-3 text-sm font-medium" data-group="guardiao" onclick="setSingle('guardiao','Curioso', this)">🔎 Curioso</button>
<button className="guardiao-btn rounded-2xl bg-white text-slate-700 px-3 py-3 text-sm font-medium" data-group="guardiao" onclick="setSingle('guardiao','Brincalhão', this)">🎈 Brincalhão</button>
<button className="guardiao-btn rounded-2xl bg-white text-slate-700 px-3 py-3 text-sm font-medium" data-group="guardiao" onclick="setSingle('guardiao','Esperto', this)">🦊 Esperto</button>
<button className="guardiao-btn rounded-2xl bg-white text-slate-700 px-3 py-3 text-sm font-medium" data-group="guardiao" onclick="setSingle('guardiao','Amigo', this)">💚 Amigo</button>
</div>
</div>
<div>
<label className="mb-2 block text-xs font-medium text-slate-600">Emoção do dia</label>
<div className="grid grid-cols-4 gap-2">
<button className="emo-btn rounded-2xl bg-white px-2 py-3 text-center text-xs font-medium text-slate-700" data-group="emocaoDia" onclick="setSingle('emocaoDia','bravo', this)">😡<div className="mt-1">Bravo</div></button>
<button className="emo-btn rounded-2xl bg-white px-2 py-3 text-center text-xs font-medium text-slate-700" data-group="emocaoDia" onclick="setSingle('emocaoDia','triste', this)">😢<div className="mt-1">Triste</div></button>
<button className="emo-btn rounded-2xl bg-white px-2 py-3 text-center text-xs font-medium text-slate-700" data-group="emocaoDia" onclick="setSingle('emocaoDia','com medo', this)">😨<div className="mt-1">Medo</div></button>
<button className="emo-btn rounded-2xl bg-white px-2 py-3 text-center text-xs font-medium text-slate-700" data-group="emocaoDia" onclick="setSingle('emocaoDia','alegre', this)">😄<div className="mt-1">Alegre</div></button>
<button className="emo-btn rounded-2xl bg-indigo-600 text-white px-2 py-3 text-center text-xs font-medium shadow-sm" data-group="emocaoDia" onclick="setSingle('emocaoDia','pensativo', this)">💭<div className="mt-1">Pensativo</div></button>
<button className="emo-btn rounded-2xl bg-white px-2 py-3 text-center text-xs font-medium text-slate-700" data-group="emocaoDia" onclick="setSingle('emocaoDia','amoroso', this)">❤️<div className="mt-1">Amoroso</div></button>
<button className="emo-btn rounded-2xl bg-white px-2 py-3 text-center text-xs font-medium text-slate-700" data-group="emocaoDia" onclick="setSingle('emocaoDia','não sei dizer', this)">🥶<div className="mt-1">Não sei</div></button>
</div>
</div>
<button className="mt-2 rounded-2xl bg-slate-900 text-white px-4 py-3 text-sm font-medium shadow-lg shadow-slate-200" onclick="document.getElementById('aba2').scrollIntoView({behavior:'smooth'})">
            Entrar no Meu Mundo Mágico
          </button>
</div>
</section>
<section className="rounded-3xl border border-pink-100 bg-white p-4 shadow-sm" id="aba2">
<div className="flex items-center gap-3">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 text-2xl">💖</div>
<div>
<p className="text-xs font-medium uppercase tracking-wide text-pink-500">ABA 2</p>
<h2 className="text-xl font-semibold text-slate-900">Exploração emocional I</h2>
</div>
</div>
<div className="mt-4 space-y-4">
<div>
<label className="mb-2 block text-sm font-medium text-slate-700">Se seu medo tivesse uma cor, qual seria?</label>
<div className="grid grid-cols-4 gap-2">
<button className="cor-btn h-11 rounded-2xl bg-red-500" data-group="corMedo" onclick="setSingle('corMedo','Vermelho', this)"></button>
<button className="cor-btn h-11 rounded-2xl bg-orange-400" data-group="corMedo" onclick="setSingle('corMedo','Laranja', this)"></button>
<button className="cor-btn h-11 rounded-2xl ring-4 ring-yellow-200 bg-yellow-300" data-group="corMedo" onclick="setSingle('corMedo','Amarelo', this)"></button>
<button className="cor-btn h-11 rounded-2xl bg-green-400" data-group="corMedo" onclick="setSingle('corMedo','Verde', this)"></button>
<button className="cor-btn h-11 rounded-2xl bg-blue-500" data-group="corMedo" onclick="setSingle('corMedo','Azul', this)"></button>
<button className="cor-btn h-11 rounded-2xl bg-violet-500" data-group="corMedo" onclick="setSingle('corMedo','Roxo', this)"></button>
<button className="cor-btn h-11 rounded-2xl bg-slate-900" data-group="corMedo" onclick="setSingle('corMedo','Preto', this)"></button>
<button className="cor-btn h-11 rounded-2xl bg-white border border-slate-200" data-group="corMedo" onclick="setSingle('corMedo','Branco', this)"></button>
</div>
</div>
<div>
<label className="mb-1 block text-sm font-medium text-slate-700">Qual coisa chata você jogaria no lixo hoje?</label>
<textarea className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" id="lixo" rows="3">Medos do pai</textarea>
</div>
<div>
<label className="mb-1 block text-sm font-medium text-slate-700">O que te deixa com o coração leve?</label>
<textarea className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" id="coracaoLeve" rows="3">Sorri</textarea>
</div>
<div>
<label className="mb-1 block text-sm font-medium text-slate-700">O que você gostaria que melhorasse hoje?</label>
<textarea className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" id="melhoraria" rows="3">Tirar nota boa</textarea>
</div>
</div>
</section>
<section className="rounded-3xl border border-cyan-100 bg-white p-4 shadow-sm" id="aba3">
<div className="flex items-center gap-3">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-2xl">🐾</div>
<div>
<p className="text-xs font-medium uppercase tracking-wide text-cyan-500">ABA 3</p>
<h2 className="text-xl font-semibold text-slate-900">Exploração emocional II</h2>
</div>
</div>
<div className="mt-4 rounded-3xl bg-slate-50 p-4">
<div className="flex items-start gap-3">
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">🐉</div>
<div>
<p className="text-sm font-medium text-slate-800">Oi! Eu sou seu guia fofinho.</p>
<p className="text-xs text-slate-500">Vamos descobrir como você vê seu mundo por dentro?</p>
</div>
</div>
</div>
<div className="mt-4 space-y-4">
<div>
<label className="mb-2 block text-sm font-medium text-slate-700">Se você fosse um animal, qual seria?</label>
<div className="grid grid-cols-4 gap-2">
<button className="animal-btn rounded-2xl bg-white px-2 py-3 text-xs font-medium text-slate-700" data-group="animal" onclick="setSingle('animal','Cachorro', this)">🐶</button>
<button className="animal-btn rounded-2xl bg-white px-2 py-3 text-xs font-medium text-slate-700" data-group="animal" onclick="setSingle('animal','Gato', this)">🐱</button>
<button className="animal-btn rounded-2xl bg-white px-2 py-3 text-xs font-medium text-slate-700" data-group="animal" onclick="setSingle('animal','Leão', this)">🦁</button>
<button className="animal-btn rounded-2xl bg-white px-2 py-3 text-xs font-medium text-slate-700" data-group="animal" onclick="setSingle('animal','Tartaruga', this)">🐢</button>
<button className="animal-btn rounded-2xl bg-orange-500 text-white px-2 py-3 text-xs font-medium shadow-sm" data-group="animal" onclick="setSingle('animal','Raposa', this)">🦊</button>
<button className="animal-btn rounded-2xl bg-white px-2 py-3 text-xs font-medium text-slate-700" data-group="animal" onclick="setSingle('animal','Pássaro', this)">🐦</button>
<button className="animal-btn rounded-2xl bg-white px-2 py-3 text-xs font-medium text-slate-700" data-group="animal" onclick="setSingle('animal','Urso', this)">🐻</button>
<button className="animal-btn rounded-2xl bg-white px-2 py-3 text-xs font-medium text-slate-700" data-group="animal" onclick="setSingle('animal','Cobra', this)">🐍</button>
</div>
<input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" id="animalPorque" placeholder="Por quê?" value="Esperto"/>
</div>
<div>
<label className="mb-2 block text-sm font-medium text-slate-700">No seu tempo livre, você prefere:</label>
<div className="grid gap-2">
<button className="social-btn rounded-2xl bg-white border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700" data-group="social" onclick="setSingle('social','Brincar sozinho(a)', this)">Brincar sozinho(a)</button>
<button className="social-btn rounded-2xl bg-cyan-500 text-white px-4 py-3 text-left text-sm font-medium shadow-sm" data-group="social" onclick="setSingle('social','Brincar com amigos', this)">Brincar com amigos</button>
<button className="social-btn rounded-2xl bg-white border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700" data-group="social" onclick="setSingle('social','Brincar com a família', this)">Brincar com a família</button>
</div>
</div>
<div>
<label className="mb-2 block text-sm font-medium text-slate-700">Quando tem um problema difícil, você costuma:</label>
<div className="grid gap-2">
<button className="problema-btn rounded-2xl bg-white border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700" data-group="problema" onclick="setSingle('problema','Tentar resolver sozinho(a)', this)">Tentar resolver sozinho(a)</button>
<button className="problema-btn rounded-2xl bg-cyan-500 text-white px-4 py-3 text-left text-sm font-medium shadow-sm" data-group="problema" onclick="setSingle('problema','Pedir ajuda', this)">Pedir ajuda</button>
<button className="problema-btn rounded-2xl bg-white border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700" data-group="problema" onclick="setSingle('problema','Desistir rápido', this)">Desistir rápido</button>
</div>
</div>
</div>
</section>
<section className="rounded-3xl border border-amber-100 bg-white p-4 shadow-sm" id="aba4">
<div className="flex items-center gap-3">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-2xl">🌟</div>
<div>
<p className="text-xs font-medium uppercase tracking-wide text-amber-500">ABA 4</p>
<h2 className="text-xl font-semibold text-slate-900">Estilo pessoal e reação emocional</h2>
</div>
</div>
<div className="mt-4 space-y-4">
<div>
<label className="mb-2 block text-sm font-medium text-slate-700">O que te deixa mais feliz?</label>
<div className="grid gap-2">
<button className="feliz-btn rounded-2xl bg-white border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700" data-group="feliz" onclick="setSingle('feliz','Criar algo novo', this)">Criar algo novo</button>
<button className="feliz-btn rounded-2xl bg-white border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700" data-group="feliz" onclick="setSingle('feliz','Ajudar alguém', this)">Ajudar alguém</button>
<button className="feliz-btn rounded-2xl bg-amber-500 text-white px-4 py-3 text-left text-sm font-medium shadow-sm" data-group="feliz" onclick="setSingle('feliz','Ganhar um desafio', this)">Ganhar um desafio</button>
</div>
</div>
<div>
<label className="mb-2 block text-sm font-medium text-slate-700">Quando alguém te magoa, você prefere:</label>
<div className="grid gap-2">
<button className="magoa-btn rounded-2xl bg-white border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700" data-group="magoa" onclick="setSingle('magoa','Falar sobre seus sentimentos', this)">Falar sobre seus sentimentos</button>
<button className="magoa-btn rounded-2xl bg-amber-500 text-white px-4 py-3 text-left text-sm font-medium shadow-sm" data-group="magoa" onclick="setSingle('magoa','Ficar em silêncio', this)">Ficar em silêncio</button>
<button className="magoa-btn rounded-2xl bg-white border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700" data-group="magoa" onclick="setSingle('magoa','Fazer outra coisa para se sentir melhor', this)">Fazer outra coisa para se sentir melhor</button>
</div>
</div>
<div>
<label className="mb-2 block text-sm font-medium text-slate-700">Quando vai começar algo novo, você:</label>
<div className="grid gap-2">
<button className="planeja-btn rounded-2xl bg-white border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700" data-group="planeja" onclick="setSingle('planeja','Planeja cada detalhe', this)">Planeja cada detalhe</button>
<button className="planeja-btn rounded-2xl bg-white border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700" data-group="planeja" onclick="setSingle('planeja','Vai fazendo sem planejar muito', this)">Vai fazendo sem planejar muito</button>
<button className="planeja-btn rounded-2xl bg-amber-500 text-white px-4 py-3 text-left text-sm font-medium shadow-sm" data-group="planeja" onclick="setSingle('planeja','Não planejo', this)">Não planejo</button>
</div>
</div>
<div>
<label className="mb-2 block text-sm font-medium text-slate-700">Você gosta mais de atividades que são:</label>
<div className="grid gap-2">
<button className="atividade-btn rounded-2xl bg-amber-500 text-white px-4 py-3 text-left text-sm font-medium shadow-sm" data-group="atividade" onclick="setSingle('atividade','Calmas e tranquilas', this)">Calmas e tranquilas</button>
<button className="atividade-btn rounded-2xl bg-white border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700" data-group="atividade" onclick="setSingle('atividade','Com muita energia e movimento', this)">Com muita energia e movimento</button>
<button className="atividade-btn rounded-2xl bg-white border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700" data-group="atividade" onclick="setSingle('atividade','Que são criativas e inteligentes', this)">Que são criativas e inteligentes</button>
</div>
</div>
</div>
</section>
<section className="rounded-3xl border border-emerald-100 bg-white p-4 shadow-sm" id="aba5">
<div className="flex items-center gap-3">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">🌡️</div>
<div>
<p className="text-xs font-medium uppercase tracking-wide text-emerald-500">ABA 5</p>
<h2 className="text-xl font-semibold text-slate-900">Termômetro das emoções</h2>
</div>
</div>
<div className="mt-4 space-y-4">
<div className="rounded-2xl bg-slate-50 p-3">
<div className="mb-2 flex items-center justify-between text-sm"><span>👾 Medo</span><span className="font-medium text-slate-700" id="medoVal">8%</span></div>
<input className="w-full accent-slate-800" id="medo" max="100" min="0" oninput="updateSlider('medo')" type="range" value="8"/>
</div>
<div className="rounded-2xl bg-slate-50 p-3">
<div className="mb-2 flex items-center justify-between text-sm"><span>🌧️ Tristeza</span><span className="font-medium text-slate-700" id="tristezaVal">22%</span></div>
<input className="w-full accent-sky-400" id="tristeza" max="100" min="0" oninput="updateSlider('tristeza')" type="range" value="22"/>
</div>
<div className="rounded-2xl bg-slate-50 p-3">
<div className="mb-2 flex items-center justify-between text-sm"><span>🌋 Raiva</span><span className="font-medium text-slate-700" id="raivaVal">58%</span></div>
<input className="w-full accent-red-500" id="raiva" max="100" min="0" oninput="updateSlider('raiva')" type="range" value="58"/>
</div>
<div className="rounded-2xl bg-slate-50 p-3">
<div className="mb-2 flex items-center justify-between text-sm"><span>⏰ Ansiedade</span><span className="font-medium text-slate-700" id="ansiedadeVal">23%</span></div>
<input className="w-full accent-yellow-400" id="ansiedade" max="100" min="0" oninput="updateSlider('ansiedade')" type="range" value="23"/>
</div>
<div className="rounded-2xl bg-slate-50 p-3">
<div className="mb-2 flex items-center justify-between text-sm"><span>⭐ Autoestima</span><span className="font-medium text-slate-700" id="autoestimaVal">100%</span></div>
<input className="w-full accent-green-500" id="autoestima" max="100" min="0" oninput="updateSlider('autoestima')" type="range" value="100"/>
</div>
<div className="rounded-2xl bg-slate-50 p-3">
<div className="mb-2 flex items-center justify-between text-sm"><span>☀️ Felicidade</span><span className="font-medium text-slate-700" id="felicidadeVal">100%</span></div>
<input className="w-full accent-orange-400" id="felicidade" max="100" min="0" oninput="updateSlider('felicidade')" type="range" value="100"/>
</div>
<div className="rounded-2xl bg-slate-50 p-3">
<div className="mb-2 flex items-center justify-between text-sm"><span>🦸 Coragem</span><span className="font-medium text-slate-700" id="coragemVal">100%</span></div>
<input className="w-full accent-violet-500" id="coragem" max="100" min="0" oninput="updateSlider('coragem')" type="range" value="100"/>
</div>
<div className="rounded-2xl bg-slate-50 p-3">
<div className="mb-2 flex items-center justify-between text-sm"><span>🫧 Solidão</span><span className="font-medium text-slate-700" id="solidaoVal">13%</span></div>
<input className="w-full accent-slate-300" id="solidao" max="100" min="0" oninput="updateSlider('solidao')" type="range" value="13"/>
</div>
<div className="rounded-2xl bg-orange-50 p-3 text-sm text-orange-700" id="feedbackTermometro">
            Uau! Seu sol tá bem forte hoje!
          </div>
<button className="w-full rounded-2xl bg-emerald-500 text-white px-4 py-3 text-sm font-medium shadow-lg shadow-emerald-100" onclick="gerarRelatorio(); document.getElementById('aba6').scrollIntoView({behavior:'smooth'})">
            Mostrar Meu Mundo do Coração
          </button>
</div>
</section>
<section className="rounded-3xl border border-rose-100 bg-white p-4 shadow-sm" id="aba6">
<div className="flex items-center gap-3">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-2xl">📋</div>
<div>
<p className="text-xs font-medium uppercase tracking-wide text-rose-500">ABA 6</p>
<h2 className="text-xl font-semibold text-slate-900">Relatório final e envio</h2>
</div>
</div>
<div className="mt-4 rounded-3xl bg-slate-50 p-4 border border-slate-100" id="reportCard">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-lg font-semibold text-slate-900">RELATÓRIO EMOCIONAL INFANTIL</h3>
<p className="text-xs text-slate-500">MINDKIDS EMOTION PRO+</p>
</div>
<div className="rounded-2xl bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-sm">25/11/2025</div>
</div>
<div className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-700">
<div><span className="font-medium">👧 Nome:</span> <span id="rNome">Alexandre</span></div>
<div><span className="font-medium">🎂 Idade:</span> <span id="rIdade">8 anos</span></div>
<div><span className="font-medium">🏫 Turma:</span> <span id="rTurma">5 série</span></div>
<div><span className="font-medium">🧩 Guardião Interno:</span> <span id="rGuardiao">Corajoso</span></div>
<div><span className="font-medium">🟣 Emoção do dia:</span> <span id="rEmocaoDia">pensativo</span></div>
</div>
<div className="mt-5">
<h4 className="text-sm font-semibold text-slate-900">🔹 Resumo Geral</h4>
<p className="mt-1 text-sm text-slate-600" id="rResumo">
              Alexandre demonstra um perfil único com características especiais identificadas através do mapeamento emocional.
            </p>
</div>
<div className="mt-5">
<h4 className="text-sm font-semibold text-slate-900">🟠 Respostas simbólicas</h4>
<div className="mt-2 space-y-1 text-sm text-slate-600">
<p>💜 Cor do medo: <span className="font-medium text-slate-800" id="rCorMedo">Amarelo</span></p>
<p>🗑 Jogaria fora: <span className="font-medium text-slate-800" id="rLixo">"Medos do pai"</span></p>
<p>💗 Coração leve com: <span className="font-medium text-slate-800" id="rCoracao">"Sorri"</span></p>
<p>🙏 Desejo de melhoria: <span className="font-medium text-slate-800" id="rMelhoraria">"Tirar nota boa"</span></p>
</div>
</div>
<div className="mt-5">
<h4 className="text-sm font-semibold text-slate-900">🟢 Autoimagem e comportamento</h4>
<div className="mt-2 space-y-1 text-sm text-slate-600">
<p>🐾 Animal identificação: <span className="font-medium text-slate-800" id="rAnimal">Raposa</span> - <span className="font-medium text-slate-800" id="rAnimalPorque">"Esperto"</span></p>
<p>🏡 Preferência social: <span className="font-medium text-slate-800" id="rSocial">Brincar com amigos</span></p>
<p>💪 Resolução de problemas: <span className="font-medium text-slate-800" id="rProblema">Pedir ajuda</span></p>
</div>
</div>
<div className="mt-5">
<h4 className="text-sm font-semibold text-slate-900">🔵 Estilo emocional</h4>
<div className="mt-2 space-y-1 text-sm text-slate-600">
<p>❤ Fonte de felicidade: <span className="font-medium text-slate-800" id="rFeliz">Ganhar um desafio</span></p>
<p>😶 Reação à mágoa: <span className="font-medium text-slate-800" id="rMagoa">Ficar em silêncio</span></p>
<p>🗂 Abordagem de tarefas: <span className="font-medium text-slate-800" id="rPlaneja">Não planejo</span></p>
<p>😌 Preferência de atividades: <span className="font-medium text-slate-800" id="rAtividade">Calmas e tranquilas</span></p>
</div>
</div>
<div className="mt-5">
<h4 className="text-sm font-semibold text-slate-900">📊 Mapeamento quantitativo das emoções</h4>
<div className="mt-3 space-y-3 text-xs">
<div>
<div className="mb-1 flex justify-between"><span>Medo</span><span id="rMedo">8%</span></div>
<div className="h-3 rounded-full bg-slate-200 overflow-hidden"><div className="h-full rounded-full bg-slate-800" id="barMedo" style={{width: '8%'}}></div></div>
</div>
<div>
<div className="mb-1 flex justify-between"><span>Tristeza</span><span id="rTristeza">22%</span></div>
<div className="h-3 rounded-full bg-slate-200 overflow-hidden"><div className="h-full rounded-full bg-sky-400" id="barTristeza" style={{width: '22%'}}></div></div>
</div>
<div>
<div className="mb-1 flex justify-between"><span>Raiva</span><span id="rRaiva">58%</span></div>
<div className="h-3 rounded-full bg-slate-200 overflow-hidden"><div className="h-full rounded-full bg-red-500" id="barRaiva" style={{width: '58%'}}></div></div>
</div>
<div>
<div className="mb-1 flex justify-between"><span>Ansiedade</span><span id="rAnsiedade">23%</span></div>
<div className="h-3 rounded-full bg-slate-200 overflow-hidden"><div className="h-full rounded-full bg-yellow-400" id="barAnsiedade" style={{width: '23%'}}></div></div>
</div>
<div>
<div className="mb-1 flex justify-between"><span>Autoestima</span><span id="rAutoestima">100%</span></div>
<div className="h-3 rounded-full bg-slate-200 overflow-hidden"><div className="h-full rounded-full bg-green-500" id="barAutoestima" style={{width: '100%'}}></div></div>
</div>
<div>
<div className="mb-1 flex justify-between"><span>Felicidade</span><span id="rFelicidade">100%</span></div>
<div className="h-3 rounded-full bg-slate-200 overflow-hidden"><div className="h-full rounded-full bg-orange-400" id="barFelicidade" style={{width: '100%'}}></div></div>
</div>
<div>
<div className="mb-1 flex justify-between"><span>Coragem</span><span id="rCoragem">100%</span></div>
<div className="h-3 rounded-full bg-slate-200 overflow-hidden"><div className="h-full rounded-full bg-violet-500" id="barCoragem" style={{width: '100%'}}></div></div>
</div>
<div>
<div className="mb-1 flex justify-between"><span>Solidão</span><span id="rSolidao">13%</span></div>
<div className="h-3 rounded-full bg-slate-200 overflow-hidden"><div className="h-full rounded-full bg-slate-400" id="barSolidao" style={{width: '13%'}}></div></div>
</div>
</div>
</div>
<div className="mt-5">
<h4 className="text-sm font-semibold text-slate-900">✅ Conclusão e recomendações</h4>
<p className="mt-2 text-sm text-slate-600" id="rConclusao">
              Alexandre apresenta um perfil emocional único que requer acompanhamento personalizado para potencializar seu desenvolvimento socioemocional.
            </p>
<ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc pl-5">
<li>Reforçar pontos fortes identificados</li>
<li>Trabalhar áreas que necessitam atenção</li>
<li>Manter acompanhamento regular</li>
<li>Integrar família e escola no processo</li>
</ul>
</div>
<div className="mt-5 rounded-2xl bg-white p-3 border border-slate-100">
<h4 className="text-sm font-semibold text-slate-900">🧠 Interpretação integrada</h4>
<div className="mt-2 space-y-2 text-sm text-slate-600">
<p><span className="font-medium text-slate-800">Psicanálise:</span> símbolos e metáforas infantis ajudam a revelar conflitos internos e necessidades afetivas.</p>
<p><span className="font-medium text-slate-800">Psicologia infantil:</span> o padrão de respostas sugere necessidade de reforço emocional e escuta ativa entre casa e escola.</p>
<p><span className="font-medium text-slate-800">Reprogramação guiada:</span> histórias, visualizações e falas positivas podem fortalecer segurança, coragem e autoestima.</p>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-2">
<a className="rounded-2xl bg-emerald-500 text-white px-4 py-3 text-center text-sm font-medium shadow-lg shadow-emerald-100" href="#" id="whatsappBtn" target="_blank">
            RECEBER
          </a>
<button className="rounded-2xl bg-slate-900 text-white px-4 py-3 text-center text-sm font-medium shadow-lg shadow-slate-200" onclick="baixarPDF()">
            Baixar
          </button>
<a className="rounded-2xl bg-violet-500 text-white px-4 py-3 text-center text-sm font-medium shadow-lg shadow-violet-100" href="#" id="emailBtn">
            Enviar
          </a>
<button className="rounded-2xl bg-orange-400 text-white px-4 py-3 text-center text-sm font-medium shadow-lg shadow-orange-100" onclick="document.getElementById('aba7').scrollIntoView({behavior:'smooth'})">
            Ouvir Historinhas
          </button>
</div>
</section>
<section className="rounded-3xl border border-violet-100 bg-white p-4 shadow-sm" id="aba7">
<div className="flex items-center gap-3">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-2xl">🎧</div>
<div>
<p className="text-xs font-medium uppercase tracking-wide text-violet-500">ABA 7</p>
<h2 className="text-xl font-semibold text-slate-900">Reprogramação com áudio guiado</h2>
</div>
</div>
<div className="mt-4 rounded-3xl bg-gradient-to-br from-violet-50 via-fuchsia-50 to-orange-50 p-4">
<p className="text-sm font-medium text-slate-800">Sugestão positiva personalizada</p>
<p className="mt-2 text-sm text-slate-600">
            “Você é forte, mesmo quando sente medo. Seu coração é um lugar seguro.”
          </p>
<a className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-violet-600 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-violet-100" href="https://m.youtube.com/watch?v=bMtHtStDS6k&amp;pp=0gcJCfwAo7VqN5tD" target="_blank">
            Ouvir Minha História Mágica
          </a>
</div>
<div className="mt-4">
<h3 className="text-sm font-semibold text-slate-900">📚 Historinhas para dormir</h3>
<div className="mt-3 space-y-2">
<a className="block rounded-2xl border border-slate-100 bg-slate-50 p-3" href="http://www.youtube.com/watch?v=ZsrArs7zsAg" target="_blank">
<p className="text-sm font-medium text-slate-800">O presente mágico</p>
<p className="mt-1 text-xs text-slate-500">Kidspace Tv</p>
</a>
<a className="block rounded-2xl border border-slate-100 bg-slate-50 p-3" href="http://www.youtube.com/watch?v=urOwSI7aISM" target="_blank">
<p className="text-sm font-medium text-slate-800">A Joaninha Corajosa + Nina a menina camaleão</p>
<p className="mt-1 text-xs text-slate-500">Kidspace Tv</p>
</a>
<a className="block rounded-2xl border border-slate-100 bg-slate-50 p-3" href="http://www.youtube.com/watch?v=xWym4nkzjKA" target="_blank">
<p className="text-sm font-medium text-slate-800">O coelhinho que queria dormir</p>
<p className="mt-1 text-xs text-slate-500">Mundo Kids</p>
</a>
<a className="block rounded-2xl border border-slate-100 bg-slate-50 p-3" href="http://www.youtube.com/watch?v=oTtqcxVcxBA" target="_blank">
<p className="text-sm font-medium text-slate-800">O gatinho medroso</p>
<p className="mt-1 text-xs text-slate-500">Videoteca Kids</p>
</a>
<a className="block rounded-2xl border border-slate-100 bg-slate-50 p-3" href="http://www.youtube.com/watch?v=zf5TTUSiysI" target="_blank">
<p className="text-sm font-medium text-slate-800">O cachorrinho e a coragem</p>
<p className="mt-1 text-xs text-slate-500">Videoteca Kids</p>
</a>
</div>
</div>
</section>
</main>
<div className="fixed bottom-0 left-0 right-0 mx-auto max-w-md border-t border-slate-100 bg-white/95 backdrop-blur">
<div className="grid grid-cols-4 gap-2 px-4 py-3">
<a className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-slate-50 py-2 text-xs font-medium text-slate-600" href="#aba1">
<iconify-icon height="20" icon="solar:user-linear" strokeWidth="1.5" style={{color: '#475569'}} width="20"></iconify-icon>
          Cadastro
        </a>
<a className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-slate-50 py-2 text-xs font-medium text-slate-600" href="#aba5">
<iconify-icon height="20" icon="solar:heart-angle-linear" strokeWidth="1.5" style={{color: '#475569'}} width="20"></iconify-icon>
          Emoções
        </a>
<a className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-slate-900 py-2 text-xs font-medium text-white" href="#aba6">
<iconify-icon height="20" icon="solar:document-text-linear" strokeWidth="1.5" style={{color: 'white'}} width="20"></iconify-icon>
          Relatório
        </a>
<a className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-slate-50 py-2 text-xs font-medium text-slate-600" href="#aba7">
<iconify-icon height="20" icon="solar:headphones-round-sound-linear" strokeWidth="1.5" style={{color: '#475569'}} width="20"></iconify-icon>
          Áudios
        </a>
</div>
</div>
</div>


    </>
  );
}
