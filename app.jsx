/* ============================================
   Roman Dubensky — Portfolio
   React + Babel inline
   ============================================ */

const { useState, useEffect, useRef, useLayoutEffect } = React;

/* ============= Data ============= */

const CASES = [
  {
    id: "political-party",
    num: "01",
    title: "Political Party App",
    titleBright: "Political",
    titleDim: "Party App",
    subtitle: "Mobile platform for an opposition party",
    year: "2024",
    role: "UI/UX Designer",
    scope: "Mobile · iOS & Android · B2C",
    duration: "In development",
    tags: ["Mobile", "Civic", "App"],
    pills: ["Mobile App", "Role-based Access", "QR Onboarding", "Internal Messenger", "AI Agent"],
    brief: "An opposition party needed one mobile platform for events, referrals, internal chat and policy Q&A — with sensitive leadership content invisible to new activists.",
    accent: "oklch(0.85 0.18 130)",
    cover: "warm",
    overview:
      "A mobile platform that unifies event management, member onboarding via QR referrals, internal messaging and an AI agent into one secure app — with role-based access for Leadership, Members and New Activists. Everything had to live in one app, and the access model had to be invisible to end users.",
    challenge:
      "Before this app, the party had no unified digital infrastructure. Events were scattered across Telegram and word of mouth, there was no way to track who recruited whom, and internal communications had no middle ground — anyone could see everything, or nothing. The system had to feel like one product, not three.",
    approach: [
      "Stakeholder interviews with leadership to map security needs, recruiting goals, and onboarding vision.",
      "Defined three user roles and the content each should see — IA built around role-filtered visibility, not lock screens.",
      "Mapped flows and screens for events, QR onboarding, messenger and the AI agent, validated with the product owner.",
      "Hi-fidelity UI and an interactive prototype in Figma covering all four core flows, ready for engineering.",
    ],
    outcome: [
      { stat: "3", label: "User roles" },
      { stat: "4", label: "Core modules" },
      { stat: "1", label: "Unified app" },
      { stat: "Full", label: "Research → UI" },
    ],
    heroImage: "assets/political-party/hero-mockup.png",
    stats: [
      { value: "Full cycle", label: "Research → UI" },
      { value: "3", label: "User roles" },
      { value: "4", label: "Core modules" },
      { value: "Real", label: "Production project" },
    ],
    sections: {
      overviewTitle: "One app for the entire party",
      overviewBody:
        "The client — an opposition political party — needed a mobile platform to coordinate members, manage events, onboard new activists, and maintain internal communications. The key requirement: everything had to live in one app, with sensitive leadership data protected by role-based access.",
      roles: [
        {
          num: "01",
          title: "Leadership",
          desc: "Full access to all modules, internal analytics, sensitive communications, and member management.",
          access: "Full access",
          level: "full",
        },
        {
          num: "02",
          title: "Members",
          desc: "Established party members. Access to events, messenger, news feed, and AI agent.",
          access: "Standard access",
          level: "mid",
        },
        {
          num: "03",
          title: "New Activists",
          desc: "Recently joined via referral. Limited visibility — cannot access sensitive leadership content until trusted.",
          access: "Limited access",
          level: "limited",
        },
      ],
      problemTitle: "Scattered tools, no accountability",
      problemBody:
        "Before this app, the party had no unified digital infrastructure. Events were announced through scattered channels. New activists joined with no clear onboarding path, and there was no way to track who brought whom into the organization.",
      challenges: [
        {
          title: "No reliable event notifications",
          desc: "Members missed events because announcements were spread across Telegram, email, and word of mouth with no central source of truth.",
          icon: "bell",
        },
        {
          title: "No referral accountability",
          desc: "New activists joined with no traceable path — it was impossible to know who recruited whom or reward active members for growing the network.",
          icon: "users",
        },
        {
          title: "No access control",
          desc: "Internal communications had no middle ground — anyone could see everything, or nothing at all.",
          icon: "lock",
        },
      ],
      constraint:
        "The access control system had to be invisible to end users — new activists should not feel excluded, but sensitive leadership content simply shouldn't appear in their interface.",
      researchTitle: "Understanding three different users",
      researchBody: [
        "The challenge with this project was that there wasn't one user — there were three, with completely different needs, mental models, and levels of trust. I mapped each user type's core jobs-to-be-done and identified where their journeys overlapped and where they diverged.",
        "This directly shaped the information architecture: a shared shell with role-filtered content, rather than separate apps or obvious 'blocked' screens.",
      ],
      insight:
        "Access control should be architectural, not visual. New members shouldn't encounter locked doors — they simply shouldn't see doors that don't belong to them yet.",
      processTitle: "From research to final UI",
      process: [
        { num: "01", title: "Stakeholder interviews", desc: "Talked with party leadership to understand pain points, security requirements, and the vision for member onboarding." },
        { num: "02", title: "User role mapping", desc: "Defined three distinct user types, their access levels, and the content each role should see. This became the foundation for all IA decisions." },
        { num: "03", title: "Information architecture & user flows", desc: "Mapped all screens and navigation paths for each role. Special attention to the QR onboarding flow and the AI agent interaction model." },
        { num: "04", title: "Wireframes", desc: "Low and mid-fidelity wireframes for all core modules, reviewed with the product owner before moving to visual design." },
        { num: "05", title: "UI design & prototype", desc: "Hi-fidelity screens in Figma with an interactive prototype covering the four main flows: events, QR onboarding, messenger, and AI chat." },
      ],
      designTitle: "Four modules, one coherent system",
      features: [
        { kind: "core", title: "Event notifications", desc: "A centralized events feed with push notifications replaced fragmented Telegram announcements. Members can RSVP, see location, and add events to their calendar." },
        { kind: "unique", title: "QR referral system", desc: "Every member gets a personal QR code. When scanned during onboarding, the system automatically links the new activist to their recruiter — creating a traceable, accountable growth network." },
        { kind: "core", title: "Internal messenger", desc: "Role-filtered group chats and direct messages. Leadership channels are invisible to new activists — not locked, simply absent from their navigation." },
        { kind: "unique", title: "AI agent", desc: "A chat interface trained on the party's official positions and policy documents. Members get instant, accurate answers without waiting for a human response." },
      ],
      modulesTitle: "Modules in detail",
      modulesIntro: "Seven surfaces, one shared shell — content filtered by role, not gated behind locks.",
      showcase: {
        heroLabel: "Final design — key screens",
        heroPhones: [
          "assets/political-party/05-calendar-day.png",
          "assets/political-party/13-ai-assistant.png",
          "assets/political-party/04-news-article.png",
          "assets/political-party/14-account.png",
        ],
        tiles: [
          {
            label: "Events feed",
            phones: [
              "assets/political-party-en/05-calendar-day.png",
              "assets/political-party-en/07-calendar-month.png",
            ],
          },
          {
            label: "QR onboarding",
            phones: [
              "assets/political-party-en/02-join-qr.png",
              "assets/political-party-en/14-account.png",
            ],
          },
          {
            label: "Messenger",
            phones: [
              "assets/political-party-en/09-chats-list.png",
              "assets/political-party-en/10-chat.png",
            ],
          },
          {
            label: "AI agent chat",
            phones: [
              "assets/political-party-en/13-ai-assistant.png",
              "assets/political-party-en/03-news-feed.png",
            ],
          },
        ],
      },
      statusTitle: "In active development",
      statusNote: "The app is currently in active development. The design has been approved and handed off to the development team. User feedback will be collected post-launch to inform the next iteration.",
      results: [
        { title: "Unified communication", desc: "All party communication consolidated into one platform.", icon: "phone" },
        { title: "Traceable growth", desc: "Every new member is linked to their recruiter via QR — full accountability chain.", icon: "upload" },
        { title: "Invisible access control", desc: "Sensitive content is architecturally hidden — new members see a full, useful app.", icon: "lock" },
        { title: "AI-powered Q&A", desc: "Members get instant, policy-accurate answers — reducing load on leadership.", icon: "help" },
      ],
      reflectionTitle: "What I'd do differently",
      reflectionBody: [
        "The most complex part of this project wasn't the visual design — it was designing a system that works coherently across three fundamentally different user types. In hindsight, I would have pushed for usability testing with actual activists before finalizing the onboarding flow, particularly the QR code experience.",
        "The AI agent module was also a first for me. Given more time, I would have explored conversation design patterns specific to civic and policy contexts.",
      ],
      reflectionQuote:
        "Designing for a politically sensitive context adds a layer of responsibility that sharpens every decision — not just about usability, but about trust, transparency, and what information people deserve to see.",
    },
    heroScreens: [
      "assets/political-party/05-calendar-day.png",
      "assets/political-party/13-ai-assistant.png",
      "assets/political-party/04-news-article.png",
    ],
    screenGroups: [
      {
        label: "Authentication",
        note: "Login plus an in-flow QR referral form so every new activist is tied to the member who recruited them.",
        screens: [
          "assets/political-party/01-login.png",
          "assets/political-party/02-join-qr.png",
        ],
      },
      {
        label: "News feed",
        note: "A single source of truth replaces fragmented Telegram channels — cards in the feed open into full articles with image galleries.",
        screens: [
          "assets/political-party/03-news-feed.png",
          "assets/political-party/04-news-article.png",
        ],
      },
      {
        label: "Events calendar",
        note: "Three views — day, week, month — with map view and an event page listing attendees and RSVPs.",
        screens: [
          "assets/political-party/05-calendar-day.png",
          "assets/political-party/06-calendar-week.png",
          "assets/political-party/07-calendar-month.png",
          "assets/political-party/08-event-detail.png",
        ],
      },
      {
        label: "Internal messenger",
        note: "Role-filtered chats — leadership channels are not locked, they simply don't appear for newer activists.",
        screens: [
          "assets/political-party/09-chats-list.png",
          "assets/political-party/10-chat.png",
        ],
      },
      {
        label: "Contacts",
        note: "Members directory plus a map of party offices — discovering people and places lives in one tab.",
        screens: [
          "assets/political-party/11-contacts-people.png",
          "assets/political-party/12-contacts-map.png",
        ],
      },
      {
        label: "AI agent",
        note: "A chat assistant trained on the party's positions and policy — members get instant, policy-accurate answers without waiting for a human.",
        screens: [
          "assets/political-party/13-ai-assistant.png",
        ],
      },
      {
        label: "Account & QR",
        note: "Each member's profile carries a personal referral QR — the backbone of the traceable growth network.",
        screens: [
          "assets/political-party/14-account.png",
        ],
      },
    ],
  },
  {
    id: "psim",
    num: "02",
    title: "PSIM",
    titleBright: "PSIM",
    titleDim: "Console",
    subtitle: "Physical security operations console",
    year: "2024",
    role: "Product Designer",
    scope: "Enterprise · Desktop · Data viz",
    duration: "8 months",
    tags: ["Enterprise", "Data", "Desktop"],
    pills: ["Enterprise", "Control Room", "Data Viz", "Desktop App", "Operator UX"],
    brief: "A control-room platform that unifies cameras, access control, alarms and dispatch into one operator console. Operators run 12-hour shifts — every pixel had to earn its place.",
    accent: "oklch(0.65 0.14 220)",
    cover: "cool",
    overview:
      "PSIM is a control-room platform that unifies camera feeds, access control, alarms and dispatch into a single operator console. Operators run 12-hour shifts under load — every pixel had to earn its place.",
    challenge:
      "The previous tool buried critical incidents three clicks deep and used 14 different status colors. Operators kept paper notes next to the monitor. We had to make the screen the source of truth.",
    approach: [
      "Shadowed operators on-site to document real incident timelines minute-by-minute.",
      "Designed a triage-first layout: a live incident lane, a map, and a contextual right rail.",
      "Built a data-viz language with five severity tokens and one motion grammar for state changes.",
      "Validated the dispatch flow against four scenario tabletops with security leads.",
    ],
    outcome: [
      { stat: "−63%", label: "Time to dispatch" },
      { stat: "−41%", label: "Operator errors" },
      { stat: "1×", label: "Screens to triage" },
      { stat: "8 mo", label: "Discovery to GA" },
    ],
  },
  {
    id: "osint",
    num: "03",
    title: "OSINT",
    titleBright: "OSINT",
    titleDim: "Platform",
    subtitle: "Open-source intelligence workspace",
    year: "2026",
    role: "Product Designer",
    scope: "Enterprise · Web · Data",
    duration: "In progress",
    tags: ["Enterprise", "Data", "Intel"],
    pills: ["Investigations", "Graph", "Data Sources", "Workspace"],
    brief: "A workspace for analysts to collect, link and reason over open-source signals — currently in design.",
    accent: "oklch(0.7 0.14 145)",
    cover: "cool",
    comingSoon: true,
  },
];

