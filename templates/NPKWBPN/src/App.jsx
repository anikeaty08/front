import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    import createGlobe from 'https://cdn.skypack.dev/cobe'

    // Dithered Wave Background Implementation
    class DitheredWaveBackground {
      constructor(canvas) {
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        this.camera.position.z = 1;
        
        this.renderer = new THREE.WebGLRenderer({ 
          canvas: this.canvas, 
          antialias: true,
          alpha: true 
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        
        this.mouse = new THREE.Vector2(0, 0);
        this.time = 0;
        
        this.createShaderMaterial();
        this.createMesh();
        this.setupEventListeners();
        this.animate();
      }
      
      createShaderMaterial() {
        const vertexShader = `
          precision highp float;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `;
        
        const fragmentShader = `
          precision highp float;
          uniform float u_time;
          uniform vec2 u_mouse;
          uniform vec2 u_resolution;
          varying vec2 vUv;
          
          // Dithering matrix
          const mat4 bayerMatrix = mat4(
            0.0, 8.0, 2.0, 10.0,
            12.0, 4.0, 14.0, 6.0,
            3.0, 11.0, 1.0, 9.0,
            15.0, 7.0, 13.0, 5.0
          ) / 16.0;
          
          float dither(vec2 coord) {
            int x = int(mod(coord.x, 4.0));
            int y = int(mod(coord.y, 4.0));
            return bayerMatrix[x][y];
          }
          
          float wave(vec2 pos, float time) {
            float dist = length(pos - 0.5);
            return sin(dist * 15.0 - time * 2.0) * 0.5 + 0.5;
          }
          
          void main() {
            vec2 st = vUv;
            vec2 mouseInfluence = u_mouse * 0.5;
            
            // Create multiple wave layers
            float wave1 = wave(st + mouseInfluence, u_time);
            float wave2 = wave(st * 1.5 - mouseInfluence * 0.3, u_time * 0.7);
            float wave3 = wave(st * 0.8 + mouseInfluence * 0.2, u_time * 1.3);
            
            // Combine waves
            float combined = (wave1 + wave2 * 0.6 + wave3 * 0.4) / 2.0;
            
            // Apply dithering
            vec2 pixelCoord = st * u_resolution;
            float ditherValue = dither(pixelCoord);
            
            // Finance-themed colors (dark blue to teal gradient)
            vec3 color1 = vec3(0.05, 0.1, 0.2); // Dark blue
            vec3 color2 = vec3(0.0, 0.4, 0.4);  // Teal
            vec3 color3 = vec3(0.1, 0.6, 0.5);  // Emerald
            
            // Create gradient based on waves
            vec3 finalColor = mix(color1, color2, combined);
            finalColor = mix(finalColor, color3, wave3 * 0.3);
            
            // Apply dithering effect
            float threshold = combined + (ditherValue - 0.5) * 0.1;
            finalColor *= smoothstep(0.3, 0.7, threshold);
            
            gl_FragColor = vec4(finalColor, 0.8);
          }
        `;
        
        this.material = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms: {
            u_time: { value: 0 },
            u_mouse: { value: new THREE.Vector2(0, 0) },
            u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
          },
          transparent: true
        });
      }
      
      createMesh() {
        const geometry = new THREE.PlaneGeometry(2, 2);
        this.mesh = new THREE.Mesh(geometry, this.material);
        this.scene.add(this.mesh);
      }
      
      setupEventListeners() {
        window.addEventListener('mousemove', (event) => {
          this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        });
        
        window.addEventListener('resize', () => {
          this.renderer.setSize(window.innerWidth, window.innerHeight);
          this.material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
        });
      }
      
      animate() {
        requestAnimationFrame(() => this.animate());
        
        this.time += 0.01;
        this.material.uniforms.u_time.value = this.time;
        this.material.uniforms.u_mouse.value.copy(this.mouse);
        
        this.renderer.render(this.scene, this.camera);
      }
    }

    // Initialize dithered background
    const ditheredCanvas = document.getElementById('dithered-canvas');
    const ditheredBg = new DitheredWaveBackground(ditheredCanvas);

    // Initialize Cobe Globe
    let phi = 0;
    const globe = createGlobe(document.getElementById('cobe'), {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.1, 0.4, 0.6],
      markers: [
        { location: [40.7128, -74.0060], size: 0.1 }, // New York
        { location: [51.5074, -0.1278], size: 0.08 },  // London
        { location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
        { location: [1.3521, 103.8198], size: 0.06 },  // Singapore
        { location: [22.3193, 114.1694], size: 0.06 }, // Hong Kong
        { location: [52.5200, 13.4050], size: 0.05 },  // Berlin
        { location: [48.8566, 2.3522], size: 0.05 },   // Paris
      ],
      onRender: (state) => {
        phi += 0.005;
        state.phi = phi;
      }
    });

    // Initialize Regional Chart
    const ctx = document.getElementById('regionalChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Middle East', 'Africa'],
        datasets: [{
          label: 'YTD Returns (%)',
          data: [12.4, 8.7, 15.2, 6.8, 9.3, 11.1],
          backgroundColor: [
            'rgba(34, 197, 94, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(168, 85, 247, 0.8)',
            'rgba(249, 115, 22, 0.8)',
            'rgba(236, 72, 153, 0.8)',
            'rgba(245, 158, 11, 0.8)'
          ],
          borderColor: [
            'rgb(34, 197, 94)',
            'rgb(59, 130, 246)',
            'rgb(168, 85, 247)',
            'rgb(249, 115, 22)',
            'rgb(236, 72, 153)',
            'rgb(245, 158, 11)'
          ],
          borderWidth: 1,
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(148, 163, 184, 0.1)'
            },
            ticks: {
              color: 'rgba(148, 163, 184, 0.7)',
              font: {
                size: 12
              }
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: 'rgba(148, 163, 184, 0.7)',
              font: {
                size: 12
              }
            }
          }
        }
      }
    });

    // Initialize Lucide Icons
    lucide.createIcons();

    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-in').forEach(el => {
      observer.observe(el);
    });

    // Real-time updates simulation
    setInterval(() => {
      const indicators = document.querySelectorAll('.status-indicator');
      indicators.forEach(indicator => {
        indicator.style.opacity = Math.random() > 0.5 ? '1' : '0.7';
      });
    }, 2000);

    // Add interactive hover effects for drill-down cards
    document.querySelectorAll('.drill-down').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-2px) scale(1.02)';
        card.style.borderColor = 'rgba(34, 197, 94, 0.3)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.borderColor = 'rgba(148, 163, 184, 0.1)';
      });
    });

  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas id="dithered-canvas"></canvas>
