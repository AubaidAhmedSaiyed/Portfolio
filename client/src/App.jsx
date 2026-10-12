import React, { useState, useEffect, useRef } from 'react';

/* =========================== ATMOSPHERE HELPERS =========================== */
function hx(h) {
  h = h.replace('#', '');
  return [parseInt(h.substr(0, 2), 16), parseInt(h.substr(2, 2), 16), parseInt(h.substr(4, 2), 16)];
}

function rg(a) {
  return '#' + a.map(function(v) {
    v = Math.max(0, Math.min(255, Math.round(v)));
    return (v < 16 ? '0' : '') + v.toString(16);
  }).join('');
}

function mc(a, b, t) {
  var x = hx(a), y = hx(b);
  return rg([x[0] + (y[0] - x[0]) * t, x[1] + (y[1] - x[1]) * t, x[2] + (y[2] - x[2]) * t]);
}

function lum(c) {
  var v = hx(c);
  return (0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2]) / 255;
}

const PAL = {
  night: { t: '#060c18', m: '#13263f', b: '#2b4660', n: 1, sx: 0.78, sy: 0.2, sc: '#dfe6f5', gl: 0.25, r: ['#17283c', '#111f31', '#0b1623', '#070e18'], hz: '#2b4660', cc: '#6f86a8', ca: 0.16, fo: '#04080a' },
  dawn: { t: '#5f7ea6', m: '#e1b3a2', b: '#ffd6a6', n: 0, sx: 0.2, sy: 0.64, sc: '#fff1c9', gl: 0.9, r: ['#8e9bb8', '#6f7f9e', '#51627f', '#364560'], hz: '#f7cfae', cc: '#ffe0c8', ca: 0.5, fo: '#0d1710' },
  day: { t: '#5a95cd', m: '#aecdea', b: '#eef1e8', n: 0, sx: 0.78, sy: 0.16, sc: '#fffbe8', gl: 0.55, r: ['#9db8cc', '#7a9bb0', '#58798f', '#3c5a6e'], hz: '#e9eee6', cc: '#ffffff', ca: 0.78, fo: '#10200f' },
  golden: { t: '#5e7da6', m: '#eebc95', b: '#ffd08a', n: 0, sx: 0.72, sy: 0.58, sc: '#fff0c2', gl: 1, r: ['#a6a7b8', '#8a8ea6', '#5e6685', '#3b425e'], hz: '#ffd9a8', cc: '#ffe3c4', ca: 0.62, fo: '#12150d' },
  dusk: { t: '#262f55', m: '#7a5d80', b: '#e6a085', n: 0.35, sx: 0.3, sy: 0.68, sc: '#ffd7b0', gl: 0.55, r: ['#6c5f7f', '#4b4466', '#2f2c48', '#1b1a30'], hz: '#c98a86', cc: '#d8a6a0', ca: 0.4, fo: '#070809' }
};

const KF = [
  [0, 'night'], [5, 'night'], [6.6, 'dawn'], [9, 'day'], [15.5, 'day'], [17.8, 'golden'], [19.4, 'dusk'], [21, 'night'], [24, 'night']
];

function mix(a, b, t) {
  var o = {};
  for (var k in a) {
    var x = a[k], y = b[k];
    if (typeof x === 'string') o[k] = mc(x, y, t);
    else if (typeof x === 'number') o[k] = x + (y - x) * t;
    else o[k] = x.map(function(c, i) { return mc(c, y[i], t); });
  }
  return o;
}

function palAt(h) {
  for (var i = 0; i < KF.length - 1; i++) {
    if (h >= KF[i][0] && h <= KF[i + 1][0]) {
      var t = (h - KF[i][0]) / (KF[i + 1][0] - KF[i][0]);
      return mix(PAL[KF[i][1]], PAL[KF[i + 1][1]], t);
    }
  }
  return PAL.night;
}

function phase(h) {
  return h < 5 ? 'Night' : h < 6.6 ? 'Before dawn' : h < 8.2 ? 'Dawn' : h < 16 ? 'Daylight' : h < 17.8 ? 'Afternoon' : h < 19.4 ? 'Golden hour' : h < 21 ? 'Dusk' : 'Night';
}

function H(i, j, s) {
  var h = Math.imul(i, 374761393) + Math.imul(j, 668265263) + Math.imul(s, 2147483647) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return (((h ^ (h >>> 16)) >>> 0) / 4294967295);
}

function sm(t) { return t * t * (3 - 2 * t); }

function n1(x, s) {
  var i = Math.floor(x), f = x - i;
  return H(i, 0, s) + (H(i + 1, 0, s) - H(i, 0, s)) * sm(f);
}

function f1(x, s) {
  return n1(x, s) * 0.5 + n1(x * 2.1, s + 1) * 0.28 + n1(x * 4.3, s + 2) * 0.14 + n1(x * 8.7, s + 3) * 0.08;
}

function n2(x, y, s) {
  var i = Math.floor(x), j = Math.floor(y), fx = sm(x - i), fy = sm(y - j),
      a = H(i, j, s), b = H(i + 1, j, s), c = H(i, j + 1, s), d = H(i + 1, j + 1, s);
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
}

function f2(x, y, s) {
  var v = 0, a = 0.5, f = 1;
  for (var o = 0; o < 5; o++) {
    v += a * n2(x * f, y * f, s + o);
    f *= 2.05;
    a *= 0.5;
  }
  return v;
}

/* =========================== STATIC DATA =========================== */
const GH = 'https://github.com/AubaidAhmedSaiyed/';

