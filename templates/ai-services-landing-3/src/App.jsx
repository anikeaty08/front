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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#050505',
surface: '#0f0f11',
border: '#1f1f22',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide icons with custom stroke width
      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="infinity"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white">
            Neo.AI
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#industries">
            Industries
          </a>
<a className="hover:text-white transition-colors" href="#contact">
            Contact
          </a>
</div>
<div>
<a className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition-opacity" href="#contact">
            Get Started
          </a>
</div>
</div>
</nav>
<main>

<section className="relative pt-40 pb-24 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.2] mb-10">
<span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Scale Your AI from
            </span>
<br/>
<span className="bg-gradient-to-r from-pink-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Pilot to Production
            </span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-14 leading-relaxed">
            End-to-end AI solutions combining enterprise-grade data labeling,
            model development, and full-stack ML infrastructure.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-base font-medium hover:opacity-90 transition-opacity w-full sm:w-auto" href="#contact">
              Schedule a Call
            </a>
<a className="px-6 py-3 rounded-md border border-cyan-500/50 text-cyan-400 text-base font-medium hover:bg-cyan-500/10 transition-colors w-full sm:w-auto" href="#services">
              Learn More
            </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-24 mt-24 border-t border-white/5 pt-12">
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-semibold text-cyan-400 tracking-tight">
                1M+
              </span>
<span className="text-sm text-zinc-500 mt-2 font-medium">
                Labels Per Hour
              </span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-semibold text-cyan-400 tracking-tight">
                98%+
              </span>
<span className="text-sm text-zinc-500 mt-2 font-medium">
                Accuracy Rate
              </span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-semibold text-cyan-400 tracking-tight">
                30+
              </span>
<span className="text-sm text-zinc-500 mt-2 font-medium">
                Languages
              </span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-semibold text-cyan-400 tracking-tight">
                24/7
              </span>
<span className="text-sm text-zinc-500 mt-2 font-medium">
                Global Operations
              </span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
</section>

<section className="py-24 border-y border-white/5 bg-surface/30">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 flex flex-col">
<span className="text-7xl md:text-9xl font-semibold tracking-tight text-white mb-4">
              72%
            </span>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white leading-tight">
              of AI Projects Never Leave the Pilot Stage
            </h2>
</div>
<div className="md:col-span-7">
<p className="text-lg text-zinc-400 leading-relaxed mb-6">
              Most organizations struggle with data quality, scaling
              bottlenecks, and production failures. The gap between a promising
              research prototype and a reliable, scalable production system is
              immense.
            </p>
<p className="text-lg text-zinc-400 leading-relaxed">
              We bridge the gap from pilot to production with battle-tested
              solutions. From robust data pipelines to scalable infrastructure,
              we ensure your AI investments deliver real business value.
            </p>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-sm font-medium text-cyan-400 tracking-wider uppercase mb-3">
              What We Do
            </h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-8">
              End-to-End AI Solutions
            </h3>
<p className="text-lg text-zinc-400 leading-relaxed">
              From data labeling to full-stack infrastructure, we meet you where
              you are and take you where you need to go.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface border border-border rounded-2xl p-8 hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-cyan-500/50 transition-colors">
<i className="w-6 h-6 text-cyan-400" data-lucide="tag"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight text-white mb-3">
                Data Services
              </h4>
<p className="text-lg text-zinc-400 leading-relaxed">
                Multi-modal annotation at scale with 98%+ accuracy. Image,
                video, text, audio, and 3D data labeling with enterprise-grade
                quality controls.
              </p>
</div>

<div className="bg-surface border border-border rounded-2xl p-8 hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-pink-500/50 transition-colors">
<i className="w-6 h-6 text-pink-400" data-lucide="bot"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight text-white mb-3">
                Model Development
              </h4>
<p className="text-lg text-zinc-400 leading-relaxed">
                Custom AI model development, fine-tuning, and evaluation. From
                computer vision to LLMs, we build production-ready models
                tailored to your domain.
              </p>