<div className="content-overlay">

<header className="glass-header sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="globe"></i>
</div>
<div>
<h1 className="text-xl font-semibold tracking-tight">FinanceCore Global</h1>
<p className="text-xs text-slate-400">Worldwide Financial Intelligence</p>
</div>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-emerald-400 border-b-2 border-emerald-400 pb-1" href="#">Global View</a>
<a className="text-sm text-slate-400 hover:text-slate-200 transition-colors" href="#">Markets</a>
<a className="text-sm text-slate-400 hover:text-slate-200 transition-colors" href="#">Analytics</a>
<a className="text-sm text-slate-400 hover:text-slate-200 transition-colors" href="#">Reports</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-sm">
<div className="w-2 h-2 bg-emerald-400 rounded-full status-indicator"></div>
<span className="text-slate-300">Live Markets</span>
</div>
<button className="glass-card p-2 rounded-lg hover:bg-slate-600/30 transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
<div className="flex items-center gap-3">
<img alt="CFO" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&amp;q=80"/>
<div className="hidden sm:block">
<p className="text-sm font-medium">David Wilson</p>
<p className="text-xs text-slate-400">Chief Financial Officer</p>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 py-8">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

<div className="animate-fade-in glass-card rounded-xl p-6 globe-card">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-white">Global Financial Network</h3>
<p className="text-sm text-slate-400">Real-time worldwide market data</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">Live Data</button>
<button className="glass-card p-1 rounded">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
</button>
</div>
</div>
<div className="globe-container">
<canvas className="absolute inset-0 rounded-lg" height="800" id="cobe" style={{width: '100%', height: '100%'}} width="800"></canvas>

<div className="finance-marker active" style={{top: '25%', left: '20%'}}>
<div className="w-3 h-3 bg-emerald-500 rounded-full relative">
<div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping"></div>
</div>
</div>
<div className="finance-marker" style={{top: '35%', left: '75%'}}>
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
</div>
<div className="finance-marker" style={{top: '40%', left: '50%'}}>
<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
</div>
<div className="finance-marker" style={{top: '60%', left: '85%'}}>
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
</div>

<div className="absolute bottom-4 left-4 glass-card rounded-lg p-3 z-10">
<div className="flex flex-col space-y-2 text-xs text-white">
<div className="flex items-center">
<span className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></span>
<span>Major Markets</span>
</div>
<div className="flex items-center">
<span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
<span>Regional Hubs</span>
</div>
<div className="flex items-center">
<span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
<span>Emerging Markets</span>
</div>
</div>
</div>

