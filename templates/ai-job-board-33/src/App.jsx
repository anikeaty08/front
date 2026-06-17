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



        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height, particles;

        function initCanvas() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2
                });
            }
        }

        function drawParticles() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            particles.forEach(p => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });
            
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    if (dx*dx + dy*dy < 20000) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(drawParticles);
        }
        window.addEventListener('resize', initCanvas);
        initCanvas();
        drawParticles();

        const allJobs = [
            { title: "Senior React Developer", company: "Vercel Corp", reqs: ["React", "TypeScript", "Next.js", "Tailwind"] },
            { title: "Machine Learning Engineer", company: "NeuroTech AI", reqs: ["Python", "TensorFlow", "PyTorch", "SQL", "Machine Learning"] },
            { title: "Full Stack Engineer", company: "TechFlow", reqs: ["Node.js", "React", "MongoDB", "AWS", "TypeScript"] },
            { title: "Data Scientist", company: "Stripe Data", reqs: ["Python", "SQL", "Machine Learning", "R"] },
            { title: "Backend Systems Eng.", company: "Linear App", reqs: ["Go", "Node.js", "PostgreSQL", "Docker", "AWS"] },
            { title: "AI Product Manager", company: "OpenDynamics", reqs: ["Product Strategy", "AI/ML", "Data Analysis", "Agile"] }
        ];

        function renderJobs(jobsArray) {
            const jobGrid = document.getElementById('job-grid');
            jobGrid.innerHTML = '';
            
            jobsArray.forEach((job, index) => {
                const matchColor = job.match >= 80 ? 'text-emerald-400' : (job.match >= 50 ? 'text-blue-400' : 'text-zinc-400');
                const borderClass = job.match >= 80 ? 'border-emerald-500/20' : 'border-white/5';
                
                const skillsHtml = job.skills.map(s => `<span class="text-[10px] px-2 py-0.5 rounded border border-white/10 bg-white/5 text-zinc-300">${s}</span>`).join('');
                const missingHtml = job.missing.map(s => `<span class="text-[10px] px-2 py-0.5 rounded border border-red-500/20 bg-red-500/10 text-red-400">Missing: ${s}</span>`).join('');
                
                const card = document.createElement('div');
                card.className = `tilt-card glass-panel p-6 rounded-2xl cursor-pointer group relative z-10 border ${borderClass}`;
                card.style.animationDelay = `${index * 100}ms`;
                card.classList.add('animate-slide-up');
                
                card.innerHTML = `
                    <div class="tilt-content">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-white text-base font-normal tracking-tight group-hover:text-blue-400 transition-colors">${job.title}</h3>
                                <p class="text-xs text-zinc-500">${job.company}</p>
                            </div>
                            <div class="flex items-center gap-1 bg-white/5 px-2 py-1 rounded text-xs border border-white/5">
                                <iconify-icon icon="solar:target-linear" class="${matchColor}"></iconify-icon>
                                <span class="${matchColor}">${job.match}%</span>
                            </div>
                        </div>
                        <p class="text-[10px] text-zinc-500 mb-2 uppercase tracking-widest">Matched Skills</p>
                        <div class="flex flex-wrap gap-1.5 mb-4">
                            ${skillsHtml || '<span class="text-[10px] text-zinc-600">None</span>'}
                        </div>
                        <p class="text-[10px] text-zinc-500 mb-2 uppercase tracking-widest">Skill Gap</p>
                        <div class="flex flex-wrap gap-1.5 mb-6">
                            ${missingHtml || '<span class="text-[10px] text-emerald-500/80">No missing skills!</span>'}
                        </div>
                        <div class="pt-4 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                            <span class="text-xs text-white">Apply Now</span>
                            <iconify-icon icon="solar:arrow-right-up-linear" class="text-white"></iconify-icon>
                        </div>
                    </div>
                `;
                jobGrid.appendChild(card);

                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -10; 
                    const rotateY = ((x - centerX) / centerX) * 10;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    card.style.boxShadow = `${-rotateY}px ${rotateX}px 20px rgba(0,0,0,0.5)`;
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                    card.style.boxShadow = 'none';
                });
            });
        }

        function handleFileUpload() {
            const idle = document.getElementById('upload-idle');
            const loading = document.getElementById('upload-loading');
            const bar = document.getElementById('progress-bar');
            const results = document.getElementById('ats-results');
            const jobsSection = document.getElementById('jobs-section');
            
            idle.style.opacity = '0';
            setTimeout(() => {
                loading.style.opacity = '1';
                loading.style.pointerEvents = 'auto';
                
                setTimeout(() => { bar.style.width = '100%'; }, 50);

                setTimeout(() => {
                    loading.style.opacity = '0';
                    loading.style.pointerEvents = 'none';
                    document.getElementById('drop-zone').classList.add('hidden');
                    document.getElementById('upload-success').classList.remove('hidden');
                    
                    results.style.opacity = '1';
                    results.style.pointerEvents = 'auto';
                    results.classList.add('border', 'border-white/20');
                    document.getElementById('status-badge').innerText = 'Analysis Complete';
                    document.getElementById('status-badge').className = 'text-xs px-2 py-1 rounded bg-emerald-500/20 text-emerald-400';
                    
                    // Animate ATS Score
                    const targetScore = 88;
                    const circumference = 263.89;
                    const scoreRing = document.getElementById('ats-score-ring');
                    const scoreText = document.getElementById('ats-score-text');
                    const statusText = document.getElementById('ats-status-text');
                    
                    let currentScore = 0;
                    statusText.innerText = "Scanning compatibility...";
                    
                    const scoreInterval = setInterval(() => {
                        currentScore++;
                        scoreText.innerText = currentScore + '%';
                        scoreRing.style.strokeDashoffset = circumference - (currentScore / 100) * circumference;
                        
                        if(currentScore >= targetScore) {
                            clearInterval(scoreInterval);
                            statusText.innerText = "Highly ATS Friendly";
                            statusText.className = "text-xs text-emerald-400";
                            scoreRing.style.stroke = "#34d399";
                        }
                    }, 20);

                    // Setup Skills
                    const extractedSkills = ["React", "TypeScript", "Node.js", "Tailwind", "AWS"];
                    
                    setTimeout(() => {
                        document.getElementById('score-message').innerText = 'Resume parsed successfully. Top job matches generated based on your extracted skills and high ATS score.';
                        document.getElementById('score-message').classList.add('text-emerald-400');
                        
                        document.getElementById('extracted-skills').innerHTML = 
                            extractedSkills.map(s => `<span class="text-xs px-3 py-1.5 rounded-md bg-white/10 text-white border border-white/10">${s}</span>`).join('');
                        
                        const processedJobs = allJobs.map(job => {
                            const matched = job.reqs.filter(req => extractedSkills.includes(req));
                            const missing = job.reqs.filter(req => !extractedSkills.includes(req));
                            const matchScore = Math.round((matched.length / job.reqs.length) * 100);
                            return { ...job, match: matchScore, skills: matched, missing: missing };
                        }).sort((a, b) => b.match - a.match);

                        jobsSection.style.opacity = '1';
                        jobsSection.style.pointerEvents = 'auto';
                        renderJobs(processedJobs);
                        
                    }, 500);

                    showToast("ATS Scan complete. Jobs matched successfully.");
                }, 2000);
            }, 300);
        }

        function resetUpload() {
            document.getElementById('upload-success').classList.add('hidden');
            document.getElementById('drop-zone').classList.remove('hidden');
            document.getElementById('progress-bar').style.width = '0';
            document.getElementById('upload-idle').style.opacity = '1';
            
            // Reset ATS score
            document.getElementById('ats-score-ring').style.strokeDashoffset = '263.89';
            document.getElementById('ats-score-ring').style.stroke = '#10b981';
            document.getElementById('ats-score-text').innerText = '0%';
            document.getElementById('ats-status-text').innerText = 'Awaiting scan';
            document.getElementById('ats-status-text').className = 'text-xs text-zinc-500';

            // Reset skills
            document.getElementById('extracted-skills').innerHTML = `<span class="text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-zinc-600">Awaiting document...</span>`;
            document.getElementById('score-message').innerText = 'Upload your resume to generate your ATS score and extract your skills to find job matches.';
            document.getElementById('score-message').classList.remove('text-emerald-400');
            
            document.getElementById('status-badge').innerText = 'Pending Upload';
            document.getElementById('status-badge').className = 'text-xs px-2 py-1 rounded bg-white/10 text-white';
            
            const jobsSection = document.getElementById('jobs-section');
            jobsSection.style.opacity = '0.3';
            jobsSection.style.pointerEvents = 'none';
            document.getElementById('job-grid').innerHTML = `
                <div class="glass-panel p-6 rounded-2xl border-white/5 text-center py-12 col-span-full">
                    <iconify-icon icon="solar:ghost-linear" class="text-4xl text-zinc-700 mb-4"></iconify-icon>
                    <p class="text-sm text-zinc-500">Awaiting resume data to generate matches.</p>
                </div>
            `;
        }

        let currentAuthMode = 'login';
        function toggleAuth(mode) {
            const modal = document.getElementById('auth-modal');
            modal.classList.toggle('hidden');
            if(mode && !modal.classList.contains('hidden')) {
                switchAuthTab(mode);
            }
        }
        function closeAuth() {
            document.getElementById('auth-modal').classList.add('hidden');
        }

        function switchAuthTab(mode) {
            currentAuthMode = mode;
            const tabLogin = document.getElementById('tab-login');
            const tabRegister = document.getElementById('tab-register');
            const regFields = document.getElementById('register-fields');
            const logExtras = document.getElementById('login-extras');
            const submitBtn = document.getElementById('auth-submit');
            const nameInput = document.getElementById('auth-name');

            if (mode === 'login') {
                tabLogin.className = "pb-3 text-sm text-white border-b-2 border-white px-4 transition-colors";
                tabRegister.className = "pb-3 text-sm text-zinc-500 px-4 transition-colors border-b-2 border-transparent hover:text-white";
                regFields.classList.add('hidden');
                logExtras.classList.remove('hidden');
                submitBtn.innerText = 'Sign In';
                nameInput.removeAttribute('required');
            } else {
                tabRegister.className = "pb-3 text-sm text-white border-b-2 border-white px-4 transition-colors";
                tabLogin.className = "pb-3 text-sm text-zinc-500 px-4 transition-colors border-b-2 border-transparent hover:text-white";
                regFields.classList.remove('hidden');
                logExtras.classList.add('hidden');
                submitBtn.innerText = 'Create Account';
                nameInput.setAttribute('required', 'true');
            }
        }

        function handleAuth(e) {
            e.preventDefault();
            closeAuth();
            showToast(currentAuthMode === 'login' ? "Logged in successfully." : "Account created successfully.");
        }

        function submitContact(e) {
            e.preventDefault();
            e.target.reset();
            showToast("Message securely routed to support.");
        }

        function submitReview(e) {
            e.preventDefault();
            e.target.reset();
            setRating(0);
            showToast("Review submitted to database.");
        }

        let currentRating = 0;
        function setRating(val) {
            currentRating = val;
            const stars = document.querySelectorAll('#star-rating iconify-icon');
            stars.forEach((star, index) => {
                if (index < val) {
                    star.setAttribute('icon', 'solar:star-bold');
                    star.classList.replace('text-zinc-500', 'text-yellow-500');
                } else {
                    star.setAttribute('icon', 'solar:star-linear');
                    star.classList.replace('text-yellow-500', 'text-zinc-500');
                }
            });
        }

        const starContainer = document.getElementById('star-rating');
        starContainer.addEventListener('mouseover', (e) => {
            if(e.target.tagName.toLowerCase() === 'iconify-icon') {
                const hoverVal = parseInt(e.target.getAttribute('data-value'));
                const stars = document.querySelectorAll('#star-rating iconify-icon');
                stars.forEach((star, index) => {
                    if(index < hoverVal) star.setAttribute('icon', 'solar:star-bold');
                    else star.setAttribute('icon', 'solar:star-linear');
                });
            }
        });
        starContainer.addEventListener('mouseleave', () => setRating(currentRating));

        function showToast(message) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').innerText = message;
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';
            setTimeout(() => {
                toast.style.transform = 'translateY(20px)';
                toast.style.opacity = '0';
            }, 3000);
        }

        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('bg-zinc-950/80');
                nav.classList.remove('bg-transparent');
            } else {
                nav.classList.remove('bg-zinc-950/80');
                nav.classList.add('bg-transparent');
            }
        });
    
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
      
