import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import MaskedText from '../components/MaskedText'

gsap.registerPlugin(ScrollTrigger)

export default function PricingPage() {
  const mainRef = useRef(null)
  const [isAnnual, setIsAnnual] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      const revealElements = gsap.utils.toArray('.reveal-element')
      revealElements.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50, filter: 'blur(12px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        )
      })

      const staggerContainers = gsap.utils.toArray('.stagger-container')
      staggerContainers.forEach((container) => {
        const items = container.querySelectorAll('.stagger-item')
        const staggerAmount = parseFloat(container.getAttribute('data-stagger')) || 0.1
        
        gsap.fromTo(items,
          { opacity: 0, y: 50, filter: 'blur(12px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.2,
            stagger: staggerAmount,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
            }
          }
        )
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  const plans = [
    {
      name: "Developer",
      desc: "Perfect for testing and prototyping cognitive workflows.",
      priceMonthly: 0,
      priceAnnual: 0,
      features: [
        "10k Model Requests/mo", 
        "Basic Vector Assimilation", 
        "Community Support", 
        "Standard Latency (~100ms)"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      desc: "For production-ready teams scaling their intelligent systems.",
      priceMonthly: 99,
      priceAnnual: 79,
      features: [
        "5M Model Requests/mo", 
        "Advanced Vector Routing", 
        "Priority Email Support", 
        "Low Latency (<20ms)", 
        "Custom Webhooks"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      desc: "Dedicated infrastructure for mission-critical deployments.",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      features: [
        "Unlimited Requests", 
        "Dedicated Neural Nodes", 
        "24/7 Phone Support", 
        "Ultra-Low Latency (<5ms)", 
        "SOC2 & HIPAA Compliance"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <div ref={mainRef} className="flex flex-col min-h-screen bg-[#030303]">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        
        {/* Pricing Header */}
        <div className="text-center px-6 py-20 max-w-4xl mx-auto">
          <div className="reveal-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 text-[#2563eb] text-xs font-medium tracking-wide font-geist mb-6">
            <iconify-icon icon="solar:tag-price-linear"></iconify-icon>
            Transparent Pricing
          </div>
          <MaskedText 
            as="h1" 
            text="Scale without surprises" 
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-white font-geist mb-6 justify-center" 
          />
          <p className="reveal-element text-zinc-400 text-lg md:text-xl font-extralight font-geist leading-relaxed mb-12">
            Simple, predictable pricing that grows alongside your enterprise. Switch to annual billing to save 20%.
          </p>

          {/* Billing Toggle */}
          <div className="reveal-element flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-geist transition-colors ${!isAnnual ? 'text-white' : 'text-zinc-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 rounded-full bg-[#27272a] relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50"
            >
              <div className={`w-5 h-5 rounded-full bg-[#2563eb] absolute top-1 transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-1'}`}></div>
            </button>
            <span className={`text-sm font-geist flex items-center gap-2 transition-colors ${isAnnual ? 'text-white' : 'text-zinc-500'}`}>
              Annually
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
          <div className="stagger-container grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-[#27272a] border border-[#27272a]">
            {plans.map((plan, i) => (
              <div key={i} className={`stagger-item bg-[#18181b] p-10 flex flex-col relative transition-all duration-300 hover:bg-[#1c1c20] ${plan.popular ? 'bg-gradient-to-b from-[#1e3a8a]/20 to-[#18181b]' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2563eb]"></div>
                )}
                
                <h3 className="text-xl font-medium tracking-tight text-white font-geist mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm font-extralight leading-relaxed font-geist mb-8 min-h-[40px]">{plan.desc}</p>
                
                <div className="mb-10">
                  {typeof plan.priceMonthly === 'string' ? (
                    <div className="text-4xl font-light tracking-tighter text-white font-geist">Custom</div>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className="text-5xl font-light tracking-tighter text-white font-geist transition-all duration-300">
                        ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                      </span>
                      <span className="text-zinc-500 text-sm font-geist mb-2">/mo</span>
                    </div>
                  )}
                </div>

                <button className={`w-full py-4 px-6 rounded-none text-sm font-medium transition-all duration-300 font-geist mb-12 active:scale-95 ${
                  plan.popular 
                    ? 'bg-[#2563eb] text-white hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                    : 'bg-[#27272a] text-zinc-300 hover:bg-[#3f3f46] hover:text-white'
                }`}>
                  {plan.cta}
                </button>

                <div className="mt-auto">
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-5 font-geist">Included Features</p>
                  <ul className="flex flex-col gap-4">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 font-extralight font-geist">
                        <iconify-icon icon="solar:check-circle-linear" class="text-[#2563eb] text-base mt-0.5 shrink-0"></iconify-icon>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}