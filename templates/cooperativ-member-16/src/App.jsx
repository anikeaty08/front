import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Mock Database based on provided image spreadsheet
        const membersDatabase = [
            { sn: "1", surname: "babawale", fullName: "Babawale Gbenga Olatunji" },
            { sn: "2", surname: "gbenro", fullName: "Gbenro Abimbola Abiodun" },
            { sn: "3", surname: "adesina", fullName: "Adesina Lateefat Bola" },
            { sn: "4", surname: "adesina", fullName: "Adesina Kamoru Aleru" },
            { sn: "5", surname: "hammed", fullName: "Hammed Balikis" },
            { sn: "6", surname: "aileru", fullName: "Aileru Mukaila" },
            { sn: "7", surname: "gbenro", fullName: "Gbenro Oluwadamilare" },
            { sn: "22", surname: "oyebanji", fullName: "Oyebanji Elijah" },
            { sn: "101", surname: "adebisi", fullName: "Adebisi Babatunde Rasheed" },
            { sn: "102", surname: "babawale", fullName: "Babawale Esther Aderonke" }
        ];

        function switchView(viewId) {
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
            });
            document.getElementById(viewId).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function handleLogin(event) {
            event.preventDefault();
            
            const snInput = document.getElementById('sn-number').value.trim();
            const surnameInput = document.getElementById('surname').value.trim().toLowerCase();
            const errorDiv = document.getElementById('login-error');

            // Find member matching both S/N and Surname
            const validMember = membersDatabase.find(m => m.sn === snInput && m.surname === surnameInput);

            if (validMember) {
                errorDiv.classList.add('hidden');
                
                // Populate Dashboard with matched user data
                document.getElementById('dash-user-name').textContent = validMember.fullName;
                document.getElementById('dash-user-sn').textContent = `S/N: ${validMember.sn}`;
                document.getElementById('dash-user-initials').textContent = validMember.surname.substring(0, 2).toUpperCase();
                document.getElementById('welcome-message').textContent = `Welcome back, ${validMember.fullName.split(' ')[0]}`;
                
                switchView('member');
                
                // Clear form for next time
                document.getElementById('sn-number').value = '';
                document.getElementById('surname').value = '';
                document.getElementById('password').value = 'password123';
            } else {
                errorDiv.classList.remove('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2 cursor-pointer" onclick="switchView('home')">
<div className="w-8 h-8 bg-teal-800 rounded-lg flex items-center justify-center text-white font-medium text-sm tracking-tighter">
                        OO
                    </div>
<span className="font-medium tracking-tight text-base text-slate-900">ORE-OFE OLUWA CICS</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<button className="text-base text-slate-500 hover:text-teal-800 transition-colors" onclick="switchView('home')">Home</button>
<button className="text-base text-slate-500 hover:text-teal-800 transition-colors" onclick="switchView('auth')">Portal</button>
<button className="text-base text-slate-500 hover:text-teal-800 transition-colors" onclick="switchView('admin')">Admin</button>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:inline-flex items-center justify-center px-4 py-2 text-base text-white bg-teal-800 rounded-md hover:bg-teal-900 transition-all shadow-sm" onclick="switchView('auth')">
                        Member Login
                    </button>
<button className="md:hidden text-slate-500 hover:text-teal-800">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<main className="flex-grow flex flex-col relative w-full">

<section className="view-section active flex-grow" id="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
<div className="text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-sm text-teal-700 mb-8">
<span className="w-2 h-2 rounded-full bg-teal-500"></span>
                        Secure Member Portal Active
                    </div>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                        Professional Cooperative Management for Oke-Fia.
                    </h1>
<p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
                        Securely access your contribution records, manage your profile, and stay updated with the latest cooperative reports through our modern platform.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 text-base text-white bg-teal-800 rounded-lg hover:bg-teal-900 transition-all shadow-sm flex items-center justify-center gap-2" onclick="switchView('auth')">
                            Access Portal
                            <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-3 text-base text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all shadow-sm">
                            Learn More
                        </button>
</div>
</div>
<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 bg-white border border-slate-200/80 rounded-xl shadow-sm hover:border-teal-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-4">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Secure Authentication</h3>
<p className="text-base text-slate-500">Log in securely using your registered membership S/N and surname based on the official directory.</p>
</div>
<div className="p-6 bg-white border border-slate-200/80 rounded-xl shadow-sm hover:border-teal-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-4">
<iconify-icon className="text-xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Track Contributions</h3>
<p className="text-base text-slate-500">View real-time updates of your contribution history and current account balance instantly.</p>
</div>
<div className="p-6 bg-white border border-slate-200/80 rounded-xl shadow-sm hover:border-teal-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-4">
<iconify-icon className="text-xl" icon="solar:document-add-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Dynamic Records</h3>
<p className="text-base text-slate-500">Administrators can securely upload datasets, automatically generating fresh directories and reports.</p>
</div>
</div>
</div>
</section>

<section className="view-section flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id="auth">
<div className="max-w-md w-full space-y-8 bg-white p-8 border border-slate-200/80 rounded-2xl shadow-sm">
<div>
<h2 className="mt-2 text-2xl font-medium tracking-tight text-slate-900">Sign in to your account</h2>
<p className="mt-2 text-base text-slate-500">Enter your official membership details to access your portal.</p>
<div className="mt-4 p-3 bg-teal-50 border border-teal-100 rounded-lg text-sm text-teal-800">
<span className="font-medium">Test Credentials (from records):</span><br/>
                        S/N: 1 | Surname: Babawale<br/>
                        S/N: 5 | Surname: Hammed<br/>
                        S/N: 22 | Surname: Oyebanji
                    </div>
</div>
<div className="hidden p-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-600 mb-4" id="login-error">
                    Invalid S/N or Surname. Please verify against the official records.
                </div>
<form className="mt-8 space-y-6" onsubmit="handleLogin(event)">
<div className="space-y-4">
<div>
<label className="block text-base text-slate-700 mb-1 font-medium" htmlFor="sn-number">Membership S/N <span className="text-slate-400 font-normal">(Serial Number)</span></label>
<input className="appearance-none block w-full px-3 py-2 border border-slate-200 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-800/10 focus:border-teal-600 text-base transition-shadow" id="sn-number" name="sn-number" placeholder="e.g. 1, 5, 22" required="" type="text"/>
</div>
<div>
<label className="block text-base text-slate-700 mb-1 font-medium" htmlFor="surname">Registered Surname</label>
<input className="appearance-none block w-full px-3 py-2 border border-slate-200 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-800/10 focus:border-teal-600 text-base transition-shadow" id="surname" name="surname" placeholder="Enter your surname" required="" type="text"/>
</div>
<div>
<label className="block text-base text-slate-700 mb-1 font-medium" htmlFor="password">Password</label>
<input className="appearance-none block w-full px-3 py-2 border border-slate-200 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-800/10 focus:border-teal-600 text-base transition-shadow" id="password" name="password" placeholder="••••••••" required="" type="password" value="password123"/>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<input className="h-4 w-4 text-teal-800 focus:ring-teal-800/20 border-slate-300 rounded cursor-pointer accent-teal-800" id="remember-me" name="remember-me" type="checkbox"/>
<label className="ml-2 block text-base text-slate-600" htmlFor="remember-me">Remember me</label>
</div>
<div className="text-base">
<a className="text-teal-800 hover:text-teal-900 font-medium" href="#">Forgot password?</a>
</div>
</div>
<div>
<button className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-base text-white bg-teal-800 hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-800 transition-colors" type="submit">
                            Secure Login
                        </button>
</div>
</form>
<div className="mt-6 relative">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-slate-200"></div>
</div>
<div className="relative flex justify-center text-base">
<span className="px-2 bg-white text-slate-500">First time logging in?</span>
</div>
</div>
<div className="mt-6">
<button className="w-full flex justify-center py-2.5 px-4 border border-slate-200 rounded-lg shadow-sm text-base text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200 transition-colors">
                        Activate Account
                    </button>
</div>
</div>
</section>

<section className="view-section flex-grow" id="member">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">

<aside className="w-full md:w-64 flex-shrink-0">
<div className="bg-white border border-slate-200/80 rounded-xl p-4 sticky top-24 shadow-sm">
<div className="flex items-center gap-3 mb-6 p-2">
<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-800 font-medium border border-teal-100" id="dash-user-initials">
                                --
                            </div>
<div className="overflow-hidden">
<p className="text-base font-medium tracking-tight text-slate-900 truncate" id="dash-user-name">Member Name</p>
<p className="text-sm text-slate-500 mt-0.5" id="dash-user-sn">S/N: --</p>
</div>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-base bg-teal-50 text-teal-900 font-medium rounded-lg" href="#">
<iconify-icon className="text-xl text-teal-700" icon="solar:pie-chart-2-linear"></iconify-icon>
                                Overview
                            </a>
<a className="flex items-center gap-3 px-3 py-2 text-base text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:wallet-linear"></iconify-icon>
                                Contributions
                            </a>
<a className="flex items-center gap-3 px-3 py-2 text-base text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
                                Profile Details
                            </a>
<a className="flex items-center gap-3 px-3 py-2 text-base text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
                                Statements
                            </a>
</nav>
<div className="mt-8 pt-4 border-t border-slate-100">
<button className="flex items-center gap-3 px-3 py-2 text-base text-red-600 hover:bg-red-50 rounded-lg transition-colors w-full" onclick="switchView('home')">
<iconify-icon className="text-xl" icon="solar:logout-2-linear"></iconify-icon>
                                Sign Out
                            </button>
</div>
</div>
</aside>

<div className="flex-grow space-y-6">
<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900" id="welcome-message">Welcome back</h2>
<p className="text-base text-slate-500 mt-1">Here is your financial overview for ORE-OFE OLUWA CICS.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="bg-white p-5 border border-slate-200/80 rounded-xl shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 text-teal-900">
<iconify-icon className="text-[4rem]" icon="solar:wallet-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-1">Total Contributed</p>
<p className="text-3xl font-medium tracking-tight text-slate-900">₦0.00</p>
<div className="mt-2 flex items-center gap-1 text-sm text-slate-400">
<iconify-icon className="text-base" icon="solar:minus-circle-linear"></iconify-icon>
                                Pending initial deposit
                            </div>
</div>
<div className="bg-white p-5 border border-slate-200/80 rounded-xl shadow-sm">
<p className="text-sm text-slate-500 mb-1">Available Balance</p>
<p className="text-3xl font-medium tracking-tight text-slate-900">₦0.00</p>
<div className="mt-2 text-sm text-slate-500">
                                As of Mar 15, 2026
                            </div>
</div>
<div className="bg-white p-5 border border-slate-200/80 rounded-xl shadow-sm">
<p className="text-sm text-slate-500 mb-1">Record Status</p>
<p className="text-3xl font-medium tracking-tight text-slate-900">Active</p>
<div className="mt-2 flex items-center gap-1 text-sm text-slate-500">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                                Registered Member
                            </div>
</div>
</div>

<div className="bg-white border border-slate-200/80 rounded-xl shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
<h3 className="text-base font-medium tracking-tight text-slate-900">Recent Ledger Entries</h3>
<button className="text-sm text-teal-700 hover:text-teal-900 font-medium flex items-center gap-1">
                                View Full Paper
                                <iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50/50">
<th className="px-5 py-3 text-sm font-medium text-slate-500 border-b border-slate-100">Date</th>
<th className="px-5 py-3 text-sm font-medium text-slate-500 border-b border-slate-100">Meeting Info</th>
<th className="px-5 py-3 text-sm font-medium text-slate-500 border-b border-slate-100">Category</th>
<th className="px-5 py-3 text-sm font-medium text-slate-500 border-b border-slate-100 text-right">Amount</th>
</tr>
</thead>
<tbody className="text-base divide-y divide-slate-100">
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-5 py-3 text-slate-600" colspan="4">
<div className="flex flex-col items-center justify-center py-8 text-slate-400">
<iconify-icon className="text-3xl mb-2 opacity-50" icon="solar:document-text-linear"></iconify-icon>
                                                No recent entries found for this meeting paper.
                                            </div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>

<section className="view-section flex-grow" id="admin">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">

<aside className="w-full md:w-64 flex-shrink-0">
<div className="bg-slate-950 text-slate-300 rounded-xl p-4 sticky top-24 shadow-sm">
<div className="flex items-center gap-3 mb-6 p-2">
<div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 border border-teal-500/20">
<iconify-icon className="text-base" icon="solar:shield-minimalistic-linear"></iconify-icon>
</div>
<div>
<p className="text-base font-medium tracking-tight text-white">Admin Portal</p>
<p className="text-sm text-slate-400 mt-0.5">System Management</p>
</div>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-base bg-teal-900/40 text-teal-50 rounded-lg border border-teal-800/50 font-medium" href="#">
<iconify-icon className="text-xl text-teal-400" icon="solar:server-square-linear"></iconify-icon>
                                Data Hub
                            </a>
<a className="flex items-center gap-3 px-3 py-2 text-base hover:bg-white/5 hover:text-white rounded-lg transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
                                Directory
                            </a>
<a className="flex items-center gap-3 px-3 py-2 text-base hover:bg-white/5 hover:text-white rounded-lg transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:document-add-linear"></iconify-icon>
                                Adding Papers
                            </a>
<a className="flex items-center gap-3 px-3 py-2 text-base hover:bg-white/5 hover:text-white rounded-lg transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
                                System Settings
                            </a>
</nav>
</div>
</aside>

<div className="flex-grow space-y-6">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Data Management Hub</h2>
<p className="text-base text-slate-500 mt-1">Upload records to automatically generate secure access.</p>
</div>
<button className="px-4 py-2 text-base text-white bg-teal-800 rounded-lg shadow-sm hover:bg-teal-900 transition-colors flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
                            New Upload
                        </button>
</div>

<div className="bg-white border border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-teal-50/30 hover:border-teal-300 transition-all cursor-pointer">
<div className="w-12 h-12 mx-auto rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-4 border border-teal-100">
<iconify-icon className="text-2xl" icon="solar:cloud-upload-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 tracking-tight">Upload Spreadsheet Data</h3>
<p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">Upload the monthly 'Adding Paper' containing member lists and contributions to sync the database.</p>
<div className="mt-4 flex justify-center gap-2">
<span className="px-2 py-1 text-xs text-slate-500 bg-slate-100 rounded border border-slate-200">.XLSX</span>
<span className="px-2 py-1 text-xs text-slate-500 bg-slate-100 rounded border border-slate-200">.CSV</span>
</div>
</div>

<div className="bg-white border border-slate-200/80 rounded-xl shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-slate-100">
<h3 className="text-base font-medium tracking-tight text-slate-900">Active Processed Papers</h3>
</div>
<div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="border border-slate-200 rounded-lg p-4 flex justify-between items-start group hover:border-teal-200 hover:shadow-sm transition-all bg-slate-50/50 hover:bg-white">
<div>
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-xl text-teal-600" icon="solar:folder-with-files-linear"></iconify-icon>
<h4 className="text-base font-medium text-slate-900">MARCH 15TH MEETING</h4>
</div>
<p className="text-sm text-slate-500">Source: adding_paper_mar15.xlsx</p>
<div className="mt-3 flex items-center gap-3 text-sm">
<span className="flex items-center gap-1 text-slate-500">
<iconify-icon className="text-base" icon="solar:users-group-rounded-linear"></iconify-icon> 
                                            139 Records
                                        </span>
<span className="text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-100 text-xs font-medium">Active</span>
</div>
</div>
<button className="text-slate-400 hover:text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-xl" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200/80 py-8 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2 text-slate-500">
<div className="w-6 h-6 bg-slate-100 border border-slate-200 rounded flex items-center justify-center text-slate-600 font-medium text-xs tracking-tighter">
                    OO
                </div>
<p className="text-sm">© 2026 ORE-OFE OLUWA CICS Oke-Fia. All rights reserved.</p>
</div>
<div className="flex items-center gap-4 text-sm text-slate-500">
<span className="flex items-center gap-1 font-medium">
<iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon> 
                    +234 802 327 5101
                </span>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Support</a>
</div>
</div>
</footer>


    </>
  );
}