<canvas className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40" id="bg-canvas"></canvas>
<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg tracking-tight flex items-center gap-2" href="#">
<iconify-icon icon="solar:code-scan-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
                AI JOBS PRO
            </a>
<div className="hidden md:flex space-x-8 text-sm">
<a className="hover:text-white transition-colors" href="#home">Home</a>
<a className="hover:text-white transition-colors" href="#dashboard">Dashboard</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm hover:text-white transition-colors" onclick="toggleAuth('login')">Log in</button>
<button className="text-sm bg-white text-black px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors" onclick="toggleAuth('register')">Sign up</button>
</div>
</div>
</nav>
<div className="relative z-10">
<section className="min-h-screen flex items-center justify-center pt-20 px-6" id="home">
<div className="max-w-4xl mx-auto text-center animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    NLP Resume Parsing Engine Active
                </div>
<h1 className="text-5xl md:text-7xl text-white tracking-tight leading-tight mb-6">
                    Accelerate your career <br className="hidden md:block"/> with intelligent matching.
                </h1>
<p className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl mx-auto">
                    Upload your resume. Let our AI score your ATS compatibility, extract your skills, and instantly match you with top-tier tech companies.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-white text-black px-6 py-3 rounded-full text-sm hover:bg-zinc-200 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2" onclick="document.getElementById('dashboard').scrollIntoView({behavior: 'smooth'})">
                        Upload Resume <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>
