import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Mock Database initialized with the default visible UI data
        const donorsDB = [
            { name: "Rafiqul I.", phone: "017XX-XXXXXX", district: "dhaka", blood: "O+", lastDonated: "5 mos ago", location: "Dhanmondi, Dhaka", status: "Available" },
            { name: "Ahmed S.", phone: "018XX-XXXXXX", district: "dhaka", blood: "O+", lastDonated: "8 mos ago", location: "Mirpur 10, Dhaka", status: "Available" },
            { name: "Tariq M.", phone: "019XX-XXXXXX", district: "dhaka", blood: "O+", lastDonated: "11 mos ago", location: "Gulshan, Dhaka", status: "Recently Active" },
            { name: "Ayesha K.", phone: "015XX-XXXXXX", district: "sylhet", blood: "AB-", lastDonated: "2 mos ago", location: "Zindabazar, Sylhet", status: "Available" },
            { name: "Kamrul H.", phone: "016XX-XXXXXX", district: "chattogram", blood: "A+", lastDonated: "1 mo ago", location: "Agrabad, Chattogram", status: "Available" }
        ];

        const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

        // -- Search Logic --
        const searchBtn = document.getElementById('searchBtn');
        const searchDistrict = document.getElementById('searchDistrict');
        const searchBlood = document.getElementById('searchBloodGroup');
        const resultsList = document.getElementById('resultsList');
        const searchHeaderContent = document.getElementById('searchHeaderContent');
        
        searchBtn.addEventListener('click', () => {
            const districtVal = searchDistrict.value;
            const bloodVal = searchBlood.value;

            if(!districtVal || !bloodVal) {
                alert("Please select both a district and a blood group to search.");
                return;
            }

            const filtered = donorsDB.filter(d => d.district === districtVal && d.blood === bloodVal);
            
            searchHeaderContent.innerHTML = `
                <h3 class="text-sm font-medium text-stone-900">
                    Search Results for <span class="text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded ml-1">${bloodVal}</span> in <span class="text-stone-900 bg-stone-50 border border-stone-200/60 px-1.5 py-0.5 rounded ml-1">${capitalize(districtVal)}</span>
                </h3>
                <span class="text-xs text-stone-500 font-medium bg-stone-50 px-2 py-1 rounded border border-stone-100">${filtered.length} Available</span>
            `;

            if(filtered.length === 0) {
                resultsList.innerHTML = `
                    <div class="text-center py-8">
                        <div class="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 mx-auto mb-3">
                            <iconify-icon icon="solar:ghost-smile-linear" width="24"></iconify-icon>
                        </div>
                        <p class="text-sm font-medium text-stone-900 mb-1">No donors found</p>
                        <p class="text-xs text-stone-500">We couldn't find any donors matching this criteria right now.</p>
                    </div>
                `;
            } else {
                let listHTML = '';
                filtered.forEach(donor => {
                    let statusBadge = donor.status === 'Available' 
                        ? `<span class="text-[10px] bg-emerald-50 text-emerald-600 border border-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-1"><div class="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Available</span>`
                        : `<span class="text-[10px] bg-stone-100 text-stone-600 border border-stone-200 px-1.5 py-0.5 rounded flex items-center gap-1"><div class="w-1.5 h-1.5 rounded-full bg-stone-400"></div> ${donor.status}</span>`;

                    listHTML += `
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl hover:bg-stone-50/80 border border-transparent hover:border-stone-200/60 transition-colors gap-4">
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 rounded-full bg-orange-50 border border-orange-100/50 flex items-center justify-center text-orange-500 shrink-0">
                                <iconify-icon icon="solar:user-rounded-linear" width="18"></iconify-icon>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-stone-900 flex items-center gap-2">
                                    ${donor.name} ${statusBadge}
                                </p>
                                <p class="text-xs text-stone-500 mt-1 flex items-center gap-3">
                                    <span class="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> ${donor.location}</span>
                                    <span class="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Last donated: ${donor.lastDonated}</span>
                                </p>
                            </div>
                        </div>
                        <button class="w-full sm:w-auto text-xs font-medium bg-white border border-stone-200 text-stone-700 px-4 py-2 rounded-lg hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-sm flex items-center justify-center gap-2" onclick="alert('Calling ${donor.phone}')">
                            <iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
                            Contact Donor
                        </button>
                    </div>`;
                });
                resultsList.innerHTML = listHTML;
            }
        });

        // -- Registration Logic --
        const regBtn = document.getElementById('regBtn');
        const regForm = document.getElementById('regForm');

        regBtn.addEventListener('click', () => {
            const name = document.getElementById('regName').value.trim();
            const phone = document.getElementById('regPhone').value.trim();
            const district = document.getElementById('regDistrict').value;
            const blood = document.getElementById('regBlood').value;
            const date = document.getElementById('regDate').value;
            const terms = document.getElementById('terms').checked;

            if(!name || !phone || !district || !blood) {
                alert("Please fill out your Name, Phone, District, and Blood Group.");
                return;
            }

            if(!terms) {
                alert("You must agree to share your contact information.");
                return;
            }

            // Push to local JS Array database
            donorsDB.unshift({
                name: name,
                phone: phone,
                district: district,
                blood: blood,
                lastDonated: date ? "Recently" : "New Donor",
                location: capitalize(district) + " (New)",
                status: "Available"
            });

            // UI Feedback state change
            const originalText = regBtn.innerHTML;
            regBtn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon> Successfully Registered';
            regBtn.classList.replace('bg-stone-900', 'bg-emerald-600');
            regBtn.classList.replace('hover:bg-stone-800', 'hover:bg-emerald-700');

            regForm.reset();

            // Revert button after 3 seconds
            setTimeout(() => {
                regBtn.innerHTML = originalText;
                regBtn.classList.replace('bg-emerald-600', 'bg-stone-900');
                regBtn.classList.replace('hover:bg-emerald-700', 'hover:bg-stone-800');
            }, 3000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 border-b border-stone-200/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-lg bg-gradient-to-b from-orange-500 to-red-600 flex items-center justify-center text-white shadow-sm shadow-orange-500/20">
<iconify-icon icon="solar:drop-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-stone-900">LIFELINK</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-500">
<a className="text-stone-900 transition-colors" href="#search">Search Donors</a>
<a className="hover:text-stone-900 transition-colors" href="#register">Register</a>
<a className="hover:text-stone-900 transition-colors flex items-center gap-1" href="#admin">
                    Dashboard <span className="bg-orange-100 text-orange-600 text-[10px] px-1.5 py-0.5 rounded-sm ml-1">Admin</span>
</a>
</div>
<div className="flex items-center gap-5">
<button className="hidden md:block text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Sign In</button>
<button className="hover:bg-stone-800 transition-all flex gap-2 text-xs font-medium text-white bg-stone-900 rounded-lg pt-2 pr-4 pb-2 pl-4 shadow-sm items-center">
<iconify-icon icon="solar:user-circle-linear" width="16"></iconify-icon>
                    Donor Portal
                </button>
</div>
</div>
</nav>

<main className="flex-1 overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-50/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<section className="sm:px-6 lg:px-8 lg:pt-32 lg:pb-24 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-20 pl-4" id="search">
<div className="text-center max-w-2xl mx-auto mb-14">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-stone-600 text-xs font-medium mb-6 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Connecting Bangladesh Network
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-stone-900 mb-6 leading-[1.1]">
                    Find critical blood <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">matches instantly.</span>
</h1>
<p className="text-base md:text-lg text-stone-500 font-normal leading-relaxed max-w-xl mx-auto">
                    The centralized database for blood inventory and donor management across all districts of Bangladesh.
                </p>
</div>

<div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-stone-200/60 p-2 md:p-3 relative z-10 backdrop-blur-xl mb-6">
<form className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-2 md:gap-3">

<div className="relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400 group-focus-within:text-orange-500 transition-colors">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<select className="w-full pl-11 pr-10 py-3.5 bg-stone-50/50 hover:bg-stone-50 border border-transparent hover:border-stone-200 focus:bg-white rounded-xl text-sm font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer" id="searchDistrict">
<option disabled="" value="">Select District</option>
<option selected="" value="dhaka">Dhaka</option>
<option value="chattogram">Chattogram</option>
<option value="sylhet">Sylhet</option>
<option value="rajshahi">Rajshahi</option>
<option value="khulna">Khulna</option>
<option value="barishal">Barishal</option>
<option value="rangpur">Rangpur</option>
<option value="mymensingh">Mymensingh</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div className="relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400 group-focus-within:text-orange-500 transition-colors">
<iconify-icon icon="solar:medical-kit-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<select className="w-full pl-11 pr-10 py-3.5 bg-stone-50/50 hover:bg-stone-50 border border-transparent hover:border-stone-200 focus:bg-white rounded-xl text-sm font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer" id="searchBloodGroup">
<option disabled="" value="">Blood Group</option>
<option value="A+">A Positive (A+)</option>
<option value="A-">A Negative (A-)</option>
<option value="B+">B Positive (B+)</option>
<option value="B-">B Negative (B-)</option>
<option selected="" value="O+">O Positive (O+)</option>
<option value="O-">O Negative (O-)</option>
<option value="AB+">AB Positive (AB+)</option>
<option value="AB-">AB Negative (AB-)</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<button className="md:w-32 hover:bg-stone-800 transition-all flex gap-2 text-sm font-medium text-white bg-stone-900 w-full rounded-xl pt-3.5 pb-3.5 shadow-sm items-center justify-center" id="searchBtn" type="button">
                        Search
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>

<div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-stone-200/80 p-5 relative z-10" id="searchResultsArea">
<div className="flex items-center justify-between mb-4 pb-4 border-b border-stone-100" id="searchHeaderContent">
<h3 className="text-sm font-medium text-stone-900">
                        Search Results for <span className="text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded ml-1">O+</span> in <span className="text-stone-900 bg-stone-50 border border-stone-200/60 px-1.5 py-0.5 rounded ml-1">Dhaka</span>
</h3>
<span className="text-xs text-stone-500 font-medium bg-stone-50 px-2 py-1 rounded border border-stone-100">3 Available</span>
</div>
<div className="space-y-2" id="resultsList">

<div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl hover:bg-stone-50/80 border border-transparent hover:border-stone-200/60 transition-colors gap-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100/50 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="solar:user-rounded-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-900 flex items-center gap-2">
                                    Rafiqul I. 
                                    <span className="text-[10px] bg-emerald-50 text-emerald-600 border border-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Available
                                    </span>
</p>
<p className="text-xs text-stone-500 mt-1 flex items-center gap-3">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Dhanmondi, Dhaka</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Last donated: 5 mos ago</span>
</p>
</div>
</div>
<button className="w-full sm:w-auto text-xs font-medium bg-white border border-stone-200 text-stone-700 px-4 py-2 rounded-lg hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-sm flex items-center justify-center gap-2">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
                            Contact Donor
                        </button>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl hover:bg-stone-50/80 border border-transparent hover:border-stone-200/60 transition-colors gap-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100/50 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="solar:user-rounded-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-900 flex items-center gap-2">
                                    Ahmed S.
                                    <span className="text-[10px] bg-emerald-50 text-emerald-600 border border-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Available
                                    </span>
</p>
<p className="text-xs text-stone-500 mt-1 flex items-center gap-3">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Mirpur 10, Dhaka</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Last donated: 8 mos ago</span>
</p>
</div>
</div>
<button className="w-full sm:w-auto text-xs font-medium bg-white border border-stone-200 text-stone-700 px-4 py-2 rounded-lg hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-sm flex items-center justify-center gap-2">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
                            Contact Donor
                        </button>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl hover:bg-stone-50/80 border border-transparent hover:border-stone-200/60 transition-colors gap-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100/50 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="solar:user-rounded-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-900 flex items-center gap-2">
                                    Tariq M.
                                    <span className="text-[10px] bg-stone-100 text-stone-600 border border-stone-200 px-1.5 py-0.5 rounded flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-stone-400"></div> Recently Active
                                    </span>
</p>
<p className="text-xs text-stone-500 mt-1 flex items-center gap-3">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Gulshan, Dhaka</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Last donated: 11 mos ago</span>
</p>
</div>
</div>
<button className="w-full sm:w-auto text-xs font-medium bg-white border border-stone-200 text-stone-700 px-4 py-2 rounded-lg hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-sm flex items-center justify-center gap-2">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
                            Contact Donor
                        </button>
</div>
</div>
</div>
</section>

<section className="border-t border-stone-200/80 bg-white py-24 relative" id="register">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-3">Join the Donor Portal</h2>
<p className="text-sm text-stone-500 max-w-lg mx-auto">Register as a blood donor today and help save lives in your community. Your information remains secure and is only shared when a match is found.</p>
</div>
<form className="bg-white rounded-2xl shadow-[0_2px_20px_rgb(0,0,0,0.03)] border border-stone-200/80 p-6 md:p-8" id="regForm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

<div className="space-y-2">
<label className="text-xs font-medium text-stone-700 ml-1">Full Name</label>
<div className="relative">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
<input className="w-full pl-11 pr-4 py-3 bg-stone-50/50 hover:bg-stone-50 border border-stone-200/80 hover:border-stone-300 focus:bg-white rounded-xl text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" id="regName" placeholder="e.g. Kazi Rahman" type="text"/>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-stone-700 ml-1">Phone Number</label>
<div className="relative">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
</div>
<input className="w-full pl-11 pr-4 py-3 bg-stone-50/50 hover:bg-stone-50 border border-stone-200/80 hover:border-stone-300 focus:bg-white rounded-xl text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" id="regPhone" placeholder="01XXX-XXXXXX" type="tel"/>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-stone-700 ml-1">District</label>
<div className="relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
</div>
<select className="w-full pl-11 pr-10 py-3 bg-stone-50/50 hover:bg-stone-50 border border-stone-200/80 hover:border-stone-300 focus:bg-white rounded-xl text-sm font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer" id="regDistrict">
<option disabled="" selected="" value="">Select District</option>
<option value="dhaka">Dhaka</option>
<option value="chattogram">Chattogram</option>
<option value="sylhet">Sylhet</option>
<option value="rajshahi">Rajshahi</option>
<option value="khulna">Khulna</option>
<option value="barishal">Barishal</option>
<option value="rangpur">Rangpur</option>
<option value="mymensingh">Mymensingh</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-stone-700 ml-1">Blood Group</label>
<div className="relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="solar:medical-kit-linear" width="16"></iconify-icon>
</div>
<select className="w-full pl-11 pr-10 py-3 bg-stone-50/50 hover:bg-stone-50 border border-stone-200/80 hover:border-stone-300 focus:bg-white rounded-xl text-sm font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer" id="regBlood">
<option disabled="" selected="" value="">Select Blood Group</option>
<option value="A+">A Positive (A+)</option>
<option value="B+">B Positive (B+)</option>
<option value="O+">O Positive (O+)</option>
<option value="AB+">AB Positive (AB+)</option>
<option value="A-">A Negative (A-)</option>
<option value="B-">B Negative (B-)</option>
<option value="O-">O Negative (O-)</option>
<option value="AB-">AB Negative (AB-)</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2 md:col-span-2">
<label className="text-xs font-medium text-stone-700 ml-1">Last Donation Date (Optional)</label>
<div className="relative">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
</div>
<input className="w-full pl-11 pr-4 py-3 bg-stone-50/50 hover:bg-stone-50 border border-stone-200/80 hover:border-stone-300 focus:bg-white rounded-xl text-sm font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" id="regDate" type="date"/>
</div>
</div>
</div>
<div className="flex items-center gap-3 mb-8">
<div className="relative flex items-center">
<input className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-stone-300 bg-stone-50 checked:border-orange-500 checked:bg-orange-500 transition-all" id="terms" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<label className="text-xs text-stone-500 cursor-pointer" htmlFor="terms">I agree to share my contact information when a matching blood request is found.</label>
</div>
<button className="w-full hover:bg-stone-800 transition-all flex gap-2 text-sm font-medium text-white bg-stone-900 rounded-xl pt-3.5 pb-3.5 shadow-sm items-center justify-center" id="regBtn" type="button">
                        Register as Donor
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</section>

<section className="border-t border-stone-200/80 bg-[#fafafa] relative py-24" id="admin">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-2">Admin Dashboard</h2>
<p className="text-sm text-stone-500 font-normal">Live statistics and administrative controls for Lifelink.</p>
</div>
<div className="flex items-center gap-6">

<label className="flex items-center cursor-pointer gap-3">
<span className="text-xs font-medium text-stone-500">Live Sync</span>
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-500"></div>
</div>
</label>
<button className="text-xs font-medium text-stone-600 bg-white border border-stone-200 px-3 py-1.5 rounded-lg hover:bg-stone-50 transition-colors flex items-center gap-2 shadow-sm">
<iconify-icon icon="solar:settings-linear" width="14"></iconify-icon>
                            Manage Settings
                        </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 space-y-6">

<div className="bg-white rounded-2xl border border-stone-200/80 p-5 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-6">
<div className="w-9 h-9 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-600">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-red-600 bg-red-50 border border-red-100/50 px-2 py-0.5 rounded-md flex items-center gap-1">
<iconify-icon icon="solar:trend-up-linear" width="12"></iconify-icon> 12%
                                </span>
</div>
<div>
<h3 className="text-xs font-medium text-stone-500 mb-1 uppercase tracking-wider">Registered Donors</h3>
<p className="text-3xl font-medium tracking-tight text-stone-900">14,289</p>
</div>
</div>

<div className="bg-white rounded-2xl border border-stone-200/80 p-5 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-6">
<div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100/50 flex items-center justify-center text-orange-500">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-stone-500 bg-stone-50 border border-stone-100 px-2 py-0.5 rounded-md">
                                    Active Now
                                </span>
</div>
<div>
<h3 className="text-xs font-medium text-stone-500 mb-1 uppercase tracking-wider">Urgent Requests</h3>
<p className="text-3xl font-medium tracking-tight text-stone-900">234</p>
</div>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="bg-white rounded-2xl border border-stone-200/80 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-5">
<div className="flex items-center justify-between mb-5">
<h3 className="text-sm font-medium text-stone-900">National Inventory (Units)</h3>
<button className="text-stone-400 hover:text-stone-900 transition-colors"><iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon></button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

<div className="group bg-stone-50/50 hover:bg-stone-50 rounded-xl p-3 border border-stone-200/60 transition-all">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-stone-500">A+</span>
<div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-xl font-medium tracking-tight text-stone-900">450</span>
</div>
</div>
<div className="group bg-stone-50/50 hover:bg-stone-50 rounded-xl p-3 border border-stone-200/60 transition-all">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-stone-500">B+</span>
<div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-xl font-medium tracking-tight text-stone-900">320</span>
</div>
</div>
<div className="group bg-stone-50/50 hover:bg-stone-50 rounded-xl p-3 border border-stone-200/60 transition-all">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-stone-500">O+</span>
<div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-xl font-medium tracking-tight text-stone-900">890</span>
</div>
</div>
<div className="group bg-stone-50/50 hover:bg-stone-50 rounded-xl p-3 border border-stone-200/60 transition-all">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-stone-500">AB+</span>
<div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-xl font-medium tracking-tight text-stone-900">120</span>
</div>
</div>
<div className="group bg-stone-50/50 hover:bg-stone-50 rounded-xl p-3 border border-stone-200/60 transition-all">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-stone-500">A-</span>
<div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-xl font-medium tracking-tight text-stone-900">85</span>
</div>
</div>
<div className="group bg-orange-50/30 hover:bg-orange-50/50 rounded-xl p-3 border border-orange-200/50 transition-all">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-orange-600">B-</span>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-xl font-medium tracking-tight text-orange-600">12</span>
</div>
</div>
<div className="group bg-orange-50/30 hover:bg-orange-50/50 rounded-xl p-3 border border-orange-200/50 transition-all">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-orange-600">O-</span>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-xl font-medium tracking-tight text-orange-600">8</span>
</div>
</div>
<div className="group bg-stone-50/50 hover:bg-stone-50 rounded-xl p-3 border border-stone-200/60 transition-all">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-stone-500">AB-</span>
<div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-xl font-medium tracking-tight text-stone-900">45</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-stone-200/80 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden flex-1">
<div className="px-5 py-4 border-b border-stone-100 bg-stone-50/30">
<h3 className="text-sm font-medium text-stone-900">Live Activity Feed</h3>
</div>
<div className="divide-y divide-stone-100">
<div className="p-4 flex items-center justify-between hover:bg-stone-50/50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 shrink-0">
<iconify-icon icon="solar:magnifer-linear" width="14"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-900">Search Query</p>
<p className="text-xs text-stone-500 font-normal mt-0.5">Looking for <strong className="font-medium text-stone-700">O+</strong> in <strong className="font-medium text-stone-700">Dhaka</strong></p>
</div>
</div>
<div className="text-right">
<span className="inline-block px-2 py-1 rounded text-[10px] font-medium bg-red-50 text-red-600 border border-red-100 mb-1">
                                            Found 3 Matches
                                        </span>
<p className="text-[10px] text-stone-400">Just now</p>
</div>
</div>
<div className="p-4 flex items-center justify-between hover:bg-stone-50/50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="solar:danger-triangle-linear" width="14"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-900">Urgent Request Created</p>
<p className="text-xs text-stone-500 font-normal mt-0.5">Hospital requesting <strong className="font-medium text-orange-600">AB-</strong> in <strong className="font-medium text-stone-700">Sylhet</strong></p>
</div>
</div>
<div className="text-right">
<span className="inline-block px-2 py-1 rounded text-[10px] font-medium bg-orange-50 text-orange-600 border border-orange-100 mb-1">
                                            Broadcasting
                                        </span>
<p className="text-[10px] text-stone-400">2 mins ago</p>
</div>
</div>
<div className="p-4 flex items-center justify-between hover:bg-stone-50/50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="solar:user-check-linear" width="14"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-900">New Donor Verified</p>
<p className="text-xs text-stone-500 font-normal mt-0.5">Donor registered with <strong className="font-medium text-stone-700">A+</strong> in <strong className="font-medium text-stone-700">Chattogram</strong></p>
</div>
</div>
<div className="text-right">
<span className="inline-block px-2 py-1 rounded text-[10px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100 mb-1">
                                            Added to DB
                                        </span>
<p className="text-[10px] text-stone-400">15 mins ago</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-stone-200/80 py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-xs font-medium tracking-tight text-stone-400">LIFELINK BD</span>
</div>
<div className="flex items-center gap-6 text-xs font-medium text-stone-400">
<a className="hover:text-stone-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-stone-900 transition-colors" href="#">Terms</a>
<a className="hover:text-stone-900 transition-colors" href="#admin">Admin Login</a>
</div>
</div>
</footer>



    </>
  );
}
