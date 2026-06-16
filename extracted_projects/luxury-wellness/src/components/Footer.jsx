import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <section className="border-y border-[#3a352a] bg-[#272319] text-[#efe9db]">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 border-x border-white/10 lg:grid-cols-12">
        <div className="border-b border-white/10 p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r">
          <p className="mb-5 text-[0.65rem] uppercase tracking-[0.18em] text-white/45">Reserved your moment of calm today.</p>
          <h2 className="max-w-md font-serif-custom text-5xl leading-[0.98] tracking-tight text-white sm:text-6xl">
            Begin Your Journey Into <span className="italic">Inner Serenity.</span>
          </h2>

          <div className="mt-8 flex gap-3">
            <a
              href="https://instagram.com/mengto"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 p-2.5 text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href="#" className="rounded-full border border-white/15 p-2.5 text-white/75 transition hover:bg-white/10 hover:text-white">
              <Youtube className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href="#" className="rounded-full border border-white/15 p-2.5 text-white/75 transition hover:bg-white/10 hover:text-white">
              <Facebook className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://x.com/mengto"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 p-2.5 text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              <Twitter className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 p-6 sm:grid-cols-2 sm:p-8 lg:col-span-7 lg:grid-cols-3">
          <div>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-white/45">Location</p>
            <p className="text-xl leading-8 text-white/90">4520 Washington Ave.<br />Manchester, 39495</p>
          </div>
          <div>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-white/45">Call us</p>
            <p className="text-xl leading-8 text-white/90">+62 815 7565 8150</p>
          </div>
          <div>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-white/45">Open time</p>
            <p className="text-xl leading-8 text-white/90">09.00 am — 17.00 pm</p>
          </div>
          <div>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-white/45">Open day</p>
            <p className="text-xl leading-8 text-white/90">Monday - Friday</p>
          </div>
        </div>
      </div>

      <footer className="mx-auto flex max-w-[90rem] flex-col gap-4 border-x border-white/10 px-4 py-5 text-sm text-white/60 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full border border-white/50"></div>
          <span className="font-serif-custom text-2xl tracking-tight text-white/90">Serenique</span>
        </div>

        <nav className="flex flex-wrap items-center gap-5">
          <Link to="/" className="text-white/90">⌂ Home</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/services" className="hover:text-white transition">Services</Link>
          <Link to="/experience" className="hover:text-white transition">Experience</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
        </nav>
      </footer>
    </section>
  );
}
