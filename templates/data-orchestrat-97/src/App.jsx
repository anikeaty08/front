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
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
200: '#c4e2fb', // Secondary
300: '#7dd3fc',
400: '#38bdf8',
500: '#198df9', // Primary
600: '#0284c7',
700: '#0369a1',
900: '#0c4a6e',
},
slate: {
850: '#151f32', // Deep dark
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<div className="relative w-8 h-8 flex items-center justify-center">
<svg className="text-brand-500 w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">SuperFlow<span className="text-brand-500">SQL</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-brand-500 transition-colors" href="#features">Features</a>
<a className="hover:text-brand-500 transition-colors" href="#architecture">Architecture</a>
<a className="hover:text-brand-500 transition-colors" href="#docs">Documentation</a>
<a className="hover:text-brand-500 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-slate-400 hover:text-slate-900 transition-colors" href="https://github.com/superflowsql">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
<a className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all shadow-lg shadow-brand-500/20" href="#get-started">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 grid-bg -z-10"></div>
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-50 to-transparent opacity-60 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-6 border border-brand-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                    v2.0 is now available
                </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                    Data orchestration <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-blue-400">reimagined.</span>
</h1>
<p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                    The complete platform integrating Airflow, PostgreSQL, PgAdmin, and Superset. Automate pipelines, manage data, and visualize results in one unified environment.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg shadow-xl shadow-brand-500/20 transition-all hover:-translate-y-1 text-center" href="#start">
                        Get Started
                    </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 group" href="#docs">
                        View Documentation
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-10 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-semibold text-sm text-slate-800"><i className="w-4 h-4" data-lucide="database"></i> PostgreSQL</div>
<div className="flex items-center gap-2 font-semibold text-sm text-slate-800"><i className="w-4 h-4" data-lucide="wind"></i> Airflow</div>
<div className="flex items-center gap-2 font-semibold text-sm text-slate-800"><i className="w-4 h-4" data-lucide="bar-chart-2"></i> Superset</div>
</div>
</div>

<div className="lg:w-1/2 w-full fade-in-up delay-200">
<div className="relative rounded-xl bg-slate-900 p-2 shadow-2xl ring-1 ring-slate-900/10">
<div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-500 rounded-full blur-[100px] opacity-20"></div>

<div className="rounded-lg bg-[#0F1117] overflow-hidden border border-slate-800/50">
<div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-[#161b22]">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
</div>
<div className="ml-4 text-xs font-mono text-slate-500">pipeline_dag.py</div>
</div>
<div className="p-6 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
<div className="flex"><span className="text-slate-600 w-8 select-none">1</span><span className="text-purple-400">from</span> airflow <span className="text-purple-400">import</span> DAG</div>
<div className="flex"><span className="text-slate-600 w-8 select-none">2</span><span className="text-purple-400">from</span> airflow.operators.postgres_operator <span className="text-purple-400">import</span> PostgresOperator</div>
<div className="flex"><span className="text-slate-600 w-8 select-none">3</span></div>
<div className="flex"><span className="text-slate-600 w-8 select-none">4</span><span className="text-brand-400">with</span> DAG(<span className="text-green-400">'superflow_etl'</span>, schedule_interval=<span className="text-green-400">'@daily'</span>) <span className="text-brand-400">as</span> dag:</div>
<div className="flex"><span className="text-slate-600 w-8 select-none">5</span>    extract_task = PostgresOperator(</div>
<div className="flex"><span className="text-slate-600 w-8 select-none">6</span>        task_id=<span className="text-green-400">'extract_sales_data'</span>,</div>
<div className="flex"><span className="text-slate-600 w-8 select-none">7</span>        sql=<span className="text-green-400">"SELECT * FROM raw_sales WHERE date = {{ ds }}"</span></div>
<div className="flex"><span className="text-slate-600 w-8 select-none">8</span>    )</div>
<div className="flex"><span className="text-slate-600 w-8 select-none">9</span></div>
<div className="flex"><span className="text-slate-600 w-8 select-none">10</span>    transform_task &gt;&gt; loading_task &gt;&gt; visualize_superset</div>
<div className="mt-4 pl-8 border-l-2 border-brand-500/30">
<div className="text-brand-400 mb-1 flex items-center gap-2"><i className="w-3 h-3" data-lucide="check-circle-2"></i> Pipeline Validated</div>
<div className="text-slate-500">Ready for deployment to production cluster.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="architecture">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 max-w-2xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Unified Platform Architecture</h2>
<p className="text-slate-600">
                    A seamless integration of industry-standard tools. We've handled the complex networking so you can focus on data.
                </p>
</div>
<div className="relative max-w-5xl mx-auto">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" style={{minHeight: '400px'}}>

<defs>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#cbd5e1', stopOpacity: '1'}}></stop>
<stop offset="50%" style={{stopColor: '#198df9', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#cbd5e1', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>


<path d="M512 200 L250 100" fill="none" stroke="#e2e8f0" strokeWidth="2"></path>
<path className="flow-line" d="M512 200 L250 100" fill="none" stroke="#198df9" strokeWidth="2"></path>

<path d="M512 200 L250 300" fill="none" stroke="#e2e8f0" strokeWidth="2"></path>
<path className="flow-line" d="M512 200 L250 300" fill="none" stroke="#198df9" strokeWidth="2" style={{animationDelay: '-5s'}}></path>

<path d="M512 200 L774 100" fill="none" stroke="#e2e8f0" strokeWidth="2"></path>
<path className="flow-line" d="M512 200 L774 100" fill="none" stroke="#198df9" strokeWidth="2" style={{animationDelay: '-10s'}}></path>

<path d="M512 200 L774 300" fill="none" stroke="#e2e8f0" strokeWidth="2"></path>
<path className="flow-line" d="M512 200 L774 300" fill="none" stroke="#198df9" strokeWidth="2" style={{animationDelay: '-15s'}}></path>
</svg>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

<div className="space-y-24 flex flex-col justify-center">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="text-blue-600" data-lucide="monitor"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Airflow Webserver</h3>
<p className="text-sm text-slate-500">Monitor pipelines, trigger DAGs, and view logs.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="text-blue-600" data-lucide="clock"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Airflow Scheduler</h3>
<p className="text-sm text-slate-500">Orchestrates task execution and manages timing.</p>
</div>
</div>

<div className="flex items-center justify-center py-12 md:py-0">

<div className="bg-white p-8 rounded-2xl border-2 border-brand-200 shadow-2xl shadow-brand-500/10 text-center w-full relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                Core
                            </div>
<div className="w-20 h-20 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
<i className="w-10 h-10 text-brand-600" data-lucide="database"></i>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">PostgreSQL</h3>
<p className="text-sm text-slate-500">Central metadata store and data warehouse. The heart of the platform.</p>
</div>
</div>

<div className="space-y-24 flex flex-col justify-center">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow group">
<div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="text-cyan-600" data-lucide="settings-2"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">PgAdmin 4</h3>
<p className="text-sm text-slate-500">User-friendly UI for database administration.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow group">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="text-indigo-600" data-lucide="pie-chart"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Apache Superset</h3>
<p className="text-sm text-slate-500">Business intelligence and data visualization.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Everything you need to master your data</h2>
<p className="text-slate-600 text-lg">SuperFlowSQL abstracts the complexity of setting up a modern data stack, so you can start querying in minutes.</p>
</div>
<a className="text-brand-600 font-semibold hover:text-brand-700 flex items-center gap-1 group" href="#docs">
                    Explore all features <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-brand-50/30 transition-colors group">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="text-slate-700 group-hover:text-brand-600" data-lucide="workflow"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Automated Orchestration</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Create complex DAGs in Python. Schedule jobs, manage dependencies, and handle retries automatically with Airflow.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-brand-50/30 transition-colors group">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="text-slate-700 group-hover:text-brand-600" data-lucide="activity"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Real-time Monitoring</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Track pipeline health, catch failures instantly, and get detailed logs directly from the web interface.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-brand-50/30 transition-colors group">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="text-slate-700 group-hover:text-brand-600" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Powerful Visualization</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Turn SQL queries into stunning dashboards with Apache Superset. Share insights across your organization.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-brand-50/30 transition-colors group">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="text-slate-700 group-hover:text-brand-600" data-lucide="database-zap"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Database Management</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Full control over your PostgreSQL schemas, tables, and permissions via the integrated PgAdmin 4 interface.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-brand-50/30 transition-colors group">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="text-slate-700 group-hover:text-brand-600" data-lucide="server"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Scalable Architecture</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Built to scale. Whether you're processing megabytes or terabytes, SuperFlowSQL grows with your data needs.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-brand-50/30 transition-colors group">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="text-slate-700 group-hover:text-brand-600" data-lucide="container"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Easy Docker Deployment</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Spin up the entire stack with a single command. `docker-compose up` is all it takes to get started.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 text-center mb-16">Workflow Simplified</h2>
<div className="relative">
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>
<div className="space-y-12">

<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="md:w-1/2 text-right md:pr-8 flex flex-col items-center md:items-end">
<div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg">1</div>
<h3 className="text-xl font-semibold text-slate-900">Deploy with Docker</h3>
<p className="text-slate-600 mt-2 max-w-sm">Clone the repo and run docker-compose up. Your environment is ready in seconds, pre-configured with secure connections.</p>
</div>
<div className="md:w-1/2 md:pl-8">
<div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-slate-300 shadow-xl border border-slate-800">
<span className="text-brand-500">$</span> git clone superflowsql<br/>
<span className="text-brand-500">$</span> docker-compose up -d<br/>
<span className="text-green-500">✔ Container postgres started</span><br/>
<span className="text-green-500">✔ Container airflow started</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
<div className="md:w-1/2 text-left md:pl-8 flex flex-col items-center md:items-start">
<div className="w-12 h-12 bg-white border-2 border-slate-900 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg mb-4">2</div>
<h3 className="text-xl font-semibold text-slate-900">Create &amp; Schedule</h3>
<p className="text-slate-600 mt-2 max-w-sm">Write DAGs in Python to define your ETL process. Schedule them to run hourly, daily, or trigger based on events.</p>
</div>
<div className="md:w-1/2 md:pr-8 text-right">
<img alt="Code" className="rounded-lg shadow-xl border border-slate-200 opacity-90 inline-block grayscale-[20%]" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=200"/>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="md:w-1/2 text-right md:pr-8 flex flex-col items-center md:items-end">
<div className="w-12 h-12 bg-white border-2 border-slate-900 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg mb-4">3</div>
<h3 className="text-xl font-semibold text-slate-900">Monitor &amp; Visualize</h3>
<p className="text-slate-600 mt-2 max-w-sm">Watch data flow in real-time. Then, switch to Superset to build charts on top of the fresh data in PostgreSQL.</p>
</div>
<div className="md:w-1/2 md:pl-8">
<div className="grid grid-cols-2 gap-2 max-w-xs mx-auto md:mx-0">
<div className="bg-brand-100 h-24 rounded-lg"></div>
<div className="bg-brand-200 h-24 rounded-lg"></div>
<div className="bg-brand-500 h-24 rounded-lg col-span-2"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 mb-12">Built for diverse data needs</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
<div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center mb-4">
<i className="text-orange-600 w-5 h-5" data-lucide="refresh-cw"></i>
</div>
<h4 className="font-semibold text-slate-900 mb-2">ETL Automation</h4>
<p className="text-sm text-slate-500">Extract logs, transform schemas, and load clean data efficiently.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
<div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
<i className="text-purple-600 w-5 h-5" data-lucide="layers"></i>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Data Warehousing</h4>
<p className="text-sm text-slate-500">Centralize distributed data sources into a single source of truth.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
<div className="h-10 w-10 bg-pink-100 rounded-full flex items-center justify-center mb-4">
<i className="text-pink-600 w-5 h-5" data-lucide="presentation"></i>
</div>
<h4 className="font-semibold text-slate-900 mb-2">BI &amp; Reporting</h4>
<p className="text-sm text-slate-500">Generate daily reports for stakeholders without manual intervention.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
<div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center mb-4">
<i className="text-teal-600 w-5 h-5" data-lucide="code-2"></i>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Data Engineering</h4>
<p className="text-sm text-slate-500">Test new pipeline logic in an isolated, production-like environment.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">Ready to streamline your data workflows?</h2>
<p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Join data engineers who are saving hours every week with SuperFlowSQL's integrated stack.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg shadow-xl shadow-brand-500/30 transition-all hover:-translate-y-1" href="#">
                    Get Started Now
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="github"></i> Star on GitHub
                </a>
</div>
</div>

<div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-100 rounded-full blur-[80px] opacity-50 -z-10"></div>
<div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full blur-[80px] opacity-50 -z-10"></div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<svg className="text-brand-500 w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="font-bold text-slate-900">SuperFlowSQL</span>
</div>
<p className="text-sm text-slate-500 mb-4">The complete open-source data orchestration platform.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400">© 2024 SuperFlowSQL. All rights reserved.</p>
<div className="flex items-center gap-2 text-sm text-slate-400">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    System Operational
                </div>
</div>
</div>
</footer>


    </>
  );
}
