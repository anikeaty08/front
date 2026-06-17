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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Tab Switching Logic
        function switchTab(tabId) {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block', 'flex');
            });
            
            // Show target tab
            const target = document.getElementById(tabId);
            if(tabId === 'dashboard') {
                target.classList.remove('hidden');
                target.classList.add('flex');
            } else {
                target.classList.remove('hidden');
                target.classList.add('block');
            }

            // Update sidebar styles
            document.querySelectorAll('aside nav button').forEach(el => {
                el.classList.remove('bg-zinc-900/50', 'text-white');
                el.classList.add('text-zinc-500');
            });
            const activeBtn = document.getElementById('nav-' + tabId);
            if(activeBtn) {
                activeBtn.classList.remove('text-zinc-500');
                activeBtn.classList.add('bg-zinc-900/50', 'text-white');
            }
        }

        // Simulate Real-time WebSocket Data on Dashboard
        setInterval(() => {
            // Randomly fluctuate total beds
            const bedEl = document.getElementById('metric-beds');
            if (bedEl && !document.getElementById('dashboard').classList.contains('hidden')) {
                let currentTotal = parseInt(bedEl.innerText.replace(',', ''));
                let change = Math.floor(Math.random() * 5) - 2; // -2 to +2
                
                // Keep it realistic
                if(currentTotal + change > 1000 && currentTotal + change < 1500) {
                    bedEl.innerText = (currentTotal + change).toLocaleString();
                }

                // Randomly fluctuate specific rows to show "live updates"
                const row1Beds = document.getElementById('row1-beds');
                if(Math.random() > 0.7) {
                    let current = parseInt(row1Beds.innerText);
                    let diff = Math.random() > 0.5 ? 1 : -1;
                    row1Beds.innerText = current + diff;
                    
                    // Add a quick flash effect
                    row1Beds.parentElement.classList.add('bg-zinc-800/50');
                    setTimeout(() => row1Beds.parentElement.classList.remove('bg-zinc-800/50'), 500);
                }

                const row3Beds = document.getElementById('row3-beds');
                if(Math.random() > 0.8) {
                    let current = parseInt(row3Beds.innerText);
                    let diff = Math.random() > 0.5 ? 1 : -1;
                    if(current + diff >= 0) {
                        row3Beds.innerText = current + diff;
                        row3Beds.parentElement.classList.add('bg-red-900/20');
                        setTimeout(() => row3Beds.parentElement.classList.remove('bg-red-900/20'), 500);
                    }
                }
            }
        }, 2000);
    
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
      

<aside className="w-64 border-r border-zinc-900 bg-[#050505] flex-shrink-0 flex flex-col h-full hidden md:flex z-20">
<div className="h-16 flex items-center px-6 border-b border-zinc-900">
<div className="text-xl tracking-tighter font-medium text-white flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#050505]">
<iconify-icon icon="solar:pulse-linear"></iconify-icon>
</div>
                CSYNC
            </div>
</div>
<div className="p-4 flex-1 overflow-y-auto scrollbar-hide">
<div className="text-xs font-medium text-zinc-600 mb-3 uppercase tracking-widest px-2">Project Docs</div>
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm text-zinc-300 bg-zinc-900/50 rounded-md transition-colors hover:text-white group" id="nav-overview" onclick="switchTab('overview')">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:document-text-linear"></iconify-icon>
                    Overview &amp; Architecture
                </button>
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm text-zinc-500 hover:bg-zinc-900/50 rounded-md transition-colors hover:text-white group" id="nav-database" onclick="switchTab('database')">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:database-linear"></iconify-icon>
                    Database &amp; APIs
                </button>
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm text-zinc-500 hover:bg-zinc-900/50 rounded-md transition-colors hover:text-white group" id="nav-backend" onclick="switchTab('backend')">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:code-square-linear"></iconify-icon>
                    Backend Source Code
                </button>
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm text-zinc-500 hover:bg-zinc-900/50 rounded-md transition-colors hover:text-white group" id="nav-setup" onclick="switchTab('setup')">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:server-square-linear"></iconify-icon>
                    Setup &amp; Deployment
                </button>
</nav>
<div className="text-xs font-medium text-zinc-600 mt-8 mb-3 uppercase tracking-widest px-2">Application</div>
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm text-zinc-500 hover:bg-zinc-900/50 rounded-md transition-colors hover:text-white group" id="nav-dashboard" onclick="switchTab('dashboard')">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:laptop-linear"></iconify-icon>
                    Live Dashboard UI
                </button>
