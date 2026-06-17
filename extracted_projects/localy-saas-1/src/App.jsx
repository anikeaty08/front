import React from 'react';

function App() {
  return (
    <div className="bg-slate-50 text-slate-900 antialiased selection:bg-slate-200 selection:text-slate-900 flex flex-col min-h-screen">
      
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center">
              <iconify-icon icon="solar:map-point-linear" className="text-xl"></iconify-icon>
            </div>
            <span className="font-medium tracking-tighter text-xl">localy</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-normal text-slate-600 hover:text-slate-900 transition-colors">Features</a>
            <a href="#" className="text-sm font-normal text-slate-600 hover:text-slate-900 transition-colors">Solutions</a>
            <a href="#" className="text-sm font-normal text-slate-600 hover:text-slate-900 transition-colors">Customers</a>
            <a href="#" className="text-sm font-normal text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:block text-sm font-normal text-slate-600 hover:text-slate-900 transition-colors">Log in</a>
            <a href="#" className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm">
              Start Free Trial
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            New: Automated Review Generation
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-slate-900 leading-[1.1] max-w-4xl mx-auto mb-6">
            Turn local searches into <br className="hidden sm:block" /> loyal customers.
          </h1>
          
          <p className="text-lg md:text-xl font-normal text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            The all-in-one platform for restaurants, gyms, and clinics to manage online bookings, build a stronger reputation, and generate more local leads.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="w-full sm:w-auto bg-slate-900 text-white text-base font-medium px-6 py-3 rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              Get Started Free
              <iconify-icon icon="solar:arrow-right-linear" className="text-lg"></iconify-icon>
            </a>
            <a href="#" className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 text-base font-medium px-6 py-3 rounded-full hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <iconify-icon icon="solar:play-circle-linear" className="text-lg text-slate-500"></iconify-icon>
              See how it works
            </a>
          </div>

          {/* Dashboard Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl">
            {/* Decorative background elements */}
            <div className="absolute -top-10 -inset-x-10 bg-gradient-to-b from-slate-100 to-transparent h-full rounded-full blur-3xl opacity-50 -z-10"></div>
            
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-2xl overflow-hidden text-left flex flex-col md:flex-row h-auto md:h-[400px]">
              
              {/* Sidebar Mockup */}
              <div className="w-full md:w-64 bg-slate-50 border-r border-slate-100 p-4 flex flex-col gap-6 hidden md:flex">
                <div className="flex items-center gap-2 px-2">
                  <div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <iconify-icon icon="solar:shop-linear" className="text-sm"></iconify-icon>
                  </div>
                  <span className="text-sm font-medium tracking-tight">Main St. Cafe</span>
                  <iconify-icon icon="solar:alt-arrow-down-linear" className="ml-auto text-slate-400 text-xs"></iconify-icon>
                </div>
                
                <nav className="flex flex-col gap-1">
                  <div className="px-3 py-2 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center gap-3 text-slate-900">
                    <iconify-icon icon="solar:widget-linear" className="text-lg"></iconify-icon>
                    <span className="text-sm font-medium">Overview</span>
                  </div>
                  <div className="px-3 py-2 rounded-lg flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                    <iconify-icon icon="solar:calendar-date-linear" className="text-lg"></iconify-icon>
                    <span className="text-sm font-normal">Bookings</span>
                    <span className="ml-auto bg-slate-200 text-slate-600 text-xs py-0.5 px-2 rounded-full">12</span>
                  </div>
                  <div className="px-3 py-2 rounded-lg flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                    <iconify-icon icon="solar:users-group-rounded-linear" className="text-lg"></iconify-icon>
                    <span className="text-sm font-normal">Clients</span>
                  </div>
                  <div className="px-3 py-2 rounded-lg flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                    <iconify-icon icon="solar:star-linear" className="text-lg"></iconify-icon>
                    <span className="text-sm font-normal">Reviews</span>
                  </div>
                </nav>
              </div>

              {/* Main Area Mockup */}
              <div className="flex-1 p-6 lg:p-8 flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-lg font-medium tracking-tight text-slate-900">Today's Activity</h3>
                    <p className="text-xs font-normal text-slate-500 mt-1">Thursday, Oct 24</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-slate-600">Accepting Walk-ins</span>
                    {/* Custom Toggle */}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only mockup-toggle" defaultChecked />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full transition-colors duration-200 ease-in-out">
                        <div className="dot absolute left-[2px] top-[2px] bg-white border border-slate-200 rounded-full h-4 w-4 transition-transform duration-200 ease-in-out shadow-sm"></div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                    <div className="text-slate-500 mb-1"><iconify-icon icon="solar:calendar-add-linear" className="text-lg"></iconify-icon></div>
                    <div className="text-2xl font-medium tracking-tight text-slate-900 mb-1">24</div>
                    <div className="text-xs font-normal text-slate-500 flex items-center gap-1">
                      <span className="text-emerald-500 flex items-center"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 12%</span> vs last week
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                    <div className="text-slate-500 mb-1"><iconify-icon icon="solar:user-plus-linear" className="text-lg"></iconify-icon></div>
                    <div className="text-2xl font-medium tracking-tight text-slate-900 mb-1">8</div>
                    <div className="text-xs font-normal text-slate-500">New leads generated</div>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                    <div className="text-slate-500 mb-1"><iconify-icon icon="solar:star-fall-linear" className="text-lg"></iconify-icon></div>
                    <div className="text-2xl font-medium tracking-tight text-slate-900 mb-1">4.9</div>
                    <div className="text-xs font-normal text-slate-500">Average rating across sites</div>
                  </div>
                </div>

                {/* Upcoming List */}
                <div className="flex-1">
                  <h4 className="text-sm font-medium tracking-tight text-slate-900 mb-3 border-b border-slate-100 pb-2">Upcoming Appointments</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">JD</div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">John Doe</p>
                          <p className="text-xs font-normal text-slate-500">Consultation • Online Booking</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-slate-900">10:00 AM</p>
                        <span className="inline-block px-2 py-0.5 mt-1 bg-emerald-50 text-emerald-600 text-[10px] font-medium rounded-full border border-emerald-100">Confirmed</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">SM</div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">Sarah Miller</p>
                          <p className="text-xs font-normal text-slate-500">Standard Session • Walk-in</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-slate-900">11:30 AM</p>
                        <span className="inline-block px-2 py-0.5 mt-1 bg-amber-50 text-amber-600 text-[10px] font-medium rounded-full border border-amber-100">Pending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions for Verticals Section */}
        <section className="py-24 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Built for your specific needs</h2>
              <p className="text-base text-slate-500 font-normal">We understand that a restaurant doesn't operate like a clinic. Our platform adapts to how you do business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Restaurant Card */}
              <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <iconify-icon icon="solar:cup-outline" className="text-2xl text-slate-700"></iconify-icon>
                </div>
                <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Restaurants &amp; Cafes</h3>
                <p className="text-sm font-normal text-slate-500 mb-6 leading-relaxed">Manage table reservations, showcase digital menus, and automatically collect reviews after a meal to boost your local ranking.</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-400"></iconify-icon> Seamless table booking
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-400"></iconify-icon> Waitlist management
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-400"></iconify-icon> Google Maps integration
                  </li>
                </ul>
                <a href="#" className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all">Explore for Dining <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
              </div>

              {/* Gym Card */}
              <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <iconify-icon icon="solar:dumbbell-outline" className="text-2xl text-slate-700"></iconify-icon>
                </div>
                <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Gyms &amp; Studios</h3>
                <p className="text-sm font-normal text-slate-500 mb-6 leading-relaxed">Let members book classes online, manage subscriptions, sign digital waivers, and generate leads with trial offers.</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-400"></iconify-icon> Class scheduling
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-400"></iconify-icon> Lead capture forms
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-400"></iconify-icon> Automated follow-ups
                  </li>
                </ul>
                <a href="#" className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all">Explore for Fitness <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
              </div>

              {/* Clinic Card */}
              <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <iconify-icon icon="solar:stethoscope-outline" className="text-2xl text-slate-700"></iconify-icon>
                </div>
                <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Health &amp; Clinics</h3>
                <p className="text-sm font-normal text-slate-500 mb-6 leading-relaxed">Secure appointment scheduling, automated reminders to reduce no-shows, and streamlined patient intake processes.</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-400"></iconify-icon> Private consultation booking
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-400"></iconify-icon> SMS reminders
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-400"></iconify-icon> Secure client portals
                  </li>
                </ul>
                <a href="#" className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all">Explore for Health <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlight */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-slate-100 rounded-3xl transform rotate-3 scale-105 border border-slate-200/50"></div>
                <div className="absolute inset-0 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col">
                  <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <span className="text-sm font-medium text-slate-900">Online Directory Profile</span>
                    <span className="flex items-center text-amber-400 text-xs gap-0.5">
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-center gap-4">
                    <div className="w-full h-32 bg-slate-100 rounded-xl mb-2 flex items-center justify-center text-slate-300">
                      <iconify-icon icon="solar:gallery-linear" className="text-3xl"></iconify-icon>
                    </div>
                    <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
                    <div className="h-3 w-1/2 bg-slate-100 rounded"></div>
                    <div className="mt-4 flex gap-2">
                      <div className="h-8 flex-1 bg-slate-900 rounded-lg flex items-center justify-center">
                        <span className="h-2 w-12 bg-white/20 rounded"></span>
                      </div>
                      <div className="h-8 w-10 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center">
                        <iconify-icon icon="solar:phone-linear" className="text-slate-500 text-sm"></iconify-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Be found exactly when they are looking.</h2>
              <p className="text-base text-slate-500 font-normal mb-8 leading-relaxed">
                Create an optimized, high-converting profile in our local directory. We ensure your business details, operating hours, and booking links are synced across search engines, driving high-intent local traffic directly to your doorstep.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-indigo-50 flex flex-shrink-0 items-center justify-center text-indigo-600">
                    <iconify-icon icon="solar:magnifer-linear"></iconify-icon>
                  </div>
                  <div>
                    <h4 className="text-base font-medium tracking-tight text-slate-900 mb-1">SEO-Optimized Listings</h4>
                    <p className="text-sm font-normal text-slate-500">Rank higher in "near me" searches with structured data built into your profile.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-emerald-50 flex flex-shrink-0 items-center justify-center text-emerald-600">
                    <iconify-icon icon="solar:mouse-circle-linear"></iconify-icon>
                  </div>
                  <div>
                    <h4 className="text-base font-medium tracking-tight text-slate-900 mb-1">One-Click Booking</h4>
                    <p className="text-sm font-normal text-slate-500">Reduce friction. Let customers book a table, class, or appointment directly from search results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center border border-slate-800 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Ready to modernize your local business?</h2>
              <p className="text-base font-normal text-slate-400 mb-8 max-w-xl mx-auto">
                Join thousands of local restaurants, gyms, and clinics growing their customer base with Localy. Set up takes less than 5 minutes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#" className="w-full sm:w-auto bg-white text-slate-900 text-base font-medium px-6 py-3 rounded-full hover:bg-slate-100 transition-all shadow-md">
                  Start your 14-day free trial
                </a>
                <span className="text-sm text-slate-500 font-normal">No credit card required</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-slate-900 text-white rounded flex items-center justify-center">
                  <iconify-icon icon="solar:map-point-linear" className="text-sm"></iconify-icon>
                </div>
                <span className="font-medium tracking-tighter text-lg">localy</span>
              </div>
              <p className="text-sm font-normal text-slate-500 max-w-xs mb-6">
                Empowering local neighborhoods by connecting great businesses with their community through simple, powerful software.
              </p>
              <div className="flex items-center gap-4 text-slate-400">
                <a href="#" className="hover:text-slate-900 transition-colors"><iconify-icon icon="solar:link-circle-linear" className="text-xl"></iconify-icon></a>
                <a href="#" className="hover:text-slate-900 transition-colors"><iconify-icon icon="solar:letter-linear" className="text-xl"></iconify-icon></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-slate-900 mb-4 tracking-tight">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors">Booking System</a></li>
                <li><a href="#" className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors">Local Directory</a></li>
                <li><a href="#" className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors">Lead Generation</a></li>
                <li><a href="#" className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-slate-900 mb-4 tracking-tight">Solutions</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors">For Restaurants</a></li>
                <li><a href="#" className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors">For Gyms &amp; Fitness</a></li>
                <li><a href="#" className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors">For Health Clinics</a></li>
                <li><a href="#" className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors">For Salons</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-slate-900 mb-4 tracking-tight">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors">Contact</a></li>
                <li><a href="#" className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-normal text-slate-400">© 2024 Localy Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-xs font-normal text-slate-400 hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs font-normal text-slate-400 hover:text-slate-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;