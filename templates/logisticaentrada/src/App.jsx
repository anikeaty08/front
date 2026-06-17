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



    // Toggle functionality for Bitrem fields
        const toggle = document.getElementById('bitrem-toggle');
        const section = document.getElementById('bitrem-section');

        toggle.addEventListener('change', function() {
            if(this.checked) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        // Set current date in header
        document.getElementById('current-date').innerText = new Date().toLocaleDateString('pt-BR');

        // Helper to get value safely
        const getVal = (id) => document.getElementById(id).value || "N/A";

        // Function: Print
        function handlePrint() {
            window.print();
        }

        // Function: Share
        async function handleShare() {
            // Collect Data
            const name = getVal('input-name');
            const cpf = getVal('input-cpf');
            const date = getVal('input-date');
            const plate = getVal('input-plate');
            const trailer1 = getVal('input-trailer1');
            const cube1 = getVal('input-cube1');
            const prog1 = getVal('input-prog1');
            
            let shareText = `🚛 *REGISTRO DE ENTRADA*\n\n👤 *Motorista:* ${name}\n🆔 *CPF:* ${cpf}\n📅 *Data:* ${date}\n\n🚛 *VEÍCULO 1*\n🔹 Cavalo: ${plate}\n🔹 Carreta: ${trailer1}\n🔹 Cubagem: ${cube1}m³\n📝 ${prog1}`;

            // Add Bitrem info if active
            if(toggle.checked) {
                const trailer2 = getVal('input-trailer2');
                const cube2 = getVal('input-cube2');
                const prog2 = getVal('input-prog2');
                shareText += `\n\n📦 *VEÍCULO 2 (Bitrem)*\n🔹 Carreta: ${trailer2}\n🔹 Cubagem: ${cube2}m³\n📝 ${prog2}`;
            }

            shareText += `\n\n----------------\nGerado via LogisData App`;

            // Execute Share
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'LogisData Registro',
                        text: shareText
                    });
                } catch (err) {
                    console.log('Share canceled');
                }
            } else {
                // Fallback for desktop/unsupported
                try {
                    await navigator.clipboard.writeText(shareText);
                    alert('Dados copiados para a área de transferência! Cole no WhatsApp ou Email.');
                } catch (err) {
                    alert('Erro ao copiar dados.');
                }
            }
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
      

<header className="w-full max-w-2xl flex items-center justify-between mb-8">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center font-semibold tracking-tighter text-sm text-white" style={{}}>
        LD
      </div>
<h1 className="font-medium tracking-tight text-lg text-neutral-100" style={{}}>LOGISDATA</h1>
</div>
<button className="p-2 rounded-full transition-colors text-neutral-500 hover:bg-neutral-900" style={{}}>
<iconify-icon className="" icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</header>

<main className="w-full max-w-2xl border backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 bg-neutral-900/50 border-neutral-800/60" style={{}}>
<div className="flex justify-between items-end mb-6">
<div className="">
<h2 className="font-medium tracking-tight text-base text-neutral-200" style={{}}>Entrada de transportadora</h2>
<p className="text-xs text-neutral-500 mt-1" style={{}}>Preencha os dados do motorista e da carga.</p>
</div>
<div className="text-xs text-neutral-500 border rounded-md px-2 py-1 flex items-center gap-2 border-neutral-800 bg-neutral-900/50" style={{}}>
<iconify-icon className="" icon="solar:calendar-linear" width="14"></iconify-icon>
<span id="current-date">25/01/2026</span>
</div>
</div>
<form className="space-y-6" id="logistics-form" onsubmit="event.preventDefault();">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="md:col-span-2">
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-1" style={{}}>Nome do Motorista</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none group-focus-within:text-indigo-400 transition-colors text-neutral-600" style={{}}>
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="w-full border text-sm rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block pl-10 p-2.5 transition-all placeholder-neutral-600 shadow-sm outline-none bg-neutral-950 border-neutral-800 text-neutral-300" id="input-name" placeholder="Digite o nome completo" style={{}} type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-1" style={{}}>CPF</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none group-focus-within:text-indigo-400 transition-colors text-neutral-600" style={{}}>
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="w-full border text-sm rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block pl-10 p-2.5 transition-all placeholder-neutral-600 shadow-sm outline-none bg-neutral-950 border-neutral-800 text-neutral-300" id="input-cpf" placeholder="000.000.000-00" style={{}} type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-1" style={{}}>Data de Registro</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none group-focus-within:text-indigo-400 transition-colors text-neutral-600" style={{}}>
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="w-full border text-sm rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block pl-10 p-2.5 transition-all placeholder-neutral-600 shadow-sm outline-none bg-neutral-950 border-neutral-800 text-neutral-300" id="input-date" style={{}} type="date"/>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
<div className="md:col-span-4">
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-1" style={{}}>Placa do Cavalo</label>
<input className="uppercase w-full border text-sm rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 transition-all outline-none bg-neutral-950 border-neutral-800 text-neutral-300" id="input-plate" placeholder="ABC-1234" style={{}} type="text"/>
</div>
<div className="md:col-span-4">
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-1" style={{}}>Placa Carreta 01</label>
<input className="uppercase w-full border text-sm rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 transition-all outline-none bg-neutral-950 border-neutral-800 text-neutral-300" id="input-trailer1" placeholder="ABC-1234" style={{}} type="text"/>
</div>
<div className="md:col-span-4">
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-1" style={{}}>Cubagem (m³)</label>
<div className="relative">
<input className="w-full border text-sm rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 transition-all outline-none bg-neutral-950 border-neutral-800 text-neutral-300" id="input-cube1" placeholder="00.0" style={{}} type="number"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-xs text-neutral-600" style={{}}>
                m³
              </div>
