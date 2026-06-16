export default function Integrations() {
  const integrations = [
    { name: 'Salesforce', icon: 'simple-icons:salesforce', desc: 'Sync customer data and subscription states automatically in real time.' },
    { name: 'Stripe', icon: 'simple-icons:stripe', desc: 'Process payments and manage diverse payment methods securely.' },
    { name: 'Slack', icon: 'simple-icons:slack', desc: 'Get real-time channel alerts for dunning, upgrades, and churn risks.' },
    { name: 'NetSuite', icon: 'simple-icons:oracle', desc: 'Automate revenue recognition and ledger entries seamlessly.' },
    { name: 'Zendesk', icon: 'simple-icons:zendesk', desc: 'Equip your support team with full billing context on tickets.' },
    { name: 'Snowflake', icon: 'simple-icons:snowflake', desc: 'Export all billing events for custom data modeling and BI.' },
  ];

  return (
    <div className="pt-40 pb-24 px-6 max-w-[1200px] mx-auto min-h-[80vh]">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl tracking-tight text-white mb-6 font-geist font-light">Connect your stack</h1>
        <p className="text-xl text-[#b0b3b8] max-w-2xl mx-auto font-geist font-light">Subline plays nicely with your existing tools. Two-way sync keeps your systems of record perfectly aligned without manual work.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {integrations.map(int => (
          <div key={int.name} className="p-8 rounded-2xl border border-[#2e2e32] bg-[#0c0d0f]/60 backdrop-blur-sm hover:bg-[#121316] hover:border-white/10 transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <iconify-icon icon={int.icon} width="28" className="text-white"></iconify-icon>
            </div>
            <h3 className="text-xl font-medium text-white mb-3 font-geist">{int.name}</h3>
            <p className="text-[15px] text-[#b0b3b8] font-geist leading-relaxed">{int.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}