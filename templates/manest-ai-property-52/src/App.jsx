import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
function toggleView() { const grid = document.getElementById('grid-view'); const btn = document.getElementById('view-toggle-btn'); if (grid.classList.contains('hidden')) { grid.classList.remove('hidden'); btn.innerHTML = '<iconify-icon icon="solar:map-linear" width="18" stroke-width="1.5"></iconify-icon> Map View'; } else { grid.classList.add('hidden'); btn.innerHTML = '<iconify-icon icon="solar:widget-5-linear" width="18" stroke-width="1.5"></iconify-icon> Grid View'; } }



function toggleChatListings() { const hiddenListings = document.getElementById('hidden-listings'); const btn = document.getElementById('toggle-listings-btn'); if (hiddenListings && btn) { if (hiddenListings.classList.contains('hidden')) { hiddenListings.classList.remove('hidden'); btn.innerHTML = 'Show less <iconify-icon icon="solar:alt-arrow-up-linear" width="16" stroke-width="1.5"></iconify-icon>'; } else { hiddenListings.classList.add('hidden'); btn.innerHTML = 'Show all 12 properties <iconify-icon icon="solar:alt-arrow-down-linear" width="16" stroke-width="1.5"></iconify-icon>'; } } }



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      var filtersCollapsed = false;
      function toggleFilters() {
          var section = document.getElementById('filter-section');
          var chevron = document.getElementById('collapse-chevron');
          var summary = document.getElementById('filter-summary');
          filtersCollapsed = !filtersCollapsed;
          if (filtersCollapsed) { section.classList.add('collapsed'); chevron.classList.add('rotated'); summary.classList.remove('hidden'); }
          else { section.classList.remove('collapsed'); chevron.classList.remove('rotated'); summary.classList.add('hidden'); }
          setTimeout(function() { if (map) map.invalidateSize(); }, 400);
      }

      var map = L.map('map', { center: [13.2350, 77.7120], zoom: 12, zoomControl: false, attributionControl: false });
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(map);

      map.on('popupopen', function(e) {
          var marker = e.popup._source;
          var popupNode = e.popup.getElement();
          if (marker && popupNode) {
              popupNode.addEventListener('mouseenter', function() {
                  clearTimeout(marker._popupTimeout);
              });
              popupNode.addEventListener('mouseleave', function() {
                  marker._popupTimeout = setTimeout(function() {
                      marker.closePopup();
                  }, 300);
              });
          }
      });

      function createPropertyIcon(isActive) {
          var size = isActive ? 20 : 16;
          return L.divIcon({ className: 'map-marker-property', html: '<div class="map-marker-dot ' + (isActive ? 'active' : '') + '"></div>', iconSize: [size, size], iconAnchor: [size/2, size/2] });
      }

      function createPOIIcon(emoji, colorHex) {
          var colorClass = "";
          if(colorHex) colorClass = "background: " + colorHex + ";";
          return L.divIcon({ className: '', html: '<div class="map-marker-poi-icon"><div class="poi-icon-circle" style="' + colorClass + '">' + emoji + '</div></div>', iconSize: [22, 22], iconAnchor: [11, 11] });
      }

      var properties = [
          { lat: 13.2350, lng: 77.7120, name: 'Birla Trimaya Phase 2', price: '₹1.24 Cr', beds: 3, sqft: '1,650', match: 95, img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80', active: true },
          { lat: 13.2450, lng: 77.7250, name: 'Godrej Reserve', price: '₹1.85 Cr', beds: 3, sqft: '1,850', match: 88, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80', active: false },
          { lat: 13.2200, lng: 77.7050, name: 'Prestige Golfshire', price: '₹4.20 Cr', beds: 4, sqft: '4,500', match: 72, img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80', active: false },
          { lat: 13.2100, lng: 77.7180, name: 'Brigade Orchards', price: '₹95 L', beds: 2, sqft: '1,150', match: 91, img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80', active: false },
          { lat: 13.2550, lng: 77.7000, name: 'Embassy Springs', price: '₹2.10 Cr', beds: 3, sqft: '2,100', match: 84, img: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&q=80', active: false },
          { lat: 13.2250, lng: 77.6900, name: 'Salarpuria Sattva Park Cubix', price: '₹1.05 Cr', beds: 2, sqft: '1,250', match: 78, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80', active: false },
          { lat: 13.2400, lng: 77.6800, name: 'Ozone Urbana', price: '₹1.35 Cr', beds: 3, sqft: '1,700', match: 85, img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80', active: false }
      ];

      properties.forEach(function(p) {
          var marker = L.marker([p.lat, p.lng], { icon: createPropertyIcon(p.active) }).addTo(map);
          var popupContent = '<div style="width:240px; cursor:default;">' +
              (p.img ? '<div style="position:relative;height:120px;overflow:hidden;"><img src="' + p.img + '" style="width:100%;height:100%;object-fit:cover;" />' +
              '<div style="position:absolute;top:8px;left:8px;background:rgba(23,23,23,0.9);color:white;font-size:10px;font-weight:500;padding:2px 6px;border-radius:4px;">⭐ ' + p.match + '% Match</div></div>' : '') +
              '<div style="padding:12px;font-family:Inter,sans-serif;">' +
              '<div style="font-size:13px;font-weight:500;color:#171717;margin-bottom:2px;">' + p.name + '</div>' +
              '<div style="font-size:11px;color:#737373;margin-bottom:8px;">' + p.beds + ' Bed · ' + p.sqft + ' sqft</div>' +
              '<div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #f5f5f5;padding-top:8px;">' +
              '<span style="font-size:13px;font-weight:500;color:#171717;">' + p.price + '</span>' +
              '</div></div></div>';
          marker.bindPopup(popupContent, { maxWidth: 240, minWidth: 240, offset: [0, -8], closeButton: false, autoPan: false });
          marker.on('mouseover', function() { clearTimeout(this._popupTimeout); this.openPopup(); });
          marker.on('mouseout', function() { var self = this; this._popupTimeout = setTimeout(function() { self.closePopup(); }, 300); });
          marker.on('click', function() { openPDP(); });
      });

      var pois = [
          { lat: 13.2450, lng: 77.7000, emoji: '🎓', color: '#1e3a8a', title: 'Stonehill Int. School' },
          { lat: 13.2200, lng: 77.7250, emoji: '🏥', color: '#ef4444', title: 'Columbia Asia Hebbal' },
          { lat: 13.2450, lng: 77.7300, emoji: '💼', color: '#eab308', title: 'KIADB Aerospace SEZ' },
          { lat: 13.2100, lng: 77.7000, emoji: '🎓', color: '#1e3a8a', title: 'Canadian Int. School' },
          { lat: 13.2300, lng: 77.6900, emoji: '🛒', color: '#10b981', title: 'Retail Hub' },
          { lat: 13.2500, lng: 77.7150, emoji: '✈️', color: '#6366f1', title: 'Airport Route' }
      ];

      pois.forEach(function(poi) {
          L.marker([poi.lat, poi.lng], { icon: createPOIIcon(poi.emoji, poi.color) }).addTo(map)
           .bindPopup('<div style="font-family:Inter;padding:8px;"><div style="font-size:12px;font-weight:500;">' + poi.emoji + ' ' + poi.title + '</div></div>', { offset: [0, -8], closeButton: false });
      });

      var userIcon = L.divIcon({
          className: 'map-marker-property',
          html: '<div style="position:relative;display:flex;align-items:center;justify-content:center;"><div style="position:absolute;width:32px;height:32px;border-radius:50%;background:rgba(234,88,12,0.2);animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite;"></div><div style="width:12px;height:12px;border-radius:50%;background:#ea580c;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.2);position:relative;z-index:10;"></div></div>',
          iconSize: [32, 32], iconAnchor: [16, 16]
      });
      L.marker([13.2000, 77.7000], { icon: userIcon }).addTo(map);

      var style = document.createElement('style');
      style.textContent = '@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }';
      document.head.appendChild(style);

      var pdpMap = null;
      function openPDP() {
          var overlay = document.getElementById('pdp-overlay');
          overlay.classList.remove('hide-overlay'); overlay.classList.add('show-overlay'); overlay.scrollTop = 0;
          document.body.style.overflow = 'hidden';
          setTimeout(function() {
              if (!pdpMap) {
                  pdpMap = L.map('pdp-map', { center: [13.2350, 77.7120], zoom: 12, zoomControl: false, attributionControl: false, scrollWheelZoom: false, dragging: false });
                  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(pdpMap);

                  L.marker([13.2350, 77.7120], { icon: createPropertyIcon(true) }).addTo(pdpMap);
                  L.circle([13.2350, 77.7120], { radius: 1500, color: '#0d9488', fillColor: '#0d9488', fillOpacity: 0.05, weight: 1, dashArray: '4' }).addTo(pdpMap);

                  L.marker([13.2450, 77.7000], { icon: createPOIIcon('🎓', '#1e3a8a') }).addTo(pdpMap).bindPopup('<div style="font-family:Inter;padding:8px;"><div style="font-size:12px;font-weight:500;">🎓 Stonehill Int. School</div></div>', { offset: [0, -8], closeButton: false });
                  L.marker([13.2200, 77.7250], { icon: createPOIIcon('🏥', '#ef4444') }).addTo(pdpMap).bindPopup('<div style="font-family:Inter;padding:8px;"><div style="font-size:12px;font-weight:500;">🏥 Columbia Asia Hebbal</div></div>', { offset: [0, -8], closeButton: false });
                  L.marker([13.2450, 77.7300], { icon: createPOIIcon('💼', '#eab308') }).addTo(pdpMap).bindPopup('<div style="font-family:Inter;padding:8px;"><div style="font-size:12px;font-weight:500;">💼 KIADB Aerospace SEZ</div></div>', { offset: [0, -8], closeButton: false });
              } else { pdpMap.invalidateSize(); }
          }, 350);
      }
      function closePDP() {
          var overlay = document.getElementById('pdp-overlay');
          overlay.classList.remove('show-overlay'); overlay.classList.add('hide-overlay');
          document.body.style.overflow = '';
      }

      document.addEventListener('DOMContentLoaded', function() {
          var chatScroll = document.getElementById('chat-scroll');
          if (chatScroll) chatScroll.scrollTop = chatScroll.scrollHeight;

          var chatInput = document.getElementById('chat-input');
          var sendBtn = document.getElementById('send-btn');
          function sendMessage() {
              var message = chatInput.value.trim(); if (!message) return;
              var chatContainer = document.getElementById('chat-container');
              var spacer = document.getElementById('chat-spacer');
              var userMsg = document.createElement('div');
              userMsg.className = 'px-5 py-2';
              userMsg.innerHTML = '<div class="flex justify-end"><div class="bg-orange-50 text-orange-950 border border-orange-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-sm"><p class="text-sm leading-relaxed">' + message + '</p></div></div>';
              chatContainer.insertBefore(userMsg, spacer);
              chatInput.value = '';
              chatScroll.scrollTop = chatScroll.scrollHeight;
              setTimeout(function() {
                  var aiResponse = document.createElement('div');
                  aiResponse.className = 'px-5 py-4';
                  aiResponse.innerHTML = '<div class="flex items-start gap-3"><div class="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0"><iconify-icon icon="solar:cpu-linear" width="16" class="text-white" stroke-width="1.5"></iconify-icon></div><div class="flex-1"><div class="bg-white rounded-2xl rounded-tl-sm border border-neutral-100 shadow-sm p-4"><p class="text-sm leading-relaxed text-neutral-600">I\'m updating the details for Birla Trimaya Phase 2. What else would you like to know?</p></div></div></div>';
                  chatContainer.insertBefore(aiResponse, spacer);
                  chatScroll.scrollTop = chatScroll.scrollHeight;
              }, 1500);
          }
          if (sendBtn) sendBtn.addEventListener('click', sendMessage);
          if (chatInput) chatInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') { e.preventDefault(); sendMessage(); } });
          document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closePDP(); });

          document.querySelectorAll('.suggestion-chip').forEach(function(chip) {
              chip.addEventListener('click', function() {
                  if(chatInput) {
                      chatInput.value = this.innerText.trim();
                      chatInput.focus();
                  }
              });
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="flex flex-col lg:flex-row-reverse transition-opacity duration-500" style={{height: '100vh'}}>

<section className="h-[45vh] lg:h-full lg:w-1/2 flex flex-col z-20 border-b lg:border-b-0 lg:border-l border-neutral-200 bg-white flex-shrink-0">
<div className="flex-shrink-0 border-b border-neutral-200 bg-white z-30">
<button className="w-full flex items-center justify-between px-5 py-3 hover:bg-neutral-50 transition-colors" id="filter-toggle" onclick="toggleFilters()">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:filter-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm font-medium text-neutral-900">Filters</span>
<span className="text-white text-xs font-medium px-1.5 py-0.5 rounded-full min-w-[20px] text-center bg-orange-600">
                3
              </span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-400 hidden" id="filter-summary">
                3BHK · ₹1-4 Cr · Apartment
              </span>
<iconify-icon className="collapse-chevron text-neutral-400" icon="solar:alt-arrow-down-linear" id="collapse-chevron" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</button>
<div className="filter-section px-5 pb-4" id="filter-section">
<div className="flex items-center gap-2 mb-3">
<div className="flex-1 border rounded-xl px-3 py-2.5 border-neutral-200 bg-white focus-within:border-neutral-900 transition-colors">
<div className="text-xs text-neutral-400 mb-0.5">Location</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
<input className="text-sm font-medium text-neutral-900 outline-none w-full bg-transparent placeholder:text-neutral-400" placeholder="Search location..." type="text" value="Whitefield, Bangalore"/>
</div>
</div>
</div>
<div className="flex items-center gap-2 mb-3">
<div className="flex-1">
<label className="text-xs text-neutral-400 mb-1 block">
                  Home Type
                </label>
<select className="custom-select w-full border rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-900 border-neutral-200 bg-white cursor-pointer">
<option selected="">Apartment</option>
</select>
</div>
<div className="flex-1">
<label className="text-xs text-neutral-400 mb-1 block">
                  Bedrooms
                </label>
<select className="custom-select w-full border rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-900 border-neutral-200 bg-white cursor-pointer">
<option selected="">3 BHK</option>
</select>
</div>
</div>
<div className="flex items-center gap-2 mb-4">
<div className="flex-1">
<label className="text-xs text-neutral-400 mb-1 block">
                  Min Price
                </label>
<select className="custom-select w-full border rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-900 border-neutral-200 bg-white cursor-pointer">
<option selected="">₹1 Cr</option>
</select>
</div>
<span className="text-neutral-300 mt-5">—</span>
<div className="flex-1">
<label className="text-xs text-neutral-400 mb-1 block">
                  Max Price
                </label>
<select className="custom-select w-full border rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-900 border-neutral-200 bg-white cursor-pointer">
<option selected="">₹4 Cr</option>
</select>
</div>
</div>
<div className="flex items-center gap-2 flex-wrap mb-4">
<div className="flex items-center gap-1.5 bg-neutral-100 text-neutral-700 rounded-full px-3 py-1 text-xs font-medium">
                3 BHK
                <button className="hover:text-neutral-900">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-1.5 bg-neutral-100 text-neutral-700 rounded-full px-3 py-1 text-xs font-medium">
                ₹1 Cr - ₹4 Cr
                <button className="hover:text-neutral-900">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-1.5 bg-neutral-100 text-neutral-700 rounded-full px-3 py-1 text-xs font-medium">
                Apartment
                <button className="hover:text-neutral-900">
<iconify-icon className="" icon="solar:close-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
<button className="w-full rounded-xl py-3 text-sm font-medium text-white shadow-sm flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
              Apply Filters
            </button>
</div>
</div>

<div className="flex-1 overflow-hidden relative">
<div className="absolute top-4 left-4 z-[1000]">
<div className="flex gap-3 pointer-events-auto bg-white/95 border-neutral-200 border rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm backdrop-blur-md gap-x-3 gap-y-3 items-center">
<span className="text-sm font-medium text-neutral-900">
                12 properties found
              </span>
</div>
</div>
<div className="leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom w-full h-full" id="map" style={{position: 'relative'}} tabindex="0">

<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1897@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-10px', marginTop: '-10px', width: '20px', height: '20px', zIndex: '327'}} tabindex="0">
<div className="map-marker-dot active"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '297'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '372'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '402'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '267'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '357'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '312'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '372'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      🏥
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      💼
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '402'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '342'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      🛒
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '282'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      ✈️
                    </div>
</div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '432'}} tabindex="0">
<div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<div style={{position: 'absolute', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(59,130,246,0.2)', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite'}}></div>
<div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#3b82f6', border: '3px solid white', boxShadow: '0 2px 6px rgba(0,0,0,0.2)', position: 'relative', zIndex: '10'}}></div>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right"></div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1897@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-10px', marginTop: '-10px', width: '20px', height: '20px', zIndex: '327'}} tabindex="0">
<div className="map-marker-dot active"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '297'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '372'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '402'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '267'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '357'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '312'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '372'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      🏥
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      💼
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '402'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '342'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      🛒
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '282'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      ✈️
                    </div>
</div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '432'}} tabindex="0">
<div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<div style={{position: 'absolute', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(59,130,246,0.2)', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite'}}></div>
<div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#3b82f6', border: '3px solid white', boxShadow: '0 2px 6px rgba(0,0,0,0.2)', position: 'relative', zIndex: '10'}}></div>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right"></div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1897@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-10px', marginTop: '-10px', width: '20px', height: '20px', zIndex: '327'}} tabindex="0">
<div className="map-marker-dot active"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '297'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '372'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '402'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '267'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '357'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '312'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '372'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      🏥
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      💼
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '402'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '342'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      🛒
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '282'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: 'transparent'}}>
                      ✈️
                    </div>
</div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '432'}} tabindex="0">
<div className="" style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<div className="" style={{position: 'absolute', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(59,130,246,0.2)', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite'}}></div>
<div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#3b82f6', border: '3px solid white', boxShadow: '0 2px 6px rgba(0,0,0,0.2)', position: 'relative', zIndex: '10'}}></div>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right"></div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1897@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-10px', marginTop: '-10px', width: '20px', height: '20px', zIndex: '327'}} tabindex="0">
<div className="map-marker-dot active"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '297'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '372'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '402'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '267'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '357'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '312'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#1e3a8a'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '372'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#ef4444'}}>
                      🏥
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#eab308'}}>
                      💼
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '402'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#1e3a8a'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '342'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#10b981'}}>
                      🛒
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '282'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#6366f1'}}>
                      ✈️
                    </div>
</div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '432'}} tabindex="0">
<div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<div style={{position: 'absolute', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(59,130,246,0.2)', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite'}}></div>
<div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#3b82f6', border: '3px solid white', boxShadow: '0 2px 6px rgba(0,0,0,0.2)', position: 'relative', zIndex: '10'}}></div>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right"></div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1897@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-10px', marginTop: '-10px', width: '20px', height: '20px', zIndex: '327'}} tabindex="0">
<div className="map-marker-dot active"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '297'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '372'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '402'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '267'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '357'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '312'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#1e3a8a'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '372'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#ef4444'}}>
                      🏥
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#eab308'}}>
                      💼
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '402'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#1e3a8a'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '342'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#10b981'}}>
                      🛒
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '282'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#6366f1'}}>
                      ✈️
                    </div>
