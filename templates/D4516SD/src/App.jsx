import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize Lucide
    lucide.createIcons();

    // Animations on scroll (simple reveal)
    const revealEls = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.remove('opacity-0','translate-y-6');
          io.unobserve(entry.target);
        }
      });
    },{threshold:.2});
    revealEls.forEach(el=>{
      el.classList.add('opacity-0','translate-y-6','transition','duration-700');
      io.observe(el);
    });

    // Chart.js demo
    const ctx = document.getElementById('sloChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'],
        datasets: [{
          label: 'Latency (ms)',
          data: [240, 220, 205, 210, 198, 189, 192, 187, 184, 179],
          borderColor: '#2563eb',
          tension: .4,
          fill: false
        },
        {
          label: 'Error %',
          data: [.05,.04,.04,.03,.03,.03,.02,.02,.02,.02],
          borderColor: '#9333ea',
          tension: .4,
          fill: false,
          yAxisID: 'y1'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: false, ticks: { color: '#475569' } },
          y1: { position: 'right', grid: { drawOnChartArea: false }, ticks: { color: '#475569', callback:v=>v+'%' } },
          x: { ticks: { color: '#475569' } }
        }
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
<div className="absolute top-60 -right-20 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-2xl"></div>
</div>
<div className="mx-auto max-w-7xl px-6 pt-24 pb-32 lg:px-8">
<nav className="flex items-center justify-between">
<span className="text-2xl tracking-tight font-semibold text-blue-700">contoso<span className="text-blue-500">.</span></span>
<ul className="flex gap-8 text-sm font-medium">
<li><a className="hover:text-blue-600 transition" href="#services">Services</a></li>
<li><a className="hover:text-blue-600 transition" href="#cases">Case Studies</a></li>
<li><a className="hover:text-blue-600 transition" href="#insights">Insights</a></li>
</ul>
<a className="hidden sm:inline-flex items-center gap-1 rounded-md border border-blue-600/50 px-4 py-1.5 text-blue-700 hover:bg-blue-600 hover:text-white transition" href="#contact">
<i className="w-4 h-4" data-lucide="mail"></i>Contact
        </a>
</nav>
<div className="mt-24 grid md:grid-cols-2 gap-16">
<div className="space-y-8">
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            Cloud-native products <span className="text-blue-600">built on .NET</span><br/>and <span className="text-blue-600">Azure</span>
</h1>
<p className="text-lg leading-relaxed text-slate-600">
            We architect, deliver, and scale enterprise software on Microsoft technologies—blending engineering precision with business insight.
          </p>
<div className="flex flex-wrap gap-4">
<a className="rounded-md bg-blue-600 text-white px-6 py-2 shadow hover:shadow-lg transition" href="#services">
              Explore Services
            </a>
<a className="rounded-md border border-slate-300 px-6 py-2 hover:border-blue-600 hover:text-blue-700 transition" href="#cases">
              View Case Studies
            </a>
</div>
<div className="flex items-center gap-6 pt-8">
<div>
<span className="text-3xl font-semibold text-blue-700">96%</span>
<p className="text-sm text-slate-500">Client retention</p>
</div>
<div className="h-10 w-px bg-slate-200"></div>
<div>
<span className="text-3xl font-semibold text-blue-700">15+</span>
<p className="text-sm text-slate-500">Azure regions deployed</p>
</div>
</div>
</div>
<div className="relative">
<img alt="" className="w-full rounded-md shadow-xl" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-md pointer-events-none"></div>
</div>
</div>
</div>
</header>

<section className="relative py-28 bg-slate-50" id="services">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute bottom-20 right-1/3 w-72 h-72 bg-blue-400/10 rounded-full blur-2xl"></div>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-2">What we do</h2>
<p className="text-center max-w-2xl mx-auto text-slate-600 mb-14">
        A full-stack Microsoft partner covering cloud modernization, application engineering, and DevOps automation.
      </p>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

