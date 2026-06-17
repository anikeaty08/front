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



        // Form Submission Prevention (Visual only)
        document.getElementById('leadForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'ENVIANDO...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                btn.innerHTML = 'SOLICITAÇÃO ENVIADA <iconify-icon icon="solar:check-read-linear" width="18"></iconify-icon>';
                btn.style.background = '#3BDBC6';
                btn.style.color = '#140628';
                this.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.style.opacity = '1';
                }, 4000);
            }, 1500);
        });

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Header Scroll Effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg', 'shadow-black/20');
            } else {
                header.classList.remove('shadow-lg', 'shadow-black/20');
            }
        });

        // Lightweight Particles Canvas
        const canvas = document.getElementById('particles');
        if(canvas) {
            const ctx = canvas.getContext('2d');
            let particles = [];
            
            function resize() {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
            
            window.addEventListener('resize', resize);
            resize();

            for(let i=0; i<80; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 1.5 + 0.5,
                    d: Math.random() * 0.3 + 0.1,
                    alpha: Math.random() * 0.5 + 0.1
                });
            }

            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                particles.forEach(p => {
                    ctx.fillStyle = `rgba(231, 225, 255, ${p.alpha})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fill();
                    
                    p.y -= p.d;
                    if(p.y < 0) {
                        p.y = canvas.height;
                        p.x = Math.random() * canvas.width;
                    }
                });
                
                requestAnimationFrame(draw);
            }
            draw();
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
      

<header className="fixed top-0 w-full z-50 bg-[#140628]/70 backdrop-blur-md border-b border-white/5 transition-all duration-300" id="header">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a aria-label="ADDEE Logo" className="flex items-center gap-2" href="#">
<span className="text-xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#6B0BEA] to-[#C046FF]">ADDEE</span>
</a>
<div className="hidden md:flex items-center gap-6">

<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3BDBC6] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#3BDBC6]"></span>
</span>
<span className="text-xs font-medium text-[#E7E1FF]">Sistemas Operacionais</span>
</div>
<a className="inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-gradient-to-r from-[#6B0BEA] to-[#C046FF] text-white text-sm font-semibold hover:opacity-90 hover:shadow-[0_0_20px_-5px_#C046FF] transition-all" href="#contato">
                    FALAR COM ESPECIALISTA
                </a>
</div>
</div>
</header>

<div className="fixed bottom-0 left-0 w-full p-4 bg-[#140628]/90 backdrop-blur-lg border-t border-white/10 z-50 md:hidden flex justify-center pb-safe">
<a className="w-full text-center py-3.5 rounded-md bg-gradient-to-r from-[#6B0BEA] to-[#C046FF] text-white text-sm font-semibold shadow-[0_0_20px_-5px_#C046FF]" href="#contato">
            FALAR COM ESPECIALISTA
        </a>
</div>
<main>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">

<canvas className="absolute inset-0 z-0 opacity-40" id="particles"></canvas>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">

<div className="lg:col-span-7 flex flex-col items-start gap-8 reveal">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-xs text-[#E7E1FF] font-medium uppercase tracking-widest">Distribuidora Exclusiva</span>
<div className="w-px h-3 bg-white/20"></div>
<span className="font-semibold tracking-tighter text-sm text-white">ADDEE</span>
<span className="text-xs text-white/30">x</span>
<span className="font-semibold tracking-tighter text-sm">
<span className="text-white">HALO</span><span className="text-[#F8384B]">P</span><span className="text-[#152545] drop-shadow-[0_0_1px_rgba(255,255,255,0.4)]">S</span><span className="text-[#F8384B]">A</span>
</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                        Seu MSP cresceu e hoje falta visibilidade da operação
                    </h1>
<p className="text-base md:text-lg font-normal text-[#E7E1FF] max-w-2xl leading-relaxed">
                        Organize atendimentos, processos e dados para retomar o controle da operação e transformar crescimento desordenado em estratégia com o HaloPSA.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-gradient-to-r from-[#6B0BEA] to-[#C046FF] text-white text-base font-semibold hover:shadow-[0_0_30px_-5px_#C046FF] transition-all group" href="#contato">
                            ASSISTIR DEMO
                            <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-5 relative reveal delay-200 h-[400px] md:h-[500px]">
<div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-[#0E0620] glow-card group">

<img alt="Astronaut in space representing HaloPSA" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-tr from-[#140628] via-transparent to-transparent opacity-80"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#140628] via-[#140628]/40 to-transparent"></div>

<div className="absolute top-6 -left-4 md:left-6 p-3 rounded-xl bg-[#0E0620]/80 backdrop-blur-md border border-white/10 flex items-center gap-3 shadow-2xl animate-float z-20">
<div className="w-10 h-10 rounded-full bg-[#6B0BEA]/20 flex items-center justify-center border border-[#6B0BEA]/30">
<iconify-icon className="text-[#C046FF]" icon="solar:ticket-linear" width="20"></iconify-icon>
</div>
<div className="pr-2">
<div className="text-xs font-medium text-[#E7E1FF] mb-0.5">Tickets Abertos</div>
<div className="flex items-end gap-2">
<span className="text-xl font-semibold tracking-tight text-white leading-none">124</span>
<span className="text-xs text-[#3BDBC6] flex items-center leading-none mb-0.5">
<iconify-icon icon="solar:arrow-right-down-linear" width="12"></iconify-icon> 12%
                                    </span>
</div>
</div>
</div>

<div className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 p-3 rounded-xl bg-[#0E0620]/80 backdrop-blur-md border border-white/10 shadow-2xl animate-float-delayed z-20 w-48">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-[#E7E1FF]">Equipe Online</span>
<div className="w-8 h-4 bg-[#6B0BEA] rounded-full relative cursor-pointer">
<div className="absolute right-1 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3E067F] to-[#6B0BEA] border-2 border-[#0E0620] flex items-center justify-center text-xs font-semibold text-white">JS</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3E067F] to-[#6B0BEA] border-2 border-[#0E0620] flex items-center justify-center text-xs font-semibold text-white">AM</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3E067F] to-[#6B0BEA] border-2 border-[#0E0620] flex items-center justify-center text-xs font-semibold text-white">FR</div>
<div className="w-8 h-8 rounded-full bg-[#1A0D35] border-2 border-[#0E0620] flex items-center justify-center text-xs font-medium text-[#E7E1FF]">+4</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0E0620]/90 backdrop-blur-md border border-white/10 shadow-2xl z-20">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#3BDBC6]" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span className="text-xs font-medium tracking-tight text-white">SLA Global Health</span>
</div>
<span className="text-xs font-semibold text-[#3BDBC6]">98.5%</span>
</div>

<div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#6B0BEA] to-[#3BDBC6] w-[98.5%] rounded-full relative">
<div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 animate-pulse"></div>
</div>
</div>
<div className="flex justify-between mt-2 text-xs text-[#E7E1FF]/50">
<span>Hoje</span>
<span>Meta: 95%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0E0620] relative border-t border-white/5 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6B0BEA]/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl reveal">
<div className="flex flex-col items-center text-center gap-8">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B0BEA]/20 to-[#C046FF]/20 flex items-center justify-center border border-[#C046FF]/30 mb-2">
<iconify-icon className="text-[#C046FF]" icon="solar:danger-triangle-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                            Crescer não deveria ser o maior risco do seu MSP
                        </h2>
<div className="text-base md:text-lg font-normal text-[#E7E1FF] space-y-6 text-left md:text-center w-full max-w-3xl leading-relaxed">
<p>
                                Todo MSP chega em um ponto onde o problema deixa de ser técnico. Os atendimentos se multiplicam, a equipe fica sobrecarregada, tudo parece urgente e o controle começa a escapar.
                            </p>

<div className="relative py-4 px-6 border-l-2 border-[#3BDBC6] bg-[#3BDBC6]/5 rounded-r-lg text-left my-8">
<iconify-icon className="absolute top-4 right-4 text-[#3BDBC6]/20" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="text-white font-medium text-lg relative z-10">
                                    Você trabalha mais, cresce, mas sente que a operação não acompanha.
                                </p>
</div>
<p>
                                E o medo não é crescer — é perder clientes, perder margem, depender demais das pessoas certas e transformar o crescimento em mais estresse, não em resultado.
                            </p>
<p className="text-[#C046FF] font-medium pt-2 border-t border-white/10 mt-6 inline-block">
                                É exatamente isso que a ADDEE resolve ao implementar o HaloPSA.
                            </p>
</div>
<div className="ghost-btn-wrapper mt-4">
<a className="ghost-btn-inner block px-8 py-4 text-white text-base font-semibold w-full text-center flex items-center justify-center gap-2" href="#contato">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
                                ENTENDER A SOLUÇÃO
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#140628] px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 md:mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Para quem é o HaloPSA</h2>
<p className="text-base md:text-lg font-normal text-[#E7E1FF]">Somos a plataforma definitiva para MSPs que…</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">


<div className="bg-[#1A0D35] p-6 rounded-2xl glow-card transition-all duration-300 reveal border-t border-t-[#6B0BEA]/30 relative overflow-hidden group">

<div className="absolute top-6 right-6 w-5 h-5 rounded bg-[#6B0BEA] border border-[#C046FF] flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<iconify-icon className="text-[#3BDBC6] mb-5 block" icon="solar:rocket-linear" width="28"></iconify-icon>
<h3 className="text-sm font-semibold text-white mb-2 tracking-tight">Crescimento Reativo</h3>
<p className="text-sm font-normal text-[#E7E1FF] leading-relaxed">
                            Já superaram a fase reativa e estão crescendo, mas percebem que a operação não acompanha esse ritmo.
                        </p>
</div>

<div className="bg-[#1A0D35] p-6 rounded-2xl glow-card transition-all duration-300 reveal delay-100 border-t border-t-[#3BDBC6]/30 relative overflow-hidden group">
<div className="absolute top-6 right-6 w-5 h-5 rounded bg-[#6B0BEA] border border-[#C046FF] flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<iconify-icon className="text-[#3BDBC6] mb-5 block" icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
<h3 className="text-sm font-semibold text-white mb-2 tracking-tight">Equipes Sem Processos</h3>
<p className="text-sm font-normal text-[#E7E1FF] leading-relaxed">
                            Possuem uma equipe técnica em expansão e sentem que, sem processos claros, o improviso começa a travar o negócio.
                        </p>
</div>

<div className="bg-[#1A0D35] p-6 rounded-2xl glow-card transition-all duration-300 reveal delay-200 border-t border-t-[#C046FF]/30 relative overflow-hidden group">
<div className="absolute top-6 right-6 w-5 h-5 rounded bg-[#6B0BEA] border border-[#C046FF] flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<iconify-icon className="text-[#3BDBC6] mb-5 block" icon="solar:eye-linear" width="28"></iconify-icon>
<h3 className="text-sm font-semibold text-white mb-2 tracking-tight">Falta de Visibilidade</h3>
<p className="text-sm font-normal text-[#E7E1FF] leading-relaxed">
                            Gerenciam um volume alto de dispositivos e atendimentos e hoje operam sem a visibilidade necessária para ter controle real.
                        </p>
</div>

<div className="bg-[#1A0D35] p-6 rounded-2xl glow-card transition-all duration-300 reveal border-t border-t-[#6B0BEA]/30 relative overflow-hidden group">
<div className="absolute top-6 right-6 w-5 h-5 rounded bg-[#6B0BEA] border border-[#C046FF] flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<iconify-icon className="text-[#3BDBC6] mb-5 block" icon="solar:shield-check-linear" width="28"></iconify-icon>
<h3 className="text-sm font-semibold text-white mb-2 tracking-tight">Profissionalização Necessária</h3>
<p className="text-sm font-normal text-[#E7E1FF] leading-relaxed">
                            Entendem que profissionalizar a operação não é opcional — é o que sustenta o crescimento que já está acontecendo.
                        </p>
</div>

<div className="bg-[#1A0D35] p-6 rounded-2xl glow-card transition-all duration-300 reveal delay-100 border-t border-t-[#3BDBC6]/30 relative overflow-hidden group">
<div className="absolute top-6 right-6 w-5 h-5 rounded bg-[#6B0BEA] border border-[#C046FF] flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<iconify-icon className="text-[#3BDBC6] mb-5 block" icon="solar:chart-square-linear" width="28"></iconify-icon>
<h3 className="text-sm font-semibold text-white mb-2 tracking-tight">Gestão por Dados</h3>
<p className="text-sm font-normal text-[#E7E1FF] leading-relaxed">
                            Precisam de dados, visibilidade e relatórios para tomar decisões estratégicas e não apenas reagir aos problemas.
                        </p>
</div>

<div className="bg-[#1A0D35] p-6 rounded-2xl glow-card transition-all duration-300 reveal delay-200 border-t border-t-[#C046FF]/30 relative overflow-hidden group">
<div className="absolute top-6 right-6 w-5 h-5 rounded bg-[#6B0BEA] border border-[#C046FF] flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<iconify-icon className="text-[#3BDBC6] mb-5 block" icon="solar:layers-linear" width="28"></iconify-icon>
<h3 className="text-sm font-semibold text-white mb-2 tracking-tight">Previsibilidade</h3>
<p className="text-sm font-normal text-[#E7E1FF] leading-relaxed">
                            Buscam organizar o crescimento, trazendo previsibilidade para uma operação que já se tornou complexa.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0E0620] px-6 relative border-t border-white/5 overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(107,11,234,0.05),transparent_50%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 md:mb-24 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 leading-tight">
                        A implementação não é apenas ativar um sistema
                    </h2>
<p className="text-base md:text-lg font-normal text-[#E7E1FF] max-w-2xl mx-auto">
                        É um processo guiado para transformar a operação do seu MSP em um modelo profissional, organizado e escalável.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative pl-6 md:pl-12">

<div className="absolute left-[39px] md:left-[63px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#6B0BEA] via-[#C046FF] to-[#3BDBC6]/20"></div>
<div className="flex flex-col gap-10 md:gap-14">

<div className="relative pl-12 md:pl-16 reveal">
<div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#1A0D35] flex items-center justify-center font-semibold text-white border-2 border-[#6B0BEA] text-sm z-10 shadow-[0_0_15px_rgba(107,11,234,0.5)]">1</div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-white mb-2">Diagnóstico da operação</h3>
<p className="text-sm font-normal text-[#E7E1FF] leading-relaxed">
                                    Entendemos como seu MSP funciona hoje, onde estão os gargalos, riscos e desperdícios operacionais.
                                </p>
</div>

<div className="relative pl-12 md:pl-16 reveal">
<div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#1A0D35] flex items-center justify-center font-semibold text-white border-2 border-[#6B0BEA] text-sm z-10">2</div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-white mb-2">Estruturação de processos</h3>
<p className="text-sm font-normal text-[#E7E1FF] leading-relaxed">
                                    Organizamos atendimentos, prioridades, SLAs, responsabilidades e padrões dentro do HaloPSA.
                                </p>
</div>

<div className="relative pl-12 md:pl-16 reveal">
<div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#1A0D35] flex items-center justify-center font-semibold text-white border-2 border-[#C046FF] text-sm z-10 shadow-[0_0_15px_rgba(192,70,255,0.3)]">3</div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-white mb-2">Implementação técnica</h3>
<p className="text-sm font-normal text-[#E7E1FF] leading-relaxed">
                                    Configuramos a plataforma de acordo com o nível de maturidade e o modelo de serviços do seu MSP.
                                </p>
</div>

<div className="relative pl-12 md:pl-16 reveal">
<div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#1A0D35] flex items-center justify-center font-semibold text-white border-2 border-[#3BDBC6] text-sm z-10">4</div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-white mb-2">Visibilidade total</h3>
<p className="text-sm font-normal text-[#E7E1FF] leading-relaxed">
                                    Tudo passa a acontecer em um único lugar: tickets, clientes, dispositivos, equipe e indicadores.
                                </p>
</div>
</div>
</div>

<div className="relative w-full h-full min-h-[400px] reveal delay-200 lg:block hidden">

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-2xl border border-white/10 p-6 flex flex-col gap-4">

<div className="flex items-center justify-between border-b border-white/5 pb-4 mb-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6B0BEA] to-[#C046FF] flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:chart-square-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white">Dashboard MSP</span>
</div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-2">
<div className="bg-[#140628]/50 rounded-xl p-4 border border-white/5">
<span className="text-xs text-[#E7E1FF]/70">Tempo Médio Resolução</span>
<div className="text-xl font-semibold text-white mt-1">1.2h <span className="text-xs text-[#3BDBC6] font-normal">-15%</span></div>
</div>
<div className="bg-[#140628]/50 rounded-xl p-4 border border-white/5">
<span className="text-xs text-[#E7E1FF]/70">Eficiência da Equipe</span>
<div className="text-xl font-semibold text-white mt-1">94% <span className="text-xs text-[#3BDBC6] font-normal">+5%</span></div>
</div>
</div>

<div className="flex-1 bg-[#140628]/50 rounded-xl border border-white/5 p-4 flex flex-col gap-3">
<span className="text-xs font-medium text-white mb-1">Processo de Onboarding Ativo</span>

<div className="w-full bg-white/5 rounded-full h-2 mb-2">
<div className="bg-[#C046FF] h-2 rounded-full w-[75%]"></div>
</div>

<div className="flex items-center gap-3 p-2 rounded bg-white/5 border border-white/5">
<div className="w-4 h-4 rounded-sm bg-[#3BDBC6] flex items-center justify-center"><iconify-icon className="text-[#140628]" icon="solar:check-read-linear" width="10"></iconify-icon></div>
<span className="text-xs text-white line-through opacity-50">Auditoria Inicial</span>
</div>
<div className="flex items-center gap-3 p-2 rounded bg-white/5 border border-white/5">
<div className="w-4 h-4 rounded-sm bg-[#3BDBC6] flex items-center justify-center"><iconify-icon className="text-[#140628]" icon="solar:check-read-linear" width="10"></iconify-icon></div>
<span className="text-xs text-white line-through opacity-50">Setup de SLAs</span>
</div>
<div className="flex items-center gap-3 p-2 rounded bg-[#6B0BEA]/20 border border-[#6B0BEA]/50">
<div className="w-4 h-4 rounded-sm border border-[#6B0BEA] flex items-center justify-center"><div className="w-2 h-2 bg-[#6B0BEA] rounded-sm"></div></div>
<span className="text-xs text-white font-medium">Treinamento da Equipe</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#140628] px-6 relative border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 md:mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 leading-tight">Um sistema único para sustentar toda a operação</h2>
<p className="text-base md:text-lg font-normal text-[#E7E1FF] max-w-2xl mx-auto">Atendimento, vendas, faturamento e tecnologia conectados para eliminar o improviso.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">

<div className="bg-[#1A0D35] rounded-2xl glow-card group reveal overflow-hidden flex flex-col">
<div className="p-8 pb-4">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#6B0BEA]/20 transition-colors">
<iconify-icon className="text-white" icon="solar:widget-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Service Desk</h3>
<p className="text-sm font-normal text-[#E7E1FF] leading-relaxed">
                                Centralize incidentes, organize fluxos de trabalho e cumpra SLAs com processos automatizados.
                            </p>
</div>

<div className="mt-auto bg-[#0E0620] p-4 mx-4 mb-4 rounded-xl border border-white/5 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F8384B]"></div>
<div className="flex items-center justify-between mb-2 pl-2">
<span className="text-xs font-semibold text-white">TKT-8902</span>
<span className="text-xs bg-[#F8384B]/10 text-[#F8384B] px-2 py-0.5 rounded border border-[#F8384B]/20">Crítico</span>
</div>
<div className="text-xs text-[#E7E1FF]/70 truncate pl-2">Falha de conexão VPN - Filial Sul</div>
<div className="flex items-center gap-2 mt-3 pl-2">
<div className="w-5 h-5 rounded-full bg-[#6B0BEA] text-[0.65rem] flex items-center justify-center text-white">JS</div>
<span className="text-xs text-white/50">Atribuído a João</span>
</div>
</div>
</div>

<div className="bg-[#1A0D35] rounded-2xl glow-card group reveal delay-100 overflow-hidden flex flex-col">
<div className="p-8 pb-4">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#6B0BEA]/20 transition-colors">
<iconify-icon className="text-white" icon="solar:pie-chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Vendas &amp; CRM</h3>
<p className="text-sm font-normal text-[#E7E1FF] leading-relaxed">
                                Organize contas, acompanhe oportunidades e mantenha times técnicos e comerciais alinhados.
                            </p>
</div>

<div className="mt-auto bg-[#0E0620] p-4 mx-4 mb-4 rounded-xl border border-white/5">
<div className="flex justify-between items-end mb-3">
<span className="text-xs text-[#E7E1FF]">Pipeline de Vendas</span>
<span className="text-sm font-semibold text-white">R$ 145.000</span>
</div>
<div className="flex h-3 w-full rounded-full overflow-hidden gap-1">
<div className="bg-[#6B0BEA] w-[40%]"></div>
<div className="bg-[#C046FF] w-[30%]"></div>
<div className="bg-[#3BDBC6] w-[30%]"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-[#E7E1FF]/50">
<span>Qualificação</span>
<span>Proposta</span>
<span>Fechamento</span>
</div>
</div>
</div>

<div className="bg-[#1A0D35] rounded-2xl glow-card group reveal overflow-hidden flex flex-col">
<div className="p-8 pb-4">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#6B0BEA]/20 transition-colors">
<iconify-icon className="text-white" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Faturamento</h3>
<p className="text-sm font-normal text-[#E7E1FF] leading-relaxed">
                                Rastreie contratos, valores e faturamento com base no que foi acordado, sem perder receita.
                            </p>
</div>

<div className="mt-auto bg-[#0E0620] p-4 mx-4 mb-4 rounded-xl border border-white/5">
<div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
<span className="text-xs text-white">Fatura #INV-2023</span>
<span className="text-xs font-medium text-[#3BDBC6] bg-[#3BDBC6]/10 px-2 py-0.5 rounded">Pago</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#E7E1FF]/50" icon="solar:document-text-linear" width="14"></iconify-icon>
<span className="text-xs text-[#E7E1FF]/70">Contrato Suporte Mensal</span>
</div>
<span className="text-sm font-semibold text-white">R$ 4.500</span>
</div>
</div>
</div>

<div className="bg-[#1A0D35] rounded-2xl glow-card group reveal delay-100 overflow-hidden flex flex-col">
<div className="p-8 pb-4">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#6B0BEA]/20 transition-colors">
<iconify-icon className="text-white" icon="solar:link-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Integrações Globais</h3>
<p className="text-sm font-normal text-[#E7E1FF] leading-relaxed">
                                Conecte o HaloPSA às soluções RMM, documentação e ferramentas que seu MSP já utiliza.
                            </p>
</div>

<div className="mt-auto bg-[#0E0620] p-6 mx-4 mb-4 rounded-xl border border-white/5 flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<span className="text-xs font-bold text-white tracking-tighter">HALO</span>
</div>
<div className="flex-1 h-px bg-gradient-to-r from-white/10 via-[#3BDBC6] to-white/10 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0E0620] px-1">
<iconify-icon className="text-[#3BDBC6]" icon="solar:transfer-horizontal-linear" width="14"></iconify-icon>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<span className="text-xs font-bold text-[#E7E1FF]">RMM</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#0E0620]" id="contato">

<div className="absolute inset-0 z-0 bg-gradient-to-br from-[#140628] to-[#3E067F] opacity-50"></div>
<div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(192,70,255,0.1),transparent_70%)] pointer-events-none"></div>
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
<iconify-icon className="text-[#3BDBC6]" icon="solar:shield-star-linear" width="16"></iconify-icon>
<span className="text-xs text-[#E7E1FF]">Distribuidora Oficial no Brasil</span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                        Seu MSP está pronto para operar com o HaloPSA?
                    </h2>
<p className="text-base md:text-lg font-normal text-[#E7E1FF] leading-relaxed mb-8">
                        Converse com um especialista da ADDEE para avaliar o nível de maturidade da sua operação e entender se este é o momento certo para investir em uma estrutura profissional de gestão.
                    </p>

<div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4 max-w-sm">
<div className="relative w-12 h-12 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-[#3BDBC6] animate-[dash_2s_ease-out_forwards]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="100, 100" strokeWidth="3" style={{strokeDasharray: '85, 100'}}></path>
</svg>
<span className="absolute text-xs font-semibold text-white">85%</span>
</div>
<div>
<div className="text-sm font-medium text-white">Maturidade Operacional</div>
<div className="text-xs text-[#E7E1FF]/70">Pronto para escalar</div>
</div>
</div>
</div>
<div className="bg-[#140628]/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 shadow-[0_0_50px_-15px_rgba(107,11,234,0.3)] reveal delay-100">
<form className="flex flex-col gap-5" id="leadForm">
<div className="flex flex-col gap-2 relative">
<label className="text-xs font-semibold text-[#E7E1FF] ml-1" htmlFor="nome">Nome completo</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-white/40" icon="solar:user-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#6B0BEA] focus:ring-1 focus:ring-[#6B0BEA] transition-all" id="nome" placeholder="Seu nome" required="" type="text"/>
</div>
</div>
<div className="flex flex-col gap-2 relative">
<label className="text-xs font-semibold text-[#E7E1FF] ml-1" htmlFor="email">E-mail corporativo</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-white/40" icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#6B0BEA] focus:ring-1 focus:ring-[#6B0BEA] transition-all" id="email" placeholder="nome@seumsp.com.br" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="flex flex-col gap-2 relative">
<label className="text-xs font-semibold text-[#E7E1FF] ml-1" htmlFor="empresa">Empresa</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-white/40" icon="solar:buildings-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#6B0BEA] focus:ring-1 focus:ring-[#6B0BEA] transition-all" id="empresa" placeholder="Nome do MSP" required="" type="text"/>
</div>
</div>
<div className="flex flex-col gap-2 relative">
<label className="text-xs font-semibold text-[#E7E1FF] ml-1" htmlFor="telefone">WhatsApp</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-white/40" icon="solar:phone-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#6B0BEA] focus:ring-1 focus:ring-[#6B0BEA] transition-all" id="telefone" placeholder="(11) 99999-9999" required="" type="tel"/>
</div>
</div>
</div>
<button className="w-full mt-4 bg-gradient-to-r from-[#6B0BEA] to-[#C046FF] text-white font-semibold text-sm py-4 rounded-lg hover:shadow-[0_0_30px_-5px_#C046FF] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2" type="submit">
                            SOLICITAR DIAGNÓSTICO
                            <iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</button>
<div className="flex items-center justify-center gap-2 mt-2">
<iconify-icon className="text-[#E7E1FF]/50" icon="solar:lock-keyhole-linear" width="12"></iconify-icon>
<p className="text-xs text-[#E7E1FF]/60 text-center">
                                Seus dados estão seguros. Não enviamos spam.
                            </p>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-[#0E0620] py-12 px-6 border-t border-white/5 pb-24 md:pb-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="text-xl font-semibold tracking-tighter text-white">ADDEE</span>
<p className="text-xs text-[#E7E1FF]/60 text-center md:text-left">
                    © 2026 ADDEE — Distribuidora Exclusiva HaloPSA no Brasil
                </p>
</div>
<div className="flex items-center gap-6 text-xs text-[#E7E1FF]/60">
<a className="hover:text-white transition-colors" href="https://addee.com.br/politica-de-privacidade/" rel="noopener noreferrer" target="_blank">Política de Privacidade</a>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<a className="hover:text-white transition-colors" href="#">Termos de Uso</a>
</div>
</div>
</footer>



    </>
  );
}
