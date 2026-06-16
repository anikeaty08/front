import React from 'react';

export default function GridSection() {
  return (
    <section className="grid-section w-full max-w-[1400px] mx-auto flex flex-col md:flex-row border-t border-b border-white/5 bg-[#050505] relative overflow-hidden group/section">
      <div className="grid-col flex-1 p-8 md:p-16 md:pr-12 flex flex-col gap-12 border-b md:border-b-0 md:border-r border-white/5 relative bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent transition-colors hover:bg-white/[0.02]">
          <div className="col-text z-10">
              <h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Axis MCP</h3>
              <p className="text-lg text-[#8A8F98] leading-relaxed max-w-md font-light">Connect Axis to your favorite tools including Cursor, Claude, ChatGPT, and more.</p>
          </div>
          
          <div className="col-visual h-[380px] w-full flex items-center justify-center relative perspective-[1000px]">
              <div className="relative w-full max-w-[420px] bg-[#0F1011] rounded-xl border border-white/10 p-5 overflow-hidden shadow-2xl group/card transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)]">
                  
                  <div className="flex items-center gap-2 text-[13px] font-medium text-[#8A8F98] mb-6">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-[spin_10s_linear_infinite]"><path d="M12 2v20"></path><path d="M2 12h20"></path><path d="m4.93 4.93 14.14 14.14"></path><path d="m19.07 4.93-14.14 14.14"></path></svg>
                      Triage Intelligence
                  </div>

                  <div className="space-y-4 opacity-40 blur-[1px] transition-all duration-500 group-hover/card:blur-[2px] group-hover/card:opacity-30">
                      <div className="flex items-center gap-3 text-[13px] text-[#666]">
                          <span className="w-20">Suggestions</span>
                          <div className="flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10">
                              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-500 to-gray-700"></div>
                              <span className="text-gray-400">nan</span>
                          </div>
                          <span className="px-2 py-1 rounded border border-dashed border-white/10 text-xs">Mobile App Refactor</span>
                          <div className="flex items-center gap-1.5 ml-auto">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#E24040]"></span>
                              <span className="text-xs">Slack</span>
                          </div>
                      </div>
                      <div className="flex items-center gap-3 text-[13px] text-[#666]">
                          <span className="w-20">Duplicate of</span>
                          <div className="flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10">
                              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-500 to-gray-700"></div>
                              <span className="text-gray-400">nan</span>
                          </div>
                      </div>
                      <div className="flex items-center gap-3 text-[13px] text-[#666]">
                          <span className="w-20">Related to</span>
                          <div className="h-6 w-24 bg-white/5 rounded"></div>
                      </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-[#161719] rounded-lg border border-white/10 p-4 shadow-[0_20px_50px_-10px_rgba(0,0,0,1)] ring-1 ring-white/5 backdrop-blur-xl transform transition-all duration-500 ease-out translate-y-2 group-hover/card:translate-y-0 opacity-90 group-hover/card:opacity-100" style={{ animation: 'subtle-float 6s ease-in-out infinite' }}>
                      <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                              <h4 className="text-[13px] font-medium text-white">Why this assignee was suggested</h4>
                          </div>
                          <p className="text-[12px] leading-relaxed text-[#8A8F98]">This person was the assignee on previous issues related to performance problems in the mobile app launch flow.</p>
                          
                          <div className="h-px w-full bg-white/5 my-1"></div>
                          
                          <div className="flex items-center justify-between">
                              <div className="flex flex-col gap-1.5">
                                  <span className="text-[11px] font-medium text-[#666] uppercase tracking-wider">Alternatives</span>
                                  <div className="flex -space-x-1.5">
                                      <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" className="w-5 h-5 rounded-full ring-2 ring-[#161719] grayscale opacity-70" alt="" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48efba97-0b3f-4a79-a4e3-6d8f000e4515_320w.jpg" className="w-5 h-5 rounded-full ring-2 ring-[#161719] grayscale opacity-70 object-cover" alt="" />
                                  </div>
                              </div>
                              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-[12px] font-medium text-white transition-all hover:scale-105 active:scale-95 group/btn">
                                  <iconify-icon icon="solar:check-read-linear" width="12" height="12" className="text-white group-hover/btn:text-[#4DAF73] transition-colors"></iconify-icon>
                                  Accept suggestion
                              </button>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>

      <div className="grid-col flex-1 p-8 md:p-16 md:pl-12 flex flex-col gap-12 relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent transition-colors hover:bg-white/[0.02] reveal-right delay-200">
          <div className="col-text z-10">
              <h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Linear MCP</h3>
              <p className="text-lg text-[#8A8F98] leading-relaxed max-w-md font-light">Connect Linear to your favorite tools including Cursor, Claude, ChatGPT, and more.</p>
          </div>

          <div className="col-visual h-[380px] w-full flex items-center justify-center relative perspective-[1000px]">
              <div className="relative w-full max-w-[440px] h-[300px] bg-[#0A0B0C] rounded-xl border border-white/10 overflow-hidden shadow-2xl group/terminal">
                  
                  <div className="absolute inset-0 p-6 font-mono text-[11px] leading-loose text-[#555] opacity-60 select-none overflow-hidden">
                      <div style={{ animation: 'code-scroll 20s linear infinite' }}>
                          <span className="text-[#666] block mb-2">// mcp.linear.app/sse</span>
                          <span className="block"><span className="text-[#d97757]">"mcpServers"</span>: {'{'}</span>
                          <span className="block pl-4"><span className="text-[#569CD6]">"Axis"</span>: {'{'}</span>
                          <span className="block pl-8"><span className="text-[#d97757]">"command"</span>: <span className="text-[#98c379]">"npx"</span>,</span>
                          <span className="block pl-8"><span className="text-[#d97757]">"args"</span>: [</span>
                          <span className="block pl-12"><span className="text-[#98c379]">-y"</span>,</span>
                          <span className="block pl-12"><span className="text-[#98c379]">"@linear/mcp-server"</span></span>
                          <span className="block pl-8">],</span>
                          <span className="block pl-8"><span className="text-[#d97757]">"env"</span>: {'{'}</span>
                          <span className="block pl-12"><span className="text-[#569CD6]">"LINEAR_API_KEY"</span>: <span className="text-[#98c379]">"lin_api_..."</span></span>
                          <span className="block pl-8">{'}'}</span>
                          <span className="block pl-4">},</span>
                          <span className="block pl-4"><span className="text-[#569CD6]">"github"</span>: {'{'}</span>
                          <span className="block pl-8"><span className="text-[#d97757]">"command"</span>: <span className="text-[#98c379]">"npx"</span>,</span>
                          <span className="block pl-8"><span className="text-[#d97757]">"args"</span>: [<span className="text-[#98c379]">"-y"</span>, <span className="text-[#98c379]">"@modelcontextprotocol/server-github"</span>],</span>
                          <span className="block pl-8"><span className="text-[#d97757]">"env"</span>: {'{'}</span>
                          <span className="block pl-12"><span className="text-[#569CD6]">"GITHUB_PERSONAL_ACCESS_TOKEN"</span>: <span className="text-[#98c379]">"ghp_..."</span></span>
                          <span className="block pl-8">{'}'}</span>
                          <span className="block pl-4">{'}'}</span>
                          <span className="block">{'}'}</span>
                      </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C] via-[#0A0B0C]/40 to-transparent pointer-events-none"></div>

                  <div className="absolute bottom-6 left-6 right-6 bg-[#161719]/80 backdrop-blur-md rounded-xl border border-white/10 p-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover/terminal:border-white/20 group-hover/terminal:bg-[#161719]/90" style={{ animation: 'glow-pulse 4s infinite ease-in-out' }}>
                      <div className="flex items-center gap-2 mb-4">
                          <div className="w-0.5 h-4 bg-blue-500 animate-[cursor-blink_1s_step-end_infinite]"></div>
                          <span className="text-[14px] text-gray-300 font-light">Ask anything</span>
                      </div>
                      
                      <div className="flex gap-2">
                          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-[11px] text-[#8A8F98] hover:text-white transition-all">
                              <iconify-icon icon="solar:paperclip-linear" width="12" height="12"></iconify-icon>
                              Attach
                          </button>
                          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-[11px] text-[#8A8F98] hover:text-white transition-all">
                              <iconify-icon icon="solar:rounded-magnifer-linear" width="12" height="12"></iconify-icon>
                              Search
                          </button>
                          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-[11px] text-[#8A8F98] hover:text-white transition-all">
                              <iconify-icon icon="solar:brain-linear" width="12" height="12"></iconify-icon>
                              Reason
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}