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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
<div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
<div className="font-semibold text-zinc-100 tracking-tighter text-sm">PRI</div>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">Alerta Ativo</span>
</div>
</div>
</header>
<main className="flex-grow">

<section className="mx-auto max-w-5xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
<h1 className="text-4xl sm:text-5xl font-semibold text-zinc-100 tracking-tight leading-tight mb-6">
                Plano de Resposta a Incidentes:<br/>
<span className="text-zinc-500">Ransomware e Exfiltração</span>
</h1>
<p className="text-lg sm:text-xl text-zinc-300 mb-12 max-w-2xl font-normal leading-relaxed">
                Ações Imediatas de Contenção e Investigação de Endpoints
            </p>
<div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 sm:p-6 max-w-3xl flex items-start gap-4">
<iconify-icon className="text-amber-500 text-xl shrink-0 mt-0.5" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="text-xs font-semibold text-zinc-200 mb-1.5 uppercase tracking-widest">Nota Importante</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Focar no fato de que o invasor utilizou ferramentas legítimas (rclone/IObit), o que explica a não detecção inicial pelo antivírus.
                    </p>
</div>
</div>
</section>

<section className="mx-auto max-w-5xl px-6 py-16 sm:py-24 border-t border-zinc-800/60">
<div className="flex flex-col md:flex-row gap-12 lg:gap-20">
<div className="md:w-1/3 shrink-0">
<h2 className="text-2xl font-semibold text-zinc-100 tracking-tight mb-4">Cenário Atual e<br/>Vetores Identificados</h2>
<p className="text-sm text-zinc-500 leading-relaxed">O que sabemos sobre o incidente até o momento.</p>
</div>
<div className="md:w-2/3 space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-5 hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-zinc-400 text-lg mb-3" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-zinc-200 font-medium text-sm mb-1.5">IObit Unlocker</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Uso para forçar encerramento de processos/bancos de dados.</p>
</div>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-5 hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-zinc-400 text-lg mb-3" icon="solar:cloud-upload-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-zinc-200 font-medium text-sm mb-1.5">rclone</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Uso para exfiltração de dados sensíveis.</p>
</div>
</div>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-5 flex items-start gap-4">
<iconify-icon className="text-zinc-400 text-lg shrink-0 mt-0.5" icon="solar:shield-cross-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm text-zinc-300 leading-relaxed">
                                Antivírus local não detectou as ferramentas por serem <span className="text-zinc-100 font-medium">"Living off the Land"</span> (ferramentas legítimas usadas para fins maliciosos).
                            </p>
</div>
</div>
<div className="border-l border-amber-500/50 pl-4 py-1 mt-6">
<span className="text-[10px] font-semibold text-amber-500/80 uppercase tracking-widest block mb-1.5">Prioridade Máxima</span>
<p className="text-sm text-zinc-200">Identificar o "Paciente Zero" e garantir a integridade das máquinas locais.</p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900/10 border-y border-zinc-800/60">
<div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

<div className="space-y-6">
<div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
<div className="h-7 w-7 rounded border border-zinc-700 bg-zinc-800/50 flex items-center justify-center shadow-sm">
<iconify-icon className="text-zinc-300" icon="solar:minimalistic-magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight">Auditoria de Persistência</h3>
</div>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-4">Onde o invasor se esconde</p>
<ul className="space-y-5">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 shrink-0" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<div>
<strong className="block text-sm font-medium text-zinc-200 mb-0.5">Agendador de Tarefas</strong>
<span className="text-xs text-zinc-400 leading-relaxed">Verificar scripts .bat, .ps1 ou chamadas ao rclone.exe.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 shrink-0" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<div>
<strong className="block text-sm font-medium text-zinc-200 mb-0.5">Registro do Windows</strong>
<span className="text-xs text-zinc-400 leading-relaxed">Auditar chaves de inicialização (Run e Startup).</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 shrink-0" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<div>
<strong className="block text-sm font-medium text-zinc-200 mb-0.5">Serviços</strong>
<span className="text-xs text-zinc-400 leading-relaxed">Investigar serviços novos, sem assinatura ou com nomes genéricos.</span>
</div>
</li>
</ul>
<div className="bg-red-500/5 border border-red-500/10 rounded px-4 py-3 mt-6 flex gap-2 items-center">
<span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Ação:</span>
<span className="text-xs text-zinc-300">Bloquear qualquer execução suspeita nestes vetores.</span>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
<div className="h-7 w-7 rounded border border-zinc-700 bg-zinc-800/50 flex items-center justify-center shadow-sm">
<iconify-icon className="text-zinc-300" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight">Monitoramento de Rede e Processos</h3>
</div>
<div className="h-4"></div> 
<ul className="space-y-5">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 shrink-0" icon="solar:transfer-horizontal-linear" strokeWidth="1.5"></iconify-icon>
<div>
<strong className="block text-sm font-medium text-zinc-200 mb-0.5">Conexões Ativas</strong>
<span className="text-xs text-zinc-400 leading-relaxed">Usar <code className="text-[10px] bg-zinc-800 px-1 py-0.5 rounded font-mono text-zinc-300">netstat -ano</code> ou TCPView para identificar conexões suspeitas com IPs externos (portas 443 ou não convencionais).</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 shrink-0" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<div>
<strong className="block text-sm font-medium text-zinc-200 mb-0.5">Análise de Processos</strong>
<span className="text-xs text-zinc-400 leading-relaxed">Utilizar o Process Explorer para identificar processos sem assinatura digital ou consumo anômalo de recursos.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 shrink-0" icon="solar:route-linear" strokeWidth="1.5"></iconify-icon>
<div>
<strong className="block text-sm font-medium text-zinc-200 mb-0.5">Movimentação Lateral</strong>
<span className="text-xs text-zinc-400 leading-relaxed">Monitorar Logs de Eventos (ID 4624/4625) para detectar acessos em horários atípicos.</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
<div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
<div className="md:w-1/3 md:sticky md:top-24 shrink-0">
<h2 className="text-2xl font-semibold text-zinc-100 tracking-tight mb-4">Investigação da Exfiltração</h2>
<p className="text-sm text-zinc-500 leading-relaxed">Rastreamento de arquivos específicos (Rclone &amp; IObit).</p>
</div>
<div className="md:w-2/3 space-y-6">
<div className="bg-[#0c0c0c] border border-zinc-800/80 rounded-xl overflow-hidden shadow-sm">
<div className="px-4 py-2.5 border-b border-zinc-800/80 bg-zinc-900/40 flex justify-between items-center">
<div className="flex items-center gap-2 text-xs font-medium text-zinc-300 font-mono">
<iconify-icon className="text-zinc-500" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                                rclone.conf
                            </div>
