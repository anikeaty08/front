import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: { 500: '#14b8a6', 950: '#020617' },
neon: { purple: '#a855f7', cyan: '#06b6d4', blue: '#3b82f6' }
},
boxShadow: {
'neon': '0 0 20px -5px rgba(168, 85, 247, 0.3)',
},
animation: {
'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        lucide.createIcons();
        updateStackCount();

        function updateStackCount() {
            const count = document.querySelectorAll('.chip.active').length;
            document.getElementById('stackCount').innerText = `${count} selected`;
        }

        function toggleChip(btn) {
            const isActive = btn.classList.contains('active');
            const baseClasses = "px-3 py-1.5 rounded-full text-[11px] font-medium border transition-all cursor-pointer flex items-center gap-1.5";
            const inactiveClasses = "bg-white/5 border-white/5 text-slate-400 hover:border-slate-600 hover:text-slate-200";
            const activeClasses = "bg-purple-500/10 border-purple-500/40 text-purple-300 hover:bg-purple-500/20";

            if (isActive) {
                btn.classList.remove('active');
                btn.className = `${baseClasses} ${inactiveClasses} chip`;
            } else {
                btn.classList.add('active');
                btn.className = `${baseClasses} ${activeClasses} chip active`;
            }
            updateStackCount();
        }

        function copyToClipboard() {
            const content = document.getElementById('outputContent').innerText;
            if(!content.trim()) return;

            navigator.clipboard.writeText(content).then(() => {
                const btnText = document.getElementById('copyText');
                const original = btnText.innerText;
                btnText.innerText = "COPIED";
                const btn = document.getElementById('copyBtn');
                btn.classList.add('text-green-400', 'border-green-500/20', 'bg-green-500/10');
                
                setTimeout(() => {
                    btnText.innerText = original;
                    btn.classList.remove('text-green-400', 'border-green-500/20', 'bg-green-500/10');
                }, 2000);
            });
        }

        // Advanced Logic Generator to simulate AI without API key
        function constructPrompt() {
            const idea = document.getElementById('ideaInput').value.trim();
            const btn = document.getElementById('generateBtn');
            const btnText = document.getElementById('btnText');
            const btnLoader = document.getElementById('btnLoader');
            const outputSection = document.getElementById('outputSection');
            const outputContent = document.getElementById('outputContent');

            // Validation
            if (!idea) {
                document.getElementById('ideaInput').parentElement.classList.add('ring-1', 'ring-red-500');
                setTimeout(() => document.getElementById('ideaInput').parentElement.classList.remove('ring-1', 'ring-red-500'), 500);
                return;
            }

            // Get Stack
            const chips = document.querySelectorAll('.chip.active');
            const stackArray = Array.from(chips).map(c => c.getAttribute('data-value'));
            const stackString = stackArray.join(', ');

            // UI Loading State
            btnText.classList.add('hidden');
            btnLoader.classList.remove('hidden');
            btn.disabled = true;
            outputSection.classList.remove('opacity-0', 'translate-y-4');
            outputContent.innerHTML = ''; // Clear previous

            // Logic Generation (Simulated AI)
            setTimeout(() => {
                const generatedMarkdown = generateDynamicMarkdown(idea, stackArray);
                
                // Render Markdown
                outputContent.innerHTML = marked.parse(generatedMarkdown);
                
                // Reset UI
                btnText.classList.remove('hidden');
                btnLoader.classList.add('hidden');
                btn.disabled = false;

                // Smooth scroll to output
                outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

            }, 1200); // 1.2s "Processing" delay
        }

        function generateDynamicMarkdown(idea, stack) {
            const isMobile = stack.includes('React Native') || stack.includes('Expo') || stack.includes('Flutter');
            const isWeb = stack.includes('Next.js') || stack.includes('React') || stack.includes('Vue');
            const hasSupabase = stack.includes('Supabase');
            const hasPython = stack.includes('Python');

            let prompt = `# System Prompt: ${idea.split(' ').slice(0, 5).join(' ')}...\n\n`;

            // Role Definition
            prompt += `## 1. Role & Objective\n`;
            prompt += `You are an expert Senior Software Architect and Full Stack Developer. Your goal is to build a robust, scalable solution for: **"${idea}"**.\n`;
            prompt += `Focus on clean architecture, modular code, and best practices for the specified tech stack.\n\n`;

            // Tech Stack
            prompt += `## 2. Technical Stack\n`;
            stack.forEach(tech => {
                prompt += `- **${tech}**: Use latest stable features.\n`;
            });
            if (isMobile) prompt += `- **Navigation**: Expo Router (File-based routing).\n`;
            if (hasSupabase) prompt += `- **Database**: PostgreSQL (via Supabase).\n- **Auth**: Supabase Auth.\n`;
            prompt += `\n`;

            // Architecture Rules
            prompt += `## 3. Architecture & Project Structure\n`;
            if (isMobile) {
                prompt += `Follow the Expo/React Native directory structure:\n`;
                prompt += `\`\`\`bash
/app           # Expo Router pages
/components    # Reusable UI components
  /ui          # Primitives (buttons, inputs)
/lib           # Utilities & Helpers
/services      # API services (Supabase calls)
/assets        # Images & Fonts
\`\`\`\n`;
            } else if (isWeb) {
                prompt += `Follow the App Router structure:\n`;
                prompt += `\`\`\`bash
/app           # App Router pages & layouts
/components    # React components
/lib           # Utils, hooks, stores
/server        # Server actions
\`\`\`\n`;
            } else {
                prompt += `- Organize code by feature modules.\n- Separate business logic from UI layers.\n`;
            }
            prompt += `\n`;

            // Implementation Details based on Idea
            prompt += `## 4. Implementation Guidelines\n`;
            
            // Analyze idea for keywords
            const ideaLower = idea.toLowerCase();
            
            if (ideaLower.includes('ai') || ideaLower.includes('chat') || ideaLower.includes('bot')) {
                prompt += `### AI Integration\n`;
                prompt += `- Use streaming responses for AI interactions.\n- Handle loading states gracefully (skeleton screens).\n- Secure API keys in environment variables.\n`;
            }
            
            if (ideaLower.includes('social') || ideaLower.includes('feed') || ideaLower.includes('user')) {
                prompt += `### Social Features\n`;
                prompt += `- Implement infinite scroll for feeds.\n- Optimistic updates for likes/comments.\n- Real-time subscriptions for notifications.\n`;
            }

            prompt += `### Styling & UI\n`;
            prompt += `- Use **Tailwind CSS** for styling (via NativeWind if mobile).\n`;
            prompt += `- Implement Dark Mode as default.\n`;
            prompt += `- Ensure touch targets are at least 44x44pt on mobile.\n\n`;

            prompt += `## 5. Code Style\n`;
            prompt += `- Use **TypeScript** for all files.\n- Prefer functional components and Hooks.\n- Use Zod for schema validation.\n- DRY (Don't Repeat Yourself) principle applied strictly.\n`;

            return prompt;
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-[400px] h-[850px] sm:h-[800px] bg-[#09090b] sm:rounded-[40px] border border-white/10 relative overflow-hidden flex flex-col sm:shadow-2xl shadow-black ring-1 ring-white/5">

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[250px] h-[250px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

<header className="glass sticky top-0 z-50 border-b border-white/5 px-6 pt-12 pb-4 flex justify-between items-center backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-900/20 ring-1 ring-white/10">
<span className="font-bold text-white text-lg tracking-tight font-mono">V</span>
</div>
<h1 className="font-semibold text-slate-100 text-sm tracking-tight">VibeCraft AI</h1>
</div>
<button className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
<i data-lucide="settings-2" height="16" strokeWidth="2" width="16"></i>
</button>
</header>

<main className="flex-1 overflow-y-auto overflow-x-hidden p-6 pb-24 scroll-smooth">

<section className="mb-8 animate-fade-in-up">
<div className="flex items-center gap-2 mb-4">
<i className="text-purple-400" data-lucide="layers" height="14" width="14"></i>
<h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">Context Builder</h2>
</div>

<div className="group relative mb-6">
<div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-700"></div>
<div className="relative bg-[#0F0F11] rounded-xl border border-white/10 p-1">
<textarea className="w-full bg-transparent text-sm text-slate-200 placeholder-slate-600 focus:outline-none resize-none h-24 leading-relaxed p-3 rounded-lg" id="ideaInput" placeholder="Describe your app idea clearly..."></textarea>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-end mb-3">
<label className="block text-[10px] text-slate-500 font-bold tracking-wider uppercase">Tech Stack</label>
<span className="text-[9px] text-slate-600" id="stackCount">0 selected</span>
</div>
<div className="flex flex-wrap gap-2" id="techStackContainer">

<button className="chip active px-3 py-1.5 rounded-full text-[11px] font-medium bg-purple-500/10 border border-purple-500/40 text-purple-300 flex items-center gap-1.5 transition-all cursor-pointer hover:bg-purple-500/20" data-value="React Native" onclick="toggleChip(this)">
<span className="iconify" data-icon="logos:react"></span>
                            React Native
                        </button>
<button className="chip active px-3 py-1.5 rounded-full text-[11px] font-medium bg-purple-500/10 border border-purple-500/40 text-purple-300 flex items-center gap-1.5 transition-all cursor-pointer hover:bg-purple-500/20" data-value="Expo" onclick="toggleChip(this)">
<span className="iconify" data-icon="simple-icons:expo" style={{color: 'white'}}></span>
                            Expo
                        </button>
<button className="chip px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/5 border border-white/5 text-slate-400 hover:border-slate-600 hover:text-slate-200 transition-all flex items-center gap-1.5 cursor-pointer" data-value="Next.js" onclick="toggleChip(this)">
<span className="iconify" data-icon="ri:nextjs-fill" style={{color: 'white'}}></span>
                            Next.js
                        </button>
<button className="chip px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/5 border border-white/5 text-slate-400 hover:border-slate-600 hover:text-slate-200 transition-all flex items-center gap-1.5 cursor-pointer" data-value="Supabase" onclick="toggleChip(this)">
<span className="iconify" data-icon="logos:supabase-icon"></span>
                            Supabase
                        </button>
<button className="chip px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/5 border border-white/5 text-slate-400 hover:border-slate-600 hover:text-slate-200 transition-all flex items-center gap-1.5 cursor-pointer" data-value="Tailwind" onclick="toggleChip(this)">
<span className="iconify" data-icon="logos:tailwindcss-icon"></span>
                            Tailwind
                        </button>
<button className="chip active px-3 py-1.5 rounded-full text-[11px] font-medium bg-purple-500/10 border border-purple-500/40 text-purple-300 flex items-center gap-1.5 transition-all cursor-pointer hover:bg-purple-500/20" data-value="TypeScript" onclick="toggleChip(this)">
<span className="iconify" data-icon="logos:typescript-icon"></span>
                            TypeScript
                        </button>
<button className="chip px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/5 border border-white/5 text-slate-400 hover:border-slate-600 hover:text-slate-200 transition-all flex items-center gap-1.5 cursor-pointer" data-value="Python" onclick="toggleChip(this)">
<span className="iconify" data-icon="logos:python"></span>
                            Python
                        </button>
</div>
</div>

<button className="w-full relative overflow-hidden group rounded-xl shadow-lg shadow-purple-900/20" id="generateBtn" onclick="constructPrompt()">
<div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 opacity-100 group-hover:opacity-90 animate-gradient transition-opacity"></div>
<div className="relative py-3.5 px-4 flex items-center justify-center gap-2">
<div className="flex items-center gap-2" id="btnText">
<span className="text-xs font-semibold text-white tracking-wide">GENERATE MASTER PROMPT</span>
<i className="text-purple-200 fill-purple-200" data-lucide="sparkles" height="14" width="14"></i>
</div>
<div className="spinner hidden border-white/30 border-l-white" id="btnLoader"></div>
</div>
</button>
</section>

<section className="mb-10 relative opacity-0 translate-y-4 transition-all duration-700" id="outputSection">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<h3 className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">.cursorrules / Prompt</h3>
<span className="px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 text-[9px] font-mono border border-purple-500/20">Markdown</span>
</div>
<button className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400 hover:text-white transition-colors bg-white/5 px-2.5 py-1 rounded-md border border-white/5 hover:border-white/10 cursor-pointer" id="copyBtn" onclick="copyToClipboard()">
<i data-lucide="copy" height="10" width="10"></i>
<span id="copyText">COPY</span>
</button>
</div>
<div className="relative bg-[#0A0A0A] rounded-xl border border-white/10 overflow-hidden min-h-[240px] shadow-inner flex flex-col group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

<div className="relative flex-1 bg-[#050505]" id="outputContainer">
<div className="p-4 font-mono text-[11px] leading-relaxed text-slate-300 overflow-x-auto whitespace-pre-wrap markdown-body h-full" id="outputContent"></div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
