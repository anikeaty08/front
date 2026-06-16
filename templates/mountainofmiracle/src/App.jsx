import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Data for Mission/Vision
        const sectionsData = {
            mission: {
                title: "Our Mission",
                chips: ["Preach", "Heal", "Deliver", "Disciple"],
                texts: {
                    "Preach": "We are called to preach the unadulterated Word of God, bringing the message of salvation and hope to the lost in our community and beyond.",
                    "Heal": "Believing in the power of the Holy Spirit, we minister healing to the brokenhearted and the physically sick through prayer and faith.",
                    "Deliver": "Setting the captives free through the power in the name of Jesus. We stand in the gap to break chains of oppression.",
                    "Disciple": "Raising a generation of strong believers who know their identity in Christ and are equipped for every good work."
                }
            },
            vision: {
                title: "Our Vision",
                chips: ["Encounter", "Community", "Impact"],
                texts: {
                    "Encounter": "To create an atmosphere where people can have a genuine, life-altering encounter with the presence and power of God.",
                    "Community": "To build a loving, united family of believers who support, encourage, and sharpen one another in faith and love.",
                    "Impact": "To be a beacon of light in our city, showing the love of Christ through practical service and unwavering truth."
                }
            }
        };

        // Data for Values
        const valuesData = {
            faith: "We believe that without faith it is impossible to please God. We trust in His promises, walk by faith and not by sight, and expect miracles when we pray.",
            love: "Love is the foundation of our ministry. We love God passionately and love people unconditionally, reflecting Christ’s heart in how we welcome and serve others.",
            holiness: "We are called to be set apart. We pursue holiness in our thoughts, actions, and lifestyle, honoring God with our bodies and minds as temples of the Holy Spirit.",
            service: "Following the example of Jesus, we believe true greatness is found in serving others. We actively serve within the church and out in our communities.",
            prayer: "Prayer is the breath of our church. We believe in fervent, continuous prayer that aligns our hearts with God's will and brings breakthrough from heaven."
        };

        // Mission/Vision Logic
        function showSection(type) {
            const container = document.getElementById('dynamic-content');
            const data = sectionsData[type];
            
            // For light theme active states
            let chipsHtml = data.chips.map((chip, index) => 
                `<button onclick="updateDescription('${type}', '${chip}')" class="px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all text-sm text-slate-600 shadow-sm mb-2 mr-2 ${index === 0 ? 'bg-sky-500 border-sky-500 text-white' : ''}">${chip}</button>`
            ).join('');

            // Fade out
            container.style.opacity = '0';
            
            setTimeout(() => {
                container.innerHTML = `
                    <h3 class="text-xl font-semibold text-slate-900 mb-6 animate-fade-in">${data.title}</h3>
                    <div class="flex flex-wrap justify-center mb-6">
                        ${chipsHtml}
                    </div>
                    <div id="text-display" class="bg-slate-50 p-6 rounded-xl border border-slate-100 max-w-2xl w-full min-h-[100px] flex items-center justify-center shadow-inner">
                        <p class="text-slate-600 text-lg leading-relaxed animate-fade-in">${data.texts[data.chips[0]]}</p>
                    </div>
                `;
                container.style.opacity = '1';
            }, 300);
        }

        function updateDescription(type, chip) {
            const display = document.getElementById('text-display');
            const text = sectionsData[type].texts[chip];
            
            // Update chip styles manually
            const buttons = document.querySelectorAll('#dynamic-content button');
            buttons.forEach(btn => {
                if(btn.innerText === chip) {
                    btn.classList.add('bg-sky-500', 'text-white', 'border-sky-500');
                    btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
                } else {
                    btn.classList.remove('bg-sky-500', 'text-white', 'border-sky-500');
                    btn.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
                }
            });

            display.innerHTML = `<p class="text-slate-600 text-lg leading-relaxed animate-fade-in">${text}</p>`;
        }

        // Values Modal Logic
        const modal = document.getElementById('value-modal');
        const modalContent = document.getElementById('modal-content-box');
        const modalBody = document.getElementById('modal-body');

        document.querySelectorAll('.value-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-value');
                const text = valuesData[key];
                const title = btn.querySelector('h3').innerText;
                const icon = btn.querySelector('iconify-icon').getAttribute('icon');

                modalBody.innerHTML = `
                    <div class="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center text-sky-500 mx-auto mb-6">
                        <iconify-icon icon="${icon}" width="32" stroke-width="1.5"></iconify-icon>
                    </div>
                    <h3 class="text-2xl font-semibold text-slate-900 mb-4">${title}</h3>
                    <div class="h-1 w-12 bg-sky-500 mx-auto mb-6 rounded-full"></div>
                    <p class="text-slate-600 leading-relaxed text-left md:text-center">${text}</p>
                `;

                modal.classList.remove('hidden');
                setTimeout(() => {
                    modalContent.classList.remove('scale-95', 'opacity-0');
                    modalContent.classList.add('scale-100', 'opacity-100');
                }, 10);
            });
        });

        function closeModal() {
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        // Initialize Mission View
        showSection('mission');

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-slate-900 flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
<span className="bg-sky-500 w-8 h-8 rounded flex items-center justify-center text-xs font-bold text-white shadow-sm">MMC</span>
                Mountain of Miracles
            </a>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-sky-600 transition-colors" href="#about">About</a>
<a className="hover:text-sky-600 transition-colors" href="#programs">Programs</a>
<a className="hover:text-sky-600 transition-colors" href="#sermons">Sermons</a>
<a className="hover:text-sky-600 transition-colors" href="#ministries">Ministries</a>
<a className="hover:text-sky-600 transition-colors" href="#giving">Giving</a>
<a className="bg-sky-500 text-white px-5 py-2 rounded-full hover:bg-sky-600 transition-colors shadow-sm" href="#contact">
                    Contact Us
                </a>
</div>
<button className="lg:hidden text-slate-900 hover:text-sky-500 transition-colors focus:outline-none" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 lg:hidden animate-fade-in shadow-lg" id="mobile-menu">
<a className="text-slate-600 hover:text-sky-600 py-2 font-medium" href="#about">About</a>
<a className="text-slate-600 hover:text-sky-600 py-2 font-medium" href="#programs">Programs</a>
<a className="text-slate-600 hover:text-sky-600 py-2 font-medium" href="#sermons">Sermons</a>
<a className="text-slate-600 hover:text-sky-600 py-2 font-medium" href="#ministries">Ministries</a>
<a className="text-slate-600 hover:text-sky-600 py-2 font-medium" href="#giving">Giving</a>
<a className="text-sky-600 py-2 font-medium" href="#contact">Contact Us</a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-300/30 rounded-full blur-[128px]"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-300/20 rounded-full blur-[128px]"></div>

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&amp;w=2673&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-multiply"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-sky-600 mb-6 shadow-sm animate-fade-in">
<iconify-icon icon="solar:fire-square-linear" strokeWidth="1.5" width="16"></iconify-icon>
                Spirit-Filled Ministry
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1] animate-fade-in" style={{animationDelay: '0.1s'}}>
                Welcome to <br/>
