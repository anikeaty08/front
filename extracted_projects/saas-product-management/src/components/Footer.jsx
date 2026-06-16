import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 md:px-12 relative overflow-hidden z-10">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        
        <div className="flex flex-col lg:flex-row justify-between mb-20 gap-12">
          
          <div className="max-w-xs flex flex-col gap-6">
            <Link to="/" className="w-[100px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22a501b8-fdc0-4b37-85e9-0367b65fcc58_1600w.png')] bg-cover rounded hover:opacity-100 opacity-80 transition-opacity"></Link>
            <p className="text-[14px] text-[#8A8F98] leading-relaxed font-light">
              The modern standard for building software. Designed to help high-performing product teams execute faster.
            </p>
          </div>

          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] font-semibold text-white mb-2 tracking-wide">Product</h4>
              <Link to="/features" className="text-[14px] text-[#8A8F98] hover:text-white transition-colors">Features</Link>
              <Link to="/integrations" className="text-[14px] text-[#8A8F98] hover:text-white transition-colors">Integrations</Link>
              <Link to="/pricing" className="text-[14px] text-[#8A8F98] hover:text-white transition-colors">Pricing</Link>
              <Link to="/changelog" className="text-[14px] text-[#8A8F98] hover:text-white transition-colors">Changelog</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] font-semibold text-white mb-2 tracking-wide">Method</h4>
              <Link to="/practices" className="text-[14px] text-[#8A8F98] hover:text-white transition-colors">Practices</Link>
              <Link to="/manifesto" className="text-[14px] text-[#8A8F98] hover:text-white transition-colors">Manifesto</Link>
              <Link to="/community" className="text-[14px] text-[#8A8F98] hover:text-white transition-colors">Community</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] font-semibold text-white mb-2 tracking-wide">Resources</h4>
              <Link to="/docs" className="text-[14px] text-[#8A8F98] hover:text-white transition-colors">Documentation</Link>
              <Link to="/help" className="text-[14px] text-[#8A8F98] hover:text-white transition-colors">Help Center</Link>
              <Link to="/api" className="text-[14px] text-[#8A8F98] hover:text-white transition-colors">API Reference</Link>
              <Link to="/guides" className="text-[14px] text-[#8A8F98] hover:text-white transition-colors">Guides</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] font-semibold text-white mb-2 tracking-wide">Company</h4>
              <Link to="/about" className="text-[14px] text-[#8A8F98] hover:text-white transition-colors">About</Link>
              <Link to="/careers" className="text-[14px] text-[#8A8F98] hover:text-white transition-colors">Careers</Link>
              <Link to="/blog" className="text-[14px] text-[#8A8F98] hover:text-white transition-colors">Blog</Link>
              <Link to="/contact" className="text-[14px] text-[#8A8F98] hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="text-[13px] text-[#8A8F98]">© 2024 Axis Inc.</span>
            <Link to="/privacy" className="text-[13px] text-[#8A8F98] hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="text-[13px] text-[#8A8F98] hover:text-white transition-colors">Terms</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#8A8F98] hover:text-[#F7F8F8] transition-colors p-1" aria-label="X (Twitter)">
              <iconify-icon icon="simple-icons:x" width="16" height="16"></iconify-icon>
            </a>
            <a href="#" className="text-[#8A8F98] hover:text-[#F7F8F8] transition-colors p-1" aria-label="GitHub">
              <iconify-icon icon="simple-icons:github" width="16" height="16"></iconify-icon>
            </a>
            <a href="#" className="text-[#8A8F98] hover:text-[#F7F8F8] transition-colors p-1" aria-label="YouTube">
              <iconify-icon icon="simple-icons:youtube" width="16" height="16"></iconify-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}