</div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '432'}} tabindex="0">
<div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<div style={{position: 'absolute', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(59,130,246,0.2)', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite'}}></div>
<div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#3b82f6', border: '3px solid white', boxShadow: '0 2px 6px rgba(0,0,0,0.2)', position: 'relative', zIndex: '10'}}></div>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right"></div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1897@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-10px', marginTop: '-10px', width: '20px', height: '20px', zIndex: '327'}} tabindex="0">
<div className="map-marker-dot active"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '297'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '372'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '402'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '267'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '357'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '312'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#1e3a8a'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '372'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#ef4444'}}>
                      🏥
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#eab308'}}>
                      💼
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '402'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#1e3a8a'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '342'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#10b981'}}>
                      🛒
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '282'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#6366f1'}}>
                      ✈️
                    </div>
</div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '432'}} tabindex="0">
<div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<div style={{position: 'absolute', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(59,130,246,0.2)', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite'}}></div>
<div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#3b82f6', border: '3px solid white', boxShadow: '0 2px 6px rgba(0,0,0,0.2)', position: 'relative', zIndex: '10'}}></div>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right"></div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1897@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-10px', marginTop: '-10px', width: '20px', height: '20px', zIndex: '327'}} tabindex="0">
<div className="map-marker-dot active"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '297'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '372'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '402'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '267'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '357'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '312'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#1e3a8a'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '372'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#ef4444'}}>
                      🏥
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#eab308'}}>
                      💼
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '402'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#1e3a8a'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '342'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#10b981'}}>
                      🛒
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '282'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#6366f1'}}>
                      ✈️
                    </div>