</nav>
</div>
<div className="p-4 border-t border-zinc-900">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white text-xs font-medium">BCA</div>
<div className="flex flex-col">
<span className="text-xs text-white font-medium">Final Year Project</span>
<span className="text-xs text-zinc-600">v1.0.0 Production</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="md:hidden h-16 border-b border-zinc-900 flex items-center justify-between px-4 z-20 bg-[#050505]">
<div className="text-xl tracking-tighter font-medium text-white">CSYNC</div>
<button className="text-zinc-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</header>
<div className="flex-1 overflow-y-auto scrollbar-hide relative z-10">

<section className="tab-content max-w-4xl mx-auto p-6 md:p-12 block" id="overview">
<div className="mb-12">
<h1 className="text-3xl tracking-tight font-medium text-white mb-4">CareSync: Real-Time Resource Management</h1>
<p className="text-base leading-relaxed text-zinc-400">
                        A production-grade, real-time web application designed to solve the critical problem of resource tracking across healthcare facilities. 
                        It provides live updates on bed availability, oxygen supplies, and critical care units using WebSockets, ensuring seamless coordination during emergencies.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
<div className="p-6 rounded-xl border border-zinc-900 bg-[#0a0a0a]">
<div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Problem Statement</h3>
<p className="text-sm text-zinc-500 leading-relaxed">During mass casualties or pandemics, families and paramedics struggle to find available hospital beds or blood in real-time, leading to fatal delays.</p>
</div>
<div className="p-6 rounded-xl border border-zinc-900 bg-[#0a0a0a]">
<div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:lightbulb-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">The Solution</h3>
<p className="text-sm text-zinc-500 leading-relaxed">A centralized, real-time dashboard connecting all regional hospitals. It tracks inventory via WebSockets and predicts shortages using an AI-based triage algorithm.</p>
</div>
</div>
<h2 className="text-xl tracking-tight font-medium text-white mb-6 border-b border-zinc-900 pb-2">System Architecture</h2>
<div className="p-8 rounded-xl border border-zinc-900 bg-[#0a0a0a] mb-12 flex flex-col items-center justify-center">

<div className="flex flex-col items-center space-y-4 w-full">
<div className="px-6 py-3 border border-zinc-800 rounded-md bg-zinc-900/50 text-white text-sm">Frontend (HTML, Tailwind, Vanilla JS)</div>
<div className="h-8 border-l border-zinc-700 border-dashed"></div>
<div className="flex gap-4 items-center">
<div className="px-4 py-2 text-xs border border-zinc-800 rounded text-zinc-400">REST APIs (JWT Auth)</div>
<div className="px-4 py-2 text-xs border border-zinc-800 rounded text-zinc-400">WebSockets (Live Data)</div>
</div>
<div className="h-8 border-l border-zinc-700 border-dashed"></div>
<div className="px-6 py-3 border border-zinc-800 rounded-md bg-zinc-900/50 text-white text-sm">Backend (Java Spring Boot)</div>
<div className="h-8 border-l border-zinc-700 border-dashed"></div>
<div className="flex gap-8 items-center w-full justify-center">
<div className="px-6 py-3 border border-zinc-800 rounded-md bg-zinc-900/50 text-white text-sm flex items-center gap-2">
<iconify-icon icon="solar:database-linear"></iconify-icon> PostgreSQL (Core Data)
                            </div>
<div className="px-6 py-3 border border-zinc-800 rounded-md bg-zinc-900/50 text-white text-sm flex items-center gap-2">
<iconify-icon icon="solar:cpu-linear"></iconify-icon> AI Engine (Python/FastAPI)
                            </div>
</div>
</div>
</div>
<h2 className="text-xl tracking-tight font-medium text-white mb-6 border-b border-zinc-900 pb-2">Core Features</h2>
<ul className="space-y-3 mb-12">
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="text-white text-sm font-medium">JWT Role-Based Authentication</span>
<p className="text-xs text-zinc-500">Secure login system differentiating between System Admins, Hospital Managers, and Public Users.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="text-white text-sm font-medium">Real-Time WebSockets</span>
<p className="text-xs text-zinc-500">Instant updates to bed counts and critical resources without page refreshes.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="text-white text-sm font-medium">AI Triage Recommendation (Bonus Feature)</span>
<p className="text-xs text-zinc-500">Integrates a lightweight prediction model to suggest resource allocation based on incoming patient severity.</p>
</div>
</li>
</ul>
</section>

