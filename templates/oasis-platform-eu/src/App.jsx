import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
app: {
bg: '#F8FAFC', // Slate 50
darkBg: '#09090B', // Zinc 950
card: '#FFFFFF',
darkCard: '#18181B', // Zinc 900
border: '#E2E8F0', // Slate 200
darkBorder: '#27272A', // Zinc 800
text: '#0F172A', // Slate 900
darkText: '#FAFAFA', // Zinc 50
subtext: '#64748B', // Slate 500
darkSubtext: '#A1A1AA', // Zinc 400
hover: '#F1F5F9', // Slate 100
darkHover: '#27272A', // Zinc 800
}
}
}
}
}



        const { useState, useEffect } = React;

        const CONFIG = {
            unified: { 
                name: 'Everything', 
                icon: 'solar:infinity-bold', 
                theme: 'slate', 
                text: 'text-slate-600 dark:text-slate-400',
                bg: 'bg-slate-500',
                border: 'border-slate-200 dark:border-slate-800'
            },
            pro: { 
                name: 'Professional', 
                icon: 'solar:case-bold', 
                theme: 'sky',
                text: 'text-sky-600 dark:text-sky-400',
                bg: 'bg-sky-500',
                border: 'border-sky-200 dark:border-sky-800',
                softBg: 'bg-sky-50 dark:bg-sky-950/30',
                activeBorder: 'border-sky-500'
            },
            social: { 
                name: 'Friends', 
                icon: 'solar:users-group-rounded-bold', 
                theme: 'emerald',
                text: 'text-emerald-600 dark:text-emerald-400',
                bg: 'bg-emerald-500',
                border: 'border-emerald-200 dark:border-emerald-800',
                softBg: 'bg-emerald-50 dark:bg-emerald-950/30',
                activeBorder: 'border-emerald-500'
            },
            local: { 
                name: 'Local', 
                icon: 'solar:map-point-bold', 
                theme: 'orange',
                text: 'text-orange-600 dark:text-orange-400',
                bg: 'bg-orange-500',
                border: 'border-orange-200 dark:border-orange-800',
                softBg: 'bg-orange-50 dark:bg-orange-950/30',
                activeBorder: 'border-orange-500'
            },
            thoughts: { 
                name: 'Thoughts', 
                icon: 'solar:pen-new-square-bold', 
                theme: 'amber',
                text: 'text-amber-600 dark:text-amber-400',
                bg: 'bg-amber-500',
                border: 'border-amber-200 dark:border-amber-800',
                softBg: 'bg-amber-50 dark:bg-amber-950/30',
                activeBorder: 'border-amber-500'
            },
            brainrot: { 
                name: 'Brainrot', 
                icon: 'solar:fire-bold', 
                theme: 'violet',
                text: 'text-violet-600 dark:text-violet-400',
                bg: 'bg-violet-500',
                border: 'border-violet-200 dark:border-violet-800',
                softBg: 'bg-violet-50 dark:bg-violet-950/30',
                activeBorder: 'border-violet-500'
            }
        };

        const AVATARS = {
            me: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150",
            sarah: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
            ahmed: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
            david: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
            lisa: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
            youssef: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=150&h=150",
             marcus: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
            elena: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
        };

        const CONTEXT_PROFILES = {
            unified: { img: AVATARS.me, name: 'Tim Arits', role: 'Product Designer' },
            pro: { img: AVATARS.me, name: 'Tim Arits', role: 'Design Engineer' },
            social: { img: AVATARS.me, name: 'Timmy', role: 'Friends Only' },
            local: { img: AVATARS.me, name: 'Tim (Neighbor)', role: 'Hurghada, Red Sea' },
            thoughts: { img: AVATARS.me, name: 'T.A. Thoughts', role: 'Daily Musings' },
            brainrot: { img: AVATARS.me, name: 'Anon_88', role: 'Lurker' }
        };

        // Stats Data for sidebar
        const CONTEXT_STATS = {
            pro: { label: 'Network', value: '845', sub: '42 profile views', color: 'sky' },
            social: { label: 'Friends', value: '142', sub: '6 online', color: 'emerald' },
            local: { label: 'Neighbors', value: '28', sub: 'High Reputation', color: 'orange' },
            thoughts: { label: 'Subs', value: '1.2k', sub: '8% engagement', color: 'amber' },
            brainrot: { label: 'Karma', value: '15.4k', sub: 'Top 1% poster', color: 'violet' }
        };

        const MOCK_PRO_POSTS = [
            { id: 'p1', sourceContext: 'pro', author: "Sarah Jenkins", avatar: AVATARS.sarah, role: "Supply Chain Director", time: "2h", content: "Just published our Q4 analysis on logistics bottlenecks. Key takeaway: Automation is faster than re-routing.", type: "article", title: "Logistics Weekly: The 2024 Report", readTime: "5 min read", stats: { likes: 45, comments: 12 }, linkImage: "https://images.unsplash.com/photo-1494412574643-35d324688b08?auto=format&fit=crop&q=80&w=800", linkDomain: "logistics.co" },
            { id: 'p2', sourceContext: 'pro', author: "David Chen", avatar: AVATARS.david, role: "Product at Stripe", time: "4h", content: "We are debating the future of our color palette. Which contrast ratio feels more accessible for financial dashboards?", type: "poll", stats: { likes: 128, comments: 45 }, poll: { total: 452, options: [ { label: "High Contrast (WCAG AAA)", percent: 64, active: true }, { label: "Softer Grays (Modern)", percent: 36, active: false } ] } },
        ];

        const MOCK_SOCIAL_POSTS = [
            { id: 's2', sourceContext: 'social', author: "Lisa M.", avatar: AVATARS.lisa, circle: "Close Friends", time: "3h", content: "Weekend dump 📸 The hiking trail was absolutely surreal.", type: "gallery", images: ["https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=600", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600"], stats: { likes: 245, comments: 23 } },
            { id: 's1', sourceContext: 'social', author: "Ahmed El-Sayed", avatar: AVATARS.ahmed, circle: "Hurghada Residents", time: "45m", content: "Anyone know a good carpenter available this week?", image: null, stats: { likes: 12, comments: 8 }, type: "text" },
        ];

        const MOCK_LOCAL_POSTS = [
            { id: 'l1', sourceContext: 'local', author: "Town Hall", time: "3h", content: "Roadworks on Old Sheraton Street starting Monday. Plan accordingly!", priority: "high", location: "Hurghada", type: "alert" },
            { id: 'l2', sourceContext: 'local', author: "Tim A.", avatar: AVATARS.me, time: "5h", content: "Selling my vintage Eames chair replica. Moving out sale.", type: "marketplace", price: "$250", condition: "Like New", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800", location: "Downtown", stats: { interested: 8, likes: 4 } },
        ];

        const MOCK_THOUGHTS = [
            { id: 't1', sourceContext: 'thoughts', author: "Tim A.", avatar: AVATARS.me, time: "12m", content: "Privacy isn't about hiding. It's about being able to choose which 'you' to show at any given moment. #OasisLife", stats: { likes: 45, reboosts: 12 } },
             { id: 't3', sourceContext: 'thoughts', author: "David Chen", avatar: AVATARS.david, time: "4h", content: "Hot take: CSS Grid is overrated for simple layouts. Flexbox is still king. 👑", stats: { likes: 12, reboosts: 3 }, type: "quote", quoteAuthor: "Junior Dev" }
        ];

        const MOCK_BRAINROT = [
            { id: 'b1', sourceContext: 'brainrot', author: "ScubaSteve", type: "video", title: "Deep Dive: Marsa Alam", views: "12.4k", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800", stats: { likes: 1542, comments: 34 } },
             { id: 'b3', sourceContext: 'brainrot', author: "TechTakes", type: "short", content: "Why local-first software matters.", views: "8.1k", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600", stats: { likes: 890, comments: 12 } }
        ];

        const CONTACTS = [
            { name: 'Bassant Medhat', avatar: AVATARS.sarah, online: true },
            { name: 'Kristina Belykh', avatar: AVATARS.elena, online: true },
            { name: 'Marianne Wesselink', avatar: AVATARS.lisa, online: true },
            { name: 'Майя Ан', avatar: AVATARS.marcus, online: false },
            { name: 'Etienne van Geleuken', avatar: AVATARS.ahmed, online: false },
            { name: 'Roc Kaley', avatar: AVATARS.david, online: true },
        ];

        const SHORTCUTS = [
            { id: 'sc1', label: 'Intouch.com', icon: 'solar:globus-bold-duotone', img: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=100&h=100&fit=crop' },
            { id: 'sc2', label: 'Never Nude', icon: 'solar:t-shirt-bold-duotone', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&h=100&fit=crop' },
            { id: 'sc3', label: 'qreach', icon: 'solar:rocket-bold-duotone', img: 'https://images.unsplash.com/photo-1614741118868-b427a25e85d6?w=100&h=100&fit=crop' },
        ];

        const Icon = ({ icon, className = "", width = "20" }) => (
            <iconify-icon icon={icon} width={width} class={className}></iconify-icon>
        );

        const NavItem = ({ id, label, icon, active, onClick, config }) => {
            const activeClass = active 
                ? `bg-app-card dark:bg-app-darkCard shadow-sm text-${config.theme}-600 dark:text-${config.theme}-400 border border-app-border dark:border-app-darkBorder` 
                : 'text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover';

            const iconBg = active 
                ? `bg-${config.theme}-100 dark:bg-${config.theme}-900/30 text-${config.theme}-600 dark:text-${config.theme}-400`
                : 'bg-transparent text-app-subtext dark:text-app-darkSubtext';

            return (
                <button 
                    onClick={() => onClick && onClick(id)}
                    className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all duration-200 group mb-1 ${activeClass}`}
                >
                    <div className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${iconBg}`}>
                        <Icon icon={icon} width="20" />
                    </div>
                    <span className={`text-[15px] font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis ${active ? '' : 'group-hover:text-app-text dark:group-hover:text-app-darkText'}`}>{label}</span>
                </button>
            );
        };

        const StatBadge = ({ label, value, color, icon }) => (
            <div className={`flex flex-col p-2.5 rounded-xl border border-app-border dark:border-app-darkBorder bg-app-card dark:bg-app-darkCard hover:border-${color}-200 dark:hover:border-${color}-800 transition-colors group cursor-pointer`}>
                <div className="flex items-center gap-2 mb-1.5">
                    <div className={`text-${color}-500 dark:text-${color}-400 opacity-80 group-hover:opacity-100`}>
                        <Icon icon={icon} width="16" />
                    </div>
                    <span className="text-[11px] font-semibold text-app-subtext uppercase tracking-wide">{label}</span>
                </div>
                <div className="text-[15px] font-bold text-app-text dark:text-app-darkText leading-none">{value}</div>
            </div>
        );

        function App() {
            const [context, setContext] = useState('unified');
            const [isDark, setIsDark] = useState(true);

            const currentProfile = CONTEXT_PROFILES[context] || CONTEXT_PROFILES.unified;
            const currentConfig = CONFIG[context];
            const currentStats = CONTEXT_STATS[context];

            useEffect(() => {
                if (isDark) document.documentElement.classList.add('dark');
                else document.documentElement.classList.remove('dark');
            }, [isDark]);

            const toggleTheme = () => setIsDark(!isDark);

            const getPosts = () => {
                if (context === 'unified') {
                    return [...MOCK_SOCIAL_POSTS, ...MOCK_PRO_POSTS, ...MOCK_LOCAL_POSTS, ...MOCK_THOUGHTS, ...MOCK_BRAINROT].sort(() => Math.random() - 0.5);
                }
                if (context === 'pro') return MOCK_PRO_POSTS;
                if (context === 'social') return MOCK_SOCIAL_POSTS;
                if (context === 'local') return MOCK_LOCAL_POSTS;
                if (context === 'thoughts') return MOCK_THOUGHTS;
                if (context === 'brainrot') return MOCK_BRAINROT;
                return [];
            };

            const renderPost = (post) => {
                const config = CONFIG[post.sourceContext];
                // Base Styles
                let cardClass = "bg-app-card dark:bg-app-darkCard rounded-2xl mb-5 animate-enter overflow-hidden relative border transition-all duration-300 ";
                const borderColor = `hover:border-${config.theme}-300 dark:hover:border-${config.theme}-800 border-app-border dark:border-app-darkBorder`;
                const glowClass = `hover:shadow-[0_0_20px_-12px_rgba(0,0,0,0.1)] dark:hover:shadow-none`;
                cardClass += `${borderColor} ${glowClass}`;
                const headerAccent = `border-l-[4px] border-${config.theme}-500`;

                if (post.sourceContext === 'brainrot') {
                     return (
                        <article key={post.id} className={`${cardClass} ${headerAccent}`}>
                             <div className="px-4 py-3 flex items-center justify-between">
                                <div className="flex gap-3">
                                    <div className={`w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-${config.theme}-400 to-fuchsia-600`}>
                                         <img src={post.avatar || currentProfile.img} className="w-full h-full rounded-full border-2 border-app-card dark:border-app-darkCard object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[15px] text-app-text dark:text-app-darkText leading-tight">{post.author}</h3>
                                        <div className="text-xs text-app-subtext dark:text-app-darkSubtext flex items-center gap-1">
                                            <span>Suggested</span> • <span>{post.time}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                     <button className={`text-${config.theme}-600 dark:text-${config.theme}-400 font-semibold text-sm hover:bg-${config.theme}-50 dark:hover:bg-${config.theme}-900/20 px-3 py-1.5 rounded-lg transition-colors`}>Follow</button>
                                     <button className="text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover p-2 rounded-full"><Icon icon="solar:menu-dots-linear" width="20"/></button>
                                </div>
                             </div>
                             <div className="px-4 pb-3 text-[15px] text-app-text dark:text-app-darkText font-medium">{post.title || post.content}</div>
                             <div className="relative w-full aspect-[4/5] bg-black">
                                 <img src={post.image} className="w-full h-full object-cover opacity-80" />
                                 <div className="absolute inset-0 flex items-center justify-center">
                                     <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform shadow-2xl">
                                         <Icon icon="solar:play-bold" width="32" className="ml-1"/>
                                     </div>
                                 </div>
                                 <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                                     <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium">
                                         <Icon icon="solar:eye-bold" className="inline mr-2 opacity-70"/>{post.views}
                                     </div>
                                 </div>
                             </div>
                             <div className="px-4 py-3 flex justify-between text-app-subtext dark:text-app-darkSubtext text-sm">
                                 <div className="flex items-center gap-6">
                                     <button className={`flex items-center gap-2 hover:text-${config.theme}-500 transition-colors`}><Icon icon="solar:like-bold" className={`text-${config.theme}-500`}/> {post.stats?.likes}</button>
                                     <button className="flex items-center gap-2 hover:text-app-text dark:hover:text-app-darkText transition-colors"><Icon icon="solar:chat-round-linear"/> {post.stats?.comments}</button>
                                 </div>
                                 <button className="flex items-center gap-2 hover:text-app-text dark:hover:text-app-darkText transition-colors"><Icon icon="solar:share-linear"/> Share</button>
                             </div>
                        </article>
                     );
                }

                return (
                    <article key={post.id} className={`${cardClass} ${headerAccent}`}>
                        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
                            <div className="flex gap-3 group cursor-pointer">
                                <div className="relative">
                                    <img src={post.avatar || AVATARS.me} className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-app-border dark:group-hover:ring-app-darkBorder transition-all" />
                                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 bg-${config.theme}-500 rounded-full border-2 border-white dark:border-app-darkCard flex items-center justify-center shadow-sm`}>
                                        <Icon icon={config.icon} width="10" className="text-white"/>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[15px] text-app-text dark:text-app-darkText leading-tight group-hover:text-opacity-80">{post.author}</h3>
                                    <div className="flex items-center gap-1.5 text-[13px] text-app-subtext dark:text-app-darkSubtext mt-0.5">
                                        <span className={`text-${config.theme}-600 dark:text-${config.theme}-400 font-medium`}>{config.name}</span>
                                        <span className="opacity-50">•</span>
                                        <span className="hover:underline">{post.time}</span>
                                    </div>
                                </div>
                            </div>
                            <button className="text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover p-2 rounded-full transition-colors">
                                <Icon icon="solar:menu-dots-linear" width="20" />
                            </button>
                        </div>

                        <div className="px-4 pb-2">
                            {post.content && <p className="text-[15px] text-app-text dark:text-app-darkText leading-relaxed whitespace-pre-line mb-3">{post.content}</p>}
                            
                            {post.type === 'article' && (
                                <div className="border border-app-border dark:border-app-darkBorder rounded-xl overflow-hidden cursor-pointer group hover:border-app-subtext/30 transition-colors">
                                    <div className="h-48 w-full overflow-hidden">
                                        <img src={post.linkImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-4 bg-app-hover/50 dark:bg-app-darkHover/30">
                                        <div className={`text-[12px] text-${config.theme}-600 dark:text-${config.theme}-400 font-bold uppercase tracking-wide mb-1`}>{post.linkDomain}</div>
                                        <h4 className="font-bold text-app-text dark:text-app-darkText leading-tight text-[16px] mb-1 group-hover:text-blue-500 transition-colors">{post.title}</h4>
                                        <p className="text-[13px] text-app-subtext dark:text-app-darkSubtext line-clamp-1">{post.readTime} • Click to read full analysis...</p>
                                    </div>
                                </div>
                            )}

                             {post.type === 'poll' && (
                                <div className="space-y-2 mb-2 mt-3">
                                    {post.poll.options.map((opt, i) => (
                                        <div key={i} className={`relative h-11 rounded-lg border ${opt.active ? `border-${config.theme}-500/50` : 'border-app-border dark:border-app-darkBorder'} overflow-hidden cursor-pointer group`}>
                                            <div className={`absolute top-0 left-0 bottom-0 transition-all duration-700 ${opt.active ? `bg-${config.theme}-500/10` : 'bg-app-hover dark:bg-app-darkHover group-hover:opacity-80'}`} style={{width: `${opt.percent}%`}}></div>
                                            <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
                                                <span className={`text-[14px] font-medium ${opt.active ? `text-${config.theme}-600 dark:text-${config.theme}-400` : 'text-app-text dark:text-app-darkText'}`}>{opt.label}</span>
                                                <span className="text-[14px] font-bold text-app-text dark:text-app-darkText">{opt.percent}%</span>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="text-xs text-app-subtext dark:text-app-darkSubtext pt-1 text-right font-medium">{post.poll.total} votes • {config.name} Poll</div>
                                </div>
                            )}

                            {post.type === 'gallery' && (
                                <div className="-mx-4 mt-2">
                                    <div className="grid grid-cols-2 gap-1">
                                        {post.images.map((img, i) => (
                                            <img key={i} src={img} className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity first:rounded-r-none last:rounded-l-none" />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {post.type === 'marketplace' && (
                                <div className="mt-2 mb-2 relative group cursor-pointer rounded-xl overflow-hidden border border-app-border dark:border-app-darkBorder">
                                    <img src={post.image} className="w-full h-[350px] object-cover" />
                                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg flex justify-between items-center">
                                        <div>
                                            <div className="text-2xl font-bold text-app-text dark:text-white mb-0.5">{post.price}</div>
                                            <div className="text-app-subtext dark:text-gray-300 text-sm font-medium">{post.location} • {post.condition}</div>
                                        </div>
                                        <button className={`bg-${config.theme}-600 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-md`}>Contact</button>
                                    </div>
                                </div>
                            )}

                            {post.type === 'alert' && (
                                <div className={`p-4 bg-${config.theme}-50 dark:bg-${config.theme}-900/10 border border-${config.theme}-100 dark:border-${config.theme}-900/20 rounded-xl flex gap-4 my-2`}>
                                    <div className={`w-12 h-12 rounded-xl bg-${config.theme}-100 dark:bg-${config.theme}-900/30 flex items-center justify-center flex-shrink-0 text-${config.theme}-600 dark:text-${config.theme}-400`}>
                                        <Icon icon="solar:bell-bing-bold" width="24" />
                                    </div>
                                    <div>
                                        <h5 className={`text-[15px] font-bold text-${config.theme}-900 dark:text-${config.theme}-400`}>Priority Alert: {post.priority}</h5>
                                        <p className={`text-[14px] text-${config.theme}-900/70 dark:text-${config.theme}-200/70 mt-1 leading-relaxed`}>{post.content}</p>
                                    </div>
                                </div>
                            )}

                            {post.type === 'quote' && (
                                <div className="relative py-8 px-8 bg-app-bg dark:bg-app-darkBg rounded-xl my-2 mx-2 border border-app-border dark:border-app-darkBorder">
                                    <Icon icon="solar:quote-up-square-bold" className={`absolute top-4 left-4 text-${config.theme}-200 dark:text-${config.theme}-900`} width="40"/>
                                    <p className="text-lg italic font-medium text-app-text dark:text-app-darkText text-center relative z-10 leading-relaxed">{post.content.split('"')[1] || post.content}</p>
                                    <div className={`text-center mt-4 text-sm font-bold text-${config.theme}-600 dark:text-${config.theme}-400 uppercase tracking-wider`}>— {post.quoteAuthor}</div>
                                </div>
                            )}
                        </div>

                        <div className="px-2 py-2 mx-2 mt-2 border-t border-app-border dark:border-app-darkBorder flex items-center justify-between">
                            <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group">
                                <Icon icon="solar:like-linear" width="20" className={`group-hover:text-${config.theme}-500 transition-colors`} /> 
                                <span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">{post.stats?.likes || 0}</span>
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group">
                                <Icon icon="solar:chat-round-linear" width="20" className={`group-hover:text-${config.theme}-500 transition-colors`} /> 
                                <span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">{post.stats?.comments || 0}</span>
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group">
                                <Icon icon="solar:share-linear" width="20" className={`group-hover:text-${config.theme}-500 transition-colors`} /> 
                                <span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">Share</span>
                            </button>
                        </div>
                    </article>
                );
            };

            return (
                <div className="min-h-screen flex flex-col font-sans bg-app-bg dark:bg-app-darkBg text-app-text dark:text-app-darkText">
                    
                    <header className="h-[60px] bg-app-card/80 dark:bg-app-darkCard/80 backdrop-blur-xl border-b border-app-border dark:border-app-darkBorder fixed top-0 w-full z-50 flex items-center justify-between px-6 transition-colors duration-300">
                        <div className="flex items-center gap-6 w-[300px]">
                            <div className="flex items-center gap-2 cursor-pointer group">
                                <div className={`w-9 h-9 bg-gradient-to-br from-${currentConfig.theme}-500 to-${currentConfig.theme}-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform`}>
                                    <Icon icon="solar:infinity-bold" width="22" />
                                </div>
                                <span className="font-bold text-lg tracking-tight hidden sm:block">Oasis</span>
                            </div>
                            <div className="relative hidden lg:block w-full max-w-[240px]">
                                <Icon icon="solar:magnifer-linear" className="absolute left-3 top-2.5 text-app-subtext" width="18" />
                                <input type="text" placeholder={`Search ${currentConfig.name}...`} className="w-full bg-app-hover dark:bg-app-darkHover border-none rounded-xl py-2 pl-10 pr-4 text-[14px] placeholder-app-subtext text-app-text dark:text-app-darkText focus:ring-2 focus:ring-inset focus:ring-indigo-500/20 focus:outline-none transition-all" />
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 lg:hidden">
                            <span className={`text-${currentConfig.theme}-600 dark:text-${currentConfig.theme}-400 font-semibold`}>{currentConfig.name}</span>
                        </div>
                        <div className="flex items-center justify-end gap-3 w-[300px]">
                            <button onClick={toggleTheme} className="w-9 h-9 rounded-xl hover:bg-app-hover dark:hover:bg-app-darkHover flex items-center justify-center text-app-subtext hover:text-app-text transition-colors">
                                <Icon icon={isDark ? "solar:sun-bold" : "solar:moon-bold"} width="20" />
                            </button>
                            <div className="h-6 w-[1px] bg-app-border dark:bg-app-darkBorder mx-1"></div>
                            <div className="flex items-center gap-3 cursor-pointer p-1 pr-2 rounded-full hover:bg-app-hover dark:hover:bg-app-darkHover transition-all border border-transparent hover:border-app-border dark:hover:border-app-darkBorder">
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-app-border dark:border-app-darkBorder">
                                    <img src={currentProfile.img} className="w-full h-full object-cover" />
                                </div>
                                <Icon icon="solar:alt-arrow-down-bold" width="12" className="text-app-subtext" />
                            </div>
                        </div>
                    </header>

                    <div className="flex pt-[60px] h-screen overflow-hidden">
                        
                        {/* Left Sidebar Menu */}
                        <div className="hidden xl:flex flex-col w-[320px] p-4 h-full overflow-y-auto custom-scrollbar border-r border-app-border dark:border-app-darkBorder bg-app-bg dark:bg-app-darkBg">
                             
                            {/* Current User Card */}
                            <div className="flex items-center gap-3 px-3 py-4 mb-4 rounded-2xl bg-app-card dark:bg-app-darkCard border border-app-border dark:border-app-darkBorder shadow-sm">
                                <div className="w-12 h-12 rounded-xl overflow-hidden">
                                    <img src={currentProfile.img} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="text-[15px] font-bold text-app-text dark:text-app-darkText leading-tight">{currentProfile.name}</div>
                                    <div className="text-[13px] text-app-subtext dark:text-app-darkSubtext">{currentProfile.role}</div>
                                </div>
                            </div>

                            {/* DYNAMIC CONNECTIONS / IDENTITY SECTION */}
                            <div className="mb-6 animate-enter">
                                <div className="px-3 mb-2 flex items-center justify-between">
                                    <div className="text-[11px] font-bold text-app-subtext dark:text-app-darkSubtext uppercase tracking-wider">
                                        {context === 'unified' ? 'Identity Overview' : 'Connections'}
                                    </div>
                                    {context !== 'unified' && (
                                        <div className={`text-[11px] font-bold text-${currentConfig.theme}-600 dark:text-${currentConfig.theme}-400 bg-${currentConfig.theme}-100 dark:bg-${currentConfig.theme}-900/30 px-2 py-0.5 rounded-md`}>
                                            ACTIVE
                                        </div>
                                    )}
                                </div>

                                {context === 'unified' ? (
                                    <div className="grid grid-cols-2 gap-2">
                                        {Object.entries(CONTEXT_STATS).map(([key, stat]) => (
                                            <StatBadge 
                                                key={key} 
                                                label={stat.label} 
                                                value={stat.value} 
                                                color={stat.color} 
                                                icon={CONFIG[key].icon} 
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div className={`p-4 rounded-xl border border-${currentConfig.theme}-200 dark:border-${currentConfig.theme}-800 bg-${currentConfig.theme}-50/50 dark:bg-${currentConfig.theme}-900/10`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${currentConfig.theme}-100 dark:bg-${currentConfig.theme}-900/40 text-${currentConfig.theme}-600 dark:text-${currentConfig.theme}-400`}>
                                                <Icon icon={currentConfig.icon} width="24" />
                                            </div>
                                            <div>
                                                <div className="text-[20px] font-bold text-app-text dark:text-app-darkText leading-none mb-1">{currentStats?.value}</div>
                                                <div className="text-xs font-medium text-app-subtext dark:text-app-darkSubtext">{currentStats?.label}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-[13px] font-medium text-app-subtext dark:text-app-darkSubtext">
                                            <Icon icon="solar:chart-2-bold" width="16" className={`text-${currentConfig.theme}-500`}/>
                                            <span>{currentStats?.sub}</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="text-[11px] font-bold text-app-subtext dark:text-app-darkSubtext uppercase tracking-wider px-3 mb-2">Contexts</div>
                            <div className="space-y-1 mb-6">
                                {Object.entries(CONFIG).map(([key, cfg]) => (
                                    <NavItem 
                                        key={key} 
                                        id={key} 
                                        label={cfg.name} 
                                        icon={cfg.icon} 
                                        active={context === key} 
                                        onClick={setContext} 
                                        config={cfg}
                                    />
                                ))}
                            </div>

                            <div className="text-[11px] font-bold text-app-subtext dark:text-app-darkSubtext uppercase tracking-wider px-3 mb-2">Shortcuts</div>
                            <div className="space-y-1">
                                {SHORTCUTS.map(sc => (
                                    <button key={sc.id} className="flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-app-hover dark:hover:bg-app-darkHover transition-colors group">
                                        <img src={sc.img} className="w-6 h-6 rounded-md object-cover opacity-80 group-hover:opacity-100" />
                                        <span className="text-[14px] font-medium text-app-subtext group-hover:text-app-text dark:group-hover:text-app-darkText">{sc.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Main Feed */}
                        <main className="flex-1 flex justify-center w-full overflow-y-auto custom-scrollbar relative">
                            <div className="w-full max-w-[640px] py-8 px-4 sm:px-6">
                                
                                {context === 'unified' && (
                                    <div className="flex gap-4 overflow-x-auto hide-scrollbar mb-8 pb-2">
                                        <div className="w-[140px] h-[220px] flex-shrink-0 bg-app-card dark:bg-app-darkCard rounded-2xl overflow-hidden relative cursor-pointer border border-app-border dark:border-app-darkBorder group">
                                            <div className="h-full w-full absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                                            <img src={currentProfile.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            <div className="absolute bottom-4 left-0 right-0 z-20 flex flex-col items-center">
                                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg mb-2 border-2 border-app-card dark:border-app-darkCard">
                                                    <Icon icon="solar:add-bold" width="20" />
                                                </div>
                                                <span className="text-white text-xs font-semibold">Add Story</span>
                                            </div>
                                        </div>
                                        {[1,2,3].map((i) => (
                                            <div key={i} className="w-[140px] h-[220px] flex-shrink-0 bg-gray-200 rounded-2xl overflow-hidden relative cursor-pointer group border border-app-border dark:border-app-darkBorder">
                                                <div className="h-full w-full absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                                                <img src={`https://images.unsplash.com/photo-${i === 1 ? '1516975080664-ed2fc6a32937' : i === 2 ? '1500648767791-00dcc994a43e' : '1534528741775-53994a69daeb'}?auto=format&fit=crop&w=300&q=80`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                                <div className="absolute top-3 left-3 z-20 w-9 h-9 rounded-full border-2 border-white/50 p-0.5">
                                                    <img src={Object.values(AVATARS)[i]} className="w-full h-full rounded-full object-cover"/>
                                                </div>
                                                <div className="absolute bottom-3 left-3 z-20 text-white font-semibold text-sm">User {i}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className={`bg-app-card dark:bg-app-darkCard rounded-2xl border ${currentConfig.activeBorder ? `border-${currentConfig.theme}-200 dark:border-${currentConfig.theme}-800` : 'border-app-border dark:border-app-darkBorder'} p-4 mb-6 shadow-sm`}>
                                    <div className="flex gap-4 mb-3">
                                        <div className={`p-0.5 rounded-full bg-gradient-to-tr from-${currentConfig.theme}-400 to-${currentConfig.theme}-600`}>
                                            <img src={currentProfile.img} className="w-10 h-10 rounded-full object-cover border-2 border-app-card dark:border-app-darkCard" />
                                        </div>
                                        <div className="flex-1 bg-app-bg dark:bg-app-darkBg rounded-xl px-4 py-2.5 cursor-text group transition-colors hover:bg-app-hover dark:hover:bg-app-darkHover">
                                            <span className="text-app-subtext dark:text-app-darkSubtext text-[15px] font-medium">
                                                {context === 'unified' ? "What's happening?" : 
                                                 context === 'pro' ? "Share a professional update..." :
                                                 context === 'local' ? "Report an issue or sell something..." :
                                                 "Write something..."}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-2">
                                        <div className="flex gap-2">
                                            <button className="p-2 rounded-lg hover:bg-app-hover dark:hover:bg-app-darkHover text-app-subtext hover:text-green-500 transition-colors"><Icon icon="solar:gallery-bold" width="22"/></button>
                                            <button className="p-2 rounded-lg hover:bg-app-hover dark:hover:bg-app-darkHover text-app-subtext hover:text-blue-500 transition-colors"><Icon icon="solar:link-circle-bold" width="22"/></button>
                                            <button className="p-2 rounded-lg hover:bg-app-hover dark:hover:bg-app-darkHover text-app-subtext hover:text-yellow-500 transition-colors"><Icon icon="solar:emoji-funny-circle-bold" width="22"/></button>
                                        </div>
                                        <button className={`bg-${currentConfig.theme}-600 hover:bg-${currentConfig.theme}-700 text-white px-5 py-1.5 rounded-lg font-semibold text-sm transition-colors shadow-md shadow-${currentConfig.theme}-500/20`}>
                                            Post
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    {getPosts().map(post => renderPost(post))}
                                </div>
                                
                                <div className="py-12 flex flex-col items-center text-app-subtext dark:text-app-darkSubtext opacity-50">
                                    <Icon icon="solar:check-read-linear" width="32" className="mb-2"/>
                                    <p className="text-sm">You've reached the end</p>
                                </div>

                            </div>
                        </main>

                        <div className="hidden xl:flex flex-col w-[300px] p-6 h-full overflow-y-auto custom-scrollbar border-l border-app-border dark:border-app-darkBorder bg-app-bg dark:bg-app-darkBg">
                            
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-[13px] font-bold text-app-subtext dark:text-app-darkSubtext uppercase tracking-wider">Requests</h3>
                                </div>
                                <div className="bg-app-card dark:bg-app-darkCard p-3 rounded-2xl border border-app-border dark:border-app-darkBorder shadow-sm">
                                    <div className="flex items-center gap-3 mb-3">
                                        <img src={AVATARS.youssef} className="w-10 h-10 rounded-full object-cover" />
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm font-semibold text-app-text dark:text-app-darkText truncate">Youssef AbuHamda</div>
                                            <div className="text-xs text-app-subtext">3 mutuals</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-app-text dark:bg-white text-app-bg dark:text-black font-semibold text-xs py-2 rounded-lg hover:opacity-90">Confirm</button>
                                        <button className="flex-1 bg-app-hover dark:bg-app-darkHover text-app-text dark:text-app-darkText font-semibold text-xs py-2 rounded-lg">Ignore</button>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-[13px] font-bold text-app-subtext dark:text-app-darkSubtext uppercase tracking-wider">
                                        {context === 'pro' ? 'Trending Topics' : 
                                         context === 'local' ? 'Nearby Events' : 
                                         'Contacts'}
                                    </h3>
                                </div>
                                <div className="space-y-1">
                                    {CONTACTS.map((contact, i) => (
                                        <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-app-hover dark:hover:bg-app-darkHover cursor-pointer transition-colors group">
                                            <div className="relative">
                                                <img src={contact.avatar} className="w-8 h-8 rounded-full object-cover" />
                                                {contact.online && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-app-bg dark:border-app-darkBg"></div>}
                                            </div>
                                            <span className="text-[14px] font-medium text-app-subtext group-hover:text-app-text dark:group-hover:text-app-darkText">{contact.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="" id="root"><div className="min-h-screen flex flex-col font-sans bg-app-bg dark:bg-app-darkBg text-app-text dark:text-app-darkText"><header className="h-[60px] bg-app-card/80 dark:bg-app-darkCard/80 backdrop-blur-xl border-b border-app-border dark:border-app-darkBorder fixed top-0 w-full z-50 flex items-center justify-between px-6 transition-colors duration-300"><div className="flex items-center gap-6 w-[300px]"><div className="flex items-center gap-2 cursor-pointer group"><div className="w-9 h-9 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform"><iconify-icon className="" icon="solar:infinity-bold" width="22"></iconify-icon></div><span className="font-bold text-lg tracking-tight hidden sm:block">Oasis</span></div><div className="relative hidden lg:block w-full max-w-[240px]"><iconify-icon className="absolute left-3 top-2.5 text-app-subtext" icon="solar:magnifer-linear" width="18"></iconify-icon><input className="w-full bg-app-hover dark:bg-app-darkHover border-none rounded-xl py-2 pl-10 pr-4 text-[14px] placeholder-app-subtext text-app-text dark:text-app-darkText focus:ring-2 focus:ring-inset focus:ring-indigo-500/20 focus:outline-none transition-all" placeholder="Search Everything..." type="text"/></div></div><div className="flex items-center justify-center gap-2 lg:hidden"><span className="text-slate-600 dark:text-slate-400 font-semibold">Everything</span></div><div className="flex items-center justify-end gap-3 w-[300px]"><button className="w-9 h-9 rounded-xl hover:bg-app-hover dark:hover:bg-app-darkHover flex items-center justify-center text-app-subtext hover:text-app-text transition-colors"><iconify-icon className="" icon="solar:sun-bold" width="20"></iconify-icon></button><div className="h-6 w-[1px] bg-app-border dark:bg-app-darkBorder mx-1"></div><div className="flex items-center gap-3 cursor-pointer p-1 pr-2 rounded-full hover:bg-app-hover dark:hover:bg-app-darkHover transition-all border border-transparent hover:border-app-border dark:hover:border-app-darkBorder"><div className="w-8 h-8 rounded-full overflow-hidden border border-app-border dark:border-app-darkBorder"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/></div><iconify-icon className="text-app-subtext" icon="solar:alt-arrow-down-bold" width="12"></iconify-icon></div></div></header><div className="flex pt-[60px] h-screen overflow-hidden"><div className="hidden xl:flex flex-col w-[320px] p-4 h-full overflow-y-auto custom-scrollbar border-r border-app-border dark:border-app-darkBorder bg-app-bg dark:bg-app-darkBg"><div className="flex items-center gap-3 px-3 py-4 mb-4 rounded-2xl bg-app-card dark:bg-app-darkCard border border-app-border dark:border-app-darkBorder shadow-sm"><div className="w-12 h-12 rounded-xl overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/></div><div><div className="text-[15px] font-bold text-app-text dark:text-app-darkText leading-tight">Tim Arits</div><div className="text-[13px] text-app-subtext dark:text-app-darkSubtext">Product Designer</div></div></div><div className="mb-6 animate-enter"><div className="flex mb-2 pr-3 pl-3 items-center justify-between"><div className="text-[11px] font-bold text-app-subtext dark:text-app-darkSubtext uppercase tracking-wider">Identity Overview</div></div><div className="grid grid-cols-2 gap-2"><div className="flex flex-col border-app-border dark:border-app-darkBorder dark:bg-app-darkCard hover:border-sky-200 dark:hover:border-sky-800 transition-colors group cursor-pointer border rounded-xl pt-2.5 pr-2.5 pb-2.5 pl-2.5"><div className="flex items-center gap-2 mb-1.5"><div className="text-sky-500 dark:text-sky-400 opacity-80 group-hover:opacity-100"><iconify-icon className="" icon="solar:case-bold" width="16"></iconify-icon></div><span className="text-[11px] font-semibold text-app-subtext uppercase tracking-wide">Network</span></div><div className="text-[15px] font-bold text-app-text dark:text-app-darkText leading-none">845</div></div><div className="flex flex-col p-2.5 rounded-xl border border-app-border dark:border-app-darkBorder bg-app-card dark:bg-app-darkCard hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors group cursor-pointer"><div className="flex items-center gap-2 mb-1.5"><div className="text-emerald-500 dark:text-emerald-400 opacity-80 group-hover:opacity-100"><iconify-icon className="" icon="solar:users-group-rounded-bold" width="16"></iconify-icon></div><span className="text-[11px] font-semibold text-app-subtext uppercase tracking-wide">Friends</span></div><div className="text-[15px] font-bold text-app-text dark:text-app-darkText leading-none">142</div></div><div className="flex flex-col p-2.5 rounded-xl border border-app-border dark:border-app-darkBorder bg-app-card dark:bg-app-darkCard hover:border-orange-200 dark:hover:border-orange-800 transition-colors group cursor-pointer"><div className="flex items-center gap-2 mb-1.5"><div className="text-orange-500 dark:text-orange-400 opacity-80 group-hover:opacity-100"><iconify-icon className="" icon="solar:map-point-bold" width="16"></iconify-icon></div><span className="text-[11px] font-semibold text-app-subtext uppercase tracking-wide">Neighbors</span></div><div className="text-[15px] font-bold text-app-text dark:text-app-darkText leading-none">28</div></div><div className="flex flex-col p-2.5 rounded-xl border border-app-border dark:border-app-darkBorder bg-app-card dark:bg-app-darkCard hover:border-amber-200 dark:hover:border-amber-800 transition-colors group cursor-pointer"><div className="flex items-center gap-2 mb-1.5"><div className="text-amber-500 dark:text-amber-400 opacity-80 group-hover:opacity-100"><iconify-icon className="" icon="solar:pen-new-square-bold" width="16"></iconify-icon></div><span className="text-[11px] font-semibold text-app-subtext uppercase tracking-wide">Subs</span></div><div className="text-[15px] font-bold text-app-text dark:text-app-darkText leading-none">1.2k</div></div><div className="flex flex-col p-2.5 rounded-xl border border-app-border dark:border-app-darkBorder bg-app-card dark:bg-app-darkCard hover:border-violet-200 dark:hover:border-violet-800 transition-colors group cursor-pointer"><div className="flex items-center gap-2 mb-1.5"><div className="text-violet-500 dark:text-violet-400 opacity-80 group-hover:opacity-100"><iconify-icon className="" icon="solar:fire-bold" width="16"></iconify-icon></div><span className="text-[11px] font-semibold text-app-subtext uppercase tracking-wide">Karma</span></div><div className="text-[15px] font-bold text-app-text dark:text-app-darkText leading-none">15.4k</div></div></div></div><div className="text-[11px] font-bold text-app-subtext dark:text-app-darkSubtext uppercase tracking-wider px-3 mb-2">Contexts</div><div className="space-y-1 mb-6"><button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all duration-200 group mb-1 bg-app-card dark:bg-app-darkCard shadow-sm text-slate-600 dark:text-slate-400 border border-app-border dark:border-app-darkBorder"><div className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors bg-slate-100 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400"><iconify-icon className="" icon="solar:infinity-bold" width="20"></iconify-icon></div><span className="text-[15px] font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">Everything</span></button><button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all duration-200 group mb-1 text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover"><div className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors bg-transparent text-app-subtext dark:text-app-darkSubtext"><iconify-icon className="" icon="solar:case-bold" width="20"></iconify-icon></div><span className="text-[15px] font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-app-text dark:group-hover:text-app-darkText">Professional</span></button><button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all duration-200 group mb-1 text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover"><div className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors bg-transparent text-app-subtext dark:text-app-darkSubtext"><iconify-icon className="" icon="solar:users-group-rounded-bold" width="20"></iconify-icon></div><span className="text-[15px] font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-app-text dark:group-hover:text-app-darkText">Friends</span></button><button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all duration-200 group mb-1 text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover"><div className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors bg-transparent text-app-subtext dark:text-app-darkSubtext"><iconify-icon className="" icon="solar:map-point-bold" width="20"></iconify-icon></div><span className="text-[15px] font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-app-text dark:group-hover:text-app-darkText">Local</span></button><button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all duration-200 group mb-1 text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover"><div className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors bg-transparent text-app-subtext dark:text-app-darkSubtext"><iconify-icon className="" icon="solar:pen-new-square-bold" width="20"></iconify-icon></div><span className="text-[15px] font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-app-text dark:group-hover:text-app-darkText">Thoughts</span></button><button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all duration-200 group mb-1 text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover"><div className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors bg-transparent text-app-subtext dark:text-app-darkSubtext"><iconify-icon className="" icon="solar:fire-bold" width="20"></iconify-icon></div><span className="text-[15px] font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-app-text dark:group-hover:text-app-darkText">Brainrot</span></button></div><div className="text-[11px] font-bold text-app-subtext dark:text-app-darkSubtext uppercase tracking-wider px-3 mb-2">Shortcuts</div><div className="space-y-1"><button className="flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-app-hover dark:hover:bg-app-darkHover transition-colors group"><img className="w-6 h-6 rounded-md object-cover opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1560472355-536de3962603?w=100&amp;h=100&amp;fit=crop"/><span className="text-[14px] font-medium text-app-subtext group-hover:text-app-text dark:group-hover:text-app-darkText">Intouch.com</span></button><button className="flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-app-hover dark:hover:bg-app-darkHover transition-colors group"><img className="w-6 h-6 rounded-md object-cover opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&amp;h=100&amp;fit=crop"/><span className="text-[14px] font-medium text-app-subtext group-hover:text-app-text dark:group-hover:text-app-darkText">Never Nude</span></button><button className="flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-app-hover dark:hover:bg-app-darkHover transition-colors group"><img className="w-6 h-6 rounded-md object-cover opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/><span className="text-[14px] font-medium text-app-subtext group-hover:text-app-text dark:group-hover:text-app-darkText">qreach</span></button></div></div><main className="flex-1 flex justify-center w-full overflow-y-auto custom-scrollbar relative"><div className="w-full max-w-[640px] py-8 px-4 sm:px-6"><div className="flex gap-4 overflow-x-auto hide-scrollbar mb-8 pb-2"><div className="w-[140px] h-[220px] flex-shrink-0 bg-app-card dark:bg-app-darkCard rounded-2xl overflow-hidden relative cursor-pointer border border-app-border dark:border-app-darkBorder group"><div className="h-full w-full absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/><div className="absolute bottom-4 left-0 right-0 z-20 flex flex-col items-center"><div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg mb-2 border-2 border-app-card dark:border-app-darkCard"><iconify-icon className="" icon="solar:add-bold" width="20"></iconify-icon></div><span className="text-white text-xs font-semibold">Add Story</span></div></div><div className="w-[140px] h-[220px] flex-shrink-0 bg-gray-200 rounded-2xl overflow-hidden relative cursor-pointer group border border-app-border dark:border-app-darkBorder"><div className="h-full w-full absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/><div className="absolute top-3 left-3 z-20 w-9 h-9 rounded-full border-2 border-white/50 p-0.5"><img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/></div><div className="absolute bottom-3 left-3 z-20 text-white font-semibold text-sm">User 1</div></div><div className="w-[140px] h-[220px] flex-shrink-0 bg-gray-200 rounded-2xl overflow-hidden relative cursor-pointer group border border-app-border dark:border-app-darkBorder"><div className="h-full w-full absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/><div className="absolute top-3 left-3 z-20 w-9 h-9 rounded-full border-2 border-white/50 p-0.5"><img className="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/></div><div className="absolute bottom-3 left-3 z-20 text-white font-semibold text-sm">User 2</div></div><div className="w-[140px] h-[220px] flex-shrink-0 bg-gray-200 rounded-2xl overflow-hidden relative cursor-pointer group border border-app-border dark:border-app-darkBorder"><div className="h-full w-full absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/><div className="absolute top-3 left-3 z-20 w-9 h-9 rounded-full border-2 border-white/50 p-0.5"><img className="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="absolute bottom-3 left-3 z-20 text-white font-semibold text-sm">User 3</div></div></div><div className="bg-app-card dark:bg-app-darkCard rounded-2xl border border-app-border dark:border-app-darkBorder p-4 mb-6 shadow-sm"><div className="flex gap-4 mb-3"><div className="p-0.5 rounded-full bg-gradient-to-tr from-slate-400 to-slate-600"><img className="w-10 h-10 rounded-full object-cover border-2 border-app-card dark:border-app-darkCard" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/></div><div className="flex-1 bg-app-bg dark:bg-app-darkBg rounded-xl px-4 py-2.5 cursor-text group transition-colors hover:bg-app-hover dark:hover:bg-app-darkHover"><span className="text-app-subtext dark:text-app-darkSubtext text-[15px] font-medium">What's happening?</span></div></div><div className="flex items-center justify-between pt-2"><div className="flex gap-2"><button className="p-2 rounded-lg hover:bg-app-hover dark:hover:bg-app-darkHover text-app-subtext hover:text-green-500 transition-colors"><iconify-icon className="" icon="solar:gallery-bold" width="22"></iconify-icon></button><button className="p-2 rounded-lg hover:bg-app-hover dark:hover:bg-app-darkHover text-app-subtext hover:text-blue-500 transition-colors"><iconify-icon className="" icon="solar:link-circle-bold" width="22"></iconify-icon></button><button className="p-2 rounded-lg hover:bg-app-hover dark:hover:bg-app-darkHover text-app-subtext hover:text-yellow-500 transition-colors"><iconify-icon className="" icon="solar:emoji-funny-circle-bold" width="22"></iconify-icon></button></div><button className="bg-slate-600 hover:bg-slate-700 text-white px-5 py-1.5 rounded-lg font-semibold text-sm transition-colors shadow-md shadow-slate-500/20">Post</button></div></div><div className="flex flex-col"><article className="bg-app-card dark:bg-app-darkCard rounded-2xl mb-5 animate-enter overflow-hidden relative border transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-800 border-app-border dark:border-app-darkBorder hover:shadow-[0_0_20px_-12px_rgba(0,0,0,0.1)] dark:hover:shadow-none border-l-[4px] border-emerald-500"><div className="px-4 pt-4 pb-2 flex items-center justify-between"><div className="flex gap-3 group cursor-pointer"><div className="relative"><img className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-app-border dark:group-hover:ring-app-darkBorder transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/><div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white dark:border-app-darkCard flex items-center justify-center shadow-sm"><iconify-icon className="text-white" icon="solar:users-group-rounded-bold" width="10"></iconify-icon></div></div><div><h3 className="font-semibold text-[15px] text-app-text dark:text-app-darkText leading-tight group-hover:text-opacity-80">Lisa M.</h3><div className="flex items-center gap-1.5 text-[13px] text-app-subtext dark:text-app-darkSubtext mt-0.5"><span className="text-emerald-600 dark:text-emerald-400 font-medium">Friends</span><span className="opacity-50">•</span><span className="hover:underline">3h</span></div></div></div><button className="text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover p-2 rounded-full transition-colors"><iconify-icon className="" icon="solar:menu-dots-linear" width="20"></iconify-icon></button></div><div className="px-4 pb-2"><p className="text-[15px] text-app-text dark:text-app-darkText leading-relaxed whitespace-pre-line mb-3">Weekend dump 📸 The hiking trail was absolutely surreal.</p><div className="-mx-4 mt-2"><div className="grid grid-cols-2 gap-1"><img className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity first:rounded-r-none last:rounded-l-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/><img className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity first:rounded-r-none last:rounded-l-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/></div></div></div><div className="px-2 py-2 mx-2 mt-2 border-t border-app-border dark:border-app-darkBorder flex items-center justify-between"><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-emerald-500 transition-colors" icon="solar:like-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">245</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-emerald-500 transition-colors" icon="solar:chat-round-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">23</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-emerald-500 transition-colors" icon="solar:share-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">Share</span></button></div></article><article className="bg-app-card dark:bg-app-darkCard rounded-2xl mb-5 animate-enter overflow-hidden relative border transition-all duration-300 hover:border-violet-300 dark:hover:border-violet-800 border-app-border dark:border-app-darkBorder hover:shadow-[0_0_20px_-12px_rgba(0,0,0,0.1)] dark:hover:shadow-none border-l-[4px] border-violet-500"><div className="px-4 py-3 flex items-center justify-between"><div className="flex gap-3"><div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-violet-400 to-fuchsia-600"><img className="w-full h-full rounded-full border-2 border-app-card dark:border-app-darkCard object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/></div><div><h3 className="font-semibold text-[15px] text-app-text dark:text-app-darkText leading-tight">ScubaSteve</h3><div className="text-xs text-app-subtext dark:text-app-darkSubtext flex items-center gap-1"><span>Suggested</span> • <span></span></div></div></div><div className="flex gap-2"><button className="text-violet-600 dark:text-violet-400 font-semibold text-sm hover:bg-violet-50 dark:hover:bg-violet-900/20 px-3 py-1.5 rounded-lg transition-colors">Follow</button><button className="text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover p-2 rounded-full"><iconify-icon className="" icon="solar:menu-dots-linear" width="20"></iconify-icon></button></div></div><div className="px-4 pb-3 text-[15px] text-app-text dark:text-app-darkText font-medium">Deep Dive: Marsa Alam</div><div className="relative w-full aspect-[4/5] bg-black"><img className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/><div className="absolute inset-0 flex items-center justify-center"><div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform shadow-2xl"><iconify-icon className="ml-1" icon="solar:play-bold" width="32"></iconify-icon></div></div><div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white"><div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium"><iconify-icon className="inline mr-2 opacity-70" icon="solar:eye-bold" width="20"></iconify-icon>12.4k</div></div></div><div className="px-4 py-3 flex justify-between text-app-subtext dark:text-app-darkSubtext text-sm"><div className="flex items-center gap-6"><button className="flex items-center gap-2 hover:text-violet-500 transition-colors"><iconify-icon className="text-violet-500" icon="solar:like-bold" width="20"></iconify-icon> 1542</button><button className="flex items-center gap-2 hover:text-app-text dark:hover:text-app-darkText transition-colors"><iconify-icon className="" icon="solar:chat-round-linear" width="20"></iconify-icon> 34</button></div><button className="flex items-center gap-2 hover:text-app-text dark:hover:text-app-darkText transition-colors"><iconify-icon className="" icon="solar:share-linear" width="20"></iconify-icon> Share</button></div></article><article className="bg-app-card dark:bg-app-darkCard rounded-2xl mb-5 animate-enter overflow-hidden relative border transition-all duration-300 hover:border-sky-300 dark:hover:border-sky-800 border-app-border dark:border-app-darkBorder hover:shadow-[0_0_20px_-12px_rgba(0,0,0,0.1)] dark:hover:shadow-none border-l-[4px] border-sky-500"><div className="px-4 pt-4 pb-2 flex items-center justify-between"><div className="flex gap-3 group cursor-pointer"><div className="relative"><img className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-app-border dark:group-hover:ring-app-darkBorder transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/><div className="absolute -bottom-1 -right-1 w-5 h-5 bg-sky-500 rounded-full border-2 border-white dark:border-app-darkCard flex items-center justify-center shadow-sm"><iconify-icon className="text-white" icon="solar:case-bold" width="10"></iconify-icon></div></div><div><h3 className="font-semibold text-[15px] text-app-text dark:text-app-darkText leading-tight group-hover:text-opacity-80">David Chen</h3><div className="flex items-center gap-1.5 text-[13px] text-app-subtext dark:text-app-darkSubtext mt-0.5"><span className="text-sky-600 dark:text-sky-400 font-medium">Professional</span><span className="opacity-50">•</span><span className="hover:underline">4h</span></div></div></div><button className="text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover p-2 rounded-full transition-colors"><iconify-icon className="" icon="solar:menu-dots-linear" width="20"></iconify-icon></button></div><div className="px-4 pb-2"><p className="text-[15px] text-app-text dark:text-app-darkText leading-relaxed whitespace-pre-line mb-3">We are debating the future of our color palette. Which contrast ratio feels more accessible for financial dashboards?</p><div className="space-y-2 mb-2 mt-3"><div className="relative h-11 rounded-lg border border-sky-500/50 overflow-hidden cursor-pointer group"><div className="absolute top-0 left-0 bottom-0 transition-all duration-700 bg-sky-500/10" style={{width: '64%'}}></div><div className="absolute inset-0 flex items-center justify-between px-4 z-10"><span className="text-[14px] font-medium text-sky-600 dark:text-sky-400">High Contrast (WCAG AAA)</span><span className="text-[14px] font-bold text-app-text dark:text-app-darkText">64%</span></div></div><div className="relative h-11 rounded-lg border border-app-border dark:border-app-darkBorder overflow-hidden cursor-pointer group"><div className="absolute top-0 left-0 bottom-0 transition-all duration-700 bg-app-hover dark:bg-app-darkHover group-hover:opacity-80" style={{width: '36%'}}></div><div className="absolute inset-0 flex items-center justify-between px-4 z-10"><span className="text-[14px] font-medium text-app-text dark:text-app-darkText">Softer Grays (Modern)</span><span className="text-[14px] font-bold text-app-text dark:text-app-darkText">36%</span></div></div><div className="text-xs text-app-subtext dark:text-app-darkSubtext pt-1 text-right font-medium">452 votes • Professional Poll</div></div></div><div className="px-2 py-2 mx-2 mt-2 border-t border-app-border dark:border-app-darkBorder flex items-center justify-between"><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-sky-500 transition-colors" icon="solar:like-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">128</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-sky-500 transition-colors" icon="solar:chat-round-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">45</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-sky-500 transition-colors" icon="solar:share-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">Share</span></button></div></article><article className="bg-app-card dark:bg-app-darkCard rounded-2xl mb-5 animate-enter overflow-hidden relative border transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-800 border-app-border dark:border-app-darkBorder hover:shadow-[0_0_20px_-12px_rgba(0,0,0,0.1)] dark:hover:shadow-none border-l-[4px] border-orange-500"><div className="px-4 pt-4 pb-2 flex items-center justify-between"><div className="flex gap-3 group cursor-pointer"><div className="relative"><img className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-app-border dark:group-hover:ring-app-darkBorder transition-all" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/><div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full border-2 border-white dark:border-app-darkCard flex items-center justify-center shadow-sm"><iconify-icon className="text-white" icon="solar:map-point-bold" width="10"></iconify-icon></div></div><div><h3 className="font-semibold text-[15px] text-app-text dark:text-app-darkText leading-tight group-hover:text-opacity-80">Town Hall</h3><div className="flex items-center gap-1.5 text-[13px] text-app-subtext dark:text-app-darkSubtext mt-0.5"><span className="text-orange-600 dark:text-orange-400 font-medium">Local</span><span className="opacity-50">•</span><span className="hover:underline">3h</span></div></div></div><button className="text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover p-2 rounded-full transition-colors"><iconify-icon className="" icon="solar:menu-dots-linear" width="20"></iconify-icon></button></div><div className="px-4 pb-2"><p className="text-[15px] text-app-text dark:text-app-darkText leading-relaxed whitespace-pre-line mb-3">Roadworks on Old Sheraton Street starting Monday. Plan accordingly!</p><div className="p-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20 rounded-xl flex gap-4 my-2"><div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 text-orange-600 dark:text-orange-400"><iconify-icon className="" icon="solar:bell-bing-bold" width="24"></iconify-icon></div><div><h5 className="text-[15px] font-bold text-orange-900 dark:text-orange-400">Priority Alert: high</h5><p className="text-[14px] text-orange-900/70 dark:text-orange-200/70 mt-1 leading-relaxed">Roadworks on Old Sheraton Street starting Monday. Plan accordingly!</p></div></div></div><div className="px-2 py-2 mx-2 mt-2 border-t border-app-border dark:border-app-darkBorder flex items-center justify-between"><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-orange-500 transition-colors" icon="solar:like-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">0</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-orange-500 transition-colors" icon="solar:chat-round-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">0</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-orange-500 transition-colors" icon="solar:share-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">Share</span></button></div></article><article className="bg-app-card dark:bg-app-darkCard rounded-2xl mb-5 animate-enter overflow-hidden relative border transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-800 border-app-border dark:border-app-darkBorder hover:shadow-[0_0_20px_-12px_rgba(0,0,0,0.1)] dark:hover:shadow-none border-l-[4px] border-emerald-500"><div className="px-4 pt-4 pb-2 flex items-center justify-between"><div className="flex gap-3 group cursor-pointer"><div className="relative"><img className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-app-border dark:group-hover:ring-app-darkBorder transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/><div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white dark:border-app-darkCard flex items-center justify-center shadow-sm"><iconify-icon className="text-white" icon="solar:users-group-rounded-bold" width="10"></iconify-icon></div></div><div><h3 className="font-semibold text-[15px] text-app-text dark:text-app-darkText leading-tight group-hover:text-opacity-80">Ahmed El-Sayed</h3><div className="flex items-center gap-1.5 text-[13px] text-app-subtext dark:text-app-darkSubtext mt-0.5"><span className="text-emerald-600 dark:text-emerald-400 font-medium">Friends</span><span className="opacity-50">•</span><span className="hover:underline">45m</span></div></div></div><button className="text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover p-2 rounded-full transition-colors"><iconify-icon className="" icon="solar:menu-dots-linear" width="20"></iconify-icon></button></div><div className="px-4 pb-2"><p className="text-[15px] text-app-text dark:text-app-darkText leading-relaxed whitespace-pre-line mb-3">Anyone know a good carpenter available this week?</p></div><div className="px-2 py-2 mx-2 mt-2 border-t border-app-border dark:border-app-darkBorder flex items-center justify-between"><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-emerald-500 transition-colors" icon="solar:like-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">12</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-emerald-500 transition-colors" icon="solar:chat-round-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">8</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-emerald-500 transition-colors" icon="solar:share-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">Share</span></button></div></article><article className="bg-app-card dark:bg-app-darkCard rounded-2xl mb-5 animate-enter overflow-hidden relative border transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-800 border-app-border dark:border-app-darkBorder hover:shadow-[0_0_20px_-12px_rgba(0,0,0,0.1)] dark:hover:shadow-none border-l-[4px] border-amber-500"><div className="px-4 pt-4 pb-2 flex items-center justify-between"><div className="flex gap-3 group cursor-pointer"><div className="relative"><img className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-app-border dark:group-hover:ring-app-darkBorder transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/><div className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-500 rounded-full border-2 border-white dark:border-app-darkCard flex items-center justify-center shadow-sm"><iconify-icon className="text-white" icon="solar:pen-new-square-bold" width="10"></iconify-icon></div></div><div><h3 className="font-semibold text-[15px] text-app-text dark:text-app-darkText leading-tight group-hover:text-opacity-80">David Chen</h3><div className="flex items-center gap-1.5 text-[13px] text-app-subtext dark:text-app-darkSubtext mt-0.5"><span className="text-amber-600 dark:text-amber-400 font-medium">Thoughts</span><span className="opacity-50">•</span><span className="hover:underline">4h</span></div></div></div><button className="text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover p-2 rounded-full transition-colors"><iconify-icon className="" icon="solar:menu-dots-linear" width="20"></iconify-icon></button></div><div className="px-4 pb-2"><p className="text-[15px] text-app-text dark:text-app-darkText leading-relaxed whitespace-pre-line mb-3">Hot take: CSS Grid is overrated for simple layouts. Flexbox is still king. 👑</p><div className="relative py-8 px-8 bg-app-bg dark:bg-app-darkBg rounded-xl my-2 mx-2 border border-app-border dark:border-app-darkBorder"><iconify-icon className="absolute top-4 left-4 text-amber-200 dark:text-amber-900" icon="solar:quote-up-square-bold" width="40"></iconify-icon><p className="text-lg italic font-medium text-app-text dark:text-app-darkText text-center relative z-10 leading-relaxed">Hot take: CSS Grid is overrated for simple layouts. Flexbox is still king. 👑</p><div className="text-center mt-4 text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">— Junior Dev</div></div></div><div className="px-2 py-2 mx-2 mt-2 border-t border-app-border dark:border-app-darkBorder flex items-center justify-between"><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-amber-500 transition-colors" icon="solar:like-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">12</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-amber-500 transition-colors" icon="solar:chat-round-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">0</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-amber-500 transition-colors" icon="solar:share-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">Share</span></button></div></article><article className="bg-app-card dark:bg-app-darkCard rounded-2xl mb-5 animate-enter overflow-hidden relative border transition-all duration-300 hover:border-sky-300 dark:hover:border-sky-800 border-app-border dark:border-app-darkBorder hover:shadow-[0_0_20px_-12px_rgba(0,0,0,0.1)] dark:hover:shadow-none border-l-[4px] border-sky-500"><div className="px-4 pt-4 pb-2 flex items-center justify-between"><div className="flex gap-3 group cursor-pointer"><div className="relative"><img className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-app-border dark:group-hover:ring-app-darkBorder transition-all" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/><div className="absolute -bottom-1 -right-1 w-5 h-5 bg-sky-500 rounded-full border-2 border-white dark:border-app-darkCard flex items-center justify-center shadow-sm"><iconify-icon className="text-white" icon="solar:case-bold" width="10"></iconify-icon></div></div><div><h3 className="font-semibold text-[15px] text-app-text dark:text-app-darkText leading-tight group-hover:text-opacity-80">Sarah Jenkins</h3><div className="flex items-center gap-1.5 text-[13px] text-app-subtext dark:text-app-darkSubtext mt-0.5"><span className="text-sky-600 dark:text-sky-400 font-medium">Professional</span><span className="opacity-50">•</span><span className="hover:underline">2h</span></div></div></div><button className="text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover p-2 rounded-full transition-colors"><iconify-icon className="" icon="solar:menu-dots-linear" width="20"></iconify-icon></button></div><div className="px-4 pb-2"><p className="text-[15px] text-app-text dark:text-app-darkText leading-relaxed whitespace-pre-line mb-3">Just published our Q4 analysis on logistics bottlenecks. Key takeaway: Automation is faster than re-routing.</p><div className="border border-app-border dark:border-app-darkBorder rounded-xl overflow-hidden cursor-pointer group hover:border-app-subtext/30 transition-colors"><div className="h-48 w-full overflow-hidden"><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/></div><div className="p-4 bg-app-hover/50 dark:bg-app-darkHover/30"><div className="text-[12px] text-sky-600 dark:text-sky-400 font-bold uppercase tracking-wide mb-1">logistics.co</div><h4 className="font-bold text-app-text dark:text-app-darkText leading-tight text-[16px] mb-1 group-hover:text-blue-500 transition-colors">Logistics Weekly: The 2024 Report</h4><p className="text-[13px] text-app-subtext dark:text-app-darkSubtext line-clamp-1">5 min read • Click to read full analysis...</p></div></div></div><div className="px-2 py-2 mx-2 mt-2 border-t border-app-border dark:border-app-darkBorder flex items-center justify-between"><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-sky-500 transition-colors" icon="solar:like-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">45</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-sky-500 transition-colors" icon="solar:chat-round-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">12</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-sky-500 transition-colors" icon="solar:share-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">Share</span></button></div></article><article className="bg-app-card dark:bg-app-darkCard rounded-2xl mb-5 animate-enter overflow-hidden relative border transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-800 border-app-border dark:border-app-darkBorder hover:shadow-[0_0_20px_-12px_rgba(0,0,0,0.1)] dark:hover:shadow-none border-l-[4px] border-amber-500"><div className="px-4 pt-4 pb-2 flex items-center justify-between"><div className="flex gap-3 group cursor-pointer"><div className="relative"><img className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-app-border dark:group-hover:ring-app-darkBorder transition-all" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/><div className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-500 rounded-full border-2 border-white dark:border-app-darkCard flex items-center justify-center shadow-sm"><iconify-icon className="text-white" icon="solar:pen-new-square-bold" width="10"></iconify-icon></div></div><div><h3 className="font-semibold text-[15px] text-app-text dark:text-app-darkText leading-tight group-hover:text-opacity-80">Tim A.</h3><div className="flex items-center gap-1.5 text-[13px] text-app-subtext dark:text-app-darkSubtext mt-0.5"><span className="text-amber-600 dark:text-amber-400 font-medium">Thoughts</span><span className="opacity-50">•</span><span className="hover:underline">12m</span></div></div></div><button className="text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover p-2 rounded-full transition-colors"><iconify-icon className="" icon="solar:menu-dots-linear" width="20"></iconify-icon></button></div><div className="px-4 pb-2"><p className="text-[15px] text-app-text dark:text-app-darkText leading-relaxed whitespace-pre-line mb-3">Privacy isn't about hiding. It's about being able to choose which 'you' to show at any given moment. #OasisLife</p></div><div className="px-2 py-2 mx-2 mt-2 border-t border-app-border dark:border-app-darkBorder flex items-center justify-between"><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-amber-500 transition-colors" icon="solar:like-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">45</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-amber-500 transition-colors" icon="solar:chat-round-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">0</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-amber-500 transition-colors" icon="solar:share-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">Share</span></button></div></article><article className="bg-app-card dark:bg-app-darkCard rounded-2xl mb-5 animate-enter overflow-hidden relative border transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-800 border-app-border dark:border-app-darkBorder hover:shadow-[0_0_20px_-12px_rgba(0,0,0,0.1)] dark:hover:shadow-none border-l-[4px] border-orange-500"><div className="px-4 pt-4 pb-2 flex items-center justify-between"><div className="flex gap-3 group cursor-pointer"><div className="relative"><img className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-app-border dark:group-hover:ring-app-darkBorder transition-all" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/><div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full border-2 border-white dark:border-app-darkCard flex items-center justify-center shadow-sm"><iconify-icon className="text-white" icon="solar:map-point-bold" width="10"></iconify-icon></div></div><div><h3 className="font-semibold text-[15px] text-app-text dark:text-app-darkText leading-tight group-hover:text-opacity-80">Tim A.</h3><div className="flex items-center gap-1.5 text-[13px] text-app-subtext dark:text-app-darkSubtext mt-0.5"><span className="text-orange-600 dark:text-orange-400 font-medium">Local</span><span className="opacity-50">•</span><span className="hover:underline">5h</span></div></div></div><button className="text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover p-2 rounded-full transition-colors"><iconify-icon className="" icon="solar:menu-dots-linear" width="20"></iconify-icon></button></div><div className="px-4 pb-2"><p className="text-[15px] text-app-text dark:text-app-darkText leading-relaxed whitespace-pre-line mb-3">Selling my vintage Eames chair replica. Moving out sale.</p><div className="mt-2 mb-2 relative group cursor-pointer rounded-xl overflow-hidden border border-app-border dark:border-app-darkBorder"><img className="w-full h-[350px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/><div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg flex justify-between items-center"><div><div className="text-2xl font-bold text-app-text dark:text-white mb-0.5">$250</div><div className="text-app-subtext dark:text-gray-300 text-sm font-medium">Downtown • Like New</div></div><button className="bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-md">Contact</button></div></div></div><div className="px-2 py-2 mx-2 mt-2 border-t border-app-border dark:border-app-darkBorder flex items-center justify-between"><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-orange-500 transition-colors" icon="solar:like-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">4</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-orange-500 transition-colors" icon="solar:chat-round-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">0</span></button><button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-app-hover dark:hover:bg-app-darkHover rounded-lg transition-colors text-app-subtext dark:text-app-darkSubtext font-medium text-[14px] group"><iconify-icon className="group-hover:text-orange-500 transition-colors" icon="solar:share-linear" width="20"></iconify-icon><span className="group-hover:text-app-text dark:group-hover:text-app-darkText transition-colors">Share</span></button></div></article><article className="bg-app-card dark:bg-app-darkCard rounded-2xl mb-5 animate-enter overflow-hidden relative border transition-all duration-300 hover:border-violet-300 dark:hover:border-violet-800 border-app-border dark:border-app-darkBorder hover:shadow-[0_0_20px_-12px_rgba(0,0,0,0.1)] dark:hover:shadow-none border-l-[4px] border-violet-500"><div className="px-4 py-3 flex items-center justify-between"><div className="flex gap-3"><div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-violet-400 to-fuchsia-600"><img className="w-full h-full rounded-full border-2 border-app-card dark:border-app-darkCard object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/></div><div><h3 className="font-semibold text-[15px] text-app-text dark:text-app-darkText leading-tight">TechTakes</h3><div className="text-xs text-app-subtext dark:text-app-darkSubtext flex items-center gap-1"><span>Suggested</span> • <span></span></div></div></div><div className="flex gap-2"><button className="text-violet-600 dark:text-violet-400 font-semibold text-sm hover:bg-violet-50 dark:hover:bg-violet-900/20 px-3 py-1.5 rounded-lg transition-colors">Follow</button><button className="text-app-subtext dark:text-app-darkSubtext hover:bg-app-hover dark:hover:bg-app-darkHover p-2 rounded-full"><iconify-icon className="" icon="solar:menu-dots-linear" width="20"></iconify-icon></button></div></div><div className="px-4 pb-3 text-[15px] text-app-text dark:text-app-darkText font-medium">Why local-first software matters.</div><div className="relative w-full aspect-[4/5] bg-black"><img className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/><div className="absolute inset-0 flex items-center justify-center"><div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform shadow-2xl"><iconify-icon className="ml-1" icon="solar:play-bold" width="32"></iconify-icon></div></div><div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white"><div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium"><iconify-icon className="inline mr-2 opacity-70" icon="solar:eye-bold" width="20"></iconify-icon>8.1k</div></div></div><div className="px-4 py-3 flex justify-between text-app-subtext dark:text-app-darkSubtext text-sm"><div className="flex items-center gap-6"><button className="flex items-center gap-2 hover:text-violet-500 transition-colors"><iconify-icon className="text-violet-500" icon="solar:like-bold" width="20"></iconify-icon> 890</button><button className="flex items-center gap-2 hover:text-app-text dark:hover:text-app-darkText transition-colors"><iconify-icon className="" icon="solar:chat-round-linear" width="20"></iconify-icon> 12</button></div><button className="flex items-center gap-2 hover:text-app-text dark:hover:text-app-darkText transition-colors"><iconify-icon className="" icon="solar:share-linear" width="20"></iconify-icon> Share</button></div></article></div><div className="py-12 flex flex-col items-center text-app-subtext dark:text-app-darkSubtext opacity-50"><iconify-icon className="mb-2" icon="solar:check-read-linear" width="32"></iconify-icon><p className="text-sm">You've reached the end</p></div></div></main><div className="hidden xl:flex flex-col w-[300px] p-6 h-full overflow-y-auto custom-scrollbar border-l border-app-border dark:border-app-darkBorder bg-app-bg dark:bg-app-darkBg"><div className="mb-6"><div className="flex items-center justify-between mb-3"><h3 className="text-[13px] font-bold text-app-subtext dark:text-app-darkSubtext uppercase tracking-wider">Requests</h3></div><div className="bg-app-card dark:bg-app-darkCard p-3 rounded-2xl border border-app-border dark:border-app-darkBorder shadow-sm"><div className="flex items-center gap-3 mb-3"><img className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/><div className="flex-1 min-w-0"><div className="text-sm font-semibold text-app-text dark:text-app-darkText truncate">Youssef AbuHamda</div><div className="text-xs text-app-subtext">3 mutuals</div></div></div><div className="flex gap-2"><button className="flex-1 bg-app-text dark:bg-white text-app-bg dark:text-black font-semibold text-xs py-2 rounded-lg hover:opacity-90">Confirm</button><button className="flex-1 bg-app-hover dark:bg-app-darkHover text-app-text dark:text-app-darkText font-semibold text-xs py-2 rounded-lg">Ignore</button></div></div></div><div className="mb-6"><div className="flex items-center justify-between mb-3"><h3 className="text-[13px] font-bold text-app-subtext dark:text-app-darkSubtext uppercase tracking-wider">Contacts</h3></div><div className="space-y-1"><div className="flex items-center gap-3 p-2 rounded-xl hover:bg-app-hover dark:hover:bg-app-darkHover cursor-pointer transition-colors group"><div className="relative"><img className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/><div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-app-bg dark:border-app-darkBg"></div></div><span className="text-[14px] font-medium text-app-subtext group-hover:text-app-text dark:group-hover:text-app-darkText">Bassant Medhat</span></div><div className="flex items-center gap-3 p-2 rounded-xl hover:bg-app-hover dark:hover:bg-app-darkHover cursor-pointer transition-colors group"><div className="relative"><img className="w-8 h-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/><div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-app-bg dark:border-app-darkBg"></div></div><span className="text-[14px] font-medium text-app-subtext group-hover:text-app-text dark:group-hover:text-app-darkText">Kristina Belykh</span></div><div className="flex items-center gap-3 p-2 rounded-xl hover:bg-app-hover dark:hover:bg-app-darkHover cursor-pointer transition-colors group"><div className="relative"><img className="w-8 h-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/><div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-app-bg dark:border-app-darkBg"></div></div><span className="text-[14px] font-medium text-app-subtext group-hover:text-app-text dark:group-hover:text-app-darkText">Marianne Wesselink</span></div><div className="flex items-center gap-3 p-2 rounded-xl hover:bg-app-hover dark:hover:bg-app-darkHover cursor-pointer transition-colors group"><div className="relative"><img className="w-8 h-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/></div><span className="text-[14px] font-medium text-app-subtext group-hover:text-app-text dark:group-hover:text-app-darkText">Майя Ан</span></div><div className="flex items-center gap-3 p-2 rounded-xl hover:bg-app-hover dark:hover:bg-app-darkHover cursor-pointer transition-colors group"><div className="relative"><img className="w-8 h-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/></div><span className="text-[14px] font-medium text-app-subtext group-hover:text-app-text dark:group-hover:text-app-darkText">Etienne van Geleuken</span></div><div className="flex items-center gap-3 p-2 rounded-xl hover:bg-app-hover dark:hover:bg-app-darkHover cursor-pointer transition-colors group"><div className="relative"><img className="w-8 h-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/><div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-app-bg dark:border-app-darkBg"></div></div><span className="text-[14px] font-medium text-app-subtext group-hover:text-app-text dark:group-hover:text-app-darkText">Roc Kaley</span></div></div></div></div></div></div></div>


    </>
  );
}
