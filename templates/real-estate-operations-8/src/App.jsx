import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Utilities ---
        function showToast(message) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'bg-zinc-900 text-white px-4 py-3 rounded-lg shadow-lg text-xs font-medium flex items-center gap-3 animate-fade-in pointer-events-auto border border-zinc-800';
            toast.innerHTML = `<iconify-icon icon="solar:info-circle-linear" class="text-zinc-400" width="16"></iconify-icon> ${message}`;
            container.appendChild(toast);
            
            // Remove after 3 seconds
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(-10px)';
                toast.style.transition = 'all 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // --- Navigation ---
        function setActiveNav(element) {
            const navLinks = document.getElementById('nav-links').querySelectorAll('a');
            navLinks.forEach(link => {
                link.className = 'flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors';
            });
            element.className = 'flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-md transition-colors';
        }

        // --- Tasks ---
        function completeTask(element) {
            // Strike through and fade out
            const textSpan = element.querySelector('span');
            textSpan.classList.add('line-through', 'text-zinc-500');
            element.querySelector('iconify-icon').setAttribute('icon', 'solar:check-circle-bold');
            
            setTimeout(() => {
                element.style.opacity = '0';
                element.style.height = '0';
                element.style.margin = '0';
                element.style.overflow = 'hidden';
                element.style.transition = 'all 0.3s ease';
                showToast('Tarea completada y archivada');
                
                // If list empty, show "All done"
                const list = document.getElementById('task-list');
                if (list.querySelectorAll('div:not([style*="height: 0"])').length <= 1) {
                    setTimeout(() => {
                        list.innerHTML = '<div class="text-xs text-zinc-500 text-center py-2 italic">¡Todo listo por hoy! 🎉</div>';
                    }, 300);
                }
            }, 600);
        }

        // --- Conciliation ---
        function triggerFileInput() {
            document.getElementById('file-upload').click();
        }

        function handleFileUpload(input) {
            if (input.files.length > 0) {
                showToast(`Analizando archivo: ${input.files[0].name}...`);
                setTimeout(() => {
                    showToast('Datos extraídos exitosamente. 4 nuevas coincidencias.');
                }, 2000);
            }
        }

        function simulateSync(btn) {
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:refresh-circle-linear" class="animate-spin"></iconify-icon> Sync...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = originalContent;
                btn.disabled = false;
                document.getElementById('sync-status').innerHTML = '<iconify-icon icon="solar:check-circle-linear" class="text-emerald-500"></iconify-icon> Actualizado ahora';
                showToast('Sincronización bancaria completada');
            }, 1500);
        }

        function toggleRowSelection(row) {
            // Deselect others
            const rows = document.getElementById('reconciliation-table').querySelectorAll('tr');
            rows.forEach(r => r.classList.remove('bg-zinc-50', 'ring-1', 'ring-inset', 'ring-zinc-200'));
            
            // Select clicked
            row.classList.add('bg-zinc-50', 'ring-1', 'ring-inset', 'ring-zinc-200');
        }

        function resolveIssue(btn) {
            showToast('Abriendo asistente de resolución...');
        }

        function handleAlertAction(btn) {
            const box = document.getElementById('alert-box');
            btn.innerText = 'Enviando...';
            setTimeout(() => {
                box.innerHTML = `
                    <div class="flex items-center gap-2 text-emerald-700 w-full justify-center py-1">
                        <iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                        <span class="text-xs font-medium">Aviso de cobro enviado a Depto 505</span>
                    </div>
                `;
                setTimeout(() => {
                    box.style.opacity = '0';
                    setTimeout(() => box.remove(), 300);
                }, 2500);
            }, 1000);
        }

        // --- Email Manager ---
        function selectEmail(el) {
            const list = document.getElementById('email-list');
            list.querySelectorAll('div').forEach(d => d.classList.remove('bg-zinc-50', 'border-l-4', 'border-l-zinc-900'));
            
            // Add active style to clicked
            el.classList.add('bg-zinc-50');
            // Remove border-l visual logic for simplicity in this demo, just bg change
        }

        function openCompose() {
            showToast('Abriendo editor de respuesta...');
        }

        // --- Content Generator ---
        const contentTemplates = {
            'Professional': {
                'Instagram': `<span class="font-medium text-zinc-900">Oportunidad Única.</span> Presentamos una propiedad que define la excelencia. Espacios diseñados para potenciar tu estilo de vida.<br><br>Coordinar visita privada mediante mensaje directo.<span class="text-blue-500"> #RealEstate #ExclusiveLiving</span>`,
                'LinkedIn': `En <span class="font-medium text-zinc-900">Collective Living</span>, entendemos que el entorno define la productividad. Nuestro nuevo estudio con orientación norte maximiza la luz natural, ideal para el profesional moderno.<br><br>Disponible desde el 1 de Noviembre.`
            },
            'Urgent': {
                'Instagram': `<span class="font-medium text-zinc-900">¡ÚLTIMA UNIDAD! ⚡️</span> No te quedes fuera. El Depto Estudio vista norte se va esta semana. <br><br>👉 Escríbenos YA para reservar tu hora. <span class="text-blue-500">#UltimaOportunidad #ArriendoFlash</span>`,
                'LinkedIn': `Aviso de disponibilidad inmediata: Última unidad tipo estudio en edificio central. Alta demanda prevista para las próximas 48 horas.`
            },
            'Minimal': {
                'Instagram': `Luz. Espacio. Tuyo.<br>Depto Estudio Vista Norte.<br><br>Link en bio.`,
                'LinkedIn': `Nuevo ingreso al portafolio: Estudio Vista Norte. Detalles en nuestro sitio web.`
            }
        };

        function randomTopic() {
            const topics = [
                "Open House este Domingo", 
                "Mantenimiento preventivo anual", 
                "Nueva alianza con gimnasio local",
                "Recordatorio pago gastos comunes"
            ];
            const input = document.getElementById('topic-input');
            input.value = topics[Math.floor(Math.random() * topics.length)];
            input.focus();
        }

        function generateContent() {
            const btn = document.getElementById('generate-btn');
            const preview = document.getElementById('preview-text');
            const tone = document.getElementById('tone-select').value;
            const platform = document.getElementById('platform-select').value;
            const input = document.getElementById('topic-input').value;

            // Loading State
            const originalBtnText = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:refresh-circle-linear" class="animate-spin"></iconify-icon> Generando con IA...';
            btn.disabled = true;
            preview.style.opacity = '0.5';

            setTimeout(() => {
                // Determine Content (Fallback if template missing)
                let content = contentTemplates[tone]?.[platform] || `Contenido generado para ${input} en tono ${tone}.`;
                
                // Inject Topic roughly
                if(!contentTemplates[tone]?.[platform]) {
                     content = `<span class="font-medium text-zinc-900">${input}</span><br><br>Descubre lo que tenemos para ti. Contacta a nuestro equipo hoy mismo. <span class="text-blue-500">#Collective</span>`;
                }

                preview.innerHTML = content;
                preview.style.opacity = '1';
                
                btn.innerHTML = originalBtnText;
                btn.disabled = false;
                showToast('Propuesta generada exitosamente');
            }, 1200);
        }

        function copyToClipboard(btn) {
            const text = document.getElementById('preview-text').innerText;
            navigator.clipboard.writeText(text).then(() => {
                const originalText = btn.innerText;
                btn.innerText = 'Copiado!';
                btn.classList.add('bg-emerald-50', 'text-emerald-600', 'border-emerald-200');
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.remove('bg-emerald-50', 'text-emerald-600', 'border-emerald-200');
                }, 2000);
            });
        }
        
        function schedulePost(btn) {
             const originalText = btn.innerText;
             btn.innerText = 'Agendado';
             btn.classList.add('bg-emerald-600');
             setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('bg-emerald-600');
                showToast('Post programado para mañana a las 10:00 AM');
             }, 2000);
        }

        // --- Chat Assistant ---
        function handleChatEnter(e) {
            if (e.key === 'Enter') handleChatSubmit();
        }

        function handleChatSubmit() {
            const input = document.getElementById('luna-input');
            const val = input.value.trim();
            if (!val) return;

            // Clear input
            input.value = '';
            
            // Show processing toast
            const container = document.getElementById('toast-container');
            const processingToast = document.createElement('div');
            processingToast.className = 'bg-white border border-zinc-200 text-zinc-900 px-4 py-3 rounded-lg shadow-xl text-xs font-medium flex items-center gap-3 animate-fade-in mb-2 w-72';
            processingToast.innerHTML = `
                <div class="loader border-zinc-300 border-t-zinc-900"></div>
                <div>
                    <p class="text-[10px] text-zinc-500">Luna está pensando...</p>
                    <p>"${val}"</p>
                </div>
            `;
            container.appendChild(processingToast);

            // Simulate response
            setTimeout(() => {
                processingToast.remove();
                
                // Generic intelligent responses based on keywords
                let response = "He procesado tu solicitud. Los datos han sido actualizados.";
                if(val.toLowerCase().includes("arriendo") || val.toLowerCase().includes("pagado")) {
                    response = "El 85% de los arriendos de Octubre han sido pagados. Faltan 5 unidades por conciliar.";
                } else if (val.toLowerCase().includes("correo") || val.toLowerCase().includes("redacta")) {
                    response = "Borrador creado en tu bandeja de salida. ¿Quieres revisarlo antes de enviar?";
                } else if (val.toLowerCase().includes("hola")) {
                    response = "¡Hola Fer! ¿En qué puedo ayudarte hoy?";
                }

                showToast(response);
            }, 1500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-6 right-6 z-50 flex flex-col gap-2 pointer-events-none" id="toast-container"></div>

<aside className="w-full md:w-64 bg-white border-r border-zinc-200 flex flex-col justify-between h-auto md:h-full z-20 shrink-0">
<div>

<div className="h-16 flex items-center px-6 border-b border-zinc-100 cursor-pointer" onclick="window.location.reload()">
<div className="flex items-center gap-2 text-zinc-900">
<iconify-icon icon="solar:atom-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-lg font-medium tracking-tighter">LUNA</span>
</div>
</div>

<nav className="p-4 space-y-1" id="nav-links">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-md transition-colors" href="#" onclick="setActiveNav(this)">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Vista Ejecutiva
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors" href="#" onclick="setActiveNav(this)">
<iconify-icon icon="solar:card-transfer-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Conciliación
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors" href="#" onclick="setActiveNav(this)">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Buzón Inteligente
                    <span className="ml-auto text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full font-medium">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors" href="#" onclick="setActiveNav(this)">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Creador Contenido
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors" href="#" onclick="setActiveNav(this)">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Calendario
                </a>
</nav>
</div>

<div className="p-4 border-t border-zinc-100 cursor-pointer hover:bg-zinc-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-400 flex items-center justify-center text-xs text-white font-medium">F</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900">Fer</span>
<span className="text-xs text-zinc-400">Admin</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto h-full relative scroll-smooth">

<header className="sticky top-0 z-10 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200 px-8 py-4 flex items-center justify-between">
<div>
<h1 className="text-xl font-medium tracking-tight text-zinc-900" id="greeting">Buenos días, Fer</h1>
<p className="text-xs text-zinc-500 mt-1">Aquí tienes el resumen de operaciones de Collective hoy.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-white border border-zinc-200 text-zinc-700 rounded-md hover:border-zinc-300 shadow-sm transition-all active:scale-95" onclick="showToast('Filtros avanzados activados')">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
                    Filtrar
                </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-zinc-900 text-white rounded-md hover:bg-zinc-800 shadow-sm transition-all active:scale-95" onclick="showToast('Panel de nueva acción abierto')">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                    Nueva Acción
                </button>
</div>
</header>
<div className="p-8 max-w-7xl mx-auto space-y-8 pb-32">

<section className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors group cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-50 rounded-lg text-zinc-900 border border-zinc-100 group-hover:bg-zinc-100 transition-colors">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12%</span>
</div>
<div className="text-2xl font-medium text-zinc-900 tracking-tight">$14.2M</div>
<div className="text-xs text-zinc-500 mt-1">Ingresos mes actual</div>
</div>

<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors group cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-50 rounded-lg text-zinc-900 border border-zinc-100 group-hover:bg-zinc-100 transition-colors">
<iconify-icon icon="solar:home-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2 py-1 rounded-full">Estable</span>
</div>
<div className="text-2xl font-medium text-zinc-900 tracking-tight">94%</div>
<div className="text-xs text-zinc-500 mt-1">Tasa de Ocupación</div>
</div>

<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors group cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-50 rounded-lg text-zinc-900 border border-zinc-100 group-hover:bg-zinc-100 transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">3 Nuevos</span>
</div>
<div className="text-2xl font-medium text-zinc-900 tracking-tight">28</div>
<div className="text-xs text-zinc-500 mt-1">Leads Activos</div>
</div>

<div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 shadow-sm text-white flex flex-col justify-between">
<div>
<h3 className="font-medium text-sm text-zinc-100">Acciones Rápidas</h3>
<p className="text-xs text-zinc-400 mt-1">Tareas prioritarias para Fer</p>
</div>
<div className="space-y-2 mt-4" id="task-list">
<div className="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer hover:text-white transition-colors" onclick="completeTask(this)">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
<span>Firmar contrato 402</span>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer hover:text-white transition-colors" onclick="completeTask(this)">
<iconify-icon className="text-orange-400" icon="solar:clock-circle-linear"></iconify-icon>
<span>Revisar mantención ascensor</span>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<section className="lg:col-span-2 space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-zinc-900 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:checklist-minimalistic-linear"></iconify-icon>
                            Conciliación Bancaria
                        </h2>
<button className="text-xs text-zinc-500 hover:text-zinc-900 underline decoration-zinc-300 underline-offset-2">Ver reporte completo</button>
</div>
<div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">

<div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-white border border-zinc-200 rounded text-xs font-medium text-zinc-700 shadow-sm hover:border-zinc-300 flex items-center gap-2 active:scale-95 transition-transform" onclick="triggerFileInput()">
<iconify-icon icon="solar:upload-minimalistic-linear"></iconify-icon>
                                    Subir Extracto
                                </button>
<input className="hidden" id="file-upload" onchange="handleFileUpload(this)" type="file"/>
<button className="px-3 py-1.5 bg-white border border-zinc-200 rounded text-xs font-medium text-zinc-700 shadow-sm hover:border-zinc-300 active:scale-95 transition-transform flex items-center gap-2" onclick="simulateSync(this)">
<span>Sync Arriendos</span>
</button>
</div>
<span className="text-xs text-zinc-400 flex items-center gap-1" id="sync-status">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> 
                                Actualizado hace 2 min
                            </span>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-xs text-zinc-400 border-b border-zinc-100">
<th className="px-6 py-3 font-medium">Fecha</th>
<th className="px-6 py-3 font-medium">Descripción</th>
<th className="px-6 py-3 font-medium">Ref. Arriendo</th>
<th className="px-6 py-3 font-medium text-right">Monto</th>
<th className="px-6 py-3 font-medium text-center">Estado</th>
</tr>
</thead>
<tbody className="text-sm" id="reconciliation-table">
<tr className="group hover:bg-zinc-50 transition-colors cursor-pointer" onclick="toggleRowSelection(this)">
<td className="px-6 py-3 text-zinc-500">Oct 24</td>
<td className="px-6 py-3 text-zinc-900">Transferencia J. Soto</td>
<td className="px-6 py-3 text-zinc-500">Depto 301</td>
<td className="px-6 py-3 text-right text-zinc-900 font-medium">$450.000</td>
<td className="px-6 py-3 text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Pagado
                                            </span>
</td>
</tr>
<tr className="group hover:bg-zinc-50 transition-colors cursor-pointer" onclick="toggleRowSelection(this)">
<td className="px-6 py-3 text-zinc-500">Oct 24</td>
<td className="px-6 py-3 text-zinc-900">Depósito Caja Vecina</td>
<td className="px-6 py-3 text-zinc-500">Depto 102</td>
<td className="px-6 py-3 text-right text-zinc-900 font-medium">$420.000</td>
<td className="px-6 py-3 text-center">
<button className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100 hover:bg-amber-100 transition-colors" onclick="event.stopPropagation(); resolveIssue(this)">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon> Discrepancia
                                            </button>
</td>
</tr>
<tr className="group hover:bg-zinc-50 transition-colors cursor-pointer" onclick="toggleRowSelection(this)">
<td className="px-6 py-3 text-zinc-500">Oct 23</td>
<td className="px-6 py-3 text-zinc-900">---</td>
<td className="px-6 py-3 text-zinc-500">Depto 505</td>
<td className="px-6 py-3 text-right text-zinc-400 line-through">$500.000</td>
<td className="px-6 py-3 text-center">
<button className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 transition-colors" onclick="event.stopPropagation(); resolveIssue(this)">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> Faltante
                                            </button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-amber-50/50 border-t border-amber-100 px-6 py-3 flex items-start gap-3" id="alert-box">
<iconify-icon className="text-amber-600 mt-0.5 flex-shrink-0" icon="solar:bell-bing-linear"></iconify-icon>
<div className="flex-1">
<p className="text-xs text-amber-900 font-medium">Alerta de morosidad detectada</p>
<p className="text-xs text-amber-700 mt-0.5">El Depto 505 acumula 2 meses de atraso. ¿Deseas generar un aviso de cobro?</p>
</div>
<button className="text-xs bg-amber-100 hover:bg-amber-200 text-amber-800 px-3 py-1 rounded font-medium transition-colors border border-amber-200" onclick="handleAlertAction(this)">Generar</button>
</div>
</div>
</section>

<section className="space-y-4 flex flex-col">
<h2 className="text-sm font-medium text-zinc-900 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:inbox-linear"></iconify-icon>
                        Pendientes por responder
                    </h2>
<div className="bg-white border border-zinc-200 rounded-xl shadow-sm flex-1 flex flex-col overflow-hidden" id="email-list">

<div className="bg-gradient-to-r from-indigo-50 to-white px-4 py-3 border-b border-zinc-100">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium text-indigo-900">IA Analizando bandeja...</span>
</div>
</div>

<div className="p-4 border-b border-zinc-100 hover:bg-zinc-50 cursor-pointer transition-colors group relative" onclick="selectEmail(this)">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-medium text-zinc-900">María González (402)</span>
<span className="text-[10px] text-zinc-400">10:30 AM</span>
</div>
<p className="text-xs text-zinc-500 line-clamp-2">Hola Fer, tengo una gotera en el baño principal, ¿podrían enviar a alguien...</p>
<div className="flex gap-2 mt-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-red-50 text-red-600 border border-red-100">
                                    🔥 Urgente
                                </span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-100 text-zinc-500 border border-zinc-200">
                                    🔧 Mantención
                                </span>
</div>

<div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-zinc-900 text-white text-[10px] px-2 py-1 rounded shadow-sm hover:bg-zinc-800 transition-colors" onclick="event.stopPropagation(); openCompose()">Redactar</button>
</div>
</div>

<div className="p-4 border-b border-zinc-100 hover:bg-zinc-50 cursor-pointer transition-colors" onclick="selectEmail(this)">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-medium text-zinc-900">Roberto Díaz</span>
<span className="text-[10px] text-zinc-400">Ayer</span>
</div>
<p className="text-xs text-zinc-500 line-clamp-2">Adjunto comprobante de transferencia correspondiente al mes de...</p>
<div className="flex gap-2 mt-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-600 border border-blue-100">
                                    💰 Pagos
                                </span>
</div>
</div>

<div className="p-4 hover:bg-zinc-50 cursor-pointer transition-colors" onclick="selectEmail(this)">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-medium text-zinc-900">Interesado Depto 201</span>
<span className="text-[10px] text-zinc-400">Ayer</span>
</div>
<p className="text-xs text-zinc-500 line-clamp-2">Me gustaría agendar una visita para la próxima semana...</p>
<div className="flex gap-2 mt-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
                                    🏠 Lead
                                </span>
</div>
</div>
</div>
</section>
</div>

<section className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">

<div className="space-y-4">
<h2 className="text-sm font-medium text-zinc-900 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:pen-new-square-linear"></iconify-icon>
                        Creador de Contenido
                    </h2>
<div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6">
<div className="flex gap-4 mb-6 border-b border-zinc-100 pb-2">
<button className="text-xs font-medium text-zinc-900 border-b-2 border-zinc-900 pb-2 -mb-2.5">Social Media</button>
<button className="text-xs font-medium text-zinc-400 hover:text-zinc-600 pb-2">Newsletter</button>
<button className="text-xs font-medium text-zinc-400 hover:text-zinc-600 pb-2">Follow-up Leads</button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Tema o Propósito</label>
<div className="relative">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-400" id="topic-input" type="text" value="Disponible Depto Estudio con vista norte"/>
<button className="absolute right-2 top-1.5 text-zinc-400 hover:text-zinc-600 transition-colors" onclick="randomTopic()" title="Sugerir tema">
<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Tono</label>
<div className="relative">
<select className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-700 appearance-none focus:outline-none cursor-pointer hover:border-zinc-300" id="tone-select">
<option value="Professional">Profesional &amp; Cercano</option>
<option value="Urgent">Urgente</option>
<option value="Minimal">Minimalista</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-zinc-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Plataforma</label>
<div className="relative">
<select className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-700 appearance-none focus:outline-none cursor-pointer hover:border-zinc-300" id="platform-select">
<option value="Instagram">Instagram Feed</option>
<option value="LinkedIn">LinkedIn</option>
<option value="Facebook">Facebook</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-zinc-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium py-2.5 rounded-lg shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2 mt-2" id="generate-btn" onclick="generateContent()">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
                                Generar Propuesta
                            </button>
</div>
</div>
</div>

<div className="space-y-4">
<h2 className="text-sm font-medium text-zinc-900 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:eye-linear"></iconify-icon>
                        Vista Previa
                    </h2>
<div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6 flex gap-4 h-full">

<div className="w-full bg-zinc-50 border border-zinc-100 rounded-lg p-4 flex flex-col h-full">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-full bg-zinc-200"></div>
<span className="text-xs font-medium text-zinc-900">collective_living</span>
</div>
<div className="aspect-video bg-zinc-200 rounded-md mb-3 flex items-center justify-center text-zinc-400 overflow-hidden relative group">
<iconify-icon icon="solar:gallery-wide-linear" width="24"></iconify-icon>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-[10px] bg-white px-2 py-1 rounded shadow text-zinc-900">Cambiar Imagen</span>
</div>
</div>
<div className="space-y-2 flex-1">
<p className="text-xs text-zinc-600 leading-relaxed transition-opacity duration-300" id="preview-text">
<span className="font-medium text-zinc-900">¡Nuevo ingreso! 🌿</span> Disfruta de la luz natural en nuestro último estudio disponible. Ubicación prime y comunidad vibrante. <br/><br/>
                                    Agenda tu visita hoy. Link en bio. 
                                    <span className="text-blue-500">#CollectiveLiving #Arriendos #Lifestyle</span>
</p>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 bg-white border border-zinc-200 text-zinc-700 text-xs py-1.5 rounded hover:bg-zinc-50 hover:border-zinc-300 transition-all active:scale-95 font-medium" onclick="copyToClipboard(this)">Copiar Texto</button>
<button className="flex-1 bg-zinc-900 text-white text-xs py-1.5 rounded hover:bg-zinc-800 transition-all active:scale-95 font-medium" onclick="schedulePost(this)">Agendar Post</button>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 z-30">
<div className="bg-white/90 backdrop-blur-xl border border-zinc-200/80 shadow-2xl rounded-2xl p-1.5 flex items-center gap-2 ring-1 ring-black/5 transition-shadow hover:shadow-xl focus-within:ring-zinc-300">
<div className="w-8 h-8 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
</div>
<input className="flex-1 bg-transparent border-none text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none px-2 py-2" id="luna-input" onkeydown="handleChatEnter(event)" placeholder="Pregúntale a Luna: '¿Quién ha pagado el arriendo hoy?' o 'Redacta un correo de bienvenida'..." type="text"/>
<button className="p-2 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors active:scale-90" onclick="handleChatSubmit()">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</main>


    </>
  );
}
