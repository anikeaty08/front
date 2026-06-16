import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// --- DATA & STATE ---
const db = {
'liderazgo': {
title: "Liderazgo Estratégico",
desc: "Evaluación de capacidades de gestión y visión.",
questions: [
{ t: "¿Cómo manejas un conflicto entre dos miembros clave de tu equipo?", opts: [
{ t: "Intervengo inmediatamente e impongo una solución.", s: 1 },
{ t: "Ignoro el problema esperando que se resuelva solo.", s: 0 },
{ t: "Escucho a ambos por separado y facilito una mediación.", s: 5 },
{ t: "Delego la resolución a RRHH.", s: 2 }
]},
{ t: "¿Con qué frecuencia delegas tareas importantes?", opts: [
{ t: "Raramente, prefiero asegurarme que se hagan bien.", s: 1 },
{ t: "A veces, pero superviso cada paso.", s: 3 },
{ t: "Frecuentemente, confiando en la capacidad del equipo.", s: 5 },
{ t: "Siempre, evito el trabajo operativo.", s: 2 }
]},
{ t: "Ante un cambio repentino de estrategia corporativa:", opts: [
{ t: "Me resisto hasta entenderlo completamente.", s: 2 },
{ t: "Lo comunico con transparencia y adapto los objetivos.", s: 5 },
{ t: "Espero instrucciones detalladas antes de actuar.", s: 1 },
{ t: "Lo ejecuto sin cuestionar ni explicar al equipo.", s: 2 }
]}
]
},
'equipo': {
title: "Trabajo en Equipo",
desc: "Colaboración y comunicación interna.",
questions: [
{ t: "¿Cómo reaccionas cuando un compañero comete un error?", opts: [
{ t: "Lo reporto al supervisor.", s: 1 },
{ t: "Ayudo a solucionarlo y analizamos la causa juntos.", s: 5 },
{ t: "Me molesto porque afecta mis métricas.", s: 1 },
{ t: "Lo ignoro si no es mi responsabilidad.", s: 2 }
]},
{ t: "En reuniones de lluvia de ideas:", opts: [
{ t: "Escucho activamente y construyo sobre ideas de otros.", s: 5 },
{ t: "Defiendo solo mis ideas.", s: 2 },
{ t: "Prefiero no participar.", s: 1 },
{ t: "Critico las ideas poco realistas inmediatamente.", s: 2 }
]}
]
},
'blandas': {
title: "Competencias Blandas",
desc: "Inteligencia emocional y adaptabilidad.",
questions: [
{ t: "¿Cómo gestionas el estrés ante fechas límite ajustadas?", opts: [
{ t: "Me bloqueo y pierdo productividad.", s: 1 },
{ t: "Trabajo horas extra sin parar.", s: 3 },
{ t: "Priorizo tareas y comunico expectativas realistas.", s: 5 },
{ t: "Transfiero la presión al equipo.", s: 1 }
]},
{ t: "Recibes feedback negativo sobre tu trabajo:", opts: [
{ t: "Me pongo a la defensiva.", s: 1 },
{ t: "Pido ejemplos específicos y busco cómo mejorar.", s: 5 },
{ t: "Lo acepto pero me desmotivo.", s: 3 },
{ t: "Ignoro la opinión si no estoy de acuerdo.", s: 2 }
]}
]
},
'tecnicas': {
title: "Competencias Técnicas",
desc: "Habilidades específicas y herramientas.",
questions: [
{ t: "¿Cuál es tu nivel de familiaridad con la nueva pila tecnológica?", opts: [
{ t: "Principiante / Necesito formación total.", s: 1 },
{ t: "Intermedio / Puedo realizar tareas supervisadas.", s: 3 },
{ t: "Avanzado / Puedo enseñar a otros.", s: 5 },
{ t: "Experto / Contribuyo a la arquitectura.", s: 5 }
]},
{ t: "Frecuencia de actualización en tu área de expertise:", opts: [
{ t: "Diariamente (blogs, noticias, práctica).", s: 5 },
{ t: "Mensualmente.", s: 3 },
{ t: "Solo cuando la empresa ofrece cursos.", s: 1 },
{ t: "Raramente.", s: 0 }
]}
]
}
};
let currentQuiz = { category: null, index: 0, score: 0, maxScore: 0, answers: [] };
// --- NAVIGATION FUNCTIONS ---
function switchView(viewId) {
// Hide all views
document.querySelectorAll('.app-view').forEach(el => {
el.classList.add('hidden-view');
el.classList.remove('fade-in');
});
// Show target
const target = document.getElementById(viewId);
target.classList.remove('hidden-view');
target.classList.add('fade-in'); // Trigger animation
// Handle Navbar visibility
const nav = document.getElementById('nav-main');
if(viewId === 'view-login') {
nav.style.display = 'none';
} else {
nav.style.display = 'block';
}
window.scrollTo(0,0);
}
function toggleAuth(type) {
const loginForm = document.getElementById('form-login');
const regForm = document.getElementById('form-register');
const btnLogin = document.getElementById('tab-login');
const btnReg = document.getElementById('tab-register');
if(type === 'login') {
loginForm.classList.remove('hidden');
regForm.classList.add('hidden');
btnLogin.classList.add('text-slate-900', 'border-b-2', 'border-slate-900');
btnLogin.classList.remove('text-slate-400');
btnReg.classList.remove('text-slate-900', 'border-b-2', 'border-slate-900');
btnReg.classList.add('text-slate-400');
} else {
loginForm.classList.add('hidden');
regForm.classList.remove('hidden');
btnReg.classList.add('text-slate-900', 'border-b-2', 'border-slate-900');
btnReg.classList.remove('text-slate-400');
btnLogin.classList.remove('text-slate-900', 'border-b-2', 'border-slate-900');
btnLogin.classList.add('text-slate-400');
}
}
// --- ASSESSMENT LOGIC ---
function startAssessment(categoryKey) {
const data = db[categoryKey];
if(!data) return;
// Reset State
currentQuiz = {
category: categoryKey,
index: 0,
score: 0,
maxScore: data.questions.length * 5, // Assuming max score per Q is 5
answers: new Array(data.questions.length).fill(null)
};
// Setup UI
document.getElementById('assess-title').innerText = data.title;
document.getElementById('assess-desc').innerText = data.desc;
renderQuestion();
switchView('view-assessment');
}
function renderQuestion() {
const data = db[currentQuiz.category];
const qData = data.questions[currentQuiz.index];
const totalQ = data.questions.length;
// Update Progress
const progressPct = ((currentQuiz.index) / totalQ) * 100;
document.getElementById('assess-progress-bar').style.width = `${progressPct}%`;
document.getElementById('assess-counter').innerText = `Pregunta ${currentQuiz.index + 1} de ${totalQ}`;
// Update Text
document.getElementById('question-text').innerText = qData.t;
// Render Options
const optsContainer = document.getElementById('options-container');
optsContainer.innerHTML = '';
qData.opts.forEach((opt, idx) => {
const btn = document.createElement('div');
btn.className = `option-card w-full p-4 border border-slate-200 rounded-lg cursor-pointer transition-all bg-white mb-3 flex items-center gap-3 group`;
btn.onclick = () => selectAnswer(idx, opt.s);
// Check if already selected (if going back)
if(currentQuiz.answers[currentQuiz.index] === idx) {
btn.classList.add('selected');
}
btn.innerHTML = `
<div class="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-slate-500 transition-colors">
<div class="w-2.5 h-2.5 rounded-full bg-slate-900 ${currentQuiz.answers[currentQuiz.index] === idx ? '' : 'hidden'}"></div>
</div>
<span class="text-sm text-slate-700">${opt.t}</span>
`;
optsContainer.appendChild(btn);
});
// Button State
const nextBtn = document.getElementById('btn-next-q');
nextBtn.disabled = currentQuiz.answers[currentQuiz.index] === null;
nextBtn.className = nextBtn.disabled
? "px-6 py-2 bg-slate-100 text-slate-400 text-sm font-medium rounded-lg cursor-not-allowed"
: "px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow-sm transition-colors";
nextBtn.innerText = (currentQuiz.index === totalQ - 1) ? "Finalizar" : "Siguiente";
}
function selectAnswer(optIndex, scoreValue) {
// Save answer specifically for this question index
// We store an object or just the score. Here we store score for simple math later,
// but in real app we might store option ID.
// To allow "re-answering" and correcting score, we need to track points per question.
// Let's store the score value in a parallel array
if(!currentQuiz.points) currentQuiz.points = new Array(db[currentQuiz.category].questions.length).fill(0);
currentQuiz.answers[currentQuiz.index] = optIndex;
currentQuiz.points[currentQuiz.index] = scoreValue;
renderQuestion(); // Re-render to show selection state
}
function nextQuestion() {
const totalQ = db[currentQuiz.category].questions.length;
if (currentQuiz.index < totalQ - 1) {
currentQuiz.index++;
renderQuestion();
} else {
finishAssessment();
}
}
function prevQuestion() {
if (currentQuiz.index > 0) {
currentQuiz.index--;
renderQuestion();
}
}
function finishAssessment() {
// Calculate total
const totalPoints = currentQuiz.points.reduce((a, b) => a + b, 0);
const percentage = Math.round((totalPoints / currentQuiz.maxScore) * 100);
generateReport(percentage);
switchView('view-report');
}
function generateReport(score) {
const catData = db[currentQuiz.category];
const dateStr = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
// Update Report UI
document.getElementById('rpt-title').innerText = `Informe: ${catData.title}`;
document.getElementById('rpt-date').innerText = `Generado el ${dateStr}`;
document.getElementById('rpt-score').innerText = score;
// Logic for status
let status = "", colorClass = "", gapMsg = "";
let recommendation = {};
if (score >= 80) {
status = "Alto Desempeño";
colorClass = "text-green-600 bg-green-50 border-green-100";
gapMsg = "Sin brechas significativas.";
recommendation = { title: "Mentoria Avanzada", type: "Opcional" };
} else if (score >= 50) {
status = "Brecha Moderada";
colorClass = "text-orange-600 bg-orange-50 border-orange-100";
gapMsg = "Áreas de mejora detectadas.";
recommendation = { title: "Taller de Refuerzo Práctico", type: "Recomendado" };
} else {
status = "Brecha Crítica";
colorClass = "text-red-600 bg-red-50 border-red-100";
gapMsg = "Requiere capacitación inmediata.";
recommendation = { title: "Programa Intensivo de Fundamentos", type: "Obligatorio" };
}
document.getElementById('rpt-status-badge').className = `px-3 py-1 rounded-full text-xs font-medium border ${colorClass}`;
document.getElementById('rpt-status-badge').innerText = status;
document.getElementById('rpt-gap-msg').innerText = gapMsg;
// Suggestion update
document.getElementById('sugg-title').innerText = recommendation.title + " - " + catData.title;
document.getElementById('sugg-type').innerText = recommendation.type;
// Chart visualization (Simple CSS width)
document.getElementById('rpt-chart-bar').style.width = `${score}%`;
// Color logic for chart
const bar = document.getElementById('rpt-chart-bar');
bar.className = `h-2 rounded-full relative z-10 ${score < 50 ? 'bg-red-500' : (score < 80 ? 'bg-orange-500' : 'bg-green-500')}`;
}



        // Set initial view state
        document.getElementById('nav-main').style.display = 'none';
        document.getElementById('view-login').classList.remove('hidden-view');
        
        // Pre-fill login for demo purposes
        console.log("Sistema DNC Iniciado. Listo para pruebas.");
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="app-view min-h-screen flex flex-col lg:flex-row" id="view-login">

