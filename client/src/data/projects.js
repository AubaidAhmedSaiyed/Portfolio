export const projects = [
  {
    id: 'vector-ai',
    title: 'Vector AI',
    featured: true,
    description:
      'Retail intelligence platform that unifies demand forecasting, inventory optimisation, and store operations in one workflow.',
    summary:
      'Built with React, Express, MongoDB Atlas, FastAPI, Redis, and XGBoost — surfacing forecast-driven procurement decisions, EOQ analytics, and staff task lists backed by a cached multi-SKU pipeline.',
    preview: '/projects/vector-ai.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'FastAPI', 'Redis', 'Python', 'XGBoost'],
    features: [
      'XGBoost demand forecasting with Zero-Shot AI from stock snapshots',
      'EOQ-based inventory optimisation and automated expiry alerts',
      'Multi-SKU scalable pipeline with structured backtesting',
      'Real-time forecast and financial impact APIs',
      'Admin strategy layer with staff-facing actionable task lists',
      'Redis caching layer with MongoDB Atlas replication',
    ],
    metrics: [
      { label: 'MAPE', value: '17%' },
      { label: 'MAE', value: '2.38' },
      { label: 'RMSE', value: '2.82' },
      { label: 'Accuracy', value: '83%' },
    ],
    impact:
      'K6 load testing with zero request failures under production-level traffic.',
    github: 'https://github.com/aubaid/vector-ai',
    demo: 'https://vector-ai.example.com',
  },
  {
    id: 'safe-stay',
    title: 'Safe Stay',
    description:
      'Emergency shelter platform connecting evacuees with hosts and administrators through role-based dashboards and moderated listings.',
    summary:
      'MERN application with JWT authentication, Multer uploads, and separate flows for evacuees searching shelters, hosts managing availability, and admins approving listings and user access.',
    preview: '/projects/safe-stay.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Multer', 'Axios', 'React Router'],
    features: [
      'Shelter search, filtering, and booking request system for evacuees',
      'Host listing management with image uploads and availability controls',
      'Admin moderation: ban/unban users and approve suspicious listings',
      'Reviews, ratings, and favourites across evacuee and host flows',
      'JWT authentication with protected routes and role-based middleware',
      'Scalable MERN backend with role-based dashboards',
    ],
    github: 'https://github.com/aubaid/safe-stay',
    demo: 'https://safe-stay.example.com',
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker Web App',
    description:
      'Personal finance dashboard with category analytics, live currency conversion, and polished loading, empty, and error states.',
    summary:
      'React dashboard with LocalStorage persistence, Recharts visualisations, and live FX rates via Frankfurter and Open ER — built as an internship deliverable with accessible interaction patterns.',
    preview: '/projects/expense-tracker.png',
    tech: ['React.js', 'Tailwind CSS', 'Recharts', 'LocalStorage', 'External APIs'],
    features: [
      'Expense CRUD with category validation, toasts, and quick-delete actions',
      'Analytics: totals, averages, top category, and monthly spend insights',
      'Recharts pie distribution and category progress bar visualisations',
      'Live currency conversion across USD, INR, EUR, GBP, and AED',
      'Search, sort, and filter with localStorage persistence',
      'Semantic layout, keyboard-friendly controls, and aria-live toasts',
    ],
    github: 'https://github.com/aubaid/expense-tracker',
    demo: 'https://expense-tracker.example.com',
  },
  {
    id: 'tour-companion',
    title: 'Tour Companion + Agency Platform',
    description:
      'Travel booking ecosystem for discovering tour packages, submitting validated reservations, and managing content through an agency admin panel.',
    summary:
      'Dual-sided platform with a user-facing discovery and booking experience and a PHP + MySQL admin system for packages, users, subscriptions, and platform content.',
    preview: '/projects/tour-companion.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Responsive UI'],
    features: [
      'Tour package browsing, discovery, and detail exploration flows',
      'Booking system with server-side validation and status tracking',
      'User authentication with role-based access for users and admins',
      'Admin dashboard for managing tours, bookings, and platform content',
      'Contact forms and automated newsletter subscription system',
      'Dynamic PHP + MySQL backend with responsive mobile and desktop UI',
    ],
    github: 'https://github.com/aubaid/tour-companion',
    demo: 'https://tour-companion.example.com',
  },
];
