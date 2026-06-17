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



        lucide.createIcons();
    
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
      

<nav className="sticky top-0 z-50 w-full glass-panel border-b border-[#e6e8e3]">
<div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-lg font-semibold tracking-tighter text-[#2f3630] hover:text-[#9c6644] transition-colors" href="#">
                Limia M.
            </a>
<div className="hidden md:flex space-x-8 text-sm font-medium text-[#6e756f]">
<a className="hover:text-[#2f3630] transition-colors" href="#about">About</a>
<a className="hover:text-[#2f3630] transition-colors" href="#experience">Experience</a>
<a className="hover:text-[#2f3630] transition-colors" href="#education">Education</a>
<a className="hover:text-[#2f3630] transition-colors" href="#projects">Projects</a>
<a className="hover:text-[#2f3630] transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#5d665e] hover:text-[#9c6644] transition-colors" href="https://www.linkedin.com/in/limia-m/" target="_blank">
<i className="w-4 h-4" data-lucide="linkedin"></i>
                LinkedIn
            </a>
</div>
</nav>

<header className="relative pt-24 pb-32 overflow-hidden">

<div className="organic-shape shape-earth w-96 h-96 top-0 right-0 -mr-20 -mt-20"></div>
<div className="organic-shape shape-sage w-80 h-80 bottom-0 left-0 -ml-20 -mb-20" style={{animationDelay: '2s'}}></div>
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
<div className="fade-in-up space-y-8">

<div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#edf0eb] border border-[#dee2dc] text-[#525953] text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3b8a1] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#6b8269]"></span>
</span>
<span className="text-[#4a544c] tracking-tight">Bilingual Clinical Research Professional</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#232924] leading-[1.1]">
                    Limia Mohamed
                </h1>
<p className="text-xl md:text-2xl font-light text-[#636e65] tracking-tight">
                    Ensuring integrity in <span className="text-[#9c6644] font-medium">IBD &amp; Immunology</span> trials.
                </p>
<p className="text-sm md:text-base text-[#525953] max-w-lg leading-relaxed">
                    Specializing in IBD clinical research, EDC systems, protocol compliance, and biospecimen coordination. Focused on advancing trials that expand therapeutic options for IBD patients with primary non-response or secondary loss of response.
                </p>
<div className="flex flex-wrap gap-4 pt-2">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#4a5747] rounded-lg hover:bg-[#3d473a] transition-all shadow-xl shadow-[#4a5747]/10 group" href="mailto:limia.mohamed06@gmail.com">
<i className="w-4 h-4 mr-2" data-lucide="mail"></i>
                        Get in Touch
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#4a544c] bg-white border border-[#dce0da] rounded-lg hover:bg-[#f7f9f6] hover:border-[#cbd1c9] transition-all" href="https://www.linkedin.com/in/limia-m/" target="_blank">
                        View LinkedIn
                    </a>
</div>
</div>

<div className="relative fade-in-up flex justify-center" style={{animationDelay: '0.2s'}}>
<div className="relative w-full max-w-sm aspect-square">

<div className="absolute inset-0 rounded-full border border-[#e6e8e3] animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 rounded-full border border-dashed border-[#d1d6ce] animate-[spin_15s_linear_infinite_reverse]"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl shadow-[#4a5747]/5 border border-[#eef0ec] text-center relative overflow-hidden max-w-[240px]">

<i className="absolute -top-4 -right-4 w-24 h-24 text-[#f0f2ef] -z-10 transform rotate-12" data-lucide="dna"></i>
<div className="w-14 h-14 bg-[#f2efe9] rounded-full flex items-center justify-center mx-auto mb-4 text-[#9c6644] dna-float">
<i className="w-7 h-7" data-lucide="microscope"></i>
</div>
<h3 className="text-base font-semibold text-[#2f3630]">IBD Focus</h3>
<p className="text-xs text-[#788075] mb-3">Patient Safety &amp; Data Integrity</p>
<div className="flex flex-wrap justify-center gap-1.5">
<span className="px-2 py-0.5 rounded-full bg-[#edf0eb] text-[10px] font-medium text-[#5d665e]">GCP</span>
<span className="px-2 py-0.5 rounded-full bg-[#edf0eb] text-[10px] font-medium text-[#5d665e]">Medidata</span>
<span className="px-2 py-0.5 rounded-full bg-[#edf0eb] text-[10px] font-medium text-[#5d665e]">R / Python</span>
</div>
</div>
</div>

<div className="absolute top-8 right-0 bg-white p-3 rounded-xl shadow-lg shadow-[#4a5747]/5 border border-[#eef0ec] dna-float" style={{animationDelay: '0.5s'}}>
<i className="w-5 h-5 text-[#9c6644]" data-lucide="test-tube-2"></i>
</div>
<div className="absolute bottom-16 left-0 bg-white p-3 rounded-xl shadow-lg shadow-[#4a5747]/5 border border-[#eef0ec] dna-float" style={{animationDelay: '1s'}}>
<i className="w-5 h-5 text-[#6b8269]" data-lucide="file-check"></i>
</div>
</div>
</div>
</div>
</header>

<div className="bg-[#fcfbf9] border-y border-[#eff1ee]">
<div className="max-w-5xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-6 rounded-lg border border-[#e6e8e3] shadow-sm hover:border-[#cbd1c9] hover:shadow-md transition-all duration-300 flex flex-col justify-center text-center h-full">
<p className="text-lg font-semibold text-[#2f3630] tracking-tight">English / French</p>
<p className="text-[10px] font-bold uppercase tracking-widest text-[#9c6644] mt-2">Bilingual Proficiency</p>
</div>

<div className="bg-white p-6 rounded-lg border border-[#e6e8e3] shadow-sm hover:border-[#cbd1c9] hover:shadow-md transition-all duration-300 flex flex-col justify-center text-center h-full">
<p className="text-lg font-semibold text-[#2f3630] tracking-tight">IBD &amp; GI</p>
<p className="text-[10px] font-bold uppercase tracking-widest text-[#9c6644] mt-2">Therapeutic Focus</p>
</div>

<div className="bg-white p-6 rounded-lg border border-[#e6e8e3] shadow-sm hover:border-[#cbd1c9] hover:shadow-md transition-all duration-300 flex flex-col justify-center text-center h-full">
<p className="text-lg font-semibold text-[#2f3630] tracking-tight leading-tight">EDC &amp; TMF Knowledge</p>
<p className="text-[10px] font-bold uppercase tracking-widest text-[#9c6644] mt-2">Data Systems &amp; Documentation</p>
</div>

<div className="bg-white p-6 rounded-lg border border-[#e6e8e3] shadow-sm hover:border-[#cbd1c9] hover:shadow-md transition-all duration-300 flex flex-col justify-center text-center h-full">
<p className="text-sm font-bold text-[#2f3630] tracking-tight leading-relaxed">GCP • TCPS 2 • Health Canada Div. 5 • TDG / IATA</p>
<p className="text-[10px] font-bold uppercase tracking-widest text-[#9c6644] mt-2">Certified</p>
</div>
</div>
</div>
</div>

<section className="py-24 relative overflow-hidden bg-[#f7f9f6]" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-12">
<span className="text-xs font-semibold text-[#9c6644] uppercase tracking-wider">About Me</span>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#2f3630] mt-3">Driven by Personal Experience &amp; Scientific Curiosity</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-xl p-8 shadow-sm border border-[#e6e8e3]">
<div className="w-10 h-10 rounded-lg bg-[#f9f5f2] flex items-center justify-center text-[#9c6644] mb-6">
<i className="w-5 h-5" data-lucide="heart-pulse"></i>
</div>
<h3 className="text-lg font-semibold text-[#2f3630] mb-4">The "Why"</h3>
<p className="text-sm text-[#5d665e] leading-relaxed">
                        I am passionate about IBD clinical research and trial processes, focusing on expanding therapeutic options for patients experiencing primary non-response. As someone living with IBD, I am especially motivated to support clinical trials that ensure patient safety, data integrity, and ultimately improve health outcomes.
                    </p>
</div>

<div className="bg-white rounded-xl p-8 shadow-sm border border-[#e6e8e3]">
<div className="w-10 h-10 rounded-lg bg-[#edf0eb] flex items-center justify-center text-[#5d665e] mb-6">
<i className="w-5 h-5" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-lg font-semibold text-[#2f3630] mb-4">Academic Interests</h3>
<ul className="space-y-4 text-sm text-[#5d665e] leading-relaxed">
<li className="flex gap-3">
<span className="mt-1 w-1.5 h-1.5 bg-[#8c5e3c] rounded-full flex-shrink-0"></span>
<span><strong>Structural Bioinformatics:</strong> Analyzed TNF-α binding using Chimera &amp; ConSurf to inform biologics.</span>
</li>
<li className="flex gap-3">
<span className="mt-1 w-1.5 h-1.5 bg-[#8c5e3c] rounded-full flex-shrink-0"></span>
<span><strong>Advanced Imaging:</strong> Investigated autofluorescence endoscopy &amp; PDT for Ulcerative Colitis.</span>
</li>
<li className="flex gap-3">
<span className="mt-1 w-1.5 h-1.5 bg-[#8c5e3c] rounded-full flex-shrink-0"></span>
<span><strong>Pathways:</strong> Explored MPO-generated ROS and cGAS-STING activation in IBD pathogenesis.</span>
</li>
</ul>
</div>

<div className="bg-white rounded-xl p-8 shadow-sm border border-[#e6e8e3]">
<div className="w-10 h-10 rounded-lg bg-[#edf0eb] flex items-center justify-center text-[#5d665e] mb-6">
<i className="w-5 h-5" data-lucide="mountain"></i>
</div>
<h3 className="text-lg font-semibold text-[#2f3630] mb-4">Beyond Research</h3>
<p className="text-sm text-[#5d665e] leading-relaxed mb-4">
                        I’m an avid traveler and hiker, embracing opportunities to challenge myself mentally and physically. Whether hiking new landscapes or diving into projects, I bring resilience and curiosity.
                    </p>
<div className="p-4 bg-[#fcfbf9] rounded-lg border border-[#eef0ec]">
<p className="text-xs font-medium text-[#2f3630] mb-1">Recent Achievement</p>
<p className="text-xs text-[#8a9187] italic">
                            Completed a 260+ km solo hike along the Camino de Santiago from Porto to Santiago de Compostela.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-[#eff1ee]" id="experience">
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<span className="text-xs font-semibold text-[#9c6644] uppercase tracking-wider">Career Timeline</span>
<h2 className="text-2xl font-medium tracking-tight text-[#2f3630] mb-4 mt-2">Professional Experience</h2>
<p className="text-sm text-[#6e756f] leading-relaxed mb-6">
                    Hands-on experience in EDC systems (Medidata, CRIO), protocol compliance, and biospecimen processing across hospital and academic settings.
                </p>
<div className="mt-8 p-5 bg-[#f7f9f6] rounded-xl border border-[#eff1ee]">
<h4 className="text-sm font-semibold text-[#2f3630] mb-3">Core Technical Skills</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-[#dce0da] text-xs text-[#5d665e] rounded shadow-sm">Medidata / CRIO</span>
<span className="px-2 py-1 bg-white border border-[#dce0da] text-xs text-[#5d665e] rounded shadow-sm">Covidence</span>
<span className="px-2 py-1 bg-white border border-[#dce0da] text-xs text-[#5d665e] rounded shadow-sm">ELISA</span>
<span className="px-2 py-1 bg-white border border-[#dce0da] text-xs text-[#5d665e] rounded shadow-sm">R / Python / Bash</span>
<span className="px-2 py-1 bg-white border border-[#dce0da] text-xs text-[#5d665e] rounded shadow-sm">Biospecimen Logistics</span>
<span className="px-2 py-1 bg-white border border-[#dce0da] text-xs text-[#5d665e] rounded shadow-sm">TMF Reference Model Knowledge</span>
</div>
</div>
</div>
<div className="lg:col-span-8 space-y-12">

<div className="relative pl-8 border-l border-[#e0e2db] group">
<span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-[#9c6644] group-hover:scale-125 transition-transform"></span>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
<h3 className="text-lg font-semibold text-[#2f3630]">Clinical Research Assistant</h3>
<span className="text-xs font-medium text-[#9c6644] bg-[#fdf8f4] px-2 py-1 rounded">Oct 2025 – Present</span>
</div>
<p className="text-sm font-medium text-[#8a9187] mb-3 uppercase tracking-wide">Toronto Immune &amp; Digestive Health Institute</p>
<ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[#5d665e] leading-relaxed marker:text-[#9c6644]">
<li>Perform electronic data capture (EDC) in Medidata and CRIO for 30+ active subjects, achieving 100% data accuracy.</li>
<li>Maintain and organize the Trial Master File, tracking essential documents for completeness and inspection readiness.</li>
<li>Process and ship 25+ biospecimens (labelling, centrifugation, aliquoting), ensuring 100% sample integrity.</li>
<li>Conduct source document verification and reconcile lab requisitions, reducing missing sample discrepancies by 75%.</li>
</ul>
</div>

<div className="relative pl-8 border-l border-[#e0e2db] group">
<span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-[#a3b8a1] group-hover:scale-125 transition-transform"></span>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
<h3 className="text-lg font-semibold text-[#2f3630]">Bilingual Project &amp; Clinical Research Assistant</h3>
<span className="text-xs font-medium text-[#5d665e] bg-[#edf0eb] px-2 py-1 rounded">July 2024 – Present</span>
</div>
<p className="text-sm font-medium text-[#8a9187] mb-3 uppercase tracking-wide">Health Nexus</p>
<ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[#5d665e] leading-relaxed marker:text-[#a3b8a1]">
<li>Developed 10+ drug safety reports consolidating pharmacokinetic literature for medications used during pregnancy/lactation.</li>
<li>Conducted systematic literature reviews on drug safety using Covidence, analyzing epidemiological data (ORs, CIs).</li>
<li>Translated complex scientific findings into 15+ patient-facing infographics; maintained online FASD resource hub.</li>
</ul>
</div>

<div className="relative pl-8 border-l border-[#e0e2db] group">
<span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-[#a3b8a1] group-hover:scale-125 transition-transform"></span>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
<h3 className="text-lg font-semibold text-[#2f3630]">Medical Diagnostic Intern</h3>
<span className="text-xs font-medium text-[#5d665e] bg-[#edf0eb] px-2 py-1 rounded">Jan 2023 – April 2023</span>
</div>
<p className="text-sm font-medium text-[#8a9187] mb-3 uppercase tracking-wide">Sensoreal Inc. (Montreal, QC)</p>
<ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[#5d665e] leading-relaxed marker:text-[#a3b8a1]">
<li>Executed 25+ ELISA and Lateral Flow Assay experiments to validate diagnostic sensitivity and specificity.</li>
<li>Developed experimental protocols based on literature review of 15+ peer-reviewed articles.</li>
<li>Performed assay data analysis and created standard curves for 25+ experiments using Excel.</li>
</ul>
</div>

<div className="relative pl-8 border-l border-[#e0e2db] group">
<span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-[#a3b8a1] group-hover:scale-125 transition-transform"></span>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
<h3 className="text-lg font-semibold text-[#2f3630]">Administrative Assistant (Finance &amp; Ethics)</h3>
<span className="text-xs font-medium text-[#5d665e] bg-[#edf0eb] px-2 py-1 rounded">Sept 2022 – Dec 2022</span>
</div>
<p className="text-sm font-medium text-[#8a9187] mb-3 uppercase tracking-wide">University of Waterloo, Office of Research</p>
<ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[#5d665e] leading-relaxed marker:text-[#a3b8a1]">
<li>Provided regulatory support to 10+ principal investigators for REB platform and finance system issues.</li>
<li>Monitored research expenditures through financial reports ensuring compliance for 100+ active studies.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#f7f9f6] border-t border-[#eff1ee]" id="education">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-10">
<span className="text-xs font-semibold text-[#9c6644] uppercase tracking-wider">Academic Background</span>
<h2 className="text-2xl font-medium tracking-tight text-[#2f3630] mt-2">Education</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-xl shadow-sm border border-[#e0e2db] hover:border-[#c7cfc5] transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-[#edf0eb] rounded-lg">
<i className="w-6 h-6 text-[#5d665e]" data-lucide="graduation-cap"></i>
</div>
<span className="text-xs font-medium bg-[#f2efe9] text-[#7d604a] px-2 py-1 rounded">2025 - 2026</span>
</div>
<h3 className="text-lg font-semibold text-[#2f3630]">Post-Graduate Certificate in Clinical Research</h3>
<p className="text-sm text-[#9c6644] font-medium mb-2">Humber Polytechnic, Toronto</p>
<p className="text-sm text-[#5d665e] leading-relaxed">
                        Specialized training in GCP, ICH guidelines, clinical trial monitoring, data management, and regulatory compliance.
                    </p>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-[#e0e2db] hover:border-[#c7cfc5] transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-[#edf0eb] rounded-lg">
<i className="w-6 h-6 text-[#5d665e]" data-lucide="atom"></i>
</div>
<span className="text-xs font-medium bg-[#f2efe9] text-[#7d604a] px-2 py-1 rounded">2020 - 2025</span>
</div>
<h3 className="text-lg font-semibold text-[#2f3630]">B.Sc. Honours Life Physics and Bioinformatics</h3>
<p className="text-sm text-[#9c6644] font-medium mb-2">University of Waterloo</p>
<p className="text-sm text-[#5d665e] leading-relaxed">
                        Dean's Honours List. Strong foundation in Data Analysis using Excel, R, Python and BASH. 87% Average (96% final term).
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#fcfbf9] border-t border-[#eff1ee]" id="projects">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-12">
<span className="text-xs font-semibold text-[#9c6644] uppercase tracking-wider">Research &amp; Analysis</span>
<h2 className="text-2xl font-medium tracking-tight text-[#2f3630] mt-2">Projects</h2>
<p className="text-sm text-[#6e756f] mt-4 max-w-2xl leading-relaxed">
                    A selection of academic and independent projects focusing on IBD pathogenesis, diagnostics and treatments, as well as structural bioinformatic and genomic analysis.
                </p>
</div>
<div className="space-y-12">

<div className="bg-white rounded-xl border border-[#e0e2db] overflow-hidden hover:border-[#c7cfc5] transition-all duration-300 shadow-sm group">
<div className="p-8">
<div className="space-y-4">
<div className="flex items-center gap-3 text-xs font-medium text-[#8a9187]">
<span className="bg-[#f2efe9] text-[#7d604a] px-2 py-1 rounded">Jan 2025 - Apr 2025</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="school"></i> University of Waterloo</span>
</div>
<h3 className="text-xl font-semibold text-[#2f3630] tracking-tight group-hover:text-[#9c6644] transition-colors">
                                Structural Bioinformatics Analysis of TNF-α and its Inhibitors
                            </h3>
<p className="text-xs font-medium text-[#9c6644]">Implications for Inflammatory Bowel Disease (IBD) Therapy</p>
<p className="text-sm text-[#5d665e] leading-relaxed">
                                Tumor necrosis factor-alpha (TNF-α) plays a central role in IBD pathogenesis. This study utilizes structural bioinformatics to compare binding interactions of TNF-α with four clinical inhibitors (infliximab, golimumab, certolizumab pegol) and natural receptors like TNFR2. The goal is to identify key residues for next-generation inhibitor design to address non-responsiveness in current biologics.
                            </p>
<div className="flex flex-wrap gap-2 mt-4 pt-2">
<span className="px-2 py-1 bg-[#f7f9f6] border border-[#eff1ee] text-[11px] text-[#5d665e] font-medium rounded">Chimera</span>
<span className="px-2 py-1 bg-[#f7f9f6] border border-[#eff1ee] text-[11px] text-[#5d665e] font-medium rounded">ClustalW</span>
<span className="px-2 py-1 bg-[#f7f9f6] border border-[#eff1ee] text-[11px] text-[#5d665e] font-medium rounded">Consurf</span>
<span className="px-2 py-1 bg-[#f7f9f6] border border-[#eff1ee] text-[11px] text-[#5d665e] font-medium rounded">PDB</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-[#e0e2db] overflow-hidden hover:border-[#c7cfc5] transition-all duration-300 shadow-sm group">
<div className="p-8">
<div className="space-y-4">
<div className="flex items-center gap-3 text-xs font-medium text-[#8a9187]">
<span className="bg-[#edf0eb] text-[#5d665e] px-2 py-1 rounded">Jan 2025 - Apr 2025</span>
</div>
<h3 className="text-xl font-semibold text-[#2f3630] tracking-tight group-hover:text-[#6b8269] transition-colors">
                                Advanced Imaging &amp; Photodynamic Therapy for UC
                            </h3>
<p className="text-xs font-medium text-[#6b8269]">WLI vs AFI for Diagnosis &amp; PDT as Novel Treatment</p>
<p className="text-sm text-[#5d665e] leading-relaxed">
                                Exploring the efficacy of Autofluorescence Imaging Endoscopy (AFI) versus standard White-Light Imaging (WLI) for early Ulcerative Colitis detection. Additionally, this project investigates Photodynamic Therapy (PDT) as a targeted, non-invasive treatment using light-activated compounds to selectively destroy inflamed tissue with minimal side effects.
                            </p>
<div className="flex flex-wrap gap-2 mt-4 pt-2">
<span className="px-2 py-1 bg-[#f7f9f6] border border-[#eff1ee] text-[11px] text-[#5d665e] font-medium rounded">Literature Reviews</span>
<span className="px-2 py-1 bg-[#f7f9f6] border border-[#eff1ee] text-[11px] text-[#5d665e] font-medium rounded">Conference Speaking</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-[#e0e2db] p-6 hover:border-[#c7cfc5] transition-all shadow-sm flex flex-col">
<div className="flex items-center gap-3 text-xs font-medium text-[#8a9187] mb-3">
<span className="bg-[#f2efe9] text-[#7d604a] px-2 py-1 rounded">Sep - Dec 2024</span>
<span><i className="w-3 h-3 inline" data-lucide="school"></i> UWaterloo</span>
</div>
<h3 className="text-base font-semibold text-[#2f3630] mb-2 leading-snug">Genomic Insights into PCOS: DENND1A SNP Variants</h3>
<p className="text-sm text-[#5d665e] mb-4 flex-grow">
                            Analyzed GWAS-identified PCOS-associated SNPs using 1000 Genomes Project data. Performed FST analysis on DENND1A.V2 gene variants across diverse populations with functional annotation.
                        </p>
<div className="flex flex-wrap gap-1.5 mt-auto">
<span className="px-2 py-0.5 bg-[#f7f9f6] border border-[#eff1ee] text-[10px] text-[#5d665e] rounded">Bioinformatics</span>
<span className="px-2 py-0.5 bg-[#f7f9f6] border border-[#eff1ee] text-[10px] text-[#5d665e] rounded">R / Linux</span>
</div>
</div>

<div className="bg-white rounded-xl border border-[#e0e2db] p-6 hover:border-[#c7cfc5] transition-all shadow-sm flex flex-col">
<div className="flex items-center gap-3 text-xs font-medium text-[#8a9187] mb-3">
<span className="bg-[#f2efe9] text-[#7d604a] px-2 py-1 rounded">Sep - Dec 2024</span>
<span><i className="w-3 h-3 inline" data-lucide="school"></i> UWaterloo</span>
</div>
<h3 className="text-base font-semibold text-[#2f3630] mb-2 leading-snug">MPO, cGAS-STING &amp; IBD Inflammation</h3>
<p className="text-sm text-[#5d665e] mb-4 flex-grow">
                            Investigated the link between MPO-generated ROS and the cGAS-STING pathway. Hypothesized that oxidative stress drives DNA damage, activating cGAS-STING to fuel chronic gut inflammation.
                        </p>
<div className="flex flex-wrap gap-1.5 mt-auto">
<span className="px-2 py-0.5 bg-[#f7f9f6] border border-[#eff1ee] text-[10px] text-[#5d665e] rounded">Immunology</span>
<span className="px-2 py-0.5 bg-[#f7f9f6] border border-[#eff1ee] text-[10px] text-[#5d665e] rounded">Lit Review</span>
</div>
</div>

<div className="bg-white rounded-xl border border-[#e0e2db] p-6 hover:border-[#c7cfc5] transition-all shadow-sm flex flex-col">
<div className="flex items-center gap-3 text-xs font-medium text-[#8a9187] mb-3">
<span className="bg-[#f2efe9] text-[#7d604a] px-2 py-1 rounded">Sep - Oct 2024</span>
<span><i className="w-3 h-3 inline" data-lucide="school"></i> UWaterloo</span>
</div>
<h3 className="text-base font-semibold text-[#2f3630] mb-2 leading-snug">De-Bruijn Algorithm Implementation</h3>
<p className="text-sm text-[#5d665e] mb-4 flex-grow">
                            Independently programmed the De-Bruijn algorithm in Python using graph theory for genome assembly, creating a graph of k-mers overlapping by k-1 letters.
                        </p>
<div className="flex flex-wrap gap-1.5 mt-auto">
<span className="px-2 py-0.5 bg-[#f7f9f6] border border-[#eff1ee] text-[10px] text-[#5d665e] rounded">Python</span>
<span className="px-2 py-0.5 bg-[#f7f9f6] border border-[#eff1ee] text-[10px] text-[#5d665e] rounded">Graph Theory</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1c211e] text-[#e4e8e1] pt-20 pb-12" id="contact">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 items-start">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Let's collaborate.</h2>
<p className="text-[#8d9690] mb-8 leading-relaxed max-w-sm">
                        I am open to opportunities in Clinical Research Coordination, Data Management, and IBD research initiatives.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-[#8d9690]">
<i className="w-4 h-4 text-[#9c6644]" data-lucide="map-pin"></i>
                            Toronto, ON
                        </div>
<a className="flex items-center gap-3 text-sm font-medium text-[#e4e8e1] hover:text-[#c5a68e] transition-colors p-2 -ml-2 rounded hover:bg-white/5 w-fit" href="tel:6477622344">
<i className="w-4 h-4 text-[#9c6644]" data-lucide="phone"></i>
                            (647) 762-2344
                        </a>
<a className="flex items-center gap-3 text-sm font-medium text-[#e4e8e1] hover:text-[#c5a68e] transition-colors p-2 -ml-2 rounded hover:bg-white/5 w-fit" href="mailto:limia.mohamed06@gmail.com">
<i className="w-4 h-4 text-[#9c6644]" data-lucide="mail"></i>
                            limia.mohamed06@gmail.com
                        </a>
<a className="flex items-center gap-3 text-sm font-medium text-[#e4e8e1] hover:text-[#c5a68e] transition-colors p-2 -ml-2 rounded hover:bg-white/5 w-fit" href="https://www.linkedin.com/in/limia-m/" target="_blank">
<i className="w-4 h-4 text-[#9c6644]" data-lucide="linkedin"></i>
                            linkedin.com/in/limia-m
                        </a>
</div>
</div>

<div className="bg-[#252b27] border border-[#2f3630] rounded-2xl p-8 hover:border-[#4a544c] transition-colors duration-300">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-[#2f3630] flex items-center justify-center text-[#9c6644]">
<i className="w-5 h-5" data-lucide="calendar-clock"></i>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Schedule a meeting</h3>
</div>
<p className="text-sm text-[#8d9690] leading-relaxed mb-8">
                        Interested in discussing a potential role or collaboration? Book a 30-minute chat directly on my calendar.
                    </p>
<a className="flex items-center justify-center w-full px-6 py-3 bg-[#9c6644] hover:bg-[#855536] text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-[#9c6644]/20 group" href="https://calendly.com/limia-mohamed06/30min" target="_blank">
<span className="mr-2">Book 30 min</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="border-t border-[#2f3630] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#6e756f]">
<p>© 2024 Limia Mohamed. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<span className="hover:text-[#a3a8a1] cursor-pointer">Privacy</span>
<span className="w-px h-3 bg-[#4a544c]"></span>
<span className="hover:text-[#a3a8a1] cursor-pointer">Terms</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
