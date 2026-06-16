import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', load: 30, traffic: 20 },
  { time: '04:00', load: 45, traffic: 55 },
  { time: '08:00', load: 25, traffic: 40 },
  { time: '12:00', load: 80, traffic: 85 },
  { time: '16:00', load: 65, traffic: 45 },
  { time: '20:00', load: 50, traffic: 60 },
  { time: '24:00', load: 40, traffic: 35 },
];

export default function Metrics() {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-white/10 relative overflow-hidden flex flex-col items-center">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto gsap-fade-up relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 mb-2 text-xs tracking-widest uppercase font-bold">
              <iconify-icon icon="solar:graph-up-linear" class="text-lg"></iconify-icon>
              Live Telemetry
            </div>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-white">System Metrics</h2>
          </div>
          
          <div className="flex gap-6 mt-6 md:mt-0 text-xs tracking-widest uppercase">
            <div className="flex items-center gap-2 text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span> CPU Load
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-white/50"></span> Network
            </div>
          </div>
        </div>

        <div className="w-full h-96 bg-[#050505]/80 backdrop-blur-sm border border-white/10 p-6 relative group hover:border-cyan-500/30 transition-colors duration-500">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400/50" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400/50" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400/50" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400/50" />
          
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" strokeOpacity={0.05} vertical={false} />
              <XAxis 
                dataKey="time" 
                stroke="#ffffff" 
                strokeOpacity={0.2} 
                tick={{ fill: '#737373', fontSize: 10, fontFamily: 'inherit' }} 
                tickLine={false} 
                axisLine={false} 
                dy={10} 
              />
              <YAxis 
                stroke="#ffffff" 
                strokeOpacity={0.2} 
                tick={{ fill: '#737373', fontSize: 10, fontFamily: 'inherit' }} 
                tickLine={false} 
                axisLine={false} 
                dx={-10} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#050505', 
                  borderColor: 'rgba(255,255,255,0.1)', 
                  borderRadius: '0', 
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
                itemStyle={{ color: '#fff' }}
                cursor={{ stroke: 'rgba(0, 240, 255, 0.2)', strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              <Area 
                type="monotone" 
                dataKey="load" 
                stroke="#00f0ff" 
                strokeWidth={2} 
                fillOpacity={1} 
                fill="url(#colorLoad)" 
                activeDot={{ r: 4, fill: '#00f0ff', stroke: '#000', strokeWidth: 2 }}
              />
              <Area 
                type="monotone" 
                dataKey="traffic" 
                stroke="#ffffff" 
                strokeOpacity={0.3} 
                strokeWidth={2} 
                fillOpacity={1} 
                fill="url(#colorTraffic)" 
                activeDot={{ r: 4, fill: '#fff', stroke: '#000', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}