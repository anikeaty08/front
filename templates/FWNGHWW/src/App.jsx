import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
  document.addEventListener('DOMContentLoaded', () => lucide.createIcons());

  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target);}});
  },{threshold:.2});
  document.querySelectorAll('.animate-fade-in,.animate-slide-left,.animate-slide-right').forEach(el=>io.observe(el));

  const s=document.createElement('style');s.textContent=`
    .animate-fade-in{opacity:0;transform:translateY(20px);transition:all .8s cubic-bezier(.22,1,.36,1);}
    .animate-slide-left{opacity:0;transform:translateX(-40px);transition:all .9s cubic-bezier(.22,1,.36,1);}
    .animate-slide-right{opacity:0;transform:translateX(40px);transition:all .9s cubic-bezier(.22,1,.36,1);}
    .in-view{opacity:1;transform:none;}
  `;document.head.appendChild(s);

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">
<picture>
<source media="(min-width:768px)" srcset="https://rrdfssuofuagtlxdzrbi.supabase.co/storage/v1/object/public/imgs//hands%20desktop.png"/>
<img alt="" className="absolute inset-0 w-full h-full object-cover" src="https://rrdfssuofuagtlxdzrbi.supabase.co/storage/v1/object/public/imgs//hands.png"/>
</picture>
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative z-10 max-w-3xl px-6 text-center text-white space-y-6 animate-fade-in">
<p className="text-lg uppercase tracking-wide text-emerald-400/90">Pioneiro da Cirurgia da Mão</p>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight">José Maurício Carmo</h1>
<p className="text-xl/relaxed">Décadas de excelência no cuidado à mão</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 font-medium transition shadow-lg shadow-emerald-600/20 focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-400/60" href="#consulta">Cuide de sua mão</a>
<a className="text-white/90 hover:text-white underline font-medium" href="#especialidades">Saiba mais</a>
</div>
</div>
</header>

<section className="bg-zinc-50 pt-24 px-6 pb-24">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
<img alt="Dr. José Maurício realizando telemedicina" className="w-full h-72 md:h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition animate-slide-left" src="https://rrdfssuofuagtlxdzrbi.supabase.co/storage/v1/object/public/imgs//X3WR19fVYSHmhC2hxgpd2sVZAfU%20(1).avif"/>
<div className="space-y-12 animate-slide-right">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center md:text-left">Sobre o Dr. José Maurício</h2>
<ul className="space-y-4 text-lg/relaxed text-zinc-700">
<li>• Membro Honorário da Academia Brasileira de Medicina</li>
<li>• Professor Titular do HUPE/UERJ por 8 anos</li>
<li>• Ex-presidente da Sociedade Brasileira de Traumatologia</li>
<li>• Fundador da Clínica da Mão</li>
<li>• Mestre em Ortopedia (UFRJ) e Livre Docente em Ortopedia (UERJ)</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="especialidades">
<div className="max-w-6xl mx-auto space-y-16">
<div className="text-center max-w-2xl mx-auto space-y-4 animate-fade-in">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Especialidades</h2>
</div>
<div className="grid md:grid-cols-2 gap-12">

<div className="border border-zinc-200 rounded-2xl bg-zinc-50 p-8 shadow-sm animate-slide-left space-y-6">
<img alt="Consultoria ortopédica" className="w-full h-40 md:h-48 object-cover rounded-lg grayscale hover:grayscale-0 transition" src="https://rrdfssuofuagtlxdzrbi.supabase.co/storage/v1/object/public/imgs//4UAl6Mw1o6ihXuKeyxvqbu6UeA%20(1).avif"/>
<div className="space-y-4">
<h3 className="text-2xl font-semibold tracking-tight">Consultoria especializada</h3>
<p className="text-zinc-600">Avaliação de operações ortopédicas complexas, focada em ambientes industriais e situações de alta exigência.</p>
</div>
</div>

<div className="border border-zinc-200 rounded-2xl bg-zinc-50 p-8 shadow-sm animate-slide-right space-y-6">
<img alt="Sala de cirurgias" className="w-full h-40 md:h-48 object-cover rounded-lg grayscale hover:grayscale-0 transition" src="https://rrdfssuofuagtlxdzrbi.supabase.co/storage/v1/object/public/imgs//hrNta5fIdbhrCdIfYzOAJvqeAs%20(1).avif"/>
<div className="space-y-4">
<h3 className="text-2xl font-semibold tracking-tight">Cirurgias</h3>
<p className="text-zinc-600">Procedimentos de alta precisão com foco na plena recuperação funcional.</p>
</div>
</div>

<div className="border border-zinc-200 rounded-2xl bg-zinc-50 p-8 shadow-sm animate-slide-left space-y-6">
<img alt="Palestras médicas" className="w-full h-40 md:h-48 object-cover rounded-lg grayscale hover:grayscale-0 transition" src="https://rrdfssuofuagtlxdzrbi.supabase.co/storage/v1/object/public/imgs//4CwODwjOckkJdCVLWzHYmqAk.avif"/>
<div className="space-y-4">
<h3 className="text-2xl font-semibold tracking-tight">Palestras</h3>
<p className="text-zinc-600">Compartilhamento de décadas de conhecimento com profissionais de saúde e instituições.</p>
</div>
</div>

<div className="border border-zinc-200 rounded-2xl bg-zinc-50 p-8 shadow-sm animate-slide-right space-y-6">
<img alt="Consulta de telemedicina" className="w-full h-40 md:h-48 object-cover rounded-lg grayscale hover:grayscale-0 transition" src="https://rrdfssuofuagtlxdzrbi.supabase.co/storage/v1/object/public/imgs//X3WR19fVYSHmhC2hxgpd2sVZAfU%20(1).avif"/>
<div className="space-y-4">
<h3 className="text-2xl font-semibold tracking-tight">Telemedicina</h3>
<p className="text-zinc-600">Consultas à distância com a mesma atenção e excelência de sempre.</p>
</div>
</div>
</div>

<div className="text-center mt-20 space-y-6 animate-fade-in">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Pronto para cuidar da sua mão?</h3>
<a className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition shadow-lg shadow-emerald-600/20 focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-400/60" href="#consulta">
<i className="lucide lucide-handshake size-5"></i> Agendar agora
      </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900" id="consulta">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-10 animate-fade-in">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Marcar Consulta</h2>
<p className="text-lg/relaxed max-w-2xl text-zinc-300">É hora de recuperar sua vida após os distúrbios nas mãos. Comece sua jornada de recuperação conosco.</p>
<a className="px-10 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition shadow-lg shadow-emerald-600/20 focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-400/60" href="mailto:contato@drjmc.com">Marque sua consulta</a>
</div>
</section>

<footer className="py-12 px-6 bg-white border-t border-zinc-200">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 animate-fade-in">
<p className="text-zinc-500">© 2025 Dr. José Maurício Carmo</p>
<div className="flex gap-4 text-zinc-400">

</div>
</div>
</footer>



    </>
  );
}
