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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');




      const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
      if(entry.isIntersecting){
      entry.target.classList.add("visible")
      }
      })
      })

      document.querySelectorAll(".fade").forEach(el=>{
      observer.observe(el)
      })
    
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
      
<div className="container">
<nav>
<div className="logo">DOXFORD BPO</div>
<ul>
<li><a href="#services">Services</a></li>
<li><a href="#security">Security</a></li>
<li><a href="#offshore">Offshore</a></li>
<li><a href="#about">About</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</nav>
</div>
<section className="hero" style={{backgroundImage: 'url(\'hero-main.jpg\')'}}>
<div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">

<div className="absolute w-[500px] h-[500px] bg-[#2e7cff] rounded-full mix-blend-screen opacity-[0.15] filter blur-[120px] animate-blob top-[-10%] left-[-10%]"></div>
<div className="absolute w-[400px] h-[400px] bg-[#4da3ff] rounded-full mix-blend-screen opacity-[0.15] filter blur-[100px] animate-blob animation-delay-2000 top-[20%] right-[-10%]"></div>
<div className="absolute w-[600px] h-[600px] bg-[#4c94ff] rounded-full mix-blend-screen opacity-[0.1] filter blur-[150px] animate-blob animation-delay-4000 bottom-[-30%] left-[20%]"></div>

<svg className="absolute animate-spin-slow top-[20%] left-[10%] opacity-20 text-[#4da3ff]" fill="none" height="140" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24" width="140">
<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
<polyline points="2 17 12 22 22 17"></polyline>
<polyline points="2 12 12 17 22 12"></polyline>
</svg>
<svg className="absolute animate-float top-[30%] right-[15%] opacity-30 text-[#c8d3e6]" fill="none" height="90" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24" width="90">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
<svg className="absolute animate-float animation-delay-4000 bottom-[15%] right-[25%] opacity-20 text-[#2e7cff]" fill="none" height="160" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24" width="160">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
<path d="M2 12h20"></path>
</svg>
<svg className="absolute animate-spin-slow animation-delay-2000 top-[15%] right-[45%] opacity-20 text-[#4c94ff]" fill="none" height="60" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="60">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2v20"></path>
<path d="M2 12h20"></path>
</svg>
<svg className="absolute animate-float top-[70%] left-[25%] opacity-10 text-[#e6edf7]" fill="none" height="70" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="70">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18"></path>
<path d="M9 21V9"></path>
</svg>
</div>
<div className="container hero-content">
<h1>Operational Precision for Modern Healthcare Organizations</h1>
<p>
          Doxford BPO delivers compliance-aligned outsourcing solutions
          engineered specifically for healthcare providers across Canada and the
          United States.
        </p>
<p>
          ✔ HIPAA &amp; PIPEDA-Aligned Frameworks ✔ Healthcare-Specialized
          Teams ✔ 40–60% Cost Optimization
        </p>
<a className="btn" href="#contact">Schedule a Confidential Consultation</a>
</div>
</section>
<section className="section fade">
<div className="container">
<h2>Who We Are</h2>
<p>
          Doxford BPO is a healthcare-dedicated outsourcing partner supporting
          clinics, medical groups, and healthcare organizations. We address
          operational pressure points including administrative overload, revenue
          cycle inefficiencies, rising labor costs, and regulatory complexity.
        </p>
</div>
</section>
<section className="hero hero-services" id="services">
<div className="container hero-content">
<h1>Healthcare Operational Services</h1>
<p>
          Specialized outsourcing teams built for healthcare workflows, revenue
          cycle performance, and operational stability.
        </p>
</div>
</section>
<section className="section fade">
<div className="container">
<h2>Core Capabilities</h2>
<div className="grid">
<div className="card">
<h3>Medical Customer Service</h3>
<p>
              Professional patient communication across phone, email, and chat.
            </p>
</div>
<div className="card">
<h3>Revenue Cycle Management</h3>
<p>
              Claims submission, denial management, payment posting and AR
              follow-up.
            </p>
</div>
<div className="card">
<h3>Insurance &amp; Authorization Specialists</h3>
<p>
              Eligibility verification, benefits coordination and prior
              authorizations.
            </p>
</div>
<div className="card">
<h3>Follow-Up Operations</h3>
<p>
              Insurance and patient account follow-ups to reduce aging
              receivables.
            </p>
</div>
</div>
</div>
</section>
<section className="hero hero-security" id="security">
<div className="container hero-content">
<h1>Compliance &amp; Data Security</h1>
<p>
          Structured privacy and security protocols protecting PHI and sensitive
          operational data.
        </p>
</div>
</section>
<section className="section fade">
<div className="container">
<ul>
<li>HIPAA-aligned operational standards</li>
<li>PIPEDA-aligned privacy practices</li>
<li>Encrypted communications infrastructure</li>
<li>Secure office environments</li>
<li>Controlled system access protocols</li>
<li>Ongoing compliance training</li>
<li>NDA-protected workforce</li>
</ul>
</div>
</section>
<section className="hero hero-offshore" id="offshore">
<div className="container hero-content">
<h1>Strategic Offshore Advantage</h1>
<p>
          Disciplined global support enabling healthcare organizations to scale
          efficiently.
        </p>
</div>
</section>
<section className="section fade">
<div className="container">
<ul>
<li>Highly educated workforce</li>
<li>Strong English proficiency</li>
<li>North American cultural alignment</li>
<li>Time-zone flexibility</li>
<li>EU-aligned data protection standards</li>
<li>Stable operating environment</li>
</ul>
</div>
</section>
<section className="hero hero-about" id="about">
<div className="container hero-content">
<h1>Leadership With North American Insight</h1>
<p>
          Doxford BPO bridges global talent with North American healthcare
          standards through compliance-driven outsourcing.
        </p>
</div>
</section>
<section className="section fade">
<div className="container">
<h2>Mission</h2>
<p>
          To elevate healthcare operations through secure, compliance-driven
          outsourcing excellence.
        </p>
</div>
</section>
<section className="section" id="contact">
<div className="container highlight">
<h2>Schedule a Confidential Consultation</h2>
<form>
<input placeholder="Full Name" required="" type="text"/>
<input placeholder="Email Address" required="" type="email"/>
<input placeholder="Organization" type="text"/>
<textarea placeholder="How can we support your organization?" rows="5"></textarea>
<button type="submit">Book Strategy Call</button>
</form>
</div>
</section>
<footer>
      Doxford BPO © 2026 — Healthcare Outsourcing for Canada &amp; U.S.
    </footer>


    </>
  );
}
