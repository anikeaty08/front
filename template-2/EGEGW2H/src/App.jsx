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



        // Animation triggers
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.animate-slide-fade, .animate-blur-in, .animate-slide-left, .animate-slide-right, .animate-scale-in').forEach(el => {
            observer.observe(el);
        });

        // Matter.js Physics Animation
        const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Runner } = Matter;

        const canvas = document.getElementById('matter-canvas');
        const engine = Engine.create();
        const world = engine.world;

        engine.world.gravity.y = 0.3;

        const render = Render.create({
            canvas: canvas,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                wireframes: false,
                background: 'transparent',
                showAngleIndicator: false,
                showVelocity: false
            }
        });

        // Create boundaries (invisible walls)
        const boundaries = [
            Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 50, window.innerWidth, 100, { isStatic: true, render: { visible: false } }),
            Bodies.rectangle(-50, window.innerHeight / 2, 100, window.innerHeight, { isStatic: true, render: { visible: false } }),
            Bodies.rectangle(window.innerWidth + 50, window.innerHeight / 2, 100, window.innerHeight, { isStatic: true, render: { visible: false } })
        ];

        World.add(world, boundaries);

        // Create falling letters/symbols
        const letters = ['A', 'I', 'G', 'P', 'T', '{}', '()', '[]', '<>', '/>', '||', '&&', '==', '++', '--', 'ML', 'AI', 'LLM', 'RAG'];
        const fallingObjects = [];

        function createFallingLetter() {
            const letter = letters[Math.floor(Math.random() * letters.length)];
            const x = Math.random() * window.innerWidth;
            const size = Math.random() * 30 + 20;
            
            const letterBody = Bodies.circle(x, -50, size / 2, {
                render: {
                    fillStyle: `hsla(${Math.random() * 60 + 200}, 70%, 60%, 0.1)`,
                    strokeStyle: `hsla(${Math.random() * 60 + 200}, 70%, 60%, 0.3)`,
                    lineWidth: 1
                },
                restitution: 0.3,
                friction: 0.001,
                frictionAir: 0.01
            });

            // Add text rendering
            letterBody.render.text = {
                content: letter,
                color: `hsla(${Math.random() * 60 + 200}, 70%, 60%, 0.2)`,
                size: size * 0.6,
                family: 'Geist, Inter, sans-serif'
            };

            fallingObjects.push(letterBody);
            World.add(world, letterBody);

            // Remove objects that fall too far
            if (fallingObjects.length > 50) {
                const oldObject = fallingObjects.shift();
                World.remove(world, oldObject);
            }
        }

        // Create letters periodically
        setInterval(createFallingLetter, 2000);

        // Custom render to include text
        const originalRender = render;
        render.afterRender = () => {
            const ctx = render.canvas.getContext('2d');
            fallingObjects.forEach(body => {
                if (body.render.text) {
                    ctx.save();
                    ctx.translate(body.position.x, body.position.y);
                    ctx.rotate(body.angle);
                    ctx.fillStyle = body.render.text.color;
                    ctx.font = `${body.render.text.size}px ${body.render.text.family}`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(body.render.text.content, 0, 0);
                    ctx.restore();
                }
            });
        };

        // Handle window resize
        window.addEventListener('resize', () => {
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;
            render.options.width = window.innerWidth;
            render.options.height = window.innerHeight;
        });

        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Initial letters
        for (let i = 0; i < 8; i++) {
            setTimeout(createFallingLetter, i * 300);
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
      

<canvas height="1279" id="matter-canvas" style={{background: `0% 0% / contain transparent`}} width="1323"></canvas>
<div className="content-wrapper">
<div className="container max-w-7xl mx-auto px-6 py-20">

<div className="animate-blur-in animate text-center mb-24">
<div className="mb-8">
<div className="w-28 h-28 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-full mx-auto mb-8 flex items-center justify-center animate-scale-in animate" style={{transitionDelay: `0.2s`}}>
<svg className="w-14 h-14 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
</div>
<h1 className="text-7xl lg:text-8xl font-normal text-white tracking-tighter font-geist mb-6 animate-slide-fade animate" style={{transitionDelay: `0.4s`}}>
                    Alex <span className="gradient-text">Chen</span>
</h1>
<p className="text-lg font-medium text-gray-300 mb-4 animate-slide-fade animate" style={{transitionDelay: `0.6s`}}>Senior Prompt Engineer & AI Strategist</p>
<p className="max-w-3xl text-base text-gray-400 mx-auto leading-relaxed mb-8 animate-slide-fade animate" style={{transitionDelay: `0.8s`}}>
                    Crafting intelligent AI conversations and optimizing language models for enterprise solutions. 
                    Specialized in GPT-4, Claude, and custom model fine-tuning with 5+ years of experience delivering 
                    production-ready AI systems for Fortune 500 companies.
                </p>
<div className="flex flex-wrap justify-center gap-3 mt-8 mb-12 animate-scale-in animate" style={{transitionDelay: `1s`}}>
<div className="glass-card rounded-full px-6 py-2">
<span className="text-emerald-400 text-sm font-medium">Available for Projects</span>
</div>
<div className="glass-card rounded-full px-6 py-2">
<span className="text-blue-400 text-sm font-medium">San Francisco, CA</span>
</div>
<div className="glass-card rounded-full px-6 py-2">
<span className="text-purple-400 text-sm font-medium">Remote Friendly</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
<div className="text-center animate-slide-fade animate" style={{transitionDelay: `1.2s`}}>
<div className="text-3xl font-normal text-white font-geist tracking-tighter mb-2">150+</div>
<div className="text-sm text-gray-400">AI Models Optimized</div>
</div>
<div className="text-center animate-slide-fade animate" style={{transitionDelay: `1.4s`}}>
<div className="text-3xl font-normal text-white font-geist tracking-tighter mb-2">98.7%</div>
<div className="text-sm text-gray-400">Average Model Accuracy</div>
</div>
<div className="text-center animate-slide-fade animate" style={{transitionDelay: `1.6s`}}>
<div className="text-3xl font-normal text-white font-geist tracking-tighter mb-2">$2.4M</div>
<div className="text-sm text-gray-400">Cost Savings Generated</div>
</div>
</div>
</div>

<div className="section-divider">
<span className="border-white/10 border rounded-full">Core Expertise</span>
</div>

<div className="mb-24">
<h2 className="text-5xl font-normal text-white tracking-tighter font-geist text-center mb-16 animate-blur-in animate">Core Expertise</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card refraction-effect animate-float rounded-3xl p-8 animate-slide-left animate" style={{animationDelay: `0.2s`}}>
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
<svg className="w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path></svg>
</div>
<h3 className="text-xl font-normal text-white mb-4 tracking-tight font-geist">Advanced Prompt Engineering</h3>
<div className="divider-gradient mb-4"></div>
<p className="text-gray-300 leading-relaxed mb-6 text-sm">
                            Expert in chain-of-thought prompting, few-shot learning, and prompt optimization techniques. 
                            Developed proprietary frameworks for consistent model outputs across different domains.
                        </p>
<div className="space-y-3 mb-6">
<div className="flex items-center text-xs text-gray-400">
<div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                                Chain-of-Thought Prompting
                            </div>
<div className="flex items-center text-xs text-gray-400">
<div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                                Few-Shot Learning Optimization
                            </div>
<div className="flex items-center text-xs text-gray-400">
<div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                                Prompt Template Engineering
                            </div>
</div>
<div className="space-y-2">
<div className="text-xs text-gray-400">Expertise Level</div>
<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style={{width: `95%`}}></div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 refraction-effect animate-float animate-slide-fade animate" style={{animationDelay: `0.4s`}}>
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
<svg className="w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-xl font-normal text-white mb-4 tracking-tight font-geist">Custom Model Fine-tuning</h3>
<div className="divider-gradient mb-4"></div>
<p className="text-gray-300 leading-relaxed mb-6 text-sm">
                            Specialized in domain-specific model adaptation using advanced fine-tuning techniques. 
                            Experience with LoRA, QLoRA, and full parameter fine-tuning for enterprise applications.
                        </p>
<div className="space-y-3 mb-6">
<div className="flex items-center text-xs text-gray-400">
<div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                                LoRA & QLoRA Implementation
                            </div>
<div className="flex items-center text-xs text-gray-400">
<div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                                Domain Adaptation Strategies
                            </div>
<div className="flex items-center text-xs text-gray-400">
<div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                                Performance Optimization
                            </div>
</div>
<div className="space-y-2">
<div className="text-xs text-gray-400">Expertise Level</div>
<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" style={{width: `88%`}}></div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 refraction-effect animate-float animate-slide-right animate" style={{animationDelay: `0.6s`}}>
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6">
<svg className="w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-normal text-white mb-4 tracking-tight font-geist">Enterprise AI Integration</h3>
<div className="divider-gradient mb-4"></div>
<p className="text-gray-300 leading-relaxed mb-6 text-sm">
                            End-to-end AI system architecture and deployment. Expert in RAG systems, vector databases, 
                            and scalable AI pipelines that handle millions of requests with sub-second response times.
                        </p>
<div className="space-y-3 mb-6">
<div className="flex items-center text-xs text-gray-400">
<div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                                RAG System Architecture
                            </div>
<div className="flex items-center text-xs text-gray-400">
<div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                                Vector Database Optimization
                            </div>
<div className="flex items-center text-xs text-gray-400">
<div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                                Production Deployment
                            </div>
</div>
<div className="space-y-2">
<div className="text-xs text-gray-400">Expertise Level</div>
<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{width: `92%`}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="section-divider">
<span className="border-white/10 border rounded-full">Featured Work</span>
</div>

<div className="glass-card refraction-effect animate-blur-in rounded-3xl mb-20 p-12 animate">
<h2 className="text-5xl font-normal text-white tracking-tighter font-geist text-center mb-12">Featured Projects</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="space-y-8">
<div className="border-l-4 border-blue-500 pl-8 animate-slide-left animate">
<div className="flex items-center justify-between mb-3">
<h3 className="text-2xl font-normal text-white font-geist tracking-tight">Enterprise Chatbot System</h3>
<span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">2024</span>
</div>
<div className="divider-gradient mb-4"></div>
<p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                Architected and deployed a multi-modal AI assistant for a Fortune 500 financial services company. 
                                The system processes 15,000+ daily queries across 12 languages with 94% customer satisfaction rate 
                                and 60% reduction in support ticket volume.
                            </p>
<div className="space-y-2 mb-4">
<div className="text-xs text-gray-500">Key Achievements:</div>
<ul className="text-xs text-gray-400 space-y-1">
<li>• Reduced average response time from 3 minutes to 8 seconds</li>
<li>• Achieved 99.8% uptime across multiple regions</li>
<li>• Integrated with 8 legacy systems and databases</li>
</ul>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">GPT-4</span>
<span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">RAG</span>
<span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">Pinecone</span>
<span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">Azure</span>
</div>
</div>
<div className="border-l-4 border-purple-500 pl-8 animate-slide-left animate" style={{transitionDelay: `0.2s`}}>
<div className="flex items-center justify-between mb-3">
<h3 className="text-2xl font-normal text-white font-geist tracking-tight">Legal Document Analysis</h3>
<span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">2023</span>
</div>
<div className="divider-gradient mb-4"></div>
<p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                Developed specialized AI system for contract analysis and legal document review. 
                                Custom fine-tuned models for legal terminology with advanced prompt engineering 
                                reduced manual review time by 75% while maintaining 99.2% accuracy.
                            </p>
<div className="space-y-2 mb-4">
<div className="text-xs text-gray-500">Key Achievements:</div>
<ul className="text-xs text-gray-400 space-y-1">
<li>• Processed 50,000+ legal documents</li>
<li>• Identified critical clauses with 99.2% accuracy</li>
<li>• Saved 2,400+ hours of manual review work</li>
</ul>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Claude</span>
<span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Fine-tuning</span>
<span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">spaCy</span>
<span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs">PyTorch</span>
</div>
</div>
</div>
<div className="space-y-8">
<div className="border-l-4 border-emerald-500 pl-8 animate-slide-right animate">
<div className="flex items-center justify-between mb-3">
<h3 className="text-2xl font-normal text-white font-geist tracking-tight">Content Generation Pipeline</h3>
<span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">2024</span>
</div>
<div className="divider-gradient mb-4"></div>
<p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                Built end-to-end automated content creation system for digital marketing agency. 
                                Advanced prompt chaining and quality control systems generate 500+ SEO-optimized 
                                articles monthly with consistent brand voice and 95% approval rate.
                            </p>
<div className="space-y-2 mb-4">
<div className="text-xs text-gray-500">Key Achievements:</div>
<ul className="text-xs text-gray-400 space-y-1">
<li>• 80% reduction in content production costs</li>
<li>• Maintained brand consistency across 50+ clients</li>
<li className="">• Automated fact-checking and plagiarism detection</li>
</ul>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">GPT-3.5</span>
<span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Chain Prompting</span>
<span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">Zapier</span>
<span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">WordPress</span>
</div>
</div>
<div className="border-l-4 border-yellow-500 pl-8 animate-slide-right animate" style={{transitionDelay: `0.2s`}}>
<div className="flex items-center justify-between mb-3">
<h3 className="text-2xl font-normal text-white font-geist tracking-tight">Code Review Assistant</h3>
<span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">2023</span>
</div>
<div className="divider-gradient mb-4"></div>
<p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                Engineered intelligent code review system for software development teams. 
                                Custom prompts for security vulnerability detection, performance optimization 
                                suggestions, and code quality improvements across 15+ programming languages.
                            </p>
<div className="space-y-2 mb-4">
<div className="text-xs text-gray-500">Key Achievements:</div>
<ul className="text-xs text-gray-400 space-y-1">
<li>• Identified 2,500+ security vulnerabilities</li>
<li>• Improved code quality scores by 40%</li>
<li>• Reduced deployment bugs by 65%</li>
</ul>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">GPT-4</span>
<span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Static Analysis</span>
<span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">GitHub API</span>
<span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs">Security</span>
</div>
</div>
</div>
</div>
</div>

<div className="section-divider">
<span className="border-white/10 border rounded-full">Technical Skills</span>
</div>

<div className="mb-24">
<h2 className="text-5xl font-normal text-white tracking-tighter font-geist text-center mb-16 animate-blur-in animate">Technical Arsenal</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="glass-card rounded-3xl p-8 animate-slide-left animate">
<h3 className="text-2xl font-normal text-white mb-6 font-geist tracking-tight">AI & Machine Learning</h3>
<div className="divider-gradient mb-6"></div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-300">GPT-4 / Claude</span>
<span className="text-blue-400">Expert</span>
</div>
<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style={{width: `95%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-300">PyTorch</span>
<span className="text-purple-400">Advanced</span>
</div>
<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" style={{width: `85%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-300">Transformers</span>
<span className="text-emerald-400">Expert</span>
</div>
<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{width: `90%`}}></div>
</div>
</div>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-300">LangChain</span>
<span className="text-yellow-400">Expert</span>
</div>
<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full" style={{width: `92%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-300">Vector DBs</span>
<span className="text-red-400">Advanced</span>
</div>
<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full" style={{width: `88%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-300">Fine-tuning</span>
<span className="text-pink-400">Expert</span>
</div>
<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-pink-500 to-pink-400 rounded-full" style={{width: `87%`}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 animate-slide-right animate">
<h3 className="text-2xl font-normal text-white mb-6 font-geist tracking-tight">Development & Cloud</h3>
<div className="divider-gradient mb-6"></div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-300">Python</span>
<span className="text-blue-400">Expert</span>
</div>
<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style={{width: `93%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-300">Docker</span>
<span className="text-purple-400">Advanced</span>
</div>
<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" style={{width: `82%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-300">FastAPI</span>
<span className="text-emerald-400">Expert</span>
</div>
<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{width: `91%`}}></div>
</div>
</div>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-300">AWS/Azure</span>
<span className="text-yellow-400">Advanced</span>
</div>
<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full" style={{width: `86%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-300">PostgreSQL</span>
<span className="text-red-400">Advanced</span>
</div>
<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full" style={{width: `84%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-300">Kubernetes</span>
<span className="text-pink-400">Proficient</span>
</div>
<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-pink-500 to-pink-400 rounded-full" style={{width: `75%`}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="section-divider">
<span className="border-white/10 border rounded-full">Get In Touch</span>
</div>

<div className="text-center mb-20">
<h2 className="text-5xl font-normal text-white tracking-tighter font-geist mb-8 animate-blur-in animate">Let's Build Something Amazing</h2>
<p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 animate-slide-fade animate">
                    Ready to transform your business with intelligent AI solutions? Let's discuss how we can optimize your workflows and unlock new possibilities.
                </p>
<div className="flex flex-wrap justify-center gap-6 mb-12 animate-scale-in animate">
<a className="glass-card refraction-effect rounded-2xl px-8 py-4 flex items-center gap-3 text-white hover:text-blue-300 transition-all duration-300" href="mailto:alex.chen@example.com">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
<span className="font-medium">alex.chen@example.com</span>
</a>
<a className="glass-card refraction-effect rounded-2xl px-8 py-4 flex items-center gap-3 text-white hover:text-blue-300 transition-all duration-300" href="https://linkedin.com/in/alexchen">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<span className="font-medium">LinkedIn</span>
</a>
<a className="glass-card refraction-effect rounded-2xl px-8 py-4 flex items-center gap-3 text-white hover:text-blue-300 transition-all duration-300" href="https://github.com/alexchen">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<span className="font-medium">GitHub</span>
</a>
</div>

<div className="glass-card rounded-2xl p-6 max-w-md mx-auto animate-slide-fade animate">
<div className="flex items-center justify-center gap-3 mb-3">
<div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
<span className="text-emerald-400 font-medium">Currently Available</span>
</div>
<p className="text-gray-400 text-sm">
                        Open for new projects and consulting opportunities. Response time: within 24 hours.
                    </p>
</div>
</div>

<div className="text-center pt-12 border-t border-gray-800">
<p className="text-gray-500 text-sm">
                    © 2024 Alex Chen. Crafted with AI precision and human creativity.
                </p>
</div>
</div>
</div>



    </>
  );
}
