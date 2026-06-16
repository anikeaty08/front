import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State Management
        let currentStepIndex = 0;
        let answers = {};
        
        // Configuration of Questions & Logic
        const questionsConfig = {
            q1: {
                id: 'role',
                text: "Which of the following best describes you?",
                options: [
                    { label: "Designer", icon: "pen-tool" },
                    { label: "Real estate developer", icon: "building-2" },
                    { label: "Student", icon: "graduation-cap" },
                    { label: "Educator", icon: "book-open" },
                    { label: "Other", icon: "users", isOther: true }
                ]
            },
            q2: {
                id: 'specialty',
                text: "What's your specialty?",
                options: [
                    { label: "Architect", icon: "ruler" },
                    { label: "Urban Planner", icon: "map" },
                    { label: "Landscape designer", icon: "trees" },
                    { label: "Interior designer", icon: "sofa" },
                    { label: "Other", icon: "plus", isOther: true }
                ]
            },
            q3: {
                id: 'experience',
                text: "Your work experience is?",
                options: [
                    { label: "1-3 years", icon: "clock-3" },
                    { label: "4-9 years", icon: "clock-9" },
                    { label: "10-20 years", icon: "calendar" },
                    { label: "20+ years", icon: "award" }
                ]
            },
            q4: {
                id: 'degree',
                text: "Which is your current degree/degree you primarily teach?",
                options: [
                    { label: "Before undergraduate", icon: "school", sub: "(junior college, high school)" },
                    { label: "Undergraduate", icon: "library" },
                    { label: "Postgraduate", icon: "scroll" },
                    { label: "PhD", icon: "microscope" }
                ]
            },
            q5: {
                id: 'companySize',
                text: "What is your company size (employees)?",
                options: [
                    { label: "1-20", icon: "user" },
                    { label: "20-100", icon: "users" },
                    { label: "100-500", icon: "building" },
                    { label: "500+", icon: "factory" }
                ]
            }
        };

        // Determine flow based on previous answers
        function getNextQuestionId(currentId) {
            const role = answers['role'];
            
            if (!currentId) return 'q1'; // Start

            if (currentId === 'q1') {
                if (role === 'Designer') return 'q2';
                if (role === 'Student' || role === 'Educator') return 'q4';
                return 'q3'; // Real estate or Other
            }

            if (currentId === 'q2') { // Coming from Designer specialty
                return 'q3'; // Designers also need experience
            }

            if (currentId === 'q3') { // Coming from Experience
                if (role === 'Student' || role === 'Educator') return null; // Logic check: Prompt says Student excludes Q3, but logic flow might vary. Assuming end for them if they reached here? 
                // Actually prompt says: Q5 for everyone EXCEPT student/educator.
                if (role !== 'Student' && role !== 'Educator') return 'q5';
                return null; // End
            }

            if (currentId === 'q4') { // Coming from Degree (Student/Educator)
                // Prompt: Q3 triggers if NOT student. So Educator sees Q3?
                if (role === 'Educator') return 'q3'; 
                // Student skips Q3. 
                // Both skip Q5.
                return null; // End
            }

            return null; // End of survey
        }

        let currentQuestionId = 'q1';
        let stepCount = 1;

        // Render Logic
        function renderQuestion() {
            const data = questionsConfig[currentQuestionId];
            if (!data) {
                alert("Survey Complete! Data: " + JSON.stringify(answers));
                return;
            }

            // Update Header
            // Calculate total steps roughly (dynamic based on role)
            let totalSteps = 2; // Default fallback
            if(answers.role === 'Designer') totalSteps = 4;
            else if(answers.role === 'Educator') totalSteps = 3;
            else if(answers.role === 'Student') totalSteps = 2;
            else if(answers.role) totalSteps = 3; 

            // If we are at step 1, we don't know the role yet, so display generic 1/X or just number
            const stepDisplay = currentQuestionId === 'q1' ? "1/2" : `${stepCount}/${totalSteps}`;
            
            document.getElementById('question-text').innerText = `${stepDisplay} ${data.text}`;
            
            const grid = document.getElementById('options-grid');
            grid.innerHTML = ''; // Clear previous options
            
            // Adjust grid columns based on option count
            grid.className = `grid gap-4 w-full ${data.options.length <= 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`;
            if(data.options.length === 5) grid.classList.replace('lg:grid-cols-4', 'lg:grid-cols-5');

            data.options.forEach((opt) => {
                const card = document.createElement('div');
                // Card Styles - mirroring the provided image (White, rounded, subtle border, large icon)
                card.className = `
                    group relative cursor-pointer rounded-2xl border bg-white p-6 
                    flex flex-col items-center justify-center gap-4 text-center h-40
                    transition-all duration-200 ease-out
                    hover:border-violet-500 hover:shadow-lg hover:shadow-violet-100
                    ${answers[data.id] === opt.label ? 'ring-2 ring-violet-600 bg-violet-50/50 border-transparent' : 'border-slate-200 text-slate-500'}
                `;
                
                // Icon Construction
                const iconColor = answers[data.id] === opt.label ? 'text-violet-600' : 'text-slate-400 group-hover:text-violet-500';
                
                // Content
                let contentHTML = `
                    <i data-lucide="${opt.icon}" class="w-8 h-8 ${iconColor} transition-colors stroke-[1.5]"></i>
                    <div class="flex flex-col gap-1">
                        <span class="font-medium text-base ${answers[data.id] === opt.label ? 'text-violet-900' : 'text-slate-700'}">${opt.label}</span>
                        ${opt.sub ? `<span class="text-xs text-slate-400 leading-tight">${opt.sub}</span>` : ''}
                    </div>
                `;

                // Logic for "Other" with input
                if (opt.isOther && answers[data.id] && answers[data.id].startsWith('Other:')) {
                     // If already selected and has value, show input filled
                     const existingVal = answers[data.id].replace('Other: ', '');
                     contentHTML = `
                        <div class="w-full flex flex-col items-center gap-2">
                             <span class="text-xs font-semibold text-violet-600 uppercase tracking-wider">Specify</span>
                             <input type="text" value="${existingVal}" 
                                class="w-full bg-transparent border-b-2 border-violet-500 text-center text-slate-900 font-medium focus:outline-none py-1"
                                maxlength="35" onclick="event.stopPropagation()" oninput="handleOtherInput('${data.id}', this.value)" autofocus />
                        </div>
                     `;
                }

                card.innerHTML = contentHTML;

                // Click Event
                card.onclick = () => {
                    if (opt.isOther) {
                        // Switch to input mode
                        selectOption(data.id, 'Other: ');
                        renderQuestion(); // Re-render to show input
                        // Focus logic handled in HTML injection
                    } else {
                        selectOption(data.id, opt.label);
                    }
                };

                grid.appendChild(card);
            });

            // Re-initialize icons
            lucide.createIcons();
            validateButton(data.id);
        }

        function selectOption(questionId, value) {
            answers[questionId] = value;
            
            // Visual update without full re-render for standard options
            const currentConfig = questionsConfig[currentQuestionId];
            if(!currentConfig.options.find(o => o.isOther) || !value.startsWith('Other')) {
                renderQuestion(); 
            }
        }

        function handleOtherInput(questionId, value) {
            answers[questionId] = `Other: ${value}`;
            validateButton(questionId);
        }

        function validateButton(questionId) {
            const btn = document.getElementById('continue-btn');
            const val = answers[questionId];
            
            if (val) {
                if (val.startsWith('Other:')) {
                    // Check if input is not empty (length > 7 because "Other: " is 7 chars)
                    btn.disabled = val.trim().length <= 7;
                } else {
                    btn.disabled = false;
                }
            } else {
                btn.disabled = true;
            }
        }

        function handleContinue() {
            // Determine next step
            const nextId = getNextQuestionId(currentQuestionId);
            
            if (nextId) {
                currentQuestionId = nextId;
                stepCount++;
                // Reset selection for next step if not already set (revisiting)
                if (!answers[nextId]) {
                    document.getElementById('continue-btn').disabled = true;
                }
                
                // Add fade animation effect
                const container = document.getElementById('survey-container');
                container.style.opacity = '0';
                container.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    renderQuestion();
                    container.style.transition = 'all 0.3s ease-out';
                    container.style.opacity = '1';
                    container.style.transform = 'translateY(0)';
                }, 200);

            } else {
                // Submit Form Logic
                console.log("Final Answers:", answers);
                alert("Setup complete! Welcome to Concetto.");
            }
        }

        function handleCancel() {
            if(stepCount > 1) {
                // Simple reset for demo, or logic to go back
                location.reload(); 
            } else {
                alert("Cancelled");
            }
        }

        // Initialize
        renderQuestion();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-r from-blue-100 via-violet-100 to-fuchsia-100 blur-3xl opacity-80"></div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/80 to-white"></div>
