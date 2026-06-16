import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("active");
      observer.unobserve(e.target);
    }
  });
},{threshold:.15});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#030304]/80 backdrop-blur border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
<span className="text-white font-medium tracking-tight">FA.</span>
<div className="hidden md:flex gap-8 text-sm text-gray-400">
<a className="hover:text-white" href="#about">About</a>
<a className="hover:text-white" href="#skills">Skills</a>
<a className="hover:text-white" href="#projects">Projects</a>
<a className="hover:text-white" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="min-h-screen flex items-center justify-center pt-24">
<div className="text-center max-w-4xl px-6 reveal">
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6">
                Securing the <br/><span className="text-gradient">Digital Frontier</span>
</h1>
<p className="text-gray-400 text-lg mb-10">
                Cybersecurity Engineer · Red Team Specialist · SOC Analyst<br/>
      Offensive Security · Malware Analysis · Digital Forensics
            </p>
<div className="flex justify-center gap-4">
<a className="px-8 py-4 bg-white text-black rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95 shadow" href="#projects">
                    View Work
                </a>
<a className="px-8 py-4 border border-white/20 rounded-full text-sm transition-all hover:bg-white/5 hover:scale-105 active:scale-95" href="#contact">
                    Contact Me
                </a>
</div>
</div>
</section>

<section className="py-28 border-t border-white/5" id="about">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
<h2 className="text-3xl font-medium text-white reveal">
                Cyber threats identified <span className="text-gray-500">before impact.</span>
</h2>
<div className="space-y-6 text-gray-400 text-lg reveal">
<p>
                    Cybersecurity professional with 1.5+ years of hands-on experience in
                    web application penetration testing, red team operations, SOC analysis,
                    malware analysis, and digital forensics.
                </p>
<p>
                    Experienced in identifying critical vulnerabilities, simulating real-world
                    attacks, and strengthening organizational security posture for international clients.
                </p>
<div className="flex gap-10 pt-6">
<div>
<span className="text-3xl text-white font-medium">40%</span>
<p className="text-sm text-gray-500">Security Improvement</p>
</div>
<div>
<span className="text-3xl text-white font-medium">15+</span>
<p className="text-sm text-gray-500">Critical Vulnerabilities</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 bg-[#050507]" id="skills">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl text-white font-medium mb-16 reveal">Core Expertise</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 bg-[#0a0a0c] border border-white/5 rounded-xl reveal hover:border-white/10 transition">
<h3 className="text-white mb-3">Offensive Security</h3>
<p className="text-gray-400 text-sm">Web &amp; Network Pentesting, Red Teaming</p>
</div>
<div className="p-6 bg-[#0a0a0c] border border-white/5 rounded-xl reveal delay-100 hover:border-white/10 transition">
<h3 className="text-white mb-3">SOC &amp; SIEM</h3>
<p className="text-gray-400 text-sm">Splunk, Threat Detection, IR</p>
</div>
<div className="p-6 bg-[#0a0a0c] border border-white/5 rounded-xl reveal delay-200 hover:border-white/10 transition">
<h3 className="text-white mb-3">Malware &amp; Forensics</h3>
<p className="text-gray-400 text-sm">Behavior Analysis, Evidence Handling</p>
</div>
<div className="p-6 bg-[#0a0a0c] border border-white/5 rounded-xl reveal delay-300 hover:border-white/10 transition">
<h3 className="text-white mb-3">Automation</h3>
<p className="text-gray-400 text-sm">Python, Linux, Security Scripts</p>
</div>
</div>
</div>
</section>

<section className="py-28 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl text-white mb-16 reveal">Professional Experience</h2>
<div className="relative pl-8 border-l border-white/10 reveal">
<span className="absolute -left-1.5 top-2 w-3 h-3 bg-gray-700 rounded-full"></span>
<div className="flex justify-between mb-2">
<h3 className="text-xl text-white">Cybersecurity Analyst</h3>
<span className="text-sm text-gray-500">Nov 2022 – Apr 2024</span>
</div>
<p className="text-gray-400 mb-4">CybeRace Corp · Remote (International Clients)</p>
<ul className="space-y-2 text-gray-400">
<li>• Conducted production web application penetration testing</li>
<li>• Led red team simulations improving security posture by 40%</li>
<li>• Performed digital forensics investigations</li>
<li>• Used Burp Suite, Metasploit, Splunk, Kali Linux</li>
</ul>
</div>
</div>
</section>

<section className="py-28 bg-[#050507]" id="projects">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl text-white mb-16 reveal">Selected Projects</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="p-8 bg-[#0a0a0c] border border-white/5 rounded-xl reveal">
<h3 className="text-white mb-3">Malware Analysis Framework</h3>
<p className="text-gray-400 text-sm">
                        Behavioral malware investigation toolkit for threat intelligence
                        and runtime analysis.
                    </p>
</div>
<div className="p-8 bg-[#0a0a0c] border border-white/5 rounded-xl reveal delay-100">
<h3 className="text-white mb-3">Password Security Research Tool</h3>
<p className="text-gray-400 text-sm">
                        Password strength evaluation and cracking simulation framework.
                    </p>
</div>
<div className="p-8 bg-[#0a0a0c] border border-white/5 rounded-xl reveal">
<h3 className="text-white mb-3">Bug Bounty Research</h3>
<p className="text-gray-400 text-sm">
                        Discovered and responsibly disclosed 15+ critical vulnerabilities.
                    </p>
</div>
<div className="p-8 bg-[#0a0a0c] border border-white/5 rounded-xl reveal delay-100">
<h3 className="text-white mb-3">CTF Competition</h3>
<p className="text-gray-400 text-sm">
                        Achieved 4th position demonstrating advanced offensive security skills.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5" id="contact">
<div className="max-w-xl mx-auto px-6 text-center reveal">
<h2 className="text-3xl text-white mb-6">Let’s Work Together</h2>
<p className="text-gray-400 mb-10">Open to security audits and consulting</p>
<form className="space-y-4">
<input className="w-full bg-[#0a0a0c] border border-white/10 rounded-lg px-4 py-3 text-white" placeholder="Your Name"/>
<input className="w-full bg-[#0a0a0c] border border-white/10 rounded-lg px-4 py-3 text-white" placeholder="Email"/>
<textarea className="w-full bg-[#0a0a0c] border border-white/10 rounded-lg px-4 py-3 text-white" placeholder="Message"></textarea>
<button className="w-full bg-white text-black py-4 rounded-lg font-medium hover:scale-105 transition">
        Send Message
      </button>
</form>
</div>
</section>

<footer className="py-8 text-center text-gray-600 border-t border-white/5">
        © 2024 Furqan Ansari
    </footer>


    </>
  );
}