</div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '432'}} tabindex="0">
<div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<div style={{position: 'absolute', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(59,130,246,0.2)', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite'}}></div>
<div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#3b82f6', border: '3px solid white', boxShadow: '0 2px 6px rgba(0,0,0,0.2)', position: 'relative', zIndex: '10'}}></div>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right"></div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1897@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-10px', marginTop: '-10px', width: '20px', height: '20px', zIndex: '327'}} tabindex="0">
<div className="map-marker-dot active"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '297'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '372'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '402'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '267'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '357'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '312'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#1e3a8a'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '372'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#ef4444'}}>
                      🏥
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#eab308'}}>
                      💼
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '402'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#1e3a8a'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '342'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#10b981'}}>
                      🛒
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '282', outlineStyle: 'none'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#6366f1'}}>
                      ✈️
                    </div>
</div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '432'}} tabindex="0">
<div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<div style={{position: 'absolute', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(59,130,246,0.2)', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite'}}></div>
<div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#3b82f6', border: '3px solid white', boxShadow: '0 2px 6px rgba(0,0,0,0.2)', position: 'relative', zIndex: '10'}}></div>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right"></div>
</div>
<div className="leaflet-pane leaflet-map-pane">
<div className="leaflet-pane leaflet-tile-pane">
<div className="leaflet-layer" style={{zIndex: '1'}}>
<div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: '19'}}>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1895@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1896@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://b.basemaps.cartocdn.com/rastertiles/voyager/12/2931/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://c.basemaps.cartocdn.com/rastertiles/voyager/12/2932/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1894@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2930/1897@2x.png" style={{width: '256px', height: '256px'}}/>
<img alt="" className="leaflet-tile leaflet-tile-loaded" src="https://a.basemaps.cartocdn.com/rastertiles/voyager/12/2933/1897@2x.png" style={{width: '256px', height: '256px'}}/>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-overlay-pane"></div>
<div className="leaflet-pane leaflet-shadow-pane"></div>
<div className="leaflet-pane leaflet-marker-pane">
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-10px', marginTop: '-10px', width: '20px', height: '20px', zIndex: '327'}} tabindex="0">
<div className="map-marker-dot active"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '297'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '372'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '402'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '267'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '357'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-8px', marginTop: '-8px', width: '16px', height: '16px', zIndex: '312'}} tabindex="0">
<div className="map-marker-dot"></div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#1e3a8a'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '372'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#ef4444'}}>
                      🏥
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '297'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#eab308'}}>
                      💼
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '402'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#1e3a8a'}}>
                      🎓
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '342'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#10b981'}}>
                      🛒
                    </div>
