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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

<div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px] animate-pulse"></div>

<div className="absolute inset-0 flex justify-between opacity-[0.03] select-none font-mono text-xs leading-loose">

<div className="hidden md:block w-1/4 h-[200%] -translate-y-0 animate-code-scroll">
<pre>public class StudentPortal {
    private String id;
    private String name;
    
    public void init() {
        Database.connect();
        Logger.log("System Start");
    }

    @Override
    public String toString() {
        return "Student: " + this.name;
    }

    // Process data securely
    protected void secureHash(String data) {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] hash = md.digest(data.getBytes());
    }

    public static void main(String[] args) {
        System.out.println("Portal Active");
        // Initialize services
        ServiceManager.start();
    }
}
// Repeat for loop
public class StudentPortal { ... }
public class StudentPortal { ... }
public class StudentPortal { ... }
public class StudentPortal { ... }
public class StudentPortal { ... }
                </pre>
</div>

<div className="hidden md:block w-1/4 h-[200%] -translate-y-1/2 animate-code-scroll-slow text-right">
<pre>&lt;div className="container"&gt;
  &lt;header&gt;
    &lt;h1&gt;Dashboard&lt;/h1&gt;
    &lt;nav&gt;
      &lt;a href="/home"&gt;Home&lt;/a&gt;
      &lt;a href="/profile"&gt;Profile&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;section id="hero"&gt;
      &lt;p&gt;Welcome back&lt;/p&gt;
      &lt;button onClick={handleClick}&gt;
        Login
      &lt;/button&gt;
    &lt;/section&gt;
  &lt;/main&gt;