<section className="tab-content max-w-4xl mx-auto p-6 md:p-12 hidden" id="database">
<h2 className="text-2xl tracking-tight font-medium text-white mb-8">Database Schema &amp; API Design</h2>
<h3 className="text-base font-medium text-white mb-4">PostgreSQL Tables</h3>
<div className="overflow-x-auto border border-zinc-900 rounded-xl mb-12">
<table className="w-full text-left border-collapse text-sm">
<thead>
<tr className="bg-zinc-900/50 border-b border-zinc-900">
<th className="p-4 text-zinc-300 font-medium">Table Name</th>
<th className="p-4 text-zinc-300 font-medium">Primary Key</th>
<th className="p-4 text-zinc-300 font-medium">Foreign Keys</th>
<th className="p-4 text-zinc-300 font-medium">Description</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-900">
<tr>
<td className="p-4 text-zinc-400 font-mono text-xs">users</td>
<td className="p-4 text-zinc-500 font-mono text-xs">id (UUID)</td>
<td className="p-4 text-zinc-500 font-mono text-xs">-</td>
<td className="p-4 text-zinc-500 text-xs">Stores credentials and roles (ADMIN, HOSPITAL).</td>
</tr>
<tr>
<td className="p-4 text-zinc-400 font-mono text-xs">hospitals</td>
<td className="p-4 text-zinc-500 font-mono text-xs">id (UUID)</td>
<td className="p-4 text-zinc-500 font-mono text-xs">manager_id -&gt; users(id)</td>
<td className="p-4 text-zinc-500 text-xs">Hospital profiles, locations, and contact info.</td>
</tr>
<tr>
<td className="p-4 text-zinc-400 font-mono text-xs">resources</td>
<td className="p-4 text-zinc-500 font-mono text-xs">id (UUID)</td>
<td className="p-4 text-zinc-500 font-mono text-xs">hospital_id -&gt; hospitals(id)</td>
<td className="p-4 text-zinc-500 text-xs">Tracks beds, ICU, ventilators, and oxygen levels.</td>
</tr>
</tbody>
</table>
</div>
<h3 className="text-base font-medium text-white mb-4">REST API Endpoints</h3>
<div className="space-y-4 mb-12">

<div className="border border-zinc-900 rounded-lg p-4 bg-[#0a0a0a]">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-1 bg-white text-black text-xs font-medium rounded">POST</span>
<span className="font-mono text-sm text-white">/api/v1/auth/login</span>
</div>
<p className="text-xs text-zinc-500">Authenticates user and returns JWT token.</p>
</div>
<div className="border border-zinc-900 rounded-lg p-4 bg-[#0a0a0a]">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-1 bg-zinc-800 text-white text-xs font-medium rounded">GET</span>
<span className="font-mono text-sm text-white">/api/v1/hospitals/{id}/resources</span>
</div>
<p className="text-xs text-zinc-500">Fetches current resource counts. Requires Bearer Token.</p>
</div>
<div className="border border-zinc-900 rounded-lg p-4 bg-[#0a0a0a]">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-1 bg-zinc-800 text-white text-xs font-medium rounded">PUT</span>
<span className="font-mono text-sm text-white">/api/v1/hospitals/{id}/resources</span>
</div>
<p className="text-xs text-zinc-500">Updates bed counts and triggers WebSocket broadcast to all connected clients.</p>
</div>
<div className="border border-zinc-900 rounded-lg p-4 bg-[#0a0a0a]">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-1 bg-zinc-800 text-white text-xs font-medium rounded">WS</span>
<span className="font-mono text-sm text-white">/ws/updates</span>
</div>
<p className="text-xs text-zinc-500">WebSocket endpoint for real-time live dashboard tracking.</p>
</div>
</div>
</section>

<section className="tab-content max-w-5xl mx-auto p-6 md:p-12 hidden" id="backend">
<h2 className="text-2xl tracking-tight font-medium text-white mb-8">Spring Boot Backend Implementation</h2>
<p className="text-sm text-zinc-400 mb-6">Below is the core logic demonstrating the WebSocket configuration and the REST controller for handling real-time resource updates.</p>
<div className="bg-[#0a0a0a] border border-zinc-900 rounded-xl overflow-hidden mb-8">
<div className="flex items-center px-4 py-3 border-b border-zinc-900 bg-[#050505]">
<iconify-icon className="text-zinc-500 mr-2" icon="solar:file-code-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-400">WebSocketConfig.java</span>
</div>
<pre className="p-6 text-xs font-mono text-zinc-300 overflow-x-auto scrollbar-hide">
<span className="text-zinc-500">package</span> com.caresync.config;

