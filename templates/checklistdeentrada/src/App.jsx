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



        // Data Retrieval Helper
        function getFormData() {
            return {
                driver: document.getElementById('driver').value || 'Não informado',
                cpf: document.getElementById('cpf').value || 'Não informado',
                truck: document.getElementById('truck_plate').value.toUpperCase() || '---',
                trailer: document.getElementById('trailer_plate').value.toUpperCase() || '---',
                cubage: document.getElementById('cubage').value || '0',
                date: document.getElementById('date').value || new Date().toISOString().split('T')[0],
                prog: document.getElementById('prog').value.toUpperCase() || '---'
            };
        }

        function showExportOptions() {
            const btn = document.querySelector('button[type="button"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<iconify-icon icon="svg-spinners:ring-resize" width="20"></iconify-icon>';
            btn.classList.add('cursor-not-allowed', 'opacity-80');
            
            setTimeout(() => {
                document.getElementById('logisticsForm').classList.add('hidden');
                document.getElementById('exportSection').classList.remove('hidden');
                
                const data = getFormData();
                const cleanName = data.driver.split(' ')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
                const dateStr = new Date().toLocaleDateString('pt-BR').replace(/\//g, '');
                
                document.getElementById('fileNamePreview').innerText = `manifesto_${cleanName || 'log'}_${dateStr}.csv`;

                btn.innerHTML = originalText;
                btn.classList.remove('cursor-not-allowed', 'opacity-80');
            }, 800);
        }

        // 1. Download Spreadsheet Logic
        function downloadSpreadsheet() {
            const data = getFormData();
            
            // CSV Header and Row
            const csvContent = [
                "Data,Programacao,Motorista,CPF,Placa Cavalo,Placa Carreta,Cubagem(m3)",
                `${data.date},${data.prog},${data.driver},${data.cpf},${data.truck},${data.trailer},${data.cubage}`
            ].join("\n");

            // Create Blob
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            
            // Create Download Link
            const link = document.createElement("a");
            link.setAttribute("href", url);
            const fileName = document.getElementById('fileNamePreview').innerText;
            link.setAttribute("download", fileName);
            link.style.visibility = 'hidden';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            showToast("Download Iniciado", "O arquivo CSV foi gerado com sucesso.");
        }

        // 2. Email Logic
        function sendEmail() {
            const data = getFormData();
            const subject = `Manifesto: ${data.prog} - ${data.driver}`;
            const body = `Detalhes do Transporte:\n\n` +
                `Programação: ${data.prog}\n` +
                `Data: ${data.date}\n` +
                `Motorista: ${data.driver} (CPF: ${data.cpf})\n` +
                `Veículo: ${data.truck} / ${data.trailer}\n` +
                `Cubagem: ${data.cubage} m³\n\n` +
                `Gerado via LogiTrack.`;

            window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            setTimeout(() => {
                showToast("Email Preparado", "O cliente de email padrão foi aberto.");
            }, 500);
        }

        // 3. Share Logic (with Clipboard Fallback)
        async function shareData() {
            const data = getFormData();
            const shareText = `🚛 *Manifesto Logístico*\n\n👤 ${data.driver}\n📅 ${data.date}\n🔢 ${data.prog}\n🚛 ${data.truck} / ${data.trailer}\n📦 ${data.cubage}m³`;

            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'Manifesto Logístico',
                        text: shareText
                    });
                    showToast("Compartilhado", "Dados enviados com sucesso.");
                } catch (err) {
                    // User cancelled or error, do nothing or fallback
                }
            } else {
                // Fallback to clipboard
                navigator.clipboard.writeText(shareText).then(() => {
                    showToast("Copiado", "Dados copiados para a área de transferência.");
                });
            }
        }

        // Toast Notification System
        let toastTimeout;
        function showToast(title, message) {
            const toast = document.getElementById('toast');
            document.getElementById('toastTitle').innerText = title;
            document.getElementById('toastMessage').innerText = message;
            
            toast.classList.add('toast-visible');
            
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                hideToast();
            }, 4000);
        }

        function hideToast() {
            document.getElementById('toast').classList.remove('toast-visible');
        }

        function resetForm() {
            document.getElementById('exportSection').classList.add('hidden');
            document.getElementById('logisticsForm').classList.remove('hidden');
            document.getElementById('logisticsForm').reset();
            document.getElementById('date').valueAsDate = new Date();
        }

        // Initialize
        document.getElementById('date').valueAsDate = new Date();
    
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
      

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 bg-zinc-900 text-white px-4 py-3 rounded-lg shadow-xl shadow-zinc-200/50 transform translate-y-20 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-[100] flex items-center gap-3 min-w-[300px]" id="toast">
<div className="text-green-400 flex items-center">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium" id="toastTitle">Sucesso</h4>
<p className="text-xs text-zinc-400 mt-0.5" id="toastMessage">Ação realizada com sucesso.</p>
</div>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="hideToast()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>

<nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
<div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="solar:box-minimalistic-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-zinc-900">LOGI<span className="text-zinc-400">TRACK</span></span>
</div>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-start pt-8 pb-12 px-4 sm:px-6">
<div className="w-full max-w-xl">

<div className="mb-8 text-center sm:text-left">
<h1 className="text-2xl font-medium tracking-tight text-zinc-900">Registro de Carga</h1>
<p className="text-sm text-zinc-500 mt-1 font-light">Preencha os dados do transporte para gerar o manifesto.</p>
</div>

<form className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6 space-y-6 transition-all duration-500 ease-in-out" id="logisticsForm">

<div className="space-y-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-400" icon="solar:user-id-linear" width="18"></iconify-icon>
<h2 className="text-xs font-medium uppercase tracking-wide text-zinc-500">Dados do Motorista</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="cpf">CPF</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-400 font-light" id="cpf" placeholder="000.000.000-00" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="driver">Nome Completo</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-400 font-light" id="driver" placeholder="Nome do motorista" type="text"/>
</div>
</div>
</div>
<hr className="border-zinc-100"/>

<div className="space-y-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-400" icon="solar:delivery-linear" width="18"></iconify-icon>
<h2 className="text-xs font-medium uppercase tracking-wide text-zinc-500">Dados do Veículo</h2>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="truck_plate">Placa Cavalo</label>
<div className="relative">
<input className="w-full uppercase bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-400 font-light tracking-wide" id="truck_plate" placeholder="ABC-1234" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="trailer_plate">Placa Carreta</label>
<div className="relative">
<input className="w-full uppercase bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-400 font-light tracking-wide" id="trailer_plate" placeholder="ABC-1234" type="text"/>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="cubage">Cubagem do Veículo</label>
<div className="relative flex items-center">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg pl-3 pr-10 py-2.5 text-sm outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-400 font-light" id="cubage" placeholder="00.00" type="number"/>
<span className="absolute right-3 text-xs text-zinc-400 font-medium">m³</span>
</div>
</div>
</div>
<hr className="border-zinc-100"/>

<div className="space-y-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-400" icon="solar:calendar-linear" width="18"></iconify-icon>
<h2 className="text-xs font-medium uppercase tracking-wide text-zinc-500">Logística</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="date">Data de Entrada</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all text-zinc-600 font-light" id="date" type="date"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="prog">Nº da Programação</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-400 font-light" id="prog" placeholder="PROG-0000" type="text"/>
</div>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 group" onclick="showExportOptions()" type="button">
<span>Processar Dados</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>

<div className="hidden bg-white border border-zinc-200 rounded-xl shadow-sm p-6 transition-all duration-500 ease-in-out" id="exportSection">
<div className="text-center mb-6">
<div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3 border border-green-100">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<h2 className="text-lg font-medium text-zinc-900 tracking-tight">Dados Processados</h2>
<p className="text-sm text-zinc-500 font-light mt-1">O registro foi consolidado com sucesso. Selecione uma ação abaixo.</p>
</div>
<div className="bg-zinc-50 rounded-lg border border-zinc-100 p-4 mb-6">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-400 uppercase tracking-wide">Arquivo Gerado</span>
<span className="text-xs font-medium text-zinc-900 bg-zinc-200 px-2 py-0.5 rounded">CSV</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:file-text-linear" width="24"></iconify-icon>
<div>
<p className="text-sm font-medium text-zinc-900 truncate" id="fileNamePreview">manifesto_log_2023.csv</p>
<p className="text-xs text-zinc-500" id="fileSizePreview">1kb • Gerado agora</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-3">
<button className="w-full bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-800 font-medium text-sm py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 group active:scale-[0.98]" onclick="downloadSpreadsheet()" type="button">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-900" icon="solar:file-download-linear" width="18"></iconify-icon>
                        Salvar Planilha
                    </button>
<button className="w-full bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-800 font-medium text-sm py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 group active:scale-[0.98]" onclick="sendEmail()" type="button">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-900" icon="solar:letter-linear" width="18"></iconify-icon>
                        Enviar por Email
                    </button>
<button className="w-full bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-800 font-medium text-sm py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 group active:scale-[0.98]" onclick="shareData()" type="button">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-900" icon="solar:share-linear" width="18"></iconify-icon>
                        Compartilhar
                    </button>
</div>
<div className="mt-6 pt-4 border-t border-zinc-100 text-center">
<button className="text-xs text-zinc-500 hover:text-zinc-900 font-medium transition-colors" onclick="resetForm()">
                        Registrar novo transporte
                    </button>
</div>
</div>
</div>
</main>
<footer className="mt-auto py-6 text-center">
<p className="text-xs text-zinc-400 font-light">© 2023 LogiTrack Systems. Secure Data.</p>
</footer>


    </>
  );
}
