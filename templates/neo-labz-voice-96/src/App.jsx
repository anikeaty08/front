import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize Lucide Icons
      lucide.createIcons();

      // GPU Calculator Logic
      const gpuSelect = document.getElementById('gpu-select');
      const durationSlider = document.getElementById('duration-slider');
      const durationDisplay = document.getElementById('duration-display');
      const resultTime = document.getElementById('result-time');
      const speedRatioDisplay = document.getElementById('speed-ratio');

      // Reference: 4070 Ti (Score 0.69) takes 1096s for 1584s audio (ratio ~0.69)
      // Lower score = Faster card

      function calculateTime() {
          const audioMinutes = parseInt(durationSlider.value);
          const audioSeconds = audioMinutes * 60;
          const gpuFactor = parseFloat(gpuSelect.value);

          // Base processing time based on 4070 Ti logic
          // 4070 Ti factor is 0.69.
          // Total processing seconds = audioSeconds * gpuFactor

          const processingSeconds = audioSeconds * gpuFactor;

          // Format Result
          const m = Math.floor(processingSeconds / 60);
          const s = Math.floor(processingSeconds % 60);

          // Calculate speedup ratio (Realtime / ProcessingTime)
          const speedup = (audioSeconds / processingSeconds).toFixed(1);

          // Update DOM
          durationDisplay.innerText = `${audioMinutes} min 00 seg`; // Simplified for slider steps
          resultTime.innerText = `${m}m ${s}s`;
          speedRatioDisplay.innerText = `${speedup}x`;

          // Dynamic color for speed
          if(speedup > 1.5) {
              speedRatioDisplay.className = "text-emerald-400 font-bold";
          } else if (speedup > 1.0) {
              speedRatioDisplay.className = "text-cyan-400 font-bold";
          } else {
              speedRatioDisplay.className = "text-yellow-400 font-bold";
          }
      }

      gpuSelect.addEventListener('change', calculateTime);
      durationSlider.addEventListener('input', calculateTime);

      // Init
      calculateTime();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 z-0 pointer-events-none star-field"></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-10 left-20 w-2 h-2 bg-purple-500 rounded-full opacity-50 animate-pulse"></div>
<div className="absolute top-40 right-40 w-3 h-3 bg-cyan-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute bottom-20 left-1/3 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="absolute top-1/2 right-10 w-2 h-2 bg-purple-300 rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
</div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Neo Labz Logo" className="h-9 w-auto object-contain invert opacity-90" src="https://i.imgur.com/TqWkL6p.png"/>
</div>
<div className="hidden md:flex items-center gap-8 text-base text-slate-400 font-medium">
<a className="hover:text-white transition-colors" href="#benefits">
            Benefícios
          </a>
<a className="hover:text-white transition-colors" href="#calculator">
            Performance
          </a>
<a className="hover:text-white transition-colors" href="#pricing">
            Planos
          </a>
<a className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all" href="#">
            Login
          </a>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden pt-20 relative items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-0 pointer-events-none">

<div className="absolute inset-0 rounded-full accretion-disk animate-[spin_8s_linear_infinite]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-black rounded-full shadow-2xl z-10 border border-purple-900/50 photon-ring"></div>
</div>
<div className="z-20 container text-center mt-12 mr-auto ml-auto pr-4 pl-4 relative">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-cyan-300 mb-8 animate-[float_6s_ease-in-out_infinite]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
          3 dias grátis • Sem cartão de crédito
        </div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-6 text-glow drop-shadow-[0_0_40px_rgba(124,58,237,0.5)]">
          Áudio IA
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-300 to-white">
            Ilimitado
          </span>
          .
          <br/>
          100% Local.
        </h1>
<p className="text-xl max-w-2xl mx-auto mb-10 font-light text-slate-200 drop-shadow-md">
          Chega de pagar por caracteres. Neo Labz é a alternativa definitiva ao
          ElevenLabs. Gere clonagens de voz ilimitadas usando a potência da sua
          GPU.
          <br/>
<br/>
<span className="text-white font-medium">R$ 167,90/mês</span>
          fixo vs
          <span className="text-red-400 line-through">$0,016/caractere</span>