</div>
</div>
<div className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-11px', marginTop: '-11px', width: '22px', height: '22px', zIndex: '282'}} tabindex="0">
<div className="map-marker-poi-icon">
<div className="poi-icon-circle" style={{background: '#6366f1'}}>
                      ✈️
                    </div>
</div>
</div>
<div className="leaflet-marker-icon map-marker-property leaflet-zoom-animated leaflet-interactive" role="button" style={{marginLeft: '-16px', marginTop: '-16px', width: '32px', height: '32px', zIndex: '432'}} tabindex="0">
<div className="" style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<div className="" style={{position: 'absolute', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(59,130,246,0.2)', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite'}}></div>
<div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#3b82f6', border: '3px solid white', boxShadow: '0 2px 6px rgba(0,0,0,0.2)', position: 'relative', zIndex: '10'}}></div>
</div>
</div>
</div>
<div className="leaflet-pane leaflet-tooltip-pane"></div>
<div className="leaflet-pane leaflet-popup-pane"></div>
<div className="leaflet-proxy leaflet-zoom-animated"></div>
</div>
<div className="leaflet-control-container">
<div className="leaflet-top leaflet-left"></div>
<div className="leaflet-top leaflet-right"></div>
<div className="leaflet-bottom leaflet-left"></div>
<div className="leaflet-bottom leaflet-right"></div>
</div>
</div>
<div className="absolute bottom-6 right-4 z-[1000] flex flex-col gap-2 pointer-events-auto">
<button className="backdrop-blur bg-white/95 p-2.5 rounded-lg shadow-sm border border-neutral-200 hover:bg-white text-neutral-600" onclick="map.zoomIn()">
<iconify-icon className="" height="20" icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="backdrop-blur bg-white/95 p-2.5 rounded-lg shadow-sm border border-neutral-200 hover:bg-white text-neutral-600" onclick="map.zoomOut()">
<iconify-icon height="20" icon="solar:minus-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="z-[1000] pointer-events-auto absolute bottom-6 left-4 hidden sm:block">
<div className="flex bg-white/95 border-neutral-200 border rounded-md mt-0 mr-0 mb-0 ml-0 pt-2 pr-2 pb-2 pl-2 shadow-sm backdrop-blur-md gap-x-2 gap-y-4 items-center">
<div className="flex items-center gap-1.5">
<span className="w-3.5 h-3.5 rounded-full bg-neutral-700 border-2 border-white shadow-sm"></span>
<span className="text-xs text-neutral-600">Properties</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full border-2 border-white shadow-sm bg-orange-600"></span>
<span className="text-xs text-neutral-600">You</span>
</div>
<div className="flex items-center gap-1.5">
<span className="" style={{fontSize: '10px'}}>🎓🏥</span>
<span className="text-xs text-neutral-600">Amenities</span>
</div>
</div>
</div>
<div className="absolute inset-0 z-[900] bg-neutral-50 hidden overflow-y-auto p-5 pb-24" id="grid-view">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-40">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    95% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Birla Trimaya Phase 2
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹1.24 Cr
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 3 Bed · 1,650 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Available
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-40">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    88% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Godrej Reserve
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹1.85 Cr
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 3 Bed · 1,850 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Available
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-40">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    84% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Embassy Springs
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹2.10 Cr
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 3 Bed · 2,100 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Few Left
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative h-40">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md text-xs font-medium text-neutral-900 flex items-center gap-1 shadow-sm border border-neutral-100">
<span className="text-teal-600">★</span>
                    91% Match
                  </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-100 text-neutral-600 hover:text-red-500 shadow-sm transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 truncate pr-2">
                      Brigade Orchards
                    </h3>
<span className="text-sm font-medium tracking-tight text-neutral-900 flex-shrink-0">
                      ₹95 L
                    </span>
</div>
<p className="text-xs text-neutral-500 mb-3">
                    Devanahalli · 2 Bed · 1,150 sq ft
                  </p>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">
                        Available
                      </span>
</div>
<span className="text-xs font-medium text-neutral-500 flex items-center gap-1 group-hover:text-neutral-900 transition-colors">
                      View details
                      <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000] pointer-events-auto">
<button className="flex transition-all text-sm font-medium text-white rounded-full pt-3 pr-5 pb-3 pl-5 shadow-lg gap-x-2 gap-y-2 items-center hover:bg-orange-700 bg-orange-600" id="view-toggle-btn" onclick="toggleView()">
<iconify-icon className="" height="18" icon="solar:widget-5-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon>
              Grid View
            </button>
</div>
</div>
</section>

<section className="h-[55vh] lg:h-full lg:w-1/2 flex flex-col z-20 bg-white flex-shrink-0">
<div className="flex-shrink-0 z-30 bg-white border-neutral-200 border-b pt-3 pr-5 pb-3 pl-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-800">
<iconify-icon className="text-white" icon="solar:home-smile-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="">
<h1 className="text-lg font-medium tracking-tighter uppercase text-neutral-900 leading-none mb-1">
                  MANEST
                </h1>
<p className="text-[10px] uppercase tracking-wider text-neutral-500 leading-none">
                  AI Assistant
                </p>
</div>
</div>
<span className="flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Online
            </span>
</div>
</div>
<div className="flex-1 overflow-y-auto bg-neutral-100/50" id="chat-scroll">
<div className="flex flex-col" id="chat-container">
<div className="px-5 py-5">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-neutral-800">
<iconify-icon className="text-white" icon="solar:cpu-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-medium text-neutral-900">
                      Manest AI
                    </span>
</div>
<div className="bg-white rounded-2xl rounded-tl-sm border border-neutral-100 shadow-sm p-4">
<p className="text-sm leading-relaxed text-neutral-600">
                      Hi! 👋 I found
                      <strong className="text-neutral-900">12 properties</strong>
                      matching your criteria. Check out Birla Trimaya Phase 2:
                    </p>
</div>
</div>
</div>
</div>

<div className="pt-4 pr-5 pb-4 pl-5">
<div className="flex gap-3 items-start">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-neutral-800">
<iconify-icon className="text-white" height="16" icon="solar:cpu-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="bg-white border-neutral-100 border rounded-2xl p-4 shadow-sm">
<div className="space-y-3" id="chat-listings">
<div className="listing-card rounded-xl p-3 border shadow-sm flex gap-3 cursor-pointer relative overflow-hidden group bg-white border-neutral-900 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative w-20 h-20 flex-shrink-0">
<img className="bg-neutral-100 w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&amp;q=80"/>
</div>
<div className="flex flex-col justify-between py-0.5 w-full min-w-0">
<div className="">
<div className="flex justify-between items-start mb-0.5">
<h4 className="text-sm font-medium tracking-tight text-neutral-900 truncate">
                                Birla Trimaya Phase 2
                              </h4>
<span className="text-xs font-medium px-1.5 py-0.5 rounded text-neutral-900 bg-neutral-100 flex-shrink-0 ml-2">
                                95%
                              </span>
</div>
<p className="text-xs text-neutral-500 mb-1.5">
                              Devanahalli · 3 Bed · 1,650 sq ft
                            </p>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium tracking-tight">
                              ₹1.24 Cr
                            </span>
<span className="text-xs text-neutral-400 group-hover:text-neutral-900 flex items-center gap-0.5">
                              View
                              <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="listing-card rounded-xl p-3 border shadow-sm flex gap-3 cursor-pointer relative overflow-hidden group bg-white border-neutral-200 hover:border-neutral-900 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative w-20 h-20 flex-shrink-0">
<img className="bg-neutral-100 w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&amp;q=80"/>
</div>
<div className="flex flex-col justify-between py-0.5 w-full min-w-0">
<div className="">
<div className="flex justify-between items-start mb-0.5">
<h4 className="text-sm font-medium tracking-tight text-neutral-900 truncate">
                                Godrej Reserve
                              </h4>
<span className="text-xs font-medium px-1.5 py-0.5 rounded text-neutral-900 bg-neutral-100 flex-shrink-0 ml-2">
                                88%
                              </span>
