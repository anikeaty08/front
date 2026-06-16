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
border: 'rgba(0,0,0,0.08)',
surface: '#ffffff',
subtle: '#888888',
obsidian: '#111111',
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
},
keyframes: {
fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
slideUp: { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } }
}
}
}
}



if (window.self !== window.top) {
var debugMonitorScript = document.createElement('script');
debugMonitorScript.src = 'https://assets.emergent.sh/scripts/debug-monitor.js';
document.head.appendChild(debugMonitorScript);
}



            !(function (t, e) {
                var o, n, p, r;
                e.__SV ||
                    ((window.posthog = e),
                    (e._i = []),
                    (e.init = function (i, s, a) {
                        function g(t, e) {
                            var o = e.split(".");
                            2 == o.length && ((t = t[o[0]]), (e = o[1])),
                                (t[e] = function () {
                                    t.push(
                                        [e].concat(
                                            Array.prototype.slice.call(
                                                arguments,
                                                0,
                                            ),
                                        ),
                                    );
                                });
                        }
                        ((p = t.createElement("script")).type =
                            "text/javascript"),
                            (p.crossOrigin = "anonymous"),
                            (p.async = !0),
                            (p.src =
                                s.api_host.replace(
                                    ".i.posthog.com",
                                    "-assets.i.posthog.com",
                                ) + "/static/array.js"),
                            (r =
                                t.getElementsByTagName(
                                    "script",
                                )[0]).parentNode.insertBefore(p, r);
                        var u = e;
                        for (
                            void 0 !== a ? (u = e[a] = []) : (a = "posthog"),
                                u.people = u.people || [],
                                u.toString = function (t) {
                                    var e = "posthog";
                                    return (
                                        "posthog" !== a && (e += "." + a),
                                        t || (e += " (stub)"),
                                        e
                                    );
                                },
                                u.people.toString = function () {
                                    return u.toString(1) + ".people (stub)";
                                },
                                o =
                                    "init me ws ys ps bs capture je Di ks register register_once register_for_session unregister unregister_for_session Ps getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Es $s createPersonProfile Is opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing Ss debug xs getPageViewId captureTraceFeedback captureTraceMetric".split(
                                        " ",
                                    ),
                                n = 0;
                            n < o.length;
                            n++
                        )
                            g(u, o[n]);
                        e._i.push([i, s, a]);
                    }),
                    (e.__SV = 1));
            })(document, window.posthog || []);
            posthog.init("phc_xAvL2Iq4tFmANRE7kzbKwaSqp1HJjN7x48s3vr0CMjs", {
                api_host: "https://us.i.posthog.com",
                person_profiles: "identified_only",
                session_recording: {
                    recordCrossOriginIframes: true,
                },
            });
        


            const container = document.getElementById('canvas-container');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            container.appendChild(renderer.domElement);

            const geometry = new THREE.BufferGeometry();
            const count = 300;
            const positions = new Float32Array(count * 3);
            
            for(let i = 0; i < count * 3; i++) {
                positions[i] = (Math.random() - 0.5) * 15;
            }
            
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            const material = new THREE.PointsMaterial({
                size: 0.03,
                color: 0x000000,
                transparent: true,
                opacity: 0.4
            });
            
            const particles = new THREE.Points(geometry, material);
            scene.add(particles);
            
            camera.position.z = 5;

            let mouseX = 0;
            let mouseY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX / window.innerWidth - 0.5;
                mouseY = e.clientY / window.innerHeight - 0.5;
            });

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });

            function animate() {
                requestAnimationFrame(animate);
                
                particles.rotation.x += 0.0005;
                particles.rotation.y += 0.0005;
                
                // Subtle camera movement
                camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
                camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;
                
                renderer.render(scene, camera);
            }
            animate();
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 opacity-40 pointer-events-none mix-blend-multiply" id="canvas-container"></div>
<div className="fixed inset-0 z-0 grid-bg pointer-events-none"></div>

<header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300">
<div className="max-w-7xl mx-auto">
<nav className="glass-panel rounded-full px-5 py-3 flex items-center justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-obsidian text-white rounded-md flex items-center justify-center">
<iconify-icon icon="solar:record-circle-linear" width="16"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-tight">Oravia</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-subtle">
<a className="hover:text-obsidian transition-colors" href="#">Product</a>
<a className="hover:text-obsidian transition-colors" href="#">Solutions</a>
<a className="hover:text-obsidian transition-colors" href="#">Research</a>
<a className="hover:text-obsidian transition-colors" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">Sign in</a>
<button className="bg-obsidian text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-black/80 transition-transform active:scale-95 shadow-sm flex items-center gap-1.5">
<span>Start Trial</span>
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</button>
</div>
</nav>
</div>
</header>