</div>

<div className="bg-surface border border-border rounded-2xl p-8 hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-purple-500/50 transition-colors">
<i className="w-6 h-6 text-purple-400" data-lucide="zap"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight text-white mb-3">
                ML Infrastructure
              </h4>
<p className="text-lg text-zinc-400 leading-relaxed">
                Complete MLOps setup from training pipelines to production
                deployment. Scalable, secure, and compliant infrastructure that
                guarantees uptime.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-gradient-to-b from-surface/50 to-background">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-40">
<div className="flex items-center gap-6 mb-12">
<div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
<i className="w-5 h-5 text-cyan-400" data-lucide="database"></i>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Enterprise-Grade Data Solutions
              </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-zinc-500" data-lucide="tag"></i>
<h3 className="text-xl font-semibold tracking-tight text-white">
                    Labeling &amp; Annotation
                  </h3>
</div>
<ul className="space-y-3 text-lg text-zinc-400">
<li className="flex gap-2">
<i className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Image, video, text, &amp; audio
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    3D LiDAR and point cloud
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Industry-specific annotation
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Consensus &amp; QC workflows
                  </li>
</ul>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-zinc-500" data-lucide="network"></i>
<h3 className="text-xl font-semibold tracking-tight text-white">
                    Taxonomy &amp; Classification
                  </h3>
</div>
<ul className="space-y-3 text-lg text-zinc-400">
<li className="flex gap-2">
<i className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Custom ontology design
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Hierarchical systems
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Entity recognition mapping
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Knowledge graph creation
                  </li>
</ul>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-zinc-500" data-lucide="settings-2"></i>
<h3 className="text-xl font-semibold tracking-tight text-white">
                    Processing &amp; Enrichment
                  </h3>
</div>
<ul className="space-y-3 text-lg text-zinc-400">
<li className="flex gap-2">
<i className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Multi-source aggregation
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Preprocessing &amp; normalization
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Context augmentation
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Quality confidence metrics
                  </li>
</ul>
</div>
</div>
</div>

<div className="mb-40">
<div className="flex items-center gap-6 mb-12">
<div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center">
<i className="w-5 h-5 text-pink-400" data-lucide="cpu"></i>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Custom Model Development
              </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-zinc-500" data-lucide="bot"></i>
<h3 className="text-xl font-semibold tracking-tight text-white">
                    Architecture
                  </h3>
</div>
<ul className="space-y-3 text-lg text-zinc-400">
<li className="flex gap-2">
<i className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Computer vision systems
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    NLP and LLM foundations
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Predictive analytics
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Recommendation engines
                  </li>
</ul>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-zinc-500" data-lucide="target"></i>
<h3 className="text-xl font-semibold tracking-tight text-white">
                    Fine-Tuning
                  </h3>
</div>
<ul className="space-y-3 text-lg text-zinc-400">
<li className="flex gap-2">
<i className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    RLHF &amp; instruction tuning
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Domain transfer learning
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Model quantization
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Few-shot optimization
                  </li>
</ul>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-zinc-500" data-lucide="trending-up"></i>
<h3 className="text-xl font-semibold tracking-tight text-white">
                    Evaluation
                  </h3>
</div>
<ul className="space-y-3 text-lg text-zinc-400">
<li className="flex gap-2">
<i className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Benchmark dataset creation
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Multi-metric frameworks
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    A/B &amp; shadow testing
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Bias &amp; fairness analysis
                  </li>
</ul>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-6 mb-12">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
<i className="w-5 h-5 text-purple-400" data-lucide="server"></i>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Production-Ready Infrastructure
              </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-zinc-500" data-lucide="laptop"></i>
<h3 className="text-xl font-semibold tracking-tight text-white">
                    Environments
                  </h3>