<section className="py-24 px-6 border-t border-white/5 bg-zinc-900/20 min-h-screen flex flex-col justify-center" id="dashboard">
<div className="max-w-7xl mx-auto w-full">
<div className="text-center mb-16">
<h2 className="text-3xl text-white tracking-tight mb-4">Your Dashboard</h2>
<p className="text-sm text-zinc-500 max-w-xl mx-auto">Upload your document to generate an ATS score, extract core skills, and unlock personalized job matches.</p>
</div>
<div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
<div className="lg:col-span-4">
<div className="border border-dashed border-white/20 rounded-2xl p-12 text-center glass-panel hover:border-white/40 hover:bg-white/5 transition-all cursor-pointer relative overflow-hidden group" id="drop-zone">
<input accept=".pdf,.docx" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id="file-upload" onchange="handleFileUpload()" type="file"/>
<div className="flex flex-col items-center gap-4 transition-opacity duration-300" id="upload-idle">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:document-add-linear" width="32"></iconify-icon>
</div>
<div>
<p className="text-base text-white mb-1">Upload resume</p>
<p className="text-xs text-zinc-500">PDF or DOCX up to 5MB</p>
</div>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900/90 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="upload-loading">
<iconify-icon className="text-white animate-pulse mb-4" icon="solar:cpu-linear" width="32"></iconify-icon>
<p className="text-sm text-white mb-4 tracking-tight">Scanning &amp; Parsing...</p>
<div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white w-0 transition-all duration-[2000ms] ease-out" id="progress-bar"></div>
</div>
</div>
</div>
<div className="hidden glass-panel rounded-2xl p-8 border border-white/20" id="upload-success">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white text-base tracking-tight">Resume.pdf</h3>
<p className="text-xs text-emerald-500">Successfully parsed</p>
</div>
</div>
<button className="w-full text-xs border border-white/10 py-2 rounded-lg hover:bg-white/5 transition-colors" onclick="resetUpload()">Upload New Version</button>
</div>
</div>
<div className="lg:col-span-8 glass-panel rounded-2xl p-8 opacity-50 pointer-events-none transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center" id="ats-results">
<div className="flex items-center justify-between mb-8">
<h3 className="text-xl text-white tracking-tight">Resume Analysis Report</h3>
<div className="text-xs px-2 py-1 rounded bg-white/10 text-white" id="status-badge">Pending Upload</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel border border-white/5 p-6 rounded-xl flex flex-col items-center text-center justify-center relative">
<h4 className="text-sm text-white tracking-tight mb-6 w-full text-left">ATS Friendly Score</h4>
<div className="relative w-28 h-28 mb-4 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="transparent" r="42" stroke="rgba(255,255,255,0.05)" strokeWidth="6"></circle>
<circle className="transition-all duration-75 ease-out" cx="50" cy="50" fill="transparent" id="ats-score-ring" r="42" stroke="#10b981" stroke-dasharray="263.89" stroke-dashoffset="263.89" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="absolute flex flex-col items-center justify-center">
<span className="text-3xl text-white tracking-tight" id="ats-score-text">0%</span>
</div>
</div>
<p className="text-xs text-zinc-500" id="ats-status-text">Awaiting scan</p>
</div>

