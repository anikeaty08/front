import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'blur-in': 'blurIn 0.7s ease-out forwards'
},
keyframes: {
fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
blurIn: { '0%': { opacity: '0', filter: 'blur(10px)' }, '100%': { opacity: '1', filter: 'blur(0)' } }
}
}
}
}



    // Initialize Lucide icons
    lucide.createIcons();

    // Update time
    function updateTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        timeZoneName: 'short'
      });
      document.getElementById('currentTime').textContent = timeString;
    }
    updateTime();
    setInterval(updateTime, 60000);

    // Portfolio Chart
    const ctx = document.getElementById('portfolioChart').getContext('2d');
    const gradientFill = ctx.createLinearGradient(0, 0, 0, 300);
    gradientFill.addColorStop(0, 'rgba(180, 134, 46, 0.3)');
    gradientFill.addColorStop(1, 'rgba(180, 134, 46, 0.05)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Portfolio Value',
          data: [580000, 595000, 612000, 590000, 630000, 655000, 665050],
          borderColor: '#d8a732',
          backgroundColor: gradientFill,
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: '#d8a732',
          pointBorderColor: '#1f2023',
          pointBorderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.6)'
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.6)',
              callback: function(value) {
                return '$' + (value / 1000) + 'K';
              }
            }
          }
        },
        elements: {
          point: {
            hoverBackgroundColor: '#d8a732'
          }
        }
      }
    });

    // Add smooth hover effects for interactive elements
    document.querySelectorAll('button, .cursor-pointer').forEach(element => {
      element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-1px)';
      });
      element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen bg-cover bg-center z-[-1]" id="aura-image" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1508615070457-7baeba4003ab?w=3840&amp'}}></div>

<div className="min-h-full flex flex-col animate-fade-in pt-6 pb-6 items-center">
<div className="w-full max-w-7xl bg-[#1f2023] rounded-3xl shadow-2xl overflow-hidden border border-white/5">

<header className="flex items-center justify-between px-8 lg:px-12 py-6 border-b bg-gradient-to-r from-[#1f2023] to-[#242529] animate-slide-up animate-delay-100 border-white/10">
<div className="flex items-center space-x-4">
<div className="gradient-border">
<div className="gradient-border-inner p-2">
<svg className="lucide lucide-hexagon w-6 h-6 text-[#d8a732]" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</div>
</div>
<div className="">
<span className="text-2xl tracking-tight font-space-grotesk font-semibold">AURA</span>
<span className="block text-xs -mt-1 font-geist text-white/60">Digital Assets Platform</span>
</div>
</div>
<div className="flex items-center space-x-6">
<div className="hidden lg:flex items-center space-x-4 text-sm">
<span className="font-geist text-white/60">Market Status:</span>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-green-500 font-medium font-geist">Active</span>
</div>
</div>
<button className="relative p-2 rounded-lg transition-colors hover:bg-white/5">
<svg className="lucide lucide-grid-3x3 w-5 h-5 text-white/70" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
</button>
<button className="relative p-2 rounded-lg transition-colors hover:bg-white/5" style={{transform: 'translateY(0px)'}}>
<svg className="lucide lucide-bell w-5 h-5 text-white/70" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-red-500 text-xs font-medium shadow-lg font-geist to-red-600">3</span>
</button>
<div className="flex items-center space-x-3 p-2 rounded-xl transition-colors cursor-pointer hover:bg-white/5" style={{transform: 'translateY(0px)'}}>
<img alt="avatar" className="h-10 w-10 rounded-full object-cover ring-2 ring-[#d8a732]/20" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=800&amp;q=80"/>
<div className="hidden sm:flex flex-col leading-tight">
<span className="text-sm font-semibold font-geist">Anya</span>
<span className="text-xs font-geist text-white/60">Premium Member</span>
</div>
<svg className="lucide lucide-chevron-down hidden sm:block w-4 h-4 text-white/60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</header>

<main className="px-8 lg:px-12 py-10 space-y-12">

