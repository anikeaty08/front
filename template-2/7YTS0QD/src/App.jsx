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



    tailwind.config = {
      theme: {
        extend: {
          colors: {
            escutiBlue: '#192B46',
            escutiOrange: '#FF5722'
          }
        }
      }
    }
    


        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
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
      

<header className="bg-white shadow-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

<div className="flex items-center">
<div className="w-10 h-10 bg-escutiBlue rounded-full flex items-center justify-center text-white font-bold text-lg mr-2">Logo</div>
<span className="font-semibold text-xl text-escutiBlue tracking-wide">ESCUTI</span>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-escutiBlue hover:text-escutiOrange font-medium transition" href="#oque">O Que É?</a>
<a className="text-escutiBlue hover:text-escutiOrange font-medium transition" href="#pacientes">Para Pacientes</a>
<a className="text-escutiBlue hover:text-escutiOrange font-medium transition" href="#fonoaudiologos">Para Fonoaudiólogos</a>
<a className="text-white bg-escutiOrange hover:bg-[#e64a19] px-4 py-2 rounded transition font-medium" href="#cadastro">Cadastre-se</a>
</nav>
<div className="md:hidden">
<button className="focus:outline-none" id="menuBtn">
<svg className="w-7 h-7 text-escutiBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
<div className="md:hidden hidden bg-white border-t" id="mobileMenu">
<nav className="flex flex-col px-4 py-2 space-y-2">
<a className="text-escutiBlue hover:text-escutiOrange font-medium" href="#oque">O Que É?</a>
<a className="text-escutiBlue hover:text-escutiOrange font-medium" href="#pacientes">Para Pacientes</a>
<a className="text-escutiBlue hover:text-escutiOrange font-medium" href="#fonoaudiologos">Para Fonoaudiólogos</a>
<a className="text-white bg-escutiOrange hover:bg-[#e64a19] px-4 py-2 rounded transition font-medium text-center" href="#cadastro">Cadastre-se</a>
</nav>
</div>
</header>


<section className="bg-gradient-to-br from-escutiBlue/95 to-[#233f61] py-16 px-4">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-3xl md:text-5xl font-bold text-white mb-4">ESCUTI: Conectando você à saúde auditiva de forma simples e rápida.</h1>
<p className="text-lg md:text-2xl text-gray-100 mb-8">Encontre fonoaudiólogos qualificados ou expanda sua base de pacientes com nossa plataforma inovadora.</p>
<div className="flex flex-col md:flex-row justify-center gap-4">
<a className="flex items-center justify-center bg-escutiOrange hover:bg-[#e64a19] text-white font-semibold px-6 py-3 rounded shadow transition" href="#cadastro">
<span className="mr-3 flex items-center">
<img alt="App Store" className="w-5 h-5 mr-1" src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" />
<img alt="Google Play" className="w-5 h-5" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
</span>
                    Baixe o App (Pacientes)
                </a>
<a className="flex items-center justify-center bg-white border-2 border-escutiOrange text-escutiOrange hover:bg-escutiOrange hover:text-white font-semibold px-6 py-3 rounded shadow transition" href="#cadastro">
                    Cadastre sua Clínica/Consultório
                </a>
</div>
</div>
</section>

<section className="py-16 px-4" id="oque">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
<div className="md:w-2/3">
<h2 className="text-2xl md:text-3xl font-bold text-escutiBlue mb-4">Bem-vindo ao ESCUTI</h2>
<p className="text-lg text-gray-700 mb-4">
                    ESCUTI é a ponte entre pacientes que buscam atendimento fonoaudiológico de qualidade e fonoaudiólogos que desejam ampliar seu alcance.
                    Nossa missão é facilitar o acesso a exames como audiometria e mapeamento de fala, oferecendo mais opções e conveniência para todos.
                </p>
</div>
<div className="md:w-1/3 flex justify-center">
<div className="w-40 h-40 bg-escutiOrange/10 rounded-full flex items-center justify-center">
<span className="text-6xl text-escutiOrange">🔊</span>
</div>
</div>
</div>
</section>

