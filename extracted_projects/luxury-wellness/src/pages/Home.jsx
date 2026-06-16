import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Editorial from '../components/sections/Editorial';
import Services from '../components/sections/Services';
import Feature from '../components/sections/Feature';
import Testimonial from '../components/sections/Testimonial';
import FAQ from '../components/sections/FAQ';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Editorial />
      <Services />
      <Feature />
      <Testimonial />
      <FAQ />

      <section className="w-full pb-20 md:pb-24">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 border-t border-[#d8cfbf] pt-10 md:grid-cols-2">
            <div className="border-b border-[#d8cfbf] pb-6 md:border-b-0 md:pb-0 md:pr-6">
              <p className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-[#7a7063]">FAQ</p>
              <h3 className="font-serif-custom text-2xl text-[#2f281f] mb-3">Do I need prior experience before booking a session?</h3>
              <p className="text-[#5a5146] leading-7">
                No prior experience is needed. Our sessions are designed to welcome both beginners and returning guests with gentle guidance throughout.
              </p>
            </div>

            <div className="pb-2 md:pl-6">
              <p className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-[#7a7063]">FAQ</p>
              <h3 className="font-serif-custom text-2xl text-[#2f281f] mb-3">What should I wear for my visit?</h3>
              <p className="text-[#5a5146] leading-7">
                We recommend comfortable clothing that allows you to relax fully. The atmosphere is calm and informal, so ease and comfort are always the priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-20 md:pb-24">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 border-t border-[#d8cfbf] pt-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#7a7063]">
                Contact
              </p>
              <h2 className="font-serif-custom text-4xl leading-[1.05] tracking-tight text-[#2f281f] sm:text-5xl mb-6">
                Reach out for reservations, inquiries, or simply to say hello.
              </h2>
              <div className="space-y-6 text-lg text-[#5a5146]">
                <p>
                  <strong className="text-[#2f281f] font-medium text-sm uppercase tracking-[0.18em] block mb-2">Location</strong>
                  4520 Washington Ave.<br />Manchester, 39495
                </p>
                <p>
                  <strong className="text-[#2f281f] font-medium text-sm uppercase tracking-[0.18em] block mb-2">Call us</strong>
                  +62 815 7565 8150
                </p>
                <p>
                  <strong className="text-[#2f281f] font-medium text-sm uppercase tracking-[0.18em] block mb-2">Email</strong>
                  meng@designcode.io
                </p>
              </div>
            </div>

            <div className="bg-[#e8e1d2] p-8 sm:p-12">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#7a7063]">
                Get in Touch
              </p>
              <h3 className="font-serif-custom text-3xl leading-tight text-[#2f281f] mb-6">
                Continue the conversation with our team.
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full border border-[#2f281f] bg-[#2f281f] px-6 py-3 text-sm font-medium text-[#efe9db] transition hover:bg-transparent hover:text-[#2f281f]"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center rounded-full border border-[#cfc5b4] px-6 py-3 text-sm font-medium text-[#2f281f] transition hover:bg-[#2f281f] hover:text-[#efe9db] hover:border-[#2f281f]"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
