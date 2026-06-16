import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-[#2e2e32] bg-[#050505] pt-20 pb-10 mt-auto">
        <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
                <div className="col-span-2">
                    <Link to="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
                        <iconify-icon icon="solar:layers-linear" width="24" height="24" className="text-white" style={{ strokeWidth: 1.5 }}></iconify-icon>
                        <span className="font-normal text-lg tracking-tight font-geist text-white">Subline</span>
                    </Link>
                    <p className="text-[#b0b3b8] text-sm max-w-xs font-geist leading-relaxed mb-6">
                        The subscription operating system for modern scaling. Purpose-built for managing recurring revenue and reducing churn.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-[#7e828a] hover:text-white transition-colors">
                            <iconify-icon icon="simple-icons:x" width="18"></iconify-icon>
                        </a>
                        <a href="#" className="text-[#7e828a] hover:text-white transition-colors">
                            <iconify-icon icon="simple-icons:github" width="18"></iconify-icon>
                        </a>
                        <a href="#" className="text-[#7e828a] hover:text-white transition-colors">
                            <iconify-icon icon="simple-icons:linkedin" width="18"></iconify-icon>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-white font-medium mb-4 text-sm font-geist">Product</h4>
                    <ul className="space-y-3 text-sm text-[#7e828a]">
                        <li><Link to="/product" className="hover:text-white transition-colors font-geist">Features</Link></li>
                        <li><Link to="/pricing" className="hover:text-white transition-colors font-geist">Pricing</Link></li>
                        <li><Link to="/billing" className="hover:text-white transition-colors flex items-center gap-2 font-geist">AI Agents <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] px-1.5 py-0.5 rounded font-medium">NEW</span></Link></li>
                        <li><Link to="/integrations" className="hover:text-white transition-colors font-geist">Integrations</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-medium mb-4 text-sm font-geist">Resources</h4>
                    <ul className="space-y-3 text-sm text-[#7e828a]">
                        <li><Link to="/product" className="hover:text-white transition-colors font-geist">Documentation</Link></li>
                        <li><Link to="/product" className="hover:text-white transition-colors font-geist">API Reference</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors font-geist">Help Center</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-medium mb-4 text-sm font-geist">Company</h4>
                    <ul className="space-y-3 text-sm text-[#7e828a]">
                        <li><Link to="/contact" className="hover:text-white transition-colors font-geist">About</Link></li>
                        <li><Link to="/customers" className="hover:text-white transition-colors font-geist">Customers</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors font-geist">Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-[#2e2e32] flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-6 text-sm text-[#7e828a]">
                    <span className="font-geist">© {new Date().getFullYear()} Subline Inc.</span>
                    <Link to="/contact" className="hover:text-white transition-colors font-geist">Privacy</Link>
                    <Link to="/contact" className="hover:text-white transition-colors font-geist">Terms</Link>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-[#7e828a] font-geist hover:text-white transition-colors cursor-pointer">
                    <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                    All systems operational
                </div>
            </div>
        </div>
    </footer>
  );
}