<div className="absolute top-4 right-4 glass-card rounded-lg p-3 z-10">
<div className="text-xs text-white">
<div className="flex justify-between items-center mb-1">
<span>NYSE</span>
<span className="text-emerald-400">Open</span>
</div>
<div className="flex justify-between items-center mb-1">
<span>LSE</span>
<span className="text-red-400">Closed</span>
</div>
<div className="flex justify-between items-center">
<span>TSE</span>
<span className="text-yellow-400">Pre-Market</span>
</div>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-2 gap-4">
<div className="text-center p-3 glass-card rounded-lg">
<div className="text-lg font-semibold text-white">$847.2B</div>
<div className="text-xs text-slate-400">Global Volume</div>
</div>
<div className="text-center p-3 glass-card rounded-lg">
<div className="text-lg font-semibold text-white">156</div>
<div className="text-xs text-slate-400">Active Markets</div>
</div>
</div>
</div>

<div className="animate-fade-in glass-card rounded-xl p-6" style={{animationDelay: '0.1s'}}>
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-white">World Economic Indicators</h3>
<p className="text-sm text-slate-400">Key global financial metrics</p>
</div>
</div>
<div className="space-y-4">

<div className="drill-down p-4 rounded-lg glass-card">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-6 bg-gradient-to-r from-blue-600 to-red-600 rounded-sm flex items-center justify-center">
<span className="text-xs font-bold text-white">US</span>
</div>
<div>
<span className="text-sm font-medium text-white">United States</span>
<div className="text-xs text-slate-400">GDP: $26.9T</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-emerald-400">+2.4%</div>
<div className="text-xs text-slate-400">Growth Rate</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3 text-xs">
<div>
<span className="text-slate-400">S&amp;P 500</span>
<div className="text-white font-medium">4,247.68</div>
</div>
<div>
<span className="text-slate-400">Inflation</span>
<div className="text-white font-medium">3.2%</div>
</div>
<div>
<span className="text-slate-400">Unemployment</span>
<div className="text-white font-medium">3.7%</div>
</div>
</div>
</div>

<div className="drill-down p-4 rounded-lg glass-card">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-6 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-sm flex items-center justify-center">
<span className="text-xs font-bold text-white">EU</span>
</div>
<div>
<span className="text-sm font-medium text-white">European Union</span>
<div className="text-xs text-slate-400">GDP: $17.1T</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-yellow-400">+1.8%</div>
<div className="text-xs text-slate-400">Growth Rate</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3 text-xs">
<div>
<span className="text-slate-400">STOXX 600</span>
<div className="text-white font-medium">472.15</div>
</div>
<div>
<span className="text-slate-400">Inflation</span>
<div className="text-white font-medium">2.9%</div>
</div>
<div>
<span className="text-slate-400">Unemployment</span>
<div className="text-white font-medium">6.4%</div>
</div>
</div>
</div>

<div className="drill-down p-4 rounded-lg glass-card">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-6 bg-gradient-to-r from-red-600 to-yellow-400 rounded-sm flex items-center justify-center">
<span className="text-xs font-bold text-white">CN</span>
</div>
<div>
<span className="text-sm font-medium text-white">China</span>
<div className="text-xs text-slate-400">GDP: $17.9T</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-emerald-400">+5.2%</div>
<div className="text-xs text-slate-400">Growth Rate</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3 text-xs">
<div>
<span className="text-slate-400">CSI 300</span>
<div className="text-white font-medium">3,847.92</div>
</div>
<div>
<span className="text-slate-400">Inflation</span>
<div className="text-white font-medium">0.8%</div>
</div>
<div>
<span className="text-slate-400">Unemployment</span>
<div className="text-white font-medium">5.2%</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

