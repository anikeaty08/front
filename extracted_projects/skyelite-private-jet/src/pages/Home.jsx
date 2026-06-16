import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Subtle Overlay to enhance text readability */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="text-center px-6 -mt-80">
          <p className="text-sm font-semibold text-gray-600 tracking-wider mb-4 uppercase">
            PRIVATE JETS
          </p>
          
          <div className="flex flex-col items-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500 leading-none tracking-tighter">
              Premium.
            </h1>
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter"
              style={{ color: '#202A36', marginTop: '-12px' }}
            >
              Accessible.
            </h1>
          </div>

          <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-normal">
            Your dedication deserves recognition.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="px-8 py-3 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-all duration-300 ease-in-out active:scale-95 shadow-sm">
              Discover
            </button>
            <button 
              className="px-8 py-3 rounded-full text-white font-medium transition-all duration-300 ease-in-out active:scale-95 shadow-lg"
              style={{ 
                backgroundColor: '#202A36',
                // Adding a hover effect dynamically
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1a2229'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#202A36'}
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Scroll Indicator (Visual only) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
          <div className="w-[1px] h-12 bg-gray-400" />
          <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Placeholder content for scrolling context */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "solar:crown-minimalistic-linear",
                title: "First Class Only",
                desc: "Experience travel as it was meant to be. Pure luxury at every touchpoint."
              },
              {
                icon: "solar:shield-check-linear",
                title: "Safety First",
                desc: "Our fleet meets the highest safety standards in the private aviation industry."
              },
              {
                icon: "solar:clock-circle-linear",
                title: "Your Time",
                desc: "Fly on your schedule. No queues, no delays, just seamless transitions."
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <iconify-icon icon={item.icon} style={{ fontSize: '24px', color: '#202A36' }}></iconify-icon>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;