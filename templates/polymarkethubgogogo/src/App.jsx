import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const { useState, useMemo, useEffect } = React;

        // Data Structure Definition
        const categories = [
            { id: 'infra', name: 'L1/L2 Infrastructure', icon: 'solar:server-square-linear' },
            { id: 'orderbook', name: 'Orderbook DEX', icon: 'solar:graph-up-linear' },
            { id: 'amm', name: 'AMM Markets', icon: 'solar:chart-square-linear' },
            { id: 'ai', name: 'AI Agents', icon: 'solar:cpu-bolt-linear' },
            { id: 'rwe', name: 'Real-world Events', icon: 'solar:globe-linear' },
        ];

        const featuredItems = [
            {
                id: 1,
                type: 'project',
                title: 'PolyMarket V2',
                subtitle: 'Leading the volume charts with new UI',
                image: 'solar:graph-new-linear',
                link: '#'
            },
            {
                id: 2,
                type: 'article',
                title: 'The Future of Truth',
                subtitle: 'Deep dive into decentralized oracles',
                image: 'solar:document-text-linear',
                link: '#'
            },
            {
                id: 3,
                type: 'project',
                title: 'Azuro Protocol',
                subtitle: 'Liquidity layer for betting apps',
                image: 'solar:layers-minimalistic-linear',
                link: '#'
            }
        ];

        // Sample Data Repository
        const projectsData = [
            {
                name: "Polymarket",
                category: "Real-world Events",
                description: "The world's largest information markets platform. Bet on politics, sports, and crypto.",
                tips: "Highest liquidity for US Elections. Use USDC on Polygon.",
                link: "#",
                logoUrl: "solar:crown-star-linear"
            },
            {
                name: "Drift Protocol",
                category: "Orderbook DEX",
                description: "Perpetual futures exchange on Solana with prediction market verticals.",
                tips: "Great for hedging specific asset price risks.",
                link: "#",
                logoUrl: "solar:shield-star-linear"
            },
            {
                name: "Gnosis",
                category: "L1/L2 Infrastructure",
                description: "Infrastructure for prediction markets and decentralized governance.",
                tips: "Conditional tokens framework is the industry standard.",
                link: "#",
                logoUrl: "solar:code-circle-linear"
            },
            {
                name: "Omen",
                category: "AMM Markets",
                description: "Decentralized prediction market platform governed by DXdao.",
                tips: "Uses Realit.io for dispute resolution.",
                link: "#",
                logoUrl: "solar:eye-linear"
            },
            {
                name: "Augur",
                category: "AMM Markets",
                description: "One of the original decentralized prediction market protocols.",
                tips: "Check liquidity depth before large trades.",
                link: "#",
                logoUrl: "solar:history-linear"
            },
            {
                name: "Butter",
                category: "AI Agents",
                description: "AI-driven prediction agents interacting with markets autonomously.",
                tips: "Experimental: Follow agent signals cautiously.",
                link: "#",
                logoUrl: "solar:bot-linear"
            },
            {
                name: "Azuro",
                category: "L1/L2 Infrastructure",
                description: "Liquidity layer for on-chain prediction markets.",
                tips: "Best for developers building frontend apps.",
                link: "#",
                logoUrl: "solar:widget-linear"
            },
            {
                name: "Kalshi",
                category: "Real-world Events",
                description: "Federally regulated prediction market exchange.",
                tips: "KYC required. US residents only.",
                link: "#",
                logoUrl: "solar:bill-check-linear"
            }
        ];

        // Component: Icon Helper
        const Icon = ({ icon, className }) => (
            <iconify-icon icon={icon} class={className} stroke-width="1.5"></iconify-icon>
        );

        // Component: Card (Featured)
        const FeaturedCard = ({ item }) => (
            <div className="glass-panel group relative min-w-[280px] sm:min-w-[320px] p-6 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 snap-center">
                <div className="flex flex-col h-full justify-between">
                    <div>
                        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 mb-4 group-hover:bg-neutral-700 transition-colors">
                            <Icon icon={item.image} className="text-xl" />
                        </div>
                        <h3 className="text-lg font-medium tracking-tight text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-neutral-400 font-light">{item.subtitle}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs font-medium text-indigo-400 opacity-80 group-hover:opacity-100 transition-opacity">
                        <span>{item.type === 'project' ? 'Start Trading' : 'Read Article'}</span>
                        <Icon icon="solar:arrow-right-linear" />
                    </div>
                </div>
            </div>
        );

        // Component: Project List Item
        const ProjectCard = ({ project }) => (
            <div className="glass-panel p-5 rounded-xl card-hover flex flex-col h-full group">
                <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-200">
                            <Icon icon={project.logoUrl} className="text-xl" />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-neutral-100 tracking-tight">{project.name}</h3>
                            <span className="text-xs text-neutral-500 border border-neutral-800 px-1.5 py-0.5 rounded bg-neutral-900/50">{project.category}</span>
                        </div>
                    </div>
                    <a href={project.link} className="text-neutral-500 hover:text-white transition-colors">
                        <Icon icon="solar:link-circle-linear" className="text-xl" />
                    </a>
                </div>
                
                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-4 flex-grow">
                    {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-dashed border-neutral-800">
                    <div className="flex gap-2 items-start">
                        <div className="text-amber-400/80 mt-0.5 shrink-0">
                            <Icon icon="solar:lightbulb-linear" className="text-sm" />
                        </div>
                        <p className="text-xs text-amber-500/90 font-medium">
                            {project.tips}
                        </p>
                    </div>
                </div>
            </div>
        );

        // Main App Component
        const App = () => {
            const [view, setView] = useState('home'); // home, category
            const [selectedCategoryName, setSelectedCategoryName] = useState(null);
            const [searchQuery, setSearchQuery] = useState('');

            // Search Logic
            const filteredProjects = useMemo(() => {
                let filtered = projectsData;
                
                if (searchQuery) {
                    filtered = filtered.filter(p => 
                        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.category.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                } else if (view === 'category' && selectedCategoryName) {
                    filtered = filtered.filter(p => p.category === selectedCategoryName);
                }

                // Sorting Logic: Ascending A-Z by Name
                return filtered.sort((a, b) => a.name.localeCompare(b.name));
            }, [searchQuery, view, selectedCategoryName]);

            const handleCategoryClick = (catName) => {
                setSelectedCategoryName(catName);
                setView('category');
                setSearchQuery('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };

            const goHome = () => {
                setView('home');
                setSelectedCategoryName(null);
                setSearchQuery('');
            };

            const handleSearch = (e) => {
                setSearchQuery(e.target.value);
                if (e.target.value.length > 0) {
                    setView('search');
                } else {
                    setView(selectedCategoryName ? 'category' : 'home');
                }
            };

            return (
                <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col min-h-screen">
                    
                    {/* Header */}
                    <header className="flex items-center justify-between mb-12">
                        <div 
                            className="flex items-center gap-3 cursor-pointer select-none" 
                            onClick={goHome}
                        >
                            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black">
                                <Icon icon="solar:chart-2-linear" className="text-xl" />
                            </div>
                            <h1 className="text-lg font-medium tracking-tight text-white">
                                Prediction<span className="text-neutral-500">Hub</span>
                            </h1>
                        </div>
                        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-400">
                            <a href="#" className="hover:text-white transition-colors">Submit</a>
                            <a href="#" className="hover:text-white transition-colors">About</a>
                        </nav>
                    </header>

                    {/* Search Bar */}
                    <div className="relative mb-12 group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Icon icon="solar:magnifer-linear" className="text-neutral-500 text-lg group-focus-within:text-indigo-400 transition-colors" />
                        </div>
                        <input 
                            type="text" 
                            className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-light"
                            placeholder="Search markets, protocols, or events (Cmd+K)"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                            <span className="text-xs text-neutral-700 border border-neutral-800 rounded px-1.5 py-0.5">/</span>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <main className="flex-grow">
                        
                        {/* VIEW: HOME */}
                        {view === 'home' && (
                            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                
                                {/* Categories Grid (Now First) */}
                                <section>
                                    <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-6">Explore by Category</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {categories.map(cat => (
                                            <div 
                                                key={cat.id}
                                                onClick={() => handleCategoryClick(cat.name)}
                                                className="glass-panel p-6 rounded-xl cursor-pointer card-hover group"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-indigo-300 mb-4 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300">
                                                    <Icon icon={cat.icon} className="text-xl" />
                                                </div>
                                                <h3 className="text-base font-medium text-neutral-200 tracking-tight mb-1">{cat.name}</h3>
                                                <div className="flex items-center text-xs text-neutral-500 group-hover:text-indigo-300 transition-colors">
                                                    <span>View Projects</span>
                                                    <Icon icon="solar:alt-arrow-right-linear" className="ml-1" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Featured Section (Now Second with new Title) */}
                                <section>
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-widest">What's Popping</h2>
                                        <div className="flex gap-2 text-neutral-600">
                                            <Icon icon="solar:arrow-left-linear" className="cursor-pointer hover:text-white transition-colors" />
                                            <Icon icon="solar:arrow-right-linear" className="cursor-pointer hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                                        {featuredItems.map(item => (
                                            <FeaturedCard key={item.id} item={item} />
                                        ))}
                                    </div>
                                </section>

                            </div>
                        )}

                        {/* VIEW: CATEGORY DETAIL or SEARCH RESULTS */}
                        {(view === 'category' || view === 'search') && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div className="flex items-center gap-2 mb-8 text-sm">
                                    <button onClick={goHome} className="text-neutral-500 hover:text-white transition-colors flex items-center gap-1">
                                        <Icon icon="solar:arrow-left-linear" />
                                        Back
                                    </button>
                                    <span className="text-neutral-700">/</span>
                                    <span className="text-white font-medium">
                                        {view === 'search' ? 'Search Results' : selectedCategoryName}
                                    </span>
                                </div>

                                {filteredProjects.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {filteredProjects.map((project, idx) => (
                                            <ProjectCard key={idx} project={project} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-24 border border-dashed border-neutral-800 rounded-2xl bg-neutral-900/20">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 text-neutral-600 mb-4">
                                            <Icon icon="solar:magnifer-linear" className="text-xl" />
                                        </div>
                                        <h3 className="text-base font-medium text-white mb-2">No projects found</h3>
                                        <p className="text-sm text-neutral-500">Try adjusting your search terms.</p>
                                    </div>
                                )}
                            </div>
                        )}

                    </main>

                    {/* Footer */}
                    <footer className="mt-24 pt-8 border-t border-neutral-900">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                            <div className="flex gap-6">
                                <a href="https://twitter.com/YourTwitter" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                                    <Icon icon="solar:brand-twitter-linear" />
                                    <span className="group-hover:underline decoration-neutral-700 underline-offset-4">@YourTwitter</span>
                                </a>
                                <a href="mailto:contact@example.com" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                                    <Icon icon="solar:letter-linear" />
                                    <span className="group-hover:underline decoration-neutral-700 underline-offset-4">Contact Us</span>
                                </a>
                            </div>
                            <div className="text-xs text-neutral-600 text-center sm:text-right font-light">
                                <p>&copy; 2024 Prediction Hub. All rights reserved.</p>
                                <p className="mt-1 opacity-60">Disclaimer: We provide information only, not financial advice.</p>
                            </div>
                        </div>
                    </footer>

                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="" id="root"><div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col min-h-screen"><header className="flex mb-12 items-center justify-between"><div className="flex items-center gap-3 cursor-pointer select-none"><div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black"><iconify-icon className="text-xl" icon="solar:chart-2-linear" strokeWidth="1.5"></iconify-icon></div><h1 className="text-lg font-medium tracking-tight text-white">Prediction<span className="text-neutral-500">Hub</span></h1></div><nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-400"><a className="hover:text-white transition-colors" href="#">Submit</a><a className="hover:text-white transition-colors" href="#">About</a></nav></header><div className="relative mb-12 group"><div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><iconify-icon className="text-neutral-500 text-lg group-focus-within:text-indigo-400 transition-colors" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon></div><input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-light" placeholder="Search markets, protocols, or events (Cmd+K)" type="text" value=""/><div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none"><span className="text-xs text-neutral-700 border border-neutral-800 rounded px-1.5 py-0.5">/</span></div></div><main className="flex-grow"><div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500"><section><h2 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-6">Explore by Category</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><div className="glass-panel p-6 rounded-xl cursor-pointer card-hover group"><div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-indigo-300 mb-4 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300"><iconify-icon className="text-xl" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon></div><h3 className="text-base font-medium text-neutral-200 tracking-tight mb-1">L1/L2 Infrastructure</h3><div className="flex items-center text-xs text-neutral-500 group-hover:text-indigo-300 transition-colors"><span>View Projects</span><iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon></div></div><div className="glass-panel p-6 rounded-xl cursor-pointer card-hover group"><div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-indigo-300 mb-4 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300"><iconify-icon className="text-xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon></div><h3 className="text-base font-medium text-neutral-200 tracking-tight mb-1">Orderbook DEX</h3><div className="flex items-center text-xs text-neutral-500 group-hover:text-indigo-300 transition-colors"><span>View Projects</span><iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon></div></div><div className="glass-panel p-6 rounded-xl cursor-pointer card-hover group"><div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-indigo-300 mb-4 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300"><iconify-icon className="text-xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon></div><h3 className="text-base font-medium text-neutral-200 tracking-tight mb-1">AMM Markets</h3><div className="flex items-center text-xs text-neutral-500 group-hover:text-indigo-300 transition-colors"><span>View Projects</span><iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon></div></div><div className="glass-panel p-6 rounded-xl cursor-pointer card-hover group"><div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-indigo-300 mb-4 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300"><iconify-icon className="text-xl" icon="solar:cpu-bolt-linear" strokeWidth="1.5"></iconify-icon></div><h3 className="text-base font-medium text-neutral-200 tracking-tight mb-1">AI Agents</h3><div className="flex items-center text-xs text-neutral-500 group-hover:text-indigo-300 transition-colors"><span>View Projects</span><iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon></div></div><div className="glass-panel p-6 rounded-xl cursor-pointer card-hover group"><div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-indigo-300 mb-4 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300"><iconify-icon className="text-xl" icon="solar:globe-linear" strokeWidth="1.5"></iconify-icon></div><h3 className="text-base font-medium text-neutral-200 tracking-tight mb-1">Real-world Events</h3><div className="flex items-center text-xs text-neutral-500 group-hover:text-indigo-300 transition-colors"><span>View Projects</span><iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon></div></div></div></section><section><div className="flex items-center justify-between mb-6"><h2 className="text-sm font-medium text-neutral-400 uppercase tracking-widest">What's Popping</h2><div className="flex gap-2 text-neutral-600"><iconify-icon className="cursor-pointer hover:text-white transition-colors" icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon><iconify-icon className="cursor-pointer hover:text-white transition-colors" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></div></div><div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"><div className="glass-panel group relative min-w-[280px] sm:min-w-[320px] p-6 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 snap-center"><div className="flex flex-col h-full justify-between"><div><div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 mb-4 group-hover:bg-neutral-700 transition-colors"><iconify-icon className="text-xl" icon="solar:graph-new-linear" strokeWidth="1.5"></iconify-icon></div><h3 className="text-lg font-medium tracking-tight text-white mb-1">PolyMarket V2</h3><p className="text-sm text-neutral-400 font-light">Leading the volume charts with new UI</p></div><div className="mt-6 flex items-center gap-2 text-xs font-medium text-indigo-400 opacity-80 group-hover:opacity-100 transition-opacity"><span>Start Trading</span><iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></div></div></div><div className="glass-panel group relative min-w-[280px] sm:min-w-[320px] p-6 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 snap-center"><div className="flex flex-col h-full justify-between"><div><div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 mb-4 group-hover:bg-neutral-700 transition-colors"><iconify-icon className="text-xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon></div><h3 className="text-lg font-medium tracking-tight text-white mb-1">The Future of Truth</h3><p className="text-sm text-neutral-400 font-light">Deep dive into decentralized oracles</p></div><div className="mt-6 flex items-center gap-2 text-xs font-medium text-indigo-400 opacity-80 group-hover:opacity-100 transition-opacity"><span>Read Article</span><iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></div></div></div><div className="glass-panel group relative min-w-[280px] sm:min-w-[320px] p-6 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 snap-center"><div className="flex flex-col h-full justify-between"><div><div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 mb-4 group-hover:bg-neutral-700 transition-colors"><iconify-icon className="text-xl" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon></div><h3 className="text-lg font-medium tracking-tight text-white mb-1">Azuro Protocol</h3><p className="text-sm text-neutral-400 font-light">Liquidity layer for betting apps</p></div><div className="mt-6 flex items-center gap-2 text-xs font-medium text-indigo-400 opacity-80 group-hover:opacity-100 transition-opacity"><span>Start Trading</span><iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></div></div></div></div></section></div></main><footer className="mt-24 pt-8 border-t border-neutral-900"><div className="flex flex-col sm:flex-row justify-between items-center gap-6"><div className="flex gap-6"><a className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2 text-sm group" href="https://twitter.com/YourTwitter"><iconify-icon icon="solar:brand-twitter-linear" strokeWidth="1.5"></iconify-icon><span className="group-hover:underline decoration-neutral-700 underline-offset-4">@YourTwitter</span></a><a className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2 text-sm group" href="mailto:contact@example.com"><iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon><span className="group-hover:underline decoration-neutral-700 underline-offset-4">Contact Us</span></a></div><div className="text-xs text-neutral-600 text-center sm:text-right font-light"><p>© 2024 Prediction Hub. All rights reserved.</p><p className="mt-1 opacity-60">Disclaimer: We provide information only, not financial advice.</p></div></div></footer></div></div>


    </>
  );
}
