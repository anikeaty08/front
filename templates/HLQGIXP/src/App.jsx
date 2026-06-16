import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Lucide
    lucide.createIcons();

    // Intersection Observer for fade-in
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    // Chart.js
    const ctx = document.getElementById('salaryChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['0-1', '2-3', '4-5', '6-8', '9+'],
        datasets: [{
          label: 'Median Salary',
          data: [65000, 84000, 104000, 131000, 148000],
          borderColor: '#4f46e5',
          backgroundColor: 'rgba(99, 102, 241, 0.15)',
          tension: 0.35,
          fill: true,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2
        }]
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: ctx => `$${ctx.parsed.y.toLocaleString()}` } }
        },
        scales: {
          y: {
            ticks: { callback: v => `$${v/1000}k` },
            grid: { color: 'rgba(100,100,100,0.05)' },
            beginAtZero: false
          },
          x: { grid: { display: false } }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative isolate">
<img alt="AI Illustration" className="absolute inset-0 -z-10 h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 -z-10 bg-white bg-opacity-70 backdrop-blur-sm"></div>
<div className="mx-auto max-w-6xl px-4 pt-24 pb-28 text-center">
<h1 className="text-4xl/tight md:text-5xl/tight font-semibold tracking-tight text-slate-900 opacity-0 translate-y-6 transition duration-1000" data-animate="">
        B.Sc. in Computer Science &amp; Artificial Intelligence
      </h1>
<p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-700 opacity-0 translate-y-6 transition duration-1000 delay-100" data-animate="">
        Turning data into decisions, algorithms into impact.
      </p>
<div className="mt-10 flex flex-wrap justify-center gap-6 opacity-0 translate-y-6 transition duration-1000 delay-200" data-animate="">
<div className="flex items-center gap-2 px-6 py-3 rounded-lg shadow-sm bg-white hover:ring-1 hover:ring-slate-300">
<i className="w-5 h-5 stroke-[1.5] text-indigo-600" data-lucide="graduation-cap"></i>
<span className="font-medium">4 years · 240 ECTS</span>
</div>
<div className="flex items-center gap-2 px-6 py-3 rounded-lg shadow-sm bg-white hover:ring-1 hover:ring-slate-300">
<i className="w-5 h-5 stroke-[1.5] text-indigo-600" data-lucide="map"></i>
<span className="font-medium">On-campus &amp; hybrid</span>
</div>
<div className="flex items-center gap-2 px-6 py-3 rounded-lg shadow-sm bg-white hover:ring-1 hover:ring-slate-300">
<i className="w-5 h-5 stroke-[1.5] text-indigo-600" data-lucide="briefcase"></i>
<span className="font-medium">97 % employability</span>
</div>
</div>
</div>
</section>

<main className="mx-auto max-w-6xl px-4 space-y-20 pb-28">

<section className="space-y-8" id="overview">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 opacity-0 translate-y-6 transition duration-700" data-animate="">
        Program Snapshot
      </h2>
<div className="grid md:grid-cols-2 gap-8">
<article className="p-6 rounded-xl bg-white shadow-sm ring-1 ring-slate-200 hover:ring-indigo-300 transition">
<h3 className="text-lg font-medium tracking-tight text-slate-900 flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5] text-indigo-600" data-lucide="layers"></i> Field &amp; Orientation
          </h3>
<p className="mt-3 text-slate-700 leading-relaxed">
            Rooted in software engineering, the program focuses on artificial intelligence, data engineering and human-centered computing. Students dive deep into machine learning, large-scale distributed systems and ethical AI deployment.
          </p>
</article>
<article className="p-6 rounded-xl bg-white shadow-sm ring-1 ring-slate-200 hover:ring-indigo-300 transition">
<h3 className="text-lg font-medium tracking-tight text-slate-900 flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5] text-indigo-600" data-lucide="briefcase"></i> Related Careers
          </h3>
<ul className="mt-4 space-y-2 text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-right"></i> Machine Learning Engineer</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-right"></i> Data Scientist</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-right"></i> Software Architect</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-right"></i> AI Product Manager</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-right"></i> Research Scientist</li>
</ul>
</article>
</div>
</section>

<section className="space-y-8" id="demographics">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 opacity-0 translate-y-6 transition duration-700" data-animate="">
        Graduate Demographics (2024 Cohort Survey, n = 368)
      </h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl bg-white shadow-sm ring-1 ring-slate-200 hover:ring-indigo-300 transition">
<h3 className="text-lg font-medium tracking-tight text-slate-900 flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5] text-indigo-600" data-lucide="user"></i> Gender Split
          </h3>
<div className="mt-5 flex items-end gap-6">
<div className="w-full">
<div className="h-24 bg-indigo-500/80 rounded-t-md" style={{height: '64%'}}></div>
<p className="mt-2 text-sm text-center">Male 64 %</p>
</div>
<div className="w-full">
<div className="h-24 bg-purple-500/80 rounded-t-md" style={{height: '34%'}}></div>
<p className="mt-2 text-sm text-center">Female 34 %</p>
</div>
<div className="w-full">
<div className="h-24 bg-slate-400/80 rounded-t-md" style={{height: '2%'}}></div>
<p className="mt-2 text-sm text-center">Non-binary 2 %</p>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-white shadow-sm ring-1 ring-slate-200 hover:ring-indigo-300 transition">
<h3 className="text-lg font-medium tracking-tight text-slate-900 flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5] text-indigo-600" data-lucide="award"></i> Highest Degree
          </h3>
<ul className="mt-4 space-y-2 text-slate-700">
<li>Bachelor: 71 %</li>
<li>Master: 24 %</li>
<li>PhD: 5 %</li>
</ul>
</div>

<div className="p-6 rounded-xl bg-white shadow-sm ring-1 ring-slate-200 hover:ring-indigo-300 transition">
<h3 className="text-lg font-medium tracking-tight text-slate-900 flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5] text-indigo-600" data-lucide="office-building"></i> Top Employers
          </h3>
<ol className="mt-4 space-y-2 list-decimal list-inside text-slate-700">
<li>DeepVision Labs</li>
<li>Nimbus Cloud Services</li>
<li>Orbitron Robotics</li>
<li>FinSy AI Analytics</li>
<li>MetaMatrix Solutions</li>
</ol>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8">
<div className="p-6 rounded-xl bg-white shadow-sm ring-1 ring-slate-200 hover:ring-indigo-300 transition">
<h3 className="text-lg font-medium tracking-tight text-slate-900 flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5] text-indigo-600" data-lucide="clock"></i> Years of Experience
          </h3>
<div className="mt-5 grid grid-cols-5 gap-2">
<div className="flex flex-col items-center">
<div className="w-full bg-indigo-500/80 rounded-t-md" style={{height: '22%'}}></div>
<span className="mt-2 text-xs">0-1y</span>
</div>
<div className="flex flex-col items-center">
<div className="w-full bg-indigo-500/80 rounded-t-md" style={{height: '33%'}}></div>
<span className="mt-2 text-xs">2-3y</span>
</div>
<div className="flex flex-col items-center">
<div className="w-full bg-indigo-500/80 rounded-t-md" style={{height: '26%'}}></div>
<span className="mt-2 text-xs">4-5y</span>
</div>
<div className="flex flex-col items-center">
<div className="w-full bg-indigo-500/80 rounded-t-md" style={{height: '13%'}}></div>
<span className="mt-2 text-xs">6-8y</span>
</div>
<div className="flex flex-col items-center">
<div className="w-full bg-indigo-500/80 rounded-t-md" style={{height: '6%'}}></div>
<span className="mt-2 text-xs">9y+</span>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-white shadow-sm ring-1 ring-slate-200 hover:ring-indigo-300 transition">
<h3 className="text-lg font-medium tracking-tight text-slate-900 flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5] text-indigo-600" data-lucide="dollar-sign"></i> Median Annual Salary
          </h3>
<p className="mt-6 text-4xl font-semibold text-slate-900">$94 200</p>
<p className="text-sm text-slate-600 mt-1">all graduates, worldwide</p>
</div>
</div>
</section>

<section className="space-y-8" id="salary">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 opacity-0 translate-y-6 transition duration-700" data-animate="">
        Salary vs. Experience
      </h2>
<div className="p-6 rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
<p className="text-sm text-slate-700">
          Median base salary (USD) reported by graduates, segmented by years of professional experience.
        </p>
<div className="mt-6">
<div>
<canvas height="120" id="salaryChart"></canvas>
</div>
</div>
</div>
</section>

<section className="space-y-8" id="curriculum">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 opacity-0 translate-y-6 transition duration-700" data-animate="">
        Core Curriculum Highlights
      </h2>
<div className="grid md:grid-cols-2 gap-6">
<ul className="space-y-4 border-l-2 border-indigo-200 pl-6">
<li className="text-slate-800">Programming Fundamentals (Python &amp; C++)</li>
<li className="text-slate-800">Data Structures &amp; Algorithms</li>
<li className="text-slate-800">Discrete Mathematics</li>
<li className="text-slate-800">Linear Algebra for Machine Learning</li>
<li className="text-slate-800">Operating Systems &amp; Networks</li>
</ul>
<ul className="space-y-4 border-l-2 border-indigo-200 pl-6">
<li className="text-slate-800">Machine Learning I &amp; II</li>
<li className="text-slate-800">Deep Learning &amp; Computer Vision</li>
<li className="text-slate-800">Natural Language Processing</li>
<li className="text-slate-800">Distributed Systems &amp; Cloud</li>
<li className="text-slate-800">Ethics &amp; Governance of AI</li>
</ul>
</div>
</section>
</main>

<div className="border-t border-slate-200"></div>

<footer className="mx-auto max-w-6xl px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-600">
<span>© 2024 CSAI Department</span>
<span className="flex items-center gap-2">Built with <i className="w-4 h-4 stroke-[1.5]" data-lucide="code"></i> for prospective students.</span>
</footer>



    </>
  );
}