<section className="bg-[#f1f3f7] py-16 px-4" id="pacientes">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-bold text-escutiBlue text-center mb-8">Sua Audição em Boas Mãos</h2>
<div className="grid md:grid-cols-4 gap-8 mb-10">
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-escutiOrange/20 text-escutiOrange rounded-full flex items-center justify-center mb-3 text-2xl">
                        👤
                    </div>
<h3 className="font-semibold text-lg mb-1">Encontre Especialistas</h3>
<p className="text-gray-600">Busque e agende consultas com fonoaudiólogos próximos para audiometria e mapeamento de fala.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-escutiBlue/20 text-escutiBlue rounded-full flex items-center justify-center mb-3 text-2xl">
                        📅
                    </div>
<h3 className="font-semibold text-lg mb-1">Agendamento Fácil</h3>
<p className="text-gray-600">Marque, remarque ou cancele seus exames diretamente pelo aplicativo.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-escutiOrange/40 text-escutiOrange rounded-full flex items-center justify-center mb-3 text-2xl">
                        💳
                    </div>
<h3 className="font-semibold text-lg mb-1">Pagamento Seguro</h3>
<p className="text-gray-600">Realize pagamentos online de forma prática e segura dentro do app.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-escutiBlue/10 text-escutiBlue rounded-full flex items-center justify-center mb-3 text-2xl">
                        📝
                    </div>
<h3 className="font-semibold text-lg mb-1">Histórico Completo</h3>
<p className="text-gray-600">Acesse seu histórico de consultas e avaliações quando precisar.</p>
</div>
</div>
<div className="flex justify-center">
<a className="flex items-center bg-escutiOrange hover:bg-[#e64a19] text-white font-semibold px-6 py-3 rounded shadow transition" href="#cadastro">
<span className="mr-3 flex items-center">
<img alt="App Store" className="w-5 h-5 mr-1" src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" />
<img alt="Google Play" className="w-5 h-5" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
</span>
                    Baixe o App e Cuide da Sua Audição
                </a>
</div>
</div>
</section>

<section className="py-16 px-4" id="fonoaudiologos">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-bold text-escutiBlue text-center mb-8">Amplie Seus Horizontes Profissionais</h2>
<div className="grid md:grid-cols-4 gap-8 mb-10">
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-escutiBlue/20 text-escutiBlue rounded-full flex items-center justify-center mb-3 text-2xl">
                        👪
                    </div>
<h3 className="font-semibold text-lg mb-1">Novos Pacientes</h3>
<p className="text-gray-600">Aumente sua visibilidade e capte novos pacientes interessados em seus serviços.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-escutiOrange/20 text-escutiOrange rounded-full flex items-center justify-center mb-3 text-2xl">
                        📅
                    </div>
<h3 className="font-semibold text-lg mb-1">Gestão de Agenda</h3>
<p className="text-gray-600">Gerencie seus horários e disponibilidade de forma eficiente em nossa plataforma web.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-escutiBlue/10 text-escutiBlue rounded-full flex items-center justify-center mb-3 text-2xl">
                        💳
                    </div>
<h3 className="font-semibold text-lg mb-1">Pagamentos Simplificados</h3>
<p className="text-gray-600">Receba pelos seus atendimentos de forma organizada e acompanhe seu histórico financeiro.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-escutiOrange/40 text-escutiOrange rounded-full flex items-center justify-center mb-3 text-2xl">
                        ✅
                    </div>
<h3 className="font-semibold text-lg mb-1">Validação Profissional</h3>
<p className="text-gray-600">Junte-se a uma rede de profissionais qualificados e validados.</p>
</div>
</div>
<div className="flex justify-center">
<a className="bg-escutiOrange hover:bg-[#e64a19] text-white font-semibold px-6 py-3 rounded shadow transition" href="#cadastro">
                    Cadastre-se Gratuitamente e Transforme seu Atendimento
                </a>
</div>
</div>
</section>

<section className="bg-[#f6f7f9] py-16 px-4" id="cadastro">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl md:text-3xl font-bold text-escutiBlue text-center mb-8">Faça Parte da Revolução na Saúde Auditiva</h2>
<div className="grid md:grid-cols-2 gap-10">

<div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
<h3 className="text-xl font-semibold text-escutiOrange mb-3">Para Pacientes</h3>
<p className="text-gray-700 text-center mb-6">
                        Baixe o aplicativo ESCUTI e encontre o melhor cuidado para sua audição.
                    </p>
<div className="flex space-x-4">
<a className="bg-escutiBlue hover:bg-escutiOrange text-white font-semibold px-4 py-2 rounded flex items-center transition" href="#">
<img alt="App Store" className="w-6 h-6 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" />
                            App Store
                        </a>
<a className="bg-escutiOrange hover:bg-escutiBlue text-white font-semibold px-4 py-2 rounded flex items-center transition" href="#">
<img alt="Google Play" className="w-6 h-6 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
                            Google Play
                        </a>
</div>
</div>

<div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
<h3 className="text-xl font-semibold text-escutiBlue mb-3">Para Fonoaudiólogos/Clínicas</h3>
<p className="text-gray-700 text-center mb-6">
                        É fonoaudiólogo ou representa uma clínica? Cadastre-se para começar a receber pacientes.
                    </p>
<a className="bg-escutiOrange hover:bg-[#e64a19] text-white font-semibold px-6 py-3 rounded transition" href="#">
                        Acessar Plataforma de Cadastro
                    </a>
<p className="mt-6 text-sm text-gray-500 text-center">
                        Dúvidas? Entre em contato: <a className="underline text-escutiOrange hover:text-escutiBlue" href="mailto:contact@escuti.com">contact@escuti.com</a>
</p>
</div>
</div>
</div>
</section>

<footer className="bg-escutiBlue py-6 mt-12">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
<p className="text-gray-100 text-center md:text-left mb-4 md:mb-0">© 2024 ESCUTI. Todos os direitos reservados.</p>
<div className="flex space-x-6 items-center">
<a className="text-gray-200 hover:text-escutiOrange text-sm" href="#">Política de Privacidade</a>
<a className="text-gray-200 hover:text-escutiOrange text-sm" href="#">Termos de Uso</a>
<div className="flex space-x-3">
<a className="text-escutiOrange hover:text-white" href="#"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.64 8.64 0 01-2.75 1.05 4.28 4.28 0 00-7.29 3.9C7.69 8.93 4.07 7.13 1.64 4.16c-.47.81-.74 1.75-.74 2.75 0 1.9.96 3.57 2.41 4.55-.89-.03-1.74-.27-2.47-.69v.07a4.28 4.28 0 003.43 4.2c-.42.12-.86.18-1.32.18-.32 0-.63-.03-.94-.09.63 1.98 2.47 3.43 4.64 3.47A8.6 8.6 0 012 19.53 12.16 12.16 0 008.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.26 8.26 0 0024 4.59a8.47 8.47 0 01-2.54.7z"></path></svg></a>
<a className="text-escutiOrange hover:text-white" href="#"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42c-.79.35-1.6.59-2.47.7a4.28 4.28 0 001.88-2.37 8.58 8.58 0 01-2.75 1.05 4.28 4.28 0 00-7.29 3.9C7.7 8.93 4.07 7.13 1.64 4.16c-.47.81-.74 1.75-.74 2.75 0 1.9.96 3.57 2.41 4.55-.89-.03-1.74-.27-2.47-.69v.07a4.28 4.28 0 003.43 4.2c-.42.12-.86.18-1.32.18-.32 0-.63-.03-.94-.09.63 1.98 2.47 3.43 4.64 3.47A8.6 8.6 0 012 19.53 12.11 12.11 0 008.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.26 8.26 0 0024 4.59a8.47 8.47 0 01-2.54.7z"></path></svg></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
