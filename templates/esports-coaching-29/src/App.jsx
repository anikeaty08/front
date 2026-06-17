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



        const { createClient } = supabase;
        const supabaseClient = createClient(
            "https://oriolihdzrhmrjgmrfhb.supabase.co",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yaW9saWhkenJobXJqZ21yZmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4MjI5OTUsImV4cCI6MjA3OTM5ODk5NX0.MWIV95WdTV_01j5rwkkpBQyXL3bvsDW0EC2l3MMs0uY"
        );

        lucide.createIcons();

        function showLogin() {
            document.getElementById('loginModal').classList.remove('hidden');
            document.getElementById('loginModal').classList.add('flex');
        }

        function showSignup() {
            document.getElementById('signupModal').classList.remove('hidden');
            document.getElementById('signupModal').classList.add('flex');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.add('hidden');
            document.getElementById(modalId).classList.remove('flex');
        }

        function selectPlan(plan) {
            document.getElementById('selectedPlan').value = plan;
            showSignup();
        }

        async function handleLogin(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            try {
                const { data, error } = await supabaseClient.auth.signInWithPassword({
                    email: email,
                    password: password
                });
                if (error) throw error;
                alert('Login realizado com sucesso!');
                window.location.href = 'home.html';
            } catch (error) {
                alert('Erro ao fazer login: ' + error.message);
            }
        }

        async function handleSignup(e) {
            e.preventDefault();
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const name = document.getElementById('signupName').value;
            const age = document.getElementById('signupAge').value;
            const state = document.getElementById('signupState').value;
            const city = document.getElementById('signupCity').value;
            const rank = document.getElementById('signupRank').value;
            const riotId = document.getElementById('signupRiotId').value;
            const goal = document.getElementById('signupGoal').value;
            const plan = document.getElementById('selectedPlan').value;

            try {
                const { data: authData, error: authError } = await supabaseClient.auth.signUp({
                    email: email,
                    password: password
                });
                if (authError) throw authError;

                const { error: profileError } = await supabaseClient
                    .from('users')
                    .insert([{
                        user_id: authData.user.id,
                        email: email,
                        name: name,
                        age: parseInt(age),
                        state: state,
                        city: city,
                        rank: rank,
                        riot_id: riotId,
                        goal: goal,
                        plan: plan,
                        trial_end_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
                    }]);
                if (profileError) throw profileError;

                alert('Conta criada com sucesso! Seu teste gratuito de 3 dias começou.');
                window.location.href = 'home.html';
            } catch (error) {
                alert('Erro ao criar conta: ' + error.message);
            }
        }

        document.getElementById('loginModal').addEventListener('click', function(e) {
            if (e.target === this) closeModal('loginModal');
        });

        document.getElementById('signupModal').addEventListener('click', function(e) {
            if (e.target === this) closeModal('signupModal');
        });

        supabaseClient.auth.onAuthStateChange((event, session) => {
            if (session && window.location.pathname === '/') {
                window.location.href = 'home.html';
            }
        });
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute inset-0 bg-grid z-[-1]"></div>
</div>

<nav className="fixed top-0 w-full bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex flex-col relative group cursor-default">
<div className="flex items-center gap-3">
<div className="relative">
<div className="absolute inset-0 bg-orange-500 blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
<svg className="relative z-10 text-orange-500" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<span className="text-2xl font-bold italic tracking-tight font-pt-serif text-white group-hover:text-orange-50 transition-colors duration-300">DYNASTYGG</span>
</div>
<span className="text-[10px] uppercase tracking-widest text-neutral-500 ml-[40px] font-medium">ferramenta gamer profissional</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#sobre">Sobre</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#planos">Planos</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#beneficios">Benefícios</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" onclick="showLogin()">Entrar</button>
<button className="group relative px-5 py-2.5 rounded-lg overflow-hidden" onclick="showSignup()">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-amber-600 transition-all duration-300 ease-out group-hover:scale-105"></div>
<span className="relative text-sm font-semibold text-white">Começar Agora</span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 sm:px-6 lg:px-8 px-4 max-w-7xl mx-auto overflow-hidden">
<div className="text-center max-w-5xl mx-auto relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 hover:border-orange-500/30 transition-colors duration-300 cursor-default">
<span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">Chegue no Radiante ainda este ato</span>
</div>
<h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                Pare de ser <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600 glow-text">mediano</span>.<br/>
                Jogue como um <span className="text-white">Pro</span>.
            </h1>