</div>
<p className="text-xs text-neutral-500 mb-1.5">
                              Devanahalli · 3 Bed · 1,850 sq ft
                            </p>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium tracking-tight">
                              ₹1.85 Cr
                            </span>
<span className="text-xs text-neutral-400 group-hover:text-neutral-900 flex items-center gap-0.5">
                              View
                              <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="listing-card rounded-xl p-3 border shadow-sm flex gap-3 cursor-pointer relative overflow-hidden group bg-white border-neutral-200 hover:border-neutral-900 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative w-20 h-20 flex-shrink-0">
<img className="bg-neutral-100 w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&amp;q=80"/>
</div>
<div className="flex flex-col justify-between py-0.5 w-full min-w-0">
<div className="">
<div className="flex justify-between items-start mb-0.5">
<h4 className="text-sm font-medium tracking-tight text-neutral-900 truncate">
                                Embassy Springs
                              </h4>
<span className="text-xs font-medium px-1.5 py-0.5 rounded text-neutral-900 bg-neutral-100 flex-shrink-0 ml-2">
                                84%
                              </span>
</div>
<p className="text-xs text-neutral-500 mb-1.5">
                              Devanahalli · 3 Bed · 2,100 sq ft
                            </p>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium tracking-tight">
                              ₹2.10 Cr
                            </span>
<span className="text-xs text-neutral-400 group-hover:text-neutral-900 flex items-center gap-0.5">
                              View
                              <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="hidden space-y-3" id="hidden-listings">
<div className="listing-card rounded-xl p-3 border shadow-sm flex gap-3 cursor-pointer relative overflow-hidden group bg-white border-neutral-200 hover:border-neutral-900 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative w-20 h-20 flex-shrink-0">
<img className="bg-neutral-100 w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&amp;q=80"/>
</div>
<div className="flex flex-col justify-between py-0.5 w-full min-w-0">
<div>
<div className="flex justify-between items-start mb-0.5">
<h4 className="text-sm font-medium tracking-tight text-neutral-900 truncate">
                                  Brigade Orchards
                                </h4>
<span className="text-xs font-medium px-1.5 py-0.5 rounded text-neutral-900 bg-neutral-100 flex-shrink-0 ml-2">
                                  91%
                                </span>
</div>
<p className="text-xs text-neutral-500 mb-1.5">
                                Devanahalli · 2 Bed · 1,150 sq ft
                              </p>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium tracking-tight">
                                ₹95 L
                              </span>
<span className="text-xs text-neutral-400 group-hover:text-neutral-900 flex items-center gap-0.5">
                                View
                                <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="listing-card rounded-xl p-3 border shadow-sm flex gap-3 cursor-pointer relative overflow-hidden group bg-white border-neutral-200 hover:border-neutral-900 hover:shadow-md transition-all" onclick="openPDP()">
<div className="relative w-20 h-20 flex-shrink-0">
<img className="bg-neutral-100 w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&amp;q=80"/>
</div>
<div className="flex flex-col justify-between py-0.5 w-full min-w-0">
<div>
<div className="flex justify-between items-start mb-0.5">
<h4 className="text-sm font-medium tracking-tight text-neutral-900 truncate">
                                  Prestige Golfshire
                                </h4>
<span className="text-xs font-medium px-1.5 py-0.5 rounded text-neutral-900 bg-neutral-100 flex-shrink-0 ml-2">
                                  72%
                                </span>
</div>
<p className="text-xs text-neutral-500 mb-1.5">
                                Devanahalli · 4 Bed · 4,500 sq ft
                              </p>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium tracking-tight">
                                ₹4.20 Cr
                              </span>
<span className="text-xs text-neutral-400 group-hover:text-neutral-900 flex items-center gap-0.5">
                                View
                                <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="bg-neutral-50 rounded-xl p-3 border border-neutral-200 flex items-center justify-between">
<span className="text-xs text-neutral-600 font-medium">
                            + 7 more matching properties found
                          </span>
<button className="text-xs font-medium text-neutral-900 hover:underline">
                            View on Map
                          </button>
</div>
</div>
<button className="w-full py-2.5 mt-1 flex items-center justify-center gap-1.5 text-xs font-medium border rounded-xl transition-colors text-teal-700 bg-teal-50 hover:bg-teal-100 border-teal-200" id="toggle-listings-btn" onclick="toggleChatListings()">
                        Show all 12 properties
                        <iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
<div className="h-4" id="chat-spacer"></div>
</div>
</div>
<div className="flex-shrink-0 border-t border-neutral-100 bg-white px-5 py-2.5">
<div className="flex gap-2 overflow-x-auto pb-1 gap-x-1.5 gap-y-1.5 items-center">
<button className="suggestion-chip flex-shrink-0 flex text-xs text-neutral-600 bg-white border-neutral-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1.5 gap-y-1.5 items-center">
<iconify-icon className="text-neutral-400" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="14"></iconify-icon>
              Ready to move only
            </button>
<button className="suggestion-chip flex-shrink-0 flex gap-1.5 text-xs text-neutral-600 bg-white border-neutral-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1.5 gap-y-1.5 items-center">
<iconify-icon className="text-neutral-400" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="14"></iconify-icon>
              Compare top 3
            </button>
<button className="suggestion-chip flex-shrink-0 flex text-xs text-neutral-600 bg-white border-neutral-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1.5 gap-y-1.5 items-center">
              Gated Community
            </button>
</div>
</div>
<div className="flex-shrink-0 bg-white border-neutral-200 border-t pt-3 pr-5 pb-8 pl-5">
<div className="relative flex items-center">
<input className="w-full border rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-neutral-400 shadow-sm placeholder:text-neutral-400 bg-neutral-50 border-neutral-200" id="chat-input" placeholder="Ask about properties, neighborhoods, pricing..." type="text"/>
<button className="absolute right-2 w-9 h-9 flex items-center justify-center rounded-full text-white bg-orange-600 hover:bg-orange-700" id="send-btn">
<iconify-icon className="" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</section>
</main>

<div className="fixed inset-0 z-50 overflow-y-auto transition-all duration-300 bg-white hide-overlay" id="pdp-overlay">

<nav className="sticky z-40 px-4 sm:px-6 lg:px-8 flex bg-white/90 border-neutral-200 border-b py-4 top-0 backdrop-blur-md items-center justify-between">
<div className="flex gap-2 items-center">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-800">
<iconify-icon className="text-white" icon="solar:home-smile-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h1 className="text-xl font-medium tracking-tighter uppercase text-neutral-800">
            MANEST
          </h1>
</div>
<div className="flex items-center gap-2">
<button className="flex hover:bg-neutral-50 transition-all text-sm font-medium text-neutral-900 bg-white border-neutral-200 border rounded-lg px-4 py-2 shadow-sm gap-2 items-center" onclick="closePDP()">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
            Close
          </button>
</div>
</nav>
<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">

<div className="flex flex-col md:flex-row gap-3 h-[40vh] md:h-[500px] w-full">

<div className="w-full md:w-[70%] h-full relative bg-white p-2.5 border border-neutral-200 rounded-xl shadow-sm group">
<img className="w-full h-full object-cover rounded-lg transition-transform duration-700" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&amp;q=80"/>
<div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-md text-xs font-medium text-neutral-900 border border-neutral-200 shadow-sm">
              1 / 24
            </div>
</div>

<div className="hidden md:flex w-[30%] flex-col gap-3 h-full">
<div className="flex-1 bg-white p-2 border border-neutral-200 rounded-xl shadow-sm overflow-hidden">
<img className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&amp;q=80"/>
</div>
<div className="flex-1 bg-white p-2 border border-neutral-200 rounded-xl shadow-sm overflow-hidden">
<img className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&amp;q=80"/>
</div>
<div className="flex-1 bg-white p-2 border border-neutral-200 rounded-xl shadow-sm overflow-hidden">
<img className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&amp;q=80"/>
</div>
<div className="flex-1 bg-white p-2 border border-neutral-200 rounded-xl shadow-sm overflow-hidden relative group cursor-pointer">
<img className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors m-2 rounded-lg">
<span className="text-xs font-medium border px-3 py-1.5 rounded-md backdrop-blur-sm text-white border-white/50 shadow-sm">
                  View all photos
                </span>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-8 pb-8 border-b border-neutral-200">