<span className="px-2 py-0.5 rounded text-[9px] font-semibold bg-red-500/10 text-red-400 border border-red-500/20 uppercase tracking-widest">Não deletar!</span>
</div>
<div className="p-4 sm:p-5 text-sm text-zinc-400 leading-relaxed">
                            Buscar pelo arquivo <span className="text-zinc-200">rclone.conf</span>. Ele contém o destino dos dados roubados (Dropbox, S3, etc.).
                        </div>
</div>
<div className="bg-[#0c0c0c] border border-zinc-800/80 rounded-xl overflow-hidden shadow-sm">
<div className="px-4 py-2.5 border-b border-zinc-800/80 bg-zinc-900/40 flex items-center gap-2 text-xs font-medium text-zinc-300 font-mono">
<iconify-icon className="text-zinc-500" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
                            IObit Unlocker
                        </div>
<div className="p-4 sm:p-5">
<p className="text-sm text-zinc-400 mb-3">Rastrear a instalação no diretório:</p>
<code className="block bg-zinc-950 border border-zinc-800/80 p-3 rounded-lg text-xs text-zinc-300 font-mono select-all">C:\Program Files (x86)\IObit</code>
</div>
</div>
<div className="flex items-start gap-4 pt-6 border-t border-zinc-800/50">
<div className="h-8 w-8 rounded border border-zinc-700 bg-zinc-800/30 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-200 mb-1">Timeline</h4>
<p className="text-xs text-zinc-400 leading-relaxed">Verificar a data de criação/modificação desses arquivos para estabelecer a cronologia da invasão.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
<div className="border border-zinc-800/80 bg-gradient-to-b from-zinc-900/50 to-zinc-950 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-xl shadow-black/50">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10">
<div className="text-center mb-10 sm:mb-12">
<h2 className="text-2xl font-semibold text-zinc-100 tracking-tight mb-3">Protocolo de Contenção Imediata</h2>
<p className="text-sm text-zinc-500">Medidas urgentes para mitigar o alcance do ataque.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
<div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 relative group">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="relative z-10">
<iconify-icon className="text-zinc-400 text-2xl mb-4" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-200 mb-2">Isolamento</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Desconectar a rede local da internet e isolar servidores afetados em VLAN de quarentena.</p>
</div>
</div>
<div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 relative group">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="relative z-10">
<iconify-icon className="text-zinc-400 text-2xl mb-4" icon="solar:key-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-200 mb-2">Credenciais</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Troca obrigatória de senhas de Administrador de Domínio e Contas de Serviço.</p>
</div>
</div>
<div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 relative group">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="relative z-10">
<iconify-icon className="text-zinc-400 text-2xl mb-4" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-200 mb-2">Protocolos</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Desabilitar temporariamente RDP e SMBv1 em toda a rede.</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/60 bg-[#0a0a0a] pt-16 pb-24 mt-auto">
<div className="mx-auto max-w-5xl px-6">
<div className="flex flex-col md:flex-row gap-12 items-center justify-between">
<div className="md:w-1/3 text-center md:text-left">
<h2 className="text-xl font-semibold text-zinc-100 tracking-tight mb-2">Próximos Passos</h2>
<p className="text-sm text-zinc-500">(Equipe de DR)</p>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 flex gap-4 items-center">
<iconify-icon className="text-zinc-500 text-xl shrink-0" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="text-xs font-semibold text-zinc-200 mb-1">Preservação de Provas</h3>
<p className="text-xs text-zinc-400">Não formatar ou "limpar" máquinas antes da perícia.</p>
</div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 flex gap-4 items-center">
<iconify-icon className="text-zinc-500 text-xl shrink-0" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="text-xs font-semibold text-zinc-200 mb-1">Deploy de EDR</h3>
<p className="text-xs text-zinc-400">A equipe de Disaster Recovery instalará ferramentas de resposta avançada.</p>
</div>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 shadow-sm">
<iconify-icon className="text-zinc-400" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-zinc-300 font-medium tracking-wide">Foco: Contenção total antes da restauração de backups.</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
