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
          
          float wave(vec2 pos, float time, float speed, float scale) {
            float dist = length(pos - 0.5);
            return sin(dist * scale - time * speed) * 0.5 + 0.5;
          }
          
          void main() {
            vec2 st = vUv;
            
            // Create multiple autonomous wave layers
            float wave1 = wave(st + vec2(sin(u_time * 0.3), cos(u_time * 0.2)), u_time, 2.0, 15.0);
            float wave2 = wave(st * 1.5 + vec2(cos(u_time * 0.4), sin(u_time * 0.3)), u_time, 1.5, 12.0);
            float wave3 = wave(st * 0.8 + vec2(sin(u_time * 0.2), cos(u_time * 0.5)), u_time, 2.5, 8.0);
            float wave4 = wave(st * 2.0 + vec2(cos(u_time * 0.6), sin(u_time * 0.1)), u_time, 1.0, 20.0);
            
            // Combine waves with different weights
            float combined = (wave1 * 0.4 + wave2 * 0.3 + wave3 * 0.2 + wave4 * 0.1);
            
            // Apply dithering
            vec2 pixelCoord = st * u_resolution;
            float ditherValue = dither(pixelCoord);
            
            // Finance-themed colors (dark blue to teal gradient)
            vec3 color1 = vec3(0.02, 0.05, 0.15); // Very dark blue
            vec3 color2 = vec3(0.0, 0.2, 0.3); // Dark teal
            vec3 color3 = vec3(0.05, 0.15, 0.25); // Medium blue
            
            // Create gradient based on combined waves
            float gradientFactor = smoothstep(0.3, 0.7, combined);
            vec3 baseColor = mix(color1, color2, gradientFactor);
            baseColor = mix(baseColor, color3, sin(u_time * 0.5) * 0.1 + 0.1);
            
            // Apply dithering for retro effect
            float ditheredValue = step(ditherValue, combined);
            vec3 finalColor = mix(baseColor * 0.3, baseColor, ditheredValue);
            
            gl_FragColor = vec4(finalColor, 0.8);
          }
        `;
        
        this.material = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms: {
            u_time: { value: 0 },
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
        window.addEventListener('resize', () => {
          this.renderer.setSize(window.innerWidth, window.innerHeight);
          this.material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
        });
      }
      
      animate() {
        this.time += 0.01;
        this.material.uniforms.u_time.value = this.time;
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.animate());
      }
    }

    // Initialize background
    const canvas = document.getElementById('dithered-canvas');
    new DitheredWaveBackground(canvas);

    // Initialize Globe
    let globe = createGlobe(document.getElementById('cobe'), {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 20000,
      mapBrightness: 1.2,
      baseColor: [0.05, 0.1, 0.2],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.05, 0.3, 0.6],
      markers: [
        // New York
        { location: [40.7128, -74.0060], size: 0.08 },
        // London
        { location: [51.5074, -0.1278], size: 0.08 },
        // Tokyo
        { location: [35.6762, 139.6503], size: 0.08 },
        // Hong Kong
        { location: [22.3193, 114.1694], size: 0.06 },
        // Frankfurt
        { location: [50.1109, 8.6821], size: 0.06 },
        // Sydney
        { location: [-33.8688, 151.2093], size: 0.06 },
        // Singapore
        { location: [1.3521, 103.8198], size: 0.06 },
        // Shanghai
        { location: [31.2304, 121.4737], size: 0.06 },
        // Mumbai
        { location: [19.0760, 72.8777], size: 0.05 },
        // São Paulo
        { location: [-23.5505, -46.6333], size: 0.05 }
      ],
      onRender: (state) => {
        state.phi += 0.002;
      }
    });

    // Initialize Chart
    const ctx = document.getElementById('regionalChart').getContext('2d');
    const regionalChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['North America', 'Europe', 'Asia Pacific', 'Emerging Markets'],
        datasets: [{
          data: [8.2, 6.4, 12.8, 15.6],
          backgroundColor: [
            'rgba(34, 197, 94, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(168, 85, 247, 0.8)',
            'rgba(249, 115, 22, 0.8)'
          ],
          borderColor: [
            'rgba(34, 197, 94, 1)',
            'rgba(59, 130, 246, 1)',
            'rgba(168, 85, 247, 1)',
            'rgba(249, 115, 22, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#cbd5e1',
              font: {
                family: 'Inter',
                size: 12
              },
              padding: 20
            }
          }
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        }
      }
    });

    // Initialize Lucide icons
    lucide.createIcons();

    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
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

    // Auto-refresh data simulation
    setInterval(() => {
      const indicators = document.querySelectorAll('.status-indicator');
      indicators.forEach(indicator => {
        indicator.style.animation = 'none';
        setTimeout(() => {
          indicator.style.animation = 'pulse 2s infinite';
        }, 100);
      });
    }, 30000);

  
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
