import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Script for Interaction
        
        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // FAQ Accordion
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.iconify');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter hover:opacity-80 transition-opacity" href="#">
                EKATHON<span className="text-indigo-400">2025</span>
</a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#event-summary-eh">About</a>
<a className="hover:text-white transition-colors" href="#abha-apis">ABHA APIs</a>
<a className="hover:text-white transition-colors" href="#keynote-address">Keynote</a>
<a className="hover:text-white transition-colors" href="#judges">Judges</a>
<a className="px-4 py-2 bg-white text-slate-950 rounded-full font-semibold hover:bg-slate-200 transition-colors" href="#">Register</a>
</div>

<button className="md:hidden text-slate-400 hover:text-white" id="mobile-menu-btn">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>

<div className="hidden md:hidden border-t border-white/5 bg-slate-950 absolute w-full left-0 top-16 p-6 flex flex-col space-y-4" id="mobile-menu">
<a className="text-slate-400 hover:text-white" href="#">Home</a>
<a className="text-slate-400 hover:text-white" href="#event-summary-eh">About</a>
<a className="text-slate-400 hover:text-white" href="#abha-apis">ABHA APIs</a>
<a className="text-slate-400 hover:text-white" href="#keynote-address">Keynote</a>
<a className="text-slate-400 hover:text-white" href="#judges">Judges</a>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Registrations Open
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-gradient">
                Ekathon 2025
            </h1>
<p className="text-xl md:text-2xl text-slate-400 tracking-tight font-light mb-10 max-w-2xl mx-auto">
                A Healthcare Innovation Challenge. Build the future of digital health infrastructure.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-slate-950 rounded-full font-semibold hover:bg-slate-200 transition-all flex items-center justify-center gap-2" href="#event-summary-eh">
                    Start Hacking
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3 border border-white/10 text-slate-300 rounded-full font-medium hover:bg-white/5 transition-all" href="#abha-apis">
                    Explore APIs
                </a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="event-summary-eh">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Innovating Healthcare with<br/><span className="text-gradient-blue">Eka Developer Suite</span></h2>
<p className="text-slate-400 leading-relaxed mb-8 text-lg font-light">
                    Join us for India's premier healthcare hackathon. Leverage powerful APIs to solve critical challenges in the healthcare ecosystem.
                </p>
<div className="flex items-start gap-4 mb-8">
<div className="p-3 bg-white/5 rounded-lg border border-white/10">
<span className="iconify text-indigo-400" data-icon="lucide:calendar" data-width="24"></span>
</div>
<div>
<h4 className="text-white font-medium">Event Dates</h4>
<p className="text-slate-400 text-sm">5th &amp; 6th June 2025</p>
</div>
</div>
<a className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 text-sm" href="#">
                    Explore APIs <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</a>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
<p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">Backed By Industry Leaders</p>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<div className="h-12 flex items-center justify-center border border-white/5 bg-slate-900/50 rounded text-slate-300 text-sm font-semibold tracking-tighter">EKA CARE</div>
<div className="h-12 flex items-center justify-center border border-white/5 bg-slate-900/50 rounded text-slate-300 text-sm font-semibold tracking-tighter">AWS</div>
<div className="h-12 flex items-center justify-center border border-white/5 bg-slate-900/50 rounded text-slate-300 text-sm font-semibold tracking-tighter">PEER CAPITAL</div>
<div className="h-12 flex items-center justify-center border border-white/5 bg-slate-900/50 rounded text-slate-300 text-sm font-semibold tracking-tighter">NHA</div>
<div className="h-12 flex items-center justify-center border border-white/5 bg-slate-900/50 rounded text-slate-300 text-sm font-semibold tracking-tighter">HIGH TABLE</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30" id="abha-apis">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<span className="text-indigo-400 text-sm font-medium tracking-tight mb-2 block">Powered by ABDM</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Build on an ABDM-approved Platform</h2>
<p className="text-slate-400 text-lg font-light">Access the backbone of India's digital health infrastructure.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-white/10 bg-slate-950 card-hover transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
<span className="iconify" data-icon="lucide:fingerprint" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">ABHA ID Creation</h3>
<p className="text-slate-400 text-sm leading-relaxed">Seamlessly generate unique health IDs for patients, enabling unified identity across the ecosystem.</p>
</div>