</div>
<ul className="space-y-3 text-lg text-zinc-400">
<li className="flex gap-2">
<i className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Jupyter &amp; VSCode setup
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    TensorFlow/PyTorch tooling
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Hugging Face integration
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    W&amp;B / MLflow tracking
                  </li>
</ul>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-zinc-500" data-lucide="rocket"></i>
<h3 className="text-xl font-semibold tracking-tight text-white">
                    Deployment
                  </h3>
</div>
<ul className="space-y-3 text-lg text-zinc-400">
<li className="flex gap-2">
<i className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    TorchServe &amp; TF Serving
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    REST/GraphQL APIs
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Kubernetes orchestration
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    High-availability scaling
                  </li>
</ul>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-zinc-500" data-lucide="refresh-cw"></i>
<h3 className="text-xl font-semibold tracking-tight text-white">
                    MLOps
                  </h3>
</div>
<ul className="space-y-3 text-lg text-zinc-400">
<li className="flex gap-2">
<i className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Automated CI/CD pipelines
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Data drift detection
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Performance alerting
                  </li>
<li className="flex gap-2">
<i className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" data-lucide="check"></i>
                    Automated retraining
                  </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Flexible Engagement Options
            </h2>
<p className="text-lg text-zinc-400">
              Choose the model that fits your current stage and team
              capabilities.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface/50 border border-border rounded-2xl p-8">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">
                Pure Data
              </h3>
<p className="text-sm font-medium text-cyan-400 mb-6">
                For teams with clear requirements
              </p>
<p className="text-lg text-zinc-400 mb-8 h-16">
                High-quality labeled data at scale. You define the specs, we
                deliver the volume.
              </p>
<ul className="space-y-3 text-sm text-zinc-300 border-t border-white/10 pt-6">
<li className="flex gap-2 items-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="check"></i>
                  Client-defined volumes &amp; specs
                </li>
<li className="flex gap-2 items-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="check"></i>
                  Transparent pricing
                </li>
<li className="flex gap-2 items-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="check"></i>
                  Fast turnaround times
                </li>
<li className="flex gap-2 items-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="check"></i>
                  98%+ accuracy guarantees
                </li>
</ul>
</div>

<div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 px-3 py-1 bg-cyan-500 text-white text-xs font-medium rounded-bl-lg">
                Most Popular
              </div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">
                Data + Models
              </h3>
<p className="text-sm font-medium text-cyan-400 mb-6">
                Consultative approach
              </p>
<p className="text-lg text-zinc-400 mb-8 h-16">
                Combining data strategy with custom model development and
                fine-tuning.
              </p>
<ul className="space-y-3 text-sm text-zinc-300 border-t border-white/10 pt-6">
<li className="flex gap-2 items-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="check"></i>
                  Data requirements consulting
                </li>
<li className="flex gap-2 items-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="check"></i>
                  Custom model development
                </li>
<li className="flex gap-2 items-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="check"></i>
                  Iterative fine-tuning
                </li>
<li className="flex gap-2 items-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="check"></i>
                  Performance SLAs
                </li>
</ul>
</div>

<div className="bg-surface/50 border border-border rounded-2xl p-8">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">
                Full Stack
              </h3>
<p className="text-sm font-medium text-cyan-400 mb-6">
                Complete AI Solution
              </p>
<p className="text-lg text-zinc-400 mb-8 h-16">
                Dedicated teams providing end-to-end AI solutions from zero to
                production.
              </p>
<ul className="space-y-3 text-sm text-zinc-300 border-t border-white/10 pt-6">
<li className="flex gap-2 items-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="check"></i>
                  Dedicated project teams
                </li>
<li className="flex gap-2 items-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="check"></i>
                  Complete solution delivery
                </li>
<li className="flex gap-2 items-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="check"></i>
                  ML infrastructure setup
                </li>
<li className="flex gap-2 items-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="check"></i>
                  Strategic consulting
                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-background" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-sm font-medium text-cyan-400 tracking-wider uppercase mb-3">
              About Neo.AI
            </h2>