<span className="gradient-text">Mountain of Miracles Chapel</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
                A place of prayer, miracles, worship, and the Word. Join our family and experience the transformative power of God in your life.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
<a className="w-full sm:w-auto px-8 py-3.5 bg-sky-500 text-white rounded-lg font-medium hover:bg-sky-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2" href="#programs">
                    Join Us This Week
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group shadow-sm" href="#sermons">
<iconify-icon className="text-sky-500 group-hover:scale-110 transition-transform" icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Watch Sermons
                </a>
</div>
</div>
</header>

<section className="py-12 bg-white border-b border-slate-100 relative z-20 -mt-8 mx-6 md:mx-auto max-w-7xl rounded-2xl shadow-sm border glass-panel">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 divide-x-0 md:divide-x divide-slate-100">
<div className="text-center px-4 flex flex-col items-center group">
<div className="w-12 h-12 bg-sky-50 text-sky-500 rounded-full flex items-center justify-center mb-3 group-hover:bg-sky-100 transition-colors">
<iconify-icon icon="solar:hands-praying-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">Prayer &amp; Miracles</h3>
</div>
<div className="text-center px-4 flex flex-col items-center group">
<div className="w-12 h-12 bg-teal-50 text-teal-500 rounded-full flex items-center justify-center mb-3 group-hover:bg-teal-100 transition-colors">
<iconify-icon icon="solar:book-bookmark-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">Bible Teaching</h3>
</div>
<div className="text-center px-4 flex flex-col items-center group">
<div className="w-12 h-12 bg-sky-50 text-sky-500 rounded-full flex items-center justify-center mb-3 group-hover:bg-sky-100 transition-colors">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">Healing &amp; Deliverance</h3>
</div>
<div className="text-center px-4 flex flex-col items-center group">
<div className="w-12 h-12 bg-teal-50 text-teal-500 rounded-full flex items-center justify-center mb-3 group-hover:bg-teal-100 transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">Family &amp; Youth</h3>
</div>
</div>
</section>

