import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Mermaid
        mermaid.initialize({ startOnLoad: false, theme: 'neutral' });

        // --- 1. THE BACKEND LOGIC (Simulated Pipeline) ---
        
        // This simulates the function requested: async function processYouTubePipeline(videoUrl)
        const LDL_AI_PLAYLIST_VAR = "PL123456789"; 

        async function processYouTubePipeline(videoUrl) {
            console.log("Status: Detecting new video...");
            
            // 1. Fetch Context (Simulated)
            // In production: const videoData = await fetchVideoData(videoUrl);
            const videoData = {
                thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
                url: videoUrl
            };

            // 2. Prepare Gemini Prompt (Actual string structure)
            // Note: In a real backend, this string is sent to the Gemini API Client
            const systemInstruction = `
                Analyze the provided YouTube video. Output the result strictly as a valid JSON object with the following schema: 
                { 
                    'meta': {'title': '', 'channel': '', 'category': '', 'abstract': '', 'date': '', 'keywords': []}, 
                    'transcription': {'preview': 'First 200 chars...', 'full': '...'}, 
                    'summary': {'text': '', 'actionable_tasks': []}, 
                    'resources': [{'name': 'Tool/Site Name', 'url': '...'}], 
                    'visualization': {'mermaid_code': '...'} 
                }
            `;

            console.log("Sending to Gemini with instruction:", systemInstruction);

            // 3. Call Gemini (Simulated Delay & Response)
            await new Promise(r => setTimeout(r, 1500)); // Simulate network latency

            // Mocked Gemini Response
            const geminiResponse = JSON.stringify({
                meta: {
                    title: "The Future of Generative AI Agents",
                    channel: "NextGen Code",
                    category: "ldl_AI",
                    abstract: "An exploration into autonomous agents, how they plan, reason, and execute complex workflows without human intervention.",
                    date: "Oct 27, 2023",
                    keywords: ["Agents", "AutoGPT", "Workflow"]
                },
                transcription: {
                    preview: "Welcome back to the channel. Today we are discussing the next evolution of large language models: autonomous agents. Unlike standard chatbots that wait for a prompt, agents can loop through reasoning steps...",
                    full: "Welcome back to the channel. Today we are discussing the next evolution of large language models: autonomous agents. Unlike standard chatbots that wait for a prompt, agents can loop through reasoning steps. We will define the cognitive architecture required for this. It starts with Perception, then Memory, followed by Planning and finally Action. <br><br>The key challenge is the context window limiting short-term memory. We solve this using vector databases for long-term retrieval. Let's look at the implementation using LangChain and Python..."
                },
                summary: {
                    text: "The video breaks down the architecture of autonomous AI agents, focusing on the feedback loop between Perception, Memory, Planning, and Action. It highlights the use of Vector DBs for long-term memory persistence.",
                    actionable_tasks: [
                        "Set up a Vector Database (Pinecone/Weaviate).",
                        "Define the Agent's Goal Scope.",
                        "Implement the ReAct pattern for reasoning."
                    ]
                },
                resources: [
                    { name: "LangChain Docs", url: "#" },
                    { name: "Pinecone Vector DB", url: "#" },
                    { name: "AutoGPT Repo", url: "#" }
                ],
                visualization: {
                    mermaid_code: `graph TD; A[User Goal] --> B{Agent Loop}; B -->|Reasoning| C[Plan]; C --> D[Execute]; D --> E[Observation]; E --> B; B -->|Success| F[Finish]; style B fill:#f4f4f5,stroke:#a1a1aa,stroke-width:1.5px`
                }
            });

            const parsedData = JSON.parse(geminiResponse);

            // 4. Create UI Object
            const gridItem = {
                id: `vid_${Date.now()}`,
                image: videoData.thumbnail,
                title: parsedData.meta.title,
                category: parsedData.meta.category,
                channel: parsedData.meta.channel,
                date: parsedData.meta.date,
                abstract: parsedData.meta.abstract,
                payload: parsedData // Storing full analysis
            };

            return gridItem;
        }

        // --- 2. FRONTEND LOGIC (Rendering) ---

        // Render Grid Item
        function renderGridItem(item) {
            const container = document.getElementById('grid-container');
            const article = document.createElement('article');
            article.className = "group relative flex flex-col bg-white border border-zinc-200 rounded-lg overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-zinc-300 transition-all duration-300 cursor-pointer animate-fade-in-up";
            article.onclick = () => openModal(item);
            
            article.innerHTML = `
                <div class="relative aspect-video w-full overflow-hidden bg-zinc-100">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out">
                    <div class="absolute top-2 left-2 bg-emerald-500/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm">NEW</div>
                </div>
                <div class="p-4 flex flex-col h-full justify-between">
                    <div>
                        <div class="flex items-center gap-2 mb-2">
                            <span class="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100 text-[10px] font-medium uppercase tracking-wider">${item.category}</span>
                            <span class="text-[10px] text-zinc-400">${item.date}</span>
                        </div>
                        <h3 class="text-sm font-semibold text-zinc-900 leading-snug mb-1 tracking-tight group-hover:text-purple-600 transition-colors">${item.title}</h3>
                        <p class="text-xs text-zinc-500 line-clamp-2">${item.abstract}</p>
                    </div>
                    <div class="mt-4 flex items-center gap-2 pt-3 border-t border-zinc-100">
                        <span class="iconify text-zinc-400" data-icon="lucide:monitor-play" data-width="14" data-stroke-width="1.5"></span>
                        <span class="text-xs text-zinc-500 font-medium">${item.channel}</span>
                    </div>
                </div>
            `;
            
            // Insert after the first item (preserving the example)
            if(container.children.length > 0) {
                container.insertBefore(article, container.children[1]);
            } else {
                container.appendChild(article);
            }
        }

        // Render Modal Content
        function renderPopup(data) {
            const safeMermaidId = `mermaid-${Math.floor(Math.random() * 10000)}`;
            
            return `
                <div class="grid grid-cols-1 lg:grid-cols-3 h-full lg:h-[80vh]">
                    
                    <!-- LEFT COLUMN: Main Content (Scrollable) -->
                    <div class="lg:col-span-2 overflow-y-auto custom-scrollbar border-b lg:border-b-0 lg:border-r border-zinc-200 bg-white">
                        
                        <!-- Video Embed Area -->
                        <div class="w-full aspect-video bg-zinc-900 sticky top-0 z-10">
                            <iframe class="w-full h-full" src="https://www.youtube.com/embed/FaO34493g88?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div class="p-6 sm:p-8 space-y-8">
                            
                            <!-- Header Info -->
                            <div>
                                <h2 class="text-xl font-semibold tracking-tight text-zinc-900 mb-2">${data.meta.title}</h2>
                                <p class="text-sm text-zinc-500 leading-relaxed">${data.meta.abstract}</p>
                            </div>

                            <!-- Visualization -->
                            <div class="bg-zinc-50 rounded-lg border border-zinc-100 p-4">
                                <div class="flex items-center gap-2 mb-4 border-b border-zinc-200 pb-2">
                                    <span class="iconify text-purple-600" data-icon="lucide:network" data-width="16"></span>
                                    <span class="text-xs font-semibold text-zinc-900 uppercase tracking-wide">Logic Flow</span>
                                </div>
                                <div class="mermaid flex justify-center text-xs" id="${safeMermaidId}">
                                    ${data.visualization.mermaid_code}
                                </div>
                            </div>

                            <!-- Transcript Section -->
                            <div>
                                <div class="flex items-center justify-between mb-3">
                                    <h3 class="text-sm font-semibold text-zinc-900">Transcript Analysis</h3>
                                    <span class="text-[10px] bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded border border-zinc-200">AI Generated</span>
                                </div>
                                <div class="text-sm text-zinc-600 leading-relaxed space-y-2">
                                    <p id="transcript-preview">${data.transcription.preview}</p>
                                    <div id="transcript-full" class="hidden mt-2 pt-2 border-t border-dashed border-zinc-200">
                                        ${data.transcription.full}
                                    </div>
                                    <button onclick="toggleTranscript()" id="transcript-btn" class="text-xs font-medium text-purple-600 hover:text-purple-700 flex items-center gap-1 mt-2">
                                        Read Full Transcript 
                                        <span class="iconify" data-icon="lucide:chevron-down" data-width="12"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- RIGHT COLUMN: Metadata & Tools (Scrollable) -->
                    <div class="lg:col-span-1 bg-zinc-50/50 overflow-y-auto custom-scrollbar">
                        <div class="p-6 sm:p-8 space-y-8">
                            
                            <!-- Summary & Tasks -->
                            <div>
                                <div class="flex items-center gap-2 mb-3">
                                    <span class="iconify text-zinc-900" data-icon="lucide:sparkles" data-width="16"></span>
                                    <h3 class="text-sm font-semibold text-zinc-900">Key Insights</h3>
                                </div>
                                <div class="bg-white p-4 rounded-lg border border-zinc-200 shadow-sm">
                                    <p class="text-xs text-zinc-600 mb-4 leading-relaxed">${data.summary.text}</p>
                                    <ul class="space-y-2">
                                        ${data.summary.actionable_tasks.map(task => `
                                            <li class="flex items-start gap-2">
                                                <span class="iconify text-green-600 mt-0.5 shrink-0" data-icon="lucide:check-circle-2" data-width="14"></span>
                                                <span class="text-xs text-zinc-700 font-medium">${task}</span>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>

                            <!-- Resources -->
                            <div>
                                <div class="flex items-center gap-2 mb-3">
                                    <span class="iconify text-zinc-900" data-icon="lucide:link" data-width="16"></span>
                                    <h3 class="text-sm font-semibold text-zinc-900">Resources & Tools</h3>
                                </div>
                                <div class="flex flex-col gap-2">
                                    ${data.resources.map(r => `
                                        <a href="${r.url}" class="group flex items-center justify-between p-3 bg-white border border-zinc-200 rounded-md hover:border-zinc-300 hover:shadow-sm transition-all">
                                            <span class="text-xs font-medium text-zinc-700 group-hover:text-zinc-900">${r.name}</span>
                                            <span class="iconify text-zinc-400 group-hover:text-zinc-600" data-icon="lucide:external-link" data-width="12"></span>
                                        </a>
                                    `).join('')}
                                </div>
                            </div>

                            <!-- Tags -->
                            <div>
                                <h3 class="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Keywords</h3>
                                <div class="flex flex-wrap gap-2">
                                    ${data.meta.keywords.map(k => `
                                        <span class="px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-xs text-zinc-600 font-medium">${k}</span>
                                    `).join('')}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            `;
        }

        // --- 3. UI INTERACTION HELPERS ---

        function toggleTranscript() {
            const fullText = document.getElementById('transcript-full');
            const btn = document.getElementById('transcript-btn');
            
            if (fullText.classList.contains('hidden')) {
                fullText.classList.remove('hidden');
                btn.innerHTML = `Collapse <span class="iconify" data-icon="lucide:chevron-up" data-width="12"></span>`;
            } else {
                fullText.classList.add('hidden');
                btn.innerHTML = `Read Full Transcript <span class="iconify" data-icon="lucide:chevron-down" data-width="12"></span>`;
            }
        }

        async function openModal(dataOrId) {
            const modal = document.getElementById('knowledge-modal');
            const injector = document.getElementById('modal-content-injector');
            
            modal.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => modal.classList.remove('opacity-0'), 10);
            
            let data;

            // Handle static mock data vs dynamic object
            if (dataOrId === 'mock_1') {
                // Static fallback data for the pre-rendered HTML card
                data = {
                    meta: { 
                        title: "Understanding Large Language Models in Production", 
                        abstract: "A deep dive into optimizing inference costs and latency for enterprise LLM deployment.", 
                        keywords: ["LLM", "DevOps", "Inference"] 
                    },
                    transcription: { 
                        preview: "In this talk we cover the basics of quantization and how it affects model accuracy vs speed...", 
                        full: "In this talk we cover the basics of quantization and how it affects model accuracy vs speed. We will look at GGML vs GPTQ formats. <br><br>Later we discuss batching strategies for high throughput APIs." 
                    },
                    summary: { 
                        text: "Overview of LLM deployment strategies focusing on cost reduction.", 
                        actionable_tasks: ["Use 4-bit quantization", "Implement continuous batching"] 
                    },
                    resources: [{name: "HuggingFace Leaderboard", url: "#"}],
                    visualization: { mermaid_code: "graph LR; A[Model] --> B{Quantize?}; B -- Yes --> C[4-bit]; B -- No --> D[FP16];" }
                };
            } else {
                data = dataOrId.payload;
            }

            injector.innerHTML = renderPopup(data);
            
            // Re-run Mermaid after injection
            await mermaid.run({
                querySelector: '.mermaid'
            });
        }

        function closeModal() {
            const modal = document.getElementById('knowledge-modal');
            modal.classList.add('opacity-0');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }

        // Trigger the pipeline simulation
        async function simulateNewVideoArrival() {
            const btn = document.querySelector('button[onclick="simulateNewVideoArrival()"]');
            const originalText = btn.innerHTML;
            
            // Loading State
            btn.innerHTML = `<span class="iconify animate-spin" data-icon="lucide:loader-2" data-width="14"></span> Processing...`;
            btn.disabled = true;

            const newData = await processYouTubePipeline("https://youtube.com/watch?v=simulation");
            renderGridItem(newData);

            // Reset Button
            btn.innerHTML = `<span class="iconify" data-icon="lucide:check" data-width="14"></span> Done`;
            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalText;
            }, 2000);
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-zinc-800" data-icon="lucide:flask-conical" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-sm font-semibold tracking-tight text-zinc-900">Knowledge Distiller</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-md">
<span className="iconify text-zinc-400" data-icon="lucide:youtube" data-strokeWidth="1.5" data-width="14"></span>
<span className="text-xs font-medium text-zinc-500">Monitoring: ldl_AI</span>
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse ml-2"></div>
</div>
<button className="group flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-3 py-1.5 rounded-md transition-all shadow-sm" onclick="simulateNewVideoArrival()">
<span className="iconify" data-icon="lucide:refresh-cw" data-strokeWidth="1.5" data-width="14"></span>
<span className="text-xs font-medium">Run Pipeline</span>
</button>
</div>
</div>
</nav>

<main className="mx-auto max-w-7xl px-6 py-12">
<div className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Distilled Knowledge</h1>
<p className="text-sm text-zinc-500 mt-1">Automated synthesis of YouTube content into actionable intelligence.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="grid-container">

<article className="group relative flex flex-col bg-white border border-zinc-200 rounded-lg overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-zinc-300 transition-all duration-300 cursor-pointer" onclick="openModal('mock_1')">
<div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
<img alt="Thumbnail" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-medium px-1.5 py-0.5 rounded">12:40</div>
</div>
<div className="p-4 flex flex-col h-full justify-between">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-medium uppercase tracking-wider">AI Models</span>
<span className="text-[10px] text-zinc-400">Oct 24, 2023</span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 leading-snug mb-1 tracking-tight group-hover:text-blue-600 transition-colors">Understanding Large Language Models in Production</h3>
<p className="text-xs text-zinc-500 line-clamp-2">A deep dive into optimizing inference costs and latency for enterprise LLM deployment.</p>
</div>
<div className="mt-4 flex items-center gap-2 pt-3 border-t border-zinc-100">
<span className="iconify text-zinc-400" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="14"></span>
<span className="text-xs text-zinc-500 font-medium">Tech Talk Daily</span>
</div>
</div>
</article>

</div>
</main>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-50 hidden opacity-0 transition-opacity duration-300" id="knowledge-modal" role="dialog">

<div className="fixed inset-0 bg-zinc-900/20 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>

<div className="fixed inset-0 z-10 overflow-y-auto custom-scrollbar">
<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
<div className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl border border-zinc-200">

<button className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-zinc-100 text-zinc-500 transition-colors border border-zinc-100" onclick="closeModal()">
<span className="iconify" data-icon="lucide:x" data-strokeWidth="1.5" data-width="18"></span>
</button>

<div className="flex flex-col h-[85vh] sm:h-auto" id="modal-content-injector">

</div>
</div>
</div>
</div>
</div>



    </>
  );
}
