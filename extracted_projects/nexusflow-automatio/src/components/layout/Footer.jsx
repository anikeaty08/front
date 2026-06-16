import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="overflow-hidden z-10 bg-[#000000] border-neutral-900/80 border-t pt-16 pb-8 relative w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 text-lg font-medium tracking-tight text-white mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <iconify-icon icon="solar:layers-minimalistic-linear" class="text-white text-xl"></iconify-icon>
              </div>
              <span className="tracking-tight">NexusFlow</span>
            </Link>
            <p className="text-sm text-neutral-400 font-light max-w-xs leading-relaxed mb-6">
              The modern automation platform designed for speed, scale, and seamless integrations. Build faster, break less.
            </p>
            <div className="flex items-center gap-4 text-neutral-500">
              <a href="#" className="hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:x" class="text-lg"></iconify-icon>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:github" class="text-lg"></iconify-icon>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:linkedin" class="text-lg"></iconify-icon>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:youtube" class="text-lg"></iconify-icon>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Product</h4>
            <ul className="flex flex-col gap-4 text-sm text-neutral-400 font-light">
              <li><Link to="/platform" className="hover:text-white transition-colors">Integrations</Link></li>
              <li><Link to="/platform" className="hover:text-white transition-colors">Visual Builder</Link></li>
              <li><Link to="/platform" className="hover:text-white transition-colors">Edge Engine</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Resources</h4>
            <ul className="flex flex-col gap-4 text-sm text-neutral-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-neutral-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customers</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 border-neutral-900/80 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
          <div className="text-sm text-neutral-600 font-light">
            © {new Date().getFullYear()} NexusFlow Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-neutral-600 font-light">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}