<div className="flex-1">
<div className="text-3xl font-medium tracking-tight text-neutral-900 leading-none mb-3">
              ₹1.24 Cr
            </div>
<h1 className="text-base font-medium text-neutral-800 mb-4">
              Birla Trimaya Phase 2, Devanahalli, North Bangalore
            </h1>
<div className="flex flex-wrap gap-2">
<span className="bg-neutral-100 px-3 py-1 text-xs rounded-md text-neutral-600 font-medium">
                3 BHK
              </span>
<span className="bg-neutral-100 px-3 py-1 text-xs rounded-md text-neutral-600 font-medium">
                1,240 sq ft carpet
              </span>
<span className="bg-neutral-100 px-3 py-1 text-xs rounded-md text-neutral-600 font-medium">
                1,650 sq ft built-up
              </span>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 md:gap-4 flex-shrink-0">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors">
<iconify-icon icon="solar:share-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
<button className="hidden sm:block border h-10 px-4 rounded-lg text-sm font-medium transition-colors border-teal-200 text-teal-700 bg-teal-50 hover:bg-teal-100">
              Talk to Manest Expert
            </button>
<button className="hidden sm:block bg-orange-600 text-white h-10 px-5 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors shadow-sm">
              Schedule a Visit
            </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10 pb-24">

<div className="lg:col-span-8 space-y-10">

<section>
<h2 className="text-lg font-medium tracking-tight text-neutral-900 mb-4">
                About this home
              </h2>
<div className="text-sm text-neutral-600 leading-relaxed space-y-4">
<p>
                  Experience luxury living at Birla Trimaya Phase 2, an
                  exclusive residential enclave located in the rapidly growing
                  hub of Devanahalli, North Bangalore. Spread across lush green
                  landscapes, this community perfectly balances modern
                  architecture with nature-inspired living spaces.
                </p>
<p>
                  This thoughtfully designed 3 BHK apartment maximizes natural
                  light and cross-ventilation. It features premium vitrified
                  flooring, a spacious living area that extends into a wide
                  balcony overlooking the central courtyard, and generously
                  sized bedrooms with built-in wardrobe spaces.
                </p>
<p>
                  Residents will enjoy access to world-class amenities including
                  a 45,000 sq ft clubhouse, temperature-controlled swimming
                  pool, co-working spaces, and dedicated zones for sports and
                  wellness. Located just minutes away from major IT parks and
                  the airport, it offers unmatched convenience.
                </p>
</div>
</section>

<section>
<h2 className="text-lg font-medium tracking-tight text-neutral-900 mb-4">
                Home Facts
              </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Type</span>
<span className="text-sm font-medium text-neutral-900">
                    Apartment
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Built-up area</span>
<span className="text-sm font-medium text-neutral-900">
                    1,650 sq ft
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Carpet area</span>
<span className="text-sm font-medium text-neutral-900">
                    1,240 sq ft
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Bedrooms</span>
<span className="text-sm font-medium text-neutral-900">3</span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Bathrooms</span>
<span className="text-sm font-medium text-neutral-900">2</span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Balconies</span>
<span className="text-sm font-medium text-neutral-900">2</span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Parking</span>
<span className="text-sm font-medium text-neutral-900">
                    1 covered
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Furnishing</span>
<span className="text-sm font-medium text-neutral-900">
                    Semi-furnished
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Possession</span>
<span className="text-sm font-medium text-neutral-900">
                    Dec 2026 (Phase 2)
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Floor</span>
<span className="text-sm font-medium text-neutral-900">
                    8th of 18
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Facing</span>
<span className="text-sm font-medium text-neutral-900">
                    North-East
                  </span>
</div>
<div className="flex justify-between p-3.5 border border-neutral-200 rounded-lg bg-neutral-50/50">
<span className="text-xs text-neutral-500">Age</span>
<span className="text-sm font-medium text-neutral-900">
                    Under construction
                  </span>
</div>
</div>
</section>

<section>
<div className="flex items-center gap-2 mb-4">
<h2 className="text-lg font-medium tracking-tight text-neutral-900">
                  Location Intelligence
                </h2>
<span className="text-[10px] uppercase font-medium px-2 py-0.5 rounded text-neutral-500 bg-neutral-100 border border-neutral-200">
                  Manest Insights
                </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="border border-neutral-200 rounded-xl p-5 shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:diploma-linear" width="18"></iconify-icon>
                    Schools Proximity
                  </h3>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs pb-2 border-b border-neutral-100">
<span className="font-medium text-neutral-800">
                        Stonehill International School
                      </span>
<span className="text-neutral-500">2.8 km • 7 min</span>
</div>
<div className="flex justify-between items-center text-xs pb-2 border-b border-neutral-100">
<span className="font-medium text-neutral-800">
                        Aditi Mallya International School
                      </span>
<span className="text-neutral-500">5.1 km • 14 min</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="font-medium text-neutral-800">
                        Canadian International School
                      </span>
<span className="text-neutral-500">8.3 km • 22 min</span>
</div>
</div>
</div>

<div className="border border-neutral-200 rounded-xl p-5 shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:hospital-linear" width="18"></iconify-icon>
                    Hospitals Nearby
                  </h3>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs pb-2 border-b border-neutral-100">
<span className="font-medium text-neutral-800">
                        Columbia Asia Hebbal
                      </span>
<span className="text-neutral-500">6.2 km • 18 min</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="font-medium text-neutral-800">
                        KIAL Health Centre
                      </span>
<span className="text-neutral-500">4.1 km • 12 min</span>
</div>
</div>
</div>

<div className="border border-neutral-200 rounded-xl p-5 shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:case-linear" width="18"></iconify-icon>
                    Employment Hubs
                  </h3>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs pb-2 border-b border-neutral-100">
<span className="font-medium text-neutral-800">
                        KIADB Aerospace SEZ
                      </span>
<span className="text-neutral-500">2.9 km • 8 min</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="font-medium text-neutral-800">
                        Manyata Tech Park
                      </span>
<span className="text-neutral-500">7.5 km • 20 min</span>
</div>
</div>
</div>

<div className="flex flex-col gap-4">

<div className="border border-neutral-200 rounded-xl p-4 shadow-sm flex-1">
<h3 className="text-xs font-medium text-neutral-500 mb-1">
                      Air Quality
                    </h3>
<div className="flex justify-between items-end mb-2">
<span className="text-xl font-medium tracking-tight text-neutral-900 leading-none">
                        AQI 78
                      </span>
<span className="text-xs font-medium text-yellow-600">
                        Moderate
                      </span>
</div>
<div className="h-1.5 w-full rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-red-500 relative mt-3">
<div className="absolute w-2.5 h-2.5 bg-white border border-neutral-800 rounded-full top-1/2 -translate-y-1/2 shadow-sm" style={{left: '45%'}}></div>
</div>
<div className="flex justify-between text-[9px] text-neutral-400 mt-1.5 uppercase tracking-wider">
<span>Good</span>
<span>Mod</span>
<span>Unhealthy</span>
<span>Haz</span>
</div>
</div>

<div className="border border-neutral-200 rounded-xl p-4 shadow-sm flex-1">
<h3 className="text-xs font-medium text-neutral-500 mb-1">
                      Noise Level
                    </h3>
<div className="flex items-baseline gap-2 mb-1">
<span className="text-xl font-medium tracking-tight text-neutral-900 leading-none">
                        62 dB
                      </span>
<span className="text-xs font-medium text-neutral-800">
                        Moderate traffic noise
                      </span>
</div>
<p className="text-[11px] text-neutral-500">
                      Peak hours 8-10 AM, 6-8 PM
                    </p>