<p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Não te falta talento, falta <span className="text-neutral-200 font-medium">método</span>. Acesso exclusivo às estratégias, rotinas e ferramentas ocultas que os jogadores de elite usam para dominar o cenário competitivo.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg text-base font-semibold hover:bg-neutral-200 transition-all transform hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" onclick="showSignup()">
                    Iniciar teste gratuito de 3 dias
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white rounded-lg text-base font-medium hover:bg-white/5 hover:border-white/20 transition-all" onclick="window.open('https://www.instagram.com/desirefps_/', '_blank')">
                    Conheça @desirefps_
                </button>
</div>
<div className="mt-12 flex items-center justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">

<span className="text-lg font-bold font-montserrat tracking-widest">FURIA</span>
<span className="text-lg font-bold font-jakarta tracking-widest">LOUD</span>
<span className="text-lg font-bold font-bricolage tracking-widest">MIBR</span>
<span className="text-lg font-bold font-space-grotesk tracking-widest">RED</span>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080808] border-y border-white/5" id="sobre">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
<img alt="Desire Profile" className="w-full h-full object-cover opacity-90 hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e431d07b-2b67-44cf-8b22-4cc55d96a609_1600w.png"/>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
<div className="absolute bottom-6 left-6">
<p className="text-orange-400 font-medium text-sm mb-1 uppercase tracking-widest">Pro Player</p>
<p className="text-white text-2xl font-bold">Leandro "desire" Araújo</p>
</div>
</div>
</div>
<div className="space-y-8">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
<span className="text-xs font-semibold text-orange-400 tracking-wide uppercase">A Mente por trás</span>
</div>
<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">Quem é desire?</h2>
<div className="space-y-4 text-neutral-400 leading-relaxed text-lg">
<p>Me chamo Leandro ''desire'' Araújo. Minha jornada começou em São Luís, mas minha ambição sempre foi global. Atingi o <span className="text-white font-medium">Radiante aos 15 anos</span>, transformando uma paixão em carreira.</p>
<p>Em 2023, fui finalista da Série A. Hoje, atuo no cenário profissional, com passagens pela TBK e FURIA Academy (VCB 2025). Vivi na pele o que é necessário para estar no topo.</p>
<p>Criei a DYNASTYGG para ser o atalho que eu não tive: uma ferramenta que condensa anos de experiência em alta performance.</p>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4 pt-4">
<div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors">
<svg className="w-6 h-6 text-orange-500 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
<h3 className="text-white font-semibold mb-1">Elite do VCB</h3>
<p className="text-sm text-neutral-500">Atuando ativamente no circuito profissional brasileiro.</p>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors">
<svg className="w-6 h-6 text-orange-500 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-white font-semibold mb-1">Radiante Constante</h3>
<p className="text-sm text-neutral-500">4 anos consecutivos no ranque máximo do Valorant.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">Análise Tática</h2>
<p className="text-neutral-400">Conteúdo de alto nível para sua evolução.</p>
</div>
<a className="text-sm font-medium text-orange-500 hover:text-orange-400 flex items-center gap-1" href="https://www.youtube.com/@desirefps" target="_blank">
                    Ver canal completo <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
