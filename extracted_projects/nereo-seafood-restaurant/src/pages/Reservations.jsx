import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Reservations() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <section id="reservations" className={`py-24 lg:py-32 bg-bgPrimary relative ${!isHome ? 'mt-24' : ''}`}>
        <div className="ambient-glow w-[350px] h-[350px] top-[10%] left-[20%] bg-goldSecondary/5"></div>
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8 reveal-on-scroll">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-goldPrimary"></div>
              <span className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase">The Reservation Desk</span>
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl uppercase">
              Secure your <span className="italic text-goldPrimary">Atelier Table</span>
            </h1>
            <p className="text-textSecondary font-light leading-relaxed text-sm">
              As we prioritize custom sourcing of fresh daily deliveries, we accommodate very limited seats per evening. We strongly recommend reserving tables 14 days in advance.
            </p>
            <div className="space-y-4 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-borderGold/20 flex items-center justify-center">
                  <iconify-icon icon="solar:phone-linear" width="16" className="text-goldPrimary"></iconify-icon>
                </div>
                <div>
                  <span className="text-[9px] text-textMuted uppercase tracking-wider block">CONCIERGE CONTACT</span>
                  <span className="text-sm font-medium text-textPrimary">+1 (555) 234-5678</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-borderGold/20 flex items-center justify-center">
                  <iconify-icon icon="solar:letter-linear" width="16" className="text-goldPrimary"></iconify-icon>
                </div>
                <div>
                  <span className="text-[9px] text-textMuted uppercase tracking-wider block">PRIVATE DINING & EVENTS</span>
                  <span className="text-sm font-medium text-textPrimary">atelier@nereoseafood.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal-on-scroll">
            <form className="glass-card p-8 rounded-3xl space-y-6" onSubmit={e => e.preventDefault()}>
              <h3 className="font-serif text-2xl text-textPrimary uppercase">Concierge Request</h3>
              <div className="w-16 h-[1px] bg-goldPrimary"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] text-textMuted tracking-widest uppercase font-semibold">Full Name</label>
                  <input type="text" required placeholder="E.g., Julian Vance" className="w-full bg-[#110e0a] border border-borderGold/20 rounded-lg px-4 py-3 text-sm text-textPrimary placeholder-textMuted focus:outline-none focus:border-goldPrimary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] text-textMuted tracking-widest uppercase font-semibold">Email Address</label>
                  <input type="email" required placeholder="Julian@example.com" className="w-full bg-[#110e0a] border border-borderGold/20 rounded-lg px-4 py-3 text-sm text-textPrimary placeholder-textMuted focus:outline-none focus:border-goldPrimary transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] text-textMuted tracking-widest uppercase font-semibold">Guests Count</label>
                  <select className="w-full bg-[#110e0a] border border-borderGold/20 rounded-lg px-4 py-3 text-sm text-textPrimary focus:outline-none focus:border-goldPrimary transition-colors">
                    {['2 Guests', '4 Guests', '6 Guests', 'Chef Table Tasting'].map(o => <option key={o} className="bg-bgSecondary text-textPrimary">{o}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] text-textMuted tracking-widest uppercase font-semibold">Date</label>
                  <input type="date" required className="w-full bg-[#110e0a] border border-borderGold/20 rounded-lg px-4 py-3 text-sm text-textPrimary focus:outline-none focus:border-goldPrimary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] text-textMuted tracking-widest uppercase font-semibold">Hour</label>
                  <select className="w-full bg-[#110e0a] border border-borderGold/20 rounded-lg px-4 py-3 text-sm text-textPrimary focus:outline-none focus:border-goldPrimary transition-colors">
                    {['5:30 PM', '7:00 PM', '8:30 PM', '9:45 PM'].map(o => <option key={o} className="bg-bgSecondary text-textPrimary">{o}</option>)}
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[9px] text-textMuted tracking-widest uppercase font-semibold">Dietary Notes / Requests</label>
                <textarea placeholder="Please tell us about any seafood allergies or specific requirements..." rows="3" className="w-full bg-[#110e0a] border border-borderGold/20 rounded-lg px-4 py-3 text-sm text-textPrimary placeholder-textMuted focus:outline-none focus:border-goldPrimary transition-colors resize-none"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-gradient-to-r from-[#E4B760] to-[#B9852E] text-[#080604] py-4 text-xs font-bold tracking-[0.2em] uppercase rounded-none hover:brightness-110 shadow-lg shadow-[#000000e6] transition-all duration-300">
                Submit Request & Inform Culinary Team
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-bgSecondary border-t border-borderGold/10">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-16 text-center reveal-on-scroll">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-goldPrimary"></div>
            <span className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase">Booking Policies</span>
            <div className="w-8 h-[1px] bg-goldPrimary"></div>
          </div>
          <h2 className="font-serif text-3xl uppercase mb-12">Atelier Protocol & <span className="italic text-goldPrimary">Details</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="border border-borderGold/20 rounded-2xl p-6 bg-bgPrimary">
              <h3 className="font-serif text-xl mb-2 text-goldPrimary">Cancellations & Deposits</h3>
              <p className="text-xs font-light text-textSecondary leading-relaxed">
                Due to the highly perishable and rare nature of our daily imports, all reservations require a $50 deposit per guest. Cancellations made within 48 hours of the reservation will result in a forfeiture of the deposit.
              </p>
            </div>
            <div className="border border-borderGold/20 rounded-2xl p-6 bg-bgPrimary">
              <h3 className="font-serif text-xl mb-2 text-goldPrimary">Dress Code Standard</h3>
              <p className="text-xs font-light text-textSecondary leading-relaxed">
                We respectfully request our guests to adhere to a smart-elegant dress code. Jackets are preferred for gentlemen. Athletic wear, open-toed shoes for men, and distressed clothing are not permitted in the main dining hall.
              </p>
            </div>
            <div className="border border-borderGold/20 rounded-2xl p-6 bg-bgPrimary md:col-span-2 flex flex-col md:flex-row items-center gap-6">
              <iconify-icon icon="solar:shield-check-linear" width="48" className="text-goldPrimary flex-shrink-0"></iconify-icon>
              <div>
                <h3 className="font-serif text-xl mb-2 text-goldPrimary">Private Dining & Buyouts</h3>
                <p className="text-xs font-light text-textSecondary leading-relaxed">
                  For parties of 8 or more, we offer our submerged cellar dining room, an acoustically tuned private environment completely isolated from the main hall. Corporate buyouts and custom tasting menus require a 4-week advance booking notice. Contact our concierge team directly via email for exclusive access rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}