<section className="py-24 relative bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-xs font-medium text-sky-500 uppercase tracking-widest mb-2">About Us</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                    A Legacy of Faith &amp; Miracles
                </h3>
<div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
<p>
                        Mountain of Miracles Chapel was founded on the unshakeable foundation of God's Word. We are a dynamic, spirit-filled ministry dedicated to seeing lives transformed by the power of the Holy Ghost.
                    </p>
<p>
                        Led by our Senior Pastor, we are passionate about raising a generation of believers who walk in faith, holiness, and divine purpose. Whether you are seeking physical healing, spiritual growth, or a loving community, there is a place for you here.
                    </p>
<div className="pt-4 border-t border-slate-100 flex items-center gap-4 mt-6">
<div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden shrink-0">

<img alt="Senior Pastor" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="font-semibold text-slate-900">Senior Pastor</p>
<p className="text-xs text-sky-600 font-medium">Visionary &amp; Lead Teacher</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative group shadow-lg">
<img alt="Church Congregation" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&amp;w=2673&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-white font-medium text-lg">Worshiping Together</p>
<p className="text-sky-200 text-sm">One family in Christ</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-slate-50 border-y border-slate-200">
<div className="glow-bg absolute inset-0 z-0"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-xs font-medium text-sky-500 uppercase tracking-widest mb-2">Our Direction</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Vision &amp; Mission</h3>
</div>

<div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
<button className="animate-float group text-center focus:outline-none" onclick="showSection('mission')">
<div className="text-4xl md:text-5xl font-semibold text-slate-300 group-hover:text-slate-900 transition-colors duration-300 group-focus:text-sky-500">
                        Mission
                    </div>
</button>
<button className="animate-float-delayed group text-center focus:outline-none" onclick="showSection('vision')">
<div className="text-4xl md:text-5xl font-semibold text-slate-300 group-hover:text-slate-900 transition-colors duration-300 group-focus:text-teal-500">
                        Vision
                    </div>
</button>
</div>

<div className="glass-panel rounded-2xl p-8 md:p-12 min-h-[300px] flex flex-col items-center justify-center text-center transition-all duration-500 shadow-sm bg-white/60" id="dynamic-content">
<p className="text-slate-500 text-lg">Click <span className="text-slate-900 font-medium">Mission</span> or <span className="text-slate-900 font-medium">Vision</span> to discover our purpose.</p>
</div>
</div>
</section>

<section className="py-24 bg-white" id="values">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Our Core Values</h2>
<p className="text-slate-600 text-sm md:text-base">The biblical pillars that uphold our faith and ministry. Click each to read more.</p>
</div>
<div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">

<button className="value-btn flex-1 min-w-[150px] group relative p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md hover:border-sky-300 transition-all text-center" data-value="faith">
<div className="mb-3 text-sky-500 flex justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-sm md:text-base font-semibold text-slate-900 mb-1">Faith</h3>
</button>
<button className="value-btn flex-1 min-w-[150px] group relative p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md hover:border-teal-300 transition-all text-center" data-value="love">
<div className="mb-3 text-teal-500 flex justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-sm md:text-base font-semibold text-slate-900 mb-1">Love</h3>
</button>
<button className="value-btn flex-1 min-w-[150px] group relative p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md hover:border-sky-300 transition-all text-center" data-value="holiness">
<div className="mb-3 text-sky-500 flex justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-sm md:text-base font-semibold text-slate-900 mb-1">Holiness</h3>
</button>
<button className="value-btn flex-1 min-w-[150px] group relative p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md hover:border-teal-300 transition-all text-center" data-value="service">
<div className="mb-3 text-teal-500 flex justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:hand-heart-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-sm md:text-base font-semibold text-slate-900 mb-1">Service</h3>
</button>
<button className="value-btn flex-1 min-w-[150px] group relative p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md hover:border-sky-300 transition-all text-center" data-value="prayer">
<div className="mb-3 text-sky-500 flex justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:hands-praying-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-sm md:text-base font-semibold text-slate-900 mb-1">Prayer</h3>
</button>
</div>
</div>
</section>