const PROJ = [
  {
    id: 'vector',
    n: 'Vector AI',
    sub: 'Retail intelligence platform: demand forecasting, inventory optimisation and store operations in one workflow.',
    ft: 1,
    img: '/projects/vector-ai.png',
    ds: 'Retail intelligence platform that unifies demand forecasting, inventory optimisation and store operations in one workflow.',
    pf: ['83% forecast accuracy', '17% MAPE', 'Zero k6 failures'],
    tg: ['AI & ML', 'Node.js', 'FastAPI'],
    f: ['AI & ML', 'Backend', 'Systems'],
    gh: GH + 'VectorAI-v2',
    demo: 'https://vector-ai-one-pi.vercel.app/',
    mt: [['83%', 'forecast accuracy'], ['17%', 'MAPE'], ['2.38', 'MAE, in units'], ['0', 'failed requests in k6 load testing']],
    bt: [
      'XGBoost demand forecasts across multiple SKUs, with structured backtesting',
      'EOQ inventory optimisation, automated expiry alerts and staff task lists',
      'React, Express, FastAPI, Redis and MongoDB Atlas working as one cached pipeline',
      'Load-tested with k6 at production-level traffic'
    ],
    un: [
      ['What do 17% MAPE and 2.38 MAE tell you?', 'MAPE is the average error as a percentage of actual demand, so fast and slow sellers compare fairly. MAE is the average miss in units, which is what decides how much stock is actually wrong.'],
      ['Why backtest?', 'A model has to be judged on data it has not seen. Replaying history in time order stops the future from leaking into training.'],
      ['Why EOQ and a cache?', 'A forecast says how much will sell; EOQ turns it into an order size by balancing ordering cost against holding cost. Redis caches the expensive multi-SKU pipeline so the dashboard stays fast.']
    ]
  },
  {
    id: 'stacklens',
    n: 'StackLens',
    sub: 'Static analysis engine: dependency graphs and change impact for JavaScript and TypeScript repositories.',
    ft: 1,
    img: '/projects/stacklen.png',
    ds: 'Static analysis engine that parses JavaScript and TypeScript repositories into dependency graphs and computes change impact across large codebases.',
    pf: ['1,400+ files processed', '1,495+ dependency edges', 'BFS + DFS analysis'],
    tg: ['Node.js', 'React', 'Graph algorithms'],
    f: ['Backend', 'Systems'],
    gh: GH + 'StackLens',
    demo: 'https://stack-lens-crbi.vercel.app/',
    mt: [['1,495+', 'dependency edges mapped'], ['1,400+', 'source files processed'], ['O(V+E)', 'cost of each graph traversal'], ['2', 'graph algorithms: BFS and DFS']],
    bt: [
      'Parses JavaScript and TypeScript with AST traversal into a dependency graph',
      'Finds everything a change affects, plus circular dependencies and unused modules',
      'Interactive graph of the repository, live as a demo'
    ],
    un: [
      ['Why an adjacency list?', 'Dependency graphs are sparse. Adjacency lists keep memory proportional to the edges and every traversal at O(V+E).'],
      ['Why BFS for change impact?', 'A change spreads outward through the modules that depend on it. BFS reaches every affected module once, nearest first.'],
      ['Why DFS for cycles?', 'A circular dependency appears as an edge back to a module still on the current path. DFS tracks exactly that path.']
    ]
  },
  {
    id: 'heed',
    n: 'HEED',
    sub: 'A runtime enforcement layer between an AI agent and its tools.',
    ft: 1,
    img: '/projects/feedback-flow.png',
    ds: 'A runtime enforcement layer between an AI agent and its tools: every action is allowed, escalated to a human, or blocked before it runs.',
    pf: ['60% vs 40% for static RBAC', '0.108 ms p95 decision', 'ALLOW · ASK · BLOCK'],
    tg: ['AI agents', 'Backend', 'Security'],
    f: ['AI & ML', 'Backend'],
    gh: GH,
    mt: [['60%', 'vs 40% for static RBAC on 50 trajectory scenarios'], ['0.108 ms', 'p95 decision latency'], ['3', 'verdicts: ALLOW, ASK, BLOCK'], ['2', 'modes: OBSERVE and ENFORCE']],
    bt: [
      'RuntimeGateway intercepts every tool call and returns ALLOW, ASK or BLOCK',
      'Objective-bound authorization, trajectory-aware evaluation and capability-escalation detection',
      'Execution budgets, secret redaction, human approval with resume, audit event store and dashboard',
      'Shipped as the @heed/runtime SDK with a Control Plane (internal prototype benchmark)'
    ],
    un: [
      ["Why not trust the agent's own reasoning?", "The agent's reasoning is not the final authority. Enforcement sits between the agent and its tools, in code, so the rule holds even when the model is wrong or manipulated."],
      ['Why evaluate trajectories, not single actions?', 'Each step can look harmless while the sequence adds up to something dangerous. Static RBAC checks one action at a time, which is why trajectory-aware evaluation scored 60% against 40% in the internal benchmark.'],
      ['Why ASK and OBSERVE, not only allow or block?', 'Not every decision is binary. ASK hands uncertain cases to a person and can resume with ALLOW_ONCE; OBSERVE shows what would be blocked before a team turns enforcement on.']
    ]
  },
  {
    id: 'pivot',
    n: 'Pivot',
    sub: 'AI-powered database schema migration: capstone project, team of five.',
    ft: 1,
    img: '/projects/image.png',
    ds: 'AI-powered database schema migration: converts a schema, explains every decision and shows what will break before you run it.',
    pf: ['Team of 5', '3 months', 'Rules + LLM + ML'],
    tg: ['AI & ML', 'Backend', 'Systems'],
    f: ['AI & ML', 'Backend', 'Systems', 'Data'],
    gh: GH,
    mt: [['5', 'team members'], ['3', 'months'], ['9', 'tables in the data model'], ['5', 'pipeline stages: parse, rules, LLM, diff, report']],
    bt: [
      'My part: the React frontend and the Python ML side, while working across the stack',
      'Hybrid conversion engine: rule-based lookups first, an LLM for ambiguous cases',
      'ML complexity predictor, schema diff viewer and generated reports',
      'React and Tailwind on FastAPI and PostgreSQL, with SQLGlot parsing'
    ],
    un: [
      ['Why a hybrid engine?', 'Mechanical, well-known conversions are a deterministic lookup: fast and explainable. The LLM only handles the unresolved cases and writes plain-language explanations for both paths.'],
      ['Why an async pipeline?', 'Parsing, converting and reporting take time. A job queue with status polling keeps requests from blocking and lets the user watch progress.'],
      ['Why delete the uploaded SQL file?', 'Raw dumps can hold sensitive structure. After parsing succeeds, only the canonical JSON schema is kept, which is enough for later stages and for training data.']
    ]
  },
  {
    id: 'safestay',
    n: 'Safe Stay',
    sub: 'Emergency shelter platform linking evacuees, hosts and administrators.',
    img: '/projects/safe-stay.png',
    ds: 'Emergency shelter platform connecting evacuees with hosts and administrators through role-based dashboards and moderated listings.',
    pf: ['3 user roles', 'JWT authentication'],
    tg: ['MERN', 'JWT', 'Multer'],
    f: ['Systems', 'Backend'],
    gh: GH + 'SafeStay',
    demo: 'https://safe-stay-v0.vercel.app/',
    mt: [['3', 'user roles: evacuee, host, admin'], ['JWT', 'token-based authentication'], ['Admin', 'moderates listings and users']],
    bt: [
      'Shelter search, filtering and booking requests for evacuees',
      'Host listings with image uploads and availability controls',
      'Admin moderation: approve suspicious listings, ban or unban users, plus reviews and favourites'
    ],
    un: [
      ['Why check roles on the server?', 'Hiding a button in React is not security. Role-based middleware checks every protected request, so nobody reaches a host or admin action by calling the API directly.'],
      ['Why moderate listings?', 'In an emergency a fake listing can put someone in danger. Admin approval and the power to ban users put trust ahead of speed.'],
      ['What is the JWT tradeoff?', 'A token lets the API verify who you are without a session store, but it cannot be revoked on its own. A ban needs the server to check the user\'s status, not only the token.']
    ]
  },
  {
    id: 'recon',
    n: 'Transaction Reconciliation Engine',
    sub: 'Backend system that matches user-reported and exchange-exported transactions from CSV.',
    img: '/projects/image.png',
    ds: 'Backend system that reconciles user-reported and exchange-exported transactions from CSV using configurable, tolerance-based matching.',
    pf: ['Tolerance-based matching', 'Full audit trail'],
    tg: ['Node.js', 'MongoDB', 'REST APIs'],
    f: ['Backend', 'Data'],
    gh: GH + 'Transaction_Reconciliation',
    mt: [['3', 'outcomes: matched, unmatched, conflicting'], ['2', 'sources: user and exchange'], ['Full', 'audit trail and lineage']],
    bt: [
      'Ingests and validates raw CSV data, then normalises asset names and transaction types',
      'Rule-based matching on timestamp and quantity tolerances, with indexed candidate lookups',
      'CSV reconciliation reports and REST APIs to trigger runs and fetch summaries'
    ],
    un: [
      ['Why tolerances, not exact matches?', 'Two systems record the same trade slightly differently: timestamps drift and quantities round. An exact match would miss real matches.'],
      ['Why normalise before matching, and index?', 'Sources name things differently, so raw strings never line up. Normalised keys let indexed lookups narrow the candidates instead of comparing every record with every other.'],
      ['Why keep lineage?', 'A reconciliation result is only trusted if every decision can be traced back to the records and the rule that produced it.']
    ]
  },
  {
    id: 'harbor',
    n: 'Harborline',
    nw: 1,
    sub: 'Container congestion predictor and port operations optimiser, built at the IBM BoB hackathon.',
    img: '/boat-ocean.png',
    ds: 'Container congestion predictor and port operations optimiser for five Indian ports, built for the IBM BoB AI Innovation Hackathon.',
    pf: ['Top 15 of 78 teams', '5 Indian ports', 'XGBoost + CP-SAT'],
    tg: ['AI & ML', 'Optimisation', 'Forecasting'],
    f: ['AI & ML', 'Data'],
    gh: 'https://github.com/AKNursumar/bob-ai-hackathon-BugHunters',
    mt: [['Top 15', 'of 78 shortlisted teams'], ['200+', 'teams entered, 2,000+ students registered'], ['5', 'Indian ports covered'], ['Live', 'AIS vessel tracking']],
    bt: [
      'XGBoost congestion forecasting on IMF PortWatch historical data',
      'Live vessel tracking through AISStream.io',
      'Berth and crane optimisation with Google OR-Tools CP-SAT, with FastAPI and React on Render and Vercel'
    ],
    un: [
      ['Why forecast first, then optimise?', 'You cannot plan around congestion you cannot see coming. The forecast says where and when pressure builds; the optimiser decides what to do about it.'],
      ['Why a constraint solver for berths?', 'Berth and crane planning is scheduling under hard rules, such as one ship per berth at a time. CP-SAT finds plans that respect those rules; a forecast alone cannot.'],
      ['Why both historical and live data?', 'PortWatch history shows the long-run pattern; live AIS shows who is actually arriving now.']
    ]
  },
  {
    id: 'expense',
    n: 'Expense Tracker',
    sub: 'Personal finance dashboard with live currency conversion, built as an internship deliverable.',
    img: '/projects/expense-tracker.png',
    ds: 'Personal finance dashboard with category analytics, live currency conversion, and careful loading, empty and error states.',
    pf: ['Live FX rates', '5 currencies', 'LocalStorage persistence'],
    tg: ['React', 'Recharts', 'Tailwind'],
    f: ['Systems'],
    gh: GH + 'ExpenseTracker',
    demo: 'https://expensetracker-rosy-eight.vercel.app/',
    mt: [['5', 'currencies: USD, INR, EUR, GBP, AED'], ['2', 'live rate sources'], ['Local', 'data stays in the browser']],
    bt: [
      'Expense CRUD with category validation, toasts and quick-delete actions',
      'Totals, averages, top category and monthly spend insights, with Recharts visualisations',
      'Search, sort and filter that persist, plus live conversion across five currencies'
    ],
    un: [
      ['Why LocalStorage?', 'A personal tracker does not need a backend, and the data never leaves the device. The tradeoff is no sync between devices.'],
      ['Why design loading, empty and error states?', 'Live rate APIs fail and new users have no data. Those states are part of the product, not an afterthought.'],
      ['Why aria-live toasts and keyboard controls?', 'Screen readers only announce changes that are marked as live, and not everyone uses a mouse. Accessibility is part of being usable.']
    ]
  },
  {
    id: 'tour',
    n: 'Tour Companion',
    sub: 'Travel booking ecosystem with a traveller site and an agency admin panel.',
    img: '/projects/tour-companion.png',
    ds: 'Travel booking ecosystem: tour discovery, validated reservations and an agency admin panel.',
    pf: ['Dual-sided platform', 'PHP + MySQL'],
    tg: ['PHP', 'MySQL', 'Backend'],
    f: ['Systems', 'Backend'],
    gh: GH + 'tour-companion',
    mt: [['2', 'sides: travellers and agency'], ['PHP + MySQL', 'backend'], ['Server-side', 'validation on every booking']],
    bt: [
      'Tour browsing, discovery and booking with status tracking',
      'User authentication with role-based access for users and admins',
      'Admin dashboard for tours, bookings and content, plus an automated newsletter'
    ],
    un: [
      ['Why validate on the server?', 'Checks in the browser can be bypassed. Booking rules have to be enforced where the data is written.'],
      ['Why a separate admin side?', 'Travellers and agencies have different jobs. An admin panel lets the agency change tours and content without touching code.'],
      ['Why a relational database?', 'Tours, bookings, users and subscriptions are linked records, which MySQL models and queries naturally.']
    ]
  }
];