<div className="animate-fade-in glass-card rounded-xl p-6 metric-card" style={{animationDelay: '0.2s'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-blue-400" data-lucide="trending-up"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-300">Global Market Cap</h3>
<p className="text-2xl font-semibold text-white">$104.2T</p>
</div>
</div>
<div className="flex items-center gap-1 text-emerald-400 text-sm">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span>+3.8%</span>
</div>
</div>
<div className="text-xs text-slate-400">YTD Performance</div>
</div>

<div className="animate-fade-in glass-card rounded-xl p-6 metric-card" style={{animationDelay: '0.3s'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-emerald-400" data-lucide="dollar-sign"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-300">USD Index</h3>
<p className="text-2xl font-semibold text-white">103.45</p>
</div>
</div>
<div className="flex items-center gap-1 text-red-400 text-sm">
<i className="w-4 h-4" data-lucide="trending-down"></i>
<span>-0.8%</span>
</div>
</div>
<div className="text-xs text-slate-400">vs Major Currencies</div>
</div>

<div className="animate-fade-in glass-card rounded-xl p-6 metric-card" style={{animationDelay: '0.4s'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-yellow-400" data-lucide="zap"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-300">Gold Price</h3>
<p className="text-2xl font-semibold text-white">$2,045</p>
</div>
</div>
<div className="flex items-center gap-1 text-emerald-400 text-sm">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span>+1.2%</span>
</div>
</div>
<div className="text-xs text-slate-400">per troy ounce</div>
</div>

<div className="animate-fade-in glass-card rounded-xl p-6 metric-card" style={{animationDelay: '0.5s'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-purple-400" data-lucide="cpu"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-300">Crypto Market</h3>
<p className="text-2xl font-semibold text-white">$1.67T</p>
</div>
</div>
<div className="flex items-center gap-1 text-emerald-400 text-sm">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span>+8.5%</span>
</div>
</div>
<div className="text-xs text-slate-400">Total Market Cap</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

<div className="animate-fade-in glass-card rounded-xl p-6" style={{animationDelay: '0.6s'}}>
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-white">Regional Market Performance</h3>
<p className="text-sm text-slate-400">YTD returns by region</p>
</div>
</div>
<div className="chart-container">
<canvas id="regionalChart"></canvas>
</div>
</div>

<div className="animate-fade-in glass-card rounded-xl p-6" style={{animationDelay: '0.7s'}}>
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-white">Global Finance News</h3>
<p className="text-sm text-slate-400">Latest market developments</p>
</div>
<button className="glass-card p-1 rounded">
<i className="w-4 h-4" data-lucide="external-link"></i>
</button>
</div>
<div className="space-y-4">
<div className="p-4 glass-card rounded-lg hover:bg-slate-700/20 transition-colors cursor-pointer">
<div className="flex items-start gap-3">
<div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
<div className="flex-1">
<h4 className="text-sm font-medium text-white mb-1">Fed Signals Potential Rate Cuts</h4>
<p className="text-xs text-slate-400 mb-2">Central bank indicates dovish stance amid cooling inflation data</p>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span>Reuters</span>
<span>•</span>
<span>2 hours ago</span>
</div>
</div>
</div>
</div>
<div className="p-4 glass-card rounded-lg hover:bg-slate-700/20 transition-colors cursor-pointer">
<div className="flex items-start gap-3">
<div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
<div className="flex-1">
<h4 className="text-sm font-medium text-white mb-1">Asian Markets Rally on Trade Optimism</h4>
<p className="text-xs text-slate-400 mb-2">Nikkei and Hang Seng lead gains across the region</p>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span>Bloomberg</span>
<span>•</span>
<span>4 hours ago</span>
</div>
</div>
</div>
</div>
<div className="p-4 glass-card rounded-lg hover:bg-slate-700/20 transition-colors cursor-pointer">
<div className="flex items-start gap-3">
<div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
<div className="flex-1">
<h4 className="text-sm font-medium text-white mb-1">European Central Bank Maintains Rates</h4>
<p className="text-xs text-slate-400 mb-2">ECB holds steady as eurozone shows resilience</p>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span>Financial Times</span>
<span>•</span>
<span>6 hours ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="animate-fade-in glass-card rounded-xl p-6" style={{animationDelay: '0.8s'}}>
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-white">Global Trading Sessions</h3>
<p className="text-sm text-slate-400">Current market hours worldwide</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-4 border border-emerald-500/30 bg-emerald-500/10 glass-card rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-white">New York</span>
<div className="w-2 h-2 bg-emerald-400 rounded-full status-indicator"></div>
</div>
<div className="text-xs text-slate-400 mb-1">NYSE, NASDAQ</div>
<div className="text-sm text-emerald-400">09:30 - 16:00 EST</div>
</div>
<div className="p-4 glass-card rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-white">London</span>
<div className="w-2 h-2 bg-slate-500 rounded-full"></div>
</div>
<div className="text-xs text-slate-400 mb-1">LSE</div>
<div className="text-sm text-slate-400">Closed</div>
</div>
<div className="p-4 border border-yellow-500/30 bg-yellow-500/10 glass-card rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-white">Tokyo</span>
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
</div>
<div className="text-xs text-slate-400 mb-1">TSE</div>
<div className="text-sm text-yellow-400">Pre-Market</div>
</div>
<div className="p-4 glass-card rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-white">Sydney</span>
<div className="w-2 h-2 bg-slate-500 rounded-full"></div>
</div>
<div className="text-xs text-slate-400 mb-1">ASX</div>
<div className="text-sm text-slate-400">Closed</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
