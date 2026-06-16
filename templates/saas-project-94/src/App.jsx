import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="no-print w-full max-w-4xl mb-6 flex justify-between items-center px-4 md:px-0">
<div className="text-xs font-medium text-zinc-400">
<span className="text-zinc-900">Status:</span> Aguardando Aprovação
        </div>
<button className="group flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium py-2 px-4 rounded-md transition-all shadow-sm" onclick="window.print()">
<iconify-icon icon="solar:printer-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Salvar como PDF</span>
</button>
</div>

<main className="print-container w-full max-w-4xl bg-white shadow-sm border border-zinc-200/60 sm:rounded-lg overflow-hidden relative">

<div className="h-1.5 w-full bg-zinc-900"></div>
<div className="p-8 md:p-12 space-y-12">

<header className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-zinc-100 pb-8">
<div>
<div className="text-xl font-semibold tracking-tighter text-zinc-900 mb-1">PROTO.</div>
<p className="text-xs text-zinc-400">Desenvolvimento de Software Ltda.</p>
</div>
<div className="text-right flex flex-col items-start md:items-end gap-1">
<h1 className="text-sm font-medium text-zinc-900 uppercase tracking-widest mb-2">Orçamento</h1>
<div className="text-xs text-zinc-500">
<span className="text-zinc-400 mr-2">NÚMERO</span> #2023-084
                    </div>
<div className="text-xs text-zinc-500">
<span className="text-zinc-400 mr-2">DATA</span> 24 Outubro, 2023
                    </div>
<div className="text-xs text-zinc-500">
<span className="text-zinc-400 mr-2">VÁLIDO ATÉ</span> 24 Novembro, 2023
                    </div>
</div>
</header>

<section className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<h2 className="text-[10px] uppercase tracking-wider font-medium text-zinc-400 mb-3">Para</h2>
<div className="text-sm font-medium text-zinc-900">Acme Corporation</div>
<div className="text-xs text-zinc-500 mt-1">Att: João Silva, CTO</div>
<div className="text-xs text-zinc-500">Av. Paulista, 1000 - São Paulo, SP</div>
<div className="text-xs text-zinc-500">joao.silva@acme.inc</div>
</div>
<div>
<h2 className="text-[10px] uppercase tracking-wider font-medium text-zinc-400 mb-3">Escopo do Projeto</h2>
<div className="text-sm font-medium text-zinc-900">Plataforma SaaS B2B</div>
<p className="text-xs text-zinc-500 mt-1 leading-relaxed max-w-xs">
                        Desenvolvimento de MVP para gestão de inventário inteligente. Inclui painel administrativo, API RESTful e integração com gateways de pagamento.
                    </p>
</div>
</section>

<section className="page-break">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-200">
<th className="py-3 text-[10px] uppercase tracking-wider font-medium text-zinc-400 w-1/2">Descrição / Serviço</th>
<th className="py-3 text-[10px] uppercase tracking-wider font-medium text-zinc-400 text-right">Horas/Qtd</th>
<th className="py-3 text-[10px] uppercase tracking-wider font-medium text-zinc-400 text-right">Valor Unit.</th>
<th className="py-3 text-[10px] uppercase tracking-wider font-medium text-zinc-400 text-right">Total</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="group border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors">
<td className="py-4 pr-4 align-top">
<div className="font-medium text-zinc-900">Design UI/UX &amp; Prototipagem</div>
<div className="text-xs text-zinc-500 mt-1 font-light">Figma, Design System, User Flows e Testes de usabilidade.</div>
</td>
<td className="py-4 text-right align-top text-zinc-600">40h</td>
<td className="py-4 text-right align-top text-zinc-600">R$ 150</td>
<td className="py-4 text-right align-top font-medium text-zinc-900">R$ 6.000,00</td>
</tr>

<tr className="group border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors">
<td className="py-4 pr-4 align-top">
<div className="font-medium text-zinc-900">Desenvolvimento Backend</div>
<div className="text-xs text-zinc-500 mt-1 font-light">Node.js, PostgreSQL, Auth0, Arquitetura Serverless.</div>
</td>
<td className="py-4 text-right align-top text-zinc-600">120h</td>
<td className="py-4 text-right align-top text-zinc-600">R$ 180</td>
<td className="py-4 text-right align-top font-medium text-zinc-900">R$ 21.600,00</td>
</tr>

<tr className="group border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors">
<td className="py-4 pr-4 align-top">
<div className="font-medium text-zinc-900">Desenvolvimento Frontend</div>
<div className="text-xs text-zinc-500 mt-1 font-light">React, Next.js, Integração com API, Dashboard Responsivo.</div>
</td>
<td className="py-4 text-right align-top text-zinc-600">100h</td>
<td className="py-4 text-right align-top text-zinc-600">R$ 180</td>
<td className="py-4 text-right align-top font-medium text-zinc-900">R$ 18.000,00</td>
</tr>