<article className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition group">
<i className="w-8 h-8 text-blue-600 mb-6" data-lucide="server"></i>
<h3 className="font-semibold mb-3">Azure Cloud Native</h3>
<p className="text-sm leading-relaxed text-slate-600">
            Containerization, serverless, PaaS, and multi-region architectures that unlock elasticity and resilience.
          </p>
<span className="mt-4 inline-flex items-center gap-1 text-blue-600 text-sm">
            Learn more<i data-lucide="arrow-right"></i>
</span>
</article>
<article className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition group">
<i className="w-8 h-8 text-blue-600 mb-6" data-lucide="code"></i>
<h3 className="font-semibold mb-3">.NET Engineering</h3>
<p className="text-sm leading-relaxed text-slate-600">
            Robust APIs, high-throughput services, and cross-platform apps using the latest .NET Core &amp; Blazor.
          </p>
<span className="mt-4 inline-flex items-center gap-1 text-blue-600 text-sm">
            Learn more<i data-lucide="arrow-right"></i>
</span>
</article>
<article className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition group">
<i className="w-8 h-8 text-blue-600 mb-6" data-lucide="git-branch"></i>
<h3 className="font-semibold mb-3">DevOps Automation</h3>
<p className="text-sm leading-relaxed text-slate-600">
            End-to-end CI/CD pipelines, IaC with Bicep &amp; Terraform, and secure release workflows in Azure DevOps.
          </p>
<span className="mt-4 inline-flex items-center gap-1 text-blue-600 text-sm">
            Learn more<i data-lucide="arrow-right"></i>
</span>
</article>
<article className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition group">
<i className="w-8 h-8 text-blue-600 mb-6" data-lucide="lock"></i>
<h3 className="font-semibold mb-3">Security &amp; Compliance</h3>
<p className="text-sm leading-relaxed text-slate-600">
            Zero-trust architecture, managed identities, and automated compliance for ISO &amp; SOC standards.
          </p>
<span className="mt-4 inline-flex items-center gap-1 text-blue-600 text-sm">
            Learn more<i data-lucide="arrow-right"></i>
</span>
</article>
<article className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition group">
<i className="w-8 h-8 text-blue-600 mb-6" data-lucide="bar-chart-3"></i>
<h3 className="font-semibold mb-3">Data &amp; Analytics</h3>
<p className="text-sm leading-relaxed text-slate-600">
            Azure Data Lake, Synapse, and Power BI solutions that transform data into strategic insights.
          </p>
<span className="mt-4 inline-flex items-center gap-1 text-blue-600 text-sm">
            Learn more<i data-lucide="arrow-right"></i>
</span>
</article>
<article className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition group">
<i className="w-8 h-8 text-blue-600 mb-6" data-lucide="sparkles"></i>
<h3 className="font-semibold mb-3">AI &amp; Cognitive Services</h3>
<p className="text-sm leading-relaxed text-slate-600">
            Applied AI, ML Ops, and conversational bots leveraging Azure OpenAI Service &amp; Cognitive APIs.
          </p>
<span className="mt-4 inline-flex items-center gap-1 text-blue-600 text-sm">
            Learn more<i data-lucide="arrow-right"></i>
</span>
</article>
</div>
</div>
</section>

<section className="py-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-10">
<div className="flex-1">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Operational Excellence</h2>
<p className="max-w-lg text-slate-600 mb-8">
            Reliability, latency, and spend are continuously observed. Our SLOs drive real-time engineering decisions.
          </p>
<canvas className="max-w-lg" id="sloChart"></canvas>
</div>
<div className="flex-1 grid grid-cols-2 gap-8">
<div className="border border-slate-200 rounded-lg p-6">
<span className="text-4xl font-semibold text-blue-700">3.8M</span>
<p className="text-sm text-slate-500 mt-2">Requests / day</p>
</div>
<div className="border border-slate-200 rounded-lg p-6">
<span className="text-4xl font-semibold text-blue-700">0.003%</span>
<p className="text-sm text-slate-500 mt-2">Error ratio</p>
</div>
<div className="border border-slate-200 rounded-lg p-6">
<span className="text-4xl font-semibold text-blue-700">14 TB</span>
<p className="text-sm text-slate-500 mt-2">Data processed</p>
</div>
<div className="border border-slate-200 rounded-lg p-6">
<span className="text-4xl font-semibold text-blue-700">99.99%</span>
<p className="text-sm text-slate-500 mt-2">Uptime</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-28 bg-slate-50" id="cases">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Selected Work</h2>
<div className="space-y-24">

