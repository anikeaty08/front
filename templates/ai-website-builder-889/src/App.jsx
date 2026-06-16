import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



      // Simple Router & Logic
      const steps = ['step-auth', 'step-prompt', 'step-generating', 'step-preview', 'step-published'];

      function goToStep(stepId) {
          steps.forEach(id => document.getElementById(id).classList.add('hidden'));
          const el = document.getElementById(stepId);
          el.classList.remove('hidden');
          el.classList.add('fade-enter');

          // Cleanup animations
          setTimeout(() => el.classList.remove('fade-enter'), 500);
      }

      function handleLogin() {
          // Simulate Google Auth Delay
          const btn = document.querySelector('#step-auth button');
          const originalContent = btn.innerHTML;
          btn.innerHTML = '<iconify-icon icon="line-md:loading-twotone-loop" width="20"></iconify-icon>';
          btn.classList.add('opacity-80', 'cursor-not-allowed');

          setTimeout(() => {
              document.getElementById('user-profile').classList.remove('hidden');
              document.getElementById('user-profile').classList.add('flex');
              goToStep('step-prompt');
          }, 1200);
      }

      function fillPrompt(text) {
          const textarea = document.getElementById('prompt-text');
          textarea.value = text;
          textarea.focus();
      }

      function startGeneration() {
          const prompt = document.getElementById('prompt-text').value;
          if(!prompt) return;

          // Update Mock Preview based on prompt keywords (Simple heuristic)
          const title = document.getElementById('preview-title');
          if(prompt.toLowerCase().includes('saas')) {
              title.innerHTML = 'Scale your business<br>with intelligence.';
          } else if (prompt.toLowerCase().includes('coffee')) {
              title.innerHTML = 'Roasted with love<br>in the heart of the city.';
          } else {
              title.innerHTML = 'Capturing moments in<br>their purest form.';
          }

          goToStep('step-generating');
          runGenerationSequence();
      }

      function runGenerationSequence() {
          const items = document.querySelectorAll('.step-item');
          const terminal = document.getElementById('terminal-content');
          const logs = [
              '> parsing_intent...',
              '> generating_components...',
              '> optimizing_images --quality=high',
              '> applying_styles --theme=zinc',
              '> build_success'
          ];

          // Reset state
          items.forEach(item => {
              const icon = item.querySelector('.status-icon');
              icon.classList.remove('bg-indigo-500', 'border-indigo-500', 'text-white');
              icon.classList.add('border-zinc-800', 'text-transparent');
              item.classList.remove('active');
          });

          // Animate items
          let totalDelay = 0;

          items.forEach((item, index) => {
              const delay = parseInt(item.dataset.delay);
              totalDelay = Math.max(totalDelay, delay);

              setTimeout(() => {
                  item.classList.add('active');
                  const icon = item.querySelector('.status-icon');
                  // Processing state
                  icon.classList.remove('border-zinc-800', 'text-transparent');
                  icon.classList.add('border-indigo-500', 'text-indigo-500'); // loading state

                  // Add log
                  if(logs[index]) {
                      const logLine = document.createElement('div');
                      logLine.className = 'text-zinc-400 fade-enter';
                      logLine.innerText = logs[index];
                      terminal.appendChild(logLine);
                      terminal.parentElement.scrollTop = terminal.parentElement.scrollHeight;
                  }

                  setTimeout(() => {
                      // Completed state
                      icon.classList.remove('border-indigo-500', 'text-indigo-500');
                      icon.classList.add('bg-indigo-500', 'border-indigo-500', 'text-white');
                  }, 800);

              }, delay);
          });

          // Finish
          setTimeout(() => {
              goToStep('step-preview');
          }, 4000);
      }

      function publishSite() {
          const btn = document.querySelector('#step-preview button[onclick="publishSite()"]');
          btn.innerHTML = '<iconify-icon icon="line-md:loading-twotone-loop" width="16"></iconify-icon> Publishing...';

          setTimeout(() => {
              // Generate random string for URL
              const id = Math.random().toString(36).substring(7);
              document.getElementById('final-url').innerText = `https://craft.app/johndoe/${id}`;
              goToStep('step-published');
              btn.innerHTML = '<span>Publish</span><iconify-icon icon="solar:plain-2-linear" width="14"></iconify-icon>';
          }, 1500);
      }

      function copyLink() {
          const text = document.getElementById('final-url').innerText;
          navigator.clipboard.writeText(text);
          const btn = document.querySelector('#step-published button[onclick="copyLink()"]');
          const original = btn.innerHTML;

          btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon> Copied';
          btn.classList.add('text-green-400');

          setTimeout(() => {
              btn.innerHTML = original;
              btn.classList.remove('text-green-400');
          }, 2000);
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md z-50 flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-100 rounded flex items-center justify-center text-zinc-950 font-bold text-xs">
          V
        </div>
<span className="text-zinc-100 font-medium tracking-tight text-sm">
          VANTAGE
        </span>
<span className="bg-zinc-900 border text-xs px-2 py-0.5 rounded-full ml-2 hidden sm:inline-block text-red-500 border-red-900/30 font-bold">
          PRO
        </span>
</div>
<div className="flex items-center gap-4 text-xs font-medium">
<a className="hover:text-zinc-100 transition-colors" href="#">
          Documentation
        </a>
<div className="hidden flex items-center gap-2 pl-4 border-l border-zinc-800" id="user-profile">
<div className="w-6 h-6 rounded-full bg-gradient-to-br text-[10px] text-white flex items-center justify-center from-zinc-100 to-zinc-400 text-zinc-950 font-bold">
            JD
          </div>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center relative w-full h-screen pt-16 px-4">

<div className="w-full max-w-sm mx-auto flex flex-col items-center text-center fade-enter" id="step-auth">
<div className="mb-8 relative">
<div className="absolute inset-0 blur-2xl opacity-20 rounded-full bg-red-600"></div>
<iconify-icon className="text-zinc-100 relative z-10" icon="solar:crown-star-bold-duotone" width="48"></iconify-icon>
</div>
<h1 className="text-2xl sm:text-3xl text-zinc-100 font-semibold tracking-tight mb-2">
          Engineered for Excellence.
        </h1>
<p className="text-sm text-zinc-500 mb-8 max-w-xs mx-auto">
          Create fully immersive, high-performance digital flagship stores. The
          platform for luxury brands.
        </p>
<button className="group w-full bg-white hover:bg-zinc-200 text-zinc-950 transition-all duration-200 h-10 rounded-lg flex items-center justify-center gap-3 font-medium text-sm" onclick="handleLogin()">
<iconify-icon icon="simple-icons:nike" width="18"></iconify-icon>
<span>Enter Design Studio</span>
</button>
<p className="mt-6 text-xs text-zinc-600">
          By continuing, you agree to our Terms of Service.
        </p>
</div>

<div className="hidden w-full max-w-2xl mx-auto flex flex-col fade-enter" id="step-prompt">
<div className="mb-6 flex items-center gap-2 text-zinc-500 text-xs">
<iconify-icon icon="solar:user-circle-linear" width="16"></iconify-icon>
<span>John Doe</span>
<span className="text-zinc-700">/</span>
<span className="text-zinc-300">New Project</span>
</div>
<h2 className="text-2xl text-zinc-100 font-medium tracking-tight mb-6">
          Define your legacy.
        </h2>
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r rounded-xl opacity-20 group-hover:opacity-40 transition duration-500 blur from-red-600 to-orange-600"></div>
<div className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-2xl">
<textarea className="w-full bg-transparent border-none text-zinc-200 text-lg placeholder-zinc-600 focus:ring-0 resize-none min-h-[120px] outline-none leading-relaxed" id="prompt-text" placeholder="Describe your vision... e.g., A high-octane product page for the new Air Max, featuring webGL gravity physics, dark mode aesthetics, and bold typographic motion."></textarea>
<div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-800/50">
<div className="flex gap-2">
<button className="p-2 hover:bg-zinc-800 rounded-md text-zinc-500 hover:text-zinc-300 transition-colors" title="Upload Image Reference">
<iconify-icon icon="solar:gallery-add-linear" width="20"></iconify-icon>
</button>
<button className="p-2 hover:bg-zinc-800 rounded-md text-zinc-500 hover:text-zinc-300 transition-colors" title="Voice Input">
<iconify-icon icon="solar:microphone-2-linear" width="20"></iconify-icon>
</button>
</div>
<button className="bg-zinc-100 hover:bg-white text-zinc-950 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]" onclick="startGeneration()">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
<span>Generate Site</span>
</button>
</div>
</div>
</div>
<div className="mt-6 flex gap-3 overflow-x-auto pb-2 no-scrollbar">
<button className="whitespace-nowrap px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs hover:border-red-600 hover:text-red-500 transition-colors" onclick="fillPrompt('Immersive landing page for limited edition sneakers with 3D rotation')">
            Sneaker Drop
          </button>
<button className="whitespace-nowrap px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs hover:border-red-600 hover:text-red-500 transition-colors" onclick="fillPrompt('High-fashion brutalist editorial with parallax video backgrounds')">
            Luxury Editorial
          </button>
<button className="whitespace-nowrap px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs hover:border-red-600 hover:text-red-500 transition-colors" onclick="fillPrompt('Futuristic sports tech showcase with interactive particles')">
            Sport Tech
          </button>
</div>
</div>

<div className="hidden w-full max-w-md mx-auto flex flex-col items-center fade-enter" id="step-generating">
<div className="w-12 h-12 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center mb-6 relative overflow-hidden">
<div className="absolute inset-0 shimmer opacity-20"></div>
<iconify-icon className="text-zinc-100" icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-zinc-100 font-medium mb-8 text-lg">
          Architecting Digital Experience
        </h3>
<div className="w-full space-y-4">

<div className="flex items-center gap-4 group step-item" data-delay="500">
<div className="w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center status-icon text-transparent transition-all duration-500">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-400 group-[.active]:text-zinc-100 transition-colors">
              Calibrating brand aesthetics...
            </span>
</div>

<div className="flex items-center gap-4 group step-item" data-delay="1500">
<div className="w-6 h-6 rounded-full border border-zinc-800 flex items-center justify-center status-icon text-transparent transition-all duration-500">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-500 group-[.active]:text-zinc-100 transition-colors">
              Rendering high-fidelity assets...
            </span>
</div>

<div className="flex items-center gap-4 group step-item" data-delay="2800">
<div className="w-6 h-6 rounded-full border border-zinc-800 flex items-center justify-center status-icon text-transparent transition-all duration-500">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-500 group-[.active]:text-zinc-100 transition-colors">
              Injecting motion physics...
            </span>
</div>
</div>

<div className="mt-8 w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 font-mono text-[10px] text-zinc-500 h-24 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>
<div className="flex flex-col gap-1" id="terminal-content">
<span className="text-indigo-400">
              &gt; init_project --template=modern
            </span>
</div>
</div>
</div>

<div className="hidden w-full h-full flex flex-col fade-enter pb-6" id="step-preview">

<div className="flex items-center justify-between mb-4 max-w-7xl mx-auto w-full px-2">
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-100 transition-colors" onclick="goToStep('step-prompt')">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
              Back
            </button>
<div className="h-4 w-[1px] bg-zinc-800"></div>
<div className="flex items-center gap-2">
<button className="p-1.5 bg-zinc-800 text-zinc-100 rounded hover:bg-zinc-700 transition-colors">
<iconify-icon icon="solar:laptop-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 text-zinc-500 rounded hover:text-zinc-300 transition-colors">
<iconify-icon icon="solar:smartphone-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-zinc-500 hidden sm:inline">
              Last saved just now
            </span>
<button className="text-white px-4 py-1.5 rounded-lg text-xs font-medium tracking-wide flex items-center gap-2 transition-all bg-red-600 hover:bg-red-500 shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)]" onclick="publishSite()">
<span>Publish</span>
<iconify-icon icon="solar:plain-2-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="flex-grow w-full max-w-7xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden flex flex-col relative">

<div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex-grow flex justify-center">
<div className="bg-zinc-950 border border-zinc-800 rounded-md px-3 py-1 flex items-center gap-2 text-[10px] text-zinc-500 w-64 justify-center">
<iconify-icon icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
                craft-preview-x829.vercel.app
              </div>
</div>
<div className="w-10"></div>

</div>

<div className="flex-grow bg-white relative overflow-y-auto">

<div className="px-8 py-20 sm:px-16 text-center max-w-4xl mx-auto">
<div className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium mb-6">
                New Season 2024
              </div>
<h1 className="text-6xl sm:text-8xl font-black text-zinc-900 tracking-tighter mb-6 leading-[0.9] uppercase italic" id="preview-title">
                DEFY
                <br/>
                GRAVITY.
              </h1>
<p className="text-zinc-500 text-lg mb-10 max-w-2xl mx-auto leading-relaxed" id="preview-desc">
                Engineered for the fearless. The next generation of speed
                delivers precision, power, and absolute control.
              </p>
<div className="flex justify-center gap-4">
<button className="bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors uppercase tracking-widest text-xs font-bold">
                  Shop The Drop
                </button>
<button className="bg-white border border-zinc-200 text-zinc-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors uppercase tracking-widest text-xs font-bold">
                  Watch Film
                </button>
</div>
</div>

<div className="px-8 pb-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="aspect-[4/5] bg-zinc-100 rounded-xl overflow-hidden relative group">
<img alt="Landscape" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/5] bg-zinc-100 rounded-xl overflow-hidden relative group md:mt-12">
<img alt="Nature" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1517836357463-c25dfe21529b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/5] bg-zinc-100 rounded-xl overflow-hidden relative group">
<img alt="Portrait" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>