<tr className="group border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors">
<td className="py-4 pr-4 align-top">
<div className="font-medium text-zinc-900">Infraestrutura &amp; DevOps</div>
<div className="text-xs text-zinc-500 mt-1 font-light">Setup AWS, CI/CD Pipeline, Monitoramento.</div>
</td>
<td className="py-4 text-right align-top text-zinc-600">20h</td>
<td className="py-4 text-right align-top text-zinc-600">R$ 200</td>
<td className="py-4 text-right align-top font-medium text-zinc-900">R$ 4.000,00</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="flex flex-col md:flex-row justify-end pt-4 page-break">
<div className="w-full md:w-1/3 space-y-3">
<div className="flex justify-between text-xs text-zinc-500">
<span>Subtotal</span>
<span>R$ 49.600,00</span>
</div>
<div className="flex justify-between text-xs text-zinc-500">
<span>Taxas (ISS 5%)</span>
<span>R$ 2.480,00</span>
</div>
<div className="h-px bg-zinc-200 my-2"></div>
<div className="flex justify-between items-baseline">
<span className="text-sm font-medium text-zinc-900">Total Estimado</span>
<span className="text-2xl font-semibold tracking-tight text-zinc-900">R$ 52.080,00</span>
</div>
<p className="text-[10px] text-zinc-400 text-right pt-1">Moeda: Real Brasileiro (BRL)</p>
</div>
</section>

<section className="pt-8 border-t border-zinc-100 page-break">
<h3 className="text-sm font-medium text-zinc-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:calendar-linear" width="18"></iconify-icon>
                    Cronograma Estimado
                </h3>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="border border-zinc-200 rounded p-4 relative">
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-zinc-900"></div>
<div className="text-[10px] uppercase tracking-wide text-zinc-400 mb-1">Semana 1-2</div>
<div className="text-xs font-medium text-zinc-900">Discovery &amp; Design</div>
</div>
<div className="border border-zinc-200 rounded p-4 relative">
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-zinc-300"></div>
<div className="text-[10px] uppercase tracking-wide text-zinc-400 mb-1">Semana 3-6</div>
<div className="text-xs font-medium text-zinc-900">Desenvolvimento Backend</div>
</div>
<div className="border border-zinc-200 rounded p-4 relative">
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-zinc-300"></div>
<div className="text-[10px] uppercase tracking-wide text-zinc-400 mb-1">Semana 5-9</div>
<div className="text-xs font-medium text-zinc-900">Integração Frontend</div>
</div>
<div className="border border-zinc-200 rounded p-4 relative">
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-zinc-300"></div>
<div className="text-[10px] uppercase tracking-wide text-zinc-400 mb-1">Semana 10</div>
<div className="text-xs font-medium text-zinc-900">QA &amp; Launch</div>
</div>
</div>
</section>

<footer className="pt-12 mt-8">

<div className="bg-zinc-50 border border-zinc-100 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">

<div className="flex items-center gap-5 w-full md:w-auto">
<div className="bg-white p-2 rounded border border-zinc-200 shadow-sm shrink-0">

<img alt="QR Code Pix" className="w-20 h-20 mix-blend-multiply opacity-90" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data=00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-4266141740005204000053039865802BR5913Acme%20Solutions6008Sao%20Paulo62070503***63041D3D"/>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1.5">
<span className="text-sm font-semibold text-zinc-900 tracking-tight">Pagar via Pix</span>
<span className="bg-emerald-100 text-emerald-700 border border-emerald-200 text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide shadow-sm">-10% OFF</span>
</div>
<p className="text-xs text-zinc-500 max-w-[220px] leading-relaxed">Escaneie o código para pagamento instantâneo com desconto aplicado.</p>
</div>
</div>

<button className="w-full md:w-auto bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-3.5 rounded-md text-sm font-medium transition-all shadow-md hover:shadow-lg hover:shadow-zinc-200 flex items-center justify-center gap-3 active:scale-[0.98]">
<span>Ir para Pagamento</span>
<iconify-icon icon="solar:card-linear" width="18"></iconify-icon>
</button>
</div>
<div className="pt-6 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-400">Este orçamento é válido por 30 dias. Ao aprovar, você concorda com os <a className="text-zinc-600 underline decoration-zinc-300 underline-offset-2 hover:text-zinc-900" href="#">termos de serviço</a>.</p>
<div className="flex items-center gap-2 text-zinc-400">
<iconify-icon icon="solar:global-linear" width="14"></iconify-icon>
<span className="text-[10px]">www.proto.inc</span>
</div>
</div>
</footer>
</div>
</main>

<div className="fixed inset-0 pointer-events-none opacity-[0.015] no-print z-[-1]" style={{backgroundImage: 'url(\'data:image/svg+xml'}}></div>

    </>
  );
}