<div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-300 z-10 pointer-events-none"></div>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="grayscale-[50%] group-hover:grayscale-0 transition duration-500" frameborder="0" height="220" src="https://youtu.be/K0z-hsQcaYk?si=FupeuiEcAapV1mHt" title="YouTube video player" width="100%"></iframe>
<div className="p-4">
<h3 className="text-white font-medium line-clamp-2 group-hover:text-orange-400 transition">Análise aprofundada de mecânicas avançadas</h3>
</div>
</div>
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
<div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-300 z-10 pointer-events-none"></div>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="grayscale-[50%] group-hover:grayscale-0 transition duration-500" frameborder="0" height="220" src="https://youtu.be/aWJQHleJcvA?si=9xoMMY4VkkSdGXFB" title="YouTube video player" width="100%"></iframe>
<div className="p-4">
<h3 className="text-white font-medium line-clamp-2 group-hover:text-orange-400 transition">Segredos de posicionamento em alto nível</h3>
</div>
</div>
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
<div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-300 z-10 pointer-events-none"></div>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="grayscale-[50%] group-hover:grayscale-0 transition duration-500" frameborder="0" height="220" src="https://youtu.be/9aIuJh0MUe8?si=elDd7CYJBBoTZQC8" title="YouTube video player" width="100%"></iframe>
<div className="p-4">
<h3 className="text-white font-medium line-clamp-2 group-hover:text-orange-400 transition">Como treinar sua mira como um pro</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080808] border-y border-white/5">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">Para quem é a DYNASTY</h2>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto">Identifique seu perfil e veja como vamos transformar seu jogo.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-neutral-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-neutral-800/50 hover:border-orange-500/40 transition duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition duration-300 transform group-hover:scale-110">
<svg className="w-32 h-32 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition">
<svg className="text-orange-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">Rumo ao Radiante</h3>
<p className="text-neutral-400 text-sm leading-relaxed relative z-10">Mude sua realidade. Aprenda os rituais pré-jogo, aplique ciência no dia a dia e sinta a evolução em cada partida ranqueada.</p>
</div>

<div className="group bg-neutral-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-neutral-800/50 hover:border-orange-500/40 transition duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition duration-300 transform group-hover:scale-110">
<svg className="w-32 h-32 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
</div>
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition">
<svg className="text-orange-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">Futuro Pro Player</h3>
<p className="text-neutral-400 text-sm leading-relaxed relative z-10">Entre nas filas certas, construa networking no cenário e jogue de igual para igual com seus ídolos.</p>
</div>

<div className="group bg-neutral-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-neutral-800/50 hover:border-orange-500/40 transition duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition duration-300 transform group-hover:scale-110">
<svg className="w-32 h-32 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition">
<svg className="text-orange-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">Monetização</h3>
<p className="text-neutral-400 text-sm leading-relaxed relative z-10">Domine as ferramentas que colocam dinheiro no bolso da elite do Valorant. O caminho para viver do jogo.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] relative overflow-hidden" id="beneficios">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">Arsenal Completo</h2>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto">Tecnologia e metodologia unidas para sua performance.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">

<div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-orange-500/20 transition duration-300 flex gap-5 items-start">
<div className="shrink-0 p-3 rounded-lg bg-orange-500/10 text-orange-400">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-2">Performance via IA</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Rotina customizada e feedback recorrente impulsionados por Inteligência Artificial avançada.</p>
</div>
</div>

<div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-orange-500/20 transition duration-300 flex gap-5 items-start">
<div className="shrink-0 p-3 rounded-lg bg-orange-500/10 text-orange-400">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-2">Radar Competitivo</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Alertas de campeonatos e peneiras. Esteja no lugar certo na hora certa.</p>
</div>
</div>

<div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-orange-500/20 transition duration-300 flex gap-5 items-start">
<div className="shrink-0 p-3 rounded-lg bg-orange-500/10 text-orange-400">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-2">Blindagem Mental</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Combata o overthinking e domine o estado de Flow com técnicas da psicologia do esporte.</p>
</div>
</div>

<div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-orange-500/20 transition duration-300 flex gap-5 items-start">
<div className="shrink-0 p-3 rounded-lg bg-orange-500/10 text-orange-400">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-2">Fisioterapia Gamer</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Previna lesões, melhore o tempo de resposta e garanta longevidade na sua carreira.</p>
</div>
</div>

