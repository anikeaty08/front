import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        const container = document.getElementById('canvas-container');
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const count = 700;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for(let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 20; // Spread
            colors[i] = Math.random();
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // Modern, subtle particle material
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.05,
            color: 0x999999, // Grey particles for white theme
            transparent: true,
            opacity: 0.6,
            sizeAttenuation: true
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Add subtle lines connecting some particles for structure
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0xe5e7eb, // Very light grey lines
            transparent: true,
            opacity: 0.3
        });
        
        // Create a simple wireframe grid as floor
        const gridHelper = new THREE.GridHelper(30, 30, 0xe5e7eb, 0xf3f4f6);
        gridHelper.position.y = -2;
        gridHelper.rotation.x = 0.1;
        scene.add(gridHelper);

        camera.position.z = 5;
        camera.position.y = 0.5;

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
        });

        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;

            // Gentle rotation
            particlesMesh.rotation.y += 0.001;
            particlesMesh.rotation.x += 0.001;

            // Wave effect on particles
            const positions = particlesMesh.geometry.attributes.position.array;
            for(let i = 0; i < count; i++) {
                const i3 = i * 3;
                // Add subtle wave motion
                positions[i3 + 1] += Math.sin(elapsedTime + positions[i3]) * 0.002;
            }
            particlesMesh.geometry.attributes.position.needsUpdate = true;
            
            // Smooth camera movement based on mouse
            camera.position.x += (mouseX * 0.005 - camera.position.x) * 0.05;
            camera.position.y += (-mouseY * 0.005 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        }

        animate();

        // Handle Resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="canvas-container"><canvas height="784" style={{display: 'block', width: '1120px', height: '654px'}} width="1344"></canvas></div>

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white text-xs font-semibold tracking-tighter">
                    UOL
                </div>
<span className="text-zinc-900 font-semibold tracking-tight">AI Admissions</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#features">Features</a>
<a className="hover:text-zinc-900 transition-colors" href="#comparison">Why AI?</a>
<a className="hover:text-zinc-900 transition-colors" href="#resources">Resources</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:flex text-sm text-zinc-500 hover:text-zinc-900 font-medium transition-colors">Log in</button>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-all shadow-lg shadow-zinc-900/10 flex items-center gap-2">
                    Start Application
                    <iconify-icon className="text-zinc-400" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden mesh-gradient">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm text-zinc-600 text-xs font-medium mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Admissions Open for Fall 2024
                </div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-zinc-900 mb-8 leading-[0.95] max-w-4xl">
                    Admissions,<br/>
<span className="text-zinc-400">Autopilot.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                    A fully automated, stateful AI agent that manages your entire journey to the University of Lahore. From eligibility to enrollment.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto">
<button className="w-full md:w-auto bg-zinc-900 hover:bg-zinc-800 text-white h-12 px-8 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-xl shadow-zinc-200 hover:shadow-2xl hover:scale-[1.02]">
                        Launch AI Agent
                        <iconify-icon className="text-zinc-400" icon="solar:stars-minimalistic-linear"></iconify-icon>
</button>
<button className="w-full md:w-auto bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-900 h-12 px-8 rounded-full font-medium transition-all flex items-center justify-center gap-2 hover:bg-zinc-50">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Watch Demo
                    </button>
</div>
</div>
</div>
</section>

<section className="-mt-10 pb-24">
<div className="max-w-5xl mx-auto px-6">
<div className="glass-card rounded-2xl p-2 md:p-4 border border-zinc-200 shadow-2xl shadow-zinc-200/50">
<div className="bg-zinc-50/50 rounded-xl border border-zinc-100 overflow-hidden relative min-h-[400px] flex flex-col md:flex-row">

<div className="w-full md:w-64 border-r border-zinc-200 bg-white p-4 hidden md:flex flex-col gap-1">
<div className="text-xs font-semibold text-zinc-400 mb-3 px-2">CHATS</div>
<div className="flex items-center gap-3 px-3 py-2 bg-zinc-100 rounded-lg text-sm font-medium text-zinc-900">
<iconify-icon icon="solar:chat-round-line-linear"></iconify-icon>
                            Eligibility Check
                        </div>
<div className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-50 rounded-lg text-sm text-zinc-500 cursor-pointer">
<iconify-icon icon="solar:document-add-linear"></iconify-icon>
                            Fee Structure
                        </div>
<div className="mt-auto pt-4 border-t border-zinc-100">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">JD</div>
<div className="text-xs">
<div className="font-medium text-zinc-900">John Doe</div>
<div className="text-zinc-500">Applicant</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-white">
<div className="p-4 border-b border-zinc-100 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm font-medium text-zinc-900">UOL Admissions AI</span>
</div>
<button className="text-zinc-400 hover:text-zinc-900"><iconify-icon icon="solar:settings-linear"></iconify-icon></button>
</div>
<div className="flex-1 p-6 space-y-6 overflow-y-auto">

<div className="flex gap-4 max-w-2xl">
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex-shrink-0 flex items-center justify-center text-white mt-1">
<iconify-icon icon="solar:stars-minimalistic-bold" width="16"></iconify-icon>
</div>
<div className="space-y-2">
<div className="text-sm text-zinc-500 font-medium">UOL Assistant</div>
<div className="text-zinc-800 text-sm leading-relaxed bg-zinc-50 p-4 rounded-2xl rounded-tl-none border border-zinc-100">
                                        Hello John! I've analyzed your FSC transcript. <br/><br/>
                                        Based on your 82% score, you are eligible for the  program. You also qualify for the  on tuition fees. Would you like me to generate the admission form?
                                    </div>