/* ============= Inline icons ============= */
function Icon({ name }) {
  const props = {
    width: 18, height: 18, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "bell":
      return (
        <svg {...props}>
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10 21a2 2 0 0 0 4 0" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "lock":
      return (
        <svg {...props}>
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z" />
        </svg>
      );
    case "upload":
      return (
        <svg {...props}>
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
      );
    case "help":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    default:
      return null;
  }
}

/* ============= Rich case body (full case-study structure) ============= */

function RichCaseBody({ caseData }) {
  const s = caseData.sections;
  return (
    <>
      <CaseSection num="01" eyebrow="Overview" title={s.overviewTitle}>
        <p>{s.overviewBody}</p>
        <div className="role-grid">
          {s.roles.map((r) => (
            <div key={r.num} className="role-card">
              <div className="role-num">Role / {r.num}</div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
              <span className={"role-access access-" + r.level}>{r.access}</span>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection num="02" eyebrow="Problem" title={s.problemTitle}>
        <p>{s.problemBody}</p>
        <div className="challenge-stack">
          {s.challenges.map((c, i) => (
            <div key={i} className="challenge-card">
              <span className="challenge-icon"><Icon name={c.icon} /></span>
              <div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="constraint-card">
          <span className="constraint-label">Key constraint</span>
          <p>{s.constraint}</p>
        </div>
      </CaseSection>

      <CaseSection num="03" eyebrow="Research" title={s.researchTitle}>
        {s.researchBody.map((p, i) => <p key={i}>{p}</p>)}
        <div className="insight-card">
          <span className="insight-label">Key design insight</span>
          <p>{s.insight}</p>
        </div>
      </CaseSection>

      <CaseSection num="04" eyebrow="Process" title={s.processTitle}>
        <div className="process-list">
          {s.process.map((p) => (
            <div key={p.num} className="process-row">
              <div className="process-num">{p.num}</div>
              <div className="process-text">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection num="05" eyebrow="Design" title={s.designTitle}>
        <div className="feature-grid">
          {s.features.map((f, i) => (
            <div key={i} className={"feature-card kind-" + f.kind}>
              <span className="feature-badge">{f.kind === "unique" ? "Unique" : "Core"}</span>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      {caseData.screenGroups && caseData.sections.showcase && (
        <div className="case-showcase">
          <div className="showcase-tiles">
            {caseData.sections.showcase.tiles.map((t, i) => (
              <figure key={t.label} className="showcase-tile" style={{ "--ti": i }}>
                <div className="showcase-tile-stage">
                  {t.phones.map((src, pi) => (
                    <img key={src} src={src} alt={t.label} loading="lazy" style={{ "--pi": pi }} />
                  ))}
                </div>
                <figcaption>{t.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      <CaseSection num="06" eyebrow="Status & Results" title={s.statusTitle}>
        <div className="status-card">
          <span className="status-dot"></span>
          <p>{s.statusNote}</p>
        </div>
        <div className="results-grid">
          {s.results.map((r, i) => (
            <div key={i} className="result-card">
              <span className="result-icon"><Icon name={r.icon} /></span>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection num="07" eyebrow="Reflection" title={s.reflectionTitle}>
        {s.reflectionBody.map((p, i) => <p key={i}>{p}</p>)}
        <blockquote className="reflection-quote">
          <span className="quote-mark">“</span>
          <p>{s.reflectionQuote}</p>
        </blockquote>
      </CaseSection>
    </>
  );
}

function CaseSection({ num, eyebrow, title, children }) {
  return (
    <section className="case-section-rich">
      <header className="case-section-head">
        <span className="case-section-num">/ {num} — {eyebrow}</span>
        <h2 className="case-section-title">{title}</h2>
      </header>
      <div className="case-section-body">{children}</div>
    </section>
  );
}

/* ============= Module scene (composed phone mockup) ============= */

function ModuleScene({ group, index, accent }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const count = group.screens.length;
  const layout = "scene-layout-" + Math.min(count, 4);

  return (
    <section
      ref={ref}
      className={"scene " + layout + (visible ? " is-visible" : "")}
      style={{ "--accent": accent, "--si": index }}
    >
      <div className="scene-info">
        <span className="scene-num">{String(index + 1).padStart(2, "0")} / 07</span>
        <h3>{group.label}</h3>
        <p>{group.note}</p>
      </div>
      <div className="scene-stage" aria-hidden="false">
        <span className="scene-bg-text">
          {group.label.split(/\s+/).map((w, i) => (
            <span key={i} className="scene-bg-word">{w}</span>
          ))}
        </span>
        <div className="scene-phones">
          {group.screens.map((src, i) => (
            <img key={src} src={src} alt={group.label + " screen " + (i + 1)} loading="lazy" style={{ "--pi": i }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============= Module group (legacy — kept for fallback) ============= */

function ModuleGroup({ group, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const count = group.screens.length;
  // Layout strategy: 1→single big, 2→half/half, 3→thirds, 4→2×2 grid
  const layoutClass = "module-grid layout-" + Math.min(count, 4);

  return (
    <section
      ref={ref}
      className={"module-group" + (visible ? " is-visible" : "")}
      style={{ "--mi": index }}
    >
      <header className="module-head">
        <div className="module-label">
          <span className="module-num">{String(index + 1).padStart(2, "0")}</span>
          <h3>{group.label}</h3>
        </div>
        <p>{group.note}</p>
      </header>
      <div className={layoutClass}>
        {group.screens.map((src, i) => (
          <figure key={src} className="module-phone" style={{ "--pi": i }}>
            <img src={src} alt={group.label + " screen " + (i + 1)} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ============= Gallery tile (only for inner content, not cover) ============= */

function GalleryTile({ kind, label, accent, span }) {
  return (
    <div className={`tile span-${span}`}>
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%", display: "block" }}>
        <rect width="800" height="600" fill="#181818" />
        <defs>
          <pattern id={`p-${label}`} x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="14" stroke="rgba(241,238,232,0.06)" strokeWidth="14" />
          </pattern>
        </defs>
        <rect width="800" height="600" fill={`url(#p-${label})`} />
        {kind === "ui" && (
          <g>
            <rect x="40" y="40" width="720" height="520" fill="#0e0e0e" stroke="rgba(241,238,232,0.12)" />
            <rect x="60" y="60" width="180" height="14" fill={accent} opacity="0.9" />
            <rect x="60" y="90" width="120" height="8" fill="rgba(241,238,232,0.4)" />
            <rect x="60" y="140" width="340" height="380" fill="rgba(241,238,232,0.04)" />
            <rect x="420" y="140" width="320" height="180" fill="rgba(241,238,232,0.04)" />
            <rect x="420" y="340" width="320" height="180" fill="rgba(241,238,232,0.04)" />
            <rect x="80" y="160" width="100" height="100" fill={accent} opacity="0.7" />
            <rect x="80" y="280" width="200" height="6" fill="rgba(241,238,232,0.3)" />
            <rect x="80" y="296" width="160" height="6" fill="rgba(241,238,232,0.18)" />
          </g>
        )}
        {kind === "type" && (
          <g fill="rgba(241,238,232,0.92)">
            <text fontFamily="Space Grotesk" fontWeight="700" fontSize="320" letterSpacing="-16" y="380" x="80">
              Aa
            </text>
            <text fontFamily="Space Grotesk" fontWeight="500" fontSize="20" y="540" x="80" fill="rgba(241,238,232,0.5)" letterSpacing="2">
              SPACE GROTESK · 700/500/400
            </text>
          </g>
        )}
        {kind === "color" && (
          <g>
            <rect x="80" y="80" width="160" height="440" fill={accent} />
            <rect x="260" y="80" width="160" height="440" fill="rgba(241,238,232,0.9)" />
            <rect x="440" y="80" width="160" height="440" fill="#1a1a1a" stroke="rgba(241,238,232,0.2)" />
            <rect x="620" y="80" width="120" height="440" fill="rgba(241,238,232,0.5)" />
          </g>
        )}
        {kind === "data" && (
          <g stroke={accent} fill="none" strokeWidth="2">
            <rect x="60" y="60" width="680" height="480" stroke="rgba(241,238,232,0.12)" />
            <polyline points="80,500 160,440 240,460 320,360 400,400 480,260 560,310 640,200 720,240" />
            <g fill={accent} stroke="none">
              {[80,160,240,320,400,480,560,640,720].map((x,i)=> (
                <circle key={i} cx={x} cy={[500,440,460,360,400,260,310,200,240][i]} r="4" />
              ))}
            </g>
          </g>
        )}
        <text x="40" y="580" fontFamily="JetBrains Mono, monospace" fontSize="11"
          fill="rgba(241,238,232,0.45)" letterSpacing="2">{label}</text>
      </svg>
    </div>
  );
}

/* ============= Case overlay ============= */

function CaseOverlay({ caseData, originRect, onClose, onNext }) {
  const overlayRef = useRef(null);
  const [phase, setPhase] = useState("entering"); // entering -> open -> exiting

  // Flip-style animation: start as a tiny rect at originRect, then expand to full viewport.
  useLayoutEffect(() => {
    if (!caseData || !originRect || !overlayRef.current) return;
    const el = overlayRef.current;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    // initial state mirrors the case row
    const sx = originRect.width / vw;
    const sy = originRect.height / vh;
    const tx = originRect.left;
    const ty = originRect.top;
    el.style.transformOrigin = "top left";
    el.style.transform = `translate(${tx}px, ${ty}px) scale(${sx}, ${sy})`;
    el.style.opacity = "1";
    el.style.borderRadius = "0px";
    // force a frame
    el.getBoundingClientRect();
    requestAnimationFrame(() => {
      el.style.transition = "transform 0.75s cubic-bezier(0.7, 0, 0.2, 1)";
      el.style.transform = "translate(0,0) scale(1,1)";
    });
    const t = setTimeout(() => setPhase("open"), 780);
    return () => clearTimeout(t);
  }, [caseData?.id]);

  useEffect(() => {
    document.body.classList.add("locked");
    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("locked");
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  function handleClose() {
    const el = overlayRef.current;
    if (!el || !originRect) { onClose(); return; }
    const vw = window.innerWidth, vh = window.innerHeight;
    const sx = originRect.width / vw;
    const sy = originRect.height / vh;
    el.style.transition = "transform 0.6s cubic-bezier(0.7, 0, 0.2, 1), opacity 0.4s ease 0.2s";
    el.style.transform = `translate(${originRect.left}px, ${originRect.top}px) scale(${sx}, ${sy})`;
    el.style.opacity = "0";
    setPhase("exiting");
    setTimeout(onClose, 620);
  }

  if (!caseData) return null;

  return (
    <div
      ref={overlayRef}
      className="case-overlay is-open"
      style={{ background: caseData.cover === "warm" ? "#0a0a0a" : "#0a0f12" }}
    >
      <button className="case-close" onClick={handleClose} aria-label="Close project">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 4 L16 16 M16 4 L4 16" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>

      <header className="case-cover">
        <div className="case-cover-top">
          <span className="crumb">
            <span>Case</span>
            <b>{caseData.num}</b>
            <span>/ {caseData.year}</span>
          </span>
          <span>{caseData.scope}</span>
        </div>

        <h1 className="case-cover-title">
          <span className="bright">{caseData.titleBright}</span>
          <span className="dim">{caseData.titleDim}</span>
        </h1>

        <div className="case-cover-bottom">
          <div>
            <div className="case-cover-pills">
              {caseData.pills.map((p) => (
                <span key={p} className="pill">{p}</span>
              ))}
            </div>
            <p className="case-cover-brief" style={{ marginTop: 28 }}>
              {caseData.brief}
            </p>
          </div>
          <dl className="case-cover-meta">
            <div><dt>Role</dt><dd>{caseData.role}</dd></div>
            <div className="meta-wide"><dt>Scope</dt><dd>{caseData.scope}</dd></div>
            <div><dt>Duration</dt><dd>{caseData.duration}</dd></div>
          </dl>
        </div>
      </header>

      <div className="case-body">
        {caseData.heroImage && (
          <figure className="case-hero-img">
            <img src={caseData.heroImage} alt={caseData.title + " hero mockup"} />
            {caseData.heroImageCaption && (
              <figcaption>{caseData.heroImageCaption}</figcaption>
            )}
          </figure>
        )}

        {caseData.stats && (
          <div className="case-stats">
            {caseData.stats.map((s, i) => (
              <div key={i} className="case-stat">
                <div className="case-stat-val">{s.value}</div>
                <div className="case-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {caseData.sections ? (
          <RichCaseBody caseData={caseData} />
        ) : (
          <>
            <div className="case-section">
              <h2>Overview</h2>
              <div className="body"><p>{caseData.overview}</p></div>
            </div>

            {!caseData.screenGroups && (
              <div className="case-gallery">
                <GalleryTile kind="ui" label="01 · KEY SCREEN" accent={caseData.accent} span="8" />
                <GalleryTile kind="color" label="02 · PALETTE" accent={caseData.accent} span="4" />
              </div>
            )}

            <div className="case-section">
              <h2>The challenge</h2>
              <div className="body"><p>{caseData.challenge}</p></div>
            </div>

            <div className="case-section">
              <h2>Approach</h2>
              <div className="body">
                <ol style={{ paddingLeft: 0, listStyle: "none", margin: 0 }}>
                  {caseData.approach.map((step, i) => (
                    <li key={i} style={{
                      display: "grid",
                      gridTemplateColumns: "40px 1fr",
                      gap: 16,
                      paddingBlock: 14,
                      borderTop: i === 0 ? "0" : "1px solid rgba(241,238,232,0.12)"
                    }}>
                      <span style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: 13,
                        color: "rgba(241,238,232,0.4)",
                        paddingTop: 6,
                      }}>0{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="case-section">
              <h2>Outcome</h2>
              <div className="body" style={{ maxWidth: "none" }}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 24,
                  marginTop: 8
                }}>
                  {caseData.outcome.map((o, i) => (
                    <div key={i} style={{
                      paddingTop: 20,
                      borderTop: "1px solid rgba(241,238,232,0.2)"
                    }}>
                      <div style={{
                        fontSize: "clamp(40px, 5vw, 64px)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        lineHeight: 1
                      }}>{o.stat}</div>
                      <div style={{
                        marginTop: 12,
                        fontSize: 13,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "rgba(241,238,232,0.5)",
                        fontWeight: 600,
                      }}>{o.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="case-next" onClick={onNext}>
        <div>
          <small>Next case</small>
          <h3>{caseData.id === "political-party" ? "PSIM →" : "Political Party →"}</h3>
        </div>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="31" stroke="rgba(241,238,232,0.3)" />
          <path d="M22 32 H44 M36 24 L44 32 L36 40" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}

/* ============= Main page sections ============= */

function Nav() {
  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <a href="#top" className="nav-logo">
          <span className="dot"></span>
          Roman Dubensky
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#capabilities">Capabilities</a>
        </div>
        <a href="#contact" className="nav-cta">
          Get in touch
          <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="hero shell">
      <div className="hero-eyebrow">
        <span className="pulse"></span>
        Available for work
      </div>
      <h1>
        <span className="line"><span>Product designer</span></span>
        <span className="line"><span>building calm,</span></span>
        <span className="line"><span>readable software.</span></span>
      </h1>
      <div className="hero-meta">
        <p className="hero-tag">
          I design web and mobile products end-to-end — research, systems, interaction.
          Three years shipping work for enterprise, civic and consumer teams.
        </p>
        <div className="hero-loc">
          <strong>Kyiv, Ukraine</strong>
          Working remotely · UTC+2
        </div>
      </div>
    </header>
  );
}

function Marquee() {
  const items = [
    "Product Design", "Design Systems", "UX Research",
    "Interaction", "Prototyping", "Web · iOS · Android"
  ];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.concat(items).map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

function Work({ onOpen }) {
  function open(e, c) {
    if (c.comingSoon) return;
    // find the card root element (we attach event on the card)
    const card = e.currentTarget.closest(".case-card") || e.currentTarget;
    const rect = card.getBoundingClientRect();
    onOpen(c, rect);
  }
  return (
    <section id="work" className="section shell">
      <div className="section-head">
        <span className="section-num">/ 01 — Selected work</span>
        <h2 className="section-title">
          Three projects. Open any one to see it in full.
        </h2>
      </div>
      <div className="case-cards">
        {CASES.map((c, i) => (
          <CaseCard key={c.id} c={c} index={i} onOpen={open} />
        ))}
      </div>
    </section>
  );
}

function CaseCard({ c, index, onOpen }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={
        "case-card" +
        (visible ? " is-visible" : "") +
        (c.comingSoon ? " is-soon" : "")
      }
      style={{ "--i": index }}
      onClick={c.comingSoon ? undefined : (e) => onOpen(e, c)}
      role={c.comingSoon ? undefined : "button"}
      tabIndex={c.comingSoon ? -1 : 0}
    >
      <div className="case-card-top">
        <span className="crumb">
          <span>Case</span>
          <b>{c.num}</b>
          <span>/ {c.year}</span>
        </span>
        {c.comingSoon ? (
          <span className="badge soon">
            <span className="dot"></span>In progress
          </span>
        ) : (
          <span className="badge live">View case</span>
        )}
      </div>

      <h3 className="case-card-title">
        <span className="bright">{c.titleBright}</span>
        <span className="dim">{c.titleDim}</span>
      </h3>

      <div className="case-card-bottom">
        <div>
          <div className="case-card-pills">
            {c.pills.map((p) => (
              <span key={p} className="pill">{p}</span>
            ))}
          </div>
          <p className="case-card-brief">
            <span className="star">✦</span> {c.brief}
          </p>
        </div>

        <div className="case-card-cta" aria-hidden="true">
          {c.comingSoon ? (
            <span>Coming soon</span>
          ) : (
            <>
              <span>Open project</span>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M5 17 L17 5 M8 5 H17 V14" stroke="currentColor" strokeWidth="1.7" />
              </svg>
            </>
          )}
        </div>
      </div>

      <div className="case-card-glow" style={{ background: c.accent }} aria-hidden="true"></div>
    </article>
  );
}

function About() {
  return (
    <section id="about" className="section shell">
      <div className="section-head">
        <span className="section-num">/ 02 — About</span>
        <h2 className="section-title">
          Designer of three years, problem-solver of many more.
        </h2>
      </div>
      <div className="about">
        <div className="about-main">
          <div className="about-byline">
            <span className="about-avatar">
              <img src="uploads/image.png" alt="Roman Dubensky portrait" />
            </span>
            <div className="about-byline-text">
              <strong>Roman Dubensky</strong>
              <span>Product Designer · Kyiv, UA</span>
            </div>
          </div>
          <div className="about-bio">
            <p>
              I'm a product designer based in Kyiv. I design web and mobile interfaces
              end-to-end — from research and information architecture to interaction,
              visual design and developer hand-off.
            </p>
            <p>
              My work sits at the intersection of <strong>design systems</strong>,
              <strong> usability</strong> and <strong>responsive product design</strong>.
              I partner closely with engineering and product to ship things that are easy
              to use, easy to maintain, and easy to grow.
            </p>
            <p>
              Currently leading product design at UKRINFOSYSTEMS, with prior work for
              Deep Knowledge Group and Voio. I also study PhD-level Management at KROK
              University.
            </p>
          </div>
        </div>
        <div className="about-meta">
          <dl>
            <dt>Focus</dt>
            <dd>SaaS · Enterprise · Civic</dd>
          </dl>
          <dl>
            <dt>Toolkit</dt>
            <dd>Figma, Webflow, Wix Studio, After Effects, basic HTML/CSS/JS</dd>
          </dl>
          <dl>
            <dt>Languages</dt>
            <dd>Ukrainian · English</dd>
          </dl>
          <dl>
            <dt>Education</dt>
            <dd>KROK University — PhD, Management (2024 — present)</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const xp = [
    {
      period: "June 2024 — Present",
      role: "Product Designer (UI/UX)",
      company: "UKRINFOSYSTEMS",
      desc: "Designing intuitive mobile, desktop and web apps. Building and maintaining a scalable component library in Figma, running usability tests, and partnering with developers, analysts and marketing to align design with product goals."
    },
    {
      period: "Jan 2023 — June 2024",
      role: "Web Designer",
      company: "Deep Knowledge Group",
      desc: "Designed responsive marketing and product sites driven by UX principles. Structured layouts, integrated forms / payments / blog systems, and built custom animations in Wix Classic and Editor X. Owned site performance, basic SEO and cross-browser QA."
    },
    {
      period: "May 2022 — Jan 2023",
      role: "Junior UI/UX Designer",
      company: "Voio",
      desc: "Designed mobile interfaces from concept to delivery — wireframes, user flows and interactive prototypes. Maintained design-system consistency and supported engineers through implementation."
    }
  ];
  return (
    <section id="experience" className="section shell">
      <div className="section-head">
        <span className="section-num">/ 03 — Experience</span>
        <h2 className="section-title">
          Three roles. One direction — calmer product design.
        </h2>
      </div>
      <div className="xp">
        {xp.map((x, i) => (
          <div key={i} className="xp-item">
            <div className="xp-period">{x.period}</div>
            <h4 className="xp-role">{x.role}<small>{x.company}</small></h4>
            <p className="xp-desc">{x.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Capabilities() {
  const caps = [
    { n: "01", title: "User-centered design", body: "Building interfaces grounded in behaviour, research and feedback — not assumptions." },
    { n: "02", title: "Design systems", body: "Token-driven libraries that scale across product surfaces and stay maintainable." },
    { n: "03", title: "Interaction design", body: "Motion and state that make complex flows feel obvious — without showing off." },
    { n: "04", title: "Responsive layouts", body: "Mobile, tablet and desktop that share a system, not just a stylesheet." },
    { n: "05", title: "Usability testing", body: "Moderated and unmoderated rounds, with measurable changes tied to real user pain." },
    { n: "06", title: "Cross-functional partnering", body: "Tight loops with engineering, product and marketing — design that ships." }
  ];
  const tools = ["Figma", "Webflow", "Wix Studio", "Photoshop", "Illustrator", "After Effects", "Blender", "HTML", "CSS", "JavaScript", "Angular (basics)"];
  return (
    <section id="capabilities" className="section shell">
      <div className="section-head">
        <span className="section-num">/ 04 — Capabilities</span>
        <h2 className="section-title">
          What I can plug into your team.
        </h2>
      </div>
      <div className="caps">
        {caps.map((c) => (
          <div key={c.n} className="cap">
            <div className="cap-num">{c.n}</div>
            <h4>{c.title}</h4>
            <p>{c.body}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
        <div className="cap-num">TOOLKIT</div>
        <div className="tool-grid">
          {tools.map((t) => <span key={t} className="tool-chip">{t}</span>)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "Dubensky.Roman@gmail.com",
      href: "mailto:Dubensky.Roman@gmail.com",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="2" y="4" width="18" height="14" stroke="currentColor" strokeWidth="1.6" />
          <path d="M2 5 L11 12 L20 5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    },
    {
      label: "Phone",
      value: "+38 050 214 28 10",
      href: "tel:+380502142810",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M4 3 H8 L10 8 L7.5 9.5 C8.5 12 10 13.5 12.5 14.5 L14 12 L19 14 V18 C19 18.5 18.5 19 18 19 C10 19 3 12 3 4 C3 3.5 3.5 3 4 3 Z"
            stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      label: "Telegram",
      value: "@Roman_Dbn",
      href: "https://t.me/Roman_Dbn",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M2 10 L20 3 L17 19 L11 15 L8 18 L8 14 L17 5 L7 13"
            stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    },
    {
      label: "Behance",
      value: "behance.net/dubensky",
      href: "https://www.behance.net/dubensky",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M2 5 H7 C9 5 10 6 10 7.5 C10 9 9 10 7 10 H2 Z M2 10 H8 C10 10 11 11 11 13 C11 15 10 16 7.5 16 H2 Z"
            stroke="currentColor" strokeWidth="1.4" />
          <path d="M13 6 H19" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="16" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      )
    },
  ];
  return (
    <section id="contact" className="section shell contact">
      <div className="contact-eyebrow">/ 05 — Contact</div>
      <h2>
        Let's make it{" "}
        <a href="mailto:Dubensky.Roman@gmail.com">readable.</a>
      </h2>
      <div className="contact-grid">
        {contacts.map((c) => (
          <a key={c.label} href={c.href} className="contact-card" target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener">
            <div className="contact-icon">{c.icon}</div>
            <div className="contact-text">
              <div className="contact-label">{c.label}</div>
              <div className="contact-value">{c.value}</div>
            </div>
            <svg className="contact-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 15 L15 5 M7 5 H15 V13" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="shell foot">
      <div>© 2026 Roman Dubensky</div>
      <div style={{ display: "flex", gap: 24 }}>
        <a href="https://www.behance.net/dubensky" target="_blank" rel="noopener">Behance ↗</a>
        <a href="https://t.me/Roman_Dbn" target="_blank" rel="noopener">Telegram ↗</a>
        <a href="mailto:Dubensky.Roman@gmail.com">Email ↗</a>
      </div>
    </footer>
  );
}

/* ============= App root ============= */

function App() {
  const [active, setActive] = useState(null); // { caseData, originRect }

  function openCase(caseData, originRect) {
    setActive({ caseData, originRect });
  }
  function closeCase() {
    setActive(null);
  }
  function nextCase() {
    if (!active) return;
    const idx = CASES.findIndex(c => c.id === active.caseData.id);
    const nextC = CASES[(idx + 1) % CASES.length];
    // Use centered rect for animation continuity
    const rect = { left: 0, top: 0, width: window.innerWidth, height: 80 };
    // Smoothly swap by closing then opening
    const overlay = document.querySelector(".case-overlay");
    if (overlay) {
      overlay.scrollTop = 0;
    }
    setActive({ caseData: nextC, originRect: rect });
  }

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Work onOpen={openCase} />
      <About />
      <Experience />
      <Capabilities />
      <Contact />
      <Footer />
      {active && (
        <CaseOverlay
          key={active.caseData.id}
          caseData={active.caseData}
          originRect={active.originRect}
          onClose={closeCase}
          onNext={nextCase}
        />
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