&lt;/div&gt;
&lt;style&gt;
  .hero { display: flex; }
  .btn { color: #000; }
&lt;/style&gt;
&lt;!-- Repeat --&gt;
&lt;div className="container"&gt; ... &lt;/div&gt;
&lt;div className="container"&gt; ... &lt;/div&gt;
&lt;div className="container"&gt; ... &lt;/div&gt;
&lt;div className="container"&gt; ... &lt;/div&gt;
                </pre>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/90 z-[0]"></div>
</div>
<div className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-24 relative z-10">

<header className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-between animate-fade-in">
<div className="flex-1 text-center md:text-left space-y-6">
<div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
<span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
                    Available for Opportunities
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white">
                    Sheik Jamsheer <span className="text-slate-500">Basha</span>
</h1>
<p className="text-xl md:text-2xl text-cyan-400 font-medium tracking-tight">
                    Software Developer &amp; IT Professional
                </p>
<p className="text-lg leading-relaxed text-slate-400 max-w-2xl">
                    Aspiring software developer focused on utilizing skills for professional development and organizational growth. Experienced in delivering innovative web solutions and enhancing user experiences.
                </p>
<div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
<a className="group flex items-center gap-2 hover:bg-slate-200 transition-colors font-medium text-slate-950 bg-white rounded-md pt-3 pr-6 pb-3 pl-6" href="mailto:sheikjamsheerbasha@gmail.com">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                        Contact Me
                    </a>
<a className="group flex items-center gap-2 hover:border-slate-500 transition-colors font-medium text-white bg-slate-900/50 border-slate-700 border rounded-md pt-3 pr-6 pb-3 pl-6" href="/#https://www.linkedin.com/in/sheik-jamsheer-basha-t-59a3171ab/">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        LinkedIn
                    </a>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative h-48 w-48 md:h-64 md:w-64 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
<img alt="Sheik Jamsheer Basha" className="hover:grayscale-0 transition-all duration-500 transform hover:scale-105 w-full h-full object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b47acf8d-49ae-498d-933d-a5ef2cbc266b_800w.jpg"/>
</div>
</div>
</header>

<section className="animate-fade-in delay-100">
<div className="flex items-center gap-4 mb-8">
<div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
<svg className="lucide lucide-cpu text-cyan-400 w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-white">Technical Arsenal</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all duration-300">
<div className="flex justify-between items-center mb-4">
<span className="text-lg font-medium text-slate-200">Core Java</span>
<svg className="lucide lucide-coffee text-orange-400 w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
</div>
<div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-gradient-to-r from-orange-600 to-orange-400 h-1.5 rounded-full" style={{width: '85%'}}></div>
</div>
</div>

<div className="group p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all duration-300">
<div className="flex justify-between items-center mb-4">
<span className="text-lg font-medium text-slate-200">Web Development</span>
<div className="flex gap-2">
<svg className="lucide lucide-code-2 text-blue-400 w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
</div>
<p className="text-sm text-slate-500 mb-2">HTML &amp; CSS</p>
<div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-gradient-to-r from-blue-600 to-blue-400 h-1.5 rounded-full" style={{width: '90%'}}></div>
</div>
</div>

<div className="group p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all duration-300">
<div className="flex justify-between items-center mb-4">
<span className="text-lg font-medium text-slate-200">OS &amp; Networking</span>
<svg className="lucide lucide-server text-green-400 w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<p className="text-sm text-slate-500 mb-2">Linux, Windows, Packet Tracer</p>
<div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-gradient-to-r from-green-600 to-green-400 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
</div>

<div className="group p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all duration-300">
<div className="flex justify-between items-center mb-4">
<span className="text-lg font-medium text-slate-200">Cyber Security</span>
<svg className="lucide lucide-shield-check text-purple-400 w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-sm text-slate-500 mb-2">Essentials &amp; Basics</p>
<div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-gradient-to-r from-purple-600 to-purple-400 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
</div>
</section>

<section className="animate-fade-in delay-200">
<div className="flex items-center gap-4 mb-10">
<div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
<svg className="lucide lucide-folder-git-2 text-cyan-400 w-5 h-5" data-lucide="folder-git-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 19a5 5 0 0 1-5-5v8"></path><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path><circle cx="13" cy="12" r="2"></circle><circle cx="20" cy="19" r="2"></circle></svg>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-white">Featured Project</h2>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/30 overflow-hidden hover:border-slate-700 transition-colors group relative">

<div className="absolute -inset-px bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<div className="grid md:grid-cols-5 gap-0 relative z-10">
<div className="md:col-span-2 flex md:border-b-0 md:border-r bg-center bg-gradient-to-br from-slate-800 to-slate-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e79285d-3307-4387-b6c0-dab1473e062c_800w.jpg?w=800&amp;q=80)] bg-cover border-slate-800 border-b pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="relative">
<svg className="lucide lucide-database group-hover:text-cyan-500/50 transition-colors duration-500 group-hover:scale-110 transform w-[96px] h-[96px]" data-icon-replaced="true" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '96px', height: '96px', color: 'rgb(6, 182, 212)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-center bg-cyan-500/20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee43a8dd-1195-42e7-ba50-a3b37f8ae493_320w.webp)] bg-cover rounded-full absolute top-0 right-0 bottom-0 left-0 blur-xl"></div>
</div>
</div>
<div className="md:col-span-3 md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 justify-center">
<h3 className="text-2xl font-semibold text-white mb-3">Muslims-Matches</h3>
<p className="leading-relaxed text-base text-slate-400 mb-6">Muslim Matches is a halal-focused matrimonial platform built with respect for Islamic values, privacy, and modesty.
It offers secure registration, modest profile creation, preference-based matching, and respectful communication. The platform emphasizes nikah-oriented matchmaking with a clean, distraction-free experience. Built on a secure, production-ready architecture with responsive design for all devices. Future updates will include verification, moderation tools, smarter matching, and a mobile app (In shā’ Allāh). 🤲</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-300 border border-orange-500/20">Java</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">CRUD</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300 border border-slate-600">Database</span>
</div>
<div className="flex gap-4">
<a className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors text-sm font-medium text-white" href="https://matchesmatches.vercel.app/" style={{}}>View Repository<svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1 w-[24px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(34, 211, 238)', width: '24px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
</div>
</div>
</section>

<div className="grid lg:grid-cols-2 gap-12 animate-fade-in delay-300">

<section className="">
<div className="flex items-center gap-4 mb-8">
<div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
<svg className="lucide lucide-briefcase text-cyan-400 w-5 h-5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-white">Experience</h2>
</div>
<div className="relative border-l border-slate-800 ml-3 space-y-10 pl-8 pb-4">

<div className="relative group">
<span className="absolute -left-[38px] top-1.5 h-5 w-5 rounded-full border border-slate-700 bg-slate-950 text-cyan-500 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
</span>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
<h3 className="text-xl font-medium text-white">Cloud Logics &amp; Le-Meniz</h3>
<span className="text-sm text-slate-500 font-mono">Puducherry</span>
</div>
<p className="text-cyan-400 text-sm font-medium mb-4">Web Development Intern</p>
<ul className="space-y-3 text-slate-400 text-base">
<li className="flex gap-3">
<svg className="lucide lucide-check w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Developed innovative web solutions reducing page load time by 25%.
                            </li>
<li className="flex gap-3">
<svg className="lucide lucide-check w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Implemented responsive features improving user experience and session duration by 20%.
                            </li>
</ul>
</div>
</div>
</section>

<section className="">
<div className="flex items-center gap-4 mb-8">
<div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
<svg className="lucide lucide-trophy text-cyan-400 w-5 h-5" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-white">Achievements</h2>
</div>
<div className="space-y-4">
<div className="group p-5 rounded-lg border border-slate-800 bg-slate-900/20 hover:bg-slate-800/40 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<div className="flex gap-4 relative z-10">
<div className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
<svg className="lucide lucide-medal w-5 h-5" data-lucide="medal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white group-hover:text-yellow-400 transition-colors">2nd Place - IFET Hackathon</h3>
<p className="text-slate-400 mt-1 leading-relaxed text-sm">
                                    Developed an innovative Online Doctor Consulting and Treatment Web Page, revolutionizing healthcare access.
                                </p>
</div>
</div>
</div>
<div className="group p-5 rounded-lg border border-slate-800 bg-slate-900/20 hover:bg-slate-800/40 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<div className="flex gap-4 relative z-10">
<div className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
<svg className="lucide lucide-award w-5 h-5" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">Dr. Kalam Youth Achiever Award</h3>
<p className="text-slate-400 mt-1 leading-relaxed text-sm">
                                    Recognized by the World Youth Federation for exceptional leadership and innovation in youth empowerment initiatives.
                                </p>
</div>
</div>
</div>
<div className="group p-5 rounded-lg border border-slate-800 bg-slate-900/20 hover:bg-slate-800/40 transition-colors">
<div className="flex gap-4">
<div className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-slate-700/30 text-slate-300 border border-slate-700">
<svg className="lucide lucide-presentation w-5 h-5" data-lucide="presentation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white">CEMP 2020 Participant</h3>
<p className="text-slate-400 mt-1 leading-relaxed text-sm">
                                    Basic Science Project Expo sponsored by the Department of Humanities and Science, IFET College.
                                </p>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="border-t border-slate-800 pt-16 animate-fade-in delay-500">
<div className="flex items-center gap-4 mb-10">
<div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
<svg className="lucide lucide-graduation-cap text-cyan-400 w-5 h-5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-white">Education History</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="relative p-6 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-slate-700 transition-colors group">
<div className="text-4xl font-bold text-slate-800 absolute top-4 right-6 opacity-50 group-hover:opacity-30 transition-opacity">2023</div>
<h3 className="text-lg font-medium text-white relative z-10">IFET College of Engineering</h3>
<p className="text-cyan-400 text-sm mt-1 mb-4 relative z-10">Engineering Graduate</p>
<div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                        71% Score
                    </div>
</div>

<div className="relative p-6 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-slate-700 transition-colors group">
<div className="text-4xl font-bold text-slate-800 absolute top-4 right-6 opacity-50 group-hover:opacity-30 transition-opacity">2019</div>
<h3 className="text-lg font-medium text-white relative z-10">Mount Park Mat. Hr. Sec. School</h3>
<p className="text-cyan-400 text-sm mt-1 mb-4 relative z-10">Higher Secondary</p>
<div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                        51.3% Score
                    </div>
</div>

<div className="relative p-6 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-slate-700 transition-colors group">
<div className="text-4xl font-bold text-slate-800 absolute top-4 right-6 opacity-50 group-hover:opacity-30 transition-opacity">2017</div>
<h3 className="text-lg font-medium text-white relative z-10">Sri Gnanananda Mat. Hr. Sec. School</h3>
<p className="text-cyan-400 text-sm mt-1 mb-4 relative z-10">Secondary School</p>
<div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                        78% Score
                    </div>
</div>
</div>
</section>

<footer className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-12 text-center animate-fade-in delay-500">
<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                    Ready to collaborate on the next big thing?
                </h2>
<p className="text-slate-400 text-lg mb-8">
                    Currently available for full-time roles. Fluent in English, Tamil, Hindi, and Urdu.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="hover:bg-cyan-50 transition-colors sm:w-auto font-semibold text-slate-900 bg-white w-full rounded-lg pt-3 pr-8 pb-3 pl-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="mailto:sheikjamsheerbasha@gmail.com">Get in Touch</a>
<a className="hover:bg-slate-700 transition-colors sm:w-auto font-semibold text-white bg-slate-800 w-full border-slate-700 border rounded-lg pt-3 pr-8 pb-3 pl-8" href="tel:+918248517785">
                        +91 82485 17785
                    </a>
</div>
<div className="flex gap-8 text-slate-500 border-slate-800 border-t mt-12 pt-8 gap-x-8 gap-y-8 justify-center">
<a className="hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200" href="/#https://www.linkedin.com/in/sheik-jamsheer-basha-t-59a3171ab/"><svg className="lucide lucide-linkedin w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="logos" data-logos="linkedin-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(34, 211, 238)', width: '24px', height: '24px'}} viewbox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"></path></svg></a>
<a className="hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200" href="/#https://github.com/sheikjamsheerbasha02/matches"><svg className="lucide lucide-github w-[30px] h-[30px]" data-icon-replaced="true" data-icon-set="logos" data-logos="github-icon" fill="none" height="30" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '30px', height: '30px', color: 'rgb(34, 211, 238)'}} viewbox="0 0 256 250" width="30" xmlns="http://www.w3.org/2000/svg"><path className="" d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403" fill="#161614"></path></svg></a>
<a className="hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200" href="/#https://vercel.com/sheikjamsheerbasha02s-projects/matches-lwps"><svg className="lucide lucide-twitter w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="logos" data-logos="vercel-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(34, 211, 238)'}} viewbox="0 0 256 222" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m128 0l128 221.705H0z"></path></svg></a>
</div>
<p className="mt-6 text-xs text-slate-600">
                    Based in Kallakuruchi District, TamilNadu, India.
                </p>
</div>
</footer>
</div>


    </>
  );
}
