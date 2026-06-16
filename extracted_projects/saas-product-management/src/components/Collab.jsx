import React, { useState } from 'react';

export default function Collab() {
  const [activeTab, setActiveTab] = useState('docs');

  return (
    <section className="collab-section bg-[#050505] w-full border-b border-white/5 overflow-hidden pt-24">
        <div className="collab-container flex flex-col md:flex-row gap-12 md:gap-24 items-center w-full max-w-[1200px] mx-auto px-6 mb-16">
            
            <div className="flex-1 max-w-md z-10 reveal-left active">
                <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-10 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                    Real-time artifacts<br/>for better decisions
                </h2>
                
                <div className="flex flex-col relative border-l border-white/10" id="collab-tabs">
                    <button 
                        onClick={() => setActiveTab('docs')}
                        className={`tab-btn text-left px-6 py-4 text-lg font-medium transition-all duration-300 border-l-2 -ml-[1px] group flex items-center gap-3 rounded-r-lg ${activeTab === 'docs' ? 'text-white border-[#4DAF73] bg-white/5' : 'text-[#8A8F98] border-transparent hover:text-gray-300 hover:bg-white/[0.02]'}`}
                    >
                        <iconify-icon icon="solar:document-linear" width="20" height="20" className="opacity-70 group-hover:opacity-100 transition-opacity"></iconify-icon>
                        Collaborative documents
                    </button>
                    
                    <button 
                        onClick={() => setActiveTab('comments')}
                        className={`tab-btn text-left px-6 py-4 text-lg font-medium transition-all duration-300 border-l-2 -ml-[1px] group flex items-center gap-3 rounded-r-lg ${activeTab === 'comments' ? 'text-white border-[#4DAF73] bg-white/5' : 'text-[#8A8F98] border-transparent hover:text-gray-300 hover:bg-white/[0.02]'}`}
                    >
                        <iconify-icon icon="solar:chat-round-line-linear" width="20" height="20" className="opacity-70 group-hover:opacity-100 transition-opacity"></iconify-icon>
                        Inline comments
                    </button>
                </div>
            </div>

            <div className="flex-[1.4] w-full relative h-[460px] reveal-right delay-200 active perspective-[1000px]">
                
                {/* View 1: Docs */}
                <div id="view-docs" className={`tab-view absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] origin-bottom ${activeTab === 'docs' ? 'opacity-100 translate-y-0 scale-100 z-10' : 'opacity-0 translate-y-8 scale-95 pointer-events-none -z-10'}`}>
                    <div className="w-full h-full bg-[#0F1011] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col relative group">
                        <div className="h-10 border-b border-white/5 bg-[#141517] flex items-center px-4 justify-between select-none">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm"></div>
                                <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm"></div>
                            </div>
                            <div className="text-xs text-[#666] font-medium flex items-center gap-1.5 opacity-60">
                                <iconify-icon icon="solar:document-linear" width="12" height="12"></iconify-icon>
                                specs_v2.md
                            </div>
                            <div className="w-12"></div>
                        </div>
                        
                        <div className="p-8 font-sans text-[#A1A1AA] leading-relaxed text-[15px]">
                            <div className="text-[11px] font-bold text-[#4DAF73] mb-2 uppercase tracking-widest">Draft</div>
                            <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">Product Specifications 2.0</h3>
                            <p className="mb-4">The new sync engine should handle <span className="text-white bg-[#4DAF73]/20 px-1 rounded relative cursor-text transition-colors hover:bg-[#4DAF73]/30">offline states<span className="absolute -top-7 left-0 bg-[#4DAF73] text-[10px] text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider shadow-lg transform transition-transform duration-300 scale-100 flex items-center gap-1">zoe <span className="w-1 h-1 bg-white rounded-full animate-pulse"></span></span></span> gracefully without data loss.</p>
                            <p className="mb-4 relative">
                                We need to ensure that the <span className="text-white">conflict resolution</span> strategy prioritizes user intent over server timestamp.
                                <span className="absolute inline-block w-0.5 h-5 bg-[#5E6AD2] ml-0.5 animate-pulse align-middle" style={{ animationDuration: '1s' }}></span>
                                <span className="absolute -top-7 ml-1 bg-[#5E6AD2] text-[10px] text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">alex <span className="w-1 h-1 bg-white rounded-full animate-pulse"></span></span>
                            </p>
                            <div className="p-4 bg-[#1A1B1E] rounded-lg border border-white/5 mt-6 flex items-start gap-3">
                                <div className="w-1 h-10 bg-[#E2B340] rounded-full"></div>
                                <div>
                                    <div className="text-xs text-[#E2B340] font-bold mb-1 uppercase tracking-wider">Note</div>
                                    <p className="text-xs text-[#CCC]">Remember to update the WebSocket protocol to support binary frames for efficiency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* View 2: Comments */}
                <div id="view-comments" className={`tab-view absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] origin-bottom ${activeTab === 'comments' ? 'opacity-100 translate-y-0 scale-100 z-10' : 'opacity-0 translate-y-8 scale-95 pointer-events-none -z-10'}`}>
                    <div className="w-full h-full bg-[#0F1011] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col relative">
                        <div className="h-10 border-b border-white/5 bg-[#141517] flex items-center px-4 justify-between select-none">
                            <div className="flex gap-2 opacity-50">
                                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                            </div>
                            <div className="text-xs text-[#666] font-mono flex items-center gap-2">
                                <iconify-icon icon="solar:code-linear" width="12" height="12" className="opacity-50"></iconify-icon>
                                auth_middleware.ts
                            </div>
                            <div className="w-12"></div>
                        </div>

                        <div className="p-6 font-mono text-[13px] leading-loose text-[#888] overflow-hidden relative h-full bg-[#0F1011]">
                            <div className="flex group/line hover:bg-white/[0.02]"><span className="w-8 text-[#444] select-none text-right mr-4">1</span> <span><span className="text-[#C678DD]">export</span> <span className="text-[#C678DD]">const</span> <span className="text-[#61AFEF]">verifySession</span> = <span className="text-[#C678DD]">async</span> (req, res) =&gt; {'{'}</span></div>
                            <div className="flex group/line hover:bg-white/[0.02]"><span className="w-8 text-[#444] select-none text-right mr-4">2</span> <span>&nbsp;&nbsp;<span className="text-[#C678DD]">const</span> token = req.headers[<span className="text-[#98C379]">'authorization'</span>];</span></div>
                            
                            <div className="flex relative bg-[#4DAF73]/10 -mx-6 px-6 border-l-2 border-[#4DAF73]">
                                <span className="w-8 text-[#444] select-none text-right mr-4">3</span> <span>&nbsp;&nbsp;<span className="text-[#C678DD]">if</span> (!token) <span className="text-[#C678DD]">throw</span> <span className="text-[#C678DD]">new</span> <span className="text-[#E5C07B]">Error</span>(<span className="text-[#98C379]">'No token provided'</span>);</span>
                                
                                <div className="absolute left-1/3 top-full mt-4 w-[280px] bg-[#1A1B1E] border border-white/10 rounded-lg shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] p-3 z-10 animate-[float-in-up_0.4s_ease-out_forwards]">
                                    <div className="flex items-start gap-3">
                                        <img src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=64&h=64&fit=crop" className="w-8 h-8 rounded-full ring-2 ring-[#0F1011] object-cover" alt="Sarah" />
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-sm font-semibold text-white">Sarah</span>
                                                <span className="text-[10px] text-[#666]">2m ago</span>
                                            </div>
                                            <p className="text-xs text-[#CCC] leading-relaxed">Should we return a 401 status code here instead of throwing a generic error?</p>
                                        </div>
                                    </div>
                                    <div className="mt-3 flex gap-2 pt-2 border-t border-white/5">
                                        <input type="text" placeholder="Reply..." className="flex-1 bg-transparent border-none text-xs text-white focus:outline-none placeholder-white/20" />
                                        <button className="bg-[#5E6AD2] hover:bg-[#4b55a8] text-white px-3 py-1 rounded text-xs font-medium transition-colors">Send</button>
                                    </div>
                                    <div className="absolute -top-1.5 left-8 w-3 h-3 bg-[#1A1B1E] border-l border-t border-white/10 transform rotate-45"></div>
                                </div>
                            </div>
                            
                            <div className="flex group/line hover:bg-white/[0.02]"><span className="w-8 text-[#444] select-none text-right mr-4">4</span> <span>&nbsp;&nbsp;<span className="text-[#C678DD]">const</span> session = <span className="text-[#C678DD]">await</span> db.sessions.<span className="text-[#61AFEF]">find</span>(token);</span></div>
                            <div className="flex group/line hover:bg-white/[0.02]"><span className="w-8 text-[#444] select-none text-right mr-4">5</span> <span>&nbsp;&nbsp;<span className="text-[#C678DD]">return</span> session;</span></div>
                            <div className="flex group/line hover:bg-white/[0.02]"><span className="w-8 text-[#444] select-none text-right mr-4">6</span> <span>{'}'};</span></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="flex flex-wrap gap-8 justify-between max-w-[1200px] mx-auto px-6 pb-24 reveal delay-300 active border-t border-white/5 pt-12">
            <div className="flex-1 min-w-[200px]">
                <h4 className="text-white font-medium mb-2">Initiatives</h4>
                <p className="text-[#8A8F98] text-[15px]">Coordinate strategic product efforts.</p>
            </div>
            <div className="flex-1 min-w-[200px]">
                <h4 className="text-white font-medium mb-2">Cross-team projects</h4>
                <p className="text-[#8A8F98] text-[15px]">Collaborate across departments.</p>
            </div>
            <div className="flex-1 min-w-[200px]">
                <h4 className="text-white font-medium mb-2">Milestones</h4>
                <p className="text-[#8A8F98] text-[15px]">Break projects down into phases.</p>
            </div>
            <div className="flex-1 min-w-[200px]">
                <h4 className="text-white font-medium mb-2">Progress insights</h4>
                <p className="text-[#8A8F98] text-[15px]">Track scope and velocity automatically.</p>
            </div>
        </div>
    </section>
  );
}