</div>
</div>

<div className="md:col-span-2 border border-neutral-200 rounded-xl p-5 shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-4">
                    Infrastructure Status
                  </h3>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="flex flex-col gap-1.5">
<span className="text-[11px] text-neutral-500 uppercase tracking-wider font-medium">
                        Water
                      </span>
<span className="text-xs font-medium px-2 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200 w-fit">
                        Borewell (BWSSB pending)
                      </span>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-[11px] text-neutral-500 uppercase tracking-wider font-medium">
                        Sewage
                      </span>
<span className="text-xs font-medium px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 w-fit">
                        Municipal connection
                      </span>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-[11px] text-neutral-500 uppercase tracking-wider font-medium">
                        Power
                      </span>
<span className="text-xs font-medium px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 w-fit">
                        24/7 backup
                      </span>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-[11px] text-neutral-500 uppercase tracking-wider font-medium">
                        Gas Pipeline
                      </span>
<span className="text-xs font-medium px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 w-fit">
                        Available
                      </span>
</div>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-lg font-medium tracking-tight text-neutral-900 mb-4">
                Legal &amp; Compliance
              </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs text-neutral-600">
                      RERA Registration
                    </span>
</div>
<span className="text-xs font-medium bg-emerald-500 text-white px-2 py-0.5 rounded">
                    Active ✓
                  </span>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:code-file-linear"></iconify-icon>
<span className="text-xs text-neutral-600">RERA Number</span>
</div>
<span className="text-xs font-medium text-neutral-900">
                    PRM/KA/RERA/1251/309
                  </span>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-xs text-neutral-600">Title Status</span>
</div>
<span className="text-xs font-medium bg-emerald-500 text-white px-2 py-0.5 rounded">
                    Clear ✓
                  </span>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:buildings-linear"></iconify-icon>
<span className="text-xs text-neutral-600">BBMP Approval</span>
</div>
<span className="text-xs font-medium bg-emerald-500 text-white px-2 py-0.5 rounded">
                    Obtained ✓
                  </span>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:checklist-linear"></iconify-icon>
<span className="text-xs text-neutral-600">OC Status</span>
</div>
<span className="text-xs font-medium bg-amber-500 text-white px-2 py-0.5 rounded">
                    Phase 1 only ⚠️
                  </span>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:file-check-linear"></iconify-icon>
<span className="text-xs text-neutral-600">Khata Type</span>
</div>
<span className="text-xs font-medium bg-emerald-500 text-white px-2 py-0.5 rounded">
                    A-Khata ✓
                  </span>
</div>
</div>
</section>

<section>
<h2 className="text-lg font-medium tracking-tight text-neutral-900 mb-4">
                Things to Know
              </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="border border-neutral-200 border-l-[3px] border-l-orange-500 bg-orange-50/30 p-4 rounded-r-lg shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-1 flex items-center gap-1.5">
                    🚩 Metro Dependency Risk
                  </h3>
<p className="text-xs text-neutral-600 leading-relaxed">
                    No operational metro within 25 min. Blue Line Devanahalli
                    extension expected 2027 — BMRCL has a history of delays.
                  </p>
</div>
<div className="border border-neutral-200 border-l-[3px] border-l-amber-400 bg-amber-50/30 p-4 rounded-r-lg shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-1 flex items-center gap-1.5">
                    ⚠️ Bellary Road Congestion
                  </h3>
<p className="text-xs text-neutral-600 leading-relaxed">
                    Peak-hour travel time Devanahalli → Hebbal has grown from 22
                    to 28 min over 18 months.
                  </p>
</div>
<div className="border border-neutral-200 border-l-[3px] border-l-amber-400 bg-amber-50/30 p-4 rounded-r-lg shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-1 flex items-center gap-1.5">
                    ⚠️ BWSSB Connection Pending
                  </h3>
<p className="text-xs text-neutral-600 leading-relaxed">
                    Currently on borewell. Confirm backup water plan with
                    builder before booking.
                  </p>
</div>
<div className="border border-neutral-200 border-l-[3px] border-l-amber-400 bg-amber-50/30 p-4 rounded-r-lg shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-1 flex items-center gap-1.5">
                    ⚠️ Phase 2 OC Not Received
                  </h3>
<p className="text-xs text-neutral-600 leading-relaxed">
                    Verify exact tower and possession timeline on RERA portal —
                    do not rely on verbal commitments.
                  </p>
</div>
</div>
</section>

<section>
<h2 className="text-lg font-medium tracking-tight text-neutral-900 mb-4">
                Available Configurations
              </h2>
<div className="border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse bg-white">
<thead>
<tr className="border-b border-neutral-200 bg-neutral-50 text-xs text-neutral-500 uppercase tracking-wider">
<th className="py-3 px-4 font-medium">Configuration</th>
<th className="py-3 px-4 font-medium">Carpet Area</th>
<th className="py-3 px-4 font-medium hidden sm:table-cell">
                        Built-up Area
                      </th>
<th className="py-3 px-4 font-medium">Price Range</th>
<th className="py-3 px-4 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="text-sm text-neutral-800">
<tr className="border-b border-neutral-100">
<td className="py-3.5 px-4 font-medium">2 BHK</td>
<td className="py-3.5 px-4">820 sq ft</td>
<td className="py-3.5 px-4 hidden sm:table-cell">
                        1,090 sq ft
                      </td>
<td className="py-3.5 px-4 font-medium">₹89 – 96 L</td>
<td className="py-3.5 px-4 text-right">
<span className="bg-emerald-500 text-white px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide">
                          Available
                        </span>
</td>
</tr>
<tr className="border-b border-neutral-100">
<td className="py-3.5 px-4 font-medium">2.5 BHK</td>
<td className="py-3.5 px-4">1,050 sq ft</td>
<td className="py-3.5 px-4 hidden sm:table-cell">
                        1,380 sq ft
                      </td>
<td className="py-3.5 px-4 font-medium">₹1.10 – 1.18 Cr</td>
<td className="py-3.5 px-4 text-right">
<span className="bg-emerald-500 text-white px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide">
                          Available
                        </span>
</td>
</tr>
<tr className="border-b border-neutral-100">
<td className="py-3.5 px-4 font-medium">3 BHK</td>
<td className="py-3.5 px-4">1,240 sq ft</td>
<td className="py-3.5 px-4 hidden sm:table-cell">
                        1,650 sq ft
                      </td>
<td className="py-3.5 px-4 font-medium">₹1.24 – 1.36 Cr</td>
<td className="py-3.5 px-4 text-right">
<span className="bg-emerald-500 text-white px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide">
                          Available
                        </span>
</td>
</tr>
<tr>
<td className="py-3.5 px-4 font-medium">3 BHK Premium</td>
<td className="py-3.5 px-4">1,420 sq ft</td>
<td className="py-3.5 px-4 hidden sm:table-cell">
                        1,890 sq ft
                      </td>
<td className="py-3.5 px-4 font-medium">₹1.45 – 1.58 Cr</td>
<td className="py-3.5 px-4 text-right">
<span className="bg-amber-500 text-white px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide">
                          Limited
                        </span>
</td>
</tr>
</tbody>
</table>
</div>
<p className="text-xs text-neutral-500 mt-2">
                Prices exclude GST, registration, and stamp duty. All-in cost
                adds 8–10%.
              </p>
</section>

<section>
<h2 className="text-lg font-medium tracking-tight text-neutral-900 mb-4">
                About Birla Estates Pvt. Ltd.
              </h2>
<div className="border border-neutral-200 rounded-xl p-5 shadow-sm">
<div className="flex items-center justify-between pb-5 border-b border-neutral-100 mb-5">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full text-white flex items-center justify-center text-xl font-medium tracking-tight bg-orange-600">
                      BE
                    </div>
<div>
<h3 className="text-base font-medium text-neutral-900">
                        Birla Estates Pvt. Ltd.
                      </h3>