<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-32 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border shadow-sm mb-8 animate-fade-in">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] font-mono font-medium text-subtle uppercase tracking-wider">System v2.4 Available</span>
</div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-obsidian mb-6 leading-[0.9] max-w-4xl animate-slide-up">
                    Decision
                    <span className="text-subtle/50">Traceability.</span>
</h1>
<p className="text-subtle text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light animate-slide-up" style={{animationDelay: '100ms'}}>
                    The reasoning layer for the modern enterprise. Capture assumptions, map logic, and ensure every strategic decision is defensible.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up" style={{animationDelay: '200ms'}}>
<button className="bg-obsidian text-white text-sm font-medium px-8 py-3 rounded-lg shadow-lg shadow-obsidian/10 hover:shadow-xl hover:shadow-obsidian/20 transition-all hover:-translate-y-0.5 flex items-center gap-2 group">
<span>Request Demo</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-white text-obsidian border border-border text-sm font-medium px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                        Documentation
                    </button>
</div>

<div className="mt-20 w-full max-w-4xl border border-border rounded-xl bg-white shadow-sm overflow-hidden relative animate-fade-in" style={{animationDelay: '400ms'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-gray-50/50 to-transparent pointer-events-none"></div>
<div className="p-4 border-b border-border flex justify-between items-center bg-gray-50/30">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-border"></div>
<div className="w-3 h-3 rounded-full bg-border"></div>
</div>
<div className="text-[10px] font-mono text-subtle uppercase">Graph_View_01</div>
</div>
<div className="aspect-[16/8] relative flex items-center justify-center p-8">
<svg className="w-full h-full" viewbox="0 0 600 300">

<defs>
<marker id="arrow" markerheight="6" markerwidth="6" orient="auto" refx="5" refy="3">
<path d="M0,0 L6,3 L0,6" fill="#e5e5e5"></path>
</marker>
<filter id="glow">
<fegaussianblur result="coloredBlur" stddeviation="2"></fegaussianblur>
<femerge><femergenode in="coloredBlur"></femergenode><femergenode in="SourceGraphic"></femergenode></femerge>
</filter>
</defs>

<path d="M50,150 C100,150 120,80 200,80" fill="none" stroke="#f0f0f0" strokeWidth="1.5"></path>
<path d="M50,150 C100,150 120,220 200,220" fill="none" stroke="#f0f0f0" strokeWidth="1.5"></path>
<path d="M200,80 L350,150" fill="none" stroke="#f0f0f0" strokeWidth="1.5"></path>
<path d="M200,220 L350,150" fill="none" stroke="#f0f0f0" strokeWidth="1.5"></path>
<path d="M350,150 L500,150" fill="none" marker-end="url(#arrow)" stroke="#f0f0f0" strokeWidth="1.5"></path>

<circle fill="#111" r="3">
<animatemotion dur="4s" path="M50,150 C100,150 120,80 200,80 L350,150 L500,150" repeatcount="indefinite"></animatemotion>
</circle>

<g transform="translate(50,150)">
<circle fill="white" r="20" stroke="#eee" strokeWidth="1"></circle>
<text dy="4" fontFamily="Solar" fontSize="14" text-anchor="middle">⚡️</text>
<text fill="#999" fontFamily="Inter" fontSize="10" text-anchor="middle" y="35">Trigger</text>
</g>
<g transform="translate(200,80)">
<rect fill="white" height="30" rx="6" stroke="#eee" width="80" x="-40" y="-15"></rect>
<text fontFamily="Inter" fontSize="10" text-anchor="middle" y="4">Assumption</text>
</g>
<g transform="translate(200,220)">
<rect fill="white" height="30" rx="6" stroke="#eee" width="80" x="-40" y="-15"></rect>
<text fontFamily="Inter" fontSize="10" text-anchor="middle" y="4">Evidence</text>
</g>
<g transform="translate(350,150)">
<circle fill="white" r="24" stroke="#111" strokeWidth="1.5"></circle>
<path d="M-8,0 L-2,6 L8,-6" fill="none" stroke="#111" strokeWidth="2"></path>
<text fill="#111" fontFamily="Inter" fontSize="10" font-weight="600" text-anchor="middle" y="40">Logic</text>
</g>
<g transform="translate(500,150)">
<circle fill="#111" r="6"></circle>
<circle fill="none" opacity="0.2" r="20" stroke="#111" stroke-dasharray="2 2">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="20;30"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.5;0"></animate>
</circle>
<text fill="#111" fontFamily="Inter" fontSize="10" font-weight="600" text-anchor="middle" y="35">Outcome</text>
</g>
</svg>

<div className="absolute top-10 right-10 bg-white/90 backdrop-blur border border-border px-3 py-1.5 rounded-md shadow-sm">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
<span className="text-[10px] font-mono text-subtle">Confidence: 98.4%</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<p className="text-center text-[10px] font-mono text-subtle uppercase tracking-widest mb-8">Powering Strategy At</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="font-semibold text-lg tracking-tight">VERCEL</span>
<span className="font-semibold text-lg tracking-tight">stripe</span>
<span className="font-semibold text-lg tracking-tight">Linear</span>
<span className="font-semibold text-lg tracking-tight">OpenAI</span>
<span className="font-semibold text-lg tracking-tight">Raycast</span>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-obsidian mb-4">Structured reasoning.<br/><span className="text-subtle">Not just data points.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white border border-border rounded-xl p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
<div className="relative z-10">
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-obsidian">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Decision Lineage</h3>
<p className="text-sm text-subtle max-w-sm">Traverse the reasoning graph from outcome to assumption. Every node is traceable.</p>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full opacity-50 group-hover:opacity-100 transition-opacity">

<div className="w-full h-full" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: '0.1'}}></div>
</div>
</div>