<div className="lg:w-1/2 bg-slate-900 p-12 flex flex-col justify-between text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200')] opacity-10 bg-cover bg-center"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-8">
<div className="bg-white text-slate-900 w-8 h-8 rounded-lg flex items-center justify-center">
<span className="font-semibold tracking-tighter text-xs">DNC</span>
</div>
<span className="font-medium tracking-tight text-white text-sm">TalentScope</span>
</div>
<h1 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Descubre tu potencial profesional.</h1>
<p className="text-slate-400 text-sm max-w-md">La plataforma integral para el diagnóstico de necesidades de capacitación, gestión de brechas y desarrollo de talento.</p>
</div>
<div className="relative z-10 text-xs text-slate-500 mt-12 lg:mt-0">
                © 2023 TalentScope Inc.
            </div>
</div>

<div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center bg-white">
<div className="max-w-md w-full mx-auto">
<div className="flex gap-6 mb-8 border-b border-slate-100">
<button className="pb-3 text-sm font-medium text-slate-900 border-b-2 border-slate-900 transition-colors" id="tab-login" onclick="toggleAuth('login')">Ingresar</button>
<button className="pb-3 text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors" id="tab-register" onclick="toggleAuth('register')">Auto-inscripción</button>
</div>

<form className="space-y-4" id="form-login" onsubmit="event.preventDefault(); switchView('view-dashboard');">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Correo Corporativo</label>
<input className="block w-full px-3 py-2 text-sm text-slate-900 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow" placeholder="nombre@empresa.com" type="email" value="ana@empresa.com"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Contraseña</label>
<input className="block w-full px-3 py-2 text-sm text-slate-900 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow" placeholder="••••••••" type="password" value="password"/>
</div>
<div className="flex items-center justify-between">
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" type="checkbox"/>
<span className="text-xs text-slate-500">Recordarme</span>
</label>
<a className="text-xs font-medium text-slate-900 hover:underline" href="#">¿Olvidaste tu contraseña?</a>
</div>
<button className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2" type="submit">
                        Acceder a Plataforma
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>

