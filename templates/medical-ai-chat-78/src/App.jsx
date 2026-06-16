import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // DOM Elements
        const chatInput = document.getElementById('chat-input');
        const sendBtn = document.getElementById('send-btn');
        const messagesArea = document.getElementById('messages-area');
        const welcomeScreen = document.getElementById('welcome-screen');
        const loadingIndicator = document.getElementById('loading-indicator');
        const chatContainer = document.getElementById('chat-container');
        const sidebar = document.getElementById('sidebar');
        const mobileOverlay = document.getElementById('mobile-overlay');

        // State
        let isTyping = false;

        // Auto-resize textarea
        chatInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
            
            // Enable/Disable send button
            if (this.value.trim().length > 0) {
                sendBtn.removeAttribute('disabled');
            } else {
                sendBtn.setAttribute('disabled', 'true');
            }
        });

        // Handle Enter key
        chatInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });

        // Handle Send Click
        sendBtn.addEventListener('click', sendMessage);

        function fillInput(text) {
            chatInput.value = text;
            chatInput.style.height = 'auto'; // Reset calculation
            chatInput.style.height = (chatInput.scrollHeight) + 'px'; // Recalculate
            sendBtn.removeAttribute('disabled');
            chatInput.focus();
        }

        function toggleSidebar() {
            const isClosed = sidebar.classList.contains('-translate-x-full');
            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
                mobileOverlay.classList.remove('hidden');
                // slight delay for opacity transition
                setTimeout(() => mobileOverlay.classList.remove('opacity-0'), 10);
            } else {
                sidebar.classList.add('-translate-x-full');
                mobileOverlay.classList.add('opacity-0');
                setTimeout(() => mobileOverlay.classList.add('hidden'), 300);
            }
        }

        function scrollToBottom() {
            chatContainer.scrollTo({
                top: chatContainer.scrollHeight,
                behavior: 'smooth'
            });
        }

        function resetChat() {
            messagesArea.innerHTML = '';
            messagesArea.classList.add('hidden');
            welcomeScreen.classList.remove('hidden');
            chatInput.value = '';
            chatInput.style.height = 'auto';
            if (window.innerWidth < 1024) toggleSidebar(); // Close sidebar on mobile
        }

        function sendMessage() {
            const text = chatInput.value.trim();
            if (!text || isTyping) return;

            // UI Updates
            welcomeScreen.classList.add('hidden');
            messagesArea.classList.remove('hidden');
            chatInput.value = '';
            chatInput.style.height = 'auto';
            sendBtn.setAttribute('disabled', 'true');
            isTyping = true;

            // 1. Add User Message
            const userMsgHTML = `
                <div class="flex gap-4 flex-row-reverse group">
                    <div class="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-slate-600 font-medium text-xs">
                        DR
                    </div>
                    <div class="flex-1 max-w-[80%]">
                        <div class="bg-slate-100 text-slate-800 px-5 py-3.5 rounded-2xl rounded-tr-none text-sm leading-relaxed whitespace-pre-wrap">
                            ${text}
                        </div>
                    </div>
                </div>
            `;
            messagesArea.insertAdjacentHTML('beforeend', userMsgHTML);
            scrollToBottom();

            // 2. Show Loading
            loadingIndicator.classList.remove('hidden');
            scrollToBottom();

            // 3. Simulate AI Response (Delay)
            setTimeout(() => {
                loadingIndicator.classList.add('hidden');
                
                // Generate a pseudo-intelligent response based on keywords
                let aiResponse = "";
                const lowerText = text.toLowerCase();

                if (lowerText.includes("diabetes") || lowerText.includes("glucose")) {
                    aiResponse = `
                        <p>Based on current clinical guidelines (ADA 2024), here is a summary for <strong>Type 2 Diabetes Management</strong>:</p>
                        <p><strong>First-line Therapy:</strong> Metformin remains the preferred initial pharmacologic agent for the treatment of type 2 diabetes.</p>
                        <ul>
                            <li>Combine with lifestyle modifications (diet, exercise).</li>
                            <li>Consider early combination therapy if A1C is > 1.5% above target.</li>
                        </ul>
                        <p><strong>Cardiovascular/Renal Protection:</strong> In patients with established ASCVD, HF, or CKD, a SGLT2 inhibitor or GLP-1 RA with demonstrated CVD benefit is recommended independent of A1C.</p>
                        <p>Would you like the specific dosage adjustments for renal impairment?</p>
                    `;
                } else if (lowerText.includes("interaction") || lowerText.includes("warfarin")) {
                    aiResponse = `
                        <p><strong>Interaction Alert: Moderate to Severe</strong></p>
                        <p>There is a significant interaction between <strong>Warfarin</strong> and <strong>Amoxicillin</strong>.</p>
                        <ul>
                            <li><strong>Mechanism:</strong> Penicillins (like Amoxicillin) may alter intestinal flora, potentially increasing the anticoagulant effect of Warfarin.</li>
                            <li><strong>Risk:</strong> Increased risk of bleeding (elevated INR).</li>
                        </ul>
                        <p><strong>Recommendation:</strong></p>
                        <p>Monitor INR closely (e.g., 3 days after starting the antibiotic). Consider a temporary dose reduction of Warfarin if INR rises significantly. Advise patient to report any signs of bleeding or bruising.</p>
                    `;
                } else if (lowerText.includes("referral") || lowerText.includes("letter")) {
                    aiResponse = `
                        <p>Here is a draft referral letter for the Neurology Department:</p>
                        <div class="bg-slate-50 border border-slate-200 p-4 rounded-md font-mono text-xs text-slate-600 my-2">
                            <p><strong>To:</strong> Neurology Department</p>
                            <p><strong>Re:</strong> Patient Evaluation for Persistent Migraines</p>
                            <br>
                            <p>Dear Colleague,</p>
                            <br>
                            <p>I am writing to refer this patient for further evaluation and management of chronic, treatment-resistant migraines. The patient reports a 6-month history of unilateral, pulsating headaches accompanied by photophobia and nausea.</p>
                            <br>
                            <p>Current medications (Sumatriptan 50mg) have provided suboptimal relief. I would appreciate your expert opinion on potential prophylactic therapies or advanced imaging if indicated.</p>
                            <br>
                            <p>Sincerely,</p>
                            <p>Dr. Reynolds</p>
                        </div>
                        <p>You can copy this text or ask me to modify the tone or details.</p>
                    `;
                } else {
                    aiResponse = `
                        <p>I understand. As a medical AI assistant, I can help analyze this clinical scenario.</p>
                        <p>Could you provide more specific details regarding:</p>
                        <ul>
                            <li>Patient demographics (Age, Sex)</li>
                            <li>Onset and duration of symptoms</li>
                            <li>Any relevant past medical history</li>
                        </ul>
                        <p>This will help me generate a more accurate differential diagnosis or management plan.</p>
                    `;
                }

                const aiMsgHTML = `
                    <div class="flex gap-4 group animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div class="w-8 h-8 rounded-full bg-teal-600 flex-shrink-0 flex items-center justify-center shadow-sm">
                            <span class="iconify text-white" data-icon="lucide:activity" data-width="16" data-stroke-width="2"></span>
                        </div>
                        <div class="flex-1 max-w-[90%] lg:max-w-[85%]">
                            <div class="text-slate-700 prose text-sm leading-relaxed">
                                ${aiResponse}
                            </div>
                            <div class="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button class="p-1 text-slate-400 hover:text-slate-600" title="Copy">
                                    <span class="iconify" data-icon="lucide:copy" data-width="14"></span>
                                </button>
                                <button class="p-1 text-slate-400 hover:text-slate-600" title="Regenerate">
                                    <span class="iconify" data-icon="lucide:refresh-cw" data-width="14"></span>
                                </button>
                                <button class="p-1 text-slate-400 hover:text-slate-600" title="Good response">
                                    <span class="iconify" data-icon="lucide:thumbs-up" data-width="14"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                `;

                messagesArea.insertAdjacentHTML('beforeend', aiMsgHTML);
                scrollToBottom();
                isTyping = false;

            }, 1500); // 1.5s simulated delay
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm hidden lg:hidden transition-opacity opacity-0" id="mobile-overlay" onclick="toggleSidebar()"></div>

<aside className="fixed lg:static inset-y-0 left-0 z-50 w-[280px] -translate-x-full lg:translate-x-0 flex flex-col bg-slate-50 border-r border-slate-200 h-full transition-transform duration-300 ease-in-out" id="sidebar">

<div className="p-4 pt-5 mb-2 flex items-center justify-between">
<div className="flex items-center gap-2.5 px-2">
<div className="w-7 h-7 bg-teal-600 rounded-lg flex items-center justify-center shadow-sm shadow-teal-600/20">
<span className="iconify text-white" data-icon="lucide:activity" data-strokeWidth="2" data-width="16"></span>
</div>
<h1 className="font-medium text-slate-900 tracking-tight text-base">MediGPT</h1>
</div>
<button className="lg:hidden text-slate-400 hover:text-slate-600 p-1" onclick="toggleSidebar()">
<span className="iconify" data-icon="lucide:x" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>

<div className="px-4 mb-6">
<button className="w-full flex items-center gap-2.5 px-3 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm transition-all group text-slate-600 hover:text-slate-900" onclick="resetChat()">
<span className="iconify text-slate-400 group-hover:text-teal-600 transition-colors" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="16"></span>
<span className="font-medium">New Consultation</span>
</button>
</div>

<div className="flex-1 overflow-y-auto px-4 pb-4 space-y-6">
<div>
<h3 className="text-xs font-medium text-slate-400 px-3 mb-2 uppercase tracking-wider">Today</h3>
<ul className="space-y-0.5">
<li>
<button className="w-full text-left px-3 py-2 text-slate-700 bg-white shadow-sm border border-slate-200 rounded-md truncate transition-all flex items-center gap-2.5">
<span className="iconify text-teal-600" data-icon="lucide:message-square" data-strokeWidth="1.5" data-width="14"></span>
<span className="truncate">Symptoms of hypertension</span>
</button>
</li>
<li>
<button className="w-full text-left px-3 py-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md truncate transition-colors flex items-center gap-2.5">
<span className="iconify text-slate-400" data-icon="lucide:message-square" data-strokeWidth="1.5" data-width="14"></span>
<span className="truncate">Drug interactions check</span>
</button>
</li>
</ul>
</div>
<div>
<h3 className="text-xs font-medium text-slate-400 px-3 mb-2 uppercase tracking-wider">Yesterday</h3>
<ul className="space-y-0.5">
<li>
<button className="w-full text-left px-3 py-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md truncate transition-colors flex items-center gap-2.5">
<span className="iconify text-slate-400" data-icon="lucide:message-square" data-strokeWidth="1.5" data-width="14"></span>
<span className="truncate">Patient intake format</span>
</button>
</li>
<li>
<button className="w-full text-left px-3 py-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md truncate transition-colors flex items-center gap-2.5">
<span className="iconify text-slate-400" data-icon="lucide:message-square" data-strokeWidth="1.5" data-width="14"></span>
<span className="truncate">Pediatric dosage guidelines</span>
</button>
</li>
<li>
<button className="w-full text-left px-3 py-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md truncate transition-colors flex items-center gap-2.5">
<span className="iconify text-slate-400" data-icon="lucide:message-square" data-strokeWidth="1.5" data-width="14"></span>
<span className="truncate">MRI referral letter</span>
</button>
</li>
</ul>
</div>
</div>

<div className="p-4 border-t border-slate-200">
<button className="flex items-center gap-3 w-full p-2 hover:bg-slate-100 rounded-lg transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium">
                    DR
                </div>
<div className="flex-1 overflow-hidden">
<p className="text-xs font-medium text-slate-900 truncate">Dr. Reynolds</p>
<p className="text-xs text-slate-500 truncate">Cardiology Dept.</p>
</div>
<span className="iconify text-slate-400" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative w-full bg-white">

<header className="h-14 flex items-center justify-between px-4 lg:px-6 border-b border-slate-100 bg-white/80 backdrop-blur-md z-10 sticky top-0">
<div className="flex items-center gap-3">
<button className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-md" onclick="toggleSidebar()">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
</button>
<div className="flex items-center gap-2 group cursor-pointer p-1.5 hover:bg-slate-50 rounded-lg transition-colors">
<span className="font-medium text-slate-700">MediGPT-4</span>
<span className="bg-teal-50 text-teal-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-teal-100">MEDICAL</span>
<span className="iconify text-slate-400 group-hover:text-slate-600" data-icon="lucide:chevron-down" data-strokeWidth="1.5" data-width="14"></span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-md transition-colors" title="Settings">
<span className="iconify" data-icon="lucide:settings-2" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-md transition-colors" title="Share">
<span className="iconify" data-icon="lucide:share" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-8 scroll-smooth pb-32" id="chat-container">

<div className="max-w-2xl mx-auto mt-12 lg:mt-20 text-center space-y-8" id="welcome-screen">
<div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
<span className="iconify text-teal-600" data-icon="lucide:stethoscope" data-strokeWidth="1.5" data-width="32"></span>
</div>
<div className="space-y-2">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight">How can I assist you today?</h2>
<p className="text-slate-500">I can help analyze symptoms, review drug interactions, or draft medical reports.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto pt-4">
<button className="text-left p-4 rounded-xl border border-slate-200 hover:border-teal-200 hover:bg-teal-50/30 transition-all group" onclick="fillInput('What are the latest guidelines for Type 2 Diabetes management?')">
<div className="flex items-center gap-2 mb-1">
<span className="iconify text-teal-600" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="16"></span>
<span className="font-medium text-slate-700">Clinical Guidelines</span>
</div>
<p className="text-slate-500 text-xs line-clamp-1">Latest updates on T2D management protocols.</p>
</button>
<button className="text-left p-4 rounded-xl border border-slate-200 hover:border-teal-200 hover:bg-teal-50/30 transition-all group" onclick="fillInput('Check interaction between Warfarin and Amoxicillin.')">
<div className="flex items-center gap-2 mb-1">
<span className="iconify text-teal-600" data-icon="lucide:pill" data-strokeWidth="1.5" data-width="16"></span>
<span className="font-medium text-slate-700">Drug Interaction</span>
</div>
<p className="text-slate-500 text-xs line-clamp-1">Analyze safety of Warfarin and Amoxicillin.</p>
</button>
<button className="text-left p-4 rounded-xl border border-slate-200 hover:border-teal-200 hover:bg-teal-50/30 transition-all group" onclick="fillInput('Draft a referral letter for a patient with persistent migraines.')">
<div className="flex items-center gap-2 mb-1">
<span className="iconify text-teal-600" data-icon="lucide:pen-tool" data-strokeWidth="1.5" data-width="16"></span>
<span className="font-medium text-slate-700">Draft Referral</span>
</div>
<p className="text-slate-500 text-xs line-clamp-1">Write a letter for neurology consultation.</p>
</button>
<button className="text-left p-4 rounded-xl border border-slate-200 hover:border-teal-200 hover:bg-teal-50/30 transition-all group" onclick="fillInput('Summarize the differential diagnosis for acute abdominal pain in RLQ.')">
<div className="flex items-center gap-2 mb-1">
<span className="iconify text-teal-600" data-icon="lucide:microscope" data-strokeWidth="1.5" data-width="16"></span>
<span className="font-medium text-slate-700">Differential Diagnosis</span>
</div>
<p className="text-slate-500 text-xs line-clamp-1">RLQ pain analysis and key indicators.</p>
</button>
</div>
</div>

<div className="max-w-3xl mx-auto space-y-8 hidden" id="messages-area">

</div>

<div className="max-w-3xl mx-auto flex gap-4 hidden" id="loading-indicator">
<div className="w-8 h-8 rounded-full bg-teal-600 flex-shrink-0 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:activity" data-strokeWidth="2" data-width="16"></span>
</div>
<div className="flex items-center gap-1 bg-white border border-slate-100 shadow-sm px-4 py-3 rounded-2xl rounded-tl-none">
<div className="w-2 h-2 bg-slate-400 rounded-full typing-dot"></div>
<div className="w-2 h-2 bg-slate-400 rounded-full typing-dot"></div>
<div className="w-2 h-2 bg-slate-400 rounded-full typing-dot"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white via-white to-transparent pt-10 pb-6 px-4">
<div className="max-w-3xl mx-auto relative">

<div className="absolute bottom-3 left-3 flex gap-2 z-20">
<button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="Attach file">
<span className="iconify" data-icon="lucide:paperclip" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="Voice Input">
<span className="iconify" data-icon="lucide:mic" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
<textarea className="w-full bg-white border border-slate-200 shadow-lg shadow-slate-200/40 rounded-xl py-4 pl-24 pr-12 focus:outline-none focus:ring-2 focus:ring-teal-500/10 focus:border-teal-500 resize-none text-slate-700 placeholder:text-slate-400 max-h-48 overflow-y-auto no-scrollbar" id="chat-input" placeholder="Ask anything about medical cases, drugs, or protocols..." rows="1"></textarea>
<button className="absolute bottom-3 right-3 p-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="send-btn">
<span className="iconify" data-icon="lucide:arrow-up" data-strokeWidth="2" data-width="18"></span>
</button>
</div>
<p className="text-center text-[10px] text-slate-400 mt-3">MediGPT can make mistakes. Consider checking important medical information.</p>
</div>
</main>


    </>
  );
}