</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 opacity-0 group-hover:opacity-30 transition-opacity"></div>
<span className="relative flex items-center gap-2">
              Começar Trial Grátis
              <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
<button className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-slate-300 hover:bg-white/5 hover:text-white transition-all backdrop-blur-sm">
            Ver Comparação
          </button>
</div>
</div>

<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent z-20"></div>
</section>

<section className="py-24 relative z-30">
<div className="container mx-auto px-4 max-w-5xl">
<div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Pare de alugar, comece a processar.
            </h2>
<p className="text-slate-400">
              A matemática é simples. O processamento local vence a nuvem.
            </p>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-slate-500 text-sm uppercase tracking-wider border-b border-white/10">
<th className="py-4 px-4 font-medium">Recurso</th>
<th className="py-4 px-4 text-white font-semibold bg-white/5 rounded-t-lg">
<div className="flex items-center gap-2">
<img alt="" className="h-5 w-auto invert brightness-0" src="https://i.imgur.com/TqWkL6p.png"/>
                      NEO LABZ
                    </div>
</th>
<th className="py-4 px-4 font-medium opacity-60">ElevenLabs</th>
<th className="py-4 px-4 font-medium opacity-60">Google Cloud</th>
</tr>
</thead>
<tbody className="text-base">
<tr className="border-b border-white/5">
<td className="py-5 px-4 font-medium text-slate-300">
                    Custo Mensal (Uso Intenso)
                  </td>
<td className="py-5 px-4 text-cyan-400 font-semibold bg-white/5">
                    R$ 167,90 (Fixo)
                  </td>
<td className="py-5 px-4 text-red-400">R$ 2.500+ (Variável)</td>
<td className="py-5 px-4 text-red-400">R$ 800+</td>
</tr>
<tr className="border-b border-white/5">
<td className="py-5 px-4 font-medium text-slate-300">
                    Limite de Geração
                  </td>
<td className="py-5 px-4 text-emerald-400 font-semibold bg-white/5 flex items-center gap-2">
<svg className="lucide lucide-infinity w-5 h-5" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path>
</svg>
                    ILIMITADO
                  </td>
<td className="py-5 px-4 text-slate-500">500k caracteres</td>
<td className="py-5 px-4 text-slate-500">Pago por milhão</td>
</tr>
<tr className="border-b border-white/5">
<td className="py-5 px-4 font-medium text-slate-300">
                    Privacidade
                  </td>
<td className="py-5 px-4 text-white bg-white/5">
                    100% Local (Offline)
                  </td>
<td className="py-5 px-4 text-slate-500">
                    Cloud (Dados Públicos)
                  </td>
<td className="py-5 px-4 text-slate-500">Cloud</td>
</tr>
<tr>
<td className="py-5 px-4 font-medium text-slate-300">
                    Filas de Espera
                  </td>
<td className="py-5 px-4 text-emerald-400 bg-white/5 rounded-b-lg">
                    Zero (Instantâneo)
                  </td>
<td className="py-5 px-4 text-yellow-500">
                    Sim (Horário de pico)
                  </td>
<td className="py-5 px-4 text-slate-500">Varia</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f16] relative" id="calculator">
<div className="container mx-auto px-4 max-w-4xl">
<div className="mb-12 text-center">
<h2 className="text-3xl md:text-5xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-purple-400">
            O poder da sua Placa de Vídeo
          </h2>
<p className="text-slate-400">
            Selecione sua GPU NVIDIA para estimar a velocidade de geração.
            Baseado em processamento FP16 otimizado.
          </p>
</div>
<div className="glass-card p-8 rounded-2xl border border-cyan-500/20 shadow-[0_0_50px_-20px_rgba(6,182,212,0.2)]">
<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div>
<label className="block text-sm font-medium text-slate-400 mb-3">
                  Sua GPU
                </label>
<div className="relative">
<select className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 appearance-none focus:ring-2 focus:ring-cyan-500 outline-none text-white" id="gpu-select">
<option value="0.35">NVIDIA RTX 4090 (24GB)</option>
<option value="0.55">NVIDIA RTX 4080 (16GB)</option>
<option selected="" value="0.69">
                      NVIDIA RTX 4070 Ti (12GB) - Referência
                    </option>