<h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-8 leading-tight">
              Built by AI veterans to bridge the pilot-to-production gap.
            </h3>
<div className="space-y-8">
<div>
<h4 className="text-xl font-semibold text-white mb-2">
                  Our Mission
                </h4>
<p className="text-lg text-zinc-400 leading-relaxed">
                  Despite billions invested in AI development, most companies
                  struggle to scale their models beyond proof-of-concept. We
                  bridge this gap by providing end-to-end solutions built on
                  real-world experience scaling AI systems that serve billions
                  of users.
                </p>
</div>
<div>
<h4 className="text-xl font-semibold text-white mb-2">
                  Who We Are
                </h4>
<p className="text-lg text-zinc-400 leading-relaxed">
                  Founded by engineers and data scientists with extensive
                  experience at top tech companies. We've seen firsthand the
                  challenges that derail AI initiatives: poor data quality,
                  inadequate infrastructure, and the massive gap between
                  research and reality.
                </p>
</div>
</div>
</div>
<div className="bg-surface border border-border rounded-2xl p-8 lg:p-10 flex flex-col justify-center">
<h4 className="text-2xl font-semibold tracking-tight text-white mb-8">
              Our Core Values
            </h4>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-cyan-400" data-lucide="shield-check"></i>
</div>
<div>
<h5 className="text-lg font-semibold text-white mb-1">
                    Quality First
                  </h5>
<p className="text-zinc-400">
                    We guarantee 98%+ accuracy because production systems
                    require production-grade data. No shortcuts.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-blue-400" data-lucide="briefcase"></i>
</div>
<div>
<h5 className="text-lg font-semibold text-white mb-1">
                    Business Focused
                  </h5>
<p className="text-zinc-400">
                    We measure success by your business outcomes, not just
                    technical metrics. ROI drives our decisions.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-purple-400" data-lucide="handshake"></i>
</div>
<div>
<h5 className="text-lg font-semibold text-white mb-1">
                    Transparent Partnership
                  </h5>
<p className="text-zinc-400">
                    Clear communication, honest timelines, and no surprises. We
                    operate as partners in your success.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-surface/30" id="industries">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Domain Expertise Across Sectors
            </h2>
<p className="text-lg text-zinc-400 max-w-2xl">
              Specialized solutions for complex use cases in regulated and
              high-stakes environments.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-background border border-border rounded-xl p-6 hover:border-zinc-700 transition-colors">
<i className="w-8 h-8 text-zinc-300 mb-4" data-lucide="car"></i>
<h3 className="text-xl font-semibold text-white mb-2">
                Autonomous Vehicles
              </h3>
<p className="text-zinc-400 text-base mb-4">
                3D LiDAR annotation, semantic segmentation, and scenario edge
                case handling for self-driving tech.
              </p>
</div>

<div className="bg-background border border-border rounded-xl p-6 hover:border-zinc-700 transition-colors">
<i className="w-8 h-8 text-zinc-300 mb-4" data-lucide="activity"></i>
<h3 className="text-xl font-semibold text-white mb-2">
                Healthcare &amp; Medical
              </h3>
<p className="text-zinc-400 text-base mb-4">
                HIPAA-compliant workflows for DICOM imaging, clinical NLP, and
                drug discovery models.
              </p>
</div>

<div className="bg-background border border-border rounded-xl p-6 hover:border-zinc-700 transition-colors">
<i className="w-8 h-8 text-zinc-300 mb-4" data-lucide="message-square"></i>
<h3 className="text-xl font-semibold text-white mb-2">
                LLM &amp; Generative AI
              </h3>
<p className="text-zinc-400 text-base mb-4">
                RLHF, instruction fine-tuning, safety alignment, and red-teaming
                for foundational models.
              </p>
</div>

