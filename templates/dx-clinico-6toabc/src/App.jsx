import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const questions = [
            {
                q: "En el proceso de psicodiagnóstico, ¿cuál es la diferencia fundamental entre un 'signo' y un 'síntoma' al realizar la semiología clínica?",
                options: [
                    "El signo es una manifestación objetiva observable por el examinador, mientras que el síntoma es una experiencia subjetiva referida por el paciente.",
                    "El síntoma siempre indica una patología grave, mientras que el signo puede ser una respuesta fisiológica normal ante el estrés.",
                    "Los signos se obtienen exclusivamente mediante pruebas psicométricas y los síntomas mediante la entrevista abierta.",
                    "Un signo es una respuesta aprendida del entorno y un síntoma es una manifestación biológica heredada."
                ],
                correct: 0,
                explanation: "La distinción básica reside en la observabilidad: los signos son datos objetivos (ej. llanto) y los síntomas son relatos subjetivos (ej. tristeza)."
            },
            {
                q: "Al evaluar la validez de un instrumento psicométrico para un diagnóstico clínico, ¿a qué se refiere específicamente la 'validez de constructo'?",
                options: [
                    "A la capacidad del test para predecir el comportamiento futuro del paciente.",
                    "Al grado en que la prueba mide realmente la variable teórica que pretende medir.",
                    "A la consistencia de los resultados obtenidos en dos momentos distintos.",
                    "A la apariencia externa de la prueba ante el examinado."
                ],
                correct: 1,
                explanation: "La validez de constructo asegura que el instrumento represente fielmente el concepto teórico definido (ej. ansiedad vs. depresión)."
            },
            {
                q: "Un paciente presenta un estado de ánimo deprimido la mayor parte del día, casi todos los días, durante al menos dos años. No ha tenido episodios maníacos. ¿Cuál es el diagnóstico más probable según el DSM-5?",
                options: [
                    "Trastorno de desregulación disruptiva del estado de ánimo.",
                    "Trastorno depresivo mayor, episodio único.",
                    "Trastorno depresivo persistente (Distimia).",
                    "Trastorno ciclotímico."
                ],
                correct: 2,
                explanation: "La cronicidad mínima de dos años en adultos sin periodos asintomáticos prolongados es el criterio cardinal de la Distimia."
            },
            {
                q: "Durante el encuadre diagnóstico, ¿qué implicación ética tiene el principio de 'Autonomía' del paciente?",
                options: [
                    "La obligación del psicólogo de realizar el diagnóstico sin influencias externas.",
                    "El deber de mantener el secreto profesional bajo cualquier circunstancia.",
                    "La capacidad del psicólogo para elegir las pruebas sin consultar al paciente.",
                    "El derecho del paciente a decidir voluntariamente su participación mediante el consentimiento informado."
                ],
                correct: 3,
                explanation: "La autonomía implica que el paciente tiene el control legal y ético sobre si desea someterse al proceso diagnóstico una vez informado."
            },
            {
                q: "En una entrevista clínica, si un paciente presenta 'neologismos' y 'ensalada de palabras', ¿en qué área de la evaluación se observa esta alteración?",
                options: [
                    "Curso y forma del pensamiento.",
                    "Contenido del pensamiento.",
                    "Percepción sensorial.",
                    "Nivel de conciencia y orientación."
                ],
                correct: 0,
                explanation: "Estas alteraciones reflejan la desorganización en la manera de asociar ideas y estructurar el lenguaje (forma), no en lo que se piensa (contenido)."
            },
            {
                q: "¿Cuál es la función principal de la 'hipótesis diagnóstica' en la fase intermedia del psicodiagnóstico?",
                options: [
                    "Establecer de forma definitiva el trastorno para iniciar psicofármacos.",
                    "Orientar la selección de instrumentos específicos y técnicas de observación.",
                    "Cumplir con el requisito administrativo institucional.",
                    "Comunicar a los familiares el pronóstico a largo plazo."
                ],
                correct: 1,
                explanation: "La hipótesis actúa como guía para que la fase de testeo sea específica y no una aplicación ciega de reactivos."
            },
            {
                q: "¿Qué diferencia técnica existe entre una 'Ilusión' y una 'Alucinación' en el examen mental?",
                options: [
                    "La ilusión es siempre visual y la alucinación auditiva.",
                    "La alucinación es una falla de memoria y la ilusión de atención.",
                    "La ilusión requiere de un objeto real deformado, mientras que la alucinación ocurre sin objeto presente.",
                    "El paciente siempre tiene conciencia de enfermedad en la alucinación."
                ],
                correct: 2,
                explanation: "La ilusión es una distorsión perceptiva de un estímulo real (ver una sombra como persona), la alucinación es una percepción sin objeto."
            },
            {
                q: "En el contexto de la evaluación de la personalidad, ¿qué evalúan principalmente las técnicas proyectivas?",
                options: [
                    "Rasgos de personalidad normal comparados estadísticamente.",
                    "Aspectos inconscientes, dinámicos y la organización global de la personalidad.",
                    "El nivel intelectual y las funciones cognitivas superiores.",
                    "Conductas observables y cuantificables en situaciones sociales."
                ],
                correct: 1,
                explanation: "Se basan en la hipótesis proyectiva: ante estímulos ambiguos, el sujeto externaliza sus conflictos y dinámicas internas inconscientes."
            },
            {
                q: "Un paciente reporta hace 3 meses escuchar voces que comentan sus actos y siente mensajes en la TV. ¿Cuál es el diagnóstico diferencial prioritario?",
                options: [
                    "Trastorno de la personalidad paranoide.",
                    "Esquizofrenia.",
                    "Trastorno de ansiedad generalizada.",
                    "Trastorno bipolar en episodio hipomaníaco."
                ],
                correct: 1,
                explanation: "La presencia de síntomas psicóticos positivos (alucinaciones y delirios) orienta directamente al espectro de la esquizofrenia."
            },
            {
                q: "El concepto de 'Rapport' en la entrevista diagnóstica se define como:",
                options: [
                    "La transferencia de sentimientos inconscientes del paciente.",
                    "El proceso de analizar las propias emociones del psicólogo.",
                    "El establecimiento de un clima de confianza, aceptación y cooperación.",
                    "La capacidad de sentir exactamente lo mismo que el consultante."
                ],
                correct: 2,
                explanation: "Es el componente de alianza terapéutica inicial que permite que la recolección de datos sea genuina y fluida."
            },
            {
                q: "¿Cuál es el objetivo principal del 'Diagnóstico Diferencial'?",
                options: [
                    "Identificar las causas genéticas y biológicas de la conducta.",
                    "Distinguir entre trastornos con síntomas similares para mayor precisión.",
                    "Evaluar la diferencia entre nivel intelectual y rendimiento.",
                    "Determinar si la terapia debe ser individual o grupal."
                ],
                correct: 1,
                explanation: "Consiste en el descarte sistemático de patologías concurrentes para hallar la etiqueta diagnóstica más ajustada al cuadro."
            },
            {
                q: "¿Qué se evalúa mediante la 'Orientación Alopsíquica' en el examen mental?",
                options: [
                    "El conocimiento del sujeto respecto al espacio y al tiempo.",
                    "La capacidad del paciente para reconocer su propia identidad.",
                    "La capacidad del sujeto para comprender refranes.",
                    "El estado de alerta y respuesta ante estímulos dolorosos."
                ],
                correct: 0,
                explanation: "Alopsíquica se refiere a la orientación en el entorno (mundo exterior); autopsíquica se refiere a la propia identidad (mundo interior)."
            },
            {
                q: "En un informe psicodiagnóstico, el apartado de 'Pronóstico' debe basarse principalmente en:",
                options: [
                    "Únicamente en el nombre del diagnóstico dado por el manual.",
                    "En la interacción entre la gravedad del trastorno, recursos del paciente y red de apoyo.",
                    "En el deseo del psicólogo de ver al paciente recuperado.",
                    "En la cantidad de sesiones asistidas previamente."
                ],
                correct: 1,
                explanation: "El pronóstico es una estimación de evolución que depende de la resiliencia del sujeto y sus factores protectores ambientales."
            },
            {
                q: "Si en el WAIS-IV hay alta Velocidad de Procesamiento pero baja Comprensión Verbal, la interpretación es:",
                options: [
                    "El paciente tiene discapacidad intelectual global.",
                    "La prueba fue mal aplicada y es nula.",
                    "El paciente es excelente en memoria pero malo en lógica.",
                    "Existe discrepancia entre habilidades motoras/atencionales y razonamiento verbal."
                ],
                correct: 3,
                explanation: "Indica un perfil cognitivo heterogéneo donde las funciones de ejecución rápida superan a las de abstracción lingüística."
            },
            {
                q: "¿Qué caracteriza a un 'Juicio de Realidad' conservado?",
                options: [
                    "Tener un coeficiente intelectual superior al promedio.",
                    "La capacidad de distinguir entre estímulos internos y realidad externa.",
                    "La ausencia total de mecanismos de defensa.",
                    "Estar de acuerdo con todas las opiniones del profesional."
                ],
                correct: 1,
                explanation: "Es la función yoica que permite separar lo que ocurre en la mente de lo que ocurre en el mundo exterior objetivo."
            }
        ];

        let currentQuestion = 0;
        let score = 0;
        let answered = false;

        const questionText = document.getElementById('question-text');
        const optionsGrid = document.getElementById('options-grid');
        const progressText = document.getElementById('progress-text');
        const scoreLive = document.getElementById('score-live');
        const progressBar = document.getElementById('progress-bar');
        const feedbackArea = document.getElementById('feedback-area');
        const feedbackStatus = document.getElementById('feedback-status');
        const feedbackExplanation = document.getElementById('feedback-explanation');
        const nextBtn = document.getElementById('next-btn');
        const quizContainer = document.getElementById('quiz-container');
        const resultsScreen = document.getElementById('results-screen');

        function loadQuestion() {
            answered = false;
            const q = questions[currentQuestion];
            
            feedbackArea.className = "mt-6 hidden p-5 rounded-xl border";
            optionsGrid.innerHTML = '';
            
            questionText.innerText = q.q;
            progressText.innerText = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
            const progressPercent = ((currentQuestion) / questions.length) * 100;
            progressBar.style.width = `${progressPercent}%`;

            q.options.forEach((option, index) => {
                const btn = document.createElement('button');
                btn.className = "w-full text-left p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50/50 transition-all duration-200 flex items-start gap-4 group focus:outline-none focus:ring-2 focus:ring-zinc-900/10";
                
                btn.innerHTML = `
                    <div class="label-box flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-zinc-100 text-xs font-medium text-zinc-500 group-hover:bg-white group-hover:text-zinc-900 group-hover:shadow-sm transition-all border border-transparent group-hover:border-zinc-200 mt-0.5">
                        ${String.fromCharCode(65 + index)}
                    </div>
                    <div class="option-text text-sm text-zinc-700 leading-relaxed mt-1">${option}</div>
                `;
                
                btn.onclick = () => handleAnswer(index, btn);
                optionsGrid.appendChild(btn);
            });
        }

        function handleAnswer(selectedIndex, selectedBtn) {
            if (answered) return;
            answered = true;

            const q = questions[currentQuestion];
            const isCorrect = selectedIndex === q.correct;
            
            Array.from(optionsGrid.children).forEach(child => {
                child.classList.remove('hover:border-zinc-300', 'hover:bg-zinc-50/50');
                child.disabled = true;
                const label = child.querySelector('.label-box');
                label.classList.remove('group-hover:bg-white', 'group-hover:text-zinc-900', 'group-hover:shadow-sm', 'group-hover:border-zinc-200');
            });

            if (isCorrect) {
                score++;
                applyCorrectStyles(selectedBtn);
                
                feedbackStatus.innerHTML = `<iconify-icon icon="solar:check-circle-linear" class="text-lg"></iconify-icon> Correcto`;
                feedbackStatus.className = "flex items-center gap-2 text-sm font-medium mb-2 text-emerald-700";
                feedbackArea.className = "mt-6 p-5 rounded-xl border border-emerald-200/60 bg-emerald-50/50 text-emerald-900 fade-in";
            } else {
                applyIncorrectStyles(selectedBtn);
                
                const correctBtn = optionsGrid.children[q.correct];
                applyCorrectStyles(correctBtn);
                
                feedbackStatus.innerHTML = `<iconify-icon icon="solar:close-circle-linear" class="text-lg"></iconify-icon> Incorrecto. La correcta era la ${String.fromCharCode(65 + q.correct)}`;
                feedbackStatus.className = "flex items-center gap-2 text-sm font-medium mb-2 text-red-700";
                feedbackArea.className = "mt-6 p-5 rounded-xl border border-red-200/60 bg-red-50/50 text-red-900 fade-in";
            }

            feedbackExplanation.innerText = q.explanation;
            feedbackArea.classList.remove('hidden');
            scoreLive.innerText = `Puntaje: ${score}`;
            
            if (currentQuestion === questions.length - 1) {
                progressBar.style.width = `100%`;
            }
        }

        function applyCorrectStyles(btn) {
            btn.classList.replace('border-zinc-200', 'border-emerald-500/50');
            btn.classList.add('bg-emerald-50/30', 'ring-1', 'ring-emerald-500/50');
            const label = btn.querySelector('.label-box');
            label.className = "label-box flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-emerald-500 text-white text-xs font-medium shadow-sm mt-0.5";
            btn.querySelector('.option-text').classList.replace('text-zinc-700', 'text-emerald-900');
        }

        function applyIncorrectStyles(btn) {
            btn.classList.replace('border-zinc-200', 'border-red-500/50');
            btn.classList.add('bg-red-50/30', 'ring-1', 'ring-red-500/50');
            const label = btn.querySelector('.label-box');
            label.className = "label-box flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-red-500 text-white text-xs font-medium shadow-sm mt-0.5";
            btn.querySelector('.option-text').classList.replace('text-zinc-700', 'text-red-900');
        }

        nextBtn.onclick = () => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        };

        function showResults() {
            quizContainer.classList.add('hidden');
            resultsScreen.classList.remove('hidden');
            
            const finalScoreElement = document.getElementById('final-score');
            const resultMessage = document.getElementById('result-message');
            const resultIconContainer = document.getElementById('result-icon-container');
            const resultIcon = document.getElementById('result-icon');
            
            finalScoreElement.innerText = `${score} / ${questions.length}`;
            
            if (score >= 13) {
                resultMessage.innerText = "Excelente nivel. Tus conocimientos en psicodiagnóstico son sólidos y demuestras una gran capacidad de integración clínica.";
                resultIcon.setAttribute('icon', 'solar:star-fall-linear');
                resultIconContainer.className = "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-inset ring-emerald-200 bg-emerald-50 text-emerald-600";
            } else if (score >= 9) {
                resultMessage.innerText = "Buen desempeño. Tienes claros los conceptos básicos, aunque es recomendable repasar los matices técnicos de la psicometría.";
                resultIcon.setAttribute('icon', 'solar:info-circle-linear');
                resultIconContainer.className = "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-inset ring-blue-200 bg-blue-50 text-blue-600";
            } else {
                resultMessage.innerText = "Evaluación terminada. Se recomienda reforzar las bases de semiología y criterios diagnósticos para la práctica clínica.";
                resultIcon.setAttribute('icon', 'solar:danger-triangle-linear');
                resultIconContainer.className = "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-inset ring-amber-200 bg-amber-50 text-amber-600";
            }
        }

        window.onload = loadQuestion;
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-2xl mx-auto flex flex-col" id="app">

