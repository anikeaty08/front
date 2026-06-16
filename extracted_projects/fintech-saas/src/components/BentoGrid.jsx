import React from 'react';

const BentoGrid = () => {
  return (
    <section className="font-sans bg-white pt-24 pr-page-margin pb-24 pl-page-margin">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <h2 className="text-[#0a2540] text-3xl font-medium tracking-tight mb-4">
            Modular solutions
          </h2>
          <p className="text-lg text-[#424770] max-w-2xl">
            Mix and match our products to create exactly the payment infrastructure you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Checkout */}
          <div className="lg:col-span-2 relative bg-gray-50 rounded-3xl overflow-hidden border border-gray-200/60 shadow-sm group min-h-[500px] cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-pink-50"></div>
            <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[120%] bg-gradient-to-br from-orange-400/20 via-pink-500/20 to-purple-600/20 blur-[80px] rounded-full mix-blend-multiply group-hover:scale-110 transition-transform duration-1000 ease-out"></div>

            <div className="absolute inset-0 flex flex-col md:flex-row items-end justify-center gap-8 pt-12 px-8 overflow-hidden">
              {/* Mobile mockup */}
              <div className="w-[260px] h-[480px] bg-white rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl relative z-10 translate-y-12 group-hover:translate-y-6 transition-transform duration-700 ease-out flex-shrink-0 flex flex-col">
                <div className="flex-1 px-5 py-6 flex flex-col items-center">
                  <div className="w-12 h-1.5 rounded-full bg-gray-900 mb-5"></div>

                  <iconify-icon
                    icon="lucide:nfc"
                    class="text-gray-800 text-2xl mb-6"
                    stroke-width="1.5"
                  ></iconify-icon>

                  <p className="text-base font-medium text-gray-500 mb-1">
                    Pay to Showflix
                  </p>
                  <h3 className="text-3xl font-medium tracking-tight text-gray-900 mb-2">
                    JP¥5,000.00
                  </h3>
                  <p className="text-xs text-gray-400 text-center mb-8">
                    Tap, insert, or swipe to pay
                  </p>

                  <div className="w-full space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 text-base">Gift card</span>
                      <span className="font-medium text-gray-900 text-base">
                        JP¥5,000.00
                      </span>
                    </div>
                    <div className="flex justify-between text-sm border-t border-gray-100 pt-3">
                      <span className="text-gray-500 text-base">Total</span>
                      <span className="font-medium text-gray-900 text-base">
                        JP¥5,000.00
                      </span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-purple-500 text-white rounded-xl font-medium text-base mt-auto">
                    Continue
                  </button>
                </div>
              </div>

              {/* Web mockup */}
              <div className="w-[420px] h-[400px] bg-white/95 backdrop-blur-xl rounded-t-xl shadow-2xl relative z-10 translate-y-8 group-hover:translate-y-2 transition-transform duration-700 delay-75 ease-out flex-shrink-0 border border-white/40 hidden md:flex flex-col">
                <div className="flex items-center px-4 py-2 border-b border-gray-100 bg-gray-50/50 rounded-t-xl">
                  <div className="flex gap-1.5 mr-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="flex-1 bg-white border border-gray-100 rounded flex items-center justify-center gap-1.5 py-1 text-xs text-gray-500">
                    <iconify-icon
                      icon="lucide:lock"
                      class="text-xs"
                      stroke-width="1.5"
                    ></iconify-icon>
                    showflixapp.com/checkout
                  </div>
                </div>

                <div className="flex p-6 gap-6 flex-1">
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-base font-medium tracking-tight text-gray-900 mb-4">
                      SHOWFLIX
                    </h3>

                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email address
                    </label>
                    <div className="w-full border border-gray-200 rounded-md py-2 px-3 text-sm text-gray-400 mb-3">
                      your@email.com
                    </div>

                    <div className="flex gap-2 mb-3">
                      <button className="flex-1 bg-[#00d632] text-white py-2 rounded-md flex items-center justify-center gap-1 font-medium text-base">
                        <iconify-icon
                          icon="lucide:arrow-right-circle"
                          stroke-width="1.5"
                        ></iconify-icon>
                        Link
                      </button>
                      <button className="flex-1 bg-black text-white py-2 rounded-md flex items-center justify-center gap-1 font-medium text-base">
                        <iconify-icon
                          icon="lucide:apple"
                          stroke-width="1.5"
                        ></iconify-icon>
                        Pay
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex-1 border-t border-gray-200"></div>
                      <span className="text-xs text-gray-400">or</span>
                      <div className="flex-1 border-t border-gray-200"></div>
                    </div>

                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Payment method
                    </label>
                    <div className="border border-gray-200 rounded-md overflow-hidden bg-white mb-2">
                      <div className="p-2 border-b border-gray-200 flex items-center gap-2 bg-blue-50/30">
                        <div className="w-3 h-3 rounded-full border-[3px] border-blue-500 bg-white"></div>
                        <iconify-icon
                          icon="lucide:credit-card"
                          class="text-gray-400"
                          stroke-width="1.5"
                        ></iconify-icon>
                        <span className="text-base font-medium">Card</span>
                      </div>
                      <div className="p-2 border-b border-gray-200 text-gray-400 text-sm bg-gray-50/50">
                        Card number
                      </div>
                      <div className="flex divide-x divide-gray-200 bg-gray-50/50">
                        <div className="p-2 flex-1 text-gray-400 text-sm">
                          Expiration
                        </div>
                        <div className="p-2 flex-1 text-gray-400 text-sm flex items-center justify-between">
                          Security code
                          <iconify-icon
                            icon="lucide:shield"
                            stroke-width="1.5"
                          ></iconify-icon>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-md overflow-hidden bg-white mb-4">
                      <div className="p-2 border-b border-gray-200 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full border border-gray-300"></div>
                        <span className="text-base">PayPay</span>
                      </div>
                      <div className="p-2 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full border border-gray-300"></div>
                        <span className="text-base">FamilyMart</span>
                      </div>
                    </div>

                    <button className="w-full py-2.5 bg-purple-500 text-white rounded-md font-medium text-base mt-auto">
                      Continue
                    </button>
                  </div>

                  <div className="w-[120px] pt-8">
                    <h4 className="text-sm font-medium text-gray-500 mb-3">
                      Order summary
                    </h4>
                    <div className="flex gap-2 mb-4">
                      <div className="w-8 h-8 rounded bg-pink-100 flex items-center justify-center text-pink-500 font-medium text-lg flex-shrink-0">
                        S
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 leading-tight mb-1">
                          Monthly streaming subscription
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          JP¥1,886.00
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5 border-t border-gray-100 pt-3 text-sm">
                      <div className="flex justify-between text-gray-500">
                        <span>Subtotal</span>
                        <span>JP¥1,886.00</span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Tax</span>
                        <span>JP¥189.00</span>
                      </div>
                      <div className="flex justify-between font-medium text-gray-900 pt-1.5 border-t border-gray-100">
                        <span>Total</span>
                        <span>JP¥2,075.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Pro Plan */}
          <div className="lg:col-span-1 relative rounded-3xl overflow-hidden border border-gray-200/60 shadow-sm group min-h-[500px] cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ece9ff] to-[#d6cbfb] opacity-60"></div>

            <div className="absolute inset-0 p-8 flex flex-col gap-4 items-center justify-center">
              <div className="w-full bg-white rounded-2xl shadow-sm border border-white/50 p-6 relative z-10 transform -translate-y-2 group-hover:-translate-y-4 transition-transform duration-500 ease-out">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
                    <iconify-icon
                      icon="lucide:hexagon"
                      class="text-xl"
                      stroke-width="1.5"
                    ></iconify-icon>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-base">
                      Pro Plan
                    </h3>
                    <p className="text-base text-gray-500">Billed monthly</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-base font-medium text-gray-900 mb-0.5">
                    Tokens
                  </h4>
                  <p className="text-base text-gray-500">
                    CA$0.01 per 1,000 units
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-gray-900 mb-2">
                    <iconify-icon
                      icon="lucide:gauge"
                      stroke-width="1.5"
                    ></iconify-icon>
                    Usage meter
                  </div>
                  <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400"></div>
                  </div>
                </div>
              </div>

              <div className="w-full bg-white rounded-2xl shadow-sm border border-white/50 p-6 relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Tokens used in the last 30 days
                </h4>
                <p className="text-2xl font-medium text-gray-900 tracking-tight mb-6">
                  2,010,569,010
                </p>

                <div className="flex items-end gap-1 h-24 mt-auto">
                  {[30, 45, 20, 60, 35, 80, 40, 55, 90, 100, 65, 85, 45].map(
                    (height, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t-[2px] ${
                          i === 5 ? 'bg-indigo-500' : 'bg-indigo-200'
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Agentic Commerce */}
          <div className="lg:col-span-1 relative bg-white rounded-3xl overflow-hidden border border-gray-200/60 shadow-sm group min-h-[500px] cursor-pointer p-8 flex flex-col">
            <div className="absolute inset-0 bg-[radial-gradient(#fbcfe8_1px,transparent_1px)] [background-size:12px_12px] opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-pink-50/50 to-transparent pointer-events-none"></div>

            <div className="relative z-20 flex justify-between">
              <h3 className="text-2xl font-medium tracking-tight text-gray-900 max-w-[200px] leading-tight">
                Monetise through agentic commerce
              </h3>
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <iconify-icon
                  icon="lucide:expand"
                  stroke-width="1.5"
                ></iconify-icon>
              </div>
            </div>

            <div className="relative z-10 mt-auto flex flex-col w-full">
              <div className="w-[90%] self-end bg-white rounded-2xl rounded-tr-sm p-4 shadow-sm border border-gray-100 mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <p className="text-base text-gray-800">
                  I'm refreshing my wardrobe. Can you recommend some cosy,
                  comfortable basics in size M?
                </p>
              </div>

              <div className="w-[95%] self-start bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm border border-gray-100 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
                <p className="text-base text-gray-800 mb-4">
                  Absolutely. Here are a few comfy essentials that pair well and
                  could be a good starting point:
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="border border-gray-100 rounded-xl p-3 bg-gray-50/30">
                    <div className="w-full aspect-square bg-[#0055ff]/10 rounded-lg mb-3 flex items-center justify-center">
                      <iconify-icon
                        icon="lucide:shirt"
                        class="text-[#0055ff] text-4xl"
                        stroke-width="1.5"
                      ></iconify-icon>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      Deluxe Shirt
                    </div>
                    <div className="text-xs text-gray-500 mb-1">
                      Blue - Medium
                    </div>
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      CA$35.00
                    </div>
                    <div className="text-xs text-gray-400">Cartsy</div>
                  </div>

                  <div className="border border-gray-100 rounded-xl p-3 bg-gray-50/30">
                    <div className="w-full aspect-square bg-[#0a2540]/10 rounded-lg mb-3 flex items-center justify-center">
                      <iconify-icon
                        icon="lucide:shirt"
                        class="text-[#0a2540] text-4xl"
                        stroke-width="1.5"
                      ></iconify-icon>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      Essential Hoodie
                    </div>
                    <div className="text-xs text-gray-500 mb-1">
                      Navy - Medium
                    </div>
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      CA$65.00
                    </div>
                    <div className="text-xs text-gray-400">Cartsy</div>
                  </div>
                </div>

                <button className="w-full py-3 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg font-medium text-base transition-colors">
                  Buy now
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Card Issuing */}
          <div className="lg:col-span-1 relative bg-white rounded-3xl overflow-hidden border border-gray-200/60 shadow-sm group min-h-[500px] cursor-pointer p-8 flex flex-col">
            <div className="absolute inset-0 bg-[radial-gradient(#fbcfe8_1px,transparent_1px)] [background-size:12px_12px] opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent"></div>

            <div className="relative z-20 flex justify-between">
              <h3 className="text-2xl font-medium tracking-tight text-gray-900 max-w-[220px] leading-tight">
                Create a card issuing programme
              </h3>
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <iconify-icon
                  icon="lucide:expand"
                  stroke-width="1.5"
                ></iconify-icon>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center pt-32">
              <div className="w-56 h-72 rounded-t-3xl bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-fuchsia-100 via-pink-400 to-purple-500 p-6 shadow-2xl transform translate-y-12 group-hover:translate-y-4 group-hover:rotate-2 group-hover:scale-105 transition-all duration-700 ease-out border border-white/40 flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-overlay pointer-events-none">
                  <div className="w-[200%] h-32 bg-white rounded-[100%] transform -rotate-12 translate-y-12 blur-md"></div>
                </div>

                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-8 bg-white/30 backdrop-blur border border-white/40 rounded flex items-center justify-center px-1">
                    <div className="w-full h-full border border-white/50 rounded-sm grid grid-cols-2 grid-rows-3 gap-[1px]">
                      <div className="border-r border-b border-white/50"></div>
                      <div className="border-b border-white/50"></div>
                      <div className="border-r border-b border-white/50"></div>
                      <div className="border-b border-white/50"></div>
                      <div className="border-r border-white/50"></div>
                      <div></div>
                    </div>
                  </div>

                  <iconify-icon
                    icon="lucide:wifi"
                    class="text-white text-2xl rotate-90"
                    stroke-width="2"
                  ></iconify-icon>
                </div>

                <div className="mt-auto flex justify-end relative z-10">
                  <span className="text-white font-bold text-3xl italic tracking-tighter">
                    VISA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Stablecoins + Globe */}
          <div className="lg:col-span-1 relative bg-white rounded-3xl overflow-hidden border border-gray-200/60 shadow-sm group min-h-[500px] cursor-pointer p-8 flex flex-col">
            <div className="absolute inset-0 bg-[radial-gradient(#f3e8ff_1px,transparent_1px)] [background-size:12px_12px] opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-[#faf7ff]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-50/40 via-transparent to-indigo-50/40 pointer-events-none"></div>

            <div className="relative z-20 flex justify-between">
              <h3 className="text-2xl font-medium tracking-tight text-gray-900 max-w-[260px] leading-tight">
                Access borderless money movement with stablecoins and crypto
              </h3>
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <iconify-icon
                  icon="lucide:expand"
                  stroke-width="1.5"
                ></iconify-icon>
              </div>
            </div>

            <div className="absolute top-0 right-0 bottom-0 left-0 z-10 flex items-center justify-center overflow-hidden">
              {/* Arc */}
              <svg
                className="absolute w-[140%] h-[140%] top-1/4 left-[-20%] group-hover:scale-105 transition-transform duration-1000 ease-out"
                viewBox="0 0 400 400"
                fill="none"
              >
                <path
                  d="M0,350 C150,150 250,50 400,200"
                  stroke="#e5e7eb"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M0,350 C150,150 250,50 400,200"
                  stroke="url(#line-grad)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <defs>
                  <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0" />
                    <stop offset="50%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Globe */}
              <div className="absolute bottom-[-88px] right-[-44px] w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,#f5ecff_28%,#ddd6fe_58%,#c4b5fd_78%,#a78bfa_100%)] shadow-[0_20px_60px_rgba(167,139,250,0.18)] border border-white/60 group-hover:scale-105 transition-transform duration-700 ease-out overflow-hidden">
                <div className="absolute inset-[10%] rounded-full border border-white/50"></div>
                <div className="absolute inset-[22%] rounded-full border border-white/40"></div>

                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/50"></div>
                <div className="absolute inset-x-[18%] top-1/2 -translate-y-1/2 h-px bg-white/50"></div>
                <div className="absolute inset-x-[10%] top-[34%] h-px bg-white/35 rounded-full"></div>
                <div className="absolute inset-x-[10%] bottom-[34%] h-px bg-white/35 rounded-full"></div>

                <div className="absolute top-[16%] left-[28%] w-[44%] h-[68%] rounded-full border border-white/40 rotate-[18deg]"></div>
                <div className="absolute top-[16%] left-[28%] w-[44%] h-[68%] rounded-full border border-white/30 -rotate-[18deg]"></div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.65),transparent_30%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.12),transparent_35%)]"></div>
              </div>

              {/* Floating pills */}
              <div className="absolute top-[45%] left-[20%] bg-white border border-gray-100 shadow-sm rounded-full py-1.5 px-3 flex items-center gap-2 text-base font-medium text-gray-900 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                <iconify-icon
                  icon="lucide:coins"
                  class="text-indigo-500"
                  stroke-width="1.5"
                ></iconify-icon>
                2
                <span className="text-gray-400 text-sm">USDC</span>
              </div>

              <div className="absolute top-[30%] right-[15%] bg-white border border-gray-100 shadow-sm rounded-full py-1.5 px-3 flex items-center gap-2 text-base font-medium text-gray-900 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-150 ease-out">
                <iconify-icon
                  icon="lucide:wallet"
                  class="text-orange-500"
                  stroke-width="1.5"
                ></iconify-icon>
                $652
                <span className="text-gray-400 text-sm">USDC</span>
              </div>

              <div className="absolute bottom-[22%] left-[16%] bg-white/90 backdrop-blur border border-gray-100 shadow-sm rounded-full py-1.5 px-3 flex items-center gap-2 text-sm font-medium text-gray-900 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-300 ease-out">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                Live settlement
              </div>
            </div>
          </div>

          {/* Card 6: Embed payments */}
          <div className="lg:col-span-3 overflow-hidden group min-h-[500px] md:min-h-[550px] cursor-pointer flex flex-col md:flex-row bg-white border border-gray-200/60 rounded-3xl relative shadow-sm">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-purple-50/50 z-0 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[300px] bg-pink-400/20 blur-[80px] rounded-full z-0 pointer-events-none"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[500px] bg-purple-500/20 blur-[80px] rounded-full z-0 pointer-events-none"></div>

            {/* Background lines */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-3xl">
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.18]"
                viewBox="0 0 1200 600"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="embed-lines-pink"
                    x="0"
                    y="0"
                    width="14"
                    height="14"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(50)"
                  >
                    <line x1="0" y1="0" x2="0" y2="14" stroke="#f9a8d4" strokeWidth="2" />
                  </pattern>

                  <pattern
                    id="embed-lines-purple"
                    x="0"
                    y="0"
                    width="14"
                    height="14"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(50)"
                  >
                    <line x1="0" y1="0" x2="0" y2="14" stroke="#a78bfa" strokeWidth="2" />
                  </pattern>

                  <linearGradient id="embed-fade-left" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                    <stop offset="45%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="1" />
                  </linearGradient>

                  <linearGradient id="embed-fade-right" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="55%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <rect x="0" y="0" width="420" height="600" fill="url(#embed-lines-pink)" />
                <rect x="780" y="0" width="420" height="600" fill="url(#embed-lines-purple)" />
                <rect x="0" y="0" width="420" height="600" fill="url(#embed-fade-left)" />
                <rect x="780" y="0" width="420" height="600" fill="url(#embed-fade-right)" />
              </svg>
            </div>

            {/* Left heading */}
            <div className="relative z-10 w-full md:w-[28%] p-6 md:p-8 flex items-start">
              <div>
                <h3 className="text-[22px] md:text-[28px] font-medium tracking-tight text-gray-900 leading-[1.05] max-w-[240px]">
                  Embed payments
                  <br />
                  in your platform
                </h3>
              </div>
            </div>

            {/* Right visual area */}
            <div className="relative z-10 flex-1 min-h-[420px] md:min-h-[550px] p-4 md:p-5">
              {/* Browser window */}
              <div className="absolute right-4 md:right-6 top-4 md:top-5 w-[78%] h-[78%] bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/70">
                  <div className="flex gap-2 mr-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  </div>

                  <div className="mx-auto text-xs text-gray-500 font-medium bg-white border border-gray-100 rounded-full px-4 py-1 min-w-[220px] text-center">
                    <span className="inline-flex items-center gap-1.5">
                      <iconify-icon icon="lucide:lock" width="12"></iconify-icon>
                      dashboard.zenflow.com
                    </span>
                  </div>

                  <div className="w-10"></div>
                </div>

                <div className="grid grid-cols-[180px_1fr] h-[calc(100%-40px)]">
                  {/* Sidebar */}
                  <div className="border-r border-gray-100 bg-white/80 p-4">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
                        <iconify-icon icon="lucide:flower-2" width="16"></iconify-icon>
                      </div>
                      <span className="font-medium text-gray-900">Zenflow</span>
                    </div>

                    <div className="space-y-3 text-sm text-gray-500">
                      <div className="h-3 w-24 bg-gray-100 rounded-full"></div>
                      <div className="h-3 w-20 bg-gray-100 rounded-full"></div>
                      <div className="h-3 w-16 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="p-5">
                    <h4 className="text-[16px] md:text-[18px] font-medium text-gray-900 mb-5">
                      Connected Accounts
                    </h4>

                    <div className="grid grid-cols-4 text-[11px] md:text-xs text-gray-500 font-medium border-b border-gray-100 pb-3 mb-2">
                      <div>Accounts</div>
                      <div>Account country</div>
                      <div>Payment balance (CAD)</div>
                      <div>Volume (USD)</div>
                    </div>

                    <div className="space-y-1.5 text-[11px] md:text-sm">
                      {[
                        ['Vital Flow', 'Canada', 'CA$11,270.00', 'CA$96,610.02', 'bg-stone-100'],
                        ['Daybreak Yoga', 'United States', 'CA$2,028.00', 'CA$11,989.00', 'bg-indigo-500'],
                        ['Sacred Space', 'UK', 'CA$1,683.00', 'CA$33,168.27', 'bg-amber-400'],
                        ['Jackson Hot Yoga', 'Australia', 'CA$4,940.00', 'CA$17,068.46', 'bg-orange-500'],
                        ['Harmony Flow', 'United States', 'CA$41,760.00', 'CA$397,804.03', 'bg-gradient-to-br from-pink-400 to-orange-300'],
                        ['Balance at Brunch', 'Canada', 'CA$452.00', 'CA$4,927.99', 'bg-indigo-400'],
                        ['Breathline Studio', 'United States', 'CA$3,031.00', 'CA$11,621.00', 'bg-gray-300'],
                        ['Quiet Fire Yoga', 'UK', 'CA$524.00', 'CA$2,117.97', 'bg-orange-200'],
                        ['Zenith Zen', 'Australia', 'CA$891.00', 'CA$2,218.46', 'bg-orange-500'],
                        ['M.E. Yoga', 'Canada', 'CA$5,972.00', 'CA$9,057.96', 'bg-amber-400'],
                      ].map(([name, country, balance, volume, dot], i) => (
                        <div
                          key={i}
                          className="grid grid-cols-4 items-center py-2.5 border-b border-gray-100/80 text-gray-700"
                        >
                          <div className="flex items-center gap-2 font-medium text-gray-800 min-w-0">
                            <div className={`w-4 h-4 rounded-full shrink-0 ${dot}`}></div>
                            <span className="truncate">{name}</span>
                          </div>
                          <div className="text-gray-500">{country}</div>
                          <div className="text-gray-500">{balance}</div>
                          <div className="text-gray-500">{volume}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating receipt card */}
              <div className="absolute left-[6%] top-[18%] w-[290px] md:w-[320px] bg-white rounded-2xl border border-gray-200 shadow-[0_18px_50px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                      <iconify-icon icon="lucide:flame" width="16"></iconify-icon>
                    </div>
                    <div className="font-medium text-gray-900">Quiet Fire Yoga</div>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    Thank you!
                    <br />
                    Your payment was successful.
                  </p>
                </div>

                <div className="p-5 space-y-4 text-sm">
                  {[
                    ['Order number', '#194756'],
                    ['Date', '20 Feb'],
                    ['Payment method', '__PAYMENT__'],
                    ['Your purchase', '£22.00'],
                    ['Total', '£22.00'],
                  ].map(([label, value], i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="text-gray-500">{label}</span>

                      {value === '__PAYMENT__' ? (
                        <div className="w-7 h-5 rounded bg-green-400 flex items-center justify-center text-black">
                          <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
                        </div>
                      ) : (
                        <span className="font-medium text-gray-800">{value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector */}
              <div className="absolute left-[18%] top-[10%] flex items-center gap-2 text-xs font-medium text-gray-700">
                <span className="bg-white border border-gray-200 rounded-full px-2 py-1 shadow-sm">£22.00</span>
                <div className="w-16 h-px bg-pink-200"></div>
                <div className="w-2.5 h-2.5 rounded-full border-2 border-pink-300 bg-white"></div>
              </div>

              {/* Top right button */}
              <div className="absolute right-6 top-6 w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-indigo-600">
                <iconify-icon icon="lucide:expand" strokeWidth="1.5"></iconify-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;