<div className="hidden w-full max-w-lg mx-auto flex flex-col items-center text-center fade-enter relative" id="step-published">

<div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 blur-[100px] rounded-full pointer-events-none bg-red-600/20"></div>
<div className="w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-6 shadow-xl text-white from-red-600 to-orange-600 shadow-red-500/20">
<iconify-icon icon="solar:rocket-2-bold" width="32"></iconify-icon>
</div>
<h2 className="text-3xl text-zinc-100 font-semibold tracking-tight mb-2">
          Global Launch Active.
        </h2>
<p className="text-zinc-500 mb-8">
          Your flagship store is now live on the edge network.
        </p>
<div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-1.5 flex items-center gap-2 mb-8">
<div className="flex-grow px-3 py-2 text-sm text-zinc-300 font-mono text-left truncate" id="final-url">
            https://craft.app/johndoe/portfolio-v1
          </div>
<button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-2" onclick="copyLink()">
<iconify-icon icon="solar:copy-linear" width="14"></iconify-icon>
            Copy
          </button>
</div>
<div className="flex gap-3 w-full">
<a className="flex-1 bg-white hover:bg-zinc-200 text-zinc-950 h-10 rounded-lg flex items-center justify-center gap-2 font-medium text-sm transition-colors" href="#">
            Visit Site
            <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
<button className="flex-1 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 h-10 rounded-lg font-medium text-sm transition-colors" onclick="goToStep('step-prompt')">
            Dashboard
          </button>
</div>
</div>
</main>


    </>
  );
}