<div className="glass-panel border border-white/5 p-6 rounded-xl flex flex-col">
<h4 className="text-sm text-white tracking-tight mb-4">Extracted Profile Skills</h4>
<div className="flex flex-wrap gap-2 mb-auto" id="extracted-skills">
<span className="text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-zinc-600">Awaiting document...</span>
</div>
</div>
</div>
<p className="text-xs text-zinc-500 mt-6" id="score-message">Upload your resume to generate your ATS score and extract your skills to find job matches.</p>
</div>
</div>
<div className="opacity-30 pointer-events-none transition-all duration-700" id="jobs-section">
<div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6 pt-8 border-t border-white/5">
<div>
<h2 className="text-2xl text-white tracking-tight mb-2">Matched Job Board</h2>
<p className="text-sm text-zinc-500">Opportunities ranked by skill intersection and ATS compatibility.</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="job-grid">
<div className="glass-panel p-6 rounded-2xl border-white/5 text-center py-12 col-span-full">
<iconify-icon className="text-4xl text-zinc-700 mb-4" icon="solar:ghost-linear"></iconify-icon>
<p className="text-sm text-zinc-500">Awaiting resume data to generate matches.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 border-t border-white/5" id="reviews">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl text-white tracking-tight mb-12 text-center">Community Reviews</h2>
<div className="grid md:grid-cols-3 gap-8 mb-16">
<div className="glass-panel p-6 rounded-2xl border-white/5">
<div className="flex text-yellow-500 mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 mb-4 line-clamp-3">"The Python NLP extraction is incredibly accurate. It extracted all my nested skills and instantly matched me with exactly the Senior roles I was looking for."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white">JD</div>
<div className="text-xs">
<p className="text-white">John Doe</p>
<p className="text-zinc-500">Frontend Engineer</p>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl border-white/5">
<div className="flex text-yellow-500 mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 mb-4 line-clamp-3">"Love the ATS tracker on the dashboard. It showed me my exact compatibility score before I started applying to companies."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white">AS</div>
<div className="text-xs">
<p className="text-white">Alice Smith</p>
<p className="text-zinc-500">Data Scientist</p>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl border-white/20">
<h3 className="text-white text-base tracking-tight mb-4">Leave a Platform Review</h3>
<form className="space-y-4" onsubmit="submitReview(event)">
<div className="flex gap-1" id="star-rating">
<iconify-icon className="text-xl text-zinc-500 cursor-pointer hover:text-yellow-500 transition-colors" data-value="1" icon="solar:star-linear" onclick="setRating(1)"></iconify-icon>
<iconify-icon className="text-xl text-zinc-500 cursor-pointer hover:text-yellow-500 transition-colors" data-value="2" icon="solar:star-linear" onclick="setRating(2)"></iconify-icon>
<iconify-icon className="text-xl text-zinc-500 cursor-pointer hover:text-yellow-500 transition-colors" data-value="3" icon="solar:star-linear" onclick="setRating(3)"></iconify-icon>
<iconify-icon className="text-xl text-zinc-500 cursor-pointer hover:text-yellow-500 transition-colors" data-value="4" icon="solar:star-linear" onclick="setRating(4)"></iconify-icon>
<iconify-icon className="text-xl text-zinc-500 cursor-pointer hover:text-yellow-500 transition-colors" data-value="5" icon="solar:star-linear" onclick="setRating(5)"></iconify-icon>
</div>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors h-24 resize-none" placeholder="Your feedback..." required=""></textarea>
<button className="w-full bg-white text-black py-2 rounded-lg text-sm hover:bg-zinc-200 transition-colors" type="submit">Submit Review</button>
</form>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 border-t border-white/5 bg-zinc-900/20" id="contact">
<div className="max-w-xl mx-auto text-center">
<h2 className="text-3xl text-white tracking-tight mb-4">Contact Support</h2>
<p className="text-sm text-zinc-500 mb-8">Need help with your account or have questions about our API access?</p>
<form className="space-y-4 text-left" onsubmit="submitContact(event)">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs text-zinc-500 mb-1 ml-1">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 transition-colors" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1 ml-1">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 transition-colors" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1 ml-1">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors h-32 resize-none" required=""></textarea>
</div>
<button className="w-full border border-white/20 bg-white/5 text-white py-2.5 rounded-lg text-sm hover:bg-white hover:text-black transition-all duration-300" type="submit">
                        Send Message
                    </button>