<form className="space-y-4 hidden" id="form-register" onsubmit="event.preventDefault(); switchView('view-dashboard');">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Nombre</label>
<input className="block w-full px-3 py-2 text-sm text-slate-900 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 outline-none" placeholder="Ana" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Apellido</label>
<input className="block w-full px-3 py-2 text-sm text-slate-900 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 outline-none" placeholder="Rodríguez" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Departamento</label>
<select className="block w-full px-3 py-2 text-sm text-slate-900 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 outline-none">
<option>Seleccionar...</option>
<option>Tecnología / Desarrollo</option>
<option>Recursos Humanos</option>
<option>Ventas</option>
<option>Marketing</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Correo Corporativo</label>
<input className="block w-full px-3 py-2 text-sm text-slate-900 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 outline-none" placeholder="nombre@empresa.com" type="email"/>
</div>
<button className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow-sm transition-colors mt-2" type="submit">
                        Completar Inscripción
                    </button>
</form>
</div>
</div>
</div>

<div className="flex-grow flex flex-col" id="app-wrapper">

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 hidden-view app-view" id="nav-main" style={{display: 'block'}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-14 items-center">
<div className="flex items-center gap-2 cursor-pointer" onclick="switchView('view-dashboard')">
<div className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center">
<span className="font-semibold tracking-tighter text-xs">DNC</span>
</div>
<span className="font-medium tracking-tight text-slate-900 text-sm">TalentScope</span>
</div>
<div className="flex items-center gap-4">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900" onclick="switchView('view-dashboard')">Evaluaciones</button>
<div className="h-4 w-[1px] bg-slate-200"></div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="lucide:bell" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 text-xs font-semibold border border-indigo-100 cursor-pointer" onclick="switchView('view-login')">
                            AR
                        </div>
