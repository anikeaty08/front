export default function Contact() {
  return (
    <div className="pt-40 pb-24 px-6 max-w-[800px] mx-auto min-h-[80vh]">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl tracking-tight text-white mb-6 font-geist font-light">Get in touch</h1>
        <p className="text-xl text-[#b0b3b8] font-geist font-light">Our team is ready to help you map out your revenue infrastructure and optimize your billing workflows.</p>
      </div>
      
      <form className="bg-[#0c0d0f] border border-[#2e2e32] p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6 mt-2">
          <div>
            <label className="block text-[13px] font-medium text-[#b0b3b8] mb-2 font-geist tracking-wide">First Name</label>
            <input type="text" className="w-full bg-[#15171b] border border-[#2e2e32] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all font-geist" placeholder="Jane" />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-[#b0b3b8] mb-2 font-geist tracking-wide">Last Name</label>
            <input type="text" className="w-full bg-[#15171b] border border-[#2e2e32] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all font-geist" placeholder="Doe" />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-[13px] font-medium text-[#b0b3b8] mb-2 font-geist tracking-wide">Work Email</label>
          <input type="email" className="w-full bg-[#15171b] border border-[#2e2e32] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all font-geist" placeholder="jane@company.com" />
        </div>
        
        <div className="mb-8">
          <label className="block text-[13px] font-medium text-[#b0b3b8] mb-2 font-geist tracking-wide">How can we help?</label>
          <textarea rows="5" className="w-full bg-[#15171b] border border-[#2e2e32] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all font-geist resize-none" placeholder="Tell us about your current billing stack and goals..."></textarea>
        </div>
        
        <button type="button" className="w-full bg-white text-black font-medium py-3.5 rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98] font-geist flex items-center justify-center gap-2 group">
          Send Message
          <iconify-icon icon="solar:arrow-right-linear" width="18" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
        </button>
      </form>
    </div>
  );
}