<option value="0.85">NVIDIA RTX 4060 Ti (8GB/16GB)</option>
<option value="1.20">NVIDIA RTX 3060 (12GB)</option>
<option value="1.50">NVIDIA RTX 2060 / 3050</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-3.5 w-5 h-5 text-slate-500 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-400 mb-3">
                  Duração do Áudio a Gerar
                </label>
<input className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400" id="duration-slider" max="60" min="1" type="range" value="26"/>
<div className="flex justify-between mt-2 text-sm">
<span className="text-slate-500">1 min</span>
<span className="text-cyan-300 font-mono" id="duration-display">
                    26 min 00 seg
                  </span>
<span className="text-slate-500">60 min</span>
</div>
</div>
</div>

<div className="relative bg-[#05050a] rounded-xl p-6 border border-white/5 flex flex-col items-center justify-center h-full min-h-[250px]">

<div className="absolute inset-0 overflow-hidden rounded-xl">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
</div>
<div className="relative z-10 text-center">
<div className="text-sm text-slate-400 mb-1">
                  Tempo Estimado de Geração
                </div>
<div className="text-5xl font-mono font-medium text-white tracking-tight mb-2 flex items-center justify-center gap-2">
<svg className="lucide lucide-timer w-8 h-8 text-purple-400" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="10" x2="14" y1="2" y2="2"></line>
<line x1="12" x2="15" y1="14" y2="11"></line>
<circle cx="12" cy="14" r="8"></circle>
</svg>
<span id="result-time">17m 56s</span>
</div>
<div className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full inline-block border border-emerald-500/20">
<span className="text-cyan-400 font-bold" id="speed-ratio">
                    1.4x
                  </span>
                  mais rápido que tempo real
                </div>
</div>
</div>
</div>
</div>
<p className="text-xs text-center mt-6 text-slate-600">
          *Estimativa baseada em testes reais. O desempenho pode variar
          dependendo do restante do hardware (CPU/RAM) e processos em segundo
          plano.
        </p>
</div>
</section>

<section className="py-24 container mx-auto px-4" id="benefits">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 text-purple-300 group-hover:text-purple-200 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-waves w-6 h-6" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
<path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
<path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">
            Áudios Infinitos
          </h3>
<p className="text-slate-400">
            Sem contagem de tokens. Sem limites diários. Treine modelos e gere
            audiobooks inteiros sem se preocupar com a fatura no final do mês.
          </p>
</div>

<div className="group glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6 text-cyan-300 group-hover:text-cyan-200 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">100% Privado</h3>
<p className="text-slate-400">
            Seus dados de voz nunca saem da sua máquina. Processamento local
            garante sigilo total para projetos confidenciais.
          </p>
</div>

<div className="group glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 text-emerald-300 group-hover:text-emerald-200 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">
            Velocidade da Luz
          </h3>
<p className="text-slate-400">
            Sem filas de renderização. O poder da sua RTX é dedicado
            exclusivamente a você. Otimizado para TensorRT.
          </p>
</div>

<div className="group glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6 text-pink-300 group-hover:text-pink-200 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-coins w-6 h-6" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="6"></circle>
<path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
<path d="M7 6h1v4"></path>
<path d="m16.71 13.88.7.71-2.82 2.82"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">
            Previsibilidade de Custo
          </h3>
<p className="text-slate-400">
            Ideal para agências e produtores. Saiba exatamente quanto vai pagar,
            independentemente de gerar 10 minutos ou 100 horas.
          </p>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="container mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold mb-4">Planos Simples</h2>
<p className="text-slate-400">
            Cancele a qualquer momento. 3 dias de teste sem compromisso.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

<div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl font-medium text-slate-300 mb-2">Básico</h3>
<div className="text-3xl font-semibold mb-6">
              R$ 97,90
              <span className="text-base font-normal text-slate-500">/mês</span>
</div>
<ul className="space-y-4 mb-8 text-base text-slate-400">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                1 Instalação PC
              </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Geração Ilimitada
              </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                5 Vozes Clonadas
              </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Qualidade Standard
              </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-all font-medium">
              Começar Agora
            </button>
</div>

<div className="relative p-8 rounded-2xl bg-[#13131f] border border-purple-500/50 shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)] md:-mt-8 md:mb-8">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Mais Popular
            </div>
