import React from 'react';
import { Link } from 'react-router-dom';
import SectionFrame from '../ui/SectionFrame';

export default function SharedFooter({ showCTA = true }) {
  return (
    <SectionFrame className="flex flex-col z-10 border-none overflow-hidden text-white font-geist bg-transparent w-full pt-20 pr-6 pb-10 pl-6 relative items-center" noBorderBottom>
      {/* CTA */}
      {showCTA && (
        <div className="md:px-12 md:py-16 text-center bg-[#070A0D] w-full max-w-6xl border-white/10 border rounded-2xl pt-14 pr-6 pb-14 pl-6 shadow-xl">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <span className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#c6f91f]/20 bg-[#c6f91f]/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-[#c6f91f]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c6f91f] shadow-[0_0_10px_#c6f91f]"></span>
              Ready to level up
            </span>
            <h2 className="mx-auto mb-5 max-w-3xl text-4xl font-light leading-tight tracking-tight text-white md:text-6xl">
              Build better interfaces,
              <span className="text-[#c6f91f]"> faster.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed tracking-tight text-white/55">
              Premium prompt templates and system patterns for designers and developers who want cleaner results from the first generation.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link className="inline-flex items-center justify-center gap-4 rounded-md bg-[#c6f91f] px-9 py-4 text-base font-medium tracking-tight text-black shadow-[0_0_36px_rgba(198,249,31,0.42)] transition-colors hover:bg-[#d8ff35]" to="/library">
                Explore Free Prompts
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
              <Link className="inline-flex items-center justify-center gap-3 rounded-md border border-white/10 bg-white/[0.035] px-9 py-4 text-base font-medium tracking-tight text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white" to="/pricing">
                Unlock All
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-white/45">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c6f91f]"></span>
                Free templates included
              </span>
              <span className="text-white/20">•</span>
              <span>One-time unlock</span>
              <span className="text-white/20">•</span>
              <span>No prompt-engineering needed</span>
            </div>
          </div>
        </div>
      )}

      {/* Footer links */}
      <div className={`mt-12 w-full max-w-6xl border-t border-white/10 pt-8`}>
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] md:gap-8">
          <div className="flex flex-col items-start">
            <div className="mb-5 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#c6f91f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z"></path>
                <path d="m3 12 9 4.5 9-4.5"></path>
                <path d="m3 16.5 9 4.5 9-4.5"></path>
              </svg>
              <span className="text-2xl font-medium tracking-tight text-white">Lumimotion</span>
            </div>

            <p className="max-w-sm text-base leading-relaxed tracking-tight text-white/55">
              Premium, editorial, system-driven prompt templates for designers and developers.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/85">
              <span className="h-2 w-2 rounded-full bg-[#c6f91f] shadow-[0_0_10px_#c6f91f]"></span>
              Built for modern teams
            </div>
          </div>

          <div className="border-white/10 md:border-l md:pl-10">
            <h3 className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-white/70">
              Product
              <span className="h-1.5 w-1.5 rounded-full bg-[#c6f91f] shadow-[0_0_8px_#c6f91f]"></span>
            </h3>
            <div className="flex flex-col gap-4 text-base tracking-tight text-white/55">
              <Link className="transition-colors hover:text-white" to="/library">Prompt Library</Link>
              <Link className="transition-colors hover:text-white" to="/pricing">Pricing</Link>
              <Link className="transition-colors hover:text-white" to="/#how-it-works">How it works</Link>
              <Link className="transition-colors hover:text-white" to="#">Changelog</Link>
            </div>
          </div>

          <div className="border-white/10 md:border-l md:pl-10">
            <h3 className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-white/70">
              Resources
              <span className="h-1.5 w-1.5 rounded-full bg-[#c6f91f] shadow-[0_0_8px_#c6f91f]"></span>
            </h3>
            <div className="flex flex-col gap-4 text-base tracking-tight text-white/55">
              <Link className="transition-colors hover:text-white" to="/resources">Docs</Link>
              <Link className="transition-colors hover:text-white" to="/resources">Guides</Link>
              <Link className="transition-colors hover:text-white" to="/#faq">FAQ</Link>
              <Link className="transition-colors hover:text-white" to="#">Integrations</Link>
            </div>
          </div>

          <div className="border-white/10 md:border-l md:pl-10">
            <h3 className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-white/70">
              Company
              <span className="h-1.5 w-1.5 rounded-full bg-[#c6f91f] shadow-[0_0_8px_#c6f91f]"></span>
            </h3>
            <div className="flex flex-col gap-4 text-base tracking-tight text-white/55">
              <Link className="transition-colors hover:text-white" to="#">About</Link>
              <Link className="transition-colors hover:text-white" to="#">Blog</Link>
              <Link className="transition-colors hover:text-white" to="/contact">Contact</Link>
              <Link className="transition-colors hover:text-white" to="#">Careers</Link>
            </div>
          </div>

          <div className="border-white/10 md:border-l md:pl-10">
            <h3 className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-white/70">
              Legal
              <span className="h-1.5 w-1.5 rounded-full bg-[#c6f91f] shadow-[0_0_8px_#c6f91f]"></span>
            </h3>
            <div className="flex flex-col gap-4 text-base tracking-tight text-white/55">
              <Link className="transition-colors hover:text-white" to="#">Privacy Policy</Link>
              <Link className="transition-colors hover:text-white" to="#">Terms of Service</Link>
              <Link className="transition-colors hover:text-white" to="#">Acceptable Use</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 pt-8 md:flex-row">
          <p className="flex items-center gap-3 text-sm tracking-tight text-white/50">
            <span className="h-2 w-2 rounded-full bg-[#c6f91f] shadow-[0_0_10px_#c6f91f]"></span>
            © {new Date().getFullYear()} Lumimotion. All rights reserved.
          </p>

          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-5 py-2 text-sm tracking-tight text-white/55">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c6f91f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.5a1.3 1.3 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1v7Z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <span>Secure</span>
            <span className="text-[#c6f91f]">•</span>
            <span>Private</span>
            <span className="text-[#c6f91f]">•</span>
            <span>Trusted</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-base tracking-tight text-white/50">Follow us</span>
            <span className="h-6 w-px bg-white/15"></span>

            <a className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.025] text-white/65 transition-colors hover:text-white" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l16 16"></path>
                <path d="M20 4 4 20"></path>
              </svg>
            </a>

            <a className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.025] text-white/65 transition-colors hover:text-white" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a4.5 4.5 0 0 0-1.2-3.1A4.2 4.2 0 0 0 18.7 3s-1 0-3 1.5a10.2 10.2 0 0 0-5.4 0C8.3 3 7.3 3 7.3 3a4.2 4.2 0 0 0-.1 2.9A4.5 4.5 0 0 0 6 9c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"></path>
                <path d="M9 18c-4.5 2-5-2-7-2"></path>
              </svg>
            </a>

            <a className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.025] text-white/65 transition-colors hover:text-white" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}