<section className="space-y-8 animate-slide-up animate-delay-200">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight font-space-grotesk">Good Evening, Anya</h2>
<p className="mt-1 font-geist text-white/60">Here's your portfolio overview for today</p>
</div>
<div className="flex items-center space-x-4 text-sm">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-calendar w-4 h-4 text-white/60" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-geist text-white/80">December 15, 2024</span>
</div>
<div className="w-px h-4 bg-white/20"></div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-clock w-4 h-4 text-white/60" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist text-white/80" id="currentTime">12:50 PM GMT+8</span>
</div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-gradient-to-br from-[#2b2c30] to-[#242529] rounded-2xl p-8 border border-white/5">
<div className="flex mb-6 items-start justify-between">
<div className="">
<p className="text-sm mb-2 font-geist text-white/60">Total Portfolio Value</p>
<div className="flex items-end space-x-2">
<span className="text-sm font-geist text-white/80">$</span>
<span className="text-5xl tracking-tight font-space-grotesk font-semibold">665,050</span>
<span className="text-sm pb-2 font-geist text-white/60">USD</span>
</div>
<div className="flex items-center space-x-2 mt-2">
<svg className="lucide lucide-trending-up w-4 h-4 text-green-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-green-500 text-sm font-medium font-geist">+12.5%</span>
<span className="text-sm font-geist text-white/60">($74,200) today</span>
</div>
</div>
<div className="text-right">
<p className="text-xs mb-1 font-geist text-white/60">24h Change</p>
<span className="text-2xl text-green-500 font-space-grotesk font-semibold">+8.9%</span>
</div>
</div>
<div className="flex gap-3">
<button className="bg-gradient-to-r from-[#b4862e] to-[#966b13] hover:from-[#c4963e] hover:to-[#a67623] transition-all text-sm font-semibold px-6 py-3 rounded-xl shadow-lg font-geist">
<svg className="lucide lucide-arrow-up-right w-4 h-4 inline mr-2" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                  Send
                </button>
<button className="bg-[#3a3b3f] hover:bg-[#48494d] transition-colors text-sm font-semibold px-6 py-3 rounded-xl border font-geist border-white/10">
<svg className="lucide lucide-arrow-down-left w-4 h-4 inline mr-2" data-lucide="arrow-down-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 7 7 17"></path><path d="M17 17H7V7"></path></svg>
                  Receive
                </button>
<button className="bg-[#3a3b3f] hover:bg-[#48494d] transition-colors text-sm font-semibold px-6 py-3 rounded-xl border font-geist border-white/10">
<svg className="lucide lucide-repeat w-4 h-4 inline mr-2" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
                  Convert
                </button>
</div>
</div>

<div className="space-y-6">
<div className="bg-[#2b2c30] rounded-2xl p-6 border border-white/5">
<div className="flex items-center justify-between mb-4">
<h4 className="font-semibold font-geist">Available Balance</h4>
<svg className="lucide lucide-wallet w-5 h-5 text-[#d8a732]" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-sm font-geist text-white/60">USD</span>
<span className="font-semibold font-geist">$45,230</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-geist text-white/60">BTC</span>
<span className="font-semibold font-geist">8.25 BTC</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-geist text-white/60">ETH</span>
<span className="font-semibold font-geist">142.8 ETH</span>
</div>
</div>
</div>
<div className="bg-[#2b2c30] rounded-2xl p-6 border border-white/5">
<div className="flex items-center justify-between mb-4">
<h4 className="font-semibold font-geist">Today's P&amp;L</h4>
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-green-500" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="text-2xl text-green-500 mb-2 font-space-grotesk font-semibold">+$8,945</div>
<div className="text-sm font-geist text-white/60">Realized: $3,240 • Unrealized: $5,705</div>
</div>
</div>
</div>
</section>

<section className="space-y-6 animate-slide-up animate-delay-300">
<div className="flex items-center justify-between">
<h3 className="text-2xl tracking-tight font-space-grotesk font-semibold">Portfolio Performance</h3>
<div className="flex items-center space-x-2">
<button className="px-4 py-2 text-sm bg-[#3a3b3f] hover:bg-[#48494d] rounded-lg transition-colors font-geist">1D</button>
<button className="px-4 py-2 text-sm bg-gradient-to-r from-[#b4862e] to-[#966b13] rounded-lg font-geist">7D</button>
<button className="px-4 py-2 text-sm bg-[#3a3b3f] hover:bg-[#48494d] rounded-lg transition-colors font-geist">1M</button>
<button className="px-4 py-2 text-sm bg-[#3a3b3f] hover:bg-[#48494d] rounded-lg transition-colors font-geist">1Y</button>
</div>
</div>
<div className="bg-[#2b2c30] rounded-2xl p-6 border border-white/5">
<div style={{height: '300px'}}>
<canvas height="600" id="portfolioChart" style={{display: 'block', boxSizing: 'border-box', height: '300px', width: '1132px'}} width="2264"></canvas>
</div>
</div>
</section>

<section className="space-y-6 animate-slide-up animate-delay-400">
<div className="flex items-center justify-between">
<h3 className="text-2xl tracking-tight font-space-grotesk font-semibold">Opportunities</h3>
<button className="text-sm text-[#d8a732] hover:text-[#e8b742] font-medium font-geist">View All</button>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-gradient-to-br from-[#2b2c30] to-[#242529] rounded-2xl p-6 border hover:border-[#d8a732]/30 transition-all duration-300 group border-white/5">
<div className="flex items-center justify-between mb-4">
<span className="text-xs uppercase text-[#d8a732] font-semibold tracking-wide bg-[#d8a732]/10 px-3 py-1 rounded-full font-geist">Premium Card</span>
<svg className="lucide lucide-credit-card w-5 h-5 text-[#d8a732] group-hover:scale-110 transition-transform" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<h4 className="text-lg font-bold mb-2 font-geist">Platinum Card Ready</h4>
<p className="text-sm mb-4 font-geist text-white/60">Your exclusive platinum card is ready for activation with 0% fees for 6 months.</p>
<div className="space-y-2 mb-6">
<div className="flex items-center justify-between text-sm">
<span className="font-geist text-white/60">Credit Limit</span>
<span className="font-semibold font-geist">$50,000</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="font-geist text-white/60">Cashback</span>
<span className="font-semibold text-green-500 font-geist">3%</span>
</div>
</div>
<button className="w-full bg-gradient-to-r from-[#b4862e] to-[#966b13] hover:from-[#c4963e] hover:to-[#a67623] transition-all text-sm font-semibold py-3 rounded-xl shadow-lg font-geist">
                Activate Now
              </button>
</div>

<div className="bg-gradient-to-br from-[#2b2c30] to-[#242529] rounded-2xl p-6 border hover:border-purple-500/30 transition-all duration-300 group border-white/5">
<div className="flex items-center justify-between mb-4">
<span className="text-xs uppercase font-semibold tracking-wide px-3 py-1 rounded-full font-geist text-purple-400 bg-purple-400/10">Referral Program</span>
<svg className="lucide lucide-users w-5 h-5 group-hover:scale-110 transition-transform text-purple-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h4 className="text-lg font-bold mb-2 font-geist">Earn $500 per Referral</h4>
<p className="text-sm mb-4 font-geist text-white/60">Invite friends and earn AXY$ rewards. Track your progress and unlock bonus tiers.</p>
<div className="space-y-2 mb-6">
<div className="flex items-center justify-between text-sm">
<span className="font-geist text-white/60">This Month</span>
<span className="font-semibold font-geist">3 referrals</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="font-geist text-white/60">Earned</span>
<span className="font-semibold text-green-500 font-geist">$1,500</span>
</div>
</div>
<button className="w-full bg-[#3a3b3f] hover:bg-[#48494d] transition-colors text-sm font-semibold py-3 rounded-xl border font-geist border-white/10">
                Share Link
              </button>
</div>

<div className="bg-gradient-to-br from-[#2b2c30] to-[#242529] rounded-2xl p-0 overflow-hidden border hover:border-blue-500/30 transition-all duration-300 group relative border-white/5">
<img alt="NFT Collection" className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1710166755608-58b3d62db3a8?w=800&amp;q=80"/>
<div className="relative z-10 p-6 flex flex-col h-full justify-between min-h-[280px]">
<div>
<span className="text-xs uppercase font-semibold tracking-wide px-3 py-1 rounded-full font-geist text-blue-400 bg-blue-400/20">NFT Collection</span>
<h4 className="mt-4 text-lg font-bold font-geist">Exclusive Genesis Drop</h4>
<p className="mt-2 text-sm font-geist text-white/80">Limited edition NFTs with utility features and staking rewards.</p>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="font-geist text-white/80">Floor Price</span>
<span className="font-semibold font-geist">2.5 ETH</span>
</div>
<button className="w-full transition-colors text-sm font-semibold py-3 rounded-xl font-geist bg-blue-600 hover:bg-blue-700">
                    Explore Collection
                  </button>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6 animate-slide-up animate-delay-500">
<div className="flex items-center justify-between">
<h3 className="text-2xl tracking-tight font-space-grotesk font-semibold">Asset Portfolio</h3>
<div className="flex items-center gap-3">
<div className="relative">
<input className="bg-[#2b2c30] border rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#d8a732]/50 transition-colors border-white/10" placeholder="Search assets..." type="text"/>
<svg className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<button className="p-2 bg-[#2b2c30] rounded-xl hover:bg-[#3a3b3f] border transition-colors border-white/10">
<svg className="lucide lucide-filter w-5 h-5" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</button>
<button className="p-2 bg-[#2b2c30] rounded-xl hover:bg-[#3a3b3f] border transition-colors border-white/10">
<svg className="lucide lucide-download w-5 h-5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</div>
</div>
<div className="bg-[#2b2c30] rounded-2xl overflow-hidden border border-white/5">
<div className="overflow-x-auto">
<table className="min-w-full divide-y text-sm divide-white/10">
<thead className="bg-[#27282c]">
<tr>
<th className="px-6 py-4 text-left font-semibold font-geist">Asset</th>
<th className="px-6 py-4 text-left font-semibold font-geist">Holdings</th>
<th className="px-6 py-4 text-left font-semibold font-geist">Price</th>
<th className="px-6 py-4 text-left font-semibold font-geist">24h Change</th>
<th className="px-6 py-4 text-left font-semibold font-geist">Value</th>
<th className="px-6 py-4 text-center font-semibold font-geist">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">

<tr className="transition-colors group hover:bg-white/5">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
<svg className="lucide lucide-bitcoin w-5 h-5 text-white" data-lucide="bitcoin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg>
</div>
<div>
<span className="font-semibold font-geist">Bitcoin</span>
<span className="block text-xs font-geist text-white/60">BTC</span>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="font-semibold font-geist">5.25 BTC</span>
<span className="block text-xs font-geist text-white/60">78.9% of portfolio</span>
</td>
<td className="px-6 py-4">
<span className="font-semibold font-geist">$43,750.00</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center space-x-1">
<svg className="lucide lucide-trending-up w-3 h-3 text-green-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-green-500 font-medium font-geist">+2.45%</span>
</div>
</td>
<td className="px-6 py-4">
<span className="font-semibold font-geist">$229,687.50</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 rounded-lg transition-colors bg-green-600 hover:bg-green-700" title="Buy">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<button className="p-2 rounded-lg transition-colors bg-red-600 hover:bg-red-700" title="Sell">
<svg className="lucide lucide-minus w-4 h-4" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<button className="p-2 rounded-lg transition-colors bg-blue-600 hover:bg-blue-700" title="Convert">
<svg className="lucide lucide-repeat w-4 h-4" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</button>
</div>
</td>
</tr>

<tr className="transition-colors group hover:bg-white/5">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
<svg className="lucide lucide-triangle w-5 h-5 text-white" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
</div>
<div>
<span className="font-semibold font-geist">Ethereum</span>
<span className="block text-xs font-geist text-white/60">ETH</span>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="font-semibold font-geist">142.8 ETH</span>
<span className="block text-xs font-geist text-white/60">18.2% of portfolio</span>
</td>
<td className="px-6 py-4">
<span className="font-semibold font-geist">$2,245.30</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center space-x-1">
<svg className="lucide lucide-trending-up w-3 h-3 text-green-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-green-500 font-medium font-geist">+1.82%</span>
</div>
</td>
<td className="px-6 py-4">
<span className="font-semibold font-geist">$320,628.84</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 rounded-lg transition-colors bg-green-600 hover:bg-green-700" title="Buy">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<button className="p-2 rounded-lg transition-colors bg-red-600 hover:bg-red-700" title="Sell">
<svg className="lucide lucide-minus w-4 h-4" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<button className="p-2 rounded-lg transition-colors bg-blue-600 hover:bg-blue-700" title="Convert">
<svg className="lucide lucide-repeat w-4 h-4" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</button>
</div>
</td>
</tr>

<tr className="transition-colors group hover:bg-white/5">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
<svg className="lucide lucide-zap w-5 h-5 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<span className="font-semibold font-geist">Solana</span>
<span className="block text-xs font-geist text-white/60">SOL</span>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="font-semibold font-geist">2,450 SOL</span>
<span className="block text-xs font-geist text-white/60">2.9% of portfolio</span>
</td>
<td className="px-6 py-4">
<span className="font-semibold font-geist">$98.45</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center space-x-1">
<svg className="lucide lucide-trending-down w-3 h-3 text-red-500" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<span className="text-red-500 font-medium font-geist">-0.85%</span>
</div>
</td>
<td className="px-6 py-4">
<span className="font-semibold font-geist">$241,202.50</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 rounded-lg transition-colors bg-green-600 hover:bg-green-700" title="Buy">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<button className="p-2 rounded-lg transition-colors bg-red-600 hover:bg-red-700" title="Sell">
<svg className="lucide lucide-minus w-4 h-4" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<button className="p-2 rounded-lg transition-colors bg-blue-600 hover:bg-blue-700" title="Convert">
<svg className="lucide lucide-repeat w-4 h-4" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="space-y-6 animate-slide-up animate-delay-600">
<h3 className="text-2xl tracking-tight font-space-grotesk font-semibold">Recent Activity</h3>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-[#2b2c30] rounded-2xl p-6 border border-white/5">
<h4 className="font-semibold mb-4 flex items-center font-geist">
<svg className="lucide lucide-activity w-5 h-5 mr-2 text-[#d8a732]" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                Transactions
              </h4>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-[#1f2023] rounded-xl">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-600">
<svg className="lucide lucide-arrow-down-left w-4 h-4 text-white" data-lucide="arrow-down-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 7 7 17"></path><path d="M17 17H7V7"></path></svg>
</div>
<div>
<p className="text-sm font-medium font-geist">Received BTC</p>
<p className="text-xs font-geist text-white/60">2 hours ago</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-green-500 font-geist">+0.05 BTC</p>
<p className="text-xs font-geist text-white/60">$2,187.50</p>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-[#1f2023] rounded-xl">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-600">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div>
<p className="text-sm font-medium font-geist">Sent ETH</p>
<p className="text-xs font-geist text-white/60">5 hours ago</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-red-500 font-geist">-2.5 ETH</p>
<p className="text-xs font-geist text-white/60">$5,613.25</p>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-[#1f2023] rounded-xl">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-600">
<svg className="lucide lucide-repeat w-4 h-4 text-white" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</div>
<div>
<p className="text-sm font-medium font-geist">Converted SOL to USDC</p>
<p className="text-xs font-geist text-white/60">1 day ago</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold font-geist">50 SOL</p>
<p className="text-xs font-geist text-white/60">$4,922.50</p>
</div>
</div>
</div>
</div>
<div className="bg-[#2b2c30] rounded-2xl p-6 border border-white/5">
<h4 className="font-semibold mb-4 flex items-center font-geist">
<svg className="lucide lucide-trending-up w-5 h-5 mr-2 text-green-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                Market Insights
              </h4>
<div className="space-y-4">
<div className="p-3 bg-[#1f2023] rounded-xl">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium font-geist">Bitcoin Trend</span>
<span className="text-xs bg-green-500/20 px-2 py-1 rounded-full font-geist text-green-400">Bullish</span>
</div>
<p className="text-xs font-geist text-white/60">BTC showing strong momentum with 15% weekly gains</p>
</div>
<div className="p-3 bg-[#1f2023] rounded-xl">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium font-geist">DeFi Season</span>
<span className="text-xs bg-blue-500/20 px-2 py-1 rounded-full font-geist text-blue-400">Active</span>
</div>
<p className="text-xs font-geist text-white/60">High activity in DeFi protocols, consider diversification</p>
</div>
<div className="p-3 bg-[#1f2023] rounded-xl">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium font-geist">Staking Rewards</span>
<span className="text-xs bg-purple-500/20 px-2 py-1 rounded-full font-geist text-purple-400">Available</span>
</div>
<p className="text-xs font-geist text-white/60">Your ETH is eligible for 4.2% APY staking rewards</p>
</div>
</div>
</div>
</div>
</section>
</main>
</div>
</div>




    </>
  );
}
