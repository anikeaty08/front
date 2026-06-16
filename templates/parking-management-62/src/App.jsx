import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const { useState, useEffect } = React;

        // --- Utility Components ---

        const Icon = ({ name, size = "24", className = "" }) => (
            <iconify-icon 
                icon={`solar:${name}-linear`} 
                width={size} 
                height={size} 
                class={`inline-flex items-center justify-center ${className}`}
                style={{ strokeWidth: "1.5px" }}
            ></iconify-icon>
        );

        const Card = ({ children, className = "", onClick }) => (
            <div 
                onClick={onClick}
                className={`rounded-3xl border border-white/5 bg-[#111111] transition-all duration-300 ${onClick ? 'active:scale-[0.98] cursor-pointer hover:bg-[#1a1a1a]' : ''} ${className}`}
            >
                {children}
            </div>
        );

        const TopNav = ({ title, onBack }) => (
            <div className="flex items-center justify-between pt-12 pb-4 px-6 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-xl z-20 border-b border-white/5">
                <button 
                    onClick={onBack} 
                    className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white flex items-center justify-center"
                >
                    <Icon name="alt-arrow-left" size="24" />
                </button>
                <h1 className="text-xl tracking-tight font-normal text-white">{title}</h1>
                <div className="w-10"></div>
            </div>
        );

        // --- Feature Components ---

        const ParkingReminder = ({ session, onExtend }) => {
            const [timeLeft, setTimeLeft] = useState(0);
            const [isExpired, setIsExpired] = useState(false);
            const totalDuration = session ? session.totalDuration : 3600000;

            useEffect(() => {
                if (!session) return;
                
                const calculateTime = () => {
                    const now = Date.now();
                    const diff = session.endTime - now;
                    if (diff <= 0) {
                        setTimeLeft(0);
                        setIsExpired(true);
                    } else {
                        setTimeLeft(diff);
                        setIsExpired(false);
                    }
                };

                calculateTime();
                const interval = setInterval(calculateTime, 1000);
                return () => clearInterval(interval);
            }, [session]);

            if (!session) {
                return (
                    <Card className="p-5 mt-6 border-white/5">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-normal text-white tracking-tight mb-1">Parking Status</h2>
                                <p className="text-sm text-slate-500">No active parking sessions</p>
                            </div>
                            <div className="h-14 w-14 rounded-full border border-white/5 bg-white/5 flex items-center justify-center">
                                <Icon name="forbidden-circle" size="24" className="text-slate-500" />
                            </div>
                        </div>
                    </Card>
                );
            }

            const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
            const seconds = Math.floor((timeLeft / 1000) % 60);
            const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            const progress = (timeLeft / totalDuration) * 100;
            const radius = 36;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (progress / 100) * circumference;

            const isWarning = timeLeft > 0 && timeLeft <= 300000;
            const primaryColor = isExpired ? 'text-red-500' : isWarning ? 'text-orange-500' : 'text-blue-500';

            return (
                <Card className={`p-6 mt-6 shadow-[0_0_40px_-15px_rgba(59,130,246,0.15)] border-white/10 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                    <div className="flex items-center justify-between mb-6 relative z-10">
                        <div>
                            <h2 className={`text-lg font-normal tracking-tight mb-1 ${isExpired ? 'text-red-400' : 'text-white'}`}>
                                {isExpired ? 'Parking Expired' : 'Active Session'}
                            </h2>
                            <p className="text-sm text-slate-400">
                                {isExpired ? 'Please renew immediately' : 'Time remaining'}
                            </p>
                        </div>
                        
                        <div className="relative flex items-center justify-center">
                            <svg className="w-20 h-20 transform -rotate-90">
                                <circle 
                                    cx="40" cy="40" r={radius} 
                                    stroke="currentColor" strokeWidth="4" fill="transparent" 
                                    className="text-white/5" 
                                />
                                <circle 
                                    cx="40" cy="40" r={radius} 
                                    stroke="currentColor" strokeWidth="4" fill="transparent" 
                                    strokeDasharray={circumference} 
                                    strokeDashoffset={isExpired ? circumference : strokeDashoffset} 
                                    className={`${primaryColor} transition-all duration-1000 ease-linear`}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute flex flex-col items-center justify-center">
                                <span className="text-sm font-normal text-white tracking-tight">{isExpired ? '00:00' : `${hours}:${minutes.toString().padStart(2, '0')}`}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-black/40 border border-white/5 rounded-2xl p-4 relative z-10">
                        <span className={`text-xl font-normal tracking-tight tabular-nums ${primaryColor}`}>
                            {timeString}
                        </span>
                        <button 
                            onClick={onExtend}
                            className={`px-5 py-2 rounded-xl text-sm font-normal transition-colors ${
                                isExpired ? 'bg-red-500/20 text-red-400 border border-red-500/20 hover:bg-red-500/30' : 'bg-white/10 text-white border border-white/5 hover:bg-white/20'
                            }`}
                        >
                            {isExpired ? 'Renew Now' : 'Extend'}
                        </button>
                    </div>
                </Card>
            );
        };

        // --- New Hub Screen ---

        const HubScreen = ({ onNavigate }) => (
            <div className="px-6 py-12 animate-in fade-in zoom-in-95 duration-500">
                <div className="mb-12 text-center">
                    <h1 className="text-3xl tracking-tight font-normal text-white mb-2">Hub</h1>
                    <p className="text-sm text-slate-500 font-light">Select your workspace</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <Card 
                        onClick={() => onNavigate('dashboard')}
                        className="p-8 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                        <div className="flex items-center gap-6 relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                <Icon name="steering" size="32" />
                            </div>
                            <div>
                                <h2 className="text-xl tracking-tight font-normal text-white mb-1">Auto</h2>
                                <p className="text-sm text-slate-400 font-light">Parking, vehicles and road services</p>
                            </div>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                <Icon name="alt-arrow-right" size="20" className="text-slate-500" />
                            </div>
                        </div>
                    </Card>

                    <Card 
                        onClick={() => onNavigate('ally')}
                        className="p-8 group relative overflow-hidden opacity-80 hover:opacity-100"
                    >
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mb-16 transition-transform group-hover:scale-110"></div>
                        <div className="flex items-center gap-6 relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                <Icon name="paws" size="32" />
                            </div>
                            <div>
                                <h2 className="text-xl tracking-tight font-normal text-white mb-1">Ally</h2>
                                <p className="text-sm text-slate-400 font-light">Pet profiles, health and care</p>
                            </div>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                <Icon name="alt-arrow-right" size="20" className="text-slate-500" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );

        const AllyPlaceholder = ({ onBack }) => (
            <div className="min-h-screen bg-[#0a0a0a] animate-in slide-in-from-bottom-8 duration-300">
                <TopNav title="Ally" onBack={onBack} />
                <div className="px-6 pt-20 text-center">
                    <div className="w-20 h-20 bg-purple-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <Icon name="paws" size="40" className="text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-normal text-white tracking-tight mb-2">Ally Workspace</h2>
                    <p className="text-slate-500 font-light max-w-[240px] mx-auto">Pet management features are coming soon to your workspace.</p>
                </div>
            </div>
        );

        // --- Screens ---

        const Dashboard = ({ onNavigate, vehicle, activeSession }) => (
            <div className="px-6 pb-12 pt-12 animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-8">
                    <button 
                        onClick={() => onNavigate('hub')}
                        className="p-2 -ml-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-slate-400 hover:text-white flex items-center justify-center"
                    >
                        <Icon name="widget-6" size="22" />
                    </button>
                    <button className="p-2 -mr-2 rounded-xl hover:bg-white/5 transition-colors relative text-slate-400 hover:text-white">
                        <Icon name="bell" size="24" />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-500 rounded-full border border-[#0a0a0a]"></span>
                    </button>
                </div>

                <div className="mb-8">
                    <p className="text-base text-slate-400 mb-1 font-light">Hi, Jason</p>
                    <h1 className="text-3xl tracking-tight font-normal text-white">Stay connected today</h1>
                </div>

                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Icon name="magnifer" size="20" className="text-slate-500" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search services" 
                        className="w-full bg-[#111111] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-base text-white placeholder-slate-500 focus:outline-none focus:border-white/20 transition-all font-light"
                    />
                </div>

                <ParkingReminder session={activeSession} onExtend={() => onNavigate('parkingService')} />

                <div className="mt-8 mb-6">
                    <h3 className="text-xl tracking-tight font-normal text-white mb-4">Services</h3>
                    <div className="grid grid-cols-2 gap-4">
                        
                        <Card 
                            onClick={() => onNavigate('parkingService')}
                            className="p-5 flex flex-col justify-between row-span-2 min-h-[240px] shadow-[0_0_30px_-15px_rgba(124,58,237,0.1)] group relative overflow-hidden border-white/5 hover:border-white/10"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 transition-colors group-hover:bg-purple-500/20">
                                    <Icon name="map-point" size="22" className="text-purple-400" />
                                </div>
                                <h3 className="text-xl tracking-tight font-normal text-white mb-1">Parking</h3>
                                <p className="text-sm text-slate-400 leading-relaxed font-light">Book & manage<br/>your parking</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/5">
                                <span className="text-sm font-normal text-white flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                                    Book now <Icon name="alt-arrow-right" size="16" />
                                </span>
                            </div>
                        </Card>

                        <Card 
                            onClick={() => onNavigate('myCar')}
                            className="p-5 flex flex-col justify-between shadow-[0_0_30px_-15px_rgba(59,130,246,0.1)] group relative overflow-hidden border-white/5 hover:border-white/10"
                        >
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl -mr-5 -mb-5 pointer-events-none"></div>
                            <div>
                                <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3 transition-colors group-hover:bg-blue-500/20">
                                    <Icon name="key-minimalistic" size="18" className="text-blue-400" />
                                </div>
                                <h3 className="text-base font-normal text-white mb-1">My Car</h3>
                                <p className="text-xs text-slate-400 truncate font-light">
                                    {vehicle ? vehicle.plate : 'Add vehicle'}
                                </p>
                            </div>
                        </Card>

                        <Card 
                            className="p-5 flex flex-col justify-between shadow-[0_0_30px_-15px_rgba(16,185,129,0.1)] group relative overflow-hidden border-white/5 hover:border-white/10"
                        >
                            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                            <div>
                                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3 transition-colors group-hover:bg-emerald-500/20">
                                    <Icon name="history" size="18" className="text-emerald-400" />
                                </div>
                                <h3 className="text-base font-normal text-white mb-1">Utilities</h3>
                                <p className="text-xs text-slate-400 font-light">History</p>
                            </div>
                        </Card>

                    </div>
                </div>

                <div className="mt-8 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl tracking-tight font-normal text-white">AeroTags</h3>
                        <button className="text-sm font-normal text-blue-400 hover:text-blue-300 transition-colors">View All</button>
                    </div>
                    
                    <Card className="p-4 flex items-center justify-between group">
                        <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center border border-white/5 group-hover:border-blue-500/30 transition-colors">
                                <Icon name="tag" size="20" className="text-slate-300 group-hover:text-blue-400 transition-colors" />
                            </div>
                            <div>
                                <div className="text-base font-normal text-white mb-0.5">DXB-7829</div>
                                <div className="text-xs text-slate-500 font-light">Linked to {vehicle ? vehicle.plate : 'A 12345'}</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-base font-normal text-white mb-0.5 tracking-tight">120.50 AED</div>
                            <div className="text-xs text-emerald-400 flex items-center justify-end gap-1.5 font-light">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span> Active
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );

        const MyCarScreen = ({ onBack, onSave, currentVehicle }) => {
            const [formData, setFormData] = useState(currentVehicle || {
                plate: '',
                emirate: 'Dubai',
                type: 'Private',
                brand: '',
                model: '',
                isDefault: true
            });

            const emirates = ['Dubai', 'Abu Dhabi', 'Sharjah'];
            const types = ['Private', 'Commercial', 'Motorcycle'];

            const handleSubmit = (e) => {
                e.preventDefault();
                if(formData.plate) onSave(formData);
            };

            return (
                <div className="min-h-screen bg-[#0a0a0a] animate-in slide-in-from-right-8 duration-300">
                    <TopNav title="Vehicle Details" onBack={onBack} />
                    <div className="px-6 pb-12 pt-4">
                        <Card className="p-6 border-white/5 bg-[#111111]">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-normal text-slate-400 mb-3">Select Emirate</label>
                                    <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                                        {emirates.map(em => (
                                            <button
                                                key={em}
                                                type="button"
                                                onClick={() => setFormData({...formData, emirate: em})}
                                                className={`whitespace-nowrap px-5 py-3 rounded-2xl text-sm font-normal transition-all border ${
                                                    formData.emirate === em 
                                                    ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' 
                                                    : 'bg-transparent text-slate-400 border-white/5 hover:border-white/10 hover:text-slate-300'
                                                }`}
                                            >
                                                {em}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4 pt-2">
                                    <div>
                                        <label className="block text-sm font-normal text-slate-400 mb-2">Plate Number</label>
                                        <input 
                                            type="text" 
                                            required
                                            value={formData.plate}
                                            onChange={e => setFormData({...formData, plate: e.target.value.toUpperCase()})}
                                            placeholder="e.g. A 12345" 
                                            className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl py-4 px-4 text-base text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all uppercase font-light"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-normal text-slate-400 mb-2">Vehicle Type</label>
                                        <div className="relative">
                                            <select 
                                                value={formData.type}
                                                onChange={e => setFormData({...formData, type: e.target.value})}
                                                className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl py-4 px-4 pr-10 text-base text-white appearance-none focus:outline-none focus:border-blue-500/50 transition-all font-light"
                                            >
                                                {types.map(t => <option key={t} value={t} className="bg-[#111]">{t}</option>)}
                                            </select>
                                            <Icon name="alt-arrow-down" size="20" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-normal text-slate-400 mb-2">Brand</label>
                                            <input 
                                                type="text" 
                                                value={formData.brand}
                                                onChange={e => setFormData({...formData, brand: e.target.value})}
                                                placeholder="Toyota" 
                                                className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl py-4 px-4 text-base text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all font-light"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-normal text-slate-400 mb-2">Model</label>
                                            <input 
                                                type="text" 
                                                value={formData.model}
                                                onChange={e => setFormData({...formData, model: e.target.value})}
                                                placeholder="Camry" 
                                                className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl py-4 px-4 text-base text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all font-light"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-4 border-t border-white/5 mt-6">
                                    <div>
                                        <h4 className="text-base text-white font-normal">Set as Default</h4>
                                        <p className="text-sm text-slate-500 font-light">Use this vehicle automatically</p>
                                    </div>
                                    <button 
                                        type="button"
                                        onClick={() => setFormData({...formData, isDefault: !formData.isDefault})}
                                        className={`w-14 h-8 rounded-full transition-colors relative flex items-center px-1 ${formData.isDefault ? 'bg-blue-500' : 'bg-[#222]'}`}
                                    >
                                        <div className={`w-6 h-6 bg-white rounded-full transition-transform transform ${formData.isDefault ? 'translate-x-6' : 'translate-x-0'}`}></div>
                                    </button>
                                </div>
                                <button type="submit" className="w-full bg-white text-black font-normal text-base rounded-xl py-4 mt-4 hover:bg-slate-200 transition-colors active:scale-[0.98]">Save Vehicle</button>
                            </form>
                        </Card>
                    </div>
                </div>
            );
        };

        const ParkingScreen = ({ onBack, onStartSession, vehicle }) => {
            const [zone, setZone] = useState('');
            const [duration, setDuration] = useState(1);
            const [emirate, setEmirate] = useState(vehicle ? vehicle.emirate : 'Dubai');
            const ratePerHour = 2;
            const totalCost = duration * ratePerHour;

            const handleProceed = () => {
                if(!zone) return;
                const endTime = Date.now() + (duration * 60 * 60 * 1000);
                onStartSession({ zone, durationStr: `${duration}h`, endTime, totalDuration: duration * 60 * 60 * 1000, cost: totalCost });
            };

            const calculateValidUntil = () => {
                const date = new Date(Date.now() + duration * 60 * 60 * 1000);
                return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            };

            return (
                <div className="min-h-screen bg-[#0a0a0a] animate-in slide-in-from-right-8 duration-300 flex flex-col">
                    <TopNav title="Parking Service" onBack={onBack} />
                    <div className="px-6 flex-1 flex flex-col pt-4 pb-12">
                        <Card className="p-5 mb-6 border-white/5 bg-[#111111]">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-normal text-slate-400">Selected Vehicle</span>
                                <button className="text-sm text-blue-400 font-normal">Change</button>
                            </div>
                            <div className="flex items-center gap-4 bg-[#0a0a0a] p-4 rounded-2xl border border-white/5">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                                    <Icon name="key-minimalistic" size="24" />
                                </div>
                                <div>
                                    <div className="text-lg font-normal text-white tracking-tight mb-0.5">{vehicle ? vehicle.plate : 'No vehicle selected'}</div>
                                    <div className="text-sm text-slate-500 font-light">{vehicle ? `${vehicle.brand} ${vehicle.model}` : 'Add a vehicle first'}</div>
                                </div>
                            </div>
                        </Card>
                        <div className="space-y-6 flex-1">
                            <div>
                                <label className="block text-sm font-normal text-slate-400 mb-3">Location</label>
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    {['Dubai', 'Abu Dhabi', 'Sharjah'].map(em => (
                                        <button key={em} onClick={() => setEmirate(em)} className={`py-3 rounded-2xl text-sm font-normal transition-all border ${emirate === em ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' : 'bg-[#111] text-slate-400 border-white/5 hover:border-white/10 hover:text-slate-300'}`}>{em.split(' ')[0]}</button>
                                    ))}
                                </div>
                                <div className="relative">
                                    <input type="text" value={zone} onChange={e => setZone(e.target.value.toUpperCase())} placeholder="Enter Zone Number (e.g. 315A)" className="w-full bg-[#111] border border-white/5 rounded-xl py-4 pl-4 pr-24 text-base text-white focus:outline-none focus:border-blue-500/30 transition-all uppercase font-light" />
                                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#222] text-slate-300 text-sm font-normal px-4 py-2 rounded-lg border border-white/5">Detect</button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-normal text-slate-400 mb-3">Duration</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {[1, 2, 4, 8].map(h => (
                                        <button key={h} onClick={() => setDuration(h)} className={`py-3 rounded-2xl text-base font-normal transition-all border ${duration === h ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' : 'bg-[#111] text-slate-400 border-white/5 hover:border-white/10'}`}>{h === 8 ? 'Custom' : `${h}h`}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 sticky bottom-6 left-0 right-0 z-20">
                            <div className="bg-[#111111]/90 border border-white/5 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
                                <div className="flex justify-between items-end mb-6 border-b border-white/5 pb-6">
                                    <div><p className="text-sm text-slate-400 mb-1 font-light">Total Cost</p><div className="flex items-baseline gap-1"><span className="text-3xl tracking-tight font-normal text-white">{totalCost}</span><span className="text-base text-slate-500 font-light">AED</span></div></div>
                                    <div className="text-right"><p className="text-sm text-slate-400 mb-1 font-light">Valid Until</p><span className="text-lg font-normal text-white tracking-tight">{calculateValidUntil()}</span></div>
                                </div>
                                <button onClick={handleProceed} disabled={!zone || !vehicle} className="w-full bg-white text-black font-normal text-base rounded-xl py-4 flex items-center justify-center gap-2 disabled:opacity-30">
                                    <Icon name="chat-round-line" size="20" />Proceed to SMS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        // --- Main App ---

        const App = () => {
            const [currentView, setCurrentView] = useState('dashboard');
            const [vehicle, setVehicle] = useState(null);
            const [activeSession, setActiveSession] = useState(null);

            useEffect(() => {
                const savedCar = localStorage.getItem('app_vehicle');
                if (savedCar) setVehicle(JSON.parse(savedCar));
                const savedSession = localStorage.getItem('app_session');
                if (savedSession) {
                    const session = JSON.parse(savedSession);
                    if (session.endTime > Date.now()) setActiveSession(session);
                }
            }, []);

            const handleSaveVehicle = (data) => {
                setVehicle(data);
                localStorage.setItem('app_vehicle', JSON.stringify(data));
                setCurrentView('dashboard');
            };

            const handleStartSession = (sessionData) => {
                setActiveSession(sessionData);
                localStorage.setItem('app_session', JSON.stringify(sessionData));
                setCurrentView('dashboard');
            };

            return (
                <div className="min-h-screen relative max-w-md mx-auto overflow-hidden shadow-2xl bg-[#0a0a0a] text-slate-300">
                    {currentView === 'hub' && (
                        <HubScreen onNavigate={setCurrentView} />
                    )}
                    {currentView === 'dashboard' && (
                        <Dashboard 
                            onNavigate={setCurrentView} 
                            vehicle={vehicle} 
                            activeSession={activeSession}
                        />
                    )}
                    {currentView === 'ally' && (
                        <AllyPlaceholder onBack={() => setCurrentView('hub')} />
                    )}
                    {currentView === 'myCar' && (
                        <MyCarScreen 
                            onBack={() => setCurrentView('dashboard')} 
                            onSave={handleSaveVehicle}
                            currentVehicle={vehicle}
                        />
                    )}
                    {currentView === 'parkingService' && (
                        <ParkingScreen 
                            onBack={() => setCurrentView('dashboard')} 
                            onStartSession={handleStartSession}
                            vehicle={vehicle}
                        />
                    )}
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="root"></div>

<style>
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>

    </>
  );
}