<div className="bg-background border border-border rounded-xl p-6 hover:border-zinc-700 transition-colors">
<i className="w-8 h-8 text-zinc-300 mb-4" data-lucide="shopping-cart"></i>
<h3 className="text-xl font-semibold text-white mb-2">
                E-commerce &amp; Retail
              </h3>
<p className="text-zinc-400 text-base mb-4">
                Visual search, product categorization, sentiment analysis, and
                demand forecasting systems.
              </p>
</div>

<div className="bg-background border border-border rounded-xl p-6 hover:border-zinc-700 transition-colors">
<i className="w-8 h-8 text-zinc-300 mb-4" data-lucide="building-2"></i>
<h3 className="text-xl font-semibold text-white mb-2">
                Finance &amp; Insurance
              </h3>
<p className="text-zinc-400 text-base mb-4">
                Compliance-focused AI for document processing, fraud detection,
                and risk assessment.
              </p>
</div>

<div className="bg-background border border-border rounded-xl p-6 hover:border-zinc-700 transition-colors">
<i className="w-8 h-8 text-zinc-300 mb-4" data-lucide="smartphone"></i>
<h3 className="text-xl font-semibold text-white mb-2">
                Technology &amp; Media
              </h3>
<p className="text-zinc-400 text-base mb-4">
                Content moderation at scale, transcription, video analysis, and
                recommendation engines.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden" id="contact">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              Ready to Scale Your AI?
            </h2>
<p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              Let's discuss how we can help you move from pilot to production.
              Whether you need 10,000 labels or a complete AI platform, we're
              here to help.
            </p>
<div className="space-y-8">
<div>
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-cyan-400" data-lucide="mail"></i>
<h4 className="text-lg font-semibold text-white">Email Us</h4>
</div>
<p className="text-zinc-400 mb-1">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
<a className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors" href="mailto:contact@neoai.solutions">
                  contact@neoai.solutions
                </a>
</div>
<div className="bg-surface/50 border border-border rounded-xl p-6">
<h4 className="text-base font-semibold text-white mb-3">
                  What to Include in Your Message
                </h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li className="flex gap-2">
<i className="w-4 h-4 text-zinc-600 mt-0.5" data-lucide="arrow-right"></i>
                    Brief description of your AI project
                  </li>
<li className="flex gap-2">
<i className="w-4 h-4 text-zinc-600 mt-0.5" data-lucide="arrow-right"></i>
                    Current stage (pilot, scaling, production)
                  </li>
<li className="flex gap-2">
<i className="w-4 h-4 text-zinc-600 mt-0.5" data-lucide="arrow-right"></i>
                    Type of service needed
                  </li>
<li className="flex gap-2">
<i className="w-4 h-4 text-zinc-600 mt-0.5" data-lucide="arrow-right"></i>
                    Timeline and budget considerations
                  </li>
</ul>
</div>
<div>
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-zinc-500" data-lucide="map-pin"></i>
<h4 className="text-lg font-semibold text-white">Headquarters</h4>
</div>
<p className="text-zinc-400">
                  NEOAI Pte. Ltd.
                  <br/>
                  Singapore
                </p>
<p className="text-sm text-zinc-500 mt-2">
                  Operating globally with 24/7 coverage.
                </p>
</div>
</div>
</div>

<div className="bg-surface border border-border rounded-2xl p-8">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300">
                    First Name
                  </label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-600" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300">
                    Last Name
                  </label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-600" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300">
                  Work Email
                </label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-600" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300">Company</label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-600" placeholder="Acme Corp" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300">
                  How can we help?
                </label>
<textarea className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-600 resize-none" placeholder="Tell us about your project and requirements..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-background font-medium py-3 rounded-lg hover:bg-zinc-200 transition-colors" type="button">
                Send Message
              </button>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-background py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="infinity"></i>
</div>
<span className="text-base font-semibold tracking-tight text-white">
            Neo.AI
          </span>
</div>
<p className="text-sm text-zinc-500">
          © 2024 NEOAI Pte. Ltd. All rights reserved.
        </p>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
