import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



const data = [
  {
    group: "First Contact",
    items: [
      {
        name: "Onboarding / Welcome",
        sub: "First launch, FTUX card selection",
        e: 55, g: 20, s: 15, a: 10,
        dominant: "eth",
        detail: {
          e: "Atmospheric zerogel gradient as full background. Soft ambient glow sets the tone before any interaction. The world feels luminous from the first frame.",
          g: "Card containers with weight — radius-xl, subtle shadow. Solid progress indicator. The card itself is a tangible object on atmospheric light.",
          s: "PP Editorial Old for the course title. Clear CTA hierarchy. One primary action per screen. Body text readable at arm's length.",
          a: "Minimal — a gentle breathing pulse on the selected card. The system is introducing itself quietly, not performing."
        }
      },
      {
        name: "Empty State",
        sub: "No sims started, no crew formed yet",
        e: 40, g: 25, s: 25, a: 10,
        dominant: "eth",
        detail: {
          e: "Gentle radial gradient centered on the page. Warm, inviting atmosphere that suggests potential rather than absence.",
          g: "A single zerogel figure or abstract form as focal point — solid enough to anchor the eye, translucent enough to feel atmospheric.",
          s: "Clear prompt copy that tells the member exactly what to do next. One CTA. No ambiguity about the next step.",
          a: "The focal illustration breathes very subtly — the system is alive even when empty. Resting glow, not achievement glow."
        }
      }
    ]
  },
  {
    group: "Core Product",
    items: [
      {
        name: "Home / Workshop",
        sub: "Main hub, active sims, crew status",
        e: 15, g: 45, s: 30, a: 10,
        dominant: "gro",
        detail: {
          e: "Accent gradient on header or hero stat card only. One zerogel moment per screen — never competing with the content grid.",
          g: "Solid cards with inner glow resting state. Structured grid layout. Clear spatial hierarchy between card groups using spacing tokens.",
          s: "Google Sans for all labels and metadata. Supply Mono for level numbers and system status. Scannable, dense, functional.",
          a: "Active sim cards breathe with glow-pulse. Cards at rest are static. The difference between breathing and still tells you what needs attention."
        }
      },
      {
        name: "Sim Briefing",
        sub: "Pre-sim screen, mission context",
        e: 40, g: 30, s: 20, a: 10,
        dominant: "eth",
        detail: {
          e: "Void background with atmospheric zerogel glow — this is a cinematic moment. The gradient floats behind content, creating mood without competing.",
          g: "Stat grid with solid borders. The Signal CTA at the bottom is weighty and confident. Numbers and objectives feel carved.",
          s: "Supply Mono for the mission label. PP Editorial Old for the sim title. Stat grid is precise and scannable. One CTA only.",
          a: "Low — this is a stillness moment. The glow is present but not breathing. Tension before action. The system is waiting for you."
        }
      },
      {
        name: "Active Sim / Focus",
        sub: "Sim in progress, scenario interaction",
        e: 5, g: 35, s: 50, a: 10,
        dominant: "str",
        detail: {
          e: "Almost none. A barely perceptible warm tint in the background. The UI recedes like a great game HUD — atmosphere comes from content, not decoration.",
          g: "Solid interactive elements. NPC cards, response options, and objective tracker all have physical weight. Nothing floats here.",
          s: "Dominant — readable objective counter, clear NPC dialogue, sharp response buttons. Every pixel serves function. No decorative elements.",
          a: "Subtle — the objective counter updates with micro-animation. The NPC speaking indicator pulses gently. Focus mode means the system stays quiet."
        }
      },
      {
        name: "Map / Navigation",
        sub: "Journey map, destination nodes",
        e: 30, g: 35, s: 15, a: 20,
        dominant: "gro",
        detail: {
          e: "Unlocked destination nodes have aerogel gradient fill with outer glow. The map background has atmospheric depth — darker at edges, lighter at center.",
          g: "Nodes are solid interactive objects with clear hit targets. Locked nodes are Paper Fold fill — flat, muted, physically present but inactive.",
          s: "Destination labels in Supply Mono. Current position clearly marked. Path connections are clean lines, not decorative.",
          a: "High for this context — nodes illuminate as you level. The map literally changes based on who's looking at it. Unlocked nodes glow, locked ones don't."
        }
      }
    ]
  },
  {
    group: "Achievement & Progress",
    items: [
      {
        name: "Level Up",
        sub: "The signature moment — 2.5s sequence",
        e: 80, g: 5, s: 5, a: 10,
        dominant: "eth",
        detail: {
          e: "Maximum — the whole screen breathes. Full-bleed luminous bloom expanding from center. New areas of the map illuminate. Color temperature shifts globally.",
          g: "Almost none. The level number itself is the only solid anchor — Supply Mono, large, confident. Everything else is light.",
          s: "Level number and one line of text only. Nothing else competes. This is the one moment of dramatic animation in the entire system.",
          a: "Peak alive — the glow is at achievement intensity. The entire interface shifts its color temperature, glow intensity, and map complexity. The system knows you."
        }
      },
      {
        name: "Session Complete",
        sub: "Post-sim success, proof created",
        e: 60, g: 20, s: 15, a: 5,
        dominant: "eth",
        detail: {
          e: "Radial mint glow bloom as background — the screen became luminous. No checkmark icons. The light is the confirmation. Transition from paper to glow is the reward.",
          g: "Avatar stack of session participants. Void pill CTA to continue. These solid elements anchor the atmospheric celebration.",
          s: "PP Editorial Old for the headline — this is an emotional moment. Google Sans for subtitle. One CTA. Minimal information, maximum feeling.",
          a: "Low — this is a resting moment after intensity. The glow is present but static. The breathing happens during the transition in, then settles."
        }
      },
      {
        name: "Crew Ship",
        sub: "Crew completes a major project",
        e: 65, g: 20, s: 10, a: 5,
        dominant: "eth",
        detail: {
          e: "Zerogel Dream gradient (#D4C8FF → #9B88F0) as atmosphere — this is a community moment, so it uses the belonging color. Glow bloom behind the crew.",
          g: "Crew card with all member avatars at active glow state. The proof card showing what was built — solid, tangible, earned.",
          s: "PP Editorial Old for the project title. Crew name in Supply Mono. Minimal copy. The work speaks.",
          a: "All crew member avatars glow with active inner glow — shared achievement. The proof card has achievement glow that settles back to active after 2-3 seconds."
        }
      },
      {
        name: "Locked / Earned State",
        sub: "Content not yet accessible",
        e: 0, g: 60, s: 30, a: 10,
        dominant: "gro",
        detail: {
          e: "Zero. The absence of ethereal IS the design. No glow, no gradient, no atmosphere. The locked state is defined by what's missing.",
          g: "Dominant — Paper Fold fill, flat surfaces, muted opacity. The element is physically present but inert. You can see the shape of what you'll earn.",
          s: "Level requirement label in Supply Mono. Clear, factual. 'Unlocks at Lvl 08' — no decoration, no softening.",
          a: "The element is deliberately not alive. Static, unresponsive. The contrast with breathing elements around it makes the locked state feel intentional."
        }
      }
    ]
  },
  {
    group: "Communication & System",
    items: [
      {
        name: "Notification / Nudge",
        sub: "'The yard misses you' — in-app or push",
        e: 20, g: 40, s: 30, a: 10,
        dominant: "gro",
        detail: {
          e: "Soft gradient accent on the icon chip only. The notification itself doesn't glow — it's a grounded message, not a celebration.",
          g: "Void background toast with solid presence. Icon dots use semantic colors — Signal for success, Burn for error. Shadow-xl for elevation.",
          s: "Concise copy — subject line + one action. Internal voice: warm, personal, never corporate. Google Sans, readable at a glance.",
          a: "Entry animation only — slides in with ease-out, then sits. No ongoing pulse. Notifications are moments, not states."
        }
      },
      {
        name: "Error / Alert",
        sub: "Failed action, destructive confirmation",
        e: 0, g: 55, s: 40, a: 5,
        dominant: "gro",
        detail: {
          e: "None. Atmosphere feels dismissive when something breaks. Errors are grounded, serious, and clear.",
          g: "Solid Burn-tinted container. Heavy visual weight communicates seriousness. Modal with Void backdrop at 40% + blur.",
          s: "Precise copy is critical — what went wrong and exactly what to do. Destructive CTA in Burn, always paired with a secondary cancel option.",
          a: "Almost none. Static, serious. The only movement is the modal entrance animation (300ms ease-out), then everything holds still."
        }
      },
      {
        name: "Loading / Transition",
        sub: "Between screens, processing state",
        e: 50, g: 10, s: 20, a: 20,
        dominant: "eth",
        detail: {
          e: "Animated gradient sweep or soft pulsing glow. The atmospheric layer becomes the content while structure loads. Skeleton loaders use Paper Shadow → Paper Fold sweep.",
          g: "Minimal — structural skeleton shapes hint at what's coming but don't fully form yet.",
          s: "Short status copy in Supply Mono. 'Building your sim...' — functional, not decorative.",
          a: "High — the loading state breathes. The 1.8s skeleton sweep cycle and glow pulse signal that the system is alive and working, not frozen."
        }
      },
      {
        name: "Settings / Utility",
        sub: "Preferences, account, configuration",
        e: 0, g: 25, s: 70, a: 5,
        dominant: "str",
        detail: {
          e: "None. Atmosphere is out of place in utility screens. Paper background, clean and flat.",
          g: "Solid dividers, structured rows, clear section blocks. Toggle switches are the most tactile element.",
          s: "Dominant — maximum legibility, information density, scannable hierarchy. Every element serves a function.",
          a: "Only on toggles — spring easing on switch. Everything else is static. This is the machine underneath, not the art on top."
        }
      }
    ]
  }
];

