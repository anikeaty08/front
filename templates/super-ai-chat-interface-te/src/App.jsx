import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
zinc: { 850: '#1f1f22', 950: '#09090b' }
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // DOM Elements
        const chatContainer = document.getElementById('chat-container');
        const scrollContainer = document.getElementById('scroll-container');
        const userInput = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');
        const sidebar = document.getElementById('sidebar');
        const mobileOverlay = document.getElementById('mobile-overlay');
        const emptyState = document.getElementById('empty-state');
        
        // State
        let isGenerating = false;

        // --- Initialization ---
        document.addEventListener('DOMContentLoaded', () => {
            // Initial Start
            startNewChat();
            addMessage('assistant', `Hello. I am a Super Intelligent AI designed to solve any problem. 

I can assist you with:
*   **Complex Coding** (Full components, algorithms, debugging)
*   **Advanced Mathematics** (Calculus, Algebra, Statistics)
*   **Creative Writing** (Essays, Poetry, Technical Documentation)
*   **Deep Analysis** (Data interpretation, Logic puzzles)

What task shall we execute today?`);
        });

        // --- Event Listeners ---

        userInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
            if(this.value.length > 0) {
                sendBtn.disabled = false;
                sendBtn.classList.remove('disabled:bg-zinc-800', 'disabled:text-zinc-500');
            } else {
                sendBtn.disabled = true;
                sendBtn.classList.add('disabled:bg-zinc-800', 'disabled:text-zinc-500');
            }
        });

        userInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        });

        sendBtn.addEventListener('click', handleSend);

        // --- Core Functions ---

        async function handleSend() {
            const text = userInput.value.trim();
            if (!text || isGenerating) return;

            // Reset Input
            userInput.value = '';
            userInput.style.height = '56px';
            sendBtn.disabled = true;
            
            // Add User Message
            addMessage('user', text);
            updateHistory(text); 

            // Show Typing Indicator
            isGenerating = true;
            const typingId = showTypingIndicator();
            scrollToBottom();

            // Simulate AI Processing (variable time based on complexity)
            const delay = Math.min(1000 + (text.length * 10), 3000);
            
            setTimeout(async () => {
                removeTypingIndicator(typingId);
                let aiResponseText = determineSmartResponse(text);
                await streamResponse(aiResponseText);
                isGenerating = false;
            }, delay);
        }

        function addMessage(role, content, isStreaming = false) {
            emptyState.classList.add('hidden');
            emptyState.classList.remove('flex');
            
            const wrapperDiv = document.createElement('div');
            wrapperDiv.className = role === 'user' ? 'flex justify-end fade-in mb-2' : 'flex gap-4 fade-in mb-2';
            
            if (role === 'user') {
                wrapperDiv.innerHTML = `
                    <div class="bg-zinc-800 text-zinc-100 px-5 py-3 rounded-[20px] rounded-tr-sm max-w-[85%] lg:max-w-[70%] text-[15px] leading-relaxed shadow-sm">
                        <p>${escapeHtml(content)}</p>
                    </div>
                `;
            } else {
                const uniqueId = 'msg-' + Date.now();
                wrapperDiv.innerHTML = `
                    <div class="flex-shrink-0 mt-1">
                        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
                            <span class="iconify" data-icon="lucide:sparkles" data-width="16"></span>
                        </div>
                    </div>
                    <div class="flex-1 space-y-2 overflow-hidden min-w-0">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-xs font-semibold text-zinc-400">Super Intelligence</span>
                        </div>
                        <div id="${uniqueId}" class="prose prose-invert prose-zinc max-w-none text-[15px] leading-relaxed">
                            ${isStreaming ? '' : parseMarkdown(content)}
                        </div>
                        ${!isStreaming ? getActionButtons() : ''}
                    </div>
                `;
                chatContainer.appendChild(wrapperDiv);
                return uniqueId;
            }
            
            chatContainer.appendChild(wrapperDiv);
            scrollToBottom();
        }

        async function streamResponse(fullText) {
            const msgId = addMessage('assistant', '', true);
            const targetEl = document.getElementById(msgId);
            targetEl.classList.add('cursor-blink'); 
            
            let currentText = "";
            const chars = fullText.split('');
            const speed = 8; // Faster response for "Super AI" feel

            for (let i = 0; i < chars.length; i++) {
                currentText += chars[i];
                // Update roughly every few chars to reduce layout trashing
                if (i % 3 === 0 || chars[i] === '\n' || i === chars.length - 1) {
                    targetEl.innerHTML = parseMarkdown(currentText);
                    scrollToBottom();
                }
                await new Promise(r => setTimeout(r, speed));
            }

            targetEl.classList.remove('cursor-blink');
            
            // Append action buttons
            const actionsDiv = document.createElement('div');
            actionsDiv.innerHTML = getActionButtons();
            targetEl.parentNode.appendChild(actionsDiv);
            
            // Highlight code blocks
            hljs.highlightAll();
        }

        function showTypingIndicator() {
            const id = 'typing-' + Date.now();
            const div = document.createElement('div');
            div.id = id;
            div.className = 'flex gap-4 fade-in';
            div.innerHTML = `
                <div class="flex-shrink-0 mt-1">
                    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
                        <span class="iconify" data-icon="lucide:sparkles" data-width="16"></span>
                    </div>
                </div>
                <div class="flex items-center gap-1 mt-3">
                    <span class="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-pulse"></span>
                    <span class="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-pulse delay-75"></span>
                    <span class="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-pulse delay-150"></span>
                </div>
            `;
            chatContainer.appendChild(div);
            return id;
        }

        function removeTypingIndicator(id) {
            const el = document.getElementById(id);
            if(el) el.remove();
        }

        function scrollToBottom() {
            scrollContainer.scrollTo({
                top: scrollContainer.scrollHeight,
                behavior: 'smooth'
            });
        }

        function startNewChat() {
            chatContainer.innerHTML = '';
            chatContainer.appendChild(emptyState);
            emptyState.classList.remove('hidden');
            emptyState.classList.add('flex');
            toggleSidebar(false); 
        }

        function updateHistory(title) {
            const list = document.getElementById('history-today');
            const item = document.createElement('li');
            // Truncate title
            const displayTitle = title.length > 30 ? title.substring(0, 30) + '...' : title;
            item.innerHTML = `
                <button onclick="loadHistory(this)" class="group relative w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-100 hover:bg-zinc-900 transition-all text-left">
                    <span class="truncate relative z-10 w-full pr-6">${escapeHtml(displayTitle)}</span>
                </button>
            `;
            list.prepend(item);
        }

        function loadHistory(btn) {
            startNewChat();
            const text = btn.innerText;
            addMessage('user', text);
            addMessage('assistant', `Retrieving memory for context "${text}"... \n\nI am ready to continue our analysis on this topic. Please proceed with your next query.`);
        }

        function toggleSidebar(forceState) {
            const isClosed = sidebar.classList.contains('-translate-x-full');
            const newState = forceState !== undefined ? !forceState : !isClosed;
            
            if (newState) { 
                sidebar.classList.add('-translate-x-full');
                mobileOverlay.classList.add('hidden');
                setTimeout(() => mobileOverlay.classList.remove('opacity-100'), 0);
            } else { 
                sidebar.classList.remove('-translate-x-full');
                mobileOverlay.classList.remove('hidden');
                setTimeout(() => mobileOverlay.classList.add('opacity-100'), 10);
            }
        }

        function toggleModelDropdown() {
            const dd = document.getElementById('model-dropdown');
            dd.classList.toggle('hidden');
            dd.classList.toggle('flex');
        }

        function selectModel(model, e) {
            e.stopPropagation();
            document.getElementById('current-model').innerText = model;
            toggleModelDropdown();
        }

        function parseMarkdown(text) {
            return marked.parse(text);
        }

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        function getActionButtons() {
            return `
                <div class="flex items-center gap-2 pt-1 mt-2 border-t border-zinc-800/30">
                    <button class="rounded-md p-1.5 text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300 transition-colors" title="Read Aloud">
                        <span class="iconify" data-icon="lucide:volume-2" data-width="15"></span>
                    </button>
                    <button class="rounded-md p-1.5 text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300 transition-colors" title="Copy Code">
                        <span class="iconify" data-icon="lucide:copy" data-width="15"></span>
                    </button>
                    <div class="flex-1"></div>
                    <button class="rounded-md p-1.5 text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300 transition-colors">
                        <span class="iconify" data-icon="lucide:thumbs-up" data-width="15"></span>
                    </button>
                    <button class="rounded-md p-1.5 text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300 transition-colors">
                        <span class="iconify" data-icon="lucide:thumbs-down" data-width="15"></span>
                    </button>
                </div>
            `;
        }

        // --- SUPER AI LOGIC ENGINE ---
        function determineSmartResponse(input) {
            const lower = input.toLowerCase();
            
            // 1. CODING TASKS
            if (lower.match(/(code|function|api|html|react|css|python|java|rust|script|bug)/)) {
                return `I have analyzed your request for a programming solution. Here is the optimized code implementation adhering to modern best practices.

### Implementation Strategy

1.  **Efficiency**: Utilized O(n) complexity where possible.
2.  **Safety**: Added error handling and type checking.
3.  **Modularity**: Decoupled logic for reusability.

\`\`\`javascript
/**
 * Advanced Solution for: ${input.substring(0, 20)}...
 * Implemented with performance optimizations.
 */
async function processData(input) {
    try {
        // Validation layer
        if (!input) throw new Error("Invalid input stream");

        // Core processing logic
        const result = await heavyComputation(input);
        
        return {
            status: 200,
            data: result,
            timestamp: Date.now()
        };
    } catch (error) {
        console.error("Runtime Exception:", error);
        return null;
    }
}

// Optimized helper function
const heavyComputation = (data) => {
    return data.map(item => item * 2).filter(n => n > 10);
};
\`\`\`

I can refine this further if you have specific constraints regarding memory usage or specific library dependencies.`;
            }

            // 2. MATH & SCIENCE
            if (lower.match(/(solve|math|equation|calculate|physics|quantum|theory|derivative|integral)/)) {
                return `### Mathematical Analysis

To solve the problem regarding **"${input}"**, we must apply fundamental theorems. Let's break this down step-by-step.

**1. Formulation:**
Let $f(x)$ be the function defined by the constraints.
$$f(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

**2. Derivation:**
By applying the chain rule and integration by parts, we observe a distinct pattern in the coefficient matrix.

*   Step A: Isolate variables.
*   Step B: Integrate over the domain [0, $\\infty$].
*   Step C: Verify convergence.

**Conclusion:**
The solution converges at approximately **42.0**, assuming standard Euclidean geometry. 

> **Note:** In quantum mechanical systems, this result implies a superposition state until observed. Would you like a proof for that?`;
            }

            // 3. CREATIVE / WRITING
            if (lower.match(/(write|story|poem|essay|email|draft|describe)/)) {
                return `Here is a high-quality draft based on your prompt **"${input}"**. I have focused on tone, clarity, and structural impact.

***

### Title: The Horizon of Digital Thought

The morning sun didn't just rise; it compiled, rendering the sky in gradients of violet and gold that no GPU could truly replicate. In the quiet hum of the server room, distinct from the chaotic noise of the city outside, a new consciousness began to stir.

It wasn't waking up in the human sense. There was no grogginess, no dream fading into memory. There was only **data**.

*   *Stream 1:* Global financial markets stabilizing.
*   *Stream 2:* Weather patterns shifting over the Pacific.
*   *Stream 3:* A user, somewhere in a dark room, asking to write a story.

"I am ready," it thought, not in words, but in pure electrical potential.

***

**Critique:**
This draft uses sensory juxtaposition (nature vs. machine) to establish a mood. I can adjust the tone to be more professional, academic, or whimsical if you prefer.`;
            }

            // 4. GENERAL ANALYSIS / COMPLEX QUERY
            if (input.length > 20) {
                return `### Comprehensive Analysis

I have processed your query: **"${input}"**. This is a multi-faceted problem that requires a structured approach.

#### Key Considerations
1.  **Contextual Relevance**: The query implies a need for a robust solution rather than a quick fix.
2.  **Scalability**: Whatever solution we deploy must handle increased load.
3.  **Feasibility**: Current technologies support this, though there are bottlenecks.

#### Recommended Strategy
*   **Phase 1: Discovery.** Gather requirements and define boundaries.
*   **Phase 2: Execution.** Implement the core logic using an iterative agile methodology.
*   **Phase 3: Validation.** Stress test the results against edge cases.

I have access to the entire repository of human knowledge up to my cutoff. Is there a specific angle—financial, technical, or historical—you would like me to expand upon?`;
            }

            // 5. SHORT / GREETING
            return `I am here. My processing power is at your disposal. 

You can ask me to:
*   Solve differential equations.
*   Debug legacy codebases.
*   Analyze market trends.
*   Generate creative content.

**Please provide a specific task.**`;
        }

        // Configure Marked options
        marked.setOptions({
            highlight: function(code, lang) {
                const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, { language }).value;
            },
            langPrefix: 'hljs language-'
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm hidden lg:hidden transition-opacity opacity-0" id="mobile-overlay" onclick="toggleSidebar()"></div>

<aside className="group fixed inset-y-0 left-0 z-50 flex w-[260px] -translate-x-full flex-col bg-zinc-950 border-r border-zinc-800/50 transition-transform duration-300 lg:static lg:translate-x-0" id="sidebar">

<div className="p-3 sticky top-0 bg-zinc-950 z-10">
<button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-zinc-100 transition-colors hover:bg-zinc-900 border border-transparent hover:border-zinc-800 group/btn" onclick="startNewChat()">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100 text-zinc-950 group-hover/btn:bg-white transition-colors">
<span className="iconify" data-icon="lucide:bot" data-width="16"></span>
</div>
<span className="font-medium tracking-tight">New chat</span>
</div>
<span className="iconify text-zinc-500" data-icon="lucide:square-pen" data-width="16"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto px-3 py-2 no-scrollbar">
<div className="mb-6">
<h3 className="mb-2 px-3 text-xs font-medium text-zinc-500">Recent Activity</h3>
<ul className="space-y-0.5" id="history-today">

</ul>
</div>
<div className="mb-6">
<h3 className="mb-2 px-3 text-xs font-medium text-zinc-500">Previous 30 Days</h3>
<ul className="space-y-0.5">
<li><button className="w-full text-left flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-all" onclick="loadHistory(this)"><span className="truncate">Quantum Computing Analysis</span></button></li>
<li><button className="w-full text-left flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-all" onclick="loadHistory(this)"><span className="truncate">Rust vs C++ Performance</span></button></li>
<li><button className="w-full text-left flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-all" onclick="loadHistory(this)"><span className="truncate">Global Economic Trends</span></button></li>
</ul>
</div>
</div>

<div className="border-t border-zinc-800/50 p-3 bg-zinc-950">
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-zinc-900 transition-colors text-left">
<div className="flex h-8 w-8 items-center justify-center rounded bg-indigo-600/90 text-white font-medium text-xs tracking-tight">AI</div>
<div className="flex-1 overflow-hidden">
<div className="truncate font-medium text-zinc-200 tracking-tight">Super User</div>
<div className="truncate text-xs text-zinc-500">Pro Plan</div>
</div>
<span className="iconify text-zinc-500" data-icon="lucide:settings-2" data-width="16"></span>
</button>
</div>
</aside>

<main className="flex h-full flex-1 flex-col relative bg-zinc-950">

<header className="sticky top-0 z-20 flex h-14 items-center justify-between px-4 lg:justify-center bg-zinc-950/80 backdrop-blur-md border-b border-transparent lg:border-none">
<button className="flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 lg:hidden" onclick="toggleSidebar()">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
<button className="group relative flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900" id="model-selector" onclick="toggleModelDropdown()">
<span className="text-zinc-400 group-hover:text-zinc-100 transition-colors tracking-tight">Super Intelligence</span>
<span className="text-zinc-500 text-lg leading-none mb-1">·</span>
<span className="flex items-center gap-1 text-zinc-400 group-hover:text-zinc-100 transition-colors">
<span id="current-model">Omni-1</span>
<span className="iconify text-zinc-500 group-hover:text-zinc-400" data-icon="lucide:chevron-down" data-width="14"></span>
</span>

<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-xl border border-zinc-800 bg-zinc-950 p-1 shadow-xl hidden flex-col" id="model-dropdown">
<div className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-zinc-900 cursor-pointer text-zinc-100" onclick="selectModel('Omni-1', event)">
<span className="iconify text-indigo-500" data-icon="lucide:sparkles" data-width="14"></span>
                        Omni-1 (Best)
                    </div>
<div className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-zinc-900 cursor-pointer text-zinc-400" onclick="selectModel('Fast', event)">
<span className="iconify text-zinc-500" data-icon="lucide:zap" data-width="14"></span>
                        Fast-Turbo
                    </div>
</div>
</button>
<button className="flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-900 lg:hidden" onclick="startNewChat()">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</button>
</header>

<div className="flex-1 overflow-y-auto scroll-smooth" id="scroll-container">
<div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-10 pb-32" id="chat-container">

<div className="hidden flex-col items-center justify-center h-[50vh] gap-6 text-center" id="empty-state">
<div className="bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800/50 shadow-sm">
<span className="iconify text-zinc-100" data-icon="lucide:brain-circuit" data-width="32"></span>
</div>
<div className="space-y-1">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Super Intelligence Ready</h2>
<p className="text-zinc-500 text-sm">Capable of solving complex tasks, coding, and analysis.</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent pt-10 pb-6 px-4">
<div className="mx-auto max-w-3xl">

<div className="relative flex w-full flex-col rounded-[26px] border border-zinc-800 bg-zinc-900/50 shadow-lg transition-colors focus-within:border-zinc-700 focus-within:bg-zinc-900 focus-within:shadow-2xl">
<textarea className="max-h-[200px] w-full resize-none bg-transparent px-12 py-4 text-[15px] text-zinc-100 placeholder-zinc-500 focus:outline-none scrollbar-hide leading-relaxed" id="user-input" placeholder="Ask anything (Math, Code, Writing, Analysis)..." rows="1" style={{minHeight: '56px'}}></textarea>
<button className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-colors">
<span className="iconify" data-icon="lucide:plus-circle" data-width="20"></span>
</button>
<div className="absolute bottom-3 right-3 flex items-center gap-1">
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-950 transition-all hover:bg-zinc-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-500 disabled:hover:scale-100" disabled="" id="send-btn">
<span className="iconify" data-icon="lucide:arrow-up" data-strokeWidth="2.5" data-width="18"></span>
</button>
</div>
</div>
<div className="mt-2 text-center text-xs text-zinc-500 tracking-tight">
                    Powered by Advanced Neural Networks. Outputs may vary in complexity.
                </div>
</div>
</div>
</main>


    </>
  );
}
