import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 lg:px-24 pb-14 z-10 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-t border-white/5 pt-8">
        <div className="footer-copy text-sm text-gray-500">
          © {new Date().getFullYear()} Aura. Fluid infrastructure for modern systems.
        </div>
        <div className="footer-nav flex items-center gap-6 text-xs uppercase tracking-[0.24em] text-gray-500">
          <Link to="#" className="hover:text-white transition-colors">Docs</Link>
          <Link to="#" className="hover:text-white transition-colors">Security</Link>
          <Link to="#" className="hover:text-white transition-colors">Status</Link>
        </div>
      </div>
    </footer>
  );
}