</div>

<main className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 w-full max-w-5xl mx-auto">

<div className="mb-8 fade-in">
<div className="h-16 w-16 bg-black rounded-2xl flex items-center justify-center shadow-lg shadow-gray-200">

<svg fill="none" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect fill="white" fillOpacity="0.5" height="9" rx="2" width="9" x="2" y="2"></rect>
<rect fill="white" height="9" rx="2" width="9" x="13" y="2"></rect>
<rect fill="white" height="9" rx="2" width="9" x="2" y="13"></rect>
<rect fill="white" fillOpacity="0.5" height="9" rx="2" width="9" x="13" y="13"></rect>
</svg>
</div>
</div>

<div className="text-center mb-12 fade-in" style={{animationDelay: '0.1s'}}>
<h1 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-3">
                How you want to use CONCEETO?
            </h1>
<p className="text-base text-slate-500 font-normal">
                This helps customize your experience
            </p>
</div>

<div className="w-full max-w-4xl flex flex-col items-center fade-in" id="survey-container" style={{animationDelay: '0.2s'}}>

<h2 className="text-lg md:text-xl text-slate-700 font-normal mb-8 text-center" id="question-text">
                Loading...
            </h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full" id="options-grid">

</div>

<div className="flex items-center gap-4 mt-12 w-full max-w-md justify-center">
<button className="w-1/2 py-3 px-4 rounded-xl bg-slate-100 text-slate-600 font-medium hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300" onclick="handleCancel()">
                    Cancel
                </button>
<button className="w-1/2 py-3 px-4 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 transition-all shadow-md shadow-violet-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2" disabled="" id="continue-btn" onclick="handleContinue()">
                    Continue
                </button>
</div>
</div>
</main>


    </>
  );
}