<div className="p-6 rounded-xl border border-white/10 bg-slate-950 card-hover transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
<span className="iconify" data-icon="lucide:link" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Record Linking</h3>
<p className="text-slate-400 text-sm leading-relaxed">Connect diagnostic reports, prescriptions, and history to ABHA IDs for longitudinal records.</p>
</div>

<div className="p-6 rounded-xl border border-white/10 bg-slate-950 card-hover transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
<span className="iconify" data-icon="lucide:smartphone" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Digital Access</h3>
<p className="text-slate-400 text-sm leading-relaxed">Enable patients to view and share their health data digitally with consent management.</p>
</div>
</div>
<div className="mt-12 p-1 bg-white/5 rounded-2xl border border-white/10 inline-block">
<div className="flex flex-col sm:flex-row items-center gap-4 px-6 py-4">
<span className="text-sm text-slate-400">Trusting implementations by</span>
<div className="flex gap-6">
<span className="text-white font-semibold tracking-tight">Google</span>
<span className="w-px h-4 bg-white/20"></span>
<span className="text-white font-semibold tracking-tight">Samsung</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-y border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                "Innovating Healthcare with<br/><span className="text-indigo-400">Eka Developer Suite</span>"
            </h2>
<p className="text-xl text-slate-400 font-light leading-relaxed">
                Our central theme focuses on Health AI and solving complex healthcare delivery challenges. We are looking for solutions that bridge the gap between technology and patient care.
            </p>
</div>
</section>

<section className="py-24" id="keynote-address">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-12">Keynote Address</h2>
<div className="group relative rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-px">
<div className="absolute -inset-px bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="relative h-full bg-slate-950 rounded-2xl p-8 md:p-12 overflow-hidden">
<div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">

<div className="w-full aspect-[3/4] md:aspect-square bg-slate-800 rounded-xl overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:user" data-width="48"></span>
</div>
</div>
<div>
<div className="inline-block px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-medium text-indigo-400 mb-4">
                                Guest of Honor
                            </div>
<h3 className="text-2xl font-semibold text-white mb-2">Shri Kiran Gopal Vaska</h3>
<p className="text-slate-400 font-medium mb-6">Joint Secretary, NHA &amp; Mission Director, ABDM</p>
<p className="text-slate-400 leading-relaxed font-light mb-6 border-l-2 border-indigo-500/30 pl-4">
                                Leading the digital transformation of India's healthcare landscape. Shri Vaska brings unparalleled insights into the National Health Authority's vision and the future of the Ayushman Bharat Digital Mission.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-semibold tracking-tight mb-8">Why Join Ekathon?</h2>
<div className="grid sm:grid-cols-2 gap-4">
<div className="p-5 bg-slate-950 border border-white/5 rounded-lg">
<span className="iconify text-indigo-400 mb-3" data-icon="lucide:zap" data-width="20"></span>
<h4 className="text-white font-medium mb-1">Solve Real Problems</h4>
<p className="text-xs text-slate-500">Tackle actual industry hurdles.</p>
</div>
<div className="p-5 bg-slate-950 border border-white/5 rounded-lg">
<span className="iconify text-indigo-400 mb-3" data-icon="lucide:users" data-width="20"></span>
<h4 className="text-white font-medium mb-1">Connect with Experts</h4>
<p className="text-xs text-slate-500">Mentorship from leaders.</p>
</div>
<div className="p-5 bg-slate-950 border border-white/5 rounded-lg">
<span className="iconify text-indigo-400 mb-3" data-icon="lucide:trending-up" data-width="20"></span>
<h4 className="text-white font-medium mb-1">Make Real Impact</h4>
<p className="text-xs text-slate-500">Deployable solutions.</p>
</div>
<div className="p-5 bg-slate-950 border border-white/5 rounded-lg">
<span className="iconify text-indigo-400 mb-3" data-icon="lucide:award" data-width="20"></span>
<h4 className="text-white font-medium mb-1">Elite Community</h4>
<p className="text-xs text-slate-500">Join top-tier developers.</p>
</div>
</div>
</div>

