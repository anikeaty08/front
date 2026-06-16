import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed flex transition-all duration-500 hover:border-white/10 hover:bg-[#050505]/80 group/nav z-[1000] md:px-12 bg-[#050505]/60 w-full border-white/5 border-b pt-4 pr-6 pb-4 pl-6 top-0 left-0 backdrop-blur-xl items-center justify-between">
      <Link to="/home" className="bg-center hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-80 w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22a501b8-fdc0-4b37-85e9-0367b65fcc58_1600w.png)] bg-cover rounded relative z-[1002]"></Link>

      <ul className="nav-links hidden lg:flex items-center gap-1 bg-[#ffffff0a] p-1.5 rounded-full border border-white/5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:bg-[#ffffff0f]">
        
        <li className="relative group">
          <Link to="/product" className="text-[13px] transition-all duration-300 hover:text-[#F7F8F8] hover:bg-white/10 flex items-center gap-2 overflow-hidden font-medium text-[#8A8F98] rounded-full py-2 px-5 relative cursor-pointer">
            <span className="z-10 relative">Product</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-[0_0_8px_#5E6AD2]"></div>
          </Link>
          
          <div className="absolute top-full left-1/2 -translate-x-[40%] pt-4 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden p-2 backdrop-blur-3xl">
                <div className="flex gap-2 h-full">
                    <div className="w-[260px] flex flex-col gap-1">
                        <div className="px-3 py-2 text-[11px] font-medium text-[#555] uppercase tracking-wider font-mono">Core</div>
                        
                        <Link to="/pricing" className="group/item flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors relative overflow-hidden">
                            <div className="w-8 h-8 rounded-md bg-[#161616] border border-white/5 flex items-center justify-center text-gray-400 group-hover/item:text-[#5E6AD2] group-hover/item:border-[#5E6AD2]/20 transition-all z-10 shadow-sm">
                                <iconify-icon icon="solar:target-linear" width="16" height="16"></iconify-icon>
                            </div>
                            <div className="z-10">
                                <div className="text-[13px] font-medium text-gray-200 group-hover/item:text-white transition-colors">Issues</div>
                                <div className="text-[11px] text-gray-500 group-hover/item:text-gray-400 transition-colors">Task management</div>
                            </div>
                        </Link>

                        <Link to="/pricing" className="group/item flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors relative overflow-hidden">
                            <div className="w-8 h-8 rounded-md bg-[#161616] border border-white/5 flex items-center justify-center text-gray-400 group-hover/item:text-[#E2B340] group-hover/item:border-[#E2B340]/20 transition-all z-10 shadow-sm">
                                <iconify-icon icon="solar:clock-circle-linear" width="16" height="16"></iconify-icon>
                            </div>
                            <div className="z-10">
                                <div className="text-[13px] font-medium text-gray-200 group-hover/item:text-white transition-colors">Cycles</div>
                                <div className="text-[11px] text-gray-500 group-hover/item:text-gray-400 transition-colors">Sprint planning</div>
                            </div>
                        </Link>

                        <Link to="/pricing" className="group/item flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors relative overflow-hidden">
                            <div className="w-8 h-8 rounded-md bg-[#161616] border border-white/5 flex items-center justify-center text-gray-400 group-hover/item:text-[#4DAF73] group-hover/item:border-[#4DAF73]/20 transition-all z-10 shadow-sm">
                                <iconify-icon icon="solar:map-arrow-linear" width="16" height="16"></iconify-icon>
                            </div>
                            <div className="z-10">
                                <div className="text-[13px] font-medium text-gray-200 group-hover/item:text-white transition-colors">Roadmaps</div>
                                <div className="text-[11px] text-gray-500 group-hover/item:text-gray-400 transition-colors">Long-term goals</div>
                            </div>
                        </Link>
                        
                        <Link to="/pricing" className="group/item flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors relative overflow-hidden">
                            <div className="w-8 h-8 rounded-md bg-[#161616] border border-white/5 flex items-center justify-center text-gray-400 group-hover/item:text-[#FF5F57] group-hover/item:border-[#FF5F57]/20 transition-all z-10 shadow-sm">
                                <iconify-icon icon="solar:layers-linear" width="16" height="16"></iconify-icon>
                            </div>
                            <div className="z-10">
                                <div className="text-[13px] font-medium text-gray-200 group-hover/item:text-white transition-colors">Views</div>
                                <div className="text-[11px] text-gray-500 group-hover/item:text-gray-400 transition-colors">Custom filters</div>
                            </div>
                        </Link>
                    </div>

                    <div className="flex-1">
                        <Link to="#" className="block h-full w-full rounded-xl bg-[#111] border border-white/5 relative overflow-hidden group/card hover:border-white/20 transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-black opacity-80"></div>
                            <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                                <div className="flex justify-between items-start">
                                    <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-semibold text-indigo-300 uppercase tracking-wide backdrop-blur-sm">New Feature</span>
                                </div>
                                
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white mb-3 shadow-lg shadow-indigo-500/30 group-hover/card:scale-110 transition-transform duration-300 ease-out">
                                        <iconify-icon icon="solar:import-linear" width="20" height="20"></iconify-icon>
                                    </div>
                                    <h4 className="text-[15px] font-medium text-white mb-1">Axis Import</h4>
                                    <p className="text-[12px] text-gray-400 leading-relaxed group-hover/card:text-gray-300 transition-colors">Move your tasks from Jira, Asana, or GitHub in minutes.</p>
                                    
                                    <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                                        <div className="h-full w-3/4 bg-indigo-500 rounded-full animate-[shimmer_2s_infinite] relative">
                                            <div className="absolute inset-0 bg-white/20"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover/card:bg-indigo-500/20 transition-colors duration-500"></div>
                            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                        </Link>
                    </div>
                </div>
                
                <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between px-2">
                    <div className="flex items-center gap-4">
                        <Link to="#" className="text-[11px] font-medium text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1.5 group/link">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover/link:shadow-[0_0_5px_#10B981] transition-shadow"></span>
                            Changelog
                        </Link>
                        <Link to="#" className="text-[11px] font-medium text-gray-500 hover:text-gray-300 transition-colors">Documentation</Link>
                    </div>
                    <Link to="#" className="text-[11px] font-medium text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1">
                        All features <iconify-icon icon="solar:alt-arrow-right-linear" width="10" height="10"></iconify-icon>
                    </Link>
                </div>
            </div>
          </div>
        </li>

        <li className="relative group">
          <Link to="/method" className="text-[13px] transition-all duration-300 hover:text-[#F7F8F8] hover:bg-white/10 flex items-center gap-2 overflow-hidden font-medium text-[#8A8F98] rounded-full pt-2 pr-5 pb-2 pl-5 relative">
            <span className="z-10 cursor-pointer relative">Method</span>
          </Link>
        </li>

        <li className="relative group">
          <Link to="/pricing" className="text-[13px] transition-all duration-300 hover:text-[#F7F8F8] hover:bg-white/10 flex items-center gap-2 overflow-hidden font-medium text-[#8A8F98] rounded-full pt-2 pr-5 pb-2 pl-5 relative">
            <span className="cursor-pointer z-10 relative">Pricing</span>
          </Link>
        </li>

        <li className="relative group">
          <Link to="/customers" className="text-[13px] transition-all duration-300 hover:text-[#F7F8F8] hover:bg-white/10 flex items-center gap-2 overflow-hidden font-medium text-[#8A8F98] rounded-full pt-2 pr-5 pb-2 pl-5 relative">
            <span className="cursor-pointer z-10 relative">Customers</span>
          </Link>
        </li>

        <li className="relative group">
          <Link to="/changelog" className="text-[13px] transition-all duration-300 hover:text-[#F7F8F8] hover:bg-white/10 flex items-center gap-2 overflow-hidden font-medium text-[#8A8F98] rounded-full pt-2 pr-5 pb-2 pl-5 relative">
            <span className="cursor-pointer z-10 relative">Changelog</span>
          </Link>
        </li>
      </ul>

      <div className="nav-right-group flex items-center gap-2 md:gap-4 z-[1002]">
          <div className="nav-auth hidden md:flex items-center gap-5">
            <Link to="/login" className="text-[13px] hover:text-[#F7F8F8] transition-colors group font-medium text-[#8A8F98] relative">
              Log in
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/signup" className="signup-btn text-[13px] overflow-hidden group transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] font-medium text-[#F7F8F8] border-white/5 border rounded-lg pt-2 pr-4 pb-2 pl-4 relative">
              <span className="cursor-pointer z-10 relative">Sign up</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
            </Link>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-[#8A8F98] hover:text-white cursor-pointer p-2 transition-colors">
                <iconify-icon icon={isMobileMenuOpen ? "solar:close-linear" : "solar:hamburger-menu-linear"} width="24" height="24"></iconify-icon>
          </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-[100dvh] bg-[#050505] z-[1001] flex flex-col pt-28 px-6 pb-10 gap-6 lg:hidden overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            <Link to="/product" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-[#F7F8F8] flex items-center justify-between group">
              Product
              <iconify-icon icon="solar:alt-arrow-right-linear" width="16" height="16" className="text-[#5E6AD2] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300"></iconify-icon>
            </Link>
            <Link to="/method" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors flex items-center justify-between group">
              Method
              <iconify-icon icon="solar:alt-arrow-right-linear" width="16" height="16" className="text-[#4DAF73] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300"></iconify-icon>
            </Link>
            <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors flex items-center justify-between group">
              Pricing
              <iconify-icon icon="solar:alt-arrow-right-linear" width="16" height="16" className="text-[#E2B340] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300"></iconify-icon>
            </Link>
            <Link to="/customers" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors flex items-center justify-between group">
              Customers
              <iconify-icon icon="solar:alt-arrow-right-linear" width="16" height="16" className="text-[#FF5F57] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300"></iconify-icon>
            </Link>
            <Link to="/changelog" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors flex items-center justify-between group">
              Changelog
              <iconify-icon icon="solar:alt-arrow-right-linear" width="16" height="16" className="text-white opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300"></iconify-icon>
            </Link>
          </div>
          <div className="h-px bg-white/10 w-full my-2"></div>
          <div className="flex flex-col gap-4">
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium text-[#F7F8F8] bg-white/10 rounded-lg py-3 text-center border border-white/5 hover:bg-white/15 transition-colors">Log in</Link>
            <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium text-[#050505] bg-white rounded-lg py-3 text-center hover:bg-gray-200 transition-colors">Sign up</Link>
          </div>
        </div>
      )}
    </nav>
  );
}