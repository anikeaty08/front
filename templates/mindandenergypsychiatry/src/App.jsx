import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function switchPage(pageId) {
      // Hide all sections
      const sections = document.querySelectorAll('.page-section');
      sections.forEach(section => {
        section.classList.remove('active');
        section.classList.remove('fade-in'); // Reset animation
      });

      // Show selected section
      const target = document.getElementById(pageId);
      if (target) {
        target.classList.add('active');
        // Small timeout to re-trigger animation cleanly
        setTimeout(() => target.classList.add('fade-in'), 10);
      }
      
      // Update window scroll
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="spline-container absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<iframe frameborder="0" height="100%" src="https://my.spline.design/claritystream-a72K0KUwFoZV82QBzvu52Kai/" width="100%"></iframe>
</div>

<div className="bg-grid"></div>

<div className="content-container">

<nav className="container mx-auto px-6 py-6 border-b border-white/5 relative z-50 backdrop-blur-sm sticky top-0 bg-black/50">
<div className="flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#" onclick="switchPage('home'); return false;">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-teal-500/20 to-blue-500/20 border border-white/10 shadow-inner transition-colors group-hover:border-white/20">
<iconify-icon className="text-teal-400" height="18" icon="lucide:zap" width="18"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-white/90">Mind &amp; Energy</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
<button className="nav-link hover:text-white transition-colors duration-300 focus:outline-none" onclick="switchPage('services')">Services</button>
<button className="nav-link hover:text-white transition-colors duration-300 focus:outline-none" onclick="switchPage('about')">About Us</button>
<button className="nav-link hover:text-white transition-colors duration-300 cursor-not-allowed opacity-50">Insurance</button>
<button className="nav-link hover:text-white transition-colors duration-300 cursor-not-allowed opacity-50">FAQ</button>
</div>

<div className="flex items-center gap-4">
<button className="hidden sm:block text-sm text-gray-400 hover:text-white transition-colors font-medium">
            Log in
          </button>
<button className="text-xs sm:text-sm bg-white/10 border border-white/10 hover:bg-white/20 text-white rounded-md px-4 py-2 transition-all duration-300 font-medium shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            Patient Portal
          </button>
</div>
</div>
</nav>

<main className="page-section active fade-in flex-grow flex flex-col justify-center" id="home">
<div className="container md:pt-20 mr-auto ml-auto pt-16 pr-6 pb-12 pl-6">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/10 text-teal-300 text-xs font-medium tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
            Accepting New Patients
          </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8 leading-[1.1] text-white">
            Revitalize your <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-blue-300 to-purple-300 animate-gradient-x">mind and energy.</span>
</h1>
<p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl font-light tracking-wide leading-relaxed">
            Modern, compassionate psychiatry designed for your unique needs. We combine evidence-based medication management with holistic care.
          </p>
<div className="flex flex-col sm:flex-row gap-4 sm:w-auto w-full gap-x-4 gap-y-4 items-center">
<button className="w-full sm:w-auto bg-white text-black font-medium rounded-md px-8 py-3.5 hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group" onclick="switchPage('services')">
  View Services
  <iconify-icon className="group-hover:translate-x-0.5 transition-transform duration-300" height="18" icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
<button className="sm:w-auto flex gap-2 hover:bg-white/10 hover:text-white transition-all font-medium text-gray-300 bg-white/5 w-full border-white/10 border rounded-md pt-3.5 pr-8 pb-3.5 pl-8 backdrop-blur-sm gap-x-2 gap-y-2 items-center justify-center" onclick="switchPage('about')">
              About the Practice
            </button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-lg mt-24 max-w-5xl mx-auto overflow-hidden shadow-2xl backdrop-blur-md">
<div className="bg-black/80 p-8 flex flex-col items-center text-center hover:bg-black/60 transition-colors duration-500 group">
<div className="mb-3 text-teal-400 opacity-80 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:monitor-smartphone" width="24"></iconify-icon>
</div>
<p className="text-3xl font-normal mb-1 tracking-tight text-white">100%</p>
<p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Telehealth</p>
</div>
<div className="bg-black/80 p-8 flex flex-col items-center text-center hover:bg-black/60 transition-colors duration-500 group">
<div className="mb-3 text-blue-400 opacity-80 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<p className="text-3xl font-normal mb-1 tracking-tight text-white">Major</p>
<p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Insurances</p>
</div>
<div className="bg-black/80 p-8 flex flex-col items-center text-center hover:bg-black/60 transition-colors duration-500 group">
<div className="mb-3 text-purple-400 opacity-80 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:brain-circuit" width="24"></iconify-icon>
</div>
<p className="text-3xl font-normal mb-1 tracking-tight text-white">ADHD</p>
<p className="text-gray-500 text-sm font-medium uppercase tracking-wider">&amp; Anxiety Care</p>
</div>
<div className="bg-black/80 p-8 flex flex-col items-center text-center hover:bg-black/60 transition-colors duration-500 group">
<div className="mb-3 text-emerald-400 opacity-80 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:clock" width="24"></iconify-icon>
</div>
<p className="text-3xl font-normal mb-1 tracking-tight text-white">Fast</p>
<p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Availability</p>
</div>
</div>
<div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<span className="text-lg font-semibold tracking-tight">Cigna</span>
<span className="text-lg font-semibold tracking-tight">UnitedHealthcare</span>
<span className="text-lg font-semibold tracking-tight">Aetna</span>
<span className="text-lg font-semibold tracking-tight">BlueCross</span>
</div>
</div>
</main>

<main className="page-section flex-grow" id="services">
<div className="container mx-auto px-6 py-20">
<div className="max-w-3xl mx-auto mb-16 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Clinical <span className="text-teal-400">Services</span></h2>
<p className="text-gray-400 text-lg leading-relaxed">
                We specialize in diagnosing and treating a wide range of mental health conditions through a modern, evidence-based lens.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

<div className="group p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-teal-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-teal-900/30 border border-teal-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-teal-400" icon="lucide:zap" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">ADHD Management</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                    Comprehensive evaluation and medication management for Attention Deficit Hyperactivity Disorder in adults, focused on executive function and focus.
                </p>
</div>

<div className="group p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-900/30 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-400" icon="lucide:cloud-sun" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Anxiety Disorders</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                    Treatment for GAD, Social Anxiety, and Panic Disorder using a combination of SSRIs/SNRIs and supportive therapy techniques.
                </p>
</div>

<div className="group p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-purple-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-purple-900/30 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-purple-400" icon="lucide:heart-pulse" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Depression Care</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                    Personalized treatment plans for Major Depressive Disorder, focusing on restoring energy, motivation, and emotional balance.
                </p>
</div>

<div className="group p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-emerald-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-emerald-900/30 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-400" icon="lucide:clipboard-check" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Psychiatric Evaluations</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                    In-depth 60-minute initial diagnostic interviews to understand your history, symptoms, and goals before starting treatment.
                </p>
</div>

<div className="group p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-orange-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-orange-900/30 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-orange-400" icon="lucide:moon" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Insomnia &amp; Sleep</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                    Addressing sleep disturbances that affect mental health through safe medication options and sleep hygiene coaching.
                </p>
</div>

<div className="group p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-pink-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-pink-900/30 border border-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-pink-400" icon="lucide:users" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Medication Management</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                    Ongoing monitoring and adjustment of prescriptions to ensure maximum efficacy with minimal side effects.
                </p>
</div>
</div>
</div>
</main>

<main className="page-section flex-grow" id="about">
<div className="container mx-auto px-6 py-20">

<div className="max-w-4xl mx-auto mb-20 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Redefining the <span className="text-blue-400">Standard of Care</span></h2>
<p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                 We believe mental health care shouldn't be complicated, cold, or transactional. Mind &amp; Energy was founded to bring warmth back to psychiatry.
             </p>
</div>

<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="space-y-8">
<div>
<h3 className="text-2xl font-medium text-white mb-3">Our Mission</h3>
<p className="text-gray-400 leading-relaxed">
                        To empower individuals to reclaim their mental vitality through accessible, high-quality psychiatric care that respects the complexity of the human experience.
                    </p>
</div>
<div className="h-px bg-white/10 w-full"></div>
<div>
<h3 className="text-2xl font-medium text-white mb-3">The Approach</h3>
<ul className="space-y-4 mt-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-500 mt-1 shrink-0" icon="lucide:check-circle"></iconify-icon>
<span className="text-gray-400 text-sm">Collaborative decision making between provider and patient.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-500 mt-1 shrink-0" icon="lucide:check-circle"></iconify-icon>
<span className="text-gray-400 text-sm">Minimal effective dosing strategies to reduce side effects.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-500 mt-1 shrink-0" icon="lucide:check-circle"></iconify-icon>
<span className="text-gray-400 text-sm">Integration of lifestyle factors (sleep, diet, exercise).</span>
</li>
</ul>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50"></div>
<div className="relative bg-black/80 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-gray-500" icon="lucide:user" width="32"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white">Dr. Sarah Mitchell, MD</h4>
<p className="text-teal-400 text-sm font-medium">Board Certified Psychiatrist</p>
</div>
</div>
<p className="text-gray-400 italic text-sm mb-6">
                        "I started this practice because I saw too many patients being rushed through 15-minute appointments. Real healing takes time, listening, and a partnership."
                    </p>
<div className="flex gap-4 pt-6 border-t border-white/10">
<div>
<p className="text-2xl font-medium text-white">15+</p>
<p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Years Exp</p>
</div>
<div className="w-px bg-white/10 h-10"></div>
<div>
<p className="text-2xl font-medium text-white">2k+</p>
<p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Patients</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