<div className="md:col-span-1 bg-white border border-border rounded-xl p-8 group hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-obsidian">
<iconify-icon icon="solar:history-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Immutable Audit</h3>
<p className="text-sm text-subtle">Time-travel through your strategy. Inspect past states with zero ambiguity.</p>
</div>
<div className="mt-8 flex flex-col gap-2">
<div className="bg-gray-50 border border-border p-2 rounded text-[10px] font-mono text-subtle flex justify-between">
<span>v2.4.0</span>
<span>Current</span>
</div>
<div className="bg-white border border-border border-dashed p-2 rounded text-[10px] font-mono text-subtle/50 flex justify-between">
<span>v2.3.9</span>
<span>Restored</span>
</div>
</div>
</div>

<div className="md:col-span-3 bg-obsidian text-white rounded-xl p-8 md:p-12 relative overflow-hidden group">
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="max-w-lg">
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-6">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Automated Synthesis</h3>
<p className="text-white/60 leading-relaxed">
                                    Turn complex graph data into plain-language briefing documents automatically. Maintain a single source of truth without manual updates.
                                </p>
</div>

<div className="w-full max-w-sm bg-white rounded-lg shadow-2xl p-6 text-obsidian transform group-hover:scale-105 transition-transform duration-500">
<div className="flex gap-2 mb-4">
<div className="w-8 h-8 rounded-full bg-gray-100"></div>
<div className="space-y-1">
<div className="w-24 h-2 bg-gray-100 rounded"></div>
<div className="w-16 h-2 bg-gray-50 rounded"></div>
</div>
</div>
<div className="space-y-2">
<div className="w-full h-2 bg-gray-100 rounded"></div>
<div className="w-full h-2 bg-gray-100 rounded"></div>
<div className="w-2/3 h-2 bg-gray-100 rounded"></div>
</div>
<div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
<span className="text-[10px] text-gray-400">Generated 2m ago</span>
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
</div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="border-y border-border py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-8">
<iconify-icon className="text-subtle/50" icon="solar:quote-up-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-medium leading-tight">"Oravia transforms how we justify capital allocation. It’s no longer about who has the loudest voice, but who has the strongest lineage."</h3>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<div>
<div className="text-sm font-semibold">Marcus Alvarez</div>
<div className="text-xs text-subtle">Lead Analyst, Stripe</div>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-8 items-center border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-12">
<div>
<div className="text-3xl font-bold tracking-tight mb-1">5x</div>
<div className="text-[10px] text-subtle uppercase tracking-wide">Faster Consensus</div>
</div>
<div>
<div className="text-3xl font-bold tracking-tight mb-1">100%</div>
<div className="text-[10px] text-subtle uppercase tracking-wide">Audit Coverage</div>
</div>
<div>
<div className="text-3xl font-bold tracking-tight mb-1">Zero</div>
<div className="text-[10px] text-subtle uppercase tracking-wide">Ambiguity</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-32">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Transparent Pricing</h2>
<p className="text-subtle">Start tracing decisions today.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-border rounded-xl p-8 hover:border-black/20 transition-colors">
<h3 className="font-semibold mb-2">Individual</h3>
<div className="text-3xl font-bold tracking-tight mb-6">$49<span className="text-sm font-normal text-subtle">/mo</span></div>
<ul className="space-y-3 mb-8 text-sm text-subtle">
<li className="flex items-center gap-2"><iconify-icon className="text-obsidian" icon="solar:check-read-linear"></iconify-icon> Personal graph</li>
<li className="flex items-center gap-2"><iconify-icon className="text-obsidian" icon="solar:check-read-linear"></iconify-icon> 5 Projects</li>
<li className="flex items-center gap-2"><iconify-icon className="text-obsidian" icon="solar:check-read-linear"></iconify-icon> Standard export</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-border text-xs font-semibold hover:bg-gray-50 transition-colors">Start Trial</button>
</div>