const EXP = [
  {
    p: '2025',
    t: '1st Place, Ideation Round — GCET Hackathon',
    o: 'Achievement · Problem solving · Entrepreneurship · Innovation',
    b: [
      'Led the team to first place in the initial ideation phase.',
      'Designed a scalable, user-centric solution for municipal civic complaint reporting, language barriers, and transparency in how municipal issues get resolved.'
    ],
    m: ['1st place']
  },
  {
    p: '2025',
    t: 'Hacktoberfest Contributor',
    o: 'Open source · Performance · REST APIs',
    b: [
      'Debugged asynchronous state issues in React applications.',
      'Improved UI responsiveness and layout optimisation.',
      'Enhanced cross-device compatibility on production interfaces.',
      'Built structured data extraction scripts for maintainable pipelines.',
      'Explored rate limiting techniques for API reliability.'
    ],
    m: []
  },
  {
    p: '2026',
    t: 'Social Summer of Code: Open Source Contributor',
    o: 'Open source · Backend · TypeScript · Performance',
    b: [
      'Contributed to an open-source backend system using TypeScript and Node.js.',
      'Built a centralized file ingestion system with persistent storage, supporting HTTP uploads and cloud downloads with deterministic naming for reliable pipeline processing.',
      'Engineered a background worker pipeline automating end-to-end processing (OCR, Vision, Tagging, Indexing) from an in-memory job queue.',
      'Implemented job orchestration with lifecycle tracking, concurrency safety and per-stage observability for fault-tolerant execution.'
    ],
    m: []
  },
  {
    p: '2025 – Present',
    t: 'Software Engineering & Systems Development',
    o: 'Systems engineering · Distributed backends · ML pipelines · Authentication · Fault tolerance',
    b: [
      'Architected RESTful APIs with Express, FastAPI, and MongoDB/PostgreSQL.',
      'Built scalable distributed services with JWT, role-based access control, and Redis caching.',
      'Integrated Python ML inference pipelines with high-throughput backend services.'
    ],
    m: []
  },
  {
    p: '[confirm dates]',
    isTodoPeriod: true,
    t: 'IBM BoB AI Innovation Hackathon: Top 15',
    o: 'Team BugHunters · CHARUSAT × IBM',
    b: [
      'Built Harborline, a port congestion forecasting and optimisation platform, with the team.',
      'Reached the Top 15.'
    ],
    m: ['Top 15'],
    flag: 1
  },
  {
    p: '2026',
    t: 'Amazon ML Challenge: Business Entity Resolution',
    o: 'Competition · Unstop',
    b: [
      'Matched records across three noisy business-data sources.',
      '__TODO__Add your approach, rank or score.'
    ],
    m: [],
    flag: 1
  }
];

