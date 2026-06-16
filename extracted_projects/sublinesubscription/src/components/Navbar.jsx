import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex w-full border-[#2e2e32] border-b pt-4 pr-6 pb-4 pl-6 top-0 items-center justify-between" style={{ background: 'rgba(15, 17, 21, 0.7)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <iconify-icon icon="solar:layers-linear" width="20" height="20" className="text-white" style={{ strokeWidth: 1.5 }}></iconify-icon>
            <span className="font-normal text-base tracking-tight font-geist text-white">Subline</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#b0b3b8]">
            <Link to="/product" className="hover:text-white transition-colors font-geist">Product</Link>
            <Link to="/integrations" className="hover:text-white transition-colors font-geist">Integrations</Link>
            <Link to="/customers" className="hover:text-white transition-colors font-geist">Customers</Link>
            <Link to="/pricing" className="hover:text-white transition-colors font-geist">Pricing</Link>
            <Link to="/billing" className="hover:text-white transition-colors flex items-center gap-1 font-geist">Billing <span className="bg-[#2e2e32] text-xs px-1.5 rounded-sm text-white font-geist">New</span></Link>
            <Link to="/contact" className="hover:text-white transition-colors font-geist">Contact</Link>
        </div>
        <div className="flex items-center gap-6">
            <Link to="/login" className="text-sm font-normal hover:text-white text-[#b0b3b8] transition-colors font-geist">Log in</Link>
            <Link to="/signup" className="bg-white text-black text-sm font-normal px-4 py-2 rounded-full hover:bg-gray-200 transition-colors font-geist">Sign up</Link>
        </div>
    </nav>
  );
}