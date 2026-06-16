import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // -- View Toggling --
            const exploreView = document.getElementById('explore-view');
            const detailView = document.getElementById('detail-view');
            const btnBack = document.getElementById('btn-back');
            const logoHome = document.getElementById('logo-home');
            const ideaCards = document.querySelectorAll('.idea-card');

            const showDetailView = () => {
                exploreView.classList.add('hidden');
                exploreView.classList.remove('flex');
                detailView.classList.remove('hidden');
                detailView.classList.add('flex');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };

            const showExploreView = (e) => {
                if(e) e.preventDefault();
                detailView.classList.add('hidden');
                detailView.classList.remove('flex');
                exploreView.classList.remove('hidden');
                exploreView.classList.add('flex');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };

            // Bind click to each card to open detail view
            ideaCards.forEach(card => card.addEventListener('click', showDetailView));
            
            // Bind return buttons
            btnBack.addEventListener('click', showExploreView);
            logoHome.addEventListener('click', showExploreView);


            // -- Modals Toggling --
            const modals = {
                submit: document.getElementById('modal-submit'),
                share: document.getElementById('modal-share'),
                wallet: document.getElementById('modal-wallet')
            };

            const triggers = {
                submit: document.getElementById('btn-submit'),
                share: document.getElementById('btn-share'),
                wallet: document.getElementById('btn-wallet')
            };

            const toggleModal = (modal, forceOpen = false) => {
                if (!modal) return;
                if (forceOpen) {
                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                } else {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                }
            };

            if (triggers.submit) triggers.submit.addEventListener('click', () => toggleModal(modals.submit, true));
            if (triggers.share) triggers.share.addEventListener('click', () => toggleModal(modals.share, true));
            if (triggers.wallet) triggers.wallet.addEventListener('click', () => toggleModal(modals.wallet, true));

            document.querySelectorAll('.close-modal').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const modal = e.target.closest('.fixed');
                    toggleModal(modal, false);
                });
            });

            document.querySelectorAll('.modal-backdrop').forEach(bg => {
                bg.addEventListener('click', (e) => {
                    const modal = e.target.closest('.fixed');
                    toggleModal(modal, false);
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-glow"></div>

<header className="sticky top-0 z-40 border-b border-white/5 bg-[#0B0F19]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#" id="logo-home">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F25C05] to-[#a33d02] flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:lightbulb-bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-white">IDE<span className="text-[#F25C05]">A</span>S</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-white relative after:content-[''] after:absolute after:-bottom-[21px] after:left-0 after:w-full after:h-[2px] after:bg-[#F25C05]" href="#">Explore</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">Superteams</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">Roadmap</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">How it works</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-all" id="btn-wallet">
<iconify-icon icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Connect Wallet
                </button>
<button className="bg-[#F25C05] hover:bg-[#e05505] text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_rgba(242,92,5,0.2)]" id="btn-submit">
                    Submit Idea
                </button>
</div>
</div>
</header>



<main className="flex-1 flex flex-col gap-8 w-full max-w-7xl mx-auto px-6 py-8 relative z-10" id="explore-view">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-white">Explore Ideas</h1>
<p className="text-sm text-gray-400 mt-1">Discover, vote, and fund the next big thing.</p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
<div className="relative w-full sm:w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-[#111622] border border-white/5 rounded-xl pl-9 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F25C05]/50 focus:ring-1 focus:ring-[#F25C05]/50 transition-all" placeholder="Search ideas..." type="text"/>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto">
<div className="relative flex-1 sm:w-auto">
<select className="w-full bg-[#111622] border border-white/5 rounded-xl px-4 py-2 pr-8 text-sm text-white appearance-none focus:outline-none focus:border-[#F25C05]/50 focus:ring-1 focus:ring-[#F25C05]/50 transition-all cursor-pointer">
<option>Trending</option>
<option>Newest</option>
<option>Most Funded</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="bg-[#111622] border border-white/5 hover:bg-white/10 text-white p-2 rounded-xl transition-colors flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:filter-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/5 transition-colors">All Categories</button>
<button className="px-3 py-1.5 rounded-lg bg-transparent hover:bg-white/5 text-gray-400 hover:text-white text-xs font-medium border border-transparent transition-colors">DeFi</button>
<button className="px-3 py-1.5 rounded-lg bg-transparent hover:bg-white/5 text-gray-400 hover:text-white text-xs font-medium border border-transparent transition-colors">AI &amp; Data</button>
<button className="px-3 py-1.5 rounded-lg bg-transparent hover:bg-white/5 text-gray-400 hover:text-white text-xs font-medium border border-transparent transition-colors">Gaming</button>
<button className="px-3 py-1.5 rounded-lg bg-transparent hover:bg-white/5 text-gray-400 hover:text-white text-xs font-medium border border-transparent transition-colors">Infrastructure</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="idea-card cursor-pointer group bg-[#111622] border border-white/5 hover:border-[#F25C05]/30 rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:shadow-[#F25C05]/5 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#F25C05]/0 to-[#F25C05]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-start justify-between relative z-10">
<span className="text-[10px] font-semibold tracking-wide uppercase text-[#F25C05] bg-[#F25C05]/10 border border-[#F25C05]/20 px-2 py-0.5 rounded">DeFi</span>
<span className="text-[10px] font-medium text-emerald-400 flex items-center gap-1.5 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Active
                    </span>
</div>
<div className="relative z-10">
<h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-[#F25C05] transition-colors leading-tight">Decentralized Yield Optimizer via Atomic Routing</h3>
<p className="text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed">Current automated yield farming strategies suffer from significant slippage and suboptimal routing paths across emerging DEXs.</p>
</div>

<div className="flex flex-col gap-1.5 mt-2 relative z-10">
<div className="flex justify-between items-center text-xs">
<span className="text-white font-medium">$45k <span className="text-gray-500 font-normal">/ $100k</span></span>
<span className="text-gray-400">45%</span>
</div>
<div className="w-full h-1.5 bg-[#0B0F19] rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-gradient-to-r from-[#F25C05] to-orange-400 w-[45%] rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5 relative z-10">
<img alt="Creator" className="w-6 h-6 rounded-full object-cover ring-1 ring-[#111622]" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<span className="text-xs text-gray-400 font-medium">Alex Chen</span>
<div className="ml-auto flex items-center gap-3 text-gray-500">
<div className="flex items-center gap-1 group/btn hover:text-white transition-colors"><iconify-icon icon="solar:chat-round-line-linear"></iconify-icon><span className="text-xs">28</span></div>
<div className="flex items-center gap-1 text-white group/btn hover:text-[#F25C05] transition-colors"><iconify-icon className="text-[#F25C05]" icon="solar:alt-arrow-up-linear"></iconify-icon><span className="text-xs font-medium">142</span></div>
</div>
</div>
</div>

<div className="idea-card cursor-pointer group bg-[#111622] border border-white/5 hover:border-white/20 rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1">
<div className="flex items-start justify-between">
<span className="text-[10px] font-semibold tracking-wide uppercase text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2 py-0.5 rounded">AI &amp; Data</span>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors leading-tight">Zero-Knowledge Machine Learning Oracle</h3>
<p className="text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed">Bringing off-chain AI inference on-chain without trusting the centralized compute provider using recursive ZK proofs.</p>
</div>
<div className="flex flex-col gap-1.5 mt-2">
<div className="flex justify-between items-center text-xs">
<span className="text-gray-500 font-medium">Voting Phase</span>
<span className="text-gray-400">3 days left</span>
</div>
</div>
<div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
<img alt="Creator" className="w-6 h-6 rounded-full object-cover ring-1 ring-[#111622]" src="https://i.pravatar.cc/150?u=a042581f4e29026704e"/>
<span className="text-xs text-gray-400 font-medium">Sarah J.</span>
<div className="ml-auto flex items-center gap-3 text-gray-500">
<div className="flex items-center gap-1 group/btn hover:text-white transition-colors"><iconify-icon icon="solar:chat-round-line-linear"></iconify-icon><span className="text-xs">12</span></div>
<div className="flex items-center gap-1 group/btn hover:text-blue-400 transition-colors"><iconify-icon icon="solar:alt-arrow-up-linear"></iconify-icon><span className="text-xs font-medium">89</span></div>
</div>
</div>
</div>

<div className="idea-card cursor-pointer group bg-[#111622] border border-white/5 hover:border-white/20 rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1">
<div className="flex items-start justify-between">
<span className="text-[10px] font-semibold tracking-wide uppercase text-purple-400 bg-purple-400/10 border border-purple-400/20 px-2 py-0.5 rounded">Gaming</span>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-purple-400 transition-colors leading-tight">Fully On-Chain Physics Engine</h3>
<p className="text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed">A deterministic physics engine written in Cairo to enable complex interactions and state updates in fully on-chain games.</p>
</div>
<div className="flex flex-col gap-1.5 mt-2">
<div className="flex justify-between items-center text-xs">
<span className="text-gray-500 font-medium">Ideation</span>
</div>
</div>
<div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
<img alt="Creator" className="w-6 h-6 rounded-full object-cover ring-1 ring-[#111622]" src="https://i.pravatar.cc/150?u=a042581f4e29026704f"/>
<span className="text-xs text-gray-400 font-medium">Marcus T.</span>
<div className="ml-auto flex items-center gap-3 text-gray-500">
<div className="flex items-center gap-1 group/btn hover:text-white transition-colors"><iconify-icon icon="solar:chat-round-line-linear"></iconify-icon><span className="text-xs">45</span></div>
<div className="flex items-center gap-1 text-white group/btn hover:text-purple-400 transition-colors"><iconify-icon className="text-purple-400" icon="solar:alt-arrow-up-linear"></iconify-icon><span className="text-xs font-medium">256</span></div>
</div>
</div>
</div>
</div>

<div className="flex justify-center mt-4">
<button className="bg-[#111622] border border-white/5 hover:bg-white/5 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors">
                Load More Ideas
            </button>
</div>
</main>



<main className="hidden flex-1 flex-col gap-8 z-10 w-full max-w-7xl mx-auto px-6 py-8 relative" id="detail-view">

<div className="flex items-center gap-2">
<button className="flex hover:text-white transition-colors text-sm text-gray-400 gap-2 items-center group" id="btn-back">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon>
                Back to Explore
            </button>
</div>
<div className="flex flex-col lg:flex-row gap-8">

<div className="flex-1 flex flex-col gap-8">

<section className="flex flex-col gap-6">

<div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden relative bg-[#1a2030] border border-white/5 flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#111622] to-[#111622]"></div>
<iconify-icon className="text-6xl text-blue-400 opacity-50 relative z-10" icon="solar:chart-square-linear"></iconify-icon>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<span className="text-xs font-semibold tracking-wide uppercase text-[#F25C05] bg-[#F25C05]/10 border border-[#F25C05]/20 px-2.5 py-1 rounded-md">DeFi</span>
<span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Fundraising Active
                            </span>
</div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">Decentralized Yield Optimizer via Atomic Routing</h1>
<div className="flex items-center gap-3 pt-2">
<img alt="Creator" className="w-8 h-8 rounded-full object-cover ring-2 ring-[#111622]" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="text-sm font-medium text-white">Alex Chen</span>
<iconify-icon className="text-blue-400 text-xs" icon="solar:verified-check-linear"></iconify-icon>
</div>
<span className="text-xs text-gray-500">@alexc • Created 2 days ago</span>
</div>
</div>
</div>
</section>

<section className="bg-[#111622] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col gap-6 text-gray-300">
<h2 className="text-xl font-semibold tracking-tight text-white">The Vision</h2>
<p className="text-sm leading-relaxed">
                        Current automated yield farming strategies suffer from significant slippage and suboptimal routing paths across emerging DEXs. This project proposes a novel approach to continuous atomic routing.
                    </p>
<h3 className="text-lg font-medium text-white mt-2">The Problem</h3>
<p className="text-sm leading-relaxed">
                        Liquidity providers frequently experience "impermanent loss" that outweighs their staking yields. Furthermore, moving positions between pools requires multiple transactions, costing excessive gas fees and exposing users to sandwich attacks.
                    </p>
<h3 className="text-lg font-medium text-white mt-2">The Solution</h3>
<p className="text-sm leading-relaxed">
                        By leveraging cross-chain state proofs and building a unified abstraction layer, our protocol routes capital atomically. We aim to build a fully decentralized smart contract suite that monitors liquidity density and autonomously rebalances portfolios.
                    </p>
</section>

<section className="flex flex-col gap-6">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-white">Discussions <span className="text-gray-500 font-normal ml-1">28</span></h2>
<div className="flex gap-2">
<button className="text-sm text-gray-400 hover:text-white font-medium">Top</button>
<span className="text-gray-600">/</span>
<button className="text-sm text-[#F25C05] font-medium">Newest</button>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center border border-white/10 text-gray-400">
<iconify-icon className="text-lg" icon="solar:user-linear"></iconify-icon>
</div>
<div className="flex-1 flex flex-col gap-3">
<textarea className="w-full bg-[#111622] border border-white/5 focus:border-[#F25C05]/50 focus:ring-1 focus:ring-[#F25C05]/50 rounded-xl p-3 text-sm text-white placeholder-gray-500 resize-none transition-all outline-none" placeholder="Share your thoughts on this idea..." rows="3"></textarea>
<div className="flex justify-end">
<button className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Post Comment</button>
</div>
</div>
</div>

<div className="flex flex-col gap-6 mt-4">

<article className="flex flex-col gap-3">
<div className="flex items-start gap-3">
<img alt="User" className="w-8 h-8 rounded-full object-cover mt-1" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="flex-1 flex flex-col gap-2">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-gray-200">Sarah Jenkins</span>
<span className="text-xs text-gray-500">2 hours ago</span>
</div>
<p className="text-sm text-gray-300 leading-relaxed">
                                        The atomic routing sounds great on paper, but how do you plan to mitigate RPC latency when cross-checking pool depths?
                                    </p>
<div className="flex items-center gap-4 text-gray-500">
<div className="flex items-center gap-1">
<button className="hover:text-[#F25C05] transition-colors"><iconify-icon className="text-base" icon="solar:alt-arrow-up-linear"></iconify-icon></button>
<span className="text-xs font-medium text-gray-400">14</span>
<button className="hover:text-blue-400 transition-colors"><iconify-icon className="text-base" icon="solar:alt-arrow-down-linear"></iconify-icon></button>
</div>
<button className="flex items-center gap-1.5 text-xs font-medium hover:text-white transition-colors">
<iconify-icon className="text-sm" icon="solar:reply-linear"></iconify-icon> Reply
                                        </button>
</div>
</div>
</div>
</article>
</div>
<button className="text-sm text-gray-400 hover:text-white font-medium py-2 transition-colors">Load more comments...</button>
</section>
</div>

<aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6">

<div className="bg-[#111622] border border-white/5 rounded-2xl p-6 flex flex-col gap-6 shadow-xl shadow-black/20">
<div className="flex items-center gap-2 border-b border-white/5 pb-4">
<div className="w-8 h-8 rounded-lg bg-[#F25C05]/10 flex items-center justify-center text-[#F25C05]">
<iconify-icon className="text-xl" icon="solar:safe-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Investment Vault</h3>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Raised</span>
<span className="text-xl font-semibold text-white">$45,000</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Max Cap</span>
<span className="text-xl font-semibold text-gray-300">$100,000</span>
</div>
<div className="col-span-2 bg-[#0B0F19] rounded-lg p-3 border border-white/5 flex items-center justify-between">
<span className="text-xs text-gray-400 font-medium">Est. Token Price</span>
<span className="text-sm text-white font-medium">1 USDC = 20 YLD</span>
</div>
</div>

<div className="flex flex-col gap-2 w-full pt-2">
<div className="flex justify-between items-end">
<span className="text-xs text-white font-medium">45% Funded</span>
<span className="text-xs text-gray-500 font-medium">12 days left</span>
</div>
<div className="w-full h-2.5 bg-[#0B0F19] rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-gradient-to-r from-[#F25C05] to-orange-400 w-[45%] rounded-full relative">
<div className="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
</div>
</div>
</div>
<button className="w-full bg-[#F25C05] hover:bg-[#e05505] text-white py-3 rounded-xl text-sm font-semibold transition-colors shadow-[0_0_20px_rgba(242,92,5,0.2)] flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon> Participate Now
                    </button>
<p className="text-xs text-center text-gray-500 leading-relaxed">
                        Funds are locked in a smart contract. If the cap isn't reached, investments are refunded.
                    </p>
</div>

<div className="bg-[#111622] border border-white/5 rounded-2xl p-6 flex flex-col gap-4">
<h3 className="text-sm font-semibold text-white uppercase tracking-wider">Recent Backers</h3>
<div className="flex flex-wrap items-center gap-x-1 gap-y-2">
<div className="flex -space-x-2 overflow-hidden py-1">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-[#111622] object-cover" src="https://i.pravatar.cc/150?u=1"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-[#111622] object-cover" src="https://i.pravatar.cc/150?u=2"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-[#111622] object-cover" src="https://i.pravatar.cc/150?u=3"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-[#111622] object-cover" src="https://i.pravatar.cc/150?u=4"/>
</div>
<div className="text-xs text-gray-400 font-medium ml-2">+ 142 others</div>
</div>
</div>

<button className="w-full bg-[#111622] hover:bg-white/5 border border-white/5 hover:border-white/10 text-white py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 group" id="btn-share">
<iconify-icon className="text-lg text-gray-400 group-hover:text-white transition-colors" icon="solar:share-circle-linear"></iconify-icon>
                    Share this Idea
                </button>
</aside>
</div>
</main>




<div className="hidden fixed inset-0 z-50 items-center justify-center p-4" id="modal-submit">
<div className="modal-backdrop absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-sm cursor-pointer"></div>
<div className="relative w-full max-w-lg bg-[#111622] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
<div className="flex items-center justify-between p-5 border-b border-white/5 bg-[#151b29]">
<h3 className="text-lg font-semibold tracking-tight text-white">Submit New Idea</h3>
<button className="close-modal text-gray-400 hover:text-white transition-colors"><iconify-icon className="text-xl pointer-events-none" icon="solar:close-circle-linear"></iconify-icon></button>
</div>
<form className="flex flex-col">
<div className="p-6 flex flex-col gap-5">
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Project Title</label>
<input className="w-full bg-[#0B0F19] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#F25C05]/50 focus:ring-1 focus:ring-[#F25C05]/50 transition-all" placeholder="E.g. Next-Gen DEX..." type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Category</label>
<div className="relative">
<select className="w-full bg-[#0B0F19] border border-white/5 rounded-xl px-4 py-2.5 pr-10 text-sm text-white appearance-none focus:outline-none focus:border-[#F25C05]/50 focus:ring-1 focus:ring-[#F25C05]/50 transition-all cursor-pointer">
<option>DeFi</option>
<option>AI &amp; Data</option>
<option>Gaming</option>
<option>Infrastructure</option>
<option>Social</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Pitch Description (Markdown)</label>
<textarea className="w-full bg-[#0B0F19] border border-white/5 rounded-xl p-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#F25C05]/50 focus:ring-1 focus:ring-[#F25C05]/50 transition-all resize-none" placeholder="Describe the problem, your solution, and vision..." rows="5"></textarea>
</div>
</div>
<div className="p-5 border-t border-white/5 bg-[#151b29] flex items-center justify-end gap-3">
<button className="close-modal px-4 py-2 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors" type="button">Cancel</button>
<button className="bg-[#F25C05] hover:bg-[#e05505] text-white px-5 py-2 rounded-xl text-sm font-medium transition-colors" type="submit">Publish Idea</button>
</div>
</form>
</div>
</div>

<div className="hidden fixed inset-0 z-50 items-center justify-center p-4" id="modal-share">
<div className="modal-backdrop absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-sm cursor-pointer"></div>
<div className="relative w-full max-w-sm bg-[#111622] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden p-6 gap-6">
<button className="close-modal absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"><iconify-icon className="text-xl pointer-events-none" icon="solar:close-circle-linear"></iconify-icon></button>
<div className="flex flex-col gap-2 text-center mt-2">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 mx-auto flex items-center justify-center text-gray-300 mb-2">
<iconify-icon className="text-2xl" icon="solar:link-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Share this Idea</h3>
<p className="text-sm text-gray-400">Invite others to check out this project and contribute.</p>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 bg-[#0B0F19] border border-white/5 p-1 rounded-xl">
<input className="w-full bg-transparent border-none text-sm text-gray-300 px-3 py-2 outline-none" readonly="" type="text" value="https://ideas.app/ideas/yield-opt"/>
<button className="bg-white/5 hover:bg-white/10 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap">
<iconify-icon icon="solar:copy-linear"></iconify-icon> Copy
                    </button>
</div>
<button className="w-full bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] border border-[#1DA1F2]/20 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon> Share on Twitter
                </button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 items-center justify-center p-4" id="modal-wallet">
<div className="modal-backdrop absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-sm cursor-pointer"></div>
<div className="relative w-full max-w-sm bg-[#111622] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
<div className="flex items-center justify-between p-5 border-b border-white/5">
<h3 className="text-lg font-semibold tracking-tight text-white">Connect Wallet</h3>
<button className="close-modal text-gray-400 hover:text-white transition-colors"><iconify-icon className="text-xl pointer-events-none" icon="solar:close-circle-linear"></iconify-icon></button>
</div>
<div className="p-6 flex flex-col gap-3">
<p className="text-xs text-gray-400 mb-2">Select your Solana wallet to continue.</p>
<button className="flex items-center justify-between w-full p-4 rounded-xl border border-white/5 bg-[#0B0F19] hover:border-[#ab9ff2] hover:bg-[#ab9ff2]/5 transition-all group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#ab9ff2]/20 flex items-center justify-center text-[#ab9ff2]">
<iconify-icon className="text-xl" icon="solar:ghost-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-white group-hover:text-[#ab9ff2] transition-colors">Phantom</span>
</div>
<span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded font-medium">Detected</span>
</button>
<button className="flex items-center justify-between w-full p-4 rounded-xl border border-white/5 bg-[#0B0F19] hover:border-orange-500 hover:bg-orange-500/5 transition-all group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-orange-500">
<iconify-icon className="text-xl" icon="solar:sun-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-white group-hover:text-orange-500 transition-colors">Solflare</span>
</div>
</button>
</div>
</div>
</div>



    </>
  );
}
