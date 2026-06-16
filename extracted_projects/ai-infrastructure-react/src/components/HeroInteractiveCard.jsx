import React, { useState } from 'react'
import { Trophy, Medal, ArrowRight } from 'lucide-react'

const HeroInteractiveCard = () => {
  const items = [
    {
      badge: "Leader",
      title: "PredictiveArchitecture",
      desc: "Awarded for highest reliability in enterprise AI deployment sectors."
    },
    {
      badge: "Visionary",
      title: "NeuralComputation",
      desc: "Self-optimizing learning pathways for autonomous system evolution."
    },
    {
      badge: "Innovator",
      title: "QuantumLattice",
      desc: "Next-generation decentralized consensus for high-velocity data."
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const handleNext = (e) => {
    e.stopPropagation()
    if (animating) return

    setAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
      setAnimating(false)
    }, 200) // Match the CSS transition duration conceptually
  }

  const currentItem = items[currentIndex]

  return (
    <div className="relative order-4 p-6 flex items-center justify-center animate-reveal delay-300 lg:p-0 lg:absolute lg:right-[6%] lg:top-[62%] lg:bottom-[6%] lg:border-l lg:border-t lg:border-white/10 lg:left-[62%]">
      
      <div className="absolute top-[-1px] left-0 right-0 h-[1px] overflow-hidden z-20 hidden lg:block">
        <div className="beam-h" style={{ animation: 'beam-h 6s infinite reverse' }}></div>
      </div>
      <div className="absolute top-0 bottom-0 left-[-1px] w-[1px] overflow-hidden z-20 hidden lg:block">
        <div className="beam-v" style={{ animation: 'beam-v 6s infinite 2s' }}></div>
      </div>

      <div className="hidden lg:block marker -top-[2.5px] -left-[2.5px]"></div>
      <div className="hidden lg:block marker -top-[2.5px] -right-[2.5px]"></div>
      <div className="hidden lg:block marker -bottom-[2.5px] -left-[2.5px]"></div>
      <div className="hidden lg:block marker -bottom-[2.5px] -right-[2.5px]"></div>

      <div className="flex flex-col shadow-purple-900/20 group overflow-hidden lg:rounded-none text-black bg-white w-full h-full rounded-sm pt-6 pr-6 pb-6 pl-6 relative shadow-2xl justify-between transition-all duration-500">
        
        {/* Header */}
        <div className="flex items-start justify-between relative z-10 min-h-[60px]">
          <div className={`transition-all duration-300 ease-out ${animating ? 'opacity-50' : 'opacity-100'}`}>
            <div className="flex items-center gap-2 text-purple-600 mb-2">
              <Trophy className="w-4 h-4 opacity-60" />
              <span className="text-[10px] font-semibold uppercase tracking-widest">{currentItem.badge}</span>
            </div>
            <h3 className="text-xl font-semibold leading-tight tracking-tight">{currentItem.title}</h3>
          </div>

          <Medal className="absolute -top-2 -right-2 rotate-12 text-black/5 text-5xl w-12 h-12 stroke-1" />
        </div>

        {/* Description */}
        <div className="relative z-10 flex flex-col justify-end flex-1 mt-8">
          <div className="min-h-[72px]">
            <p className={`text-sm text-gray-500 font-medium leading-relaxed mb-4 border-l-2 border-purple-200 pl-3 transition-all duration-300 ease-out ${animating ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'}`}>
              {currentItem.desc}
            </p>
          </div>

          {/* Pagination / Status */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-3">
            <div className="flex gap-1">
              {items.map((_, idx) => (
                <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-black' : 'bg-gray-300'}`}></div>
              ))}
            </div>
            <button onClick={handleNext} className="group/btn p-2 -mr-2 cursor-pointer rounded-full hover:bg-purple-50 transition-colors outline-none">
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover/btn:text-purple-600 transition-colors" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroInteractiveCard