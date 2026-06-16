import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-black pt-20 pb-12 relative z-20 border-t border-zinc-900 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-20">
          <div className="col-span-2 md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <iconify-icon icon="lucide:box" class="text-white text-xl"></iconify-icon>
              <span className="text-lg font-semibold tracking-tight text-white">Nexus</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs font-light">
              The control plane for the modern web. Nexus orchestrates your backend infrastructure with zero configuration.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-zinc-600 hover:text-white transition-colors"><iconify-icon icon="simple-icons:x" width="18"></iconify-icon></a>
              <a href="#" className="text-zinc-600 hover:text-white transition-colors"><iconify-icon icon="simple-icons:github" width="18"></iconify-icon></a>
              <a href="#" className="text-zinc-600 hover:text-white transition-colors"><iconify-icon icon="simple-icons:discord" width="18"></iconify-icon></a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <h4 className="text-sm font-medium text-white mb-6">Product</h4>
            <ul className="flex flex-col gap-3 text-sm text-zinc-500 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Orchestration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Edge Functions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Databases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-sm font-medium text-white mb-6">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-zinc-500 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-sm font-medium text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-zinc-500 font-light">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Log In</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-zinc-600 font-mono">
            © 2024 Nexus Systems Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}