const labels = { eth: "Ethereal", gro: "Grounded", str: "Structured", ali: "Alive" };
const badgeClasses = { eth: "badge-eth", gro: "badge-gro", str: "badge-str", ali: "badge-ali" };
const segClasses = { eth: "s-eth", gro: "s-gro", str: "s-str", ali: "s-ali" };
const dcClasses = { eth: "dc-eth", gro: "dc-gro", str: "dc-str", ali: "dc-ali" };
const keys = ["eth", "gro", "str", "ali"];

const content = document.getElementById('content');

data.forEach((section, si) => {
  const group = document.createElement('div');
  group.className = 'section-group';
  group.innerHTML = `<div class="section-title">${section.group}</div>`;

  section.items.forEach((item, ii) => {
    const row = document.createElement('div');
    row.className = 'row';
    const vals = { eth: item.e, gro: item.g, str: item.s, ali: item.a };

    row.innerHTML = `
      <div class="row-main">
        <div>
          <div class="row-name">
            ${item.name}
            <span class="chevron">▾</span>
          </div>
          <div class="row-sub">${item.sub}</div>
        </div>
        <div class="bar-container">
          <div class="bar-track">
            ${keys.map(k => `<div class="bar-seg ${segClasses[k]}" style="width:${vals[k]}%"></div>`).join('')}
          </div>
          <div class="bar-numbers">
            ${keys.map(k => `
              <div class="bar-num">
                <div class="bar-num-dot" style="background: var(--c-${k === 'eth' ? 'ethereal' : k === 'gro' ? 'grounded' : k === 'str' ? 'structured' : 'alive'})"></div>
                <strong>${vals[k]}</strong>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="dominant-area">
          <span class="badge ${badgeClasses[item.dominant]}">${labels[item.dominant]}</span>
        </div>
      </div>
      <div class="detail-panel">
        <div class="detail-grid">
          ${keys.map(k => `
            <div class="detail-card">
              <div class="detail-card-header">
                <span class="detail-card-label ${dcClasses[k]}">${labels[k]}</span>
                <span class="detail-card-pct ${dcClasses[k]}">${vals[k]}</span>
              </div>
              <div class="detail-card-desc">${item.detail[k === 'eth' ? 'e' : k === 'gro' ? 'g' : k === 'str' ? 's' : 'a']}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    row.querySelector('.row-main').addEventListener('click', () => {
      row.classList.toggle('open');
    });

    group.appendChild(row);
  });

  content.appendChild(group);
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="header">
<div className="header-meta">Zerogel System · Internal Reference</div>
<h1>Design Ratio Framework</h1>
<p className="header-desc">Every screen in Zero balances four forces. This framework defines the ratio for each context — so designers make consistent decisions without guessing. Click any row to expand.</p>
</div>
<div className="legend">
<div className="legend-item">
<div className="legend-dot" style={{background: 'var(--c-ethereal)'}}></div>
<div>
<div className="legend-label">Ethereal</div>
<div className="legend-sub">Gradients, glow, atmospheric light</div>
</div>
</div>
<div className="legend-item">
<div className="legend-dot" style={{background: 'var(--c-grounded)'}}></div>
<div>
<div className="legend-label">Grounded</div>
<div className="legend-sub">Solid fills, depth, tactile weight</div>
</div>
</div>
<div className="legend-item">
<div className="legend-dot" style={{background: 'var(--c-structured)'}}></div>
<div>
<div className="legend-label">Structured</div>
<div className="legend-sub">Type hierarchy, clean iconography</div>
</div>
</div>
<div className="legend-item">
<div className="legend-dot" style={{background: 'var(--c-alive)'}}></div>
<div>
<div className="legend-label">Alive</div>
<div className="legend-sub">Responsive, breathing, state-aware</div>
</div>
</div>
</div>
<div className="content" id="content"></div>
<div className="footer">
<div className="footer-inner">
<div className="footer-note">
<strong>How to read:</strong> Ratios are guidelines, not rules. They describe the dominant feeling of a context — where a designer's energy should go first. When two options feel equal, the dominant axis breaks the tie. The Alive axis operates independently — a screen can be high-Ethereal and high-Alive (celebration) or high-Grounded and low-Alive (error state).
    </div>
<div className="footer-brand">Zero · Zerogel Design System</div>
</div>
</div>


    </>
  );
}