</div>
</div>
<div className="md:col-span-12">
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-1" style={{}}>Programação Carreta 01</label>
<div className="relative">
<div className="absolute top-3 left-3 pointer-events-none text-neutral-600" style={{}}>
<iconify-icon icon="solar:clipboard-list-linear" width="18"></iconify-icon>
</div>
<textarea className="w-full border text-sm rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block pl-10 p-2.5 transition-all placeholder-neutral-600 resize-none outline-none bg-neutral-950 border-neutral-800 text-neutral-300" id="input-prog1" placeholder="Destino, rota ou observações..." rows="2" style={{}}></textarea>
</div>
</div>
</div>

<div className="border rounded-lg p-3 flex items-center justify-between bg-neutral-900 border-neutral-800" style={{}}>
<div className="flex items-center gap-3">
<div className="p-2 rounded-md bg-neutral-800/50 text-neutral-400" style={{}}>
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-200" style={{}}>Veículo Bitrem?</span>
<span className="text-xs text-neutral-500" style={{}}>Adicionar dados da segunda carreta</span>
</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox block appearance-none cursor-pointer transition-all duration-300 ease-in-out bg-white w-5 h-5 border-neutral-700 border-4 rounded-full absolute" id="bitrem-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full cursor-pointer transition-colors duration-300 bg-neutral-700" htmlFor="bitrem-toggle" style={{}}></label>
</div>
</div>

<div id="bitrem-section">
<div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 relative" style={{}}>
<div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 rounded-l-xl" style={{}}></div>
<h3 className="font-medium text-sm mb-4 flex items-center gap-2 text-indigo-300" style={{}}>
<iconify-icon className="text-indigo-400" icon="solar:box-linear" style={{}}></iconify-icon>
            Dados da 2ª Carreta
          </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium mb-1.5 ml-1 text-indigo-200/50" style={{}}>Placa Carreta 02</label>
<input className="uppercase w-full border border-indigo-500/30 text-sm rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 transition-all outline-none bg-neutral-950 text-neutral-300" id="input-trailer2" placeholder="ABC-1234" style={{}} type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 ml-1 text-indigo-200/50" style={{}}>Cubagem (m³)</label>
<div className="relative">
<input className="w-full border border-indigo-500/30 text-sm rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 transition-all outline-none bg-neutral-950 text-neutral-300" id="input-cube2" placeholder="00.0" style={{}} type="number"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-xs text-neutral-600" style={{}}>
                  m³
                </div>
</div>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium mb-1.5 ml-1 text-indigo-200/50" style={{}}>Programação Carreta 02</label>
<div className="relative">
<div className="absolute top-3 left-3 pointer-events-none text-neutral-500" style={{}}>
<iconify-icon icon="solar:clipboard-list-linear" width="18"></iconify-icon>
</div>
<textarea className="w-full border border-indigo-500/30 text-sm rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block pl-10 p-2.5 transition-all placeholder-neutral-600 resize-none outline-none bg-neutral-950 text-neutral-300" id="input-prog2" placeholder="Destino ou observações da segunda unidade..." rows="2" style={{}}></textarea>
</div>
</div>
</div>
</div>
</div>

<div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 no-print">

<button className="group flex items-center justify-center gap-2 w-full border font-medium rounded-lg text-sm px-3 py-2.5 focus:outline-none transition-all bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border-neutral-700 hover:border-neutral-600" onclick="handlePrint()" style={{}} type="button">
<iconify-icon className="group-hover:text-white transition-colors text-neutral-400" icon="solar:printer-linear" style={{}} width="18"></iconify-icon>
                    Print
                </button>

<button className="group flex items-center justify-center gap-2 w-full border font-medium rounded-lg text-sm px-3 py-2.5 focus:outline-none transition-all bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border-neutral-700 hover:border-neutral-600" onclick="handleShare()" style={{}} type="button">
<iconify-icon className="group-hover:text-white transition-colors text-neutral-400" icon="solar:share-linear" style={{}} width="18"></iconify-icon>
                    Share
                </button>
</div>
</form>
</main>
<footer className="mt-12 text-center no-print">
<p className="text-xs tracking-tight text-neutral-600" style={{}}>© 2023 LogisData Systems. Secure &amp; Encrypted.</p>
</footer>


    </>
  );
}
