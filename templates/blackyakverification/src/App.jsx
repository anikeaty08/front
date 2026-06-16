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
},
colors: {
yak: {
gold: '#D4AF37', // Metallic gold
gold_dim: '#8a701e',
black: '#0a0a0a',
panel: '#121212',
border: '#262626'
}
}
}
}
}



        // State Mockup
        const sections = ['home', 'verify', 'admin-login', 'admin-dashboard'];
        
        // Mock Database
        let dbCodes = [
            { code: "1234567890", isUsed: false, createdAt: new Date().toISOString(), usedAt: null },
            { code: "9876543210", isUsed: true, createdAt: new Date(Date.now() - 86400000).toISOString(), usedAt: new Date().toISOString() },
            { code: "1122334455", isUsed: false, createdAt: new Date().toISOString(), usedAt: null },
            { code: "5544332211", isUsed: true, createdAt: new Date(Date.now() - 172800000).toISOString(), usedAt: new Date(Date.now() - 100000).toISOString() },
            { code: "9988776655", isUsed: false, createdAt: new Date().toISOString(), usedAt: null },
        ];

        // Navigation
        function showSection(id) {
            sections.forEach(sec => {
                const el = document.getElementById(sec);
                if(el) {
                    if (sec === id) {
                        el.classList.remove('hidden');
                        // Small animation trigger
                        el.animate([
                            { opacity: 0, transform: 'translateY(10px)' },
                            { opacity: 1, transform: 'translateY(0)' }
                        ], { duration: 400, easing: 'ease-out' });
                    } else {
                        el.classList.add('hidden');
                    }
                }
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Verification Logic
        function handleVerification(e) {
            e.preventDefault();
            const btn = document.getElementById('verifyBtn');
            const input = document.getElementById('serialInput').value;
            const resultArea = document.getElementById('resultArea');
            
            // Loading State
            const originalBtnText = btn.innerHTML;
            btn.innerHTML = `<span class="iconify animate-spin" data-icon="lucide:loader-2"></span> Verifying...`;
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = originalBtnText;
                btn.disabled = false;
                resultArea.classList.remove('hidden');

                // Logic Mockup
                // "1234567890" is GENUINE UNUSED
                // "9876543210" is GENUINE USED
                // Anything else is INVALID

                let html = '';
                
                // Find in dummy DB
                const foundCode = dbCodes.find(c => c.code === input);

                if (foundCode && !foundCode.isUsed) {
                    // Success Case
                    html = `
                        <div class="flex flex-col items-center text-center animate-pulse-once">
                            <div class="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 border border-green-500/20">
                                <span class="iconify text-green-500" data-icon="lucide:check" data-width="32" style="stroke-width: 2;"></span>
                            </div>
                            <h3 class="text-xl font-semibold text-white mb-1">Authentic Product</h3>
                            <p class="text-sm text-neutral-400 mb-4">Your product is GENUINE. Thank you for choosing BLACKYAK.</p>
                            <div class="text-xs text-neutral-600 bg-neutral-900 px-3 py-1 rounded border border-neutral-800">
                                Serial: ${input}
                            </div>
                        </div>
                    `;
                    // Mark as used in UI mock
                    foundCode.isUsed = true; 
                    foundCode.usedAt = new Date().toISOString();
                } else if (foundCode && foundCode.isUsed) {
                    // Already Used Case
                    html = `
                        <div class="flex flex-col items-center text-center">
                            <div class="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 border border-orange-500/20">
                                <span class="iconify text-orange-500" data-icon="lucide:alert-triangle" data-width="32" style="stroke-width: 2;"></span>
                            </div>
                            <h3 class="text-xl font-semibold text-white mb-1">Code Already Used</h3>
                            <p class="text-sm text-neutral-400 mb-4">This serial code has already been verified on <br> ${new Date(foundCode.usedAt).toLocaleDateString()}.</p>
                            <p class="text-xs text-red-400">If this wasn't you, please contact support.</p>
                        </div>
                    `;
                } else {
                    // Invalid Case
                    html = `
                        <div class="flex flex-col items-center text-center">
                            <div class="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4 border border-red-500/20">
                                <span class="iconify text-red-500" data-icon="lucide:x" data-width="32" style="stroke-width: 2;"></span>
                            </div>
                            <h3 class="text-xl font-semibold text-white mb-1">Invalid Serial Number</h3>
                            <p class="text-sm text-neutral-400 mb-4">This code does not exist in our database.</p>
                            <div class="w-full bg-red-950/30 border border-red-900/50 p-3 rounded-lg">
                                <p class="text-xs text-red-200">Warning: You may have a counterfeit product.</p>
                            </div>
                        </div>
                    `;
                }
                resultArea.innerHTML = html;
            }, 1500);
        }

        // Admin Logic
        function handleAdminLogin(e) {
            e.preventDefault();
            // Just simulate success
            showSection('admin-dashboard');
            refreshAdminData();
        }

        function logout() {
            showSection('home');
        }

        function refreshAdminData() {
            const tbody = document.getElementById('codesTableBody');
            tbody.innerHTML = '';

            // Calculate stats
            const total = dbCodes.length;
            const used = dbCodes.filter(c => c.isUsed).length;
            const unused = total - used;

            document.getElementById('stat-total').innerText = total.toLocaleString();
            document.getElementById('stat-used').innerText = used.toLocaleString();
            document.getElementById('stat-unused').innerText = unused.toLocaleString();

            // Populate Table (Last 5)
            dbCodes.slice(0, 8).forEach(item => {
                const statusBadge = item.isUsed 
                    ? `<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-red-500/10 text-red-400 border border-red-500/20">USED</span>`
                    : `<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-500/10 text-green-400 border border-green-500/20">ACTIVE</span>`;
                
                const row = `
                    <tr class="hover:bg-neutral-900/40 transition-colors">
                        <td class="px-6 py-4 font-mono text-xs text-neutral-400">${item.code}</td>
                        <td class="px-6 py-4">${statusBadge}</td>
                        <td class="px-6 py-4 text-xs text-neutral-500">${new Date(item.createdAt).toLocaleDateString()}</td>
                        <td class="px-6 py-4 text-xs text-neutral-500">${item.usedAt ? new Date(item.usedAt).toLocaleDateString() : '-'}</td>
                    </tr>
                `;
                tbody.innerHTML += row;
            });
        }

        function generateCodes(e) {
            e.preventDefault();
            const count = parseInt(document.getElementById('genCount').value) || 100;
            
            // Simulation
            for(let i=0; i<5; i++) { // Only adding 5 to array to keep DOM light for demo
                const randomCode = Math.floor(1000000000 + Math.random() * 9000000000).toString();
                dbCodes.unshift({
                    code: randomCode,
                    isUsed: false,
                    createdAt: new Date().toISOString(),
                    usedAt: null
                });
            }
            
            alert(`${count} codes generated successfully and added to database.`);
            refreshAdminData();
        }

        // FIXED: Reliable CSV Download using Blob API
        function downloadCSV() {
            // 1. Prepare data
            const headers = ["Serial Code", "Status", "Created At", "Used At"];
            const rows = dbCodes.map(c => [
                c.code,
                c.isUsed ? 'USED' : 'ACTIVE',
                c.createdAt,
                c.usedAt || ''
            ]);

            // 2. Convert to CSV string
            const csvContent = [
                headers.join(','), 
                ...rows.map(e => e.join(','))
            ].join('\n');

            // 3. Create Blob
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            
            // 4. Create Download Link
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", "blackyak_serial_codes.csv");
            link.style.visibility = 'hidden';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer" onclick="showSection('home')">
<span className="iconify text-yak-gold" data-icon="lucide:shield-check" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="font-semibold tracking-tight text-lg text-white">BLACK<span className="text-yak-gold">YAK</span></span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<button className="hover:text-white transition-colors" onclick="showSection('home')">Home</button>
<button className="hover:text-white transition-colors" onclick="showSection('verify')">Verify Authenticity</button>
</div>

<button className="text-xs font-medium bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2" onclick="showSection('admin-login')">
<span className="iconify" data-icon="lucide:lock" style={{strokeWidth: '1.5'}}></span>
                Admin
            </button>
</div>
</nav>

<main className="flex-grow pt-16">

<section className="min-h-[90vh] flex flex-col items-center justify-center px-6 relative overflow-hidden" id="home">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yak-gold/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-yak-gold mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yak-gold opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yak-gold"></span>
</span>
                    Official Verification System
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-tight">
                    Verify Your Supplement. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-yak-gold via-yellow-200 to-yak-gold">Stay Genuine.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-xl mx-auto font-light leading-relaxed">
                    Ensure your BLACKYAK products are authentic. Our secure verification system protects your health and performance.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="group relative px-8 py-3.5 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-all w-full sm:w-auto flex items-center justify-center gap-2" onclick="showSection('verify')">
                        Verify Your Product
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="px-8 py-3.5 bg-neutral-900 border border-neutral-800 text-white font-medium rounded-full hover:bg-neutral-800 transition-all w-full sm:w-auto">
                        Learn More
                    </button>
</div>
</div>

<div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-neutral-500 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:shield" data-width="20" style={{strokeWidth: '1.5'}}></span> Secure Database</div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span> Instant Verify</div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:lock" data-width="20" style={{strokeWidth: '1.5'}}></span> Encrypted</div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:zap" data-width="20" style={{strokeWidth: '1.5'}}></span> Real-time</div>
</div>
</section>

<section className="hidden min-h-[85vh] flex flex-col items-center justify-center px-4" id="verify">
<div className="w-full max-w-md">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Check Serial Code</h2>
<p className="text-sm text-neutral-400">Enter the 10-digit code found on your product packaging.</p>
</div>
<div className="glass-panel p-8 rounded-2xl shadow-2xl relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_4px,6px_100%]"></div>
<form className="relative z-10 space-y-6" onsubmit="handleVerification(event)">
<div className="space-y-2">
<label className="text-xs font-medium text-yak-gold uppercase tracking-wider">Serial Number</label>
<input className="w-full bg-neutral-950/50 border border-neutral-800 text-white text-center text-2xl tracking-[0.5em] rounded-xl py-4 focus:outline-none focus:border-yak-gold focus:ring-1 focus:ring-yak-gold/50 transition-all font-mono placeholder:text-neutral-800" id="serialInput" maxlength="10" placeholder="XXXXXXXXXX" type="text"/>
</div>
<button className="w-full bg-yak-gold text-black font-semibold rounded-xl py-3.5 hover:bg-yellow-500 transition-all flex items-center justify-center gap-2" id="verifyBtn" type="submit">
<span>Verify Code</span>
<span className="iconify" data-icon="lucide:scan-line" style={{strokeWidth: '1.5'}}></span>
</button>
</form>

<div className="hidden mt-6 pt-6 border-t border-white/10 relative z-10 transition-all" id="resultArea">

</div>
</div>
</div>
</section>

<section className="hidden min-h-[85vh] flex flex-col items-center justify-center px-4" id="admin-login">
<div className="w-full max-w-sm glass-panel p-8 rounded-2xl border border-neutral-800">
<div className="flex justify-center mb-6">
<div className="p-3 bg-neutral-900 rounded-full border border-neutral-800">
<span className="iconify text-yak-gold" data-icon="lucide:layout-dashboard" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<h2 className="text-xl font-semibold text-center text-white mb-6 tracking-tight">Admin Portal</h2>
<form className="space-y-4" onsubmit="handleAdminLogin(event)">
<div>
<label className="block text-xs text-neutral-500 mb-1.5 ml-1">Email</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-yak-gold/50 transition-colors" type="email" value="admin@blackyak.com"/>
</div>
<div>
<label className="block text-xs text-neutral-500 mb-1.5 ml-1">Password</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-yak-gold/50 transition-colors" type="password" value="password"/>
</div>
<button className="w-full bg-white text-black font-medium rounded-lg py-2.5 hover:bg-neutral-200 transition-colors mt-2 text-sm" type="submit">
                        Access Dashboard
                    </button>
</form>
</div>
</section>

<section className="hidden min-h-screen px-4 pb-12" id="admin-dashboard">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 mb-6 border-b border-neutral-800">
<div>
<h2 className="text-2xl font-semibold text-white tracking-tight">Dashboard</h2>
<p className="text-sm text-neutral-500">Manage codes and verify activity.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-lg text-xs font-medium hover:text-white hover:border-neutral-700 flex items-center gap-2 cursor-pointer transition-colors" onclick="downloadCSV()">
<span className="iconify" data-icon="lucide:download" style={{strokeWidth: '1.5'}}></span>
                            Export CSV
                        </button>
<button className="px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-xs font-medium hover:bg-red-500/20 transition-colors" onclick="logout()">
                            Logout
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

<div className="glass-panel p-5 rounded-xl border border-neutral-800">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Total Generated</p>
<h3 className="text-3xl font-semibold text-white mt-1" id="stat-total">15,420</h3>
</div>
<span className="iconify text-neutral-600" data-icon="lucide:database" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>

<div className="glass-panel p-5 rounded-xl border border-neutral-800">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Authentic/Used</p>
<h3 className="text-3xl font-semibold text-yak-gold mt-1" id="stat-used">8,942</h3>
</div>
<span className="iconify text-yak-gold/50" data-icon="lucide:check-check" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>

<div className="glass-panel p-5 rounded-xl border border-neutral-800">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Unused Codes</p>
<h3 className="text-3xl font-semibold text-white mt-1" id="stat-unused">6,478</h3>
</div>
<span className="iconify text-neutral-600" data-icon="lucide:box" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-1">
<div className="glass-panel p-6 rounded-xl border border-neutral-800 sticky top-24">
<h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
<span className="iconify" data-icon="lucide:plus-circle" style={{strokeWidth: '1.5'}}></span>
                                Generate Codes
                            </h3>
<form className="space-y-4" onsubmit="generateCodes(event)">
<div>
<label className="block text-xs text-neutral-500 mb-2">Quantity (100-5000)</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-yak-gold" id="genCount" max="5000" min="100" placeholder="1000" type="number"/>
</div>
<button className="w-full bg-white text-black font-medium rounded-lg py-2.5 hover:bg-neutral-200 transition-colors text-sm flex justify-center items-center gap-2" type="submit">
                                    Generate Batch
                                </button>
</form>
<div className="mt-6 p-4 bg-yak-gold/5 rounded-lg border border-yak-gold/10">
<p className="text-xs text-yak-gold leading-relaxed">
<span className="font-bold">Note:</span> Codes are generated cryptographically with 10 digits. They are stored instantly in the database with a 'created' timestamp.
                                </p>
</div>
</div>
</div>

<div className="lg:col-span-2">
<div className="glass-panel rounded-xl border border-neutral-800 overflow-hidden">
<div className="px-6 py-4 border-b border-neutral-800 flex justify-between items-center">
<h3 className="text-sm font-medium text-white">Recent Codes</h3>
<span className="text-xs text-neutral-500">Live Updates</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-neutral-900/50 text-xs text-neutral-500 uppercase tracking-wider">
<th className="px-6 py-3 font-medium">Serial Code</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium">Created At</th>
<th className="px-6 py-3 font-medium">Used At</th>
</tr>
</thead>
<tbody className="text-sm text-neutral-300 divide-y divide-neutral-800" id="codesTableBody">

</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-900 mt-auto bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">© 2024 BLACKYAK Supplements. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-xs text-neutral-600 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-neutral-600 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-neutral-600 hover:text-white transition-colors" href="#">Support</a>
</div>
</div>
</footer>



    </>
  );
}