<div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-orange-500/20 transition duration-300 flex gap-5 items-start">
<div className="shrink-0 p-3 rounded-lg bg-orange-500/10 text-orange-400">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-2">Aim Lab &amp; In-Game</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Rotinas de treino de mira comprovadas para tornar sua mecânica impecável.</p>
</div>
</div>

<div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-orange-500/20 transition duration-300 flex gap-5 items-start">
<div className="shrink-0 p-3 rounded-lg bg-orange-500/10 text-orange-400">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-2">Feedback Instantâneo</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Correções pontuais para erros comuns que você comete sem perceber.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080808] border-t border-white/5" id="planos">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">Planos de Acesso</h2>
<p className="text-lg text-neutral-400">3 dias grátis. Evolução constante.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="bg-neutral-900 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition duration-300">
<h3 className="text-xl font-semibold mb-4 text-white">Inicial</h3>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-3xl font-bold text-white">R$ 79,99</span>
<span className="text-neutral-500 text-sm">/mês</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Feedbacks de melhoria instantânea
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Curadoria de alta performance
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Intro a psicologia e fisioterapia
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Ferramentas de times profissionais
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Comunidade Discord exclusiva
                        </li>
</ul>
<button className="w-full bg-white/5 border border-white/10 text-white py-3 rounded-lg font-medium hover:bg-white/10 transition" onclick="selectPlan('inicial')">
                        Testar Grátis
                    </button>
</div>

<div className="bg-gradient-to-b from-neutral-800 to-neutral-900 border border-orange-500/50 rounded-2xl p-8 relative transform lg:-translate-y-4 shadow-2xl shadow-orange-900/20">
<div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">Mais Popular</div>
<h3 className="text-xl font-semibold mb-4 text-orange-400">Intermediário</h3>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-bold text-white">R$ 149,99</span>
<span className="text-neutral-500 text-sm">/mês</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-2 text-sm font-semibold text-orange-400">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Tudo do Plano Inicial
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Análise de performance com IA
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Domínio mental &amp; Treino de mira
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Guia de monetização no Valorant
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Alertas de Campeonatos
                        </li>
</ul>
<button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-500 transition shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)]" onclick="selectPlan('intermediario')">
                        Testar Grátis
                    </button>
</div>

<div className="bg-neutral-900 border border-yellow-500/30 rounded-2xl p-8 relative overflow-hidden group hover:border-yellow-500/50 transition duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none"></div>
<div className="flex items-center gap-2 mb-4">
<h3 className="text-xl font-semibold text-yellow-500">Dinastia Total</h3>
<svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path></svg>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-3xl font-bold text-white">R$ 349,99</span>
<span className="text-neutral-500 text-sm">/mês</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-2 text-sm font-semibold text-yellow-500">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Planos Intermediário + Inicial
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-yellow-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Análise semanal de VOD (1x1)
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-yellow-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Manipulação de MMR (Segredos)
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-yellow-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Mentoria via WhatsApp Pessoal
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-yellow-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Análise ilimitada de Tracker.gg
                        </li>
</ul>
<button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-3 rounded-lg font-bold hover:brightness-110 transition" onclick="selectPlan('dinastia')">
                        Testar Grátis
                    </button>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b22feaa-ceb2-4d07-9efc-0b8334244dce_3840w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-8">Pare de desperdiçar tempo.</h2>
<p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto font-light">
                Os segredos que a elite esconde estão a um clique de distância.
            </p>
<button className="bg-white text-black px-10 py-5 rounded-lg text-lg font-bold hover:bg-neutral-200 transition inline-flex items-center gap-2 group" onclick="showSignup()">
                Acessar Agora
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</section>

<footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<span className="text-lg font-bold text-neutral-400">DYNASTYGG</span>
</div>
<div className="flex gap-8 text-sm text-neutral-500">
<a className="hover:text-white transition" href="https://www.instagram.com/desirefps_/">Instagram</a>
<a className="hover:text-white transition" href="https://x.com/desirefps_">Twitter</a>
<a className="hover:text-white transition" href="mailto:le.araupe@gmail.com">Contato</a>
</div>
<div className="text-sm text-neutral-700">© 2025 DYNASTYGG</div>
</div>
</footer>

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden items-center justify-center p-4" id="loginModal">
<div className="bg-[#111] border border-white/10 rounded-2xl max-w-md w-full p-8 relative shadow-2xl">
<button className="absolute top-4 right-4 text-neutral-500 hover:text-white" onclick="closeModal('loginModal')">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="flex items-center gap-2 mb-8">
<svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<span className="text-xl font-bold text-white tracking-tight">DYNASTYGG</span>
</div>
<h2 className="text-2xl font-bold text-white mb-6">Acesse sua conta</h2>
<form className="space-y-5" onsubmit="handleLogin(event)">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2 uppercase">Email</label>
<input className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 transition" id="loginEmail" placeholder="seu@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2 uppercase">Senha</label>
<input className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 transition" id="loginPassword" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-500 transition" type="submit">Entrar</button>
</form>
<p className="text-center text-sm text-neutral-500 mt-6">
                Não tem conta? <button className="text-orange-500 hover:text-orange-400 font-medium ml-1" onclick="closeModal('loginModal'); showSignup()">Criar agora</button>
</p>
</div>
</div>

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden items-center justify-center p-4" id="signupModal">
<div className="bg-[#111] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl scrollbar-hide">
<button className="absolute top-4 right-4 text-neutral-500 hover:text-white" onclick="closeModal('signupModal')">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="mb-8">
<div className="flex items-center gap-2 mb-2">
<svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<span className="text-xl font-bold text-white tracking-tight">DYNASTYGG</span>
</div>
<h2 className="text-2xl font-bold text-white">Criar Conta</h2>
<p className="text-neutral-400 text-sm">3 dias gratuitos. Cancele a qualquer momento.</p>
</div>
<form className="space-y-5" onsubmit="handleSignup(event)">
<input id="selectedPlan" type="hidden" value="inicial"/>
<div className="grid md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2 uppercase">Nome</label>
<input className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 transition" id="signupName" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2 uppercase">Idade</label>
<input className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 transition" id="signupAge" required="" type="number"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2 uppercase">Email</label>
<input className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 transition" id="signupEmail" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2 uppercase">Senha</label>
<input className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 transition" id="signupPassword" required="" type="password"/>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2 uppercase">Elo Atual</label>
<select className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 transition" id="signupRank" required="">
<option value="Ferro">Ferro</option>
<option value="Bronze">Bronze</option>
<option value="Prata">Prata</option>
<option value="Ouro">Ouro</option>
<option value="Platina">Platina</option>
<option value="Diamante">Diamante</option>
<option value="Ascendente">Ascendente</option>
<option value="Imortal">Imortal</option>
<option value="Radiante">Radiante</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2 uppercase">Riot ID</label>
<input className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 transition" id="signupRiotId" placeholder="Nome#TAG" required="" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2 uppercase">Estado</label>
<input className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 transition" id="signupState" placeholder="SP" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2 uppercase">Cidade</label>
<input className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 transition" id="signupCity" placeholder="São Paulo" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2 uppercase">Objetivo Principal</label>
<select className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 transition" id="signupGoal" required="">
<option value="Chegar no Radiante">Chegar no Radiante</option>
<option value="Tornar-me profissional">Tornar-me profissional</option>
<option value="Ganhar dinheiro com Valorant">Ganhar dinheiro com Valorant</option>
<option value="Melhorar minhas skills">Melhorar minhas skills</option>
</select>
</div>
<button className="w-full bg-orange-600 text-white py-4 rounded-lg font-bold hover:bg-orange-500 transition shadow-lg shadow-orange-900/20" type="submit">
                    Começar teste Gratuito
                </button>
</form>
<p className="text-center text-sm text-neutral-500 mt-6">
                Já tem conta? <button className="text-orange-500 hover:text-orange-400 font-medium ml-1" onclick="closeModal('signupModal'); showLogin()">Fazer login</button>
</p>
</div>
</div>


    </>
  );
}
