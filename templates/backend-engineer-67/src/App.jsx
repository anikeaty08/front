import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const textElement = document.getElementById("typewriter");
        const phrases = ["Distributed Systems.", "Cloud Infrastructure.", "High-Performance APIs.", "Microservices."];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                textElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50; 
            } else {
                textElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100; 
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typeSpeed = 2000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500; // Pause before new word
            }

            setTimeout(type, typeSpeed);
        }

        document.addEventListener("DOMContentLoaded", type);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<span className="text-neutral-500 font-mono text-sm">&lt;/&gt;</span> JD
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
<a className="hover:text-white transition-colors" href="#projects">Systems</a>
<a className="hover:text-white transition-colors" href="#certifications">Certs</a>
</div>
<div className="flex items-center gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="https://github.com" target="_blank">
<span className="iconify" data-icon="lucide:github" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="hidden sm:flex items-center gap-2 px-4 py-2 rounded text-xs font-medium bg-white text-black hover:bg-neutral-200 transition-colors" href="mailto:hello@example.com">
<span>Contact</span>
</a>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20 px-6">
<div className="max-w-5xl mx-auto space-y-32">

<section className="relative space-y-8 py-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs font-medium text-emerald-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Available for Backend Roles
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                    Architecting the <br/>
<span className="text-neutral-500" id="typewriter"></span><span className="cursor-blink text-neutral-500">|</span>
</h1>
<p className="max-w-xl text-lg text-neutral-400 font-normal leading-relaxed">
                    Senior Computer Science student specializing in distributed systems, database internals, and high-performance infrastructure. I build the invisible engines that power scalable applications.
                </p>
<div className="flex flex-wrap gap-4 pt-2">
<a className="group inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded text-sm font-medium hover:bg-neutral-200 transition-colors" href="#projects">
                        View Architectures
                        <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-down" data-width="16"></span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-medium border border-neutral-800 hover:border-neutral-600 hover:text-white transition-colors bg-neutral-900/50" href="#stack">
                        Technical Arsenal
                    </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/5">
<div>
<div className="text-2xl font-mono text-white font-medium">99.9%</div>
<div className="text-xs text-neutral-500 mt-1 uppercase tracking-wide">Uptime Focus</div>
</div>
<div>
<div className="text-2xl font-mono text-white font-medium">&lt;50ms</div>
<div className="text-xs text-neutral-500 mt-1 uppercase tracking-wide">Avg Latency</div>
</div>
<div>
<div className="text-2xl font-mono text-white font-medium">Golang</div>
<div className="text-xs text-neutral-500 mt-1 uppercase tracking-wide">Primary Stack</div>
</div>
<div>
<div className="text-2xl font-mono text-white font-medium">Docker</div>
<div className="text-xs text-neutral-500 mt-1 uppercase tracking-wide">Native</div>
</div>
</div>
</section>

<section className="border-t border-white/5 pt-16" id="philosophy">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-1">
<h2 className="text-sm font-medium text-white tracking-wide uppercase">Engineering<br/>Philosophy</h2>
</div>
<div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-3">
<div className="h-8 w-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:scale" data-width="16"></span>
</div>
<h3 className="text-white font-medium">Scalability First</h3>
<p className="text-sm leading-relaxed">
                                Designing systems that handle growth gracefully. I prioritize horizontal scaling, stateless services, and asynchronous processing using message queues like Kafka or RabbitMQ.
                            </p>
</div>
<div className="space-y-3">
<div className="h-8 w-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:shield-check" data-width="16"></span>
</div>
<h3 className="text-white font-medium">Data Integrity</h3>
<p className="text-sm leading-relaxed">
                                ACID compliance is not negotiable for core transactional systems. I focus on proper indexing, query optimization, and handling race conditions at the database level.
                            </p>
</div>
<div className="space-y-3">
<div className="h-8 w-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:eye" data-width="16"></span>
</div>
<h3 className="text-white font-medium">Observability</h3>
<p className="text-sm leading-relaxed">
                                You can't fix what you can't see. I bake structured logging, tracing (OpenTelemetry), and health metrics (Prometheus) into services from day one.
                            </p>
</div>
<div className="space-y-3">
<div className="h-8 w-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:code-2" data-width="16"></span>
</div>
<h3 className="text-white font-medium">Clean Architecture</h3>
<p className="text-sm leading-relaxed">
                                Adhering to SOLID principles and Hexagonal Architecture to decouple business logic from infrastructure concerns, ensuring testable and maintainable codebases.
                            </p>
</div>
</div>
</div>
</section>

<section className="space-y-8" id="stack">
<div className="flex items-end justify-between border-b border-white/5 pb-6">
<h2 className="text-2xl font-medium text-white tracking-tight">Technical Arsenal</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel rounded p-6 space-y-4">
<div className="flex items-center gap-3 text-white mb-2">
<span className="iconify" data-icon="lucide:terminal" data-width="20"></span>
<h3 className="font-medium text-sm">Languages &amp; Runtime</h3>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Go (Golang)</span>
<span className="text-xs text-emerald-500 font-mono">Advanced</span>
</div>
<div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[90%]"></div>
</div>
<div className="flex justify-between items-center text-sm pt-2">
<span className="text-neutral-300">Python</span>
<span className="text-xs text-blue-500 font-mono">Proficient</span>
</div>
<div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full w-[80%]"></div>
</div>
<div className="flex justify-between items-center text-sm pt-2">
<span className="text-neutral-300">Rust</span>
<span className="text-xs text-neutral-500 font-mono">Learning</span>
</div>
<div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
<div className="bg-white/40 h-full w-[40%]"></div>
</div>
</div>
</div>

<div className="glass-panel rounded p-6 space-y-4">
<div className="flex items-center gap-3 text-white mb-2">
<span className="iconify" data-icon="lucide:database" data-width="20"></span>
<h3 className="font-medium text-sm">Data &amp; Storage</h3>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 bg-neutral-900/50 rounded border border-white/5 text-sm hover:border-white/10 transition-colors">
<span className="block text-white mb-1">PostgreSQL</span>
<span className="text-xs">Complex Queries, Indexing, ACID</span>
</div>
<div className="p-3 bg-neutral-900/50 rounded border border-white/5 text-sm hover:border-white/10 transition-colors">
<span className="block text-white mb-1">Redis</span>
<span className="text-xs">Caching, Pub/Sub, Queues</span>
</div>
<div className="p-3 bg-neutral-900/50 rounded border border-white/5 text-sm hover:border-white/10 transition-colors">
<span className="block text-white mb-1">MongoDB</span>
<span className="text-xs">Document Store, Aggregation</span>
</div>
<div className="p-3 bg-neutral-900/50 rounded border border-white/5 text-sm hover:border-white/10 transition-colors">
<span className="block text-white mb-1">ElasticSearch</span>
<span className="text-xs">Full-text Search, Logs</span>
</div>
</div>
</div>

<div className="glass-panel rounded p-6 space-y-4">
<div className="flex items-center gap-3 text-white mb-2">
<span className="iconify" data-icon="lucide:cloud" data-width="20"></span>
<h3 className="font-medium text-sm">Infrastructure</h3>
</div>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-3">
<span className="iconify text-blue-400" data-icon="lucide:container" data-width="16"></span>
                                Docker &amp; Docker Compose
                            </li>
<li className="flex items-center gap-3">
<span className="iconify text-blue-400" data-icon="lucide:ship" data-width="16"></span>
                                Kubernetes (Basics)
                            </li>
<li className="flex items-center gap-3">
<span className="iconify text-orange-400" data-icon="lucide:server" data-width="16"></span>
                                AWS (EC2, S3, RDS, Lambda)
                            </li>
<li className="flex items-center gap-3">
<span className="iconify text-neutral-400" data-icon="lucide:git-branch" data-width="16"></span>
                                CI/CD (GitHub Actions)
                            </li>
<li className="flex items-center gap-3">
<span className="iconify text-purple-400" data-icon="lucide:monitor-dot" data-width="16"></span>
                                Prometheus &amp; Grafana
                            </li>
</ul>
</div>
</div>
</section>

<section className="space-y-12" id="projects">
<div className="flex items-end justify-between border-b border-white/5 pb-6">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight">System Design Showcase</h2>
<p className="text-sm text-neutral-500 mt-2">Projects demonstrating backend architectural patterns.</p>
</div>
</div>

