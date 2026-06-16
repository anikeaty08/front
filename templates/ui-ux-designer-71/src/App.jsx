import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const input = document.getElementById('chat-input');
            const sendBtn = document.getElementById('chat-send');
            const chatHistory = document.getElementById('chat-history');
            const typingIndicator = document.getElementById('typing-indicator');

            // Hardcoded Knowledge Base to prevent hallucinations
            const knowledgeBase = [
                {
                    keywords: ['hello', 'hi', 'hey', 'greetings', 'start'],
                    response: "Hello! I'm Tithee's virtual assistant. I can help you find specific information about her background, experience, projects, or skills. What would you like to know?"
                },
                {
                    keywords: ['background', 'overview', 'who', 'about'],
                    response: "Tithee Bhojkar is a UI/UX & Product Designer currently based at Iowa State University. She specializes in creating intuitive user interfaces, design systems, and conducting user research. Her goal is to build accessible and user-friendly digital experiences."
                },
                {
                    keywords: ['education', 'degree', 'study', 'university', 'college', 'iowa', 'karnavati'],
                    response: "<ul class='list-disc pl-4 space-y-1'><li><b>Master's in Human Computer Interaction</b> – Iowa State University (Jan 2025 - Present)</li><li><b>Bachelor's in Visual Comm & Graphic Design</b> – Karnavati University, India (Jul 2020 - Jun 2024)</li></ul>"
                },
                {
                    keywords: ['experience', 'work', 'job', 'intern', 'career'],
                    response: "Tithee has experience across multiple design roles:<br><br><ul class='list-disc pl-4 space-y-1'><li><b>Junior Graphic Designer Intern</b> at Out and Out Design (May 2023 - Dec 2024)</li><li><b>UI Designer</b> at Deciml (Spare Change Investment App)</li><li><b>Web and Visual Designer</b> at Aretto (Kids Footwear Brand)</li></ul>"
                },
                {
                    keywords: ['deciml', 'investment'],
                    response: "At <b>Deciml</b> (a Spare Change Investment App), Tithee worked as a UI Designer. She focused on:<br><ul class='list-disc pl-4 space-y-1'><li>Designing intuitive user interfaces for the mobile app</li><li>Supporting responsive website design and usability improvements</li><li>Creating daily social media visuals to increase engagement</li></ul>"
                },
                {
                    keywords: ['aretto', 'footwear', 'kids'],
                    response: "At <b>Aretto</b> (a Kids Footwear Brand), Tithee worked as a Web and Visual Designer where she designed and developed the brand website, created brochures and merchandise, and focused on conversion-driven visual design."
                },
                {
                    keywords: ['out and out', 'internship', 'graphic'],
                    response: "During her internship at <b>Out and Out Design</b> in Pune, Tithee collaborated with teams on branding and packaging, developed corporate identity concepts, and contributed to editorial layouts and visual storytelling."
                },
                {
                    keywords: ['projects', 'portfolio', 'work'],
                    response: "Tithee's key academic projects include:<br><ul class='list-disc pl-4 space-y-1'><li><b>Social Media & Web Manager</b> for ISU HCI Dept</li><li><b>GiveHub:</b> A UX/UI donation platform for NGOs</li><li><b>Modus Exhibition:</b> Installation photography and documentation</li></ul><br>Ask me about specific projects like 'GiveHub' for more details."
                },
                {
                    keywords: ['givehub', 'donation', 'ngo'],
                    response: "<b>GiveHub</b> was a UX/UI project where Tithee designed a centralized donation platform for NGOs in Pune. She conducted user research, usability testing, and iterated on the design to include transparent donation tracking."
                },
                {
                    keywords: ['skills', 'tools', 'software', 'figma', 'design', 'research'],
                    response: "Tithee's technical skills include:<br><ul class='list-disc pl-4 space-y-1'><li><b>Design:</b> UI/UX, Design Systems, Wireframing, Prototyping, Interaction Design, WCAG.</li><li><b>Research:</b> Usability Testing, User Interviews, Personas, Journey Mapping.</li><li><b>Tools:</b> Figma, Adobe Suite, Miro, Basic HTML/Python.</li></ul>"
                },
                {
                    keywords: ['contact', 'email', 'phone', 'reach', 'hire'],
                    response: "You can reach Tithee at:<br>Email: <b>titheeb@iastate.edu</b><br>Phone: <b>+1 (339) 242-7983</b>"
                },
                {
                    keywords: ['service', 'offer', 'freelance'],
                    response: "Tithee offers services in UI/UX Design, Product Design, User Research, Wireframing, Prototyping, and Visual Identity creation. She is currently available for new opportunities."
                },
                {
                    keywords: ['certificate', 'certifications', 'coursera', 'ibm', 'google'],
                    response: "Tithee holds several certifications:<br><ul class='list-disc pl-4 space-y-1'><li>GenAI for Executives & Business Leaders (IBM/Coursera)</li><li>Interaction Intelligence: Advanced Prototyping with Figma (Coursera)</li><li>Google Project Management Professional Certificate</li><li>UI/UX Design Certification from Studio Incubator</li></ul>"
                }
            ];

            const fallbackResponse = "I don't see that information listed here, but feel free to contact me directly at titheeb@iastate.edu.";

            // Helper to get response
            function getBotResponse(userText) {
                const lowerText = userText.toLowerCase();
                for (let item of knowledgeBase) {
                    if (item.keywords.some(kw => lowerText.includes(kw))) {
                        return item.response;
                    }
                }
                return fallbackResponse;
            }

            // UI Adjustments for textarea
            input.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = (this.scrollHeight) + 'px';
                
                if (this.value.trim().length > 0) {
                    sendBtn.disabled = false;
                } else {
                    sendBtn.disabled = true;
                }
            });

            // Handle Enter key (Shift+Enter for new line)
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    if (!sendBtn.disabled) {
                        handleSend();
                    }
                }
            });

            sendBtn.addEventListener('click', handleSend);

            function handleSend() {
                const text = input.value.trim();
                if (!text) return;

                // 1. Add User Message
                appendMessage(text, 'user');
                
                // 2. Reset Input
                input.value = '';
                input.style.height = 'auto';
                sendBtn.disabled = true;

                // 3. Show Typing Indicator
                typingIndicator.classList.remove('hidden');
                typingIndicator.classList.add('flex');
                scrollToBottom();

                // 4. Simulate delay and get Bot Response
                setTimeout(() => {
                    typingIndicator.classList.remove('flex');
                    typingIndicator.classList.add('hidden');
                    const response = getBotResponse(text);
                    appendMessage(response, 'bot');
                }, 800 + Math.random() * 500); // Realistic 0.8s - 1.3s delay
            }

            function appendMessage(text, sender) {
                const msgDiv = document.createElement('div');
                msgDiv.className = `max-w-[90%] md:max-w-[80%] flex items-start gap-3 animate-fade-in-up ${sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`;

                let innerContent = '';

                if (sender === 'user') {
                    innerContent = `
                        <div class="bg-neutral-800 text-gray-200 px-4 py-3 rounded-2xl rounded-tr-sm text-sm font-light leading-relaxed shadow-sm">
                            ${text.replace(/\n/g, '<br>')}
                        </div>
                    `;
                } else {
                    innerContent = `
                        <div class="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700">
                            <iconify-icon icon="solar:code-scan-linear" stroke-width="1.5" class="text-fuchsia-500"></iconify-icon>
                        </div>
                        <div class="bg-fuchsia-500/10 border border-fuchsia-500/20 text-gray-300 px-4 py-3 rounded-2xl rounded-tl-sm text-sm font-light leading-relaxed">
                            ${text}
                        </div>
                    `;
                }

                msgDiv.innerHTML = innerContent;
                chatHistory.appendChild(msgDiv);
                scrollToBottom();
            }

            function scrollToBottom() {
                chatHistory.scrollTo({
                    top: chatHistory.scrollHeight,
                    behavior: 'smooth'
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full md:w-20 lg:w-24 h-auto md:h-full shrink-0 border-b md:border-b-0 md:border-r border-neutral-800 bg-white/[0.01] backdrop-blur-xl flex md:flex-col items-center justify-between p-4 md:py-8 z-50 shadow-sm">

<a className="text-fuchsia-500 font-sans font-normal tracking-tight text-xl md:text-2xl uppercase hover:scale-105 transition-transform" href="#">
            TB
        </a>

<nav className="flex md:flex-col gap-6 md:gap-10">
<a className="text-gray-500 hover:text-fuchsia-500 transition-colors group relative" href="#hero">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-gray-500 hover:text-fuchsia-500 transition-colors group relative" href="#experience">
<iconify-icon className="text-2xl" icon="solar:briefcase-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-gray-500 hover:text-fuchsia-500 transition-colors group relative" href="#projects">
<iconify-icon className="text-2xl" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-gray-500 hover:text-fuchsia-500 transition-colors group relative" href="#skills">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</a>
</nav>

<div className="hidden md:block">
<a className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-gray-900 text-gray-400 hover:border-fuchsia-500 hover:text-fuchsia-500 transition-all shadow-sm" href="mailto:titheeb@iastate.edu">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</aside>

<main className="flex-1 h-full overflow-y-auto p-4 md:p-10 lg:p-16 relative scroll-smooth animate-slide-all">

<div className="fixed top-0 right-0 w-[800px] h-[800px] bg-fuchsia-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
<div className="fixed bottom-0 left-24 w-[600px] h-[600px] bg-gray-800/30 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>
<div className="max-w-7xl mx-auto space-y-12 md:space-y-16 relative z-10 pb-20">

<section className="flex flex-col justify-center pb-8 pt-8 md:pt-12" id="hero">
<div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-neutral-800 bg-white/[0.02] backdrop-blur-sm shadow-sm w-max">
<span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse"></span>
<span className="text-xs text-gray-300 font-light uppercase tracking-widest">Available for New Opportunities</span>
</div>
<h1 className="font-inter font-extralight tracking-normal text-5xl md:text-6xl text-gray-100 mb-6 leading-tight max-w-4xl">
                    Tithee Bhojkar
                </h1>
<h2 className="font-inter font-extralight tracking-normal text-2xl md:text-3xl text-fuchsia-500 mb-10">
                    UI/UX &amp; Product Designer
                </h2>
<div className="flex flex-wrap items-center gap-6 md:gap-8 text-sm md:text-base text-gray-400 font-light">
<a className="flex items-center gap-2 hover:text-fuchsia-500 transition-colors w-max" href="mailto:titheeb@iastate.edu">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                        titheeb@iastate.edu
                    </a>
<a className="flex items-center gap-2 hover:text-fuchsia-500 transition-colors w-max" href="tel:+13392427983">
<iconify-icon className="text-xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                        +1 (339) 242-7983
                    </a>
<span className="flex items-center gap-2 w-max">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                        Iowa State University, USA
                    </span>
</div>
</section>

<section className="w-full max-w-4xl mx-auto border-b border-neutral-800 pb-12 mb-12" id="ai-chat-section">
<div className="bg-white/[0.02] backdrop-blur-xl border border-neutral-800 rounded-3xl overflow-hidden shadow-lg flex flex-col">

<div className="px-6 py-4 border-b border-neutral-800/50 flex items-center gap-3 bg-gray-900/50">
<iconify-icon className="text-xl text-fuchsia-500" icon="solar:smart-speaker-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="text-sm font-normal text-gray-200">Ask about my portfolio</h3>
<p className="text-xs font-light text-gray-500">AI Assistant powered by my resume</p>
</div>
</div>

<div className="p-4 md:p-6 h-[320px] md:h-[400px] overflow-y-auto flex flex-col gap-4" id="chat-history">

<div className="self-start max-w-[90%] md:max-w-[80%] flex items-start gap-3 animate-fade-in-up">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700">
<iconify-icon className="text-fuchsia-500" icon="solar:code-scan-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-fuchsia-500/10 border border-fuchsia-500/20 text-gray-300 px-4 py-3 rounded-2xl rounded-tl-sm text-sm font-light leading-relaxed">
                                Hi there! I'm Tithee's virtual assistant. You can ask me about her experience, education, projects, skills, or how to contact her. What would you like to know?
                            </div>
</div>
</div>

<div className="px-6 pb-2 hidden items-center gap-2" id="typing-indicator">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700">
<iconify-icon className="text-fuchsia-500" icon="solar:code-scan-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-fuchsia-500/10 border border-fuchsia-500/20 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full typing-dot opacity-70"></span>
<span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full typing-dot opacity-70"></span>
<span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full typing-dot opacity-70"></span>
</div>
</div>

<div className="p-4 bg-gray-900/50 border-t border-neutral-800 flex items-end gap-3">
<textarea className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl px-4 py-3 text-sm font-light text-gray-200 focus:outline-none focus:border-fuchsia-500 focus:bg-gray-900 resize-none max-h-[120px] transition-all placeholder:text-neutral-600" id="chat-input" placeholder="Type your question here..." rows="1"></textarea>
<button className="p-3 bg-fuchsia-500 text-white rounded-xl hover:bg-fuchsia-600 disabled:opacity-30 disabled:hover:bg-fuchsia-500 transition-all flex items-center justify-center shrink-0 w-11 h-11" disabled="" id="chat-send">
<iconify-icon className="text-xl" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

<div className="lg:col-span-7 space-y-6 md:space-y-8">

<section className="bg-white/[0.02] backdrop-blur-xl border border-neutral-800 rounded-3xl p-6 md:p-10 shadow-sm hover:border-neutral-700 transition-colors group" id="experience">
<div className="flex items-center gap-4 mb-10 border-b border-neutral-800 pb-6">
<iconify-icon className="text-3xl text-fuchsia-500" icon="solar:briefcase-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-inter font-extralight tracking-normal text-2xl md:text-3xl text-gray-100">Experience</h3>
</div>
<div className="space-y-10">

<article className="relative">
<div className="absolute -left-[27px] top-2 w-1.5 h-1.5 rounded-full bg-fuchsia-500 hidden md:block"></div>
<h4 className="text-base md:text-lg font-normal text-gray-200 mb-1">Junior Graphic Designer Intern</h4>
<div className="text-sm font-light text-fuchsia-500 mb-3 flex flex-wrap gap-2 items-center">
<span>Out and Out Design, Pune</span>
<span className="text-gray-600">|</span>
<span className="text-gray-400">May 2023 – Dec 2024</span>
</div>
<ul className="space-y-2 text-sm md:text-base text-gray-400 font-light border-l border-neutral-800/50 pl-4">
<li className="relative before:content-[''] before:absolute before:-left-4 before:top-2.5 before:w-1 before:h-[1px] before:bg-neutral-700">Collaborated with cross-functional teams to create branding and packaging solutions</li>
<li className="relative before:content-[''] before:absolute before:-left-4 before:top-2.5 before:w-1 before:h-[1px] before:bg-neutral-700">Developed corporate identity concepts enhancing brand recognition</li>
<li className="relative before:content-[''] before:absolute before:-left-4 before:top-2.5 before:w-1 before:h-[1px] before:bg-neutral-700">Contributed to editorial layouts, illustrations, and visual storytelling</li>
</ul>
</article>

<article className="relative">
<div className="absolute -left-[27px] top-2 w-1.5 h-1.5 rounded-full bg-neutral-700 hidden md:block group-hover:bg-fuchsia-500/50 transition-colors"></div>
<h4 className="text-base md:text-lg font-normal text-gray-200 mb-1">UI Designer</h4>
<div className="text-sm font-light text-fuchsia-500 mb-3 flex flex-wrap gap-2 items-center">
<span>Deciml</span>
<span className="text-gray-600">|</span>
<span className="text-gray-400">Spare Change Investment App</span>
</div>
<ul className="space-y-2 text-sm md:text-base text-gray-400 font-light border-l border-neutral-800/50 pl-4">
<li className="relative before:content-[''] before:absolute before:-left-4 before:top-2.5 before:w-1 before:h-[1px] before:bg-neutral-700">Designed intuitive user interfaces for the mobile app</li>
<li className="relative before:content-[''] before:absolute before:-left-4 before:top-2.5 before:w-1 before:h-[1px] before:bg-neutral-700">Supported responsive website design and usability improvements</li>
<li className="relative before:content-[''] before:absolute before:-left-4 before:top-2.5 before:w-1 before:h-[1px] before:bg-neutral-700">Created daily social media visuals to increase engagement</li>
</ul>
</article>

<article className="relative">
<div className="absolute -left-[27px] top-2 w-1.5 h-1.5 rounded-full bg-neutral-700 hidden md:block group-hover:bg-fuchsia-500/50 transition-colors"></div>
<h4 className="text-base md:text-lg font-normal text-gray-200 mb-1">Web and Visual Designer</h4>
<div className="text-sm font-light text-fuchsia-500 mb-3 flex flex-wrap gap-2 items-center">
<span>Aretto</span>
<span className="text-gray-600">|</span>
<span className="text-gray-400">Kids Footwear Brand</span>
</div>
<ul className="space-y-2 text-sm md:text-base text-gray-400 font-light border-l border-neutral-800/50 pl-4">
<li className="relative before:content-[''] before:absolute before:-left-4 before:top-2.5 before:w-1 before:h-[1px] before:bg-neutral-700">Designed and developed the brand website</li>
<li className="relative before:content-[''] before:absolute before:-left-4 before:top-2.5 before:w-1 before:h-[1px] before:bg-neutral-700">Created website cards, brochures, and merchandise</li>
<li className="relative before:content-[''] before:absolute before:-left-4 before:top-2.5 before:w-1 before:h-[1px] before:bg-neutral-700">Focused on user-friendly and conversion-driven visual design</li>
</ul>
</article>
</div>
</section>

<section className="bg-white/[0.02] backdrop-blur-xl border border-neutral-800 rounded-3xl p-6 md:p-10 shadow-sm hover:border-neutral-700 transition-colors group" id="projects">
<div className="flex items-center gap-4 mb-10 border-b border-neutral-800 pb-6">
<iconify-icon className="text-3xl text-fuchsia-500" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-inter font-extralight tracking-normal text-2xl md:text-3xl text-gray-100">Academic Projects</h3>
</div>
<div className="space-y-8">

<div className="p-6 rounded-2xl bg-gray-900/50 border border-neutral-800/50 hover:border-fuchsia-500/30 transition-colors">
<h4 className="text-base md:text-lg font-normal text-gray-200 mb-1">Social Media &amp; Web Manager</h4>
<div className="text-xs font-light text-fuchsia-500 uppercase tracking-widest mb-4">Iowa State University HCI Dept</div>
<p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-3">
                                    Designed, maintained, and updated departmental website content. Created event-based social media visuals and managed content scheduling.
                                </p>
</div>

<div className="p-6 rounded-2xl bg-gray-900/50 border border-neutral-800/50 hover:border-fuchsia-500/30 transition-colors">
<h4 className="text-base md:text-lg font-normal text-gray-200 mb-1">GiveHub</h4>
<div className="text-xs font-light text-fuchsia-500 uppercase tracking-widest mb-4">UX/UI Design Project</div>
<p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-3">
                                    Designed a centralized donation platform for NGOs in Pune, India. Conducted user research, usability testing, and iterative design improvements while integrating transparency features for donation tracking.
                                </p>
</div>

<div className="p-6 rounded-2xl bg-gray-900/50 border border-neutral-800/50 hover:border-fuchsia-500/30 transition-colors">
<h4 className="text-base md:text-lg font-normal text-gray-200 mb-1">Modus Exhibition</h4>
<div className="text-xs font-light text-fuchsia-500 uppercase tracking-widest mb-4">Installation &amp; Visual Documentation</div>
<p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-3">
                                    Led installation photography highlighting self-confidence narratives. Part of the Modus 2022 documentation team focusing on photography and post-production.
                                </p>
</div>
</div>
</section>
</div>

<div className="lg:col-span-5 space-y-6 md:space-y-8">

<section className="bg-white/[0.02] backdrop-blur-xl border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-sm hover:border-neutral-700 transition-colors">
<div className="flex items-center gap-3 mb-8 border-b border-neutral-800 pb-4">
<iconify-icon className="text-2xl text-fuchsia-500" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-inter font-extralight tracking-normal text-2xl text-gray-100">Education</h3>
</div>
<div className="space-y-6">
<div>
<h4 className="text-base font-normal text-gray-200 mb-1">Iowa State University, USA</h4>
<p className="text-sm text-fuchsia-500 font-light mb-1">Master's in Human Computer Interaction</p>
<p className="text-xs text-gray-500 font-light">Jan 2025 - Present (2 years full time)</p>
</div>
<div>
<h4 className="text-base font-normal text-gray-200 mb-1">Karnavati University, India</h4>
<p className="text-sm text-fuchsia-500 font-light mb-1">Bachelor's in Visual Communication and Graphic Design</p>
<p className="text-xs text-gray-500 font-light">Jul 2020 – Jun 2024</p>
</div>
</div>
</section>

<section className="bg-white/[0.02] backdrop-blur-xl border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-sm hover:border-neutral-700 transition-colors" id="skills">
<div className="flex items-center gap-3 mb-8 border-b border-neutral-800 pb-4">
<iconify-icon className="text-2xl text-fuchsia-500" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-inter font-extralight tracking-normal text-2xl text-gray-100">Technical Skills</h3>
</div>
<div className="space-y-6">
<div>
<h4 className="text-sm font-normal text-gray-200 mb-3 uppercase tracking-wider">UI/UX &amp; Product Design</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">Design Systems</span>
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">Wireframing</span>
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">Prototyping</span>
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">Interaction Design</span>
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">Responsive Design</span>
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">WCAG Accessibility</span>
</div>
</div>
<div>
<h4 className="text-sm font-normal text-gray-200 mb-3 uppercase tracking-wider">User Research &amp; Strategy</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">Usability Testing</span>
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">User Interviews &amp; Surveys</span>
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">Personas</span>
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">Journey Mapping</span>
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">Information Architecture</span>
</div>
</div>
<div>
<h4 className="text-sm font-normal text-gray-200 mb-3 uppercase tracking-wider">Tools &amp; Methods</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">Figma / FigJam</span>
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">Adobe Suite</span>
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">Miro</span>
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">Agile</span>
<span className="px-3 py-1.5 bg-gray-900 border border-neutral-800 rounded-lg text-xs text-gray-400 font-light">HTML / Python (Basics)</span>
</div>
</div>
</div>
</section>

<section className="bg-white/[0.02] backdrop-blur-xl border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-sm hover:border-neutral-700 transition-colors">
<div className="flex items-center gap-3 mb-8 border-b border-neutral-800 pb-4">
<iconify-icon className="text-2xl text-fuchsia-500" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-inter font-extralight tracking-normal text-2xl text-gray-100">Certifications</h3>
</div>
<ul className="space-y-4 text-sm md:text-base text-gray-400 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-fuchsia-500 mt-0.5 shrink-0" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span>GenAI for Executives &amp; Business Leaders: An Introduction – IBM (Coursera)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-fuchsia-500 mt-0.5 shrink-0" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span>Interaction Intelligence: Advanced Prototyping with Figma – Coursera</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-fuchsia-500 mt-0.5 shrink-0" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span>Google Project Management Professional Certificate</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-fuchsia-500 mt-0.5 shrink-0" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span>UI/UX Design Certification (3 months) – Studio Incubator, Pune</span>
</li>
</ul>
</section>
</div>
</div>
</div>
</main>



    </>
  );
}