<div>
<h2 className="text-2xl font-semibold tracking-tight mb-8">Who Can Participate?</h2>
<div className="space-y-3">
<div className="flex items-center gap-3 p-4 border border-white/5 rounded-lg bg-slate-950">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-slate-300 text-sm">Health-Tech Companies</span>
</div>
<div className="flex items-center gap-3 p-4 border border-white/5 rounded-lg bg-slate-950">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-slate-300 text-sm">AI Enthusiasts &amp; Data Scientists</span>
</div>
<div className="flex items-center gap-3 p-4 border border-white/5 rounded-lg bg-slate-950">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-slate-300 text-sm">Students &amp; Developers</span>
</div>
<div className="flex items-center gap-3 p-4 border border-white/5 rounded-lg bg-slate-950">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-slate-300 text-sm">Startups &amp; Healthcare Professionals</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">Focus Areas</h2>
<div className="flex flex-wrap justify-center gap-4">
<div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-slate-300 text-sm font-medium cursor-default">
                    Patient-Centric Digital Solutions
                </div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-slate-300 text-sm font-medium cursor-default">
                    Health AI-Enhanced Workflows
                </div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-slate-300 text-sm font-medium cursor-default">
                    Smart Medical Records
                </div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-slate-300 text-sm font-medium cursor-default">
                    Preventive &amp; Personalized Care
                </div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-slate-300 text-sm font-medium cursor-default">
                    ABHA Integration
                </div>
</div>

<div className="mt-20 text-center">
<p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-6">Tools &amp; APIs Available</p>
<div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
<span className="text-xl font-semibold text-slate-300 tracking-tight">DocAssist</span>
<span className="text-xl font-semibold text-slate-300 tracking-tight">EkaScribe</span>
<span className="text-xl font-semibold text-slate-300 tracking-tight">ABHA</span>
</div>
<div className="mt-8">
<a className="text-indigo-400 hover:text-indigo-300 text-sm font-medium border-b border-indigo-500/30 pb-0.5" href="#">Visit Developer Portal</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-t border-white/5" id="judges">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-16">Distinguished Judges</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group">
<div className="aspect-square bg-slate-800 rounded-xl mb-4 overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4">
<span className="block text-white font-medium text-lg">Rohit M A</span>
</div>
</div>
<p className="text-indigo-400 text-xs font-medium uppercase tracking-wide mb-1">Peer Capital</p>
<p className="text-slate-400 text-sm leading-relaxed">Managing Partner. Investment visionary with a deep focus on health-tech scalability.</p>
</div>

<div className="group">
<div className="aspect-square bg-slate-800 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4">
<span className="block text-white font-medium text-lg">Raman Upreti</span>
</div>
</div>
<p className="text-indigo-400 text-xs font-medium uppercase tracking-wide mb-1">NHA</p>
<p className="text-slate-400 text-sm leading-relaxed">Data Analytics Leader. Expert in national scale health data architecture.</p>
</div>

<div className="group">
<div className="aspect-square bg-slate-800 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4">
<span className="block text-white font-medium text-lg">Dr. Ajay Nair</span>
</div>
</div>
<p className="text-indigo-400 text-xs font-medium uppercase tracking-wide mb-1">Swasth Alliance</p>
<p className="text-slate-400 text-sm leading-relaxed">CEO. Championing interoperability and digital health standards.</p>
</div>

<div className="group">
<div className="aspect-square bg-slate-800 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4">
<span className="block text-white font-medium text-lg">Anubhav Jain</span>
</div>
</div>
<p className="text-indigo-400 text-xs font-medium uppercase tracking-wide mb-1">AWS</p>
<p className="text-slate-400 text-sm leading-relaxed">Venture Capital BDM. Empowering startups with cloud innovation.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-8">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="border-b border-white/5 pb-4">
<button className="w-full flex justify-between items-center text-left py-2 focus:outline-none" onclick="toggleFaq(this)">
<span className="text-slate-200 font-medium text-sm">Is participation free?</span>
<span className="iconify text-slate-500 transition-transform duration-300" data-icon="lucide:chevron-down" data-width="16"></span>
</button>
<div className="hidden pt-2 text-slate-400 text-sm font-light leading-relaxed">
                    Yes, Ekathon 2025 is completely free for all admitted participants.
                </div>