</form>
</div>
</section>
<footer className="py-12 px-6 border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white text-base tracking-tight">
<iconify-icon icon="solar:code-scan-linear" width="20"></iconify-icon>
                    AI JOBS PRO
                </div>
<p className="text-xs text-zinc-500">© 2023 AI Jobs Pro Platform. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white hover:scale-110 transition-all" href="#">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white hover:scale-110 transition-all" href="#">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white hover:scale-110 transition-all" href="mailto:hello@example.com">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>
</div>
<div className="fixed inset-0 z-[100] hidden" id="auth-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeAuth()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6">
<div className="glass-panel p-8 rounded-2xl border-white/10 shadow-2xl relative overflow-hidden">
<button className="absolute top-4 right-4 text-zinc-500 hover:text-white z-10" onclick="closeAuth()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="flex border-b border-white/10 mb-8 relative">
<button className="pb-3 text-sm text-white border-b-2 border-white px-4 transition-colors" id="tab-login" onclick="switchAuthTab('login')" type="button">Log In</button>
<button className="pb-3 text-sm text-zinc-500 px-4 transition-colors border-b-2 border-transparent" id="tab-register" onclick="switchAuthTab('register')" type="button">Register</button>
</div>
<form className="space-y-4" onsubmit="handleAuth(event)">
<div className="hidden space-y-4" id="register-fields">
<div>
<label className="block text-xs text-zinc-500 mb-1 ml-1">Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 transition-colors" id="auth-name" type="text"/>
</div>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1 ml-1">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 transition-colors" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1 ml-1">Password</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 transition-colors" required="" type="password"/>
</div>
<div className="flex items-center justify-between text-xs mt-2" id="login-extras">
<label className="flex items-center gap-2 cursor-pointer">
<input className="appearance-none w-4 h-4 border border-white/20 rounded-sm bg-white/5 checked:bg-white checked:border-white transition-colors relative after:content-['✓'] after:absolute after:text-black after:left-[2px] after:-top-[1px] after:text-[10px] after:opacity-0 checked:after:opacity-100" type="checkbox"/>
<span className="text-zinc-400">Remember me</span>
</label>
<a className="text-zinc-400 hover:text-white" href="#">Forgot password?</a>
</div>
<button className="w-full bg-white text-black py-2.5 rounded-lg text-sm hover:bg-zinc-200 transition-colors mt-6" id="auth-submit" type="submit">
                        Sign In
                    </button>
</form>
</div>
</div>
</div>
<div className="fixed bottom-6 right-6 glass-panel border-white/10 px-4 py-3 rounded-lg text-sm text-white flex items-center gap-3 translate-y-20 opacity-0 transition-all duration-300 z-50" id="toast">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span id="toast-message">Success!</span>
</div>


    </>
  );
}
