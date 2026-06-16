import React from 'react'

export default function HeroMockup() {
  return (
    <div className="flex flex-col w-full max-w-[1280px] mx-auto animate-fade-in -translate-y-4">
      <div
        className="group/window bg-[#0B0F12] w-full border-white/10 border pt-2 pr-2 pb-2 pl-2 relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)]"
        data-aura-source-path="src/components/hero/HeroMockup.jsx">
        <div
          className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-70 z-50 pointer-events-none">
        </div>

        <div
          className="overflow-hidden flex text-[12px] leading-normal antialiased text-white/60 font-sans bg-[#05080A] w-full h-[680px] md:h-[780px] border border-white/10 relative shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)]">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:36px_36px] opacity-45 pointer-events-none z-0">
          </div>
          <div className="absolute -top-24 left-1/4 w-2/3 h-72 bg-[#c6f91f]/[0.06] blur-[120px] pointer-events-none z-0">
          </div>

          {/* Sidebar */}
          <aside
            className="hidden md:flex w-[235px] bg-[#05080A]/85 backdrop-blur-md flex-col border-r border-white/10 shadow-[10px_0_30px_-15px_rgba(0,0,0,0.5)] flex-shrink-0 relative z-10">
            <div className="flex h-14 border-b border-white/10 px-4 items-center justify-between">
              <div className="flex items-center gap-3 text-white font-semibold text-sm tracking-wide group cursor-pointer">
                <iconify-icon icon="solar:folder-with-files-bold-duotone"
                  className="text-[#c6f91f] text-lg drop-shadow-[0_0_8px_rgba(198,249,31,0.45)]"></iconify-icon>
                <span>Prompt Vault</span>
                <iconify-icon icon="solar:alt-arrow-down-linear" width="12"
                  className="text-white/40 group-hover:text-white transition-colors"></iconify-icon>
              </div>
            </div>

            <nav className="px-3 pt-5 space-y-1.5">
              <div className="text-[10px] font-medium uppercase tracking-widest text-white/30 px-3 mb-2">
                Categories
              </div>

              <div
                className="flex items-center gap-3 px-3 py-2.5 bg-gradient-to-r from-[#c6f91f]/15 to-[#c6f91f]/5 border border-[#c6f91f]/25 text-[#c6f91f] cursor-default relative overflow-hidden rounded-md shadow-[inset_0_0_20px_rgba(198,249,31,0.06)]">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c6f91f] shadow-[0_0_10px_#c6f91f]"></div>
                <iconify-icon icon="solar:widget-5-linear" width="16"></iconify-icon>
                <span className="font-semibold">Dashboards</span>
              </div>

              <div
                className="flex items-center gap-3 px-3 py-2.5 text-white/50 hover:bg-white/5 hover:text-white transition-colors cursor-pointer border border-transparent rounded-md">
                <iconify-icon icon="solar:smartphone-linear" width="16"></iconify-icon>
                <span>Mobile Views</span>
              </div>

              <div
                className="flex items-center gap-3 px-3 py-2.5 text-white/50 hover:bg-white/5 hover:text-white transition-colors cursor-pointer border border-transparent rounded-md">
                <iconify-icon icon="solar:cursor-square-linear" width="16"></iconify-icon>
                <span>Landing Pages</span>
              </div>

              <div
                className="flex items-center gap-3 px-3 py-2.5 text-white/50 hover:bg-white/5 hover:text-white transition-colors cursor-pointer border border-transparent rounded-md">
                <iconify-icon icon="solar:layers-linear" width="16"></iconify-icon>
                <span>UI Components</span>
              </div>

              <div
                className="flex items-center gap-3 px-3 py-2.5 text-white/50 hover:bg-white/5 hover:text-white transition-colors cursor-pointer border border-transparent rounded-md">
                <iconify-icon icon="solar:box-linear" width="16"></iconify-icon>
                <span>WebGL Canvas</span>
              </div>
            </nav>

            <div className="mt-auto p-3">
              <div
                className="border border-white/10 bg-[#0B0F12]/90 rounded-lg p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs text-white/85 font-medium">Pro Access</span>
                  <iconify-icon icon="solar:shield-check-bold-duotone"
                    className="text-[#c6f91f] text-lg drop-shadow-[0_0_8px_rgba(198,249,31,0.55)]"></iconify-icon>
                </div>

                <div className="h-1 w-full bg-white/10 overflow-hidden rounded-full">
                  <div className="h-full w-[86%] bg-[#c6f91f] shadow-[0_0_10px_#c6f91f]"></div>
                </div>

                <div className="flex justify-between items-center mt-2 text-[10px]">
                  <span className="text-white/40">Usage</span>
                  <span className="text-[#c6f91f]">Unlimited</span>
                </div>

                <button className="mt-3 w-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-white/80 px-3 py-2 rounded-md text-xs font-medium flex items-center justify-between transition-colors">
                  Manage Plan
                  <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
                </button>
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 flex flex-col min-w-0 bg-transparent relative z-10">
            <header
              className="h-14 flex items-center justify-between gap-3 px-4 border-b border-white/10 bg-[#0B0F12]/80 backdrop-blur-md">
              <div
                className="flex items-center gap-3 flex-1 max-w-[530px] h-10 px-3 border border-white/10 bg-[#05080A]/90 rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
                <iconify-icon icon="solar:magnifer-linear" width="17" className="text-white/45"></iconify-icon>
                <span className="truncate text-sm text-white/40 font-mono tracking-wide">
                  Search structurally typed prompts...
                </span>
                <div
                  className="ml-auto hidden sm:flex items-center gap-1 border border-white/10 bg-white/[0.03] px-1.5 py-0.5 rounded text-[10px] text-white/45 font-mono">
                  <span>⌘</span><span>K</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className="hidden lg:flex items-center gap-2 border border-white/10 bg-[#05080A] px-3 py-2 rounded-md text-xs text-white/75">
                  <iconify-icon icon="simple-icons:claude" className="text-white"></iconify-icon>
                  <span>Claude 3.5 Sonnet</span>
                  <iconify-icon icon="solar:alt-arrow-down-linear" width="12" className="text-white/45"></iconify-icon>
                </div>

                <button className="flex items-center gap-2 bg-[#c6f91f] text-black px-4 py-2 rounded-md text-xs font-semibold hover:bg-[#aade17] transition-colors shadow-[0_0_18px_rgba(198,249,31,0.38)]">
                  <iconify-icon icon="solar:add-square-linear" width="15"></iconify-icon>
                  <span className="hidden sm:inline">New Prompt</span>
                </button>
              </div>
            </header>

            <div className="flex-1 overflow-hidden p-4 flex flex-col gap-4 relative">
              {/* Featured dashboard card */}
              <section
                className="border border-white/10 bg-[#0B0F12]/85 rounded-xl relative overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#c6f91f]/[0.06] via-transparent to-transparent pointer-events-none">
                </div>

                <div className="relative z-10 grid grid-cols-1 xl:grid-cols-[1fr_330px] gap-3 p-4">
                  <div className="grid grid-cols-1 lg:grid-cols-[270px_1fr] gap-4 min-w-0">
                    <div className="flex flex-col min-w-0 py-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 bg-[#c6f91f]/10 text-[#c6f91f] border border-[#c6f91f]/30 rounded text-[10px] uppercase tracking-widest font-semibold">
                          Featured
                        </span>
                        <span className="text-white/45 text-xs flex items-center gap-1.5">
                          <iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                          Updated 2h ago
                        </span>
                      </div>

                      <h2 className="text-[22px] text-white font-medium tracking-tight mb-2">
                        B2B Analytics OS
                      </h2>

                      <p className="text-xs text-white/50 leading-relaxed mb-4 max-w-[270px]">
                        A comprehensive system prompt for complex sidebar layouts,
                        multi-layered data tables, and metric visualizations.
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-white/10 bg-white/[0.025] rounded-md text-[10px] text-white/65">
                          <iconify-icon icon="solar:widget-5-linear" className="text-[#c6f91f]"></iconify-icon>
                          Dashboard OS
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-white/10 bg-white/[0.025] rounded-md text-[10px] text-white/65">
                          <iconify-icon icon="solar:layers-linear" className="text-[#c6f91f]"></iconify-icon>
                          Complex Layout
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-white/10 bg-white/[0.025] rounded-md text-[10px] text-white/65">
                          <iconify-icon icon="solar:graph-up-linear" className="text-[#c6f91f]"></iconify-icon>
                          Data Viz
                        </span>
                      </div>

                      <div className="mt-auto flex flex-wrap items-center gap-2">
                        <button className="bg-[#c6f91f] text-black px-3.5 py-2.5 rounded-md text-xs font-semibold flex items-center gap-2 hover:bg-[#aade17] transition-colors shadow-[0_0_18px_rgba(198,249,31,0.3)]">
                          <iconify-icon icon="solar:copy-linear" width="15"></iconify-icon>
                          Copy JSON Prompt
                        </button>

                        <button className="border border-white/12 bg-white/[0.02] text-white px-3.5 py-2.5 rounded-md text-xs font-semibold flex items-center gap-2 hover:bg-white/5 transition-colors">
                          <iconify-icon icon="solar:eye-linear" width="15"></iconify-icon>
                          Preview
                        </button>
                      </div>
                    </div>

                    {/* Mini analytics preview */}
                    <div
                      className="hidden lg:block border border-white/10 bg-[#05080A] rounded-lg p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] min-w-0">
                      <div className="h-full rounded-md border border-white/[0.06] bg-[#080D10] p-3 overflow-hidden">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2 text-[11px] text-white/80 font-medium">
                            <span className="w-2.5 h-2.5 rounded-sm bg-[#c6f91f] shadow-[0_0_10px_rgba(198,249,31,0.5)]"></span>
                            Overview
                          </div>
                          <span className="border border-white/10 bg-white/[0.02] text-white/40 text-[10px] px-2 py-1 rounded">
                            Last 30 days
                          </span>
                        </div>

                        <div className="grid grid-cols-4 gap-1.5 mb-2.5">
                          <div className="border border-white/[0.06] bg-[#0B0F12] rounded p-2">
                            <div className="text-[9px] text-white/35 mb-1">Revenue</div>
                            <div className="text-sm text-white font-medium">$24.8M</div>
                            <div className="text-[9px] text-[#55e154]">↑ 12%</div>
                          </div>
                          <div className="border border-white/[0.06] bg-[#0B0F12] rounded p-2">
                            <div className="text-[9px] text-white/35 mb-1">Accounts</div>
                            <div className="text-sm text-white font-medium">1,842</div>
                            <div className="text-[9px] text-[#55e154]">↑ 8%</div>
                          </div>
                          <div className="border border-white/[0.06] bg-[#0B0F12] rounded p-2">
                            <div className="text-[9px] text-white/35 mb-1">MRR</div>
                            <div className="text-sm text-white font-medium">$2.4M</div>
                            <div className="text-[9px] text-[#55e154]">↑ 14%</div>
                          </div>
                          <div className="border border-white/[0.06] bg-[#0B0F12] rounded p-2">
                            <div className="text-[9px] text-white/35 mb-1">Churn</div>
                            <div className="text-sm text-white font-medium">2.3%</div>
                            <div className="text-[9px] text-red-400">↓ 0.6%</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-[1.2fr_0.8fr_0.9fr] gap-1.5">
                          <div className="border border-white/[0.06] bg-[#0B0F12] rounded p-2 h-[105px]">
                            <div className="text-[10px] text-white/65 mb-2">Revenue Overview</div>
                            <div className="relative h-16">
                              <div className="absolute inset-0 grid grid-rows-3">
                                <span className="border-t border-white/5"></span>
                                <span className="border-t border-white/5"></span>
                                <span className="border-t border-white/5"></span>
                              </div>
                              <svg viewBox="0 0 160 70" className="absolute inset-0 w-full h-full overflow-visible">
                                <polyline points="5,58 32,34 55,49 82,20 112,35 152,12" fill="none" stroke="#c6f91f"
                                  strokeWidth="2"></polyline>
                                <circle cx="112" cy="35" r="3" fill="#c6f91f"></circle>
                              </svg>
                            </div>
                          </div>

                          <div className="border border-white/[0.06] bg-[#0B0F12] rounded p-2 h-[105px]">
                            <div className="text-[10px] text-white/65 mb-2">Segment</div>
                            <div className="flex items-center justify-center">
                              <div className="relative w-16 h-16 rounded-full"
                                style={{ background: 'conic-gradient(#c6f91f 0 48%, #2f8790 48% 80%, #1f3d46 80% 100%)' }}>
                                <div
                                  className="absolute inset-3 bg-[#0B0F12] rounded-full flex items-center justify-center text-[10px] text-white">
                                  48%
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border border-white/[0.06] bg-[#0B0F12] rounded p-2 h-[105px]">
                            <div className="text-[10px] text-white/65 mb-2">Top Accounts</div>
                            <div className="space-y-2 text-[9px]">
                              <div className="flex justify-between">
                                <span className="text-white/45">Acme</span>
                                <span className="text-white/75">$1.2M</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-white/45">Globex</span>
                                <span className="text-white/75">$980K</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-white/45">Initech</span>
                                <span className="text-white/75">$840K</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-white/45">Umbrella</span>
                                <span className="text-white/75">$720K</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* JSON preview */}
                  <div
                    className="border border-[#c6f91f]/60 bg-[#05080A] rounded-lg overflow-hidden shadow-[0_0_24px_rgba(198,249,31,0.14),inset_0_1px_0_rgba(255,255,255,0.04)] min-h-[245px]">
                    <div className="h-10 px-3 flex items-center justify-between border-b border-white/10 bg-white/[0.025]">
                      <span className="text-xs text-white/75 font-mono">system_prompt.json</span>
                      <iconify-icon icon="solar:copy-linear" className="text-white/65" width="15"></iconify-icon>
                    </div>

                    <div className="p-3 font-mono text-xs leading-5">
                      <div><span className="text-white/35 mr-3">1</span><span className="text-white/80">{'{'}</span></div>
                      <div>
                        <span className="text-white/35 mr-3">2</span><span className="text-[#fb7c68]">"layout_type"</span><span className="text-white/60">: </span><span className="text-[#c6f91f]">"sidebar-left"</span><span className="text-white/60">,</span>
                      </div>
                      <div>
                        <span className="text-white/35 mr-3">3</span><span className="text-[#fb7c68]">"theme_mode"</span><span className="text-white/60">: </span><span className="text-[#c6f91f]">"dark"</span><span className="text-white/60">,</span>
                      </div>
                      <div>
                        <span className="text-white/35 mr-3">4</span><span className="text-[#fb7c68]">"color_accent"</span><span className="text-white/60">: </span><span className="text-[#c6f91f]">"#c6f91f"</span><span className="text-white/60">,</span>
                      </div>
                      <div>
                        <span className="text-white/35 mr-3">5</span><span className="text-[#fb7c68]">"components"</span><span className="text-white/60">: [</span>
                      </div>
                      <div>
                        <span className="text-white/35 mr-3">6</span><span className="pl-5 text-[#c6f91f]">"MetricCard_Grid"</span><span className="text-white/60">,</span>
                      </div>
                      <div>
                        <span className="text-white/35 mr-3">7</span><span className="pl-5 text-[#c6f91f]">"AreaChart_Timeline"</span><span className="text-white/60">,</span>
                      </div>
                      <div>
                        <span className="text-white/35 mr-3">8</span><span className="pl-5 text-[#c6f91f]">"DataTable_Sortable"</span>
                      </div>
                      <div><span className="text-white/35 mr-3">9</span><span className="text-white/60">],</span></div>
                      <div>
                        <span className="text-white/35 mr-1.5">10</span><span className="text-[#fb7c68]">"typography"</span><span className="text-white/60">: </span><span className="text-[#c6f91f]">"Inter"</span><span className="text-white/60">,</span>
                      </div>
                      <div>
                        <span className="text-white/35 mr-1.5">11</span><span className="text-[#fb7c68]">"density"</span><span className="text-white/60">: </span><span className="text-[#c6f91f]">"compact"</span><span className="text-white/60">,</span>
                      </div>
                      <div>
                        <span className="text-white/35 mr-1.5">12</span><span className="text-[#fb7c68]">"animations"</span><span className="text-white/60">: </span><span className="text-[#c6f91f]">"subtle"</span>
                      </div>
                      <div><span className="text-white/35 mr-1.5">13</span><span className="text-white/80">{'}'}</span></div>
                    </div>

                    <div className="h-9 border-t border-white/10 px-3 flex items-center justify-between bg-white/[0.025]">
                      <span className="text-[11px] text-white/45 font-mono">JSON • 13 lines</span>
                      <span className="text-[11px] text-[#55e154] flex items-center gap-1.5">
                        <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                        Valid
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Bottom cards */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 min-h-0">
                {/* Card 1 */}
                <article
                  className="group relative overflow-hidden rounded-2xl bg-[#080D10]/90 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_18px_45px_rgba(0,0,0,0.18)] ring-1 ring-[#c6f91f]/10 transition-all duration-300 hover:ring-[#c6f91f]/25">
                  <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(198,249,31,0.10),transparent_34%)] pointer-events-none">
                  </div>
                  <div
                    className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#c6f91f]/35 to-transparent">
                  </div>

                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c6f91f]/8 text-[#c6f91f] ring-1 ring-[#c6f91f]/18 shadow-[0_0_20px_rgba(198,249,31,0.10)]">
                        <iconify-icon icon="solar:user-circle-linear" className="text-xl"></iconify-icon>
                      </div>

                      <div className="min-w-0">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="truncate text-sm font-medium tracking-tight text-white">
                            Multi-step Onboarding
                          </h3>
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c6f91f] shadow-[0_0_10px_#c6f91f]"></span>
                        </div>
                        <p className="line-clamp-2 text-[11px] leading-relaxed text-white/45">
                          Wizard flows, form states, validation logic, and completion tracking.
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full bg-violet-400/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-widest text-violet-200 ring-1 ring-violet-300/15">
              Auth Flow
            </span>
                  </div>

                  {/* Real mini dashboard preview */}
                  <div
                    className="relative mt-3 overflow-hidden rounded-xl bg-[#05080A]/90 p-3 ring-1 ring-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
                    <div
                      className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:22px_22px] opacity-40">
                    </div>

                    <div className="relative mb-3 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-medium text-white/75">Onboarding Flow</p>
                        <p className="text-[9px] text-white/35">4 steps • 78% complete</p>
                      </div>
                      <div
                        className="rounded-full bg-[#c6f91f]/10 px-2 py-1 text-[9px] font-medium text-[#c6f91f] ring-1 ring-[#c6f91f]/15">
                        Active
                      </div>
                    </div>

                    <div className="relative mb-3 grid grid-cols-4 gap-1.5">
                      <div className="h-1.5 rounded-full bg-[#c6f91f] shadow-[0_0_8px_rgba(198,249,31,0.35)]"></div>
                      <div className="h-1.5 rounded-full bg-[#c6f91f]/70"></div>
                      <div className="h-1.5 rounded-full bg-[#c6f91f]/35"></div>
                      <div className="h-1.5 rounded-full bg-white/10"></div>
                    </div>

                    <div className="relative grid grid-cols-3 gap-2">
                      <div className="rounded-lg bg-[#c6f91f]/7 p-2 ring-1 ring-[#c6f91f]/14">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[9px] text-white/45">Step 01</span>
                          <iconify-icon icon="solar:check-circle-bold" className="text-[#c6f91f] text-sm"></iconify-icon>
                        </div>
                        <p className="text-[10px] font-medium text-white/80">Account</p>
                        <p className="mt-0.5 text-[9px] text-white/35">Email verified</p>
                      </div>

                      <div className="rounded-lg bg-[#c6f91f]/7 p-2 ring-1 ring-[#c6f91f]/14">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[9px] text-white/45">Step 02</span>
                          <iconify-icon icon="solar:check-circle-bold" className="text-[#c6f91f] text-sm"></iconify-icon>
                        </div>
                        <p className="text-[10px] font-medium text-white/80">Profile</p>
                        <p className="mt-0.5 text-[9px] text-white/35">Details saved</p>
                      </div>

                      <div className="rounded-lg bg-white/[0.025] p-2 ring-1 ring-white/[0.055]">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[9px] text-white/45">Step 03</span>
                          <span className="h-2 w-2 rounded-full bg-[#c6f91f] shadow-[0_0_8px_rgba(198,249,31,0.5)]"></span>
                        </div>
                        <p className="text-[10px] font-medium text-white/80">Team</p>
                        <p className="mt-0.5 text-[9px] text-white/35">Invite members</p>
                      </div>
                    </div>

                    <div className="relative mt-2 grid grid-cols-[1fr_auto] gap-2">
                      <div className="rounded-lg bg-white/[0.025] px-2.5 py-2 ring-1 ring-white/[0.045]">
                        <div className="flex items-center justify-between text-[9px]">
                          <span className="text-white/45">Validation rules</span>
                          <span className="text-[#c6f91f]">12 checks</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-[#c6f91f] px-3 py-2 text-[9px] font-semibold text-black">
                        Continue
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-3 flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-white/[0.035] px-2.5 py-1 text-[10px] text-white/55 ring-1 ring-white/[0.05]">Onboarding</span>
                    <span className="rounded-full bg-white/[0.035] px-2.5 py-1 text-[10px] text-white/55 ring-1 ring-white/[0.05]">Forms</span>
                    <span className="rounded-full bg-white/[0.035] px-2.5 py-1 text-[10px] text-white/55 ring-1 ring-white/[0.05]">Progress</span>
                  </div>

                  <div
                    className="relative mt-3 flex items-center justify-between border-t border-white/[0.05] pt-2.5 text-[11px] text-white/45">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><iconify-icon icon="solar:star-bold" className="text-yellow-400"></iconify-icon>4.9</span>
                      <span className="flex items-center gap-1"><iconify-icon icon="solar:download-linear"></iconify-icon>2.4K</span>
                      <span className="flex items-center gap-1"><iconify-icon icon="solar:copy-linear"></iconify-icon>1.1K</span>
                    </div>
                    <span className="rounded-full bg-[#c6f91f]/8 px-2.5 py-1 text-[#c6f91f]/90 ring-1 ring-[#c6f91f]/12">Copy</span>
                  </div>
                </article>

                {/* Card 2 */}
                <article
                  className="group relative overflow-hidden rounded-2xl bg-[#080D10]/90 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_18px_45px_rgba(0,0,0,0.18)] ring-1 ring-[#c6f91f]/10 transition-all duration-300 hover:ring-[#c6f91f]/25">
                  <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(198,249,31,0.10),transparent_34%)] pointer-events-none">
                  </div>
                  <div
                    className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#c6f91f]/35 to-transparent">
                  </div>

                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c6f91f]/8 text-[#c6f91f] ring-1 ring-[#c6f91f]/18 shadow-[0_0_20px_rgba(198,249,31,0.10)]">
                        <iconify-icon icon="solar:settings-linear" className="text-xl"></iconify-icon>
                      </div>

                      <div className="min-w-0">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="truncate text-sm font-medium tracking-tight text-white">
                            Preferences Panel OS
                          </h3>
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c6f91f] shadow-[0_0_10px_#c6f91f]"></span>
                        </div>
                        <p className="line-clamp-2 text-[11px] leading-relaxed text-white/45">
                          Settings dashboards, toggles, permissions, and user preference states.
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full bg-[#c6f91f]/8 px-2.5 py-1 text-[9px] font-medium uppercase tracking-widest text-[#c6f91f] ring-1 ring-[#c6f91f]/14">
              Settings
            </span>
                  </div>

                  {/* Real mini dashboard preview */}
                  <div
                    className="relative mt-3 overflow-hidden rounded-xl bg-[#05080A]/90 p-3 ring-1 ring-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
                    <div
                      className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:22px_22px] opacity-40">
                    </div>

                    <div className="relative mb-3 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-medium text-white/75">User Preferences</p>
                        <p className="text-[9px] text-white/35">3 groups • 9 active settings</p>
                      </div>
                      <div
                        className="rounded-full bg-[#c6f91f]/10 px-2 py-1 text-[9px] font-medium text-[#c6f91f] ring-1 ring-[#c6f91f]/15">
                        Synced
                      </div>
                    </div>

                    <div className="relative grid grid-cols-[92px_1fr] gap-2">
                      <div className="space-y-1.5">
                        <div className="rounded-lg bg-[#c6f91f]/8 px-2 py-2 ring-1 ring-[#c6f91f]/14">
                          <p className="text-[9px] font-medium text-[#c6f91f]">General</p>
                        </div>
                        <div className="rounded-lg bg-white/[0.025] px-2 py-2 ring-1 ring-white/[0.045]">
                          <p className="text-[9px] text-white/45">Security</p>
                        </div>
                        <div className="rounded-lg bg-white/[0.025] px-2 py-2 ring-1 ring-white/[0.045]">
                          <p className="text-[9px] text-white/40">Billing</p>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div
                          className="flex items-center justify-between rounded-lg bg-white/[0.025] px-2 py-1.5 ring-1 ring-white/[0.045]">
                          <div>
                            <p className="text-[9px] font-medium text-white/70">Auto-save changes</p>
                            <p className="text-[8px] text-white/35">Recommended</p>
                          </div>
                          <span className="relative h-4 w-8 rounded-full bg-[#c6f91f] shadow-[0_0_10px_rgba(198,249,31,0.28)]">
                    <span className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-black/80"></span>
                          </span>
                        </div>

                        <div
                          className="flex items-center justify-between rounded-lg bg-white/[0.025] px-2 py-1.5 ring-1 ring-white/[0.045]">
                          <div>
                            <p className="text-[9px] font-medium text-white/65">Email reports</p>
                            <p className="text-[8px] text-white/35">Weekly digest</p>
                          </div>
                          <span className="relative h-4 w-8 rounded-full bg-white/8 ring-1 ring-white/[0.08]">
                    <span className="absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white/25"></span>
                          </span>
                        </div>

                        <div
                          className="flex items-center justify-between rounded-lg bg-[#c6f91f]/6 px-2 py-1.5 ring-1 ring-[#c6f91f]/16">
                          <div>
                            <p className="text-[9px] font-medium text-[#c6f91f]">Smart defaults</p>
                            <p className="text-[8px] text-[#c6f91f]/45">Enabled for Pro</p>
                          </div>
                          <span className="rounded-md bg-[#c6f91f]/12 px-1.5 py-0.5 text-[8px] text-[#c6f91f] ring-1 ring-[#c6f91f]/15">
                    Pro
                  </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-3 flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-white/[0.035] px-2.5 py-1 text-[10px] text-white/55 ring-1 ring-white/[0.05]">Settings</span>
                    <span className="rounded-full bg-white/[0.035] px-2.5 py-1 text-[10px] text-white/55 ring-1 ring-white/[0.05]">Navigation</span>
                    <span className="rounded-full bg-white/[0.035] px-2.5 py-1 text-[10px] text-white/55 ring-1 ring-white/[0.05]">UI System</span>
                  </div>

                  <div
                    className="relative mt-3 flex items-center justify-between border-t border-white/[0.05] pt-2.5 text-[11px] text-white/45">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><iconify-icon icon="solar:star-bold" className="text-yellow-400"></iconify-icon>4.8</span>
                      <span className="flex items-center gap-1"><iconify-icon icon="solar:download-linear"></iconify-icon>1.8K</span>
                      <span className="flex items-center gap-1"><iconify-icon icon="solar:copy-linear"></iconify-icon>842</span>
                    </div>
                    <span className="rounded-full bg-[#c6f91f]/8 px-2.5 py-1 text-[#c6f91f]/90 ring-1 ring-[#c6f91f]/12">Copy</span>
                  </div>
                </article>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}