<div className="group relative grid md:grid-cols-12 gap-8 p-6 rounded-lg border border-white/5 bg-[#080808] hover:border-white/10 transition-colors">
<div className="md:col-span-8 space-y-6">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white">Distributed Task Scheduler</h3>
<p className="text-sm text-emerald-500 font-mono mt-1">Go • gRPC • Redis • Postgres</p>
</div>
<a className="p-2 text-neutral-400 hover:text-white border border-white/5 rounded bg-neutral-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="18"></span>
</a>
</div>
<div className="space-y-4">
<div>
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">The Challenge</span>
<p className="text-sm mt-1 leading-relaxed text-neutral-300">
                                    Designed a system to process 5,000+ concurrent background jobs with guarantee of delivery. Needed to handle worker node failures without data loss.
                                </p>
</div>
<div>
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Architecture</span>
<p className="text-sm mt-1 leading-relaxed text-neutral-300">
                                    Implemented the Leaky Bucket algorithm for rate limiting. Used Redis Lists for job queues and Pub/Sub for worker coordination. Added a "Heartbeat" mechanism to detect dead workers and re-queue claimed but unfinished tasks.
                                </p>
</div>
</div>
<div className="flex gap-4 pt-2 border-t border-white/5">
<div>
<div className="text-lg font-mono text-white">5k+</div>
<div className="text-[10px] text-neutral-500 uppercase">Req/Sec</div>
</div>
<div className="w-px bg-white/10"></div>
<div>
<div className="text-lg font-mono text-white">12ms</div>
<div className="text-[10px] text-neutral-500 uppercase">P99 Latency</div>
</div>
</div>
</div>

<div className="md:col-span-4 bg-neutral-900/30 rounded border border-white/5 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent opacity-20"></div>
<div className="text-center space-y-2">
<span className="iconify mx-auto text-neutral-600" data-icon="lucide:network" data-width="48" style={{strokeWidth: '1'}}></span>
<p className="text-xs text-neutral-600 font-mono">Worker Node Cluster</p>
</div>
</div>
</div>

<div className="group relative grid md:grid-cols-12 gap-8 p-6 rounded-lg border border-white/5 bg-[#080808] hover:border-white/10 transition-colors">
<div className="md:col-span-8 space-y-6">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white">Real-Time Chat Engine</h3>
<p className="text-sm text-blue-500 font-mono mt-1">Node.js • Socket.io • Cassandra • Kafka</p>
</div>
<a className="p-2 text-neutral-400 hover:text-white border border-white/5 rounded bg-neutral-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="18"></span>
</a>
</div>
<div className="space-y-4">
<div>
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">The Challenge</span>
<p className="text-sm mt-1 leading-relaxed text-neutral-300">
                                    Building a chat service capable of horizontal scaling. Standard Websockets are stateful, making load balancing difficult across multiple server instances.
                                </p>
</div>
<div>
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Architecture</span>
<p className="text-sm mt-1 leading-relaxed text-neutral-300">
                                    Utilized Redis Adapter to broadcast socket events across the cluster. Implemented Cassandra for write-heavy message storage with partitioning by ChannelID. Used Kafka to decouple message processing (notifications, analytics) from the main chat path.
                                </p>
</div>
</div>
<div className="flex gap-4 pt-2 border-t border-white/5">
<div>
<div className="text-lg font-mono text-white">Active-Active</div>
<div className="text-[10px] text-neutral-500 uppercase">Replication</div>
</div>
<div className="w-px bg-white/10"></div>
<div>
<div className="text-lg font-mono text-white">WS/WSS</div>
<div className="text-[10px] text-neutral-500 uppercase">Protocol</div>
</div>
</div>
</div>

<div className="md:col-span-4 bg-neutral-900/30 rounded border border-white/5 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 to-transparent opacity-20"></div>
<div className="text-center space-y-2">
<span className="iconify mx-auto text-neutral-600" data-icon="lucide:workflow" data-width="48" style={{strokeWidth: '1'}}></span>
<p className="text-xs text-neutral-600 font-mono">Event Bus Architecture</p>
</div>
</div>
</div>