<h3 className="text-xl font-medium text-purple-300 mb-2">PRO</h3>
<div className="text-4xl font-semibold mb-6">
              R$ 167,90
              <span className="text-base font-normal text-slate-500">/mês</span>
</div>
<ul className="space-y-4 mb-8 text-base text-slate-300">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                3 Instalações PC
              </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Vozes Clonadas Infinitas
              </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Modelos Premium 48kHz
              </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-slate-200 transition-all relative overflow-hidden">
<span className="relative z-10">Começar Trial Grátis</span>
</button>
</div>

<div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl font-medium text-slate-300 mb-2">Business</h3>
<div className="text-3xl font-semibold mb-6">
              R$ 347,90
              <span className="text-base font-normal text-slate-500">/mês</span>
</div>
<ul className="space-y-4 mb-8 text-base text-slate-400">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                API Local REST
              </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Licença Comercial Full
              </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Exportação .WAV Raw
              </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Setup Assistido
              </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-all font-medium">
              Contatar Vendas
            </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black/20">
<div className="container mx-auto px-4 max-w-3xl">
<h2 className="text-3xl font-semibold mb-10 text-center">
          Dúvidas Frequentes
        </h2>
<div className="space-y-4">

<details className="group glass-card rounded-lg">
<summary className="flex justify-between items-center cursor-pointer list-none p-6 font-medium text-slate-200">
              Por que processamento local é melhor?
              <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-slate-400 mt-0 px-6 pb-6 leading-relaxed">
              O processamento local remove a latência de rede, elimina custos
              por caractere e garante privacidade total. Você não depende de
              servidores de terceiros e seus projetos confidenciais nunca deixam
              seu hardware.
            </div>
</details>
<details className="group glass-card rounded-lg">
<summary className="flex justify-between items-center cursor-pointer list-none p-6 font-medium text-slate-200">
              Funciona sem internet (Offline)?
              <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-slate-400 mt-0 px-6 pb-6 leading-relaxed">
              Sim! Após a validação inicial da licença (que ocorre a cada 30
              dias), todo o funcionamento é 100% offline. Você pode levar seu
              notebook para uma caverna e continuar gerando vozes.
            </div>
</details>
<details className="group glass-card rounded-lg">
<summary className="flex justify-between items-center cursor-pointer list-none p-6 font-medium text-slate-200">
              A qualidade é comparável ao ElevenLabs?
              <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-slate-400 mt-0 px-6 pb-6 leading-relaxed">
              Utilizamos os modelos de estado da arte (SOTA) mais recentes.
              Muitos usuários relatam qualidade idêntica ou superior, com a
              vantagem de poder fazer ajustes finos (fine-tuning) específicos
              para sua voz, algo impossível em plataformas cloud fechadas.
            </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden flex items-center justify-center text-center">

<div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 via-cyan-900/40 to-violet-900/40 z-0"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzBhMGEwZiIvPgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+Cjwvc3ZnPg==')] z-0 opacity-30"></div>
<div className="relative z-10 max-w-3xl px-6">
<h2 className="text-5xl md:text-7xl font-semibold text-white mb-8 tracking-tighter">
          Fim dos Créditos.
        </h2>
<p className="text-xl text-slate-300 mb-10">
          Junte-se à revolução do áudio generativo local. Seus dados, sua GPU,
          suas regras.
        </p>
<button className="px-10 py-5 bg-white text-[#0a0a0f] text-lg font-bold rounded-full hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-300">
          Iniciar Trial de 3 Dias
        </button>
<p className="mt-6 text-sm text-slate-500">
          Sem cobranças surpresa. Cancele a qualquer momento.
        </p>
</div>
</section>
<footer className="border-t border-white/5 py-12 bg-black">
<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
<img alt="Neo Labz Logo" className="h-8 w-auto invert" src="https://i.imgur.com/TqWkL6p.png"/>
<span className="font-display font-bold tracking-tight">NEO LABZ</span>
</div>
<div className="text-slate-600 text-sm">
          © 2024 Neo Labz Technologies. Todos os direitos reservados.
        </div>
<div className="flex gap-6 text-slate-500">
<a className="hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="hover:text-white transition-colors" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="discord"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