<div className="grid md:grid-cols-2 gap-12 items-center">
<img alt="" className="rounded-md shadow-md" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div>
<h3 className="font-semibold text-xl mb-4 tracking-tight">Global Booking Platform</h3>
<p className="text-slate-600 mb-6">
              Re-engineered monolith to microservices on Azure Kubernetes Service, reducing average booking latency by 37%.
            </p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-blue-600 mt-0.5" data-lucide="check"></i> .NET 7, Dapr sidecars</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-blue-600 mt-0.5" data-lucide="check"></i> Cosmos DB &amp; Azure Cache</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-blue-600 mt-0.5" data-lucide="check"></i> GitOps with Flux</li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<h3 className="font-semibold text-xl mb-4 tracking-tight">AI-Powered Claims Processing</h3>
<p className="text-slate-600 mb-6">
              Automated document ingestion and intent extraction using Azure Form Recognizer &amp; OpenAI GPT-4, achieving 84% straight-through processing.
            </p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-blue-600 mt-0.5" data-lucide="check"></i> Event-driven architecture</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-blue-600 mt-0.5" data-lucide="check"></i> Azure Cognitive Services</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-blue-600 mt-0.5" data-lucide="check"></i> SOC-compliant pipelines</li>
</ul>
</div>
<img alt="" className="rounded-md shadow-md order-1 md:order-2" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24" id="insights">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-end justify-between mb-10">
<h2 className="text-3xl font-semibold tracking-tight">Tech insights</h2>
<a className="text-blue-600 text-sm hover:underline" href="#">View all articles</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
<article className="group relative overflow-hidden rounded-lg border border-slate-200">
<img alt="" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="p-6">
<h3 className="font-semibold mb-2 group-hover:text-blue-700 transition">Migrating to Azure Container Apps for background processing</h3>
<p className="text-sm text-slate-600">A pragmatic guide on shifting asynchronous workloads from Functions to ACA for better scaling.</p>
</div>
</article>
<article className="group relative overflow-hidden rounded-lg border border-slate-200">
<img alt="" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>
<div className="p-6">
<h3 className="font-semibold mb-2 group-hover:text-blue-700 transition">Optimizing EF Core for high-throughput APIs</h3>
<p className="text-sm text-slate-600">Techniques for performance tuning DbContext pools and connection resiliency.</p>
</div>
</article>
<article className="group relative overflow-hidden rounded-lg border border-slate-200">
<img alt="" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="p-6">
<h3 className="font-semibold mb-2 group-hover:text-blue-700 transition">Zero-downtime deployments with Bicep &amp; Blue-Green slots</h3>
<p className="text-sm text-slate-600">Walkthrough of advanced traffic routing patterns in Azure App Service.</p>
</div>
</article>
</div>
</div>
</section>

<section className="relative py-24 bg-blue-700 text-white" id="contact">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
</div>
<div className="mx-auto max-w-3xl px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Ready to build together?</h2>
<p className="text-blue-100 mb-8">Partner with us to transform ideas into production-ready, scalable systems on Azure.</p>
<a className="inline-flex items-center gap-2 bg-white text-blue-700 font-medium px-8 py-3 rounded-md hover:bg-blue-200 transition" href="mailto:hello@contoso.com">
<i className="w-4 h-4" data-lucide="send"></i>Start a conversation
      </a>
</div>
</section>

<footer className="py-12 bg-slate-900 text-slate-400">
<div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
<p className="text-sm">© 2024 Contoso Digital. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Security</a>
<a className="hover:text-white transition" href="#">Sitemap</a>
</div>
</div>
</footer>


    </>
  );
}