<div className="bg-obsidian text-white rounded-xl p-8 shadow-xl transform md:-translate-y-4">
<div className="flex justify-between items-center mb-2">
<h3 className="font-semibold">Team</h3>
<span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white">Popular</span>
</div>
<div className="text-3xl font-bold tracking-tight mb-6">Custom</div>
<ul className="space-y-3 mb-8 text-sm text-white/70">
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> Shared history</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> Approval flows</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> Org continuity</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-white text-obsidian text-xs font-semibold hover:bg-gray-100 transition-colors">Contact Sales</button>
</div>

<div className="bg-white border border-border rounded-xl p-8 hover:border-black/20 transition-colors">
<h3 className="font-semibold mb-2">Enterprise</h3>
<div className="text-3xl font-bold tracking-tight mb-6">Custom</div>
<ul className="space-y-3 mb-8 text-sm text-subtle">
<li className="flex items-center gap-2"><iconify-icon className="text-obsidian" icon="solar:check-read-linear"></iconify-icon> Governance</li>
<li className="flex items-center gap-2"><iconify-icon className="text-obsidian" icon="solar:check-read-linear"></iconify-icon> Immutable logs</li>
<li className="flex items-center gap-2"><iconify-icon className="text-obsidian" icon="solar:check-read-linear"></iconify-icon> Retention</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-border text-xs font-semibold hover:bg-gray-50 transition-colors">Contact Sales</button>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-border pt-16 pb-32">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-obsidian text-white rounded-md flex items-center justify-center">
<iconify-icon icon="solar:record-circle-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold text-sm">Oravia</span>
</div>
<p className="text-xs text-subtle">Designed for the rigorous demands of modern enterprise strategy.</p>
</div>
<div className="flex gap-16">
<div className="space-y-4">
<h4 className="text-xs font-bold">Platform</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">Features</a></li>
<li><a className="hover:text-obsidian" href="#">Security</a></li>
<li><a className="hover:text-obsidian" href="#">Enterprise</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold">Company</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">About</a></li>
<li><a className="hover:text-obsidian" href="#">Careers</a></li>
<li><a className="hover:text-obsidian" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
</footer>

<a href="https://app.emergent.sh/?utm_source=emergent-badge" id="emergent-badge" style={{display: 'flex !important', alignItems: 'center !important', position: 'fixed !important', bottom: '20px', right: '20px', textDecoration: 'none', padding: '6px 10px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important', fontSize: '12px !important', zIndex: '9999 !important', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15) !important', borderRadius: '8px !important', backgroundColor: '#ffffff !important', border: '1px solid rgba(255, 255, 255, 0.25) !important'}} target="_blank">
<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
<img src="https://avatars.githubusercontent.com/in/1201222?s=120&amp;u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&amp;v=4" style={{width: '20px', height: '20px', marginRight: '8px'}} />
<p style={{color: '#000000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important', fontSize: '12px !important', alignItems: 'center', marginBottom: '0'}}>Made with Emergent</p>
</img></div>
</a>





    </>
  );
}