<div className="group relative grid md:grid-cols-12 gap-8 p-6 rounded-lg border border-white/5 bg-[#080808] hover:border-white/10 transition-colors">
<div className="md:col-span-8 space-y-6">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white">Secure E-Commerce API</h3>
<p className="text-sm text-yellow-600 font-mono mt-1">Python (FastAPI) • Docker • Stripe • OAuth2</p>
</div>
<div className="flex gap-2">
<a className="p-2 text-neutral-400 hover:text-white border border-white/5 rounded bg-neutral-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:external-link" data-width="18"></span>
</a>
<a className="p-2 text-neutral-400 hover:text-white border border-white/5 rounded bg-neutral-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="18"></span>
</a>
</div>
</div>
<div className="space-y-4">
<div>
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">The Challenge</span>
<p className="text-sm mt-1 leading-relaxed text-neutral-300">
                                    Creating a secure, documented, and testable API for financial transactions. Required robust validation and idempotency handling.
                                </p>
</div>
<div>
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Architecture</span>
<p className="text-sm mt-1 leading-relaxed text-neutral-300">
                                    Built using TDD. Implemented Idempotency Keys to prevent double-charging. Used Pydantic for strict data validation. Automated documentation with Swagger/OpenAPI. Deployed via Docker containers on AWS ECS.
                                </p>
</div>
</div>
</div>

<div className="md:col-span-4 bg-neutral-900/30 rounded border border-white/5 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 to-transparent opacity-20"></div>
<div className="text-center space-y-2">
<span className="iconify mx-auto text-neutral-600" data-icon="lucide:lock" data-width="48" style={{strokeWidth: '1'}}></span>
<p className="text-xs text-neutral-600 font-mono">Security Layer</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-16" id="certifications">
<div>
<h3 className="text-lg font-medium text-white mb-6">Certifications &amp; Learning</h3>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="mt-1 h-5 w-5 rounded-full border border-orange-500/30 bg-orange-500/10 flex items-center justify-center text-orange-500">
<span className="iconify" data-icon="lucide:award" data-width="12"></span>
</div>
<div>
<h4 className="text-white text-sm font-medium">AWS Certified Solutions Architect</h4>
<p className="text-xs text-neutral-500 mt-0.5">Associate (In Progress)</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 h-5 w-5 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-500">
<span className="iconify" data-icon="lucide:award" data-width="12"></span>
</div>
<div>
<h4 className="text-white text-sm font-medium">CKA: Certified Kubernetes Administrator</h4>
<p className="text-xs text-neutral-500 mt-0.5">Planned Q4 2024</p>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-6">Currently Exploring</h3>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 border border-white/5 bg-neutral-900/30 rounded">
<div className="text-sm text-white font-mono">eBPF</div>
<div className="text-xs text-neutral-500 mt-1">Linux Kernel Observability</div>
</div>
<div className="p-3 border border-white/5 bg-neutral-900/30 rounded">
<div className="text-sm text-white font-mono">gRPC</div>
<div className="text-xs text-neutral-500 mt-1">Efficient Microservices</div>
</div>
<div className="p-3 border border-white/5 bg-neutral-900/30 rounded">
<div className="text-sm text-white font-mono">Rust</div>
<div className="text-xs text-neutral-500 mt-1">Memory Safety</div>
</div>
<div className="p-3 border border-white/5 bg-neutral-900/30 rounded">
<div className="text-sm text-white font-mono">System Design</div>
<div className="text-xs text-neutral-500 mt-1">DDIA Book Study</div>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-10" id="contact">
<div className="glass-panel p-8 md:p-12 rounded-2xl text-center space-y-6 max-w-2xl mx-auto">
<h2 className="text-3xl font-medium text-white tracking-tight">Ready to scale?</h2>
<p className="text-neutral-400 max-w-md mx-auto">
                        I'm currently looking for internship opportunities where I can contribute to backend infrastructure and learn from senior engineers.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-white text-black font-medium hover:bg-neutral-200 transition-colors" href="mailto:student@example.com">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
                            Get in Touch
                        </a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded border border-neutral-800 bg-neutral-900 text-neutral-300 font-medium hover:text-white hover:border-neutral-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:file-text" data-width="16"></span>
                            Download Resume
                        </a>
</div>
</div>
</section>
</div>
</main>
<footer className="border-t border-white/5 py-8 bg-[#050505]">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-neutral-600">
<span className="font-medium text-neutral-500">JD.</span> 
                Built with semantic HTML &amp; Tailwind.
            </div>
<div className="flex gap-6">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">GitHub</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>



    </>
  );
}