<div className="fixed inset-0 z-[60] hidden flex items-center justify-center px-4" id="value-modal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onclick="closeModal()"></div>
<div className="bg-white relative w-full max-w-md rounded-2xl p-8 shadow-2xl transform transition-all scale-95 opacity-0 border border-slate-100" id="modal-content-box">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="text-center" id="modal-body">

</div>
</div>
</div>

<section className="py-24 border-y border-slate-100 bg-slate-50 relative" id="programs">
<div className="absolute inset-0 glow-bg"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-xs font-medium text-sky-500 uppercase tracking-widest mb-2">Join Us</h2>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Weekly Services</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-sky-50 p-8 rounded-2xl border border-sky-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-sky-500 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:book-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Teaching Service</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">In-depth Bible study, Christian growth, and faith-building teachings to ground you in the Word.</p>
<div className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 bg-white px-4 py-2 rounded-lg shadow-sm border border-sky-100">
<iconify-icon icon="solar:calendar-date-linear" width="18"></iconify-icon>
                        Wednesdays • 7:00 PM
                    </div>
</div>

<div className="bg-teal-50 p-8 rounded-2xl border border-teal-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-teal-500 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:fire-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Miracle Service</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">A powerful time of healing, deliverance, breakthrough prayers, and prophetic testimonies.</p>
<div className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 bg-white px-4 py-2 rounded-lg shadow-sm border border-teal-100">
<iconify-icon icon="solar:calendar-date-linear" width="18"></iconify-icon>
                        Fridays • 6:00 PM
                    </div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group">
<div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:sun-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Thanksgiving Service</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">Join us for vibrant worship, praise, dynamic sermons, and a blessing for the whole family.</p>
<div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg">
<iconify-icon icon="solar:calendar-date-linear" width="18"></iconify-icon>
                        Sundays • 8:00 AM
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="sermons">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Latest Messages</h2>
<p className="text-slate-600 text-sm">Listen to weekly teachings and be blessed by the Word.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 text-sm font-medium text-sky-600 bg-sky-50 px-4 py-2 rounded-lg hover:bg-sky-100 transition-colors" href="#">
<iconify-icon icon="solar:play-stream-linear" width="18"></iconify-icon>
                        Live Stream
                    </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors" href="#">
<iconify-icon icon="solar:download-square-linear" width="18"></iconify-icon>
                        Downloads
                    </a>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="aspect-video bg-slate-100 rounded-xl overflow-hidden relative mb-4 border border-slate-200">
<img alt="Sermon Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80" src="https://images.unsplash.com/photo-1519781542704-957ff19eff00?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors">
<div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-sky-600 shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>
<h4 className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">The Power of Persistent Prayer</h4>
<p className="text-xs text-slate-500 mt-1">Sunday Service • 45 mins</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-slate-100 rounded-xl overflow-hidden relative mb-4 border border-slate-200">
<img alt="Sermon Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80" src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors">
<div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-sky-600 shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>
<h4 className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">Walking in Divine Healing</h4>
<p className="text-xs text-slate-500 mt-1">Friday Miracle Service • 1hr 12m</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-slate-100 rounded-xl overflow-hidden relative mb-4 border border-slate-200">
<img alt="Sermon Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80" src="https://images.unsplash.com/photo-1445427188737-25e22709292b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors">
<div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-sky-600 shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>
<h4 className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">Foundations of Faith</h4>
<p className="text-xs text-slate-500 mt-1">Wednesday Teaching • 55 mins</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-50 border-t border-slate-200" id="ministries">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-xs font-medium mb-4">Get Involved</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Our Ministries</h2>
<p className="text-slate-600 text-sm md:text-base">Find your place to serve and grow in Mountain of Miracles Chapel.</p>
</div>
<div className="space-y-4">

