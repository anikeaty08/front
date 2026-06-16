import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      const submitBtn = document.getElementById('schedule-btn');
      const contactForm = document.getElementById('contact-form');
      const privacyCheck = document.getElementById('privacy-checkbox');

      if (submitBtn && contactForm) {
        submitBtn.addEventListener('click', async () => {
          let isValid = true;
          
          // Basic Validation
          const inputs = contactForm.querySelectorAll('input[type="text"], input[type="email"], textarea');
          inputs.forEach(input => {
            if (!input.value.trim()) {
              input.classList.add('border-red-500/50', 'bg-red-500/5');
              input.classList.remove('border-white/10', 'bg-white/5');
              isValid = false;
            } else {
              input.classList.remove('border-red-500/50', 'bg-red-500/5');
              input.classList.add('border-white/10', 'bg-white/5');
            }
          });

          if (privacyCheck && !privacyCheck.checked) {
             // Shake animation or error indication for checkbox could go here
             isValid = false;
             alert("Please agree to the privacy policy.");
          }

          if (isValid) {
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            // Add metadata for the "new lead"
            data.id = crypto.randomUUID();
            data.submittedAt = new Date().toISOString();
            data.status = 'NEW_LEAD';
            data.source = 'Upscale Landing Page';

            // --- CLIENT DATABASE LOGIC START ---
            // Simulating a Client Database using LocalStorage
            try {
                const clientDB = JSON.parse(localStorage.getItem('client_database') || '[]');
                clientDB.push(data);
                localStorage.setItem('client_database', JSON.stringify(clientDB));
                console.log("SUCCESS: Lead added to client database.", data);
            } catch (e) {
                console.error("DATABASE ERROR: Could not save to client database.", e);
            }
            // --- CLIENT DATABASE LOGIC END ---

            // Webhook Integration (as per original logic)
            try {
                await fetch('https://mejiamichael05.app.n8n.cloud/webhook/242d3138-d4c7-4ea9-b370-8a4d5c631617', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
            } catch (error) {
                console.error('Webhook error:', error);
                // Proceed anyway since we saved to client DB
            }

            // Redirect on success
            setTimeout(() => {
                window.location.href = "https://calendly.com/mejia-michael05/30min";
            }, 800);
          }
        });

        // Clear error states on input
        contactForm.addEventListener('input', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                e.target.classList.remove('border-red-500/50', 'bg-red-500/5');
                e.target.classList.add('border-white/10', 'bg-white/5');
            }
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative" id="main-content">

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md transition-all duration-300">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<svg className="lucide lucide-bot w-5 h-5" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<span className="text-white font-medium tracking-tight text-lg group-hover:opacity-80 transition-opacity">
              Upscale.AI
            </span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#solutions">
              Solutions
            </a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#pricing">
              Pricing
            </a>
</div>

<div className="flex items-center gap-4">
<a className="hover:bg-neutral-200 transition-colors text-sm font-medium text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="#contact">
              Book Demo
            </a>
</div>
</div>
</nav>

<main className="z-10 md:pt-48 md:pb-32 pt-48 pr-6 pb-32 pl-6 relative">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-400 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            Now integrating with Gemini 3, GPT 5 &amp; N8N
          </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
            Scale your intelligence,
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
              automate the rest.
            </span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Upscale.AI builds bespoke artificial intelligence infrastructures
            that integrate seamlessly with your existing stack. Reduce overhead,
            increase output.
          </p>
</div>

</main>

<section className="relative z-10 py-24 px-6 border-y border-white/5 bg-neutral-900/20" id="solutions">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
              Complete AI Ecosystem
            </h2>
<p className="text-neutral-400">
              We don't just wrap an API. We build end-to-end intelligent
              pipelines tailored to your business data.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
<svg className="lucide lucide-cpu w-48 h-48 text-indigo-500" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10">
<svg className="lucide lucide-workflow text-white w-5 h-5" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">
                  Autonomous Workflows
                </h3>
<p className="text-sm text-neutral-400 max-w-sm">
                  Connect your CRM, Email, and Database. Let our agents handle
                  customer support, lead qualification, and data entry without
                  human intervention.
                </p>
</div>

<div className="mt-8 flex items-center gap-2 text-xs font-mono text-neutral-500 border-t border-white/5 pt-6">
<span className="bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded">
                  Trigger
                </span>
<svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="bg-purple-500/10 text-purple-400 px-2 py-1 rounded">
                  Analyze
                </span>
<svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded">
                  Action
                </span>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10">
<svg className="lucide lucide-bar-chart-3 text-white w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">
                Predictive Analytics
              </h3>
<p className="text-sm text-neutral-400">
                Turn raw data into foresight. Our models predict churn, revenue
                spikes, and inventory needs.
              </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10">
<svg className="lucide lucide-message-square-code text-white w-5 h-5" data-lucide="message-square-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path><path d="m10 8-3 3 3 3"></path><path d="m14 14 3-3-3-3"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Custom LLMs</h3>
<p className="text-sm text-neutral-400">
                Fine-tuned models trained exclusively on your proprietary data,
                ensuring privacy and relevance.
              </p>
</div>

<div className="md:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center h-full">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10">
<svg className="lucide lucide-shield-check text-white w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">
                    Enterprise Grade Security
                  </h3>
<p className="text-sm text-neutral-400 mb-6">
                    SOC2 Compliant infrastructure. We ensure your data is
                    encrypted, siloed, and never used to train public models.
                  </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-300">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                      PII Redaction
                    </li>
<li className="flex items-center gap-2 text-xs text-neutral-300">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                      Role-based Access Control
                    </li>
</ul>
</div>
<div className="w-full md:w-1/2 bg-neutral-900 rounded-lg border border-white/10 p-4 font-mono text-xs text-neutral-400">
<div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="ml-auto opacity-50">security.log</span>
</div>
<div className="space-y-1">
<p>
<span className="text-green-400">✓</span>
                      Encryption handshake... OK
                    </p>
<p>
<span className="text-green-400">✓</span>
                      Data sanitation... OK
                    </p>
<p className="text-indigo-400">&gt; System secured.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative" id="pricing">
<div className="max-w-7xl mr-auto ml-auto">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">
            Flexible Engagement Models
          </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-white/10 rounded-2xl p-8 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors">
<div className="text-sm font-medium text-neutral-400 mb-2">
                Audit &amp; Strategy
              </div>
<div className="text-3xl font-medium text-white mb-6">
                $1,000
                <span className="text-base font-normal text-neutral-500">
                  /one-time
                </span>
</div>
<p className="text-sm text-neutral-400 mb-8 h-20">
                Perfect for businesses identifying where AI fits. We deliver a
                comprehensive roadmap.
              </p>
</div>

<div className="bg-neutral-900/50 border-indigo-500/50 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_0_30px_rgba(99,102,241,0.1)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full">
                Most Popular
              </div>
<div className="text-sm font-medium text-indigo-400 mb-2">
                Build &amp; Integrate
              </div>
<div className="text-3xl font-medium text-white mb-6">
                Custom
                <span className="text-base font-normal text-neutral-500">
                  /project
                </span>
</div>
<p className="text-sm text-neutral-400 h-20 mb-8">
                Full-service development of custom agents, LLM fine-tuning, and
                workflow automation.
              </p>
</div>

<div className="border border-white/10 rounded-2xl p-8 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors">
<div className="text-sm font-medium text-neutral-400 mb-2">
                Partner
              </div>
<div className="text-3xl font-medium text-white mb-6">
                Retainer
                <span className="text-base font-normal text-neutral-500">
                  /monthly
                </span>
</div>
<p className="text-sm text-neutral-400 mb-8 h-20">
                Ongoing optimization, model updates, and dedicated engineering
                resources.
              </p>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative" id="contact">
<div className="max-w-4xl mx-auto">
<div className="rounded-3xl bg-[#080808] border border-white/10 p-8 md:p-16 relative overflow-hidden shadow-2xl">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none"></div>
<div className="z-10 relative flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4 text-center">
                Ready to upscale?
              </h2>
<p className="text-neutral-400 max-w-lg mx-auto mb-10 text-lg text-center leading-relaxed">
                Join forward-thinking companies automating their future.
                Consultations are free, the results are priceless.
              </p>
<form className="w-full max-w-2xl flex flex-col gap-4" id="contact-form">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm" name="full_name" placeholder="Full Name" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm" name="business_name" placeholder="Business Name" type="text"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm" name="business_field" placeholder="Field of Business" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm" name="email" placeholder="Work Email" type="email"/>
</div>

<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm" inputmode="tel" name="phone" placeholder="Phone Number" type="text"/>

<div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 flex flex-row items-center justify-between gap-4">
<span className="text-sm text-neutral-400">
                    Familiar with AI automation?
                  </span>
<div className="flex gap-6 items-center">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" name="ai_familiarity" type="radio" value="yes"/>
<div className="w-4 h-4 rounded-full border border-neutral-600 peer-checked:border-white peer-checked:bg-white relative transition-colors"></div>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
                        Yes
                      </span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" name="ai_familiarity" type="radio" value="no"/>
<div className="w-4 h-4 rounded-full border border-neutral-600 peer-checked:border-white peer-checked:bg-white relative transition-colors"></div>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
                        No
                      </span>
</label>
</div>
</div>

<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm resize-none" name="summary" placeholder="Brief summary of your business needs..." rows="4"></textarea>

<button className="w-full bg-white text-black font-semibold py-3.5 rounded-lg hover:bg-neutral-200 transition-colors mt-2 text-sm tracking-tight shadow-[0_0_20px_rgba(255,255,255,0.1)]" id="schedule-btn" type="button">
                  Schedule Introduction
                </button>

<div className="flex items-center justify-center gap-2 mt-2">
<label className="inline-flex items-center cursor-pointer group">
<input className="peer sr-only" id="privacy-checkbox" name="privacy_policy" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-600 rounded bg-transparent peer-checked:bg-indigo-600 peer-checked:border-indigo-600 flex items-center justify-center transition-colors group-hover:border-neutral-500">
<svg className="lucide lucide-check w-3 h-3 text-white hidden peer-checked:block stroke-[3px]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="ml-2 text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
                      I agree to the privacy policy
                    </span>
</label>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="z-10 bg-black border-white/5 border-t pt-12 pr-6 pb-12 pl-6 relative">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
<svg className="lucide lucide-bot w-3 h-3" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<span className="text-white font-medium tracking-tight">
                Upscale.AI
              </span>
</div>
<p className="text-sm text-neutral-500 max-w-xs">
              Building the intelligent infrastructure for tomorrow's
              enterprises.
            </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
<div className="flex flex-col gap-4">
<h4 className="text-sm font-medium text-white">Product</h4>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Features</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Integrations</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Security</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-medium text-white">Company</h4>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">About</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Careers</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-medium text-white">Legal</h4>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row max-w-7xl border-white/5 border-t mt-12 mr-auto ml-auto pt-8 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex items-center gap-6">
<p className="text-xs text-neutral-600">
              © 2024 Upscale.AI Inc. All rights reserved.
            </p>
<a className="hover:text-white transition-colors text-xs text-neutral-600" href="/login-interface">
              Owner Login
            </a>
</div>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</footer>
</div>



    </>
  );
}
