import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons({ strokeWidth: 1.5 });

    document.addEventListener("DOMContentLoaded", () => {
      const main = document.getElementById("dashboard");
      [...main.children].forEach((el, idx) => {
        el.style.transitionDelay = `${idx * 120}ms`;
      });
      setTimeout(() => main.classList.remove("opacity-0"), 50);
    });

    const ctx = document.getElementById("emailsChart");
    if (ctx) {
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
          datasets: [
            { label: "Enviados", data: [400, 380, 500, 420, 460, 390, 450], borderColor: "#D29600", backgroundColor: "rgba(210,150,0,0.1)", tension: .4, fill: true },
            { label: "Abertos", data: [280, 260, 320, 290, 310, 270, 300], borderColor: "#6B7280", backgroundColor: "rgba(107,114,128,0.1)", tension: .4 }
          ]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: { y: { ticks: { stepSize: 100 } } }
        }
      });
    }

    const drawer = document.getElementById("mobileDrawer");
    document.getElementById("openSidebar")?.addEventListener("click", () => {
      drawer.classList.remove("hidden");
    });
    drawer.addEventListener("click", (e) => {
      if (e.target === drawer) drawer.classList.add("hidden");
    });
    drawer.querySelectorAll("a").forEach(link => link.addEventListener("click", () => drawer.classList.add("hidden")));
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 shrink-0 border-r border-neutral-200 bg-white/70 backdrop-blur-md hidden md:flex flex-col">
<div className="h-16 flex items-center px-6">
<span className="text-2xl font-[Playfair_Display] tracking-tight">C</span>
</div>
<nav className="flex-1 space-y-1 px-4">
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-100 transition" href="#dashboard">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layout-dashboard"></i>
<span className="text-sm">Dashboard</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-100 transition" href="#leads">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="users"></i>
<span className="text-sm">Leads</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-100 transition" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layers"></i>
<span className="text-sm">Grupos</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-100 transition" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="file-text"></i>
<span className="text-sm">Templates</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-100 transition" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="calendar"></i>
<span className="text-sm">Agendamentos</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-100 transition" href="#imoveis">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="home"></i>
<span className="text-sm">Imóveis</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-100 transition" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bar-chart-2"></i>
<span className="text-sm">Relatórios</span>
</a>
</nav>
<div className="p-4 border-t border-neutral-200">
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-neutral-100 transition">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="log-out"></i>Sair
      </button>
</div>
</aside>

<div className="flex-1 flex flex-col">

<header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-neutral-200">
<div className="flex items-center gap-3 md:hidden">
<button id="openSidebar"><i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i></button>
<span className="font-[Playfair_Display] text-xl tracking-tight">Cataldo</span>
</div>
<h1 className="hidden md:block font-[Playfair_Display] text-xl tracking-tight">Dashboard</h1>
<div className="flex items-center gap-4">
<div className="relative">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
</div>
<img alt="avatar" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</header>
<main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-10 opacity-0 transition-opacity duration-700" id="mainContent">

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-md border border-neutral-200 bg-white p-4 flex items-center gap-4 shadow-sm">
<div className="p-2 rounded-md bg-neutral-100">
<i className="w-6 h-6 stroke-[1.5] text-primary" data-lucide="users"></i>
</div>
<div>
<p className="text-xs text-neutral-500">Leads totais</p>
<p className="text-lg font-semibold tracking-tight">4 102</p>
</div>
</div>
<div className="rounded-md border border-neutral-200 bg-white p-4 flex items-center gap-4 shadow-sm">
<div className="p-2 rounded-md bg-neutral-100">
<i className="w-6 h-6 stroke-[1.5] text-primary" data-lucide="send"></i>
</div>
<div>
<p className="text-xs text-neutral-500">Envios hoje</p>
<p className="text-lg font-semibold tracking-tight">328</p>
</div>
</div>
<div className="rounded-md border border-neutral-200 bg-white p-4 flex items-center gap-4 shadow-sm">
<div className="p-2 rounded-md bg-neutral-100">
<i className="w-6 h-6 stroke-[1.5] text-primary" data-lucide="mail-open"></i>
</div>
<div>
<p className="text-xs text-neutral-500">Abertos (e-mail)</p>
<p className="text-lg font-semibold tracking-tight">58 %</p>
</div>
</div>
<div className="rounded-md border border-neutral-200 bg-white p-4 flex items-center gap-4 shadow-sm">
<div className="p-2 rounded-md bg-neutral-100">
<i className="w-6 h-6 stroke-[1.5] text-primary" data-lucide="check-circle"></i>
</div>
<div>
<p className="text-xs text-neutral-500">Entregues WhatsApp</p>
<p className="text-lg font-semibold tracking-tight">91 %</p>
</div>
</div>
</section>