<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 hover:bg-slate-50 transition-colors select-none">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<span className="font-semibold text-base md:text-lg">Youth Ministry</span>
</div>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 border-t border-slate-100 animate-fade-in text-slate-600 text-sm leading-relaxed bg-slate-50/50">
                        Empowering the next generation to stand bold in their faith. We equip teenagers and young adults through interactive bible studies, vibrant worship, and honest discussions about navigating today's world as Christians.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 hover:bg-slate-50 transition-colors select-none">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-teal-50 text-teal-500 flex items-center justify-center">
<iconify-icon icon="solar:user-rounded-linear" width="24"></iconify-icon>
</div>
<span className="font-semibold text-base md:text-lg">Women's Fellowship</span>
</div>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 border-t border-slate-100 animate-fade-in text-slate-600 text-sm leading-relaxed bg-slate-50/50">
                        A supportive sisterhood dedicated to prayer, studying the Word, and uplifting one another. We aim to build strong women who impact their homes, workplaces, and communities for Christ.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 hover:bg-slate-50 transition-colors select-none">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center">
<iconify-icon icon="solar:shield-user-linear" width="24"></iconify-icon>
</div>
<span className="font-semibold text-base md:text-lg">Men's Fellowship</span>
</div>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 border-t border-slate-100 animate-fade-in text-slate-600 text-sm leading-relaxed bg-slate-50/50">
                        Iron sharpens iron. Our men's ministry focuses on accountability, spiritual leadership, and practical teachings to help men fulfill their God-given roles as spiritual heads of their families.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 hover:bg-slate-50 transition-colors select-none">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-teal-50 text-teal-500 flex items-center justify-center">
<iconify-icon icon="solar:music-notes-linear" width="24"></iconify-icon>
</div>
<span className="font-semibold text-base md:text-lg">Choir &amp; Music Ministry</span>
</div>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 border-t border-slate-100 animate-fade-in text-slate-600 text-sm leading-relaxed bg-slate-50/50">
                        Leading the congregation into the presence of God through spirit-filled praise and worship. If you have a musical talent, join us in making a joyful noise unto the Lord.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 hover:bg-slate-50 transition-colors select-none">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center">
<iconify-icon icon="solar:hands-praying-linear" width="24"></iconify-icon>
</div>
<span className="font-semibold text-base md:text-lg">Prayer &amp; Intercession</span>
</div>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 border-t border-slate-100 animate-fade-in text-slate-600 text-sm leading-relaxed bg-slate-50/50">
                        The engine room of the church. We stand in the gap for our leaders, the church body, our nation, and global needs, believing in the power of fervent prayer to bring breakthroughs.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 hover:bg-slate-50 transition-colors select-none">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-teal-50 text-teal-500 flex items-center justify-center">
<iconify-icon icon="solar:global-linear" width="24"></iconify-icon>
</div>
<span className="font-semibold text-base md:text-lg">Evangelism Outreach</span>
</div>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 border-t border-slate-100 animate-fade-in text-slate-600 text-sm leading-relaxed bg-slate-50/50">
                        Taking the gospel to the streets and reaching the lost. We organize community outreaches, street evangelism, and distribution of tracts to win souls for the Kingdom.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">Real Miracles, Real People</h2>
<div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory">
<div className="min-w-[300px] md:min-w-[400px] bg-sky-50/50 p-8 rounded-2xl snap-center border border-sky-100">
<div className="flex gap-1 text-sky-500 mb-4">
<iconify-icon icon="solar:quote-left-linear" width="28"></iconify-icon>
</div>
<p className="text-slate-700 mb-6 italic text-sm leading-relaxed">"I came to the Friday Miracle Service burdened with a severe health issue. After the pastor prayed, I felt an instant warmth. The doctors confirmed the healing completely. God is faithful!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-sky-200 flex items-center justify-center font-bold text-sky-600 shadow-sm">J</div>
<div>
<p className="text-sm font-semibold text-slate-900">James T.</p>
<p className="text-xs text-slate-500">Healed from chronic illness</p>
</div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] bg-teal-50/50 p-8 rounded-2xl snap-center border border-teal-100">
<div className="flex gap-1 text-teal-500 mb-4">
<iconify-icon icon="solar:quote-left-linear" width="28"></iconify-icon>
</div>
<p className="text-slate-700 mb-6 italic text-sm leading-relaxed">"My business was on the verge of collapsing. During the Thanksgiving service, I sowed a seed of faith. Within two weeks, I received a contract that changed everything."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-teal-200 flex items-center justify-center font-bold text-teal-600 shadow-sm">S</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah O.</p>
<p className="text-xs text-slate-500">Financial breakthrough</p>
</div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] bg-slate-50 p-8 rounded-2xl snap-center border border-slate-200">
<div className="flex gap-1 text-slate-400 mb-4">
<iconify-icon icon="solar:quote-left-linear" width="28"></iconify-icon>
</div>
<p className="text-slate-700 mb-6 italic text-sm leading-relaxed">"The teaching services on Wednesdays grounded me in the Word. I found a family here. The Youth ministry gave me purpose and direction when I was lost."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-600 shadow-sm">D</div>
<div>
<p className="text-sm font-semibold text-slate-900">David M.</p>
<p className="text-xs text-slate-500">Youth Ministry member</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-sky-500 text-white relative overflow-hidden" id="giving">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<iconify-icon className="mb-4 opacity-80" icon="solar:wallet-linear" width="48"></iconify-icon>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Give &amp; Partner with Us</h2>
<p className="text-sky-100 mb-10 text-sm md:text-base max-w-2xl mx-auto">
                Your generosity helps us continue preaching the gospel, funding outreaches, and supporting the needy. Support through tithes, offerings, or project seeds.
            </p>
<div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-colors">
<h4 className="font-semibold mb-2 flex items-center gap-2">
<iconify-icon icon="solar:smartphone-linear" width="20"></iconify-icon> Mobile Money
                    </h4>
<p className="text-sm text-sky-100 font-mono tracking-wider">MTN: 0531 099 001</p>
<p className="text-sm text-sky-100 font-mono tracking-wider">Voda: 0531 099 002</p>
<p className="text-xs text-sky-200 mt-2">Name: Mountain of Miracles</p>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-colors">
<h4 className="font-semibold mb-2 flex items-center gap-2">
<iconify-icon icon="solar:banknotes-linear" width="20"></iconify-icon> Bank Transfer
                    </h4>
<p className="text-sm text-sky-100 font-mono tracking-wider">ACC: 1234567890</p>
<p className="text-sm text-sky-100 font-mono tracking-wider">Bank: Miracle Bank</p>
<p className="text-xs text-sky-200 mt-2">Branch: Main City</p>
</div>
</div>
<button className="mt-10 bg-white text-sky-600 px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-50 transition-colors shadow-lg shadow-sky-900/20">
                Give Now Securely
            </button>
</div>
</section>

<footer className="bg-slate-900 pt-20 pb-10 text-slate-300" id="contact">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 mb-16">

<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Contact Us</h2>
<p className="mb-8 text-sm text-slate-400">We would love to hear from you. Send us a message, a prayer request, or plan your visit.</p>
<div className="flex flex-col gap-5 text-sm mb-8">
<div className="flex items-center gap-4 group">
<span className="p-3 bg-slate-800 rounded-full group-hover:bg-sky-500 group-hover:text-white transition-colors"><iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon></span>
<div>
<p className="font-medium text-white">Call Us</p>
<p>0531 099 001 / 0531 099 002</p>
</div>
</div>
<div className="flex items-center gap-4 group">
<span className="p-3 bg-slate-800 rounded-full group-hover:bg-teal-500 group-hover:text-white transition-colors"><iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon></span>
<div>
<p className="font-medium text-white">Service Times</p>
<p>Wed 7PM | Fri 6PM | Sun 8AM</p>
</div>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="Name" type="text"/>
<input className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="Phone" type="text"/>
</div>
<input className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="Email Address" type="email"/>
<textarea className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="Message or Prayer Request" rows="3"></textarea>
<button className="bg-sky-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-600 transition-colors text-sm w-full" type="button">Send Message</button>
</form>
</div>

<div className="h-80 lg:h-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 relative shadow-inner">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4354228495!2d-0.2057!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuMyJOIDDCsDEyJzIwLjUiVw!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
<p>© 2024 Mountain of Miracles Chapel. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Facebook</a>
<a className="hover:text-white transition-colors" href="#">YouTube</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
</footer>



    </>
  );
}
