import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
bg: '#FAFAFA',
surface: '#FFFFFF',
primary: '#111111',
secondary: '#666666',
accent: '#2563EB',
line: '#E5E5E5'
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
fontSize: {
'xxs': '0.625rem',
}
}
}
}



      // --- Initialization ---
      const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);

      document.getElementById('term-date').innerText = new Date().toDateString();

      // --- Animations ---
      const tl = gsap.timeline();
      tl.to('.reveal-hero', { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 });

      gsap.utils.toArray('.reveal-section').forEach(section => {
          gsap.to(section, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                  trigger: section,
                  start: 'top 85%',
              }
          });
      });

      // --- Data: Radford IC Levels ---
      const radfordLevels = [
          { id: 1, name: "Level 1", title: "Entry", analogy: "Learning about rope", anal_desc: "Learning about rope", knowledge: "Learns to use professional concepts. Applies company policies and procedures to resolve routine issues.", complexity: "Works on problems of limited scope. Follows standard practices and procedures. Builds stable working relationships internally.", supervision: "Normally receives detailed instructions on all work." },
          { id: 2, name: "Level 2", title: "Developing", analogy: "Tying basic knots", anal_desc: "Can tie basic knots. Participates as others tie complex knots.", knowledge: "Developing professional expertise, applies company policies and procedures to resolve a variety of issues.", complexity: "Works on problems of moderate scope where analysis requires review of variety of factors. Exercises judgment within defined procedures.", supervision: "Normally receives general instructions on routine work, detailed instructions on new projects." },
          { id: 3, name: "Level 3", title: "Career", analogy: "Tying complex knots", anal_desc: "Ties complex knots. Calculates rope strength. Knows a lot about knots.", knowledge: "A full understanding of area; resolves a wide range of issues in creative ways.", complexity: "Works on problems of diverse scope where analysis requires evaluation of identifiable factors. Demonstrates good judgment.", supervision: "Normally receives little instruction on day-to-day work, general instructions on new assignments." },
          { id: 4, name: "Level 4", title: "Advanced", analogy: "Rope making", anal_desc: "Understands rope making.", knowledge: "Has wide-ranging experience, uses professional concepts to resolve complex issues in creative and effective ways.", complexity: "Works on complex issues where analysis requires in-depth evaluation of variable factors. Exercises judgment in selecting methods.", supervision: "Determines methods and procedures on new assignments and may coordinate activities of other personnel." },
          { id: 5, name: "Level 5", title: "Expert", analogy: "Industry Expert", anal_desc: "Knows more about rope than anyone else at the company.", knowledge: "Has broad expertise or unique knowledge. Contributes to development of company objectives and principles.", complexity: "Works on significant and unique issues where analysis requires evaluation of intangibles. Exercises independent judgment.", supervision: "Acts independently to determine methods and procedures. May supervise the activities of others." },
          { id: 6, name: "Level 6", title: "Principal", analogy: "Global Expert", anal_desc: "Knows more about rope than anyone else, period.", knowledge: "Expert in the field, uses professional concepts in developing resolution to critical issues and broad design matters.", complexity: "Works on issues that impact design/selling success or address future concepts, products or technologies.", supervision: "Exercises wide latitude in determining objectives and approaches to critical assignments." }
      ];

      // --- Render Radford Table ---
      const radContainer = document.getElementById('radford-container');
      let radHTML = `<table class="data-table"><thead><tr><th class="row-header z-30">Level</th>`;
      radfordLevels.forEach(l => radHTML += `<th><div class="text-sm font-bold text-black">${l.name}</div><div class="text-xs font-normal text-secondary mt-1">${l.title}</div></th>`);
      radHTML += `</tr></thead><tbody>`;

      const radRows = [
          { key: 'anal_desc', label: 'Analogy' },
          { key: 'knowledge', label: 'Knowledge' },
          { key: 'complexity', label: 'Complexity' },
          { key: 'supervision', label: 'Supervision' }
      ];

      radRows.forEach(row => {
          radHTML += `<tr><td class="row-header">${row.label}</td>`;
          radfordLevels.forEach(l => {
              let content = l[row.key];
              if(row.key === 'anal_desc' && l.id > 1) content = content.replace(/\. /g, '.<br>');
              radHTML += `<td>${content}</td>`;
          });
          radHTML += `</tr>`;
      });
      radHTML += `</tbody></table>`;
      radContainer.innerHTML = radHTML;

      // --- Data: Step Placement ---
      const steps = [
          {
              level: "Level 1", title: "Entry",
              s1: "<b>Ownership:</b> No ownership, receives instructions on nearly all tasks.<br><br><b>Initiative:</b> None expected, does work as directed.",
              s2: "<b>Ownership:</b> Little ownership, receives instructions on most tasks.<br><br><b>Initiative:</b> Little expected, does work as directed.",
              s3: "<b>Ownership:</b> Some ownership, receives instructions on some tasks.<br><br><b>Initiative:</b> Beginning to take initiative through asking questions and learning.",
              s4: "<b>Ownership:</b> Increasing ownership, can work independently on many tasks.<br><br><b>Initiative:</b> Increasing initiative through asking targeted questions."
          },
          {
              level: "Level 2", title: "Developing",
              s1: "<b>Ownership:</b> Works on individual tasks mostly independently.<br><br><b>Initiative:</b> Begins deeper questioning of processes in order to improve them.",
              s2: "<b>Ownership:</b> Works on individual tasks completely independently.<br><br><b>Initiative:</b> Deep questioning of processes; begins to suggest improvements and tweaks.",
              s3: "<b>Ownership:</b> Mastering ability to break down projects into tasks; co-owns projects with strong guidance.<br><br><b>Initiative:</b> Takes initiative through iterating on existing processes.",
              s4: "<b>Ownership:</b> Co-owns projects and owns pieces of larger projects with decreasing guidance.<br><br><b>Initiative:</b> Takes initiative through iterating on existing processes."
          },
          {
              level: "Level 3", title: "Career",
              s1: "<b>Ownership:</b> Co-owns projects and owns pieces of larger projects in their area completely.<br><br><b>Initiative:</b> Makes good decisions within their scope without seeking consensus.",
              s2: "<b>Ownership:</b> Fully owns projects in their area with guidance.<br><br><b>Initiative:</b> Makes good decisions within their scope without seeking consensus.",
              s3: "<b>Ownership:</b> Fully owns projects in their area with decreasing guidance.<br><br><b>Initiative:</b> Takes initiative through identifying gaps and opportunities.",
              s4: "<b>Ownership:</b> Fully owns projects in their area completely.<br><br><b>Initiative:</b> Takes initiative through identifying gaps and opportunities."
          },
          {
              level: "Level 4", title: "Advanced",
              s1: "<b>Ownership:</b> Works independently and owns projects entirely, both in their area and cross-functionally.<br><br><b>Initiative:</b> Gives guidance and unblocks others; finds opportunities to mentor.",
              s2: "<b>Ownership:</b> Sought out as a mentor and known as the “teammate of record” in their subject area.<br><br><b>Initiative:</b> Gives guidance and unblocks others; finds opportunities to mentor.",
              s3: "<b>Ownership:</b> Identifies and proactively tackles major challenges and problems in their area.<br><br><b>Initiative:</b> Shows discretion in delegating tasks and focusing on higher level.",
              s4: "<b>Ownership:</b> Leads adoption of new systems/tools/methodologies in their area.<br><br><b>Initiative:</b> Shows discretion in delegating tasks and focusing on higher level."
          },
          {
              level: "Level 5", title: "Expert",
              s1: "<b>Ownership:</b> Conceives and own projects entirely. Regularly scopes and stages work into milestones.<br><br><b>Initiative:</b> Reduces complexity of projects/processes to get more done.",
              s2: "<b>Ownership:</b> Demonstrates knowledge of industry trends; leads adoption of new approaches.<br><br><b>Initiative:</b> Reduces complexity of projects/processes to get more done.",
              s3: "<b>Ownership:</b> Involved in setting direction at area level.<br><br><b>Initiative:</b> Takes initiative to identify and solve important problems, coordinating cross-functionally.",
              s4: "<b>Ownership:</b> Involved in setting direction at area level.<br><br><b>Initiative:</b> Takes initiative to identify and solve important problems, coordinating cross-functionally."
          },
          {
              level: "Level 6", title: "Principal",
              s1: "<b>Ownership:</b> Drives projects on which multiple teams depend.<br><br><b>Initiative:</b> Routinely and consistently pushes multiple teams within the company forward.",
              s2: "<b>Ownership:</b> As subject matter expert, plays a key role in developing overall company strategy.<br><br><b>Initiative:</b> Drives conversation about area’s direction, drives consensus.",
              s3: "<b>Ownership:</b> Decisions have a direct impact on the long-term success of the business.<br><br><b>Initiative:</b> Identifies major strategic opportunities to allow business to grow.",
              s4: "<b>Ownership:</b> Leads the company in developing direction in major areas.<br><br><b>Initiative:</b> Identifies and acts on major strategic opportunities to allow business to grow."
          }
      ];

      // --- Render Placement Table ---
      const placeContainer = document.getElementById('placement-container');
      let placeHTML = `<table class="data-table"><thead><tr><th class="row-header z-30">Level</th>`;
      [1,2,3,4].forEach(i => placeHTML += `<th>Step ${i}</th>`);
      placeHTML += `</tr></thead><tbody>`;

      steps.forEach(row => {
          placeHTML += `<tr><td class="row-header"><div class="font-bold">${row.level}</div><div class="text-xs text-secondary font-normal mt-1">${row.title}</div></td>`;
          placeHTML += `<td>${row.s1}</td><td>${row.s2}</td><td>${row.s3}</td><td>${row.s4}</td></tr>`;
      });
      placeHTML += `</tbody></table>`;
      placeContainer.innerHTML = placeHTML;


      // --- AI Terminal Logic ---
      const aiInput = document.getElementById('ai-input');
      const termOut = document.getElementById('terminal-output');

      aiInput.addEventListener('keypress', async (e) => {
          if (e.key === 'Enter') {
              const query = aiInput.value.trim().toLowerCase();
              if(!query) return;

              // User Line
              termOut.innerHTML += `<div class="terminal-line mb-1"><span class="text-green-500">➜</span> <span class="text-white">${aiInput.value}</span></div>`;
              aiInput.value = '';
              termOut.scrollTop = termOut.scrollHeight;

              // Fake Thinking
              const thinkingId = Date.now();
              termOut.innerHTML += `<div id="${thinkingId}" class="mb-2 text-gray-500 italic text-xs">... accessing handbook</div>`;
              termOut.scrollTop = termOut.scrollHeight;

              await new Promise(r => setTimeout(r, 600));
              document.getElementById(thinkingId).remove();

              // Simple Keyword Matching
              let response = "I couldn't find a specific clause for that. Try asking about 'Level 1', 'Ownership', or 'Initiative'.";

              if(query.includes('level 1') || query.includes('entry')) response = "Level 1 (Entry) focuses on learning professional concepts and building stable working relationships. Ownership is limited, relying on detailed instructions.";
              else if(query.includes('level 2') || query.includes('developing')) response = "Level 2 (Developing) implies working on problems of moderate scope. You should begin questioning processes to improve them.";
              else if(query.includes('level 3') || query.includes('career')) response = "Level 3 (Career) requires full understanding of the area. You co-own projects and resolve a wide range of issues creatively.";
              else if(query.includes('level 4') || query.includes('advanced')) response = "Level 4 (Advanced) involves mentoring others ('teammate of record') and solving complex issues with variable factors.";
              else if(query.includes('level 5') || query.includes('expert')) response = "Level 5 (Expert) involves setting direction at an area level and reducing complexity to get more done with less work.";
              else if(query.includes('level 6') || query.includes('principal')) response = "Level 6 (Principal) drives projects across multiple teams and impacts long-term business strategy directly.";
              else if(query.includes('ownership')) response = "Ownership scales from 'receiving instructions' (L1) to 'owning projects entirely' (L4) to 'driving company direction' (L6).";

              termOut.innerHTML += `<div class="terminal-line mb-4 text-gray-300 border-l-2 border-accent pl-3 leading-relaxed">${response}</div>`;
              termOut.scrollTop = termOut.scrollHeight;
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="">

<a className="flex items-center gap-3 hover:opacity-70 transition-opacity group" href="#">
<svg className="w-8 h-8 text-primary shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"></circle>
<circle cx="12" cy="12" fill="currentColor" r="3.5"></circle>
</svg>
<div className="flex items-baseline gap-1.5 font-sans text-lg tracking-tight text-primary leading-none uppercase">
<span className="font-light">Intentional</span>
<span className="font-semibold">Marketing</span>
</div>
</a>
</div>
<div className="flex items-center gap-6 hidden md:flex">
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#levels">
          Radford Levels
        </a>
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#placement">
          Placement Map
        </a>
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#faq">
          FAQ
        </a>
</div>
<div className="flex gap-4 items-center">
<span aria-label="Switch to People Leader Mode" className="text-xxs text-secondary cursor-default select-none font-mono bg-gray-100 rounded pt-1 pr-2 pb-1 pl-2">Ver 2.4</span>
</div>
</nav>

<header className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-20">
<div className="absolute inset-0 bg-[radial-gradient(#E5E5E5_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none"></div>
<div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
<div className="mb-6 opacity-0 reveal-hero">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-accent">
<iconify-icon icon="solar:graph-up-linear" width="12"></iconify-icon>
<span className="font-mono text-xxs uppercase tracking-widest">
              Growth Tracks
            </span>
</span>
</div>
<h1 className="md:text-8xl text-primary select-none reveal-hero text-6xl font-semibold tracking-tighter opacity-0 mb-6">
          Individual Contributor
          <br/>
<span className="text-secondary opacity-40">Placement Map</span>
</h1>
<p className="text-secondary md:text-lg text-balance reveal-hero opacity-0 max-w-xl mx-auto mb-10 leading-relaxed">
          A definitive guide to expectations, scope, and impact at every stage
          of the IC journey. From developing expertise to defining industry
          standards.
        </p>
<div className="flex gap-4 opacity-0 reveal-hero">
<button className="px-6 py-3 bg-primary text-white rounded-lg font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-300" onclick="lenis.scrollTo('#levels')">
            View Levels
          </button>
<button className="px-6 py-3 border border-gray-200 bg-white text-primary rounded-lg font-mono text-xs font-bold uppercase tracking-widest hover:border-gray-400 transition-colors duration-300" onclick="lenis.scrollTo('#placement')">
            Step Guide
          </button>
</div>
</div>
</header>
<main className="md:p-12 max-w-[1600px] mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 space-y-32">

<section className="scroll-mt-24 reveal-section" id="levels">
<div className="flex justify-between items-end mb-8">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
              Job Level Chart
            </h2>
<p className="text-secondary text-sm font-mono">
              Source: Radford • Scope of Impact
            </p>
</div>
</div>

<div className="md:hidden">
<a className="block" href="https://uploads.zite.com/orgid-5623/zite-uploads/8b1fesnzun/DCeiz3NvpfXOCgLVfGDeSGY43XnsRi18_gallery-1770788045462-4zzaa.jpg" rel="noopener noreferrer" target="_blank">
<img alt="Job Level Chart" className="w-full rounded-xl border border-gray-200 bg-white shadow-sm" loading="lazy" src="https://uploads.zite.com/orgid-5623/zite-uploads/8b1fesnzun/DCeiz3NvpfXOCgLVfGDeSGY43XnsRi18_gallery-1770788045462-4zzaa.jpg"/>
</a>
<p className="mt-3 text-xs text-secondary font-mono">
            Tap to open full size.
          </p>
</div>

<div className="data-table-container hidden md:block" id="radford-container"><table className="data-table"><thead><tr><th className="row-header z-30">Level</th><th><div className="text-sm font-bold text-black">Level 1</div><div className="text-xs font-normal text-secondary mt-1">Entry</div></th><th><div className="text-sm font-bold text-black">Level 2</div><div className="text-xs font-normal text-secondary mt-1">Developing</div></th><th><div className="text-sm font-bold text-black">Level 3</div><div className="text-xs font-normal text-secondary mt-1">Career</div></th><th><div className="text-sm font-bold text-black">Level 4</div><div className="text-xs font-normal text-secondary mt-1">Advanced</div></th><th><div className="text-sm font-bold text-black">Level 5</div><div className="text-xs font-normal text-secondary mt-1">Expert</div></th><th><div className="text-sm font-bold text-black">Level 6</div><div className="text-xs font-normal text-secondary mt-1">Principal</div></th></tr></thead><tbody><tr><td className="row-header">Analogy</td><td>Learning about rope</td><td>Can tie basic knots.<br/>Participates as others tie complex knots.</td><td>Ties complex knots.<br/>Calculates rope strength.<br/>Knows a lot about knots.</td><td>Understands rope making.</td><td>Knows more about rope than anyone else at the company.</td><td>Knows more about rope than anyone else, period.</td></tr><tr><td className="row-header">Knowledge</td><td>Learns to use professional concepts. Applies company policies and procedures to resolve routine issues.</td><td>Developing professional expertise, applies company policies and procedures to resolve a variety of issues.</td><td>A full understanding of area; resolves a wide range of issues in creative ways.</td><td>Has wide-ranging experience, uses professional concepts to resolve complex issues in creative and effective ways.</td><td>Has broad expertise or unique knowledge. Contributes to development of company objectives and principles.</td><td>Expert in the field, uses professional concepts in developing resolution to critical issues and broad design matters.</td></tr><tr><td className="row-header">Complexity</td><td>Works on problems of limited scope. Follows standard practices and procedures. Builds stable working relationships internally.</td><td>Works on problems of moderate scope where analysis requires review of variety of factors. Exercises judgment within defined procedures.</td><td>Works on problems of diverse scope where analysis requires evaluation of identifiable factors. Demonstrates good judgment.</td><td>Works on complex issues where analysis requires in-depth evaluation of variable factors. Exercises judgment in selecting methods.</td><td>Works on significant and unique issues where analysis requires evaluation of intangibles. Exercises independent judgment.</td><td>Works on issues that impact design/selling success or address future concepts, products or technologies.</td></tr><tr><td className="row-header">Supervision</td><td>Normally receives detailed instructions on all work.</td><td>Normally receives general instructions on routine work, detailed instructions on new projects.</td><td>Normally receives little instruction on day-to-day work, general instructions on new assignments.</td><td>Determines methods and procedures on new assignments and may coordinate activities of other personnel.</td><td>Acts independently to determine methods and procedures. May supervise the activities of others.</td><td>Exercises wide latitude in determining objectives and approaches to critical assignments.</td></tr></tbody></table></div>
</section>

<section className="scroll-mt-24 reveal-section" id="placement">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
              Step Placement Map
            </h2>
<p className="text-secondary text-sm font-mono">
              Detailed Expectations: Ownership &amp; Initiative
            </p>
</div>
</div>

<div className="md:hidden">
<a className="block" href="https://uploads.zite.com/orgid-5623/zite-uploads/8b1fesnzun/iP97BB2QEAH4OFdMSeH4ABh3XHtceZoC_gallery-1770788044721-3a0prt.jpg" rel="noopener noreferrer" target="_blank">
<img alt="Step Placement Map" className="w-full rounded-xl border border-gray-200 bg-white shadow-sm" loading="lazy" src="https://uploads.zite.com/orgid-5623/zite-uploads/8b1fesnzun/iP97BB2QEAH4OFdMSeH4ABh3XHtceZoC_gallery-1770788044721-3a0prt.jpg"/>
</a>
<p className="mt-3 text-xs text-secondary font-mono">
            Tap to open full size.
          </p>
</div>

<div className="data-table-container hidden md:block" id="placement-container"><table className="data-table"><thead><tr><th className="row-header z-30">Level</th><th>Step 1</th><th>Step 2</th><th>Step 3</th><th>Step 4</th></tr></thead><tbody><tr><td className="row-header"><div className="font-bold">Level 1</div><div className="text-xs text-secondary font-normal mt-1">Entry</div></td><td> No ownership, receives instructions on nearly all tasks.<br/><br/> None expected, does work as directed.</td><td> Little ownership, receives instructions on most tasks.<br/><br/> Little expected, does work as directed.</td><td> Some ownership, receives instructions on some tasks.<br/><br/> Beginning to take initiative through asking questions and learning.</td><td> Increasing ownership, can work independently on many tasks.<br/><br/> Increasing initiative through asking targeted questions.</td></tr><tr><td className="row-header"><div className="font-bold">Level 2</div><div className="text-xs text-secondary font-normal mt-1">Developing</div></td><td> Works on individual tasks mostly independently.<br/><br/> Begins deeper questioning of processes in order to improve them.</td><td> Works on individual tasks completely independently.<br/><br/> Deep questioning of processes; begins to suggest improvements and tweaks.</td><td> Mastering ability to break down projects into tasks; co-owns projects with strong guidance.<br/><br/> Takes initiative through iterating on existing processes.</td><td> Co-owns projects and owns pieces of larger projects with decreasing guidance.<br/><br/> Takes initiative through iterating on existing processes.</td></tr><tr><td className="row-header"><div className="font-bold">Level 3</div><div className="text-xs text-secondary font-normal mt-1">Career</div></td><td> Co-owns projects and owns pieces of larger projects in their area completely.<br/><br/> Makes good decisions within their scope without seeking consensus.</td><td> Fully owns projects in their area with guidance.<br/><br/> Makes good decisions within their scope without seeking consensus.</td><td> Fully owns projects in their area with decreasing guidance.<br/><br/> Takes initiative through identifying gaps and opportunities.</td><td> Fully owns projects in their area completely.<br/><br/> Takes initiative through identifying gaps and opportunities.</td></tr><tr><td className="row-header"><div className="font-bold">Level 4</div><div className="text-xs text-secondary font-normal mt-1">Advanced</div></td><td> Works independently and owns projects entirely, both in their area and cross-functionally.<br/><br/> Gives guidance and unblocks others; finds opportunities to mentor.</td><td> Sought out as a mentor and known as the “teammate of record” in their subject area.<br/><br/> Gives guidance and unblocks others; finds opportunities to mentor.</td><td> Identifies and proactively tackles major challenges and problems in their area.<br/><br/> Shows discretion in delegating tasks and focusing on higher level.</td><td> Leads adoption of new systems/tools/methodologies in their area.<br/><br/> Shows discretion in delegating tasks and focusing on higher level.</td></tr><tr><td className="row-header"><div className="font-bold">Level 5</div><div className="text-xs text-secondary font-normal mt-1">Expert</div></td><td> Conceives and own projects entirely. Regularly scopes and stages work into milestones.<br/><br/> Reduces complexity of projects/processes to get more done.</td><td> Demonstrates knowledge of industry trends; leads adoption of new approaches.<br/><br/> Reduces complexity of projects/processes to get more done.</td><td> Involved in setting direction at area level.<br/><br/> Takes initiative to identify and solve important problems, coordinating cross-functionally.</td><td> Involved in setting direction at area level.<br/><br/> Takes initiative to identify and solve important problems, coordinating cross-functionally.</td></tr><tr><td className="row-header"><div className="font-bold">Level 6</div><div className="text-xs text-secondary font-normal mt-1">Principal</div></td><td> Drives projects on which multiple teams depend.<br/><br/> Routinely and consistently pushes multiple teams within the company forward.</td><td> As subject matter expert, plays a key role in developing overall company strategy.<br/><br/> Drives conversation about area’s direction, drives consensus.</td><td> Decisions have a direct impact on the long-term success of the business.<br/><br/> Identifies major strategic opportunities to allow business to grow.</td><td> Leads the company in developing direction in major areas.<br/><br/> Identifies and acts on major strategic opportunities to allow business to grow.</td></tr></tbody></table></div>
</section>

<section className="bg-[#111] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden reveal-section">
<div className="absolute top-0 right-0 p-12 opacity-5">
<iconify-icon className="" height="200" icon="solar:user-id-linear" width="200"></iconify-icon>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-white/10 pb-6 gap-6 relative z-10">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight" style={{}}>
              Placement Self Assesment
            </h2>
<p className="text-sm text-gray-500 mt-1 font-mono">
              Confidential • Calibration &amp; Performance
            </p>
</div>
<div className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/10">
<span className="text-xs font-mono uppercase tracking-widest text-gray-400">
              Edit Mode
            </span>
<input className="toggle-switch" type="checkbox"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm relative z-10">

<div className="bg-white/5 p-6 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<span className="font-mono text-xs text-gray-500 uppercase">
                Current Calibration
              </span>
<iconify-icon className="text-gray-400 group-hover:text-accent transition-colors" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="text-2xl font-medium mt-2">
              Level 3
              <span className="text-gray-500 text-lg">/ Step 2</span>
</div>
<div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-[65%]"></div>
</div>
<div className="text-xs text-gray-400 mt-2">
              On track for promotion Q3
            </div>
</div>

<div className="bg-white/5 p-6 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<span className="font-mono text-xs text-gray-500 uppercase">
                Team Distribution
              </span>
<iconify-icon className="text-gray-400 group-hover:text-accent transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="flex gap-2 mt-2 items-end h-12">
<div className="w-1/6 bg-white/20 h-[20%] rounded-t-sm"></div>
<div className="w-1/6 bg-white/20 h-[40%] rounded-t-sm"></div>
<div className="w-1/6 bg-accent h-[80%] rounded-t-sm"></div>
<div className="w-1/6 bg-white/20 h-[60%] rounded-t-sm"></div>
<div className="w-1/6 bg-white/20 h-[30%] rounded-t-sm"></div>
<div className="w-1/6 bg-white/20 h-[10%] rounded-t-sm"></div>
</div>
<div className="text-xs text-gray-400 mt-2">
              Heavy concentration in L3/L4
            </div>
</div>

<div className="bg-white/5 p-6 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<span className="font-mono text-xs text-gray-500 uppercase">
                Pending Reviews
              </span>
<iconify-icon className="text-gray-400 group-hover:text-accent transition-colors" icon="solar:document-add-linear"></iconify-icon>
</div>
<div className="space-y-3 mt-1">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-gray-300">Self Assessment</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-gray-300">Peer Feedback (2/3)</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto pt-10 reveal-section" id="faq">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold tracking-tight mb-2">
            Competency Questions?
          </h2>
<p className="text-secondary text-sm">
            Ask the HR Helper about specific level requirements.
          </p>
</div>
<div className="bg-[#1E1E1E] rounded-xl shadow-2xl overflow-hidden font-mono text-sm border border-gray-800">
<div className="bg-[#2A2A2A] px-4 py-3 flex items-center gap-2 border-b border-gray-700">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<span className="ml-4 text-xs text-gray-500">hr-bot — zsh — 80x24</span>
</div>
<div className="p-6 h-[300px] overflow-y-auto flex flex-col gap-2" id="terminal-output">
<div className="text-gray-400 mb-2">
              Last login:
              <span className="" id="term-date">Wed Feb 11 2026</span>
              on ttys001
              <br/>
              IC Growth Framework Database Loaded.
            </div>
<div className="terminal-line">
<span className="text-green-500">➜</span>
<span className="text-cyan-400">~</span>
<span className="text-gray-300">
                What is the difference between Level 3 and 4?
              </span>
</div>
<div className="terminal-line pl-4 text-gray-400 border-l border-gray-700 my-2">
              Level 3 is about creative resolution within a wide range of
              issues. Level 4 requires handling complex issues with variable
              factors and exercising judgment in method selection.
            </div>
<div className="terminal-line">
<span className="text-green-500">➜</span>
<span className="text-cyan-400">~</span>
<span className="text-white">Ask a question below...</span>
</div>
</div>
<div className="p-4 bg-[#252525] border-t border-gray-700 flex items-center gap-2">
<span className="text-green-500">➜</span>
<span className="text-cyan-400">~</span>
<input autocomplete="off" className="bg-transparent border-none outline-none text-white w-full focus:ring-0 placeholder-gray-600" id="ai-input" placeholder="e.g., 'Level 5 initiative', 'Entry level requirements'" type="text"/>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-gray-200 py-12 mt-20 text-center">
<div className="hidden flex justify-center gap-6 mb-8 text-secondary">
<a className="hover:text-primary transition-colors" href="#">
<iconify-icon className="" height="20" icon="solar:plain-linear" style={{color: 'rgb(17, 17, 17)'}} width="20"></iconify-icon>
</a>
<a className="hover:text-primary transition-colors" href="#">
<iconify-icon className="" height="20" icon="solar:letter-linear" style={{color: 'rgb(17, 17, 17)'}} width="20"></iconify-icon>
</a>
</div>
<p className="uppercase text-xs text-gray-400 tracking-widest font-mono" style={{}}>
        © 2026 Intentional Marketing LLC
      </p>
</footer>


    </>
  );
}