<section className="grid lg:grid-cols-3 gap-8">

<div className="col-span-1 lg:col-span-2 rounded-md border border-neutral-200 bg-white p-6 shadow-sm flex flex-col">
<h2 className="font-[Playfair_Display] text-lg tracking-tight mb-4">Envios x Aberturas (últimos 7 dias)</h2>
<div>
<canvas height="120" id="emailsChart"></canvas>
</div>
</div>

<div className="rounded-md border border-neutral-200 bg-white p-6 shadow-sm flex flex-col" id="leads">
<h2 className="font-[Playfair_Display] text-lg tracking-tight mb-4">Leads recentes</h2>
<div className="overflow-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="text-left border-b border-neutral-200">
<th className="py-2 pr-4">Nome</th>
<th className="py-2 pr-4">E-mail</th>
<th className="py-2">Origem</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-neutral-100 hover:bg-neutral-50">
<td className="py-2 pr-4">Aline Souza</td>
<td className="py-2 pr-4">aline@gmail.com</td>
<td className="py-2">Site</td>
</tr>
<tr className="border-b border-neutral-100 hover:bg-neutral-50">
<td className="py-2 pr-4">Marcos Lima</td>
<td className="py-2 pr-4">marcos@outlook.com</td>
<td className="py-2">Facebook</td>
</tr>
<tr className="hover:bg-neutral-50">
<td className="py-2 pr-4">Juliana Reis</td>
<td className="py-2 pr-4">ju_reis@yahoo.com</td>
<td className="py-2">Site</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section id="imoveis">
<h2 className="font-[Playfair_Display] text-lg tracking-tight mb-4">Imóveis recém-adicionados</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-md overflow-hidden shadow-lg border border-neutral-200 bg-black group">
<img className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-4 text-white space-y-1">
<h3 className="text-base font-semibold tracking-tight">Loft moderno Vila Madalena</h3>
<p className="text-xs text-neutral-300">2 quartos • 78 m² • R$ 1.150.000</p>
</div>
<div className="bg-primary text-white text-center text-sm font-medium py-2 cursor-pointer hover:bg-accent transition">Adicionar a envio</div>
</div>
<div className="rounded-md overflow-hidden shadow-lg border border-neutral-200 bg-black group">
<img className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-4 text-white space-y-1">
<h3 className="text-base font-semibold tracking-tight">Casa contemporânea Alphaville</h3>
<p className="text-xs text-neutral-300">4 suítes • 350 m² • R$ 3.800.000</p>
</div>
<div className="bg-primary text-white text-center text-sm font-medium py-2 cursor-pointer hover:bg-accent transition">Adicionar a envio</div>
</div>
<div className="rounded-md overflow-hidden shadow-lg border border-neutral-200 bg-black group">
<img className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-4 text-white space-y-1">
<h3 className="text-base font-semibold tracking-tight">Studio mobiliado Centro</h3>
<p className="text-xs text-neutral-300">1 quarto • 35 m² • R$ 520.000</p>
</div>
<div className="bg-primary text-white text-center text-sm font-medium py-2 cursor-pointer hover:bg-accent transition">Adicionar a envio</div>
</div>
</div>
</section>
</main>
</div>

<div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm hidden" id="mobileDrawer">
<div className="absolute left-0 top-0 bg-white w-64 h-full shadow-lg flex flex-col">
<div className="h-16 flex items-center px-6 border-b border-neutral-200">
<span className="text-2xl font-[Playfair_Display] tracking-tight">C</span>
</div>
<nav className="flex-1 space-y-1 px-4 py-4">
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-100 transition" href="#dashboard">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layout-dashboard"></i>
<span className="text-sm">Dashboard</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-100 transition" href="#leads">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="users"></i>
<span className="text-sm">Leads</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-100 transition" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layers"></i>
<span className="text-sm">Grupos</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-100 transition" href="#imoveis">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="home"></i>
<span className="text-sm">Imóveis</span>
</a>
</nav>
<div className="p-4 border-t border-neutral-200">
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-neutral-100 transition">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="log-out"></i>Sair
        </button>
</div>
</div>
</div>


    </>
  );
}
