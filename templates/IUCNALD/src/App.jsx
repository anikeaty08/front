import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const exploreBtn = document.getElementById('exploreBtn');
        const featuresSection = document.getElementById('features');
        
        exploreBtn.addEventListener('click', () => {
            // Show the features section with animation
            featuresSection.classList.remove('hidden');
            featuresSection.classList.add('slide-down-enter');
            
            // Scroll to features section
            setTimeout(() => {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    // If clicking features nav link and features are hidden, show them first
                    if (this.getAttribute('href') === '#features' && featuresSection.classList.contains('hidden')) {
                        featuresSection.classList.remove('hidden');
                        featuresSection.classList.add('slide-down-enter');
                        setTimeout(() => {
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 100);
                    } else {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0">
<div className="matrix-line absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-40"></div>
<div className="matrix-line absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-40"></div>
<div className="matrix-line absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-40"></div>
<div className="matrix-line absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-40"></div>
<div className="matrix-line absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-40"></div>
<div className="matrix-line absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-40"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 glass-header">
<nav className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-emerald-400 rounded flex items-center justify-center">
<span className="text-black font-bold text-sm">AI</span>
</div>
<span className="text-emerald-400 font-bold text-xl">Terminal</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="nav-link text-gray-300 hover:text-emerald-400" href="#hero">Home</a>
<a className="nav-link text-gray-300 hover:text-emerald-400" href="#features" id="nav-features">Features</a>
<a className="nav-link text-gray-300 hover:text-emerald-400" href="#console">Console</a>
<a className="nav-link text-gray-300 hover:text-emerald-400" href="#docs">Docs</a>
<button className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-4 py-2 rounded transition-all">
                        Get Started
                    </button>
</div>
<div className="md:hidden">
<button className="text-emerald-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</nav>
</header>

<section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20" id="hero">
<div className="text-center max-w-4xl mx-auto">
<h1 className="pulse-headline text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
                The Terminal for the AI Era
            </h1>
<p className="animate-sequence-1 text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 font-light">
                Deploy, debug, and scale AI models — faster.
            </p>
<div className="animate-sequence-2">
<button className="neon-button bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-lg px-12 py-4 rounded-lg border-2 border-emerald-400" id="exploreBtn">
                    Explore Features
                </button>
</div>
<div className="animate-sequence-3 mt-16 flex items-center justify-center text-emerald-400 text-sm font-mono opacity-60">
<span>&gt;</span><span className="typewriter ml-1">Ready to initialize AI workflow...</span>
</div>
</div>
</section>

<section className="relative z-10 py-20 px-6 hidden" id="features">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
                    Terminal-Style Features
                </h2>
<p className="text-xl text-gray-300 font-light">
                    Powerful AI deployment tools at your fingertips
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="feature-card p-8 rounded-lg backdrop-blur-sm">
<div className="flex items-center mb-4">
<span className="text-emerald-400 text-2xl mr-3">▸</span>
<h3 className="text-xl font-bold text-emerald-400">End-to-End Deployment</h3>
</div>
<p className="text-gray-300 mb-4 leading-relaxed">
                        Deploy AI models from development to production with automated scaling and zero-downtime updates.
                    </p>
<div className="font-mono text-sm text-gray-400">
<span className="text-emerald-400">$</span> ai deploy --model gpt-4 --env prod
                    </div>
</div>

<div className="feature-card p-8 rounded-lg backdrop-blur-sm">
<div className="flex items-center mb-4">
<span className="text-cyan-400 text-2xl mr-3">▸</span>
<h3 className="text-xl font-bold text-cyan-400">Token-Level Debugging</h3>
</div>
<p className="text-gray-300 mb-4 leading-relaxed">
                        Debug AI models at the token level with real-time inspection and detailed error tracing.
                    </p>
<div className="font-mono text-sm text-gray-400">
<span className="text-cyan-400">$</span> ai debug --trace tokens --model custom
                    </div>
</div>

<div className="feature-card p-8 rounded-lg backdrop-blur-sm">
<div className="flex items-center mb-4">
<span className="text-purple-400 text-2xl mr-3">▸</span>
<h3 className="text-xl font-bold text-purple-400">Live Model Logs</h3>
</div>
<p className="text-gray-300 mb-4 leading-relaxed">
                        Monitor model performance in real-time with comprehensive logging and analytics dashboard.
                    </p>
<div className="font-mono text-sm text-gray-400">
<span className="text-purple-400">$</span> ai logs --follow --model production
                    </div>
</div>

<div className="feature-card p-8 rounded-lg backdrop-blur-sm">
<div className="flex items-center mb-4">
<span className="text-orange-400 text-2xl mr-3">&gt;</span>
<h3 className="text-xl font-bold text-orange-400">GPU Cluster Management</h3>
</div>
<p className="text-gray-300 mb-4 leading-relaxed">
                        Efficiently manage and scale GPU resources across multiple cloud providers with intelligent allocation.
                    </p>
<div className="font-mono text-sm text-gray-400">
<span className="text-orange-400">$</span> ai cluster scale --gpus 8 --type A100
                    </div>
</div>

<div className="feature-card p-8 rounded-lg backdrop-blur-sm">
<div className="flex items-center mb-4">
<span className="text-pink-400 text-2xl mr-3">&gt;</span>
<h3 className="text-xl font-bold text-pink-400">Model Versioning</h3>
</div>
<p className="text-gray-300 mb-4 leading-relaxed">
                        Track, compare, and rollback model versions with built-in A/B testing and performance metrics.
                    </p>
<div className="font-mono text-sm text-gray-400">
<span className="text-pink-400">$</span> ai version create --tag v2.1.0 --deploy
                    </div>
</div>

<div className="feature-card p-8 rounded-lg backdrop-blur-sm">
<div className="flex items-center mb-4">
<span className="text-yellow-400 text-2xl mr-3">&gt;</span>
<h3 className="text-xl font-bold text-yellow-400">Security &amp; Compliance</h3>
</div>
<p className="text-gray-300 mb-4 leading-relaxed">
                        Enterprise-grade security with encryption, audit logs, and compliance reporting for regulated industries.
                    </p>
<div className="font-mono text-sm text-gray-400">
<span className="text-yellow-400">$</span> ai security audit --compliance SOC2
                    </div>
</div>
</div>

<div className="mt-16 bg-black/60 backdrop-blur-sm border border-emerald-400/20 rounded-lg p-6">
<div className="flex items-center mb-4">
<div className="flex space-x-2 mr-4">
<div className="w-3 h-3 bg-red-500 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
</div>
<span className="text-emerald-400 font-mono text-sm">AI Terminal Demo</span>
</div>
<div className="font-mono text-sm space-y-2">
<div><span className="text-emerald-400">user@ai-terminal:~$</span> ai status</div>
<div className="text-green-400">✓ 12 models active</div>
<div className="text-green-400">✓ GPU cluster online (8/8)</div>
<div className="text-green-400">✓ 99.9% uptime</div>
<div><span className="text-emerald-400">user@ai-terminal:~$</span> ai deploy --model gpt-4-turbo</div>
<div className="text-yellow-400">⚡ Deploying to production...</div>
<div className="text-green-400">✓ Deployment successful</div>
<div className="flex"><span className="text-emerald-400">user@ai-terminal:~$</span><span className="animate-pulse ml-1">|</span></div>
</div>
</div>
</div>
</section>


    </>
  );
}