<div className="flex gap-2">
<button className="text-xs border border-zinc-200 bg-white px-3 py-1.5 rounded-full text-zinc-600 hover:border-zinc-400 transition-colors">View Fee Structure</button>
<button className="text-xs border border-zinc-200 bg-white px-3 py-1.5 rounded-full text-zinc-600 hover:border-zinc-400 transition-colors">Compare Programs</button>
</div>
</div>
</div>

<div className="flex flex-row-reverse max-w-2xl ml-auto gap-x-4 gap-y-4">
<div className="w-8 h-8 rounded-lg bg-zinc-200 flex-shrink-0 flex items-center justify-center text-zinc-500 mt-1">JD</div>
<div className="space-y-2 text-right">
<div className="leading-relaxed text-sm text-gray-50 bg-zinc-900 rounded-2xl px-4 py-4">
                                        Yes, please generate the form and apply the scholarship.
                                    </div>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-100">
<div className="relative">
<input className="w-full bg-zinc-50 border-none rounded-xl py-3 pl-4 pr-12 text-sm text-zinc-900 focus:ring-1 focus:ring-zinc-200 outline-none" placeholder="Reply to UOL Assistant..." type="text"/>
<button className="absolute right-2 top-2 p-1 text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:arrow-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-4xl font-semibold text-zinc-900 tracking-tight mb-4">Intelligence built in.</h2>
<p className="text-zinc-500 text-lg">Replacing bureaucracy with code.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-xl hover:shadow-zinc-100 bg-white">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:chat-square-code-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Contextual Memory</h3>
<p className="text-sm text-zinc-500 leading-relaxed">The agent remembers your grades, documents, and preferences throughout the conversation. No need to repeat yourself.</p>
</div>

<div className="group p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-xl hover:shadow-zinc-100 bg-white">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:scanner-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">OCR Verification</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Upload a photo of your result card. Our vision model extracts marks, validates authenticity, and calculates aggregate.</p>
</div>

<div className="group p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-xl hover:shadow-zinc-100 bg-white">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Auto-Filling</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Forms are boring. The AI pre-fills the official UOL admission application PDF with verified data instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-100 bg-zinc-50/50" id="comparison">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight">Why switch to AI?</h2>
</div>
<div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-100 bg-zinc-50/50">
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">Metric</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">Traditional Process</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-emerald-600">AI Agent</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-zinc-50">
<td className="py-5 px-6 font-medium text-zinc-900">Processing Time</td>
<td className="py-5 px-6 text-zinc-500">3-5 Business Days</td>
<td className="py-5 px-6 text-zinc-900 font-semibold flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:bolt-linear"></iconify-icon> Instant
                            </td>
</tr>
<tr className="border-b border-zinc-50">
<td className="py-5 px-6 font-medium text-zinc-900">Availability</td>
<td className="py-5 px-6 text-zinc-500">9:00 AM - 5:00 PM</td>
<td className="py-5 px-6 text-zinc-900 font-semibold flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:clock-circle-linear"></iconify-icon> 24/7/365
                            </td>
</tr>
<tr>
<td className="py-5 px-6 font-medium text-zinc-900">Error Rate</td>
<td className="py-5 px-6 text-zinc-500">High (Manual Entry)</td>
<td className="py-5 px-6 text-zinc-900 font-semibold flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear"></iconify-icon> Zero
                            </td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="resources">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-4xl font-semibold text-zinc-900 tracking-tight mb-6">Deep knowledge of UOL regulations.</h2>
<p className="text-zinc-500 text-lg mb-8 leading-relaxed">
                        Trained on thousands of pages of the University of Lahore's prospectus, fee structures, and HEC guidelines. It knows the answers before you ask.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-zinc-700">
<div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 text-xs">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
                            Specific Departmental Criteria
                        </li>
<li className="flex items-center gap-3 text-zinc-700">
<div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 text-xs">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
                            Dynamic Scholarship Calculation
                        </li>
<li className="flex items-center gap-3 text-zinc-700">
<div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 text-xs">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
                            Campus Life &amp; Facilities Info
                        </li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 rounded-3xl blur-3xl -z-10"></div>
<div className="glass-card rounded-2xl p-8 border border-zinc-100">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-semibold text-zinc-400 tracking-wider">LIVE DATA</span>
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center py-3 border-b border-zinc-50">
<span className="text-sm font-medium text-zinc-600">BS CS Merit (Fall '24)</span>
<span className="text-sm font-bold text-zinc-900">Min 50%</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-zinc-50">
<span className="text-sm font-medium text-zinc-600">Credit Hour Fee</span>
<span className="text-sm font-bold text-zinc-900">PKR 8,500</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-zinc-50">
<span className="text-sm font-medium text-zinc-600">Scholarship (80%+)</span>
<span className="text-sm font-bold text-emerald-600">50% Waiver</span>
</div>
<div className="flex justify-between items-center py-3">
<span className="text-sm font-medium text-zinc-600">Admission Fee</span>
<span className="text-sm font-bold text-zinc-900">PKR 20,000</span>
</div>
</div>
<button className="w-full mt-6 bg-zinc-50 text-zinc-900 text-sm font-medium py-3 rounded-xl border border-zinc-200 hover:bg-zinc-100 transition-colors">
                            Download Prospectus
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-200 bg-zinc-50/50 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white text-[10px] font-bold">UOL</div>
<span className="text-zinc-600 text-sm font-semibold">AI Admissions</span>
</div>
<div className="text-xs text-zinc-500 font-medium">
                © 2024 University of Lahore. Automated Admission System Project.
            </div>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:earth-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