<span className="text-zinc-500">import</span> org.springframework.context.annotation.Configuration;
<span className="text-zinc-500">import</span> org.springframework.messaging.simp.config.MessageBrokerRegistry;
<span className="text-zinc-500">import</span> org.springframework.web.socket.config.annotation.*;

<span className="text-white">@Configuration</span>
<span className="text-white">@EnableWebSocketMessageBroker</span>
<span className="text-zinc-400">public class</span> <span className="text-white">WebSocketConfig</span> <span className="text-zinc-400">implements</span> <span className="text-white">WebSocketMessageBrokerConfigurer</span> {

    <span className="text-white">@Override</span>
    <span className="text-zinc-400">public void</span> <span className="text-white">configureMessageBroker</span>(MessageBrokerRegistry config) {
        config.enableSimpleBroker(<span className="text-zinc-500">"/topic"</span>);
        config.setApplicationDestinationPrefixes(<span className="text-zinc-500">"/app"</span>);
    }

    <span className="text-white">@Override</span>
    <span className="text-zinc-400">public void</span> <span className="text-white">registerStompEndpoints</span>(StompEndpointRegistry registry) {
        registry.addEndpoint(<span className="text-zinc-500">"/ws/updates"</span>).setAllowedOrigins(<span className="text-zinc-500">"*"</span>).withSockJS();
    }
}
</pre>
</div>
<div className="bg-[#0a0a0a] border border-zinc-900 rounded-xl overflow-hidden">
<div className="flex items-center px-4 py-3 border-b border-zinc-900 bg-[#050505]">
<iconify-icon className="text-zinc-500 mr-2" icon="solar:file-code-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-400">ResourceController.java</span>
</div>
<pre className="p-6 text-xs font-mono text-zinc-300 overflow-x-auto scrollbar-hide">
<span className="text-zinc-500">package</span> com.caresync.controller;

<span className="text-zinc-500">import</span> com.caresync.service.ResourceService;
<span className="text-zinc-500">import</span> org.springframework.messaging.simp.SimpMessagingTemplate;
<span className="text-zinc-500">import</span> org.springframework.web.bind.annotation.*;

<span className="text-white">@RestController</span>
<span className="text-white">@RequestMapping</span>(<span className="text-zinc-500">"/api/v1/resources"</span>)
<span className="text-zinc-400">public class</span> <span className="text-white">ResourceController</span> {

    <span className="text-zinc-400">private final</span> ResourceService resourceService;
    <span className="text-zinc-400">private final</span> SimpMessagingTemplate messagingTemplate;

    <span className="text-zinc-400">public</span> <span className="text-white">ResourceController</span>(ResourceService rs, SimpMessagingTemplate mt) {
        <span className="text-zinc-400">this</span>.resourceService = rs;
        <span className="text-zinc-400">this</span>.messagingTemplate = mt;
    }

    <span className="text-white">@PutMapping</span>(<span className="text-zinc-500">"/{hospitalId}"</span>)
    <span className="text-zinc-400">public</span> ResponseEntity&lt;ResourceDto&gt; <span className="text-white">updateResources</span>(
            <span className="text-white">@PathVariable</span> String hospitalId, 
            <span className="text-white">@RequestBody</span> ResourceUpdateRequest request) {
        
        <span className="text-zinc-500">// Update DB</span>
        ResourceDto updated = resourceService.updateResource(hospitalId, request);
        
        <span className="text-zinc-500">// Broadcast real-time update to all connected dashboard clients</span>
        messagingTemplate.convertAndSend(<span className="text-zinc-500">"/topic/live-resources"</span>, updated);
        
        <span className="text-zinc-400">return</span> ResponseEntity.ok(updated);
    }
}
</pre>
</div>
</section>

