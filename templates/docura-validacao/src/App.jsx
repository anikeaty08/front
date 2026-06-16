import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Reveal
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        reveal(); // trigger on load

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-sm');
                navbar.classList.replace('bg-[#EDE3D1]/80', 'bg-[#EDE3D1]/95');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.replace('bg-[#EDE3D1]/95', 'bg-[#EDE3D1]/80');
            }
        });

        // FAQ Accordion Toggle
        function toggleFaq(button) {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            
            // Close all others
            document.querySelectorAll('.faq-button').forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
                btn.nextElementSibling.classList.remove('open');
            });

            // Toggle current
            if (!isExpanded) {
                button.setAttribute('aria-expanded', 'true');
                button.nextElementSibling.classList.add('open');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-[#563421]/50" id="navbar">
<div className="flex bg-[#EDE3D1] h-20 w-full pr-6 pl-6 relative items-center justify-center">
<img className="md:h-14 w-auto h-12 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87ce64dd-8b96-4975-8051-e5bc52618b27_320w.png"/>
<div className="hidden md:flex items-center absolute right-6">
<a className="inline-flex items-center gap-2 bg-[#563421] text-[#EDE3D1] px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#412618] transition-all duration-300 hover:-translate-y-[1px] shadow-sm" href="https://www.nobregrowthmarketing.com.br">
<svg className="lucide lucide-phone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            WhatsApp
        </a>
</div>
</div>
</nav>

<section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">

<video autoplay="" className="w-full h-full object-cover object-center" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-[#3a2012]/75"></div>
</div>
<div className="flex flex-col w-full max-w-7xl z-10 mr-auto ml-auto pt-24 pr-6 pb-16 pl-6 relative items-center">
<div className="max-w-4xl reveal flex flex-col items-center text-center active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#EDE3D1]/30 bg-[#3a2012]/50 backdrop-blur-md mb-6">
<iconify-icon className="text-[#A67C52]" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-xs tracking-wide uppercase font-medium text-[#EDE3D1]">Padrão Restaurante</span>
</div>
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter font-medium leading-[1.1] mb-6 text-[#EDE3D1]">
                    Seu evento merece mais que um buffet.<br className="hidden md:block"/>
<span className="italic text-[#EDE3D1]/90">Merece uma experiência memorável.</span>
</h1>
<p className="text-base md:text-lg text-[#EDE3D1]/90 mb-10 max-w-2xl font-medium leading-relaxed drop-shadow-md">
                    O Doçura &amp; Travessura transforma eventos em experiências únicas com gastronomia premium, atendimento consultivo e execução impecável do início ao fim.
                </p>
<div className="flex justify-center mb-12 w-full">
<a className="inline-flex justify-center items-center gap-2 bg-[#EDE3D1] text-[#563421] px-8 py-4 rounded-xl text-base font-medium hover:bg-white transition-all duration-300 hover:-translate-y-[2px] shadow-premium-hover" href="https://www.nobregrowthmarketing.com.br">
                        Receber cardápio premium
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-6 border-t border-[#EDE3D1]/20 w-full max-w-2xl">
<div className="flex items-center gap-2 text-sm text-[#EDE3D1]/90 font-medium">
<iconify-icon className="text-[#A67C52] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Ingredientes selecionados
                    </div>
<div className="flex items-center gap-2 text-sm text-[#EDE3D1]/90 font-medium">
<iconify-icon className="text-[#A67C52] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Receitas artesanais
                    </div>
<div className="flex items-center gap-2 text-sm text-[#EDE3D1]/90 font-medium">
<iconify-icon className="text-[#A67C52] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Atendimento consultivo
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#EDE3D1] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal active">
<h2 className="font-serif text-3xl md:text-4xl tracking-tighter font-medium mb-4">Quando a comida é inesquecível, o evento também se torna.</h2>
<p className="text-[#563421]/70 text-base">O Doçura &amp; Travessura nasceu com um propósito simples: elevar o padrão gastronômico. Enquanto muitos focam apenas em volume, nós focamos na experiência.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white/40 p-8 rounded-2xl border border-[#563421]/10 shadow-premium hover:-translate-y-1 hover:shadow-premium-hover transition-all duration-300 reveal delay-100 group active">
<div className="w-12 h-12 rounded-full bg-[#563421]/5 flex items-center justify-center mb-6 group-hover:bg-[#563421]/10 transition-colors">
<iconify-icon className="text-2xl text-[#563421]" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl tracking-tight font-medium mb-3">Ingredientes selecionados</h3>
<p className="text-[#563421]/70 text-sm leading-relaxed">Matérias-primas escolhidas a dedo para garantir sabor, frescor e uma qualidade nitidamente superior.</p>
</div>

<div className="bg-white/40 p-8 rounded-2xl border border-[#563421]/10 shadow-premium hover:-translate-y-1 hover:shadow-premium-hover transition-all duration-300 reveal delay-200 group active">
<div className="w-12 h-12 rounded-full bg-[#563421]/5 flex items-center justify-center mb-6 group-hover:bg-[#563421]/10 transition-colors">
<iconify-icon className="text-2xl text-[#563421]" icon="solar:chef-hat-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl tracking-tight font-medium mb-3">Receitas artesanais</h3>
<p className="text-[#563421]/70 text-sm leading-relaxed">Preparação extremamente cuidadosa que valoriza o sabor real, a textura ideal e uma apresentação impecável.</p>
</div>

<div className="bg-white/40 p-8 rounded-2xl border border-[#563421]/10 shadow-premium hover:-translate-y-1 hover:shadow-premium-hover transition-all duration-300 reveal delay-300 group active">
<div className="w-12 h-12 rounded-full bg-[#563421]/5 flex items-center justify-center mb-6 group-hover:bg-[#563421]/10 transition-colors">
<iconify-icon className="text-2xl text-[#563421]" icon="solar:dialog-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl tracking-tight font-medium mb-3">Atendimento consultivo</h3>
<p className="text-[#563421]/70 text-sm leading-relaxed">Cada evento é planejado com atenção máxima aos detalhes, adaptando-se à sua visão e necessidade.</p>
</div>

<div className="bg-white/40 p-8 rounded-2xl border border-[#563421]/10 shadow-premium hover:-translate-y-1 hover:shadow-premium-hover transition-all duration-300 reveal delay-100 group active">
<div className="w-12 h-12 rounded-full bg-[#563421]/5 flex items-center justify-center mb-6 group-hover:bg-[#563421]/10 transition-colors">
<iconify-icon className="text-2xl text-[#563421]" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl tracking-tight font-medium mb-3">Execução impecável</h3>
<p className="text-[#563421]/70 text-sm leading-relaxed">Equipe altamente treinada para oferecer uma experiência de serviço fluida, ágil e sofisticada.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-y border-[#563421]/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="reveal active">
<h2 className="font-serif text-3xl md:text-4xl tracking-tighter font-medium mb-6">A diferença está nos detalhes que você sente e seus convidados notam.</h2>
<p className="text-[#563421]/70 text-base mb-8 leading-relaxed">Não acreditamos em eventos padronizados. Acreditamos em excelência consistente. Nossa operação foi desenhada para eliminar as falhas comuns de buffets tradicionais.</p>
<a className="inline-flex items-center gap-2 text-[#563421] font-medium hover:text-[#A67C52] transition-colors group" href="https://www.nobregrowthmarketing.com.br">
                        Receber cardápio no WhatsApp
                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="bg-white/30 rounded-3xl p-8 md:p-10 border border-[#563421]/5 reveal delay-100 active">
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 bg-[#563421]/10 rounded-full p-1 flex-shrink-0">
<iconify-icon className="text-[#563421]" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-[#563421] mb-1">Padronização de restaurante</h4>
<p className="text-sm text-[#563421]/70">Sabor e textura consistentes do primeiro ao último convidado servido.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-[#563421]/10 rounded-full p-1 flex-shrink-0">
<iconify-icon className="text-[#563421]" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-[#563421] mb-1">Ritmo de serviço sem filas</h4>
<p className="text-sm text-[#563421]/70">Dinâmica inteligente de reposição para que ninguém precise esperar.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-[#563421]/10 rounded-full p-1 flex-shrink-0">
<iconify-icon className="text-[#563421]" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-[#563421] mb-1">Apresentação estética</h4>
<p className="text-sm text-[#563421]/70">Montagem de ilhas e pratos que valorizam a decoração do seu evento.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-[#563421]/10 rounded-full p-1 flex-shrink-0">
<iconify-icon className="text-[#563421]" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-[#563421] mb-1">Equipe alinhada</h4>
<p className="text-sm text-[#563421]/70">Profissionais discretos, uniformizados e cordiais em todos os momentos.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24" id="experiencia">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal active">
<h2 className="font-serif text-3xl md:text-4xl tracking-tighter font-medium mb-4">Gastronomia que surpreende quem já conhece bons restaurantes.</h2>
<p className="text-[#563421]/70 text-base">Muitos clientes dizem: <em className="">"Isso não parece comida de buffet"</em>. Nosso padrão é comparável ao de casas conhecidas pelo cuidado com cada ingrediente.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 reveal delay-100 active">
<div className="group overflow-hidden rounded-2xl aspect-[4/3] relative cursor-pointer shadow-sm">
<img alt="Prato principal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] group-hover:brightness-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5270853d-05c2-4be4-8dd8-c2d96007eb6d_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-[#563421]/60 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end cursor-default">
<span className="text-[#EDE3D1] font-medium tracking-wide text-sm">Pratos principais</span>
</div>
</div>
<div className="group overflow-hidden rounded-2xl aspect-[4/3] relative cursor-pointer shadow-sm">
<img alt="Salgados finos" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] group-hover:brightness-105" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-[#563421]/60 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-[#EDE3D1] font-medium tracking-wide text-sm">Entradas sofisticadas</span>
</div>
</div>
<div className="group overflow-hidden rounded-2xl aspect-[4/3] relative cursor-pointer shadow-sm">
<img alt="Mesa montada" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] group-hover:brightness-105" src="https://images.unsplash.com/photo-1533143708019-ea5cfa80213e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#563421]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-[#EDE3D1] font-medium tracking-wide text-sm">Apresentação de ilhas</span>
</div>
</div>
<div className="group overflow-hidden rounded-2xl aspect-[4/3] relative cursor-pointer shadow-sm">
<img alt="Doces finos" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] group-hover:brightness-105" src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#563421]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-[#EDE3D1] font-medium tracking-wide text-sm">Sobremesas artesanais</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/30 border-t border-[#563421]/5" id="eventos">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal active">
<h2 className="font-serif text-3xl md:text-4xl tracking-tighter font-medium mb-4">Para eventos que valorizam qualidade.</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#EDE3D1] rounded-2xl overflow-hidden border border-[#563421]/10 shadow-sm hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 reveal group active">
<div className="h-48 overflow-hidden">
<img alt="Aniversários" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/716414f1-6c60-47ea-a2d4-0813825955c9_800w.png"/>
</div>
<div className="p-6">
<h3 className="font-serif text-xl tracking-tight font-medium mb-2">Aniversários</h3>
<p className="text-[#563421]/70 text-sm">Celebrações marcantes com gastronomia à altura do momento.</p>
</div>
</div>

<div className="bg-[#EDE3D1] rounded-2xl overflow-hidden border border-[#563421]/10 shadow-sm hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 reveal delay-100 group active">
<div className="h-48 overflow-hidden">
<img alt="Corporativo" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8909bc7f-04da-4255-816d-8ba2fcba7522_800w.png"/>
</div>
<div className="p-6">
<h3 className="font-serif text-xl tracking-tight font-medium mb-2">Corporativo</h3>
<p className="text-[#563421]/70 text-sm">Qualidade que impressiona colaboradores e transmite prestígio.</p>
</div>
</div>

<div className="bg-[#EDE3D1] rounded-2xl overflow-hidden border border-[#563421]/10 shadow-sm hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 reveal delay-200 group active">
<div className="h-48 overflow-hidden">
<img alt="Confraternizações" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/18161de1-b080-45e9-9c24-2346bb1aa323_800w.png"/>
</div>
<div className="p-6">
<h3 className="font-serif text-xl tracking-tight font-medium mb-2">Confraternizações</h3>
<p className="text-[#563421]/70 text-sm">Encontros especiais transformados por sabores memoráveis.</p>
</div>
</div>

<div className="bg-[#EDE3D1] rounded-2xl overflow-hidden border border-[#563421]/10 shadow-sm hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 reveal delay-300 group active">
<div className="h-48 overflow-hidden">
<img alt="Casamentos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5952a8e-3a15-4f03-823a-049060facd51_800w.png"/>
</div>
<div className="p-6">
<h3 className="font-serif text-xl tracking-tight font-medium mb-2">Eventos Sociais</h3>
<p className="text-[#563421]/70 text-sm">Soluções completas para casamentos e celebrações sofisticadas.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-[#563421]/10" id="depoimentos">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal active">
<div className="">
<h2 className="font-serif text-3xl md:text-4xl tracking-tighter font-medium mb-4">Quem prova, recomenda.</h2>
<div className="flex items-center gap-4 text-sm font-medium">
<div className="flex text-[#A67C52]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span>Avaliação média 5.0</span>
<span className="w-1 h-1 rounded-full bg-[#563421]/30"></span>
<span className="">+200 eventos atendidos</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white/40 p-6 rounded-2xl border border-[#563421]/10 reveal active">
<div className="flex text-[#A67C52] text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#563421]/80 text-sm mb-6 leading-relaxed">"O nível dos salgados é absurdo. Todo mundo na festa perguntou de onde era. A apresentação também estava lindíssima."</p>
<p className="font-medium text-sm">— Mariana S.</p>
</div>

<div className="bg-white/40 p-6 rounded-2xl border border-[#563421]/10 reveal delay-100 active">
<div className="flex text-[#A67C52] text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#563421]/80 text-sm mb-6 leading-relaxed">"Já contratei vários buffets para eventos da empresa e esse foi disparado o melhor em organização e sabor."</p>
<p className="font-medium text-sm">— Carlos E., Diretor</p>
</div>

<div className="bg-white/40 p-6 rounded-2xl border border-[#563421]/10 reveal delay-200 active">
<div className="flex text-[#A67C52] text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#563421]/80 text-sm mb-6 leading-relaxed">"Organização impecável. A equipe foi super atenciosa do início ao fim e a comida estava sempre quentinha."</p>
<p className="font-medium text-sm">— Fernanda T.</p>
</div>

<div className="bg-white/40 p-6 rounded-2xl border border-[#563421]/10 reveal delay-300 active">
<div className="flex text-[#A67C52] text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#563421]/80 text-sm mb-6 leading-relaxed">"Sabor constante do começo ao fim. A ilha de doces foi a atração da noite, recomendo de olhos fechados."</p>
<p className="font-medium text-sm">— Ricardo V.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6 text-center reveal active">
<h2 className="font-serif text-3xl md:text-4xl tracking-tighter font-medium mb-16">Contratar é simples.</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-[#563421]/10 -z-10"></div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#EDE3D1] border border-[#563421]/20 flex items-center justify-center font-serif text-2xl text-[#563421] mb-6 shadow-sm">1</div>
<h3 className="font-medium mb-2">Solicite o cardápio</h3>
<p className="text-sm text-[#563421]/70 px-4">Entre em contato e receba nossas opções atualizadas.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#EDE3D1] border border-[#563421]/20 flex items-center justify-center font-serif text-2xl text-[#563421] mb-6 shadow-sm">2</div>
<h3 className="font-medium mb-2">Alinhamento</h3>
<p className="text-sm text-[#563421]/70 px-4">Nos conte os detalhes e o perfil do seu evento.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#EDE3D1] border border-[#563421]/20 flex items-center justify-center font-serif text-2xl text-[#563421] mb-6 shadow-sm">3</div>
<h3 className="font-medium mb-2">Proposta ideal</h3>
<p className="text-sm text-[#563421]/70 px-4">Montamos uma experiência sob medida para você.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#563421] flex items-center justify-center font-serif text-2xl text-[#EDE3D1] mb-6 shadow-md">4</div>
<h3 className="font-medium mb-2">Execução</h3>
<p className="text-sm text-[#563421]/70 px-4">Relaxe e aproveite, nós cuidamos de tudo no dia.</p>
</div>
</div>
<p className="mt-16 text-sm text-[#563421]/60 font-medium">Você recebe orientação do início ao fim. Sem complicação.</p>
</div>
</section>

<section className="py-12 px-6" id="contato">
<div className="max-w-5xl mx-auto bg-[#563421] rounded-[2.5rem] p-10 md:p-16 text-center shadow-premium reveal relative overflow-hidden active">

<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full border border-[#EDE3D1]/10 opacity-50 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full border border-[#EDE3D1]/10 opacity-50 pointer-events-none"></div>
<div className="relative z-10">
<h2 className="font-serif text-3xl md:text-5xl tracking-tighter font-medium text-[#EDE3D1] mb-6 leading-tight">
                    Quer transformar seu evento em uma experiência inesquecível?
                </h2>
<p className="text-[#EDE3D1]/80 text-base md:text-lg mb-10 max-w-2xl mx-auto">
                    Receba nosso cardápio premium e fale com um consultor para entender como podemos elevar o nível da sua celebração.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-[#EDE3D1] text-[#563421] px-8 py-4 rounded-xl text-base font-medium hover:bg-white transition-all duration-300 hover:-translate-y-[2px] shadow-lg" href="https://www.nobregrowthmarketing.com.br">
<iconify-icon className="text-xl" icon="solar:whatsapp-linear"></iconify-icon>
                        Receber cardápio no WhatsApp
                    </a>
<a className="inline-flex justify-center items-center gap-2 bg-transparent border border-[#EDE3D1]/30 text-[#EDE3D1] px-8 py-4 rounded-xl text-base font-medium hover:border-[#EDE3D1] hover:bg-[#EDE3D1]/10 transition-all duration-300" href="https://www.nobregrowthmarketing.com.br">
                        Solicitar orçamento
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/30 border-t border-[#563421]/5">
<div className="max-w-3xl mx-auto px-6 reveal active">
<h2 className="font-serif text-3xl tracking-tighter font-medium mb-10 text-center">Dúvidas frequentes</h2>
<div className="space-y-4">

<div className="border border-[#563421]/10 rounded-2xl bg-[#EDE3D1]/50 overflow-hidden">
<button aria-expanded="false" className="faq-button w-full flex items-center justify-between p-6 text-left" onclick="toggleFaq(this)">
<span className="font-medium text-base">Vocês atendem quais regiões?</span>
<iconify-icon className="faq-icon text-xl text-[#563421]/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content">
<div className="faq-inner">
<p className="p-6 pt-0 text-sm text-[#563421]/70 leading-relaxed">
                                Atendemos diversas regiões com estrutura completa. Para confirmar a disponibilidade e condições logísticas para o local exato do seu evento, entre em contato conosco via WhatsApp.
                            </p>
</div>
</div>
</div>

<div className="border border-[#563421]/10 rounded-2xl bg-[#EDE3D1]/50 overflow-hidden">
<button aria-expanded="false" className="faq-button w-full flex items-center justify-between p-6 text-left" onclick="toggleFaq(this)">
<span className="font-medium text-base">Existe quantidade mínima de convidados?</span>
<iconify-icon className="faq-icon text-xl text-[#563421]/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content">
<div className="faq-inner">
<p className="p-6 pt-0 text-sm text-[#563421]/70 leading-relaxed">
                                Sim, trabalhamos com um número mínimo para garantir a excelência e viabilidade da nossa operação premium. Fale com um consultor para analisarmos o formato ideal para sua celebração.
                            </p>
</div>
</div>
</div>

<div className="border border-[#563421]/10 rounded-2xl bg-[#EDE3D1]/50 overflow-hidden">
<button aria-expanded="false" className="faq-button w-full flex items-center justify-between p-6 text-left" onclick="toggleFaq(this)">
<span className="font-medium text-base">Vocês levam toda estrutura do buffet?</span>
<iconify-icon className="faq-icon text-xl text-[#563421]/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content">
<div className="faq-inner">
<p className="p-6 pt-0 text-sm text-[#563421]/70 leading-relaxed">
                                Fornecemos toda a infraestrutura necessária para a operação gastronômica (louças, talheres, taças padrão, réchauds, equipe). Estruturas específicas de decoração ou mobiliário geral do evento devem ser consultadas.
                            </p>
</div>
</div>
</div>

<div className="border border-[#563421]/10 rounded-2xl bg-[#EDE3D1]/50 overflow-hidden">
<button aria-expanded="false" className="faq-button w-full flex items-center justify-between p-6 text-left" onclick="toggleFaq(this)">
<span className="font-medium text-base">O cardápio pode ser personalizado?</span>
<iconify-icon className="faq-icon text-xl text-[#563421]/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content">
<div className="faq-inner">
<p className="p-6 pt-0 text-sm text-[#563421]/70 leading-relaxed">
                                Com certeza. Nosso atendimento é consultivo justamente para adaptar as opções do nosso portfólio ao perfil dos seus convidados, incluindo restrições alimentares e preferências específicas.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#EDE3D1] border-[#563421]/10 border-t pt-24 pb-12">
<div className="max-w-4xl mx-auto px-6 text-center mb-24 reveal active">
<h2 className="font-serif text-4xl md:text-6xl tracking-tighter font-medium mb-6 leading-tight">
                Seu evento pode ser apenas mais um...<br/>
<span className="italic text-[#563421]/60">ou inesquecível.</span>
</h2>
<p className="text-lg text-[#563421]/80 mb-10">Conheça o padrão Doçura &amp; Travessura.</p>
<a className="inline-flex justify-center items-center gap-2 bg-[#563421] text-[#EDE3D1] px-10 py-5 rounded-xl text-lg font-medium hover:bg-[#412618] transition-all duration-300 hover:-translate-y-[2px] shadow-premium-hover" href="https://www.nobregrowthmarketing.com.br">
                Quero receber o cardápio
                <iconify-icon className="" icon="solar:document-text-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col text-center max-w-7xl border-[#563421]/10 border-t mr-auto ml-auto pt-12 pr-6 pl-6 gap-x-4 gap-y-4 items-center">

<div className="flex gap-2 text-2xl font-medium text-[#563421] tracking-tighter font-serif gap-x-2 gap-y-2 items-center">
<img alt="Logo" className="md:h-16 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ff80f31-3cf5-4e9c-a13d-940714d6e3bf_320w.png"/>
</div>

<div className="text-sm text-[#563421]/60 font-medium">
                Atendimento consultivo <span className="mx-2 opacity-30">|</span> Execução impecável
            </div>

<p className="text-xs font-light text-[#563421]/50 leading-relaxed max-w-4xl">
                Ao utilizar nossos serviços, você concorda com nossos Termos de Uso e com nossa Política de Privacidade. Seus dados são tratados com segurança, confidencialidade e em conformidade com a LGPD (Lei nº 13.709/2018), exclusivamente para gestão de acesso, personalização de conteúdo, comunicação sobre sua assinatura e melhoria da experiência na plataforma. Não comercializamos dados pessoais.
            </p>
</div>
</footer>

<div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
<a className="flex justify-center items-center gap-2 w-full bg-[#563421] text-[#EDE3D1] px-6 py-4 rounded-2xl text-base font-medium shadow-[0_10px_40px_-10px_rgba(86,52,33,0.5)] active:scale-95 transition-transform" href="https://www.nobregrowthmarketing.com.br">
<iconify-icon className="text-xl" icon="solar:whatsapp-bold"></iconify-icon>
            Receber cardápio no WhatsApp
        </a>
</div>



    </>
  );
}
