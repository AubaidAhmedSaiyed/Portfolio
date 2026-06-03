export const projects = [
  {
    id: 'vector-ai',
    title: 'Vector AI',
    description:
      'Retail demand intelligence platform integrating frontend, backend, and machine learning for forecasting and inventory optimisation.',
    summary:
      'End-to-end demand system with React, Express, MongoDB, and FastAPI ML services, structured backtesting, and audited prediction pipelines.',
    metrics: [
      { label: 'MAPE', value: '17%' },
      { label: 'MAE', value: '2.375' },
      { label: 'RMSE', value: '2.817' },
    ],
    tags: ['Forecasting', 'REST APIs', 'FastAPI'],
    highlights: [
      'React frontend with Express and MongoDB backend',
      'FastAPI ML integration with XGBoost forecasting',
      'Structured backtesting with MAPE, MAE, and RMSE tracking',
      'EOQ-driven inventory optimisation',
      'Forecast and financial impact APIs',
      'Multi-SKU scalable pipelines with prediction logging',
    ],
    tech: ['MongoDB', 'Node.js', 'Express.js', 'React.js', 'Python', 'FastAPI'],
    github: 'https://github.com/aubaid/vector-ai',
    demo: 'https://vector-ai.example.com',
  },
  {
    id: 'safe-stay',
    title: 'Safe Stay',
    description:
      'Emergency shelter platform connecting evacuees with verified temporary housing during crises and disasters.',
    summary:
      'MERN platform with JWT authentication, role-based dashboards, file uploads, and a scalable API layer for coordination workflows.',
    metrics: [
      { label: 'Stack', value: 'MERN' },
      { label: 'Auth', value: 'JWT' },
      { label: 'APIs', value: 'REST' },
    ],
    tags: ['Authentication', 'Backend', 'Open Source'],
    highlights: [
      'JWT authentication and RESTful APIs',
      'Middleware architecture with error handling',
      'Secure file upload systems',
      'Role-based dashboards',
      'Responsive React and Tailwind frontend',
      'Scalable backend systems',
    ],
    tech: ['MongoDB', 'Node.js', 'Express.js', 'React.js'],
    github: 'https://github.com/aubaid/safe-stay',
    demo: 'https://safe-stay.example.com',
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker Web App',
    description:
      'Production-style personal expense dashboard built as a web developer internship project with analytics, currency conversion, and polished UI.',
    summary:
      'Full-featured expense tracker with CRUD, analytics, Recharts visualizations, live FX conversion, and accessible interaction patterns.',
    metrics: [
      { label: 'Type', value: 'Dashboard' },
      { label: 'Charts', value: 'Recharts' },
      { label: 'Storage', value: 'Local' },
    ],
    tags: ['React', 'Analytics', 'Accessibility'],
    highlights: [
      'Expense CRUD with categorized transactions and validation',
      'Analytics dashboard with monthly spending insights',
      'Recharts pie visualizations',
      'Live FX conversion, search, and sorting',
      'Local storage persistence with loading and error states',
      'Keyboard-friendly controls and toast notifications',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Recharts', 'LocalStorage'],
    github: 'https://github.com/aubaid/expense-tracker',
    demo: 'https://expense-tracker.example.com',
    glassPreview: true,
  },
  {
    id: 'feedback-flow',
    title: 'Feedback Flow CLI',
    description:
      'Command line feedback management system for collecting, analyzing, and prioritizing customer feedback workflows.',
    summary:
      'C++ CLI with user and product manager modes, file handling, and menu-driven architecture simulating real product management flows.',
    metrics: [
      { label: 'Language', value: 'C++' },
      { label: 'Mode', value: 'CLI' },
      { label: 'Pattern', value: 'OOP' },
    ],
    tags: ['OOP', 'File Handling', 'CLI'],
    highlights: [
      'User mode: feedback submission and viewing stored entries',
      'PM mode: pain points, sentiment, priority, and satisfaction analysis',
      'Structured classes with file handling and string manipulation',
      'Menu-driven architecture and product workflow simulation',
    ],
    tech: ['C++', 'File Handling', 'OOP', 'CLI Systems'],
    github: 'https://github.com/aubaid/feedback-flow',
    demo: null,
  },
];