<header className="mb-8 flex flex-col items-center sm:items-start">
<div className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center text-sm font-semibold tracking-tighter mb-5 shadow-sm">
                PC
            </div>
<h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 mb-1 text-center sm:text-left">Psicodiagnóstico Clínico</h1>
<p className="text-sm text-zinc-500 text-center sm:text-left">Evaluación Diagnóstica — 6to Semestre</p>
</header>

<div className="bg-white rounded-2xl ring-1 ring-zinc-200/60 shadow-[0_2px_12px_rgb(0,0,0,0.03)] p-6 sm:p-8" id="quiz-container">

<div className="mb-8">
<div className="flex justify-between items-end mb-3">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider" id="progress-text">Pregunta 1 de 15</span>
<span className="text-xs font-medium text-zinc-400" id="score-live">Puntaje: 0</span>
</div>
<div className="w-full bg-zinc-100 h-1 rounded-full overflow-hidden">
<div className="bg-zinc-900 h-full rounded-full transition-all duration-500 ease-out" id="progress-bar" style={{width: '0%'}}></div>
</div>
</div>

<div className="fade-in" id="question-area">
<h2 className="text-lg sm:text-xl font-medium text-zinc-900 mb-6 leading-relaxed tracking-tight" id="question-text">
                    Cargando pregunta...
                </h2>