const JR = [
  ['2023', 'Started programming journey · Learned Python · Worked with MySQL · Built algorithmic problem-solving foundations · Mastered core computer science basics'],
  ['2024', 'Built backend systems & RESTful APIs · Expanded software engineering architecture · Implemented authentication, concurrency, and deployments · Engineered clean client-server systems'],
  ['2025', 'Engineered production-grade systems · Architected Vector AI and Safe Stay · Contributed to open-source software · Optimized asynchronous state handling · Built rate-limiting and robust data ingestion pipelines · Developed disciplined systems design'],
  ['2026', 'Building distributed backend architectures · Deepening systems design & low-latency services · Advancing through open-source software engineering · Integrating ML models into production backends · Mastering cloud infrastructure and DevOps for high availability']
];

const SK = [
  ['Coursework', 'Data Structures & Algorithms, Object Oriented Programming, Database Management, Computer Networks'],
  ['Frontend', 'React.js, Tailwind CSS, JavaScript, HTML5 / CSS3'],
  ['Backend', 'Node.js, Express.js, REST APIs, FastAPI'],
  ['Tools & databases', 'MongoDB, MySQL, Git/GitHub, Postman, Redis'],
  ['Languages', 'JavaScript, Python, Java, C++, TypeScript, PHP'],
  ['Soft skills', 'Communication, Teamwork, Leadership, Adaptability']
];

const MODES = ['Auto', 'Dawn', 'Day', 'Golden', 'Dusk', 'Night'];
const HRS = [null, 6.9, 12, 17.9, 19.5, 23];
const FILTERS = ['All', 'Backend', 'AI & ML', 'Systems', 'Data'];