<p className="text-xs text-neutral-500">
                        CK Birla Group · Est. 2016
                      </p>
</div>
</div>
<div className="text-right">
<div className="text-3xl font-medium tracking-tight text-teal-600">
                      96%
                    </div>
<div className="text-xs font-medium text-neutral-500">
                      Delivery rate
                    </div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center justify-between bg-neutral-50 rounded-lg p-3 border border-neutral-100">
<span className="text-xs text-neutral-600">
                      Past projects delivered
                    </span>
<span className="text-xs font-medium text-neutral-900 flex items-center gap-1.5">
                      8 projects
                      <span className="bg-emerald-500 text-white px-1.5 py-0.5 rounded text-[10px]">
                        On track
                      </span>
</span>
</div>
<div className="flex items-center justify-between bg-neutral-50 rounded-lg p-3 border border-neutral-100">
<span className="text-xs text-neutral-600">
                      RERA complaints
                    </span>
<span className="text-xs font-medium text-neutral-900 flex items-center gap-1.5">
                      0 active
                      <span className="bg-emerald-500 text-white px-1.5 py-0.5 rounded text-[10px]">
                        Clean
                      </span>
</span>
</div>
<div className="flex items-center justify-between bg-neutral-50 rounded-lg p-3 border border-neutral-100">
<span className="text-xs text-neutral-600">
                      Consumer forum cases
                    </span>
<span className="text-xs font-medium text-neutral-900 flex items-center gap-1.5">
                      None on record
                      <span className="bg-emerald-500 text-white px-1.5 py-0.5 rounded text-[10px]">
                        Clean
                      </span>
</span>
</div>
<div className="flex items-center justify-between bg-neutral-50 rounded-lg p-3 border border-neutral-100">
<span className="text-xs text-neutral-600">
                      Financial standing
                    </span>
<span className="text-xs font-medium text-neutral-900 flex items-center gap-1.5">
                      Listed group
                      <span className="bg-emerald-500 text-white px-1.5 py-0.5 rounded text-[10px]">
                        Strong
                      </span>
</span>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-lg font-medium tracking-tight text-neutral-900 mb-4">
                Neighborhood
              </h2>
<div className="border border-neutral-200 rounded-xl bg-white shadow-sm overflow-hidden p-2">
<div className="w-full h-[300px] rounded-lg relative z-10 border border-neutral-200 outline-none" id="pdp-map">

</div>
<div className="p-3 pb-1 flex flex-wrap gap-4 items-center justify-center border-t border-neutral-100 mt-2">
<div className="flex items-center gap-1.5 text-xs text-neutral-600">
<span className="w-3 h-3 rounded-full bg-teal-600 border border-white shadow-sm"></span>
                    Property
                  </div>
<div className="flex items-center gap-1.5 text-xs text-neutral-600">
<span className="w-3 h-3 rounded-full bg-blue-900 border border-white shadow-sm"></span>
                    Schools
                  </div>
<div className="flex items-center gap-1.5 text-xs text-neutral-600">
<span className="w-3 h-3 rounded-full bg-red-500 border border-white shadow-sm"></span>
                    Hospitals
                  </div>
<div className="flex items-center gap-1.5 text-xs text-neutral-600">
<span className="w-3 h-3 rounded-full bg-amber-500 border border-white shadow-sm"></span>
                    Employment
                  </div>
</div>
</div>
</section>
</div>

<div className="lg:col-span-4 hidden lg:block">
<div className="sticky top-24 space-y-6">

<div className="border border-neutral-200 rounded-xl p-6 shadow-sm bg-white">
<h3 className="text-base font-medium text-neutral-900 mb-5">
                  Contact Manest
                </h3>
<form className="space-y-4">
<div>
<input className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-neutral-900 transition-colors bg-neutral-50/50" placeholder="Name" type="text"/>
</div>
<div>
<input className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-neutral-900 transition-colors bg-neutral-50/50" placeholder="Email" type="email"/>
</div>
<div>
<input className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-neutral-900 transition-colors bg-neutral-50/50" placeholder="Phone" type="tel"/>
</div>
<div>
<textarea className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-neutral-900 transition-colors bg-neutral-50/50 resize-none" rows="3">
I'm interested in Birla Trimaya Phase 2...</textarea>
</div>
<button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 rounded-lg text-sm transition-colors shadow-sm" type="button">
                    Schedule a Visit
                  </button>
<p className="text-[10px] text-center text-neutral-500 mt-3">
                    By submitting, you agree to Manest's Terms of Service
                  </p>
</form>
</div>

<div className="border border-neutral-200 rounded-xl p-5 bg-white shadow-sm">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 mb-4">
                  Why We Recommended This
                </h3>
<div className="flex items-center gap-4 mb-5">
<div className="relative w-20 h-20 flex-shrink-0">
<svg className="w-20 h-20 transform -rotate-90">
<circle cx="40" cy="40" fill="none" r="36" stroke="#f5f5f5" strokeWidth="6"></circle>

<circle cx="40" cy="40" fill="none" r="36" stroke="#0d9488" stroke-dasharray="226" stroke-dashoffset="12" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-lg font-medium text-teal-600">
                      95%
                    </div>
</div>
<div className="text-sm font-medium text-neutral-900">
                    Excellent Match Score
                  </div>
</div>
<ul className="space-y-3 text-sm text-neutral-600">
<li className="flex items-start gap-2.5">
<iconify-icon className="text-teal-600 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
<span>3 BHK configuration</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-teal-600 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
<span>Good schools within 15 min</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-teal-600 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
<span>Near employment hubs</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-teal-600 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
<span>Clean RERA record</span>
</li>
</ul>
</div>

<div className="border border-neutral-200 rounded-xl p-5 bg-white shadow-sm">
<h3 className="text-sm font-medium tracking-tight text-neutral-900 mb-4">
                  Monthly Payment Estimate
                </h3>
<div className="space-y-3 mb-5">
<div className="flex justify-between items-center bg-neutral-50 p-2.5 rounded border border-neutral-100">
<span className="text-xs text-neutral-500">Loan Amount</span>
<span className="text-sm font-medium text-neutral-900">
                      ₹1.24 Cr
                    </span>
</div>
<div className="flex justify-between items-center bg-neutral-50 p-2.5 rounded border border-neutral-100">
<span className="text-xs text-neutral-500">Interest Rate</span>
<span className="text-sm font-medium text-neutral-900">
                      8.5%
                    </span>
</div>
<div className="flex justify-between items-center bg-neutral-50 p-2.5 rounded border border-neutral-100">
<span className="text-xs text-neutral-500">Tenure</span>
<span className="text-sm font-medium text-neutral-900">
                      20 Years
                    </span>
</div>
</div>
<div className="border-t border-neutral-100 pt-4 space-y-1">
<div className="flex justify-between items-baseline">
<span className="text-xs font-medium text-neutral-900">
                      Monthly EMI
                    </span>
<span className="text-lg font-medium text-neutral-900">
                      ₹1,07,500
                    </span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-neutral-500">Total Interest</span>
<span className="text-xs text-neutral-600">₹1.32 Cr</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-neutral-500">Total Payment</span>
<span className="text-xs text-neutral-600">₹2.56 Cr</span>
</div>
</div>
<a className="block text-center text-xs font-medium text-neutral-500 hover:text-neutral-900 mt-4 underline decoration-neutral-300 underline-offset-4" href="#">
                  View full amortization schedule
                </a>
</div>
</div>
</div>
</div>
</div>

<div className="lg:hidden sticky bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 px-6 flex items-center justify-between z-40 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
<div>
<div className="text-xl font-medium tracking-tight text-neutral-900">
            ₹1.24 Cr
          </div>
<div className="text-xs font-medium text-neutral-500">EMI: ₹1.07L/mo</div>
</div>
<button className="rounded-lg px-5 py-2.5 text-sm font-medium bg-orange-600 hover:bg-orange-700 text-white shadow-sm transition-colors">
          Schedule Visit
        </button>
</div>
</div>


    </>
  );
}