<section className="tab-content max-w-4xl mx-auto p-6 md:p-12 hidden" id="setup">
<h2 className="text-2xl tracking-tight font-medium text-white mb-8">Deployment &amp; Setup Guide</h2>
<div className="space-y-8">
<div>
<h3 className="text-base font-medium text-white mb-3">1. Database Setup</h3>
<p className="text-sm text-zinc-500 mb-2">Ensure PostgreSQL is installed. Run the following to initialize:</p>
<div className="p-4 bg-[#0a0a0a] border border-zinc-900 rounded-md font-mono text-xs text-zinc-400">
                            CREATE DATABASE caresync_db;<br/>
                            CREATE USER care_admin WITH PASSWORD 'secure_pass';<br/>
                            GRANT ALL PRIVILEGES ON DATABASE caresync_db TO care_admin;
                        </div>
</div>
<div>
<h3 className="text-base font-medium text-white mb-3">2. Backend Execution (Spring Boot)</h3>
<p className="text-sm text-zinc-500 mb-2">Navigate to the backend directory and update `application.yml` with DB credentials. Then build and run:</p>
<div className="p-4 bg-[#0a0a0a] border border-zinc-900 rounded-md font-mono text-xs text-zinc-400">
                            ./mvnw clean install<br/>
                            java -jar target/caresync-backend-1.0.jar
                        </div>
</div>
<div>
<h3 className="text-base font-medium text-white mb-3">3. Cloud Deployment Strategy</h3>
<ul className="space-y-2 text-sm text-zinc-500 list-disc pl-5">
<li><strong>Backend:</strong> Deploy the executable JAR on AWS EC2 or Render.com as a Web Service.</li>
<li><strong>Database:</strong> Use AWS RDS (PostgreSQL) or Supabase for a managed database instance.</li>
<li><strong>Frontend:</strong> Deploy the HTML/Tailwind/JS frontend files to Vercel or Netlify. Connect the base API URL to your deployed backend domain.</li>
</ul>
</div>
</div>
</section>

<section className="tab-content w-full h-full hidden flex flex-col bg-[#050505]" id="dashboard">

<div className="px-8 py-6 border-b border-zinc-900 flex justify-between items-center bg-[#050505] sticky top-0 z-10">
<div>
<h2 className="text-xl tracking-tight font-medium text-white">Regional Command Center</h2>
<p className="text-xs text-zinc-500 mt-1">Live resource tracking across 12 active facilities.</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-500">WebSocket Connected</span>
</div>
<div className="h-6 w-px bg-zinc-800 mx-2"></div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white text-xs">AD</div>
<div className="hidden md:block">
<div className="text-xs font-medium text-white">Admin User</div>
<div className="text-[10px] text-zinc-500">admin@caresync.gov</div>
</div>
</div>
</div>
</div>