</div>
</div>
</div>
</nav>

<main className="hidden-view app-view flex-grow py-8 px-4 sm:px-6" id="view-dashboard">
<div className="max-w-6xl mx-auto space-y-8">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Hola, Ana</h1>
<p className="text-sm text-slate-500 mt-1">Selecciona un panel para iniciar tu diagnóstico de brechas del periodo Q4.</p>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-slate-500 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-sm">Progreso Global: 25%</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all p-6 cursor-pointer flex flex-col h-full" onclick="startAssessment('liderazgo')">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:award" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Liderazgo</h3>
<p className="text-xs text-slate-500 mb-6 flex-grow">Evaluación de capacidades de gestión, toma de decisiones estratégicas y mentoría.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
<span className="text-[10px] font-medium text-slate-400">3 Preguntas</span>
<span className="text-xs font-medium text-blue-600 flex items-center gap-1">
                                Iniciar <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</span>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all p-6 cursor-pointer flex flex-col h-full" onclick="startAssessment('equipo')">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Trabajo en Equipo</h3>
<p className="text-xs text-slate-500 mb-6 flex-grow">Colaboración, comunicación interna y resolución de conflictos grupales.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
<span className="text-[10px] font-medium text-slate-400">2 Preguntas</span>
<span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                                Iniciar <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</span>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all p-6 cursor-pointer flex flex-col h-full" onclick="startAssessment('blandas')">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Comp. Blandas</h3>
<p className="text-xs text-slate-500 mb-6 flex-grow">Inteligencia emocional, adaptabilidad, gestión del tiempo y resiliencia.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
<span className="text-[10px] font-medium text-slate-400">2 Preguntas</span>
<span className="text-xs font-medium text-orange-600 flex items-center gap-1">
                                Iniciar <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</span>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all p-6 cursor-pointer flex flex-col h-full" onclick="startAssessment('tecnicas')">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:cpu" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Comp. Técnicas</h3>
<p className="text-xs text-slate-500 mb-6 flex-grow">Habilidades específicas del rol, herramientas de software y conocimientos técnicos.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
<span className="text-[10px] font-medium text-slate-400">2 Preguntas</span>
<span className="text-xs font-medium text-purple-600 flex items-center gap-1">
                                Iniciar <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="mt-8 pt-8 border-t border-slate-200">
<h2 className="text-sm font-semibold text-slate-900 mb-4">Tu Actividad Reciente</h2>
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
<table className="w-full text-left text-xs">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-6 py-3 font-medium text-slate-500">Evaluación</th>
<th className="px-6 py-3 font-medium text-slate-500">Fecha</th>
<th className="px-6 py-3 font-medium text-slate-500">Estado</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/50">
<td className="px-6 py-3 text-slate-900 font-medium">Evaluación de Liderazgo Q3</td>
<td className="px-6 py-3 text-slate-500">12 Oct, 2023</td>
<td className="px-6 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-50 text-green-700 border border-green-100">Completado</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>