<div className="flex flex-col gap-3" id="options-grid">

</div>

<div className="mt-6 hidden p-5 rounded-xl border" id="feedback-area">
<div className="flex items-center gap-2 text-sm font-medium mb-2" id="feedback-status"></div>
<p className="text-sm text-zinc-700 leading-relaxed" id="feedback-explanation"></p>
<div className="mt-6 pt-5 border-t border-current border-opacity-10 flex justify-end">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900/20" id="next-btn">
                            Siguiente 
                            <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="hidden bg-white rounded-2xl ring-1 ring-zinc-200/60 shadow-[0_2px_12px_rgb(0,0,0,0.03)] p-8 sm:p-12 text-center fade-in" id="results-screen">
<div className="flex flex-col items-center mb-8">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-inset" id="result-icon-container">
<iconify-icon className="text-3xl" icon="" id="result-icon"></iconify-icon>
</div>
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 mb-3">Evaluación Finalizada</h2>
<p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed" id="result-message"></p>
</div>
<div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 sm:p-8 mb-8 inline-block w-full sm:w-auto min-w-[200px]">
<p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-2">Puntaje Final</p>
<div className="text-5xl font-medium tracking-tight text-zinc-900" id="final-score">0 / 15</div>
</div>
<div className="flex justify-center">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900/20 shadow-sm" onclick="location.reload()">
<iconify-icon className="text-base" icon="solar:restart-linear"></iconify-icon>
                    Reintentar Evaluación
                </button>
</div>
</div>
<footer className="mt-12 text-center text-xs text-zinc-400">
            Diagnóstico Clínico Avanzado © 2024
        </footer>
</div>


    </>
  );
}