</div>

<div className="border-b border-white/5 pb-4">
<button className="w-full flex justify-between items-center text-left py-2 focus:outline-none" onclick="toggleFaq(this)">
<span className="text-slate-200 font-medium text-sm">Can I apply as an individual?</span>
<span className="iconify text-slate-500 transition-transform duration-300" data-icon="lucide:chevron-down" data-width="16"></span>
</button>
<div className="hidden pt-2 text-slate-400 text-sm font-light leading-relaxed">
                    Yes, you can apply individually. However, we encourage forming teams of 2-4 members for the best experience.
                </div>
</div>

<div className="border-b border-white/5 pb-4">
<button className="w-full flex justify-between items-center text-left py-2 focus:outline-none" onclick="toggleFaq(this)">
<span className="text-slate-200 font-medium text-sm">What is the venue?</span>
<span className="iconify text-slate-500 transition-transform duration-300" data-icon="lucide:chevron-down" data-width="16"></span>
</button>
<div className="hidden pt-2 text-slate-400 text-sm font-light leading-relaxed">
                    The event will be held in Bangalore. Specific venue details will be shared with shortlisted participants.
                </div>
</div>

<div className="border-b border-white/5 pb-4">
<button className="w-full flex justify-between items-center text-left py-2 focus:outline-none" onclick="toggleFaq(this)">
<span className="text-slate-200 font-medium text-sm">Do I own the IP of my project?</span>
<span className="iconify text-slate-500 transition-transform duration-300" data-icon="lucide:chevron-down" data-width="16"></span>
</button>
<div className="hidden pt-2 text-slate-400 text-sm font-light leading-relaxed">
                    Yes, the intellectual property of the hackathon project belongs to the team that built it.
                </div>
</div>

<div className="border-b border-white/5 pb-4">
<button className="w-full flex justify-between items-center text-left py-2 focus:outline-none" onclick="toggleFaq(this)">
<span className="text-slate-200 font-medium text-sm">Are there travel reimbursements?</span>
<span className="iconify text-slate-500 transition-transform duration-300" data-icon="lucide:chevron-down" data-width="16"></span>
</button>
<div className="hidden pt-2 text-slate-400 text-sm font-light leading-relaxed">
                    Limited travel support is available for top-tier student teams coming from outside the city, subject to approval.
                </div>
</div>

<div className="border-b border-white/5 pb-4">
<button className="w-full flex justify-between items-center text-left py-2 focus:outline-none" onclick="toggleFaq(this)">
<span className="text-slate-200 font-medium text-sm">What should I bring?</span>
<span className="iconify text-slate-500 transition-transform duration-300" data-icon="lucide:chevron-down" data-width="16"></span>
</button>
<div className="hidden pt-2 text-slate-400 text-sm font-light leading-relaxed">
                    Bring your laptop, chargers, any specific hardware you need, and your ID proof.
                </div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 mb-16">
<div className="md:col-span-2">
<span className="text-lg font-semibold tracking-tighter text-white">EKATHON<span className="text-slate-600">2025</span></span>
<p className="mt-4 text-slate-500 text-sm max-w-sm">
                        Building the future of healthcare, one line of code at a time.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Terms &amp; Conditions</h4>
<ul className="space-y-2 text-slate-500 text-xs list-disc pl-4">
<li>All code must be written during the event.</li>
<li>Respect the code of conduct.</li>
<li>Decisions by judges are final.</li>
<li>Data privacy rules apply.</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Connect</h4>
<div className="space-y-2">
<a className="block text-slate-500 hover:text-white text-sm transition-colors" href="#">Eka Developer Portal</a>
<a className="block text-slate-500 hover:text-white text-sm transition-colors" href="#">Contact Support</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xs font-bold text-slate-300">EKA CARE</span>
<span className="text-xs font-bold text-slate-300">NHA</span>
</div>
<p className="text-slate-600 text-xs">© 2025 Ekathon. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
