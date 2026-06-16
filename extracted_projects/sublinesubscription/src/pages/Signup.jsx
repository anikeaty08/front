import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[85vh] flex items-center justify-center">
      <div className="w-full max-w-[440px]">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <iconify-icon icon="solar:layers-linear" width="28" className="text-white" style={{ strokeWidth: 1.5 }}></iconify-icon>
          </Link>
          <h1 className="text-3xl tracking-tight text-white mb-2 font-geist font-medium">Create an account</h1>
          <p className="text-[#b0b3b8] font-geist text-sm">Start managing your recurring revenue today</p>
        </div>

        <div className="bg-[#0c0d0f] border border-[#2e2e32] p-8 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>

          <div className="space-y-4 mb-6 mt-2">
            <button className="w-full bg-[#15171b] border border-[#2e2e32] hover:bg-white/5 hover:border-white/10 text-white font-medium py-2.5 rounded-xl transition-all font-geist flex items-center justify-center gap-3">
              <iconify-icon icon="simple-icons:google" width="16"></iconify-icon>
              Sign up with Google
            </button>
          </div>

          <div className="relative flex items-center py-4 mb-2">
            <div className="flex-grow border-t border-[#2e2e32]"></div>
            <span className="flex-shrink-0 mx-4 text-[#7e828a] text-xs font-geist uppercase tracking-wider font-semibold">Or register with email</span>
            <div className="flex-grow border-t border-[#2e2e32]"></div>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-medium text-[#b0b3b8] mb-2 font-geist tracking-wide">First Name</label>
                <input type="text" className="w-full bg-[#15171b] border border-[#2e2e32] rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all font-geist" placeholder="Jane" />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#b0b3b8] mb-2 font-geist tracking-wide">Last Name</label>
                <input type="text" className="w-full bg-[#15171b] border border-[#2e2e32] rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all font-geist" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <label className="block text-[13px] font-medium text-[#b0b3b8] mb-2 font-geist tracking-wide">Company Name</label>
              <input type="text" className="w-full bg-[#15171b] border border-[#2e2e32] rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all font-geist" placeholder="Acme Corp" />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-[#b0b3b8] mb-2 font-geist tracking-wide">Work Email</label>
              <input type="email" className="w-full bg-[#15171b] border border-[#2e2e32] rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all font-geist" placeholder="jane@acme.com" />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-[#b0b3b8] mb-2 font-geist tracking-wide">Password</label>
              <input type="password" className="w-full bg-[#15171b] border border-[#2e2e32] rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all font-geist" placeholder="••••••••" />
              <p className="text-[11px] text-[#7e828a] mt-2 font-geist">Must be at least 8 characters long.</p>
            </div>
            
            <button type="button" className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98] font-geist mt-4 flex items-center justify-center gap-2 group">
              Create Account
              <iconify-icon icon="solar:arrow-right-linear" width="18" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
            </button>
            
            <p className="text-[11px] text-[#7e828a] text-center font-geist leading-relaxed mt-4">
              By signing up, you agree to our <Link to="/contact" className="underline hover:text-white transition-colors">Terms of Service</Link> and <Link to="/contact" className="underline hover:text-white transition-colors">Privacy Policy</Link>.
            </p>
          </form>
        </div>

        <p className="text-center mt-8 text-sm text-[#7e828a] font-geist">
          Already have an account? <Link to="/login" className="text-white hover:text-blue-400 transition-colors">Log in</Link>
        </p>
      </div>
    </div>
  );
}