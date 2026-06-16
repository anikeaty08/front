import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail, MapPin, Phone, Calendar } from 'lucide-react';

export default function Footer() {
  return (
    <section className="overflow-hidden pt-32 pb-12 relative bg-zinc-50">
      {/* Footer Content */}
      <div className="md:px-12 flex flex-col md:flex-row z-10 mb-16 pr-6 pl-6 relative gap-x-12 gap-y-12 items-end justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="w-12 h-12 rounded-full border flex items-center justify-center border-zinc-900 bg-zinc-900 transition-transform hover:scale-105">
            <span className="font-bold text-white text-xl">L</span>
          </Link>
          <div className="flex gap-4 text-xs font-semibold tracking-widest uppercase opacity-80">
            <span>L</span>
            <span>U</span>
            <span>M</span>
            <span>E</span>
            <span>N</span>
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm font-semibold mb-4 text-zinc-900">
            Connect:
          </p>
          <div className="flex gap-4 justify-end">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-black/5 hover:bg-black hover:text-white">
              <Instagram className="w-4 h-4 stroke-[2]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-black/5 hover:bg-black hover:text-white">
              <Twitter className="w-4 h-4 stroke-[2]" />
            </a>
            <Link to="/contact" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-black/5 hover:bg-black hover:text-white">
              <Mail className="w-4 h-4 stroke-[2]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="md:px-12 border-t pt-16 pr-6 pb-8 pl-6 backdrop-blur-md bg-zinc-100/50 border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 max-w-7xl mx-auto">
          {/* Brand & Newsletter */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-2 font-bold tracking-tighter text-2xl">
              <span className="w-6 h-6 rounded flex items-center justify-center text-sm text-white bg-zinc-900">L</span>
              LUMEN
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-zinc-500">
              Capturing the ephemeral. A portfolio of light, shadow, and the human condition.
            </p>
            <div className="pt-2">
              <p className="text-xs font-semibold mb-2 text-black">Subscribe for print drops</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email address" className="border rounded px-3 py-2 text-xs placeholder-zinc-400 focus:outline-none focus:bg-white w-full transition-all bg-white border-black/10 text-black focus:border-sky-500" />
                <button type="submit" className="font-semibold text-xs px-4 py-2 rounded transition-colors text-white bg-zinc-900 hover:bg-zinc-800">
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-sm font-semibold mb-6 tracking-wide text-black">Portfolio</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><Link to="/portfolio" className="transition-colors block hover:text-sky-600">All Works</Link></li>
              <li><Link to="/series" className="transition-colors block hover:text-sky-600">Editorial</Link></li>
              <li><Link to="/series" className="transition-colors block hover:text-sky-600">Landscape</Link></li>
              <li><Link to="/series" className="transition-colors block hover:text-sky-600">Portraiture</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-sm font-semibold mb-6 tracking-wide text-black">Studio</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><Link to="/exhibitions" className="transition-colors block hover:text-sky-600">Exhibitions</Link></li>
              <li><Link to="/contact" className="transition-colors block hover:text-sky-600">Equipment</Link></li>
              <li><Link to="/contact" className="transition-colors block hover:text-sky-600">Workshops</Link></li>
              <li><Link to="/contact" className="transition-colors block hover:text-sky-600">Print Shop</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-sm font-semibold mb-6 tracking-wide text-black">Contact</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><Link to="/contact" className="transition-colors flex items-center gap-2 hover:text-sky-600">
                <MapPin className="w-[14px] h-[14px] stroke-[2]" />
                London, UK
              </Link></li>
              <li><Link to="/contact" className="transition-colors flex items-center gap-2 hover:text-sky-600">
                <Phone className="w-[14px] h-[14px] stroke-[2]" />
                +44 (0) 20 7123 4567
              </Link></li>
              <li><Link to="/contact" className="transition-colors flex items-center gap-2 hover:text-sky-600">
                <Calendar className="w-[14px] h-[14px] stroke-[2]" />
                Bookings
              </Link></li>
              <li><a href="mailto:hello@lumen.studio" className="transition-colors flex items-center gap-2 hover:text-sky-600">
                <Mail className="w-[14px] h-[14px] stroke-[2]" />
                hello@lumen.studio
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto border-black/10">
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} Lumen Photography. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <Link to="/contact" className="transition-colors hover:text-black">Privacy Policy</Link>
            <Link to="/contact" className="transition-colors hover:text-black">Terms of Service</Link>
            <Link to="/contact" className="transition-colors hover:text-black">Sitemap</Link>
          </div>
        </div>
      </div>
    </section>
  );
}