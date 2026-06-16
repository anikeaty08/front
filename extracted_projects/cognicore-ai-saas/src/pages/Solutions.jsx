import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import MaskedText from '../components/MaskedText'

gsap.registerPlugin(ScrollTrigger)

export default function Solutions() {
  const mainRef = useRef(null)

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

  const solutions = [
    {
      title: "Financial Services",
      desc: "Automate risk assessment and fraud detection with millisecond latency using our predictive scaling architecture.",
      icon: "solar:wallet-money-linear",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      title: "Healthcare",
      desc: "Process vast amounts of unstructured patient data securely with HIPAA-compliant vector assimilation.",
      icon: "solar:health-linear",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
      title: "E-Commerce",
      desc: "Dynamically route complex inventory and personalization algorithms to maximize conversion rates.",
      icon: "solar:cart-large-minimalistic-linear",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
    },
    {
      title: "Cybersecurity",
      desc: "Continuous threat monitoring leveraging decentralized neural nodes for instant anomaly detection.",
      icon: "solar:shield-warning-linear",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    }
  ]

  return (
    <div ref={mainRef} className="flex flex-col min-h-screen bg-[#030303]">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        
        <div className="text-center px-6 py-20 max-w-4xl mx-auto">
          <div className="reveal-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 text-[#2563eb] text-xs font-medium tracking-wide font-geist mb-6">
            <iconify-icon icon="solar:lightbulb-bolt-linear"></iconify-icon>
            Industry Solutions
          </div>
          <MaskedText 
            as="h1" 
            text="Tailored for your enterprise" 
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-white font-geist mb-6 justify-center" 
          />
          <p className="reveal-element text-zinc-400 text-lg md:text-xl font-extralight font-geist leading-relaxed">
            Deploy cognitive architectures specifically tuned for your industry's unique challenges, compliance requirements, and scale.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-32">
          <div className="stagger-container grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#27272a] border border-[#27272a] overflow-hidden">
            {solutions.map((sol, i) => (
              <div key={i} className="stagger-item bg-[#18181b] flex flex-col group overflow-hidden relative cursor-pointer">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Image Section */}
                <div className="h-56 w-full overflow-hidden border-b border-[#27272a]">
                  <img 
                    src={sol.img} 
                    alt={sol.title} 
                    className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                  />
                </div>

                {/* Content Section */}
                <div className="p-10 xl:p-12 relative z-10 flex-grow bg-[#18181b] group-hover:bg-[#1c1c20] transition-colors duration-500">
                  <iconify-icon icon={sol.icon} class="text-4xl text-[#2563eb] mb-6 group-hover:scale-110 transition-transform duration-300"></iconify-icon>
                  <h3 className="text-2xl font-medium tracking-tight text-zinc-100 font-geist mb-4">{sol.title}</h3>
                  <p className="text-zinc-500 text-base font-extralight leading-relaxed font-geist">{sol.desc}</p>
                  
                  <div className="mt-8 flex items-center gap-2 text-[#2563eb] text-sm font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 font-geist">
                    Explore use cases
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                  </div>
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