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
      

<header className="bg-white shadow">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<span className="text-2xl font-bold text-blue-600">TechNova</span>
<nav>
<ul className="flex space-x-8 text-lg">
<li><a className="hover:text-blue-600 transition" href="#home">Início</a></li>
<li><a className="hover:text-blue-600 transition" href="#about">Sobre</a></li>
<li><a className="hover:text-blue-600 transition" href="#services">Serviços</a></li>
<li><a className="hover:text-blue-600 transition" href="#contato">Contato</a></li>
</ul>
</nav>
</div>
</header>

<section className="bg-blue-600" id="home">
<div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
<div className="md:w-1/2 text-white">
<h1 className="text-4xl md:text-5xl font-bold mb-4">Inove o seu negócio com tecnologia de ponta</h1>
<p className="text-lg mb-8">Soluções inovadoras para acelerar o crescimento e eficiência da sua empresa.</p>
<a className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition" href="#services">Saiba mais</a>
</div>
<div className="md:w-1/2">
<img alt="Equipe de tecnologia" className="rounded-xl shadow-lg w-full" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-16" id="about">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-3xl font-bold mb-4 text-blue-700">Sobre a TechNova</h2>
<p className="text-lg mb-4">
            A TechNova é especialista em criar soluções tecnológicas inovadoras para negócios de todos os portes. Nosso time está sempre à frente das tendências para entregar o melhor resultado aos nossos clientes.
          </p>
<ul className="list-disc list-inside text-gray-700">
<li>Equipe experiente e dedicada</li>
<li>Atendimento personalizado</li>
<li>Foco em resultado</li>
</ul>
</div>
<div>
<img alt="Sobre nós" className="rounded-lg shadow-md w-full" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&amp;fit=crop&amp;w=700&amp;q=80"/>
</div>
</div>
</section>

<section className="bg-white py-16" id="services">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">Nossos Serviços</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-gray-100 rounded-lg p-8 shadow hover:shadow-md transition">
<div className="flex justify-center mb-4">
<svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="8" rx="2" width="20" x="2" y="3"></rect><path d="M6 17v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2"></path></svg>
</div>
<h3 className="text-xl font-bold mb-2 text-center">Desenvolvimento Web</h3>
<p className="text-center">Criação de sites, portais e sistemas personalizados para sua empresa decolar no digital.</p>
</div>
<div className="bg-gray-100 rounded-lg p-8 shadow hover:shadow-md transition">
<div className="flex justify-center mb-4">
<svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="14" rx="2" width="8" x="9" y="5"></rect><path d="M2 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z"></path></svg>
</div>
<h3 className="text-xl font-bold mb-2 text-center">Aplicativos Mobile</h3>
<p className="text-center">Desenvolvimento de apps inovadores para Android e iOS, proporcionando experiências incríveis.</p>
</div>
<div className="bg-gray-100 rounded-lg p-8 shadow hover:shadow-md transition">
<div className="flex justify-center mb-4">
<svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 12l2 2l4-4"></path></svg>
</div>
<h3 className="text-xl font-bold mb-2 text-center">Consultoria em TI</h3>
<p className="text-center">Apoio estratégico, análise de sistemas e implementação de soluções sob medida.</p>
</div>
</div>
</div>
</section>

    </>
  );
}