<main className="hidden-view app-view flex-grow py-8 px-4 sm:px-6 flex flex-col items-center" id="view-assessment">
<div className="w-full max-w-2xl mx-auto">

<div className="mb-8">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 mb-4" onclick="switchView('view-dashboard')">
<iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon> Cancelar
                    </button>
<div className="flex justify-between items-end mb-2">
<div>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight" id="assess-title">Título Evaluación</h2>
<p className="text-xs text-slate-500" id="assess-desc">Descripción corta.</p>
</div>
<span className="text-xs font-mono text-slate-400" id="assess-counter">Pregunta 1 de 5</span>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-slate-900 h-full rounded-full transition-all duration-300" id="assess-progress-bar" style={{width: '0%'}}></div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 min-h-[400px] flex flex-col">
<h3 className="text-lg md:text-xl font-medium text-slate-900 mb-8 leading-snug" id="question-text">

</h3>
<div className="space-y-3 flex-grow" id="options-container">

</div>
<div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-50">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 px-4 py-2" onclick="prevQuestion()">
                            Anterior
                        </button>
<button className="px-6 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors" id="btn-next-q" onclick="nextQuestion()">
                            Siguiente
                        </button>
</div>
</div>
</div>
</main>

<main className="hidden-view app-view flex-grow py-8 px-4 sm:px-6 bg-slate-50/50" id="view-report">
<div className="max-w-4xl mx-auto">

<div className="flex items-center justify-between mb-6">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1" onclick="switchView('view-dashboard')">
<iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon> Volver al Dashboard
                    </button>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 flex items-center gap-2">
<iconify-icon icon="lucide:download" width="14"></iconify-icon> Guardar Resultados
                        </button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden fade-in">

<div className="p-8 border-b border-slate-200 bg-slate-50/30">
<div className="flex justify-between items-start">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900" id="rpt-title">Informe de Diagnóstico</h1>
<p className="text-sm text-slate-500 mt-1">Resultados Generados Automáticamente</p>
</div>
<div className="text-right">
<p className="text-xs font-medium text-slate-900" id="rpt-date">Generado hoy</p>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200" id="rpt-status-badge">
                                    Procesando
                                </span>
</div>
</div>
</div>
<div className="p-8 space-y-8">

<div className="flex flex-col sm:flex-row gap-8 items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100">
<div className="text-center">
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Puntaje Final</div>
<div className="flex items-center justify-center gap-1">
<span className="text-4xl font-bold text-slate-900 tracking-tighter" id="rpt-score">--</span>
<span className="text-sm text-slate-400 font-medium">/ 100</span>
</div>
</div>
<div className="h-10 w-[1px] bg-slate-200 hidden sm:block"></div>
<div className="flex-grow w-full max-w-md">
<div className="flex justify-between text-xs mb-2">
<span className="font-medium text-slate-700">Nivel de Competencia</span>
<span className="text-slate-500" id="rpt-gap-msg">Analizando respuestas...</span>
</div>
<div className="w-full bg-white rounded-full h-3 border border-slate-200 relative overflow-hidden">
<div className="bg-slate-900 h-full rounded-full transition-all duration-1000 ease-out" id="rpt-chart-bar" style={{width: '0%'}}></div>
</div>
<div className="flex justify-between mt-1 text-[10px] text-slate-400 font-mono">
<span>0%</span>
<span>50%</span>
<span>100%</span>
</div>
</div>
</div>

<div className="pt-6 border-t border-slate-100">
<h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon icon="lucide:book-open" width="16"></iconify-icon>
                                Recomendación Personalizada
                            </h3>
<div className="flex flex-col sm:flex-row gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors bg-white shadow-sm">
<div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 border border-indigo-100">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-slate-900" id="sugg-title">Cargando recomendación...</h4>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200" id="sugg-type">Sugerido</span>
</div>
<p className="text-xs text-slate-500 mt-1 mb-2">Basado en tus respuestas, este curso te ayudará a cerrar las brechas identificadas de manera efectiva.</p>
<div className="flex gap-4 text-[10px] text-slate-400">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:clock" width="10"></iconify-icon> Auto-ritmo</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:monitor" width="10"></iconify-icon> Online</span>
</div>
</div>
<div className="flex items-center">
<button className="px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-md hover:bg-slate-800 transition-colors shadow-sm">
                                        Asignar Curso
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
