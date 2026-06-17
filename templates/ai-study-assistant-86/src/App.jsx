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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
primary: '#4f46e5',
}
}
}
}



        // State Management
        let currentTab = 'chat';
        let isDarkMode = false;
        let isFocusMode = false;
        let attachedImage = null; // Store base64 image data
        const chatHistory = JSON.parse(localStorage.getItem('study_ai_chat')) || [];

        // Initialization
        document.addEventListener('DOMContentLoaded', () => {
            loadTheme();
            setupEventListeners();
            if(chatHistory.length > 0) renderChatHistory();
        });

        function setupEventListeners() {
            // Dark Mode Toggle
            const toggle = document.getElementById('darkModeToggle');
            toggle.addEventListener('change', () => {
                document.documentElement.classList.toggle('dark');
                isDarkMode = !isDarkMode;
                localStorage.setItem('study_ai_theme', isDarkMode ? 'dark' : 'light');
            });
            
            // Enter key in chat
            document.getElementById('chat-input').addEventListener('keydown', (e) => {
                if(e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                }
            });
        }

        function loadTheme() {
            const theme = localStorage.getItem('study_ai_theme');
            if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
                document.getElementById('darkModeToggle').checked = true;
                isDarkMode = true;
            }
        }

        // Navigation Logic
        function switchTab(tabId) {
            currentTab = tabId;
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            document.getElementById(`view-${tabId}`).classList.remove('hidden');
            
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('bg-white', 'dark:bg-zinc-800', 'shadow-sm', 'text-zinc-900', 'dark:text-white');
                el.classList.add('text-zinc-600', 'dark:text-zinc-400');
            });
            const activeDesktop = document.getElementById(`nav-${tabId}`);
            if(activeDesktop) {
                activeDesktop.classList.add('bg-white', 'dark:bg-zinc-800', 'shadow-sm', 'text-zinc-900', 'dark:text-white');
                activeDesktop.classList.remove('text-zinc-600', 'dark:text-zinc-400');
            }

            document.querySelectorAll('.mobile-nav-item').forEach(el => {
                el.classList.remove('text-indigo-600', 'dark:text-indigo-400');
                el.classList.add('text-zinc-400');
            });
            const activeMobile = document.getElementById(`mob-${tabId}`);
            if(activeMobile) {
                activeMobile.classList.add('text-indigo-600', 'dark:text-indigo-400');
                activeMobile.classList.remove('text-zinc-400');
            }
        }

        // Chat Logic
        function autoResize(textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        }

        function handleImageUpload(input) {
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    attachedImage = e.target.result;
                    document.getElementById('image-preview').src = attachedImage;
                    document.getElementById('image-preview-area').classList.remove('hidden');
                };
                reader.readAsDataURL(input.files[0]);
            }
        }

        function removeImage() {
            attachedImage = null;
            document.getElementById('file-upload').value = '';
            document.getElementById('image-preview-area').classList.add('hidden');
        }

        async function sendMessage() {
            const input = document.getElementById('chat-input');
            const message = input.value.trim();
            
            if (!message && !attachedImage) return;

            // Add User Message (with image if present)
            const imageData = attachedImage;
            appendMessage('user', message, imageData);
            
            // Clear inputs
            input.value = '';
            input.style.height = 'auto';
            removeImage(); // Clear attached image state
            saveChat(message, 'user', imageData);

            // Simulate AI Loading
            const loadingId = appendLoading();
            scrollToBottom();

            // Mock AI Response Delay
            setTimeout(() => {
                removeLoading(loadingId);
                const response = generateMockResponse(message, !!imageData);
                appendMessage('ai', response);
                saveChat(response, 'ai');
                scrollToBottom();
            }, 1500);
        }

        function appendMessage(role, text, image = null) {
            const container = document.getElementById('chat-container');
            const div = document.createElement('div');
            
            if (role === 'user') {
                div.className = 'flex justify-end gap-3 fade-in';
                let content = '';
                if(image) {
                    content += `<div class="mb-2"><img src="${image}" class="max-w-[200px] rounded-lg border border-zinc-700"></div>`;
                }
                content += escapeHtml(text);
                
                div.innerHTML = `
                    <div class="max-w-[85%] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm shadow-sm">
                        ${content}
                    </div>
                `;
            } else {
                div.className = 'flex justify-start gap-3 fade-in';
                div.innerHTML = `
                    <div class="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                        <span class="iconify" data-icon="lucide:sparkles" data-width="16"></span>
                    </div>
                    <div class="max-w-[85%] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm shadow-sm prose">
                        ${formatAIResponse(text)}
                    </div>
                `;
            }
            container.appendChild(div);
        }

        function appendLoading() {
            const container = document.getElementById('chat-container');
            const id = 'loading-' + Date.now();
            const div = document.createElement('div');
            div.id = id;
            div.className = 'flex justify-start gap-3 fade-in';
            div.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                    <span class="iconify" data-icon="lucide:sparkles" data-width="16"></span>
                </div>
                <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1">
                    <div class="w-1.5 h-1.5 bg-zinc-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-zinc-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-zinc-400 rounded-full typing-dot"></div>
                </div>
            `;
            container.appendChild(div);
            return id;
        }

        function removeLoading(id) {
            const el = document.getElementById(id);
            if(el) el.remove();
        }

        function scrollToBottom() {
            const container = document.getElementById('chat-container');
            container.scrollTop = container.scrollHeight;
        }

        function saveChat(text, role, image = null) {
            chatHistory.push({ role, text, image });
            localStorage.setItem('study_ai_chat', JSON.stringify(chatHistory));
        }

        function renderChatHistory() {
            chatHistory.forEach(msg => appendMessage(msg.role, msg.text, msg.image));
        }

        // Mock AI Logic
        function generateMockResponse(input, hasImage) {
            const lower = input.toLowerCase();
            
            if (hasImage) {
                return "I see the image you uploaded. It looks like a complex problem! Based on the visual data, here is the analysis:\n\n1. **Identify the subject:** This appears to be a geometry question involving triangles.\n2. **Solution approach:** We can use the Pythagorean theorem.\n\nWould you like me to solve it step-by-step?";
            }

            if (lower.includes('math') || lower.includes('solve') || lower.match(/\d/)) {
                return "Here is the step-by-step solution:\n\n1. Identify the variables.\n2. Apply the formula: **x = (-b ± √(b² - 4ac)) / 2a**\n3. Substitute values.\n\n**Answer:** The value of x is 42.";
            } else if (lower.includes('summary') || lower.includes('summarize')) {
                return "<strong>Summary:</strong>\nThe text discusses the impact of AI on education. Key points include:\n- Personalized learning paths\n- Instant doubt solving\n- Automating administrative tasks.";
            } else if (lower.includes('essay')) {
                return "<strong>Title: The Future of Technology</strong>\n\nTechnology has rapidly evolved over the last century, transforming how we live, work, and communicate. From the invention of the internet to the rise of artificial intelligence, every innovation brings new opportunities and challenges...";
            } else if (lower.includes('hello') || lower.includes('hi')) {
                return "Hello! I'm ready to help you study. What subject are we tackling today?";
            }
            return "That's an interesting topic! To help you better, I can explain the core concepts, provide examples, or create a quiz to test your knowledge. What would you prefer?";
        }

        function formatAIResponse(text) {
            // Simple markdown parser
            return text
                .replace(/\n/g, '<br>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/- (.*?)(<br>|$)/g, '• $1$2');
        }

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // Tools Logic
        const toolConfigs = {
            'summarizer': { title: 'Text Summarizer', placeholder: 'Paste text to summarize...', options: '<select class="text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded"><option>Short Summary</option><option>Detailed Summary</option><option>Bullet Points</option></select>' },
            'grammar': { title: 'Grammar Fixer', placeholder: 'Paste text to check...', options: '' },
            'quiz': { title: 'Quiz Generator', placeholder: 'Paste study material...', options: '<select class="text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded"><option>5 Questions</option><option>10 Questions</option></select>' },
            'flashcards': { title: 'Flashcard Creator', placeholder: 'Paste notes...', options: '' },
            'essay': { title: 'Essay Writer', placeholder: 'Enter essay topic...', options: '<select class="text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded"><option>Academic</option><option>Creative</option></select>' },
            'explain': { title: 'Concept Explainer', placeholder: 'Enter concept name...', options: '<select class="text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded"><option>Like I am 5</option><option>High School</option><option>Expert</option></select>' }
        };

        function openTool(toolId) {
            const config = toolConfigs[toolId];
            document.getElementById('tool-title').innerHTML = `<span class="iconify text-indigo-600 dark:text-indigo-400" data-icon="lucide:sparkles" data-width="18"></span> ${config.title}`;
            document.getElementById('tool-input').placeholder = config.placeholder;
            document.getElementById('tool-input').value = '';
            document.getElementById('tool-options').innerHTML = config.options;
            document.getElementById('tool-result-area').classList.add('hidden');
            
            document.getElementById('active-tool-container').classList.remove('hidden');
            // Scroll to tool container on mobile
            if(window.innerWidth < 768) {
                document.getElementById('active-tool-container').scrollIntoView({ behavior: 'smooth' });
            }
        }

        function closeTool() {
            document.getElementById('active-tool-container').classList.add('hidden');
        }

        function runTool() {
            const btn = event.target;
            const originalText = btn.innerHTML;
            btn.innerHTML = `<span class="iconify animate-spin" data-icon="lucide:loader-2" data-width="16"></span> Processing...`;
            btn.disabled = true;

            setTimeout(() => {
                const result = "<strong>AI Output:</strong><br>Here is the generated content based on your input. This is a simulation of the AI processing the text, identifying key concepts, and formatting the output according to the selected tool's requirements.";
                document.getElementById('tool-output').innerHTML = result;
                document.getElementById('tool-result-area').classList.remove('hidden');
                
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        }

        // Image AI Logic
        function generateImage() {
            const prompt = document.getElementById('image-prompt').value;
            if(!prompt) return;

            const container = document.getElementById('image-result');
            container.innerHTML = `<div class="flex flex-col items-center gap-3"><span class="iconify animate-spin text-indigo-600" data-icon="lucide:loader-2" data-width="32"></span><p class="text-xs text-zinc-500">Dreaming up your image...</p></div>`;

            setTimeout(() => {
                const keywords = prompt.split(' ').join(',');
                container.innerHTML = `
                    <div class="relative w-full h-full min-h-[300px] bg-zinc-900 rounded-lg overflow-hidden group">
                        <img src="https://source.unsplash.com/random/800x600/?${encodeURIComponent(prompt)}" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt="Generated Image" onerror="this.src='https://placehold.co/600x400/222/FFF?text=Image+Generation+Placeholder'">
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <p class="text-white text-sm font-medium truncate">${prompt}</p>
                            <div class="flex gap-2 mt-2">
                                <button class="text-xs bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded backdrop-blur">Download</button>
                                <button class="text-xs bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded backdrop-blur">Copy</button>
                            </div>
                        </div>
                    </div>
                `;
            }, 2000);
        }

        // Utility Functions
        function toggleFocusMode() {
            isFocusMode = !isFocusMode;
            const sidebar = document.querySelector('aside');
            const btn = document.getElementById('focusModeBtn');
            
            if(isFocusMode) {
                sidebar.classList.add('hidden');
                btn.innerHTML = `<span class="iconify" data-icon="lucide:minimize-2" data-width="16"></span>`;
                const floatBtn = document.createElement('button');
                floatBtn.id = 'exitFocus';
                floatBtn.className = 'fixed top-4 right-4 z-50 bg-zinc-900 text-white p-2 rounded-full shadow-lg';
                floatBtn.innerHTML = `<span class="iconify" data-icon="lucide:minimize-2" data-width="16"></span>`;
                floatBtn.onclick = toggleFocusMode;
                document.body.appendChild(floatBtn);
            } else {
                sidebar.classList.remove('hidden');
                btn.innerHTML = `<span class="iconify" data-icon="lucide:maximize-2" data-width="16"></span>`;
                const floatBtn = document.getElementById('exitFocus');
                if(floatBtn) floatBtn.remove();
            }
        }

        function clearData() {
            if(confirm('Are you sure you want to clear all chat history and settings?')) {
                localStorage.clear();
                location.reload();
            }
        }

        function createNewNote() {
            alert("Opens Note Editor (Mock)");
        }
        
        function toggleVoiceInput() {
            alert("Listening... (Voice-to-Text Mock)");
        }
        
        function copyToClipboard(elementId) {
            const text = document.getElementById(elementId).innerText;
            navigator.clipboard.writeText(text);
            alert("Copied to clipboard!");
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
      

<aside className="hidden md:flex flex-col w-64 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm z-20">
<div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 dark:bg-white rounded-md flex items-center justify-center text-white dark:text-zinc-900 font-bold text-xs tracking-tight">S</div>
<span className="font-medium tracking-tight text-sm">StudyAI</span>
</div>
<button className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" id="focusModeBtn" onclick="toggleFocusMode()">
<span className="iconify" data-icon="lucide:maximize-2" data-width="16"></span>
</button>
</div>
<nav className="flex-1 overflow-y-auto p-2 space-y-1">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-white" id="nav-chat" onclick="switchTab('chat')">
<span className="iconify" data-icon="lucide:message-square" data-width="18"></span>
                Chat Assistant
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all" id="nav-tools" onclick="switchTab('tools')">
<span className="iconify" data-icon="lucide:wrench" data-width="18"></span>
                Study Tools
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all" id="nav-image" onclick="switchTab('image')">
<span className="iconify" data-icon="lucide:image" data-width="18"></span>
                Visual AI
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all" id="nav-notes" onclick="switchTab('notes')">
<span className="iconify" data-icon="lucide:notebook" data-width="18"></span>
                My Notes
            </button>
</nav>
<div className="p-2 border-t border-zinc-200 dark:border-zinc-800">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all" id="nav-settings" onclick="switchTab('settings')">
<span className="iconify" data-icon="lucide:settings" data-width="18"></span>
                Settings
            </button>
</div>
</aside>

<main className="flex-1 flex flex-col relative w-full h-full bg-white dark:bg-zinc-950">

<header className="md:hidden flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur z-20 sticky top-0">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 dark:bg-white rounded-md flex items-center justify-center text-white dark:text-zinc-900 font-bold text-xs tracking-tight">S</div>
<span className="font-medium tracking-tight text-sm">StudyAI</span>
</div>
<button className="text-zinc-500" onclick="switchTab('settings')">
<span className="iconify" data-icon="lucide:settings" data-width="20"></span>
</button>
</header>

<div className="view-section flex flex-col h-full absolute inset-0 pt-[53px] md:pt-0 pb-[60px] md:pb-0" id="view-chat">

<div className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth" id="chat-container">

<div className="flex gap-4 max-w-3xl mx-auto fade-in">
<div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 text-indigo-600 dark:text-indigo-400">
<span className="iconify" data-icon="lucide:sparkles" data-width="16"></span>
</div>
<div className="flex-1 space-y-2">
<div className="text-sm font-medium text-zinc-900 dark:text-white">AI Assistant</div>
<div className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed prose">
<p>Hello! I'm your advanced study companion. I can help you solve math problems, write essays, summarize texts, or create flashcards.</p>
<p>Try asking: "Explain photosynthesis simply" or uploading an image of a math problem.</p>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
<div className="max-w-3xl mx-auto relative flex flex-col bg-zinc-50 dark:bg-zinc-900 p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all shadow-sm">

<div className="hidden px-2 pb-2" id="image-preview-area">
<div className="relative w-16 h-16 group">
<img className="w-full h-full object-cover rounded-lg border border-zinc-200 dark:border-zinc-700" id="image-preview" src=""/>
<button className="absolute -top-1.5 -right-1.5 bg-zinc-900 text-white rounded-full p-0.5 shadow-sm hover:bg-zinc-700 border border-white dark:border-zinc-800" onclick="removeImage()">
<span className="iconify" data-icon="lucide:x" data-width="10"></span>
</button>
</div>
</div>
<div className="flex gap-2 items-end">
<input accept="image/*" className="hidden" id="file-upload" onchange="handleImageUpload(this)" type="file"/>
<button className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors rounded-lg" onclick="document.getElementById('file-upload').click()" title="Upload Image">
<span className="iconify" data-icon="lucide:paperclip" data-width="20"></span>
</button>
<button className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors rounded-lg" onclick="toggleVoiceInput()" title="Voice Input">
<span className="iconify" data-icon="lucide:mic" data-width="20"></span>
</button>
<textarea className="flex-1 bg-transparent border-0 focus:ring-0 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 resize-none py-2 max-h-32" id="chat-input" oninput="autoResize(this)" placeholder="Ask a question or paste text..." rows="1"></textarea>
<button className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-sm" id="send-btn" onclick="sendMessage()">
<span className="iconify" data-icon="lucide:arrow-up" data-width="20"></span>
</button>
</div>
</div>
<div className="text-center mt-2">
<p className="text-[10px] text-zinc-400">AI can make mistakes. Verify important information.</p>
</div>
</div>
</div>

<div className="view-section hidden absolute inset-0 overflow-y-auto bg-zinc-50 dark:bg-zinc-950 pt-[53px] md:pt-0 pb-[60px] md:pb-0" id="view-tools">
<div className="max-w-5xl mx-auto p-6 space-y-8">
<div className="space-y-1">
<h2 className="text-lg font-medium tracking-tight text-zinc-900 dark:text-white">Smart Study Tools</h2>
<p className="text-sm text-zinc-500">Boost your productivity with specialized AI agents.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<button className="group text-left p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-500/50 hover:shadow-md transition-all" onclick="openTool('summarizer')">
<div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:file-text" data-width="20"></span>
</div>
<h3 className="font-medium text-sm text-zinc-900 dark:text-white mb-1">Text Summarizer</h3>
<p className="text-xs text-zinc-500">Condense long articles into key points.</p>
</button>
<button className="group text-left p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-500/50 hover:shadow-md transition-all" onclick="openTool('grammar')">
<div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="20"></span>
</div>
<h3 className="font-medium text-sm text-zinc-900 dark:text-white mb-1">Grammar Fixer</h3>
<p className="text-xs text-zinc-500">Correct spelling and sentence structure.</p>
</button>
<button className="group text-left p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-500/50 hover:shadow-md transition-all" onclick="openTool('quiz')">
<div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:help-circle" data-width="20"></span>
</div>
<h3 className="font-medium text-sm text-zinc-900 dark:text-white mb-1">Quiz Generator</h3>
<p className="text-xs text-zinc-500">Create MCQs from your study material.</p>
</button>
<button className="group text-left p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-500/50 hover:shadow-md transition-all" onclick="openTool('flashcards')">
<div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<h3 className="font-medium text-sm text-zinc-900 dark:text-white mb-1">Flashcard Creator</h3>
<p className="text-xs text-zinc-500">Generate study cards instantly.</p>
</button>
<button className="group text-left p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-500/50 hover:shadow-md transition-all" onclick="openTool('essay')">
<div className="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:pen-tool" data-width="20"></span>
</div>
<h3 className="font-medium text-sm text-zinc-900 dark:text-white mb-1">Essay Writer</h3>
<p className="text-xs text-zinc-500">Draft essays on any topic.</p>
</button>
<button className="group text-left p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-500/50 hover:shadow-md transition-all" onclick="openTool('explain')">
<div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:lightbulb" data-width="20"></span>
</div>
<h3 className="font-medium text-sm text-zinc-900 dark:text-white mb-1">Concept Explainer</h3>
<p className="text-xs text-zinc-500">Simplify complex topics like you're 5.</p>
</button>
</div>

<div className="hidden bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 shadow-sm fade-in" id="active-tool-container">
<div className="flex justify-between items-center mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-3">
<h3 className="font-medium text-zinc-900 dark:text-white flex items-center gap-2" id="tool-title">

</h3>
<button className="text-zinc-400 hover:text-zinc-600" onclick="closeTool()">
<span className="iconify" data-icon="lucide:x" data-width="18"></span>
</button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wider">Input Content</label>
<textarea className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3 text-sm focus:ring-1 focus:ring-indigo-500 outline-none" id="tool-input" placeholder="Paste your text here..." rows="4"></textarea>
</div>

<div className="flex gap-4" id="tool-options">

</div>
<button className="w-full py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2" onclick="runTool()">
<span className="iconify" data-icon="lucide:zap" data-width="16"></span>
                            Generate
                        </button>
<div className="hidden mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800" id="tool-result-area">
<div className="flex justify-between items-center mb-2">
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider">Result</label>
<div className="flex gap-2">
<button className="text-zinc-400 hover:text-indigo-500" onclick="copyToClipboard('tool-output')" title="Copy">
<span className="iconify" data-icon="lucide:copy" data-width="14"></span>
</button>
<button className="text-zinc-400 hover:text-indigo-500" title="Save as Note">
<span className="iconify" data-icon="lucide:save" data-width="14"></span>
</button>
</div>
</div>
<div className="text-sm text-zinc-800 dark:text-zinc-200 prose leading-relaxed bg-zinc-50 dark:bg-zinc-950/50 p-4 rounded-lg border border-zinc-100 dark:border-zinc-800/50" id="tool-output"></div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden absolute inset-0 overflow-y-auto bg-zinc-50 dark:bg-zinc-950 pt-[53px] md:pt-0 pb-[60px] md:pb-0" id="view-image">
<div className="max-w-3xl mx-auto p-6 h-full flex flex-col">
<div className="space-y-1 mb-6">
<h2 className="text-lg font-medium tracking-tight text-zinc-900 dark:text-white">Visual Generator</h2>
<p className="text-sm text-zinc-500">Create diagrams, charts, and illustrations for your projects.</p>
</div>
<div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-1">
<div className="flex flex-col md:flex-row gap-2 p-2">
<input className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder-zinc-400" id="image-prompt" placeholder="Describe diagram (e.g., 'Water cycle diagram with labels')" type="text"/>
<select className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-lg px-3 py-2 border-none outline-none cursor-pointer" id="image-style">
<option value="realistic">Realistic</option>
<option value="illustration">Illustration</option>
<option value="sketch">Hand Sketch</option>
<option value="diagram">Diagram</option>
</select>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm" onclick="generateImage()">
                            Generate
                        </button>
</div>
</div>
<div className="mt-6 flex-1 flex flex-col items-center justify-center border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-100/50 dark:bg-zinc-900/50" id="image-result">
<div className="text-center p-8">
<div className="w-16 h-16 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-400">
<span className="iconify" data-icon="lucide:image-plus" data-width="24"></span>
</div>
<p className="text-sm text-zinc-500 font-medium">No image generated yet</p>
<p className="text-xs text-zinc-400 mt-1">Enter a prompt above to start creating.</p>
</div>
</div>
</div>
</div>

<div className="view-section hidden absolute inset-0 overflow-y-auto bg-white dark:bg-zinc-950 pt-[53px] md:pt-0 pb-[60px] md:pb-0" id="view-notes">
<div className="max-w-4xl mx-auto p-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-lg font-medium tracking-tight text-zinc-900 dark:text-white">My Notes</h2>
<p className="text-sm text-zinc-500">Organized study materials.</p>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-md text-xs font-medium hover:opacity-90" onclick="createNewNote()">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span> New Note
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="notes-grid">

<div className="group relative p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:shadow-sm transition-all cursor-pointer">
<h3 className="font-medium text-sm text-zinc-900 dark:text-white mb-2">History: Industrial Revolution</h3>
<p className="text-xs text-zinc-500 line-clamp-3">Key factors included access to coal, steam engine invention, and capital accumulation. The textile industry was the first to industrialize...</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-[10px] text-zinc-400">Oct 24, 2023</span>
<span className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-red-500">
<span className="iconify" data-icon="lucide:trash-2" data-width="14"></span>
</span>
</div>
</div>

<div className="group relative p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:shadow-sm transition-all cursor-pointer">
<h3 className="font-medium text-sm text-zinc-900 dark:text-white mb-2">Math: Calculus Formulas</h3>
<p className="text-xs text-zinc-500 line-clamp-3">Derivative of sin(x) is cos(x). Integral of 1/x is ln|x| + C. Chain rule: f'(g(x)) * g'(x)...</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-[10px] text-zinc-400">Oct 22, 2023</span>
<span className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-red-500">
<span className="iconify" data-icon="lucide:trash-2" data-width="14"></span>
</span>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden absolute inset-0 overflow-y-auto bg-zinc-50 dark:bg-zinc-950 pt-[53px] md:pt-0 pb-[60px] md:pb-0" id="view-settings">
<div className="max-w-2xl mx-auto p-6 space-y-6">
<div className="mb-6">
<h2 className="text-lg font-medium tracking-tight text-zinc-900 dark:text-white">Settings</h2>
<p className="text-sm text-zinc-500">Customize your study environment.</p>
</div>
<div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
<div className="p-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-300">
<span className="iconify" data-icon="lucide:moon" data-width="18"></span>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 dark:text-white">Dark Mode</h3>
<p className="text-xs text-zinc-500">Easier on the eyes at night.</p>
</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-300" id="darkModeToggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-300 cursor-pointer" htmlFor="darkModeToggle"></label>
</input></div>
</div>
<div className="p-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-300">
<span className="iconify" data-icon="lucide:languages" data-width="18"></span>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 dark:text-white">Language</h3>
<p className="text-xs text-zinc-500">AI response language.</p>
</div>
</div>
<select className="text-xs bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-md px-2 py-1 outline-none">
<option>English</option>
<option>Hindi</option>
<option>Spanish</option>
</select>
</div>
<div className="p-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-300">
<span className="iconify" data-icon="lucide:bell" data-width="18"></span>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 dark:text-white">Daily Reminders</h3>
<p className="text-xs text-zinc-500">Get notified to study.</p>
</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-300" id="reminderToggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-300 cursor-pointer" htmlFor="reminderToggle"></label>
</input></div>
</div>
<div className="p-4 flex items-center justify-between hover:bg-red-50 dark:hover:bg-red-900/10 cursor-pointer transition-colors" onclick="clearData()">
<div className="flex items-center gap-3">
<div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg text-red-600 dark:text-red-400">
<span className="iconify" data-icon="lucide:trash" data-width="18"></span>
</div>
<div>
<h3 className="text-sm font-medium text-red-600 dark:text-red-400">Clear Data</h3>
<p className="text-xs text-zinc-500">Delete local history &amp; notes.</p>
</div>
</div>
<span className="iconify text-zinc-400" data-icon="lucide:chevron-right" data-width="16"></span>
</div>
</div>
</div>
</div>

<nav className="md:hidden fixed bottom-0 w-full bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex justify-around py-3 z-30 pb-safe">
<button className="mobile-nav-item flex flex-col items-center gap-1 text-zinc-400 active text-indigo-600 dark:text-indigo-400" id="mob-chat" onclick="switchTab('chat')">
<span className="iconify" data-icon="lucide:message-square" data-width="20"></span>
<span className="text-[10px] font-medium">Chat</span>
</button>
<button className="mobile-nav-item flex flex-col items-center gap-1 text-zinc-400" id="mob-tools" onclick="switchTab('tools')">
<span className="iconify" data-icon="lucide:wrench" data-width="20"></span>
<span className="text-[10px] font-medium">Tools</span>
</button>
<button className="mobile-nav-item flex flex-col items-center gap-1 text-zinc-400" id="mob-image" onclick="switchTab('image')">
<span className="iconify" data-icon="lucide:image" data-width="20"></span>
<span className="text-[10px] font-medium">Image</span>
</button>
<button className="mobile-nav-item flex flex-col items-center gap-1 text-zinc-400" id="mob-notes" onclick="switchTab('notes')">
<span className="iconify" data-icon="lucide:notebook" data-width="20"></span>
<span className="text-[10px] font-medium">Notes</span>
</button>
</nav>
</main>


    </>
  );
}