<div className="p-8 flex-1 overflow-y-auto scrollbar-hide">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="p-5 rounded-xl border border-zinc-900 bg-[#0a0a0a] relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:bed-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium px-2 py-1 bg-zinc-900 text-zinc-400 rounded">Total</span>
</div>
<div className="text-2xl tracking-tight font-medium text-white mb-1" id="metric-beds">1,204</div>
<div className="text-xs text-zinc-500">Available Beds</div>
</div>
<div className="p-5 rounded-xl border border-zinc-900 bg-[#0a0a0a] relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium px-2 py-1 bg-red-950/30 text-red-500 border border-red-900/50 rounded">Critical</span>
</div>
<div className="text-2xl tracking-tight font-medium text-white mb-1" id="metric-icu">89</div>
<div className="text-xs text-zinc-500">ICU Units Open</div>
</div>
<div className="p-5 rounded-xl border border-zinc-900 bg-[#0a0a0a] relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:gas-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium px-2 py-1 bg-zinc-900 text-zinc-400 rounded">Live</span>
</div>
<div className="text-2xl tracking-tight font-medium text-white mb-1" id="metric-oxy">45,000L</div>
<div className="text-xs text-zinc-500">Oxygen Reserves</div>
</div>
<div className="p-5 rounded-xl border border-zinc-900 bg-[#0a0a0a] relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:user-speak-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium px-2 py-1 bg-zinc-900 text-zinc-400 rounded">Active</span>
</div>
<div className="text-2xl tracking-tight font-medium text-white mb-1">24/7</div>
<div className="text-xs text-zinc-500">Paramedic Dispatch</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 border border-zinc-900 rounded-xl bg-[#0a0a0a] overflow-hidden flex flex-col">
<div className="px-6 py-4 border-b border-zinc-900 flex justify-between items-center">
<h3 className="text-sm font-medium text-white">Facility Status</h3>

<div className="flex items-center gap-3">
<span className="text-xs text-zinc-500">AI Triage Routing</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#0a0a0a] appearance-none cursor-pointer z-10 transition-all duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</div>
</div>
</div>
<div className="flex-1 overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-[#050505] border-b border-zinc-900">
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Hospital Name</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Beds</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">ICU</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Last Update</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-900" id="facility-table">
<tr className="hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4 text-sm text-white">City General Hospital</td>
<td className="px-6 py-4"><span className="px-2 py-1 text-[10px] bg-emerald-950/30 text-emerald-500 border border-emerald-900/50 rounded">Optimal</span></td>
<td className="px-6 py-4 text-sm text-zinc-300" id="row1-beds">142</td>
<td className="px-6 py-4 text-sm text-zinc-300" id="row1-icu">12</td>
<td className="px-6 py-4 text-xs text-zinc-500">Just now</td>
</tr>
<tr className="hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4 text-sm text-white">Metro Care Center</td>
<td className="px-6 py-4"><span className="px-2 py-1 text-[10px] bg-yellow-950/30 text-yellow-500 border border-yellow-900/50 rounded">High Load</span></td>
<td className="px-6 py-4 text-sm text-zinc-300" id="row2-beds">45</td>
<td className="px-6 py-4 text-sm text-zinc-300" id="row2-icu">2</td>
<td className="px-6 py-4 text-xs text-zinc-500">2 min ago</td>
</tr>
<tr className="hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4 text-sm text-white">St. Jude Medical</td>
<td className="px-6 py-4"><span className="px-2 py-1 text-[10px] bg-red-950/30 text-red-500 border border-red-900/50 rounded">Critical</span></td>
<td className="px-6 py-4 text-sm text-zinc-300" id="row3-beds">8</td>
<td className="px-6 py-4 text-sm text-zinc-300" id="row3-icu">0</td>
<td className="px-6 py-4 text-xs text-zinc-500">Just now</td>
</tr>
<tr className="hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4 text-sm text-white">Westside Clinic</td>
<td className="px-6 py-4"><span className="px-2 py-1 text-[10px] bg-emerald-950/30 text-emerald-500 border border-emerald-900/50 rounded">Optimal</span></td>
<td className="px-6 py-4 text-sm text-zinc-300" id="row4-beds">210</td>
<td className="px-6 py-4 text-sm text-zinc-300" id="row4-icu">34</td>
<td className="px-6 py-4 text-xs text-zinc-500">5 min ago</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="border border-zinc-900 rounded-xl bg-[#0a0a0a] flex flex-col">
<div className="px-6 py-4 border-b border-zinc-900">
<h3 className="text-sm font-medium text-white">Live Activity Logs</h3>
</div>
<div className="p-6 flex-1 overflow-hidden relative">

<div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
<ul className="space-y-5" id="activity-feed">
<li className="flex gap-3 relative">
<div className="w-px h-full bg-zinc-800 absolute left-[11px] top-6"></div>
<div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex flex-shrink-0 items-center justify-center text-zinc-400 z-10">
<iconify-icon className="text-[10px]" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-white">Patient allocated to <span className="font-medium">Metro Care</span></p>
<p className="text-[10px] text-zinc-500 mt-0.5">Automated by AI Triage • 10 sec ago</p>
</div>
</li>
<li className="flex gap-3 relative">
<div className="w-px h-full bg-zinc-800 absolute left-[11px] top-6"></div>
<div className="w-6 h-6 rounded-full bg-emerald-950/30 border border-emerald-900/50 flex flex-shrink-0 items-center justify-center text-emerald-500 z-10">
<iconify-icon className="text-[10px]" icon="solar:refresh-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-white">Inventory Restock at <span className="font-medium">St. Jude</span></p>
<p className="text-[10px] text-zinc-500 mt-0.5">System Update • 1 min ago</p>
</div>
</li>
<li className="flex gap-3 relative">
<div className="w-6 h-6 rounded-full bg-red-950/30 border border-red-900/50 flex flex-shrink-0 items-center justify-center text-red-500 z-10">
<iconify-icon className="text-[10px]" icon="solar:danger-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-white">Critical Alert: <span className="font-medium">0 ICU Beds</span></p>
<p className="text-[10px] text-zinc-500 mt-0.5">St. Jude Medical • 2 min ago</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
</div>
</main>



    </>
  );
}