/* =========================== MAIN APP COMPONENT =========================== */
export default function App() {
  const [modeIdx, setModeIdx] = useState(0);
  const [filter, setFilter] = useState('All');
  const [activeModalIdx, setActiveModalIdx] = useState(null);
  const [localTimeStr, setLocalTimeStr] = useState('');
  const [phaseStr, setPhaseStr] = useState('');

  const starsRef = useRef([]);

  // Time calculations
  const hourNow = () => {
    const d = new Date();
    return d.getHours() + d.getMinutes() / 60;
  };
  const getHour = () => (HRS[modeIdx] === null ? hourNow() : HRS[modeIdx]);

  // Atmosphere redraw logic
  const drawAtmosphere = () => {
    const h = getHour();
    const P = palAt(h);
    const W = window.innerWidth;
    const Hh = window.innerHeight;

    const size = (id, w, h) => {
      const c = document.getElementById(id);
      if (!c) return null;
      c.width = w;
      c.height = h;
      return c.getContext('2d');
    };

    // Sky
    let x = size('sk', W, Hh);
    if (!x) return;
    let g = x.createLinearGradient(0, 0, 0, Hh);
    g.addColorStop(0, P.t);
    g.addColorStop(0.55, P.m);
    g.addColorStop(1, P.b);
    x.fillStyle = g;
    x.fillRect(0, 0, W, Hh);

    const sx = P.sx * W;
    const sy = P.sy * Hh;
    const R = Math.max(W, Hh) * 0.7;
    const rc = hx(P.sc);

    g = x.createRadialGradient(sx, sy, 0, sx, sy, R);
    g.addColorStop(0, `rgba(${rc},${P.gl * 0.7})`);
    g.addColorStop(0.25, `rgba(${rc},${P.gl * 0.25})`);
    g.addColorStop(1, `rgba(${rc},0)`);
    x.fillStyle = g;
    x.fillRect(0, 0, W, Hh);

    if (P.n < 0.6) {
      x.fillStyle = `rgba(${rc},${1 - P.n})`;
      x.beginPath();
      x.arc(sx, sy, 24, 0, 6.3);
      x.fill();
    }
    if (P.n > 0.3) {
      x.fillStyle = `rgba(235,240,250,${P.n})`;
      x.beginPath();
      x.arc(sx, sy, 20, 0, 6.3);
      x.fill();
      x.fillStyle = `rgba(20,38,63,${P.n * 0.7})`;
      x.beginPath();
      x.arc(sx + 7, sy - 3, 18, 0, 6.3);
      x.fill();
    }

    // Stars
    if (!starsRef.current.length) {
      for (let i = 0; i < 170; i++) {
        starsRef.current.push([Math.random(), Math.random() * 0.6, 0.4 + Math.random() * 1.4, Math.random()]);
      }
    }
    if (P.n > 0.05) {
      starsRef.current.forEach((s) => {
        x.fillStyle = `rgba(255,255,255,${P.n * (0.3 + 0.6 * s[3])})`;
        x.beginPath();
        x.arc(s[0] * W, s[1] * Hh, s[2] * 0.7, 0, 6.3);
        x.fill();
      });
    }

    // Clouds
    const cw = Math.ceil((W * 2) / 4);
    const ch = Math.ceil((Hh * 0.55) / 4);
    const oc = document.createElement('canvas');
    oc.width = cw;
    oc.height = ch;
    const ox = oc.getContext('2d');
    const im = ox.createImageData(cw, ch);
    const cc = hx(P.cc);
    const sh = hx(mc(P.cc, P.m, 0.55));
    for (let j = 0; j < ch; j++) {
      for (let i = 0; i < cw; i++) {
        const d = f2(i * 0.012, j * 0.05, 17);
        let v = Math.max(0, Math.min(1, (d - 0.5) / 0.26));
        v = sm(v);
        const wv = Math.sin((j / ch) * Math.PI);
        v *= wv * (0.5 + 0.5 * f2(i * 0.004, j * 0.03, 31));
        const u = Math.min(1, f2(i * 0.02, j * 0.08, 41) * 1.3);
        const p = (j * cw + i) * 4;
        im.data[p] = cc[0] + (sh[0] - cc[0]) * u * 0.7;
        im.data[p + 1] = cc[1] + (sh[1] - cc[1]) * u * 0.7;
        im.data[p + 2] = cc[2] + (sh[2] - cc[2]) * u * 0.7;
        im.data[p + 3] = 255 * v * P.ca;
      }
    }
    ox.putImageData(im, 0, 0);
    x = size('cl', cw * 4, ch * 4);
    if (x) {
      x.imageSmoothingQuality = 'high';
      x.drawImage(oc, 0, 0, cw * 4, ch * 4);
      const clEl = document.getElementById('cl');
      if (clEl) {
        clEl.style.height = ch * 4 + 'px';
        clEl.style.top = '4%';
      }
    }

    // Ridges
    const hz = P.hz;
    const sv = hx(P.sc);
    const drawRidge = (id, list) => {
      const cx = size(id, W, Hh);
      if (!cx) return;
      list.forEach((L) => {
        const base = Hh * L[0];
        const amp = Hh * L[1];
        const col = P.r[L[2]];
        const fq = L[3];
        const sd = L[4];
        const pth = new Path2D();
        let y;
        pth.moveTo(0, Hh);
        for (let X = 0; X <= W; X += 6) {
          y = base - amp * Math.pow(f1(X * fq + sd * 9, sd), 1.25);
          pth.lineTo(X, y);
        }
        pth.lineTo(W, Hh);
        pth.closePath();

        const gg = cx.createLinearGradient(0, base - amp, 0, Hh);
        gg.addColorStop(0, col);
        gg.addColorStop(0.55, mc(col, hz, L[5]));
        gg.addColorStop(1, mc(col, hz, Math.min(0.9, L[5] + 0.25)));
        cx.fillStyle = gg;
        cx.fill(pth);

        cx.save();
        cx.clip(pth);
        const mg = cx.createLinearGradient(0, base - amp * 0.2, 0, base + Hh * 0.12);
        mg.addColorStop(0, `rgba(${hx(hz)},0)`);
        mg.addColorStop(0.5, `rgba(${hx(hz)},${0.35 * L[5] + 0.1})`);
        mg.addColorStop(1, `rgba(${hx(hz)},0)`);
        cx.fillStyle = mg;
        cx.fillRect(0, base - amp * 0.2, W, Hh * 0.35);
        cx.restore();

        if (P.n < 0.5) {
          const st = new Path2D();
          for (let X = 0; X <= W; X += 6) {
            y = base - amp * Math.pow(f1(X * fq + sd * 9, sd), 1.25);
            if (X) st.lineTo(X, y);
            else st.moveTo(X, y);
          }
          cx.strokeStyle = `rgba(${sv},${0.22 * (1 - P.n)})`;
          cx.lineWidth = 1.2;
          cx.stroke(st);
        }
      });
    };

    drawRidge('fr', [[0.6, 0.2, 0, 0.0016, 1, 0.62], [0.67, 0.22, 1, 0.0021, 2, 0.5]]);
    drawRidge('md_', [[0.77, 0.2, 2, 0.0029, 3, 0.28]]);
    drawRidge('nr', [[0.9, 0.17, 3, 0.0042, 4, 0.08]]);

    // Foliage
    const drawLeaves = (id, ox0, oy, a0, a1, n, len, col, seed) => {
      const cx = size(id, W, Hh);
      if (!cx) return;
      const r = (k) => H(k, seed, 7);
      for (let k = 0; k < n; k++) {
        const a = a0 + (a1 - a0) * r(k);
        const L = len * (0.55 + 0.7 * r(k + 50));
        const w = L * (0.07 + 0.06 * r(k + 90));
        const px = ox0;
        const py = oy;
        cx.save();
        cx.translate(px, py);
        cx.rotate(a);
        cx.beginPath();
        cx.moveTo(0, 0);
        cx.bezierCurveTo(L * 0.3, -w * 2, L * 0.7, -w * 1.4, L, 0);
        cx.bezierCurveTo(L * 0.7, w * 1.4, L * 0.3, w * 2, 0, 0);
        const gr = cx.createLinearGradient(0, 0, L, 0);
        gr.addColorStop(0, col);
        gr.addColorStop(1, mc(col, P.hz, 0.18));
        cx.fillStyle = gr;
        cx.globalAlpha = 0.75 + 0.25 * r(k + 20);
        cx.fill();
        cx.restore();
      }
    };

    const L1 = Math.min(W, Hh * 1.3) * 0.55;
    drawLeaves('fa', -W * 0.02, Hh * 1.02, -1.45, -0.35, 34, L1, P.fo, 3);
    drawLeaves('fb', W * 1.02, -Hh * 0.03, 1.7, 2.9, 26, L1 * 0.8, P.fo, 9);

    // CSS variables & data-mode
    const lm = lum(mc(P.t, P.m, 0.73));
    const dark = lm < 0.5;
    const docEl = document.documentElement;
    docEl.style.setProperty('--hi', dark ? '#f4efe6' : '#1c2326');
    docEl.style.setProperty('--hm', dark ? 'rgba(244,239,230,.75)' : 'rgba(28,35,38,.72)');
    docEl.style.setProperty('--em', dark ? '#f3c98a' : '#8f5418');
    docEl.style.setProperty('--sun2', dark ? '#16202a' : '#f6f2ea');
    docEl.style.setProperty('--sc', dark ? 'rgba(0,0,0,.35)' : 'rgba(255,248,236,.32)');
    docEl.dataset.mode = (P.n > 0.45 || lum(P.m) < 0.32) ? 'dark' : 'light';
    document.body.style.background = P.b;

    // Time text
    const d = new Date();
    const t = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
    setLocalTimeStr(modeIdx ? `Atmosphere · ${MODES[modeIdx]}` : `Your local time · ${t}`);
    setPhaseStr(phase(h));
  };

  // Update atmosphere on mount, mode change, or resize
  useEffect(() => {
    drawAtmosphere();
    const interval = setInterval(() => {
      if (modeIdx === 0) drawAtmosphere();
    }, 180000);

    let rt;
    const handleResize = () => {
      clearTimeout(rt);
      rt = setTimeout(drawAtmosphere, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [modeIdx]);

  // Parallax on scroll and mousemove
  useEffect(() => {
    const ids = [['fr', 0.05], ['md_', 0.1], ['nr', 0.16], ['fa', 0.05], ['fb', 0.05], ['cl', 0.03]];

    const handleScroll = () => {
      const s = window.scrollY;
      ids.forEach(([id, factor]) => {
        const el = document.getElementById(id);
        if (el) el.style.transform = `translateY(${-s * factor}px)`;
      });
      const fa = document.getElementById('fa');
      const fb = document.getElementById('fb');
      const nav = document.getElementById('nav');
      if (fa) fa.style.opacity = Math.max(0, 0.95 - s / 700);
      if (fb) fb.style.opacity = Math.max(0, 0.85 - s / 600);
      if (nav) nav.classList.toggle('sc', s > window.innerHeight * 0.7);
    };

    const handleMouseMove = (e) => {
      const mx = e.clientX / window.innerWidth - 0.5;
      [['fr', 8], ['md_', 16], ['nr', 26], ['fa', -30], ['fb', -18]].forEach(([id, factor]) => {
        const el = document.getElementById(id);
        if (el) el.style.translate = `${-mx * factor}px 0`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // IntersectionObserver for scroll reveals
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.rv:not(.in)').forEach((e) => io.observe(e));

    return () => io.disconnect();
  }, [filter]);

  // Modal keyboard listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalIdx(null);
      } else if (activeModalIdx !== null) {
        if (e.key === 'ArrowRight') {
          setActiveModalIdx((prev) => (prev + 1) % PROJ.length);
        } else if (e.key === 'ArrowLeft') {
          setActiveModalIdx((prev) => (prev + PROJ.length - 1) % PROJ.length);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIdx]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [activeModalIdx]);

  const activeProj = activeModalIdx !== null ? PROJ[activeModalIdx] : null;

  return (
    <>
      {/* ---------- ATMOSPHERE CANVAS & BACKGROUND ---------- */}
      <div id="atm">
        <canvas id="sk"></canvas>
        <canvas id="cl" className="cl"></canvas>
        <canvas id="fr"></canvas>
        <canvas id="md_"></canvas>
        <canvas id="nr"></canvas>
        <canvas id="fa"></canvas>
        <canvas id="fb"></canvas>
        <div className="scrim"></div>
        <div className="vig"></div>
      </div>

      <div className="grain"></div>

      {/* ---------- NAVIGATION ---------- */}
      <header className="nav" id="nav">
        <a className="nm" href="#top">Aubaid Ahmed Saiyed</a>
        <div className="lk">
          <a href="#work">Work</a>
          <a href="#exp">Experience</a>
          <a href="#contact">Contact</a>
          <a href="/Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          <button
            className="at"
            id="at"
            onClick={() => setModeIdx((prev) => (prev + 1) % MODES.length)}
          >
            Atmosphere: {MODES[modeIdx]}
          </button>
        </div>
      </header>

      <main>
        {/* ---------- HERO ---------- */}
        <section className="hero" id="top">
          <div className="tl">
            <span className="mono">Software Engineer · Backend &amp; AI</span>
            <h1>Some problems are <span className="em">worth sitting with.</span></h1>
            <p className="sub">Understanding them is where building begins.</p>
          </div>
          <div className="bt">
            <div>
              <p className="lead">
                Software engineer focused on backend infrastructure, distributed systems, and AI/ML — building systems that scale without losing their human purpose.
              </p>
              <div className="row">
                <a className="cta" href="#work">Selected work <span>↓</span></a>
                <span className="avail">Open to opportunities</span>
                <span className="mono" style={{ opacity: 0.85 }}>Backend · Systems · AI</span>
              </div>
            </div>
            <div className="hero-aside">
              <div className="hp-card">
                <div className="hp-img-box">
                  <img src="/photo.jpg" alt="Aubaid Ahmed Saiyed" className="hp-img" />
                </div>
                <div className="hp-meta">
                  <b>Aubaid Ahmed</b>
                  <span className="mono">Software Engineer</span>
                </div>
              </div>
              <div className="wx">
                <span className="mono" id="wxl">{localTimeStr}</span>
                <b id="wxp">{phaseStr}</b>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- ABOUT ---------- */}
        <section className="band" id="about">
          <span className="mono rv">About</span>
          <h2 className="stmt rv">
            I am a B.Tech IT student graduating in 2028, exploring how technology can solve real-world problems through user-centric solutions with a growing focus on software engineering, backend infrastructure, AI/ML, and systems that scale without losing their human purpose.
          </h2>
          <div className="how rv">
            <div>
              <i>01</i>
              <h3 className="s">Reliable backend systems built for growth and speed.</h3>
            </div>
            <div>
              <i>02</i>
              <h3 className="s">Practical AI integration, used exactly where it adds real value.</h3>
            </div>
            <div>
              <i>03</i>
              <h3 className="s">Clear system design and structured problem-solving.</h3>
            </div>
          </div>
          <p className="one rv">Curious by nature. Consistent by choice.</p>
        </section>

        {/* ---------- SELECTED WORK / PROJECTS ---------- */}
        <section className="veil" id="work">
          <div className="sh rv">
            <div>
              <span className="mono">Selected work</span>
              <h2>Projects</h2>
            </div>
            <div className="flt" id="flt">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={filter === f ? 'on' : ''}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="fig v rv">
            <div>
              <b>83%</b>
              <span>forecast accuracy in Vector AI</span>
            </div>
            <div>
              <b>1,495+</b>
              <span>dependency edges mapped in StackLens</span>
            </div>
            <div>
              <b>1st</b>
              <span>place, GCET Hackathon ideation round, 2025</span>
            </div>
          </div>

          <div className="ix" id="ix">
            {PROJ.map((p, i) => {
              const isOff = filter !== 'All' && !p.f.includes(filter);
              return (
                <div
                  key={p.id}
                  className={`rw ${p.ft ? 'ft' : ''} ${isOff ? 'off' : ''} rv`}
                  onClick={() => setActiveModalIdx(i)}
                >
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{p.n}</h3>
                    <p className="ds">{p.ds}</p>
                  </div>
                  <div className="pf">
                    {p.pf.map((x, idx) => (
                      <b key={idx}>{x}</b>
                    ))}
                  </div>
                  <div className="tg">{p.tg.join(' · ')}</div>
                  <span className="go">View details <span>→</span></span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------- PRODUCT THINKING ---------- */}
        <section className="band" id="how">
          <span className="mono rv">Product thinking</span>
          <h2 className="rv">I start with the problem, not the stack.</h2>
          <div className="how four rv">
            <div>
              <i>01</i>
              <h3 className="s">Problem-first thinking</h3>
              <p>I start with the problem, not the stack. Understanding users shapes every technical decision.</p>
            </div>
            <div>
              <i>02</i>
              <h3 className="s">Feature prioritization</h3>
              <p>I ship what matters first, balancing impact, effort, and what the product actually needs next.</p>
            </div>
            <div>
              <i>03</i>
              <h3 className="s">Engineering + product</h3>
              <p>Clean APIs and solid architecture only matter when they support outcomes people care about.</p>
            </div>
            <div>
              <i>04</i>
              <h3 className="s">Real-world impact</h3>
              <p>I build software meant to be used, maintained, and improved — not just demonstrated.</p>
            </div>
          </div>
        </section>

        {/* ---------- EXPERIENCE & ACHIEVEMENTS ---------- */}
        <section className="veil" id="exp">
          <div className="sh rv">
            <div>
              <span className="mono">Experience &amp; achievements</span>
              <h2>Where I've built things</h2>
            </div>
          </div>

          <div id="ex">
            {EXP.map((e, index) => (
              <div key={index} className={`ex ${e.flag ? 'flag' : ''} rv`}>
                <div className="pd">
                  {e.isTodoPeriod ? <span className="todo">{e.p}</span> : e.p}
                </div>
                <div>
                  <h3>{e.t}</h3>
                  <div className="og">{e.o}</div>
                  <ul>
                    {e.b.map((x, bIdx) => (
                      <li key={bIdx}>
                        {x.startsWith('__TODO__') ? (
                          <span className="todo">[{x.replace('__TODO__', '')}]</span>
                        ) : (
                          x
                        )}
                      </li>
                    ))}
                  </ul>
                  {e.m.length > 0 && (
                    <div className="ms">
                      {e.m.map((mTag, mIdx) => (
                        <b key={mIdx}>{mTag}</b>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="sh rv" style={{ marginTop: '12vh' }}>
            <div>
              <span className="mono">Growth</span>
              <h2 style={{ fontSize: 'clamp(36px,4.6vw,68px)' }}>The journey so far</h2>
            </div>
          </div>

          <div id="jr">
            {JR.map(([year, desc], idx) => (
              <div key={idx} className="jr rv">
                <span className="mono">{year}</span>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div className="two">
            <div className="rv">
              <div className="sh" style={{ marginBottom: '3vh' }}>
                <div>
                  <span className="mono">Skills &amp; technical coursework</span>
                  <h2 style={{ fontSize: 'clamp(36px,4.4vw,64px)' }}>What I work with</h2>
                </div>
              </div>
              <div className="sk" id="sk2">
                {SK.map(([cat, items], idx) => (
                  <div key={idx}>
                    <span className="mono">{cat}</span>
                    <p>{items}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="ed rv">
              <span className="mono" style={{ color: 'var(--muted)' }}>Education</span>
              <h3>B.Tech, Information Technology</h3>
              <p>Graduating 2028 · <span className="todo">[add college and CGPA]</span></p>

              <span className="mono" style={{ color: 'var(--muted)' }}>Working style</span>
              <h3>Analytical, product-minded, collaborative</h3>
              <p>Analytical · Product thinking · Data-driven · Collaborative · Detail-oriented</p>

              <span className="mono" style={{ color: 'var(--muted)' }}>Currently exploring</span>
              <h3>Systems that scale</h3>
              <p>Backend infrastructure · AI / ML · Problem solving · Software engineering · Distributed systems · System design</p>
            </div>
          </div>
        </section>

        {/* ---------- CONTACT & FOOTER ---------- */}
        <section className="band end" id="contact">
          <div>
            <span className="mono rv">Contact</span>
            <h2 className="rv">Let's build something <span className="em">real.</span></h2>
            <div className="ls rv">
              <a href="mailto:aubaidsaiyed12@gmail.com">aubaidsaiyed12@gmail.com ↗</a>
              <a href={GH} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/aubaid-ahmed-saiyed/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://x.com/AubaidAhmedS" target="_blank" rel="noreferrer">X ↗</a>
              <a href="/Resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
            </div>
          </div>
          <footer>
            <span>© 2026 Aubaid Ahmed Saiyed</span>
            <span>The sky follows your local time.</span>
          </footer>
        </section>
      </main>

      {/* ---------- MODAL SHEET ---------- */}
      <div
        className={`md ${activeModalIdx !== null ? 'on' : ''}`}
        id="md"
        onClick={(e) => {
          if (e.target.id === 'md') setActiveModalIdx(null);
        }}
      >
        {activeProj && (
          <div className="sheet pk" id="sheet">
            <div className="hd">
              <div>
                <span className="mono" style={{ color: 'var(--muted)' }}>
                  {String(activeModalIdx + 1).padStart(2, '0')} / {String(PROJ.length).padStart(2, '0')}
                </span>
                {activeProj.nw ? (
                  <span className="mono nw"> · New · confirm details</span>
                ) : null}
                <h2>{activeProj.n}</h2>
                <p className="sb">{activeProj.sub}</p>
              </div>
              <button
                className="x"
                id="cx"
                aria-label="Close"
                onClick={() => setActiveModalIdx(null)}
              >
                ✕
              </button>
            </div>

            {activeProj.img && (
              <div className="ph has" data-ph={`a_${activeProj.id}`}>
                <img
                  src={activeProj.img}
                  alt={activeProj.n}
                  style={{ display: 'block' }}
                />
              </div>
            )}

            <div className="mx">
              {activeProj.mt.map(([val, label], idx) => (
                <div key={idx}>
                  <b className={val.startsWith('[') ? 'todo' : ''}>{val}</b>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="c2">
              <div>
                <h6>Proof of work</h6>
                <ul className="bl">
                  {activeProj.bt.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h6>Proof of understanding</h6>
                {activeProj.un.map(([q, ans], idx) => (
                  <div key={idx} className="qa">
                    <h5>{q}</h5>
                    <p>{ans}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="ft2">
              <span className="mono nw">
                Understanding notes drafted from your project details · edit in your own words
              </span>
              <div className="nv">
                <a href={activeProj.gh} target="_blank" rel="noreferrer" style={{ color: 'var(--acc)' }}>
                  GitHub ↗
                </a>
                {activeProj.demo && (
                  <a href={activeProj.demo} target="_blank" rel="noreferrer" style={{ color: 'var(--acc)' }}>
                    Live demo ↗
                  </a>
                )}
                <button
                  id="pv"
                  aria-label="Previous"
                  onClick={() => setActiveModalIdx((prev) => (prev + PROJ.length - 1) % PROJ.length)}
                >
                  ←
                </button>
                <button
                  id="nx"
                  aria-label="Next"
                  onClick={() => setActiveModalIdx((prev) => (prev + 1) % PROJ.length)}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
