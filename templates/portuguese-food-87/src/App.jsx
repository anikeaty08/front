import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
},
colors: {
slate: {
850: '#1e293b',
900: '#0f172a',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tighter text-slate-900 leading-none">J. LAGE PEREIRA</span>
<span className="text-xs font-medium tracking-wide text-slate-500 uppercase">Import &amp; Handel</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#about">Sobre Nós</a>
<a className="hover:text-slate-900 transition-colors" href="#products">Produtos</a>
<a className="hover:text-slate-900 transition-colors" href="#b2b">Para Empresas</a>
<a className="hover:text-slate-900 transition-colors" href="#store">Casa Pereira</a>
</div>

<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-400 border-r border-slate-200 pr-4">
<button className="text-slate-900 hover:text-slate-700">PT</button>
<button className="hover:text-slate-900 transition-colors">DE</button>
<button className="hover:text-slate-900 transition-colors">EN</button>
</div>
<a className="hidden md:flex items-center gap-2 bg-slate-900 text-white text-xs font-medium py-2 px-4 rounded-full hover:bg-slate-800 transition-all shadow-sm hover:shadow-md" href="#contact">
<span>Contacto</span>
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>

<button className="md:hidden text-slate-900 flex items-center">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-50"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl opacity-50"></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
<span className="w-2 h-2 rounded-full bg-orange-600"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Desde 2007 na Suíça</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                    O sabor autêntico de Portugal <br/>
<span className="text-slate-400">na sua mesa.</span>
</h1>
<p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                    Importação e distribuição de produtos alimentares portugueses de excelência. Servimos restaurantes, lojas e particulares com qualidade, confiança e tradição.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center h-12 px-6 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all" href="#contact">
                        Fale Connosco
                    </a>
<a className="inline-flex justify-center items-center h-12 px-6 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all" href="#store">
<iconify-icon className="mr-2" icon="lucide:store" width="16"></iconify-icon>
                        Visite a Casa Pereira
                    </a>
</div>
</div>
<div className="relative lg:h-[600px] rounded-2xl overflow-hidden bg-slate-100">
<img alt="Portuguese Wine and Food" className="absolute inset-0 w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="text-sm font-medium tracking-wide opacity-90">Qualidade Garantida</p>
<p className="text-2xl font-medium tracking-tight mt-1">Vinhos &amp; Produtos Regionais</p>
</div>
</div>
</div>
</header>

<section className="border-y border-slate-100 bg-slate-50/50 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-8 text-center md:text-left">
<div className="flex items-center gap-4">
<div className="p-3 bg-white rounded-lg shadow-sm border border-slate-100 text-slate-900">
<iconify-icon icon="lucide:truck" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Distribuição Nacional</h3>
<p className="text-xs text-slate-500 mt-1">Entregas em toda a Suíça</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="p-3 bg-white rounded-lg shadow-sm border border-slate-100 text-slate-900">
<iconify-icon icon="lucide:check-circle" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Qualidade Certificada</h3>
<p className="text-xs text-slate-500 mt-1">Produtos de origem controlada</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="p-3 bg-white rounded-lg shadow-sm border border-slate-100 text-slate-900">
<iconify-icon icon="lucide:users" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Atendimento Familiar</h3>
<p className="text-xs text-slate-500 mt-1">Proximidade e confiança</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-1/2 space-y-6 sticky top-24">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">A nossa história é feita de tradição.</h2>
<p className="text-slate-600 leading-relaxed">
                        A J. Lage Pereira – Import &amp; Handel é uma empresa sediada em Frauenfeld, dedicada a trazer o melhor de Portugal para a Suíça. Como empresa familiar, valorizamos a relação de proximidade com cada cliente, seja um particular que visita a nossa loja "Casa Pereira" ou um restaurante que procura ingredientes autênticos.
                    </p>
<p className="text-slate-600 leading-relaxed">
                        A nossa missão é encurtar distâncias através do paladar, oferecendo uma seleção rigorosa de vinhos, azeites, enchidos e produtos de mercearia que representam a alma da gastronomia portuguesa.
                    </p>
<ul className="space-y-3 pt-4">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-600" icon="lucide:check"></iconify-icon>
                            Sede em Frauenfeld, Loja em Felben-Wellhausen
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-600" icon="lucide:check"></iconify-icon>
                            Especialistas em Vinhos e Mercearia
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-600" icon="lucide:check"></iconify-icon>
                            Parceiro de confiança para B2B e B2C
                        </li>
</ul>
</div>
<div className="lg:w-1/2 grid grid-cols-2 gap-4">
<img alt="Shelf products" className="rounded-lg object-cover w-full h-64 md:h-80 bg-slate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Wines" className="rounded-lg object-cover w-full h-64 md:h-80 bg-slate-100 mt-8" src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900">A Nossa Seleção</h2>
<p className="mt-4 text-slate-500 max-w-xl">Produtos cuidadosamente selecionados para garantir o sabor genuíno.</p>
</div>
<a className="text-sm font-medium text-slate-900 hover:text-orange-700 transition-colors flex items-center gap-2" href="#contact">
                    Pedir catálogo completo <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
<div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-700 mb-6">
<iconify-icon icon="lucide:wine" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Vinhos &amp; Espirituosos</h3>
<p className="text-sm text-slate-500 leading-relaxed">Uma vasta garrafeira com vinhos verdes, tintos do Alentejo e Douro, e licores tradicionais.</p>
</div>

<div className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
<div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-700 mb-6">
<iconify-icon icon="lucide:shopping-basket" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Mercearia Tradicional</h3>
<p className="text-sm text-slate-500 leading-relaxed">Azeites, conservas, enchidos, queijos, café e doces regionais portugueses.</p>
</div>

<div className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
<div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-700 mb-6">
<iconify-icon icon="lucide:carrot" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Frutas &amp; Vegetais</h3>
<p className="text-sm text-slate-500 leading-relaxed">Produtos frescos da época, importados para garantir a frescura e sabor.</p>
</div>

<div className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-700 mb-6">
<iconify-icon icon="lucide:glass-water" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Bebidas</h3>
<p className="text-sm text-slate-500 leading-relaxed">Sumos (Sumol, Compal), águas minerais e cervejas (Super Bock, Sagres).</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-slate-300" id="b2b">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-block px-3 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-medium text-white tracking-wide">B2B / GASTRO</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Soluções para o seu negócio.</h2>
<p className="text-lg text-slate-400 font-light">
                        Fornecemos restaurantes, cafés e lojas locais em toda a Suíça. Beneficie da nossa experiência em importação e logística.
                    </p>
<div className="grid gap-6">
<div className="flex gap-4">
<iconify-icon className="text-white mt-1" icon="lucide:package-check" width="20"></iconify-icon>
<div>
<h4 className="text-white font-medium text-sm">Stock Permanente</h4>
<p className="text-sm mt-1 text-slate-400">Garantimos o fornecimento contínuo dos produtos essenciais para a sua ementa.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-white mt-1" icon="lucide:coins" width="20"></iconify-icon>
<div>
<h4 className="text-white font-medium text-sm">Preços Competitivos</h4>
<p className="text-sm mt-1 text-slate-400">Condições especiais para revenda e restauração.</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-8 text-slate-600 shadow-xl">
<h3 className="text-lg font-medium text-slate-900 mb-6">Pedido de Contacto Profissional</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500">Nome da Empresa</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all" placeholder="Ex: Café Central" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500">Pessoa de Contacto</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all" placeholder="Seu nome" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500">Email</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all" placeholder="email@empresa.ch" type="email"/>
</div>
<div className="flex items-start gap-3 py-2">
<input className="custom-checkbox appearance-none h-4 w-4 border border-slate-300 rounded bg-white mt-1 cursor-pointer transition-colors" id="terms" type="checkbox"/>
<label className="text-xs text-slate-500 cursor-pointer" htmlFor="terms">Tenho interesse em receber a tabela de preços atualizada.</label>
</div>
<button className="w-full py-3 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-all" type="button">Enviar Pedido</button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24" id="store">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-semibold tracking-wider text-orange-700 uppercase mb-2 block">Venda ao Público</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900">Visite a Casa Pereira</h2>
<p className="mt-4 text-slate-500">A nossa loja em Felben-Wellhausen espera por si.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-between">
<div className="space-y-6">
<div>
<h3 className="font-medium text-slate-900 mb-2">Horário de Abertura</h3>
<ul className="text-sm text-slate-600 space-y-2">
<li className="flex justify-between border-b border-slate-200 pb-2"><span>Seg - Sex</span> <span>09:00 - 18:30</span></li>
<li className="flex justify-between border-b border-slate-200 pb-2"><span>Sábado</span> <span>08:00 - 17:00</span></li>
<li className="flex justify-between text-slate-400"><span>Domingo</span> <span>Fechado</span></li>
</ul>
</div>
<div>
<h3 className="font-medium text-slate-900 mb-2">Localização</h3>
<p className="text-sm text-slate-600">Hauptstrasse, 8552 Felben-Wellhausen, Suíça</p>
</div>
</div>
<div className="mt-8">
<a className="text-sm font-medium text-slate-900 hover:underline flex items-center gap-2" href="https://maps.google.com" target="_blank">
                            Ver no Google Maps <iconify-icon icon="lucide:external-link" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-2 rounded-2xl overflow-hidden bg-slate-200 relative min-h-[400px]">

<div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/8.94,47.58,13,0/800x600@2x?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGZ5...')] bg-cover bg-center opacity-80 mix-blend-multiply grayscale"></div>

<div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
<div className="text-center">
<iconify-icon className="text-slate-400 mb-4 mx-auto" icon="lucide:map-pin" width="48"></iconify-icon>
<span className="text-slate-500 font-medium">Google Maps Embed</span>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-72 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-slate-600" icon="lucide:store"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Casa Pereira</p>
<p className="text-xs text-slate-500">Estacionamento gratuito</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Entre em contacto</h2>
<p className="text-slate-500 mb-12">Tem alguma dúvida sobre os nossos produtos ou serviços de distribuição? Estamos aqui para ajudar.</p>
</div>
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">

<div className="space-y-8">
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
<iconify-icon icon="lucide:map-pin" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Sede (Escritório)</h4>
<p className="text-sm text-slate-500 mt-1">
                            J. Lage Pereira – Import &amp; Handel<br/>
                            Frauenfeld, Suíça
                        </p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Telefone</h4>
<a className="text-sm text-slate-500 mt-1 hover:text-slate-900 transition-colors" href="tel:+41000000000">+41 XX XXX XX XX</a>
<p className="text-xs text-slate-400 mt-1">Chamada rede fixa nacional</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Email</h4>
<a className="text-sm text-slate-500 mt-1 hover:text-slate-900 transition-colors" href="mailto:info@jlagepereira.ch">info@jlagepereira.ch</a>
</div>
</div>
</div>

<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Nome</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Apelido</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Email</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Mensagem</label>
<textarea className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all" rows="4"></textarea>
</div>
<button className="inline-flex justify-center items-center h-10 px-6 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all w-full md:w-auto" type="button">
                    Enviar Mensagem
                </button>
</form>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<span className="text-sm font-semibold tracking-tighter text-slate-900 block mb-4">J. LAGE PEREIRA</span>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                        O seu parceiro de confiança para produtos alimentares portugueses na Suíça. Qualidade e tradição desde a origem até à sua mesa.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Empresa</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#about">Sobre Nós</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#store">Loja Casa Pereira</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#b2b">Para Profissionais</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Proteção de Dados</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Termos e Condições</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 J. Lage Pereira – Import &amp; Handel. Todos os direitos reservados.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
