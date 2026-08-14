import { Project, Experience, Achievement, Education, BuildDomain, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'SHIVAM RAJ',
  title: 'Computer Engineering Student & Software Developer',
  focusAreas: ['Android Development', 'Full-Stack Systems', 'AI & Machine Learning', 'Backend & DBs'],
  location: 'Patiala / India',
  email: 'sraj.coe@gmail.com',
  phone: '+91 8210674035',
  github: 'https://github.com/svm-codes-fs',
  linkedin: 'https://www.linkedin.com/in/shivam-raj-qwertyuiop/',
  status: 'AVAILABLE FOR INTERNSHIPS & ROLES',
  batch: '2028',
  academicInstitution: 'Thapar Institute of Engineering & Technology',
  statement: 'I LIKE TURNING MESSY PROBLEMS INTO SOFTWARE THAT ACTUALLY WORKS.',
  bio: "I'm Shivam Raj, a Computer Engineering undergraduate at Thapar Institute of Engineering and Technology (Batch of 2028). I specialize in building practical, high-performance software across Android, full-stack web applications, backend APIs, and explainable machine learning systems. Driven by strong fundamentals in Data Structures & Algorithms, Object-Oriented Design, and clean system architecture.",
};

export const PROJECTS: Project[] = [
  {
    id: 'presentplus',
    number: '01',
    title: 'PRESENTPLUS',
    subtitle: 'Student Attendance Tracker Android App',
    tagline: 'Offline-first Android attendance management system built to eliminate paper-based logs.',
    description: 'Led a 3-person engineering team end-to-end — from system architecture to production APK delivery. Built an offline-first Android application in Java and SQLite that replaced manual paper rolls for 200+ active student records with instant CSV/Excel export, automated percentage auditing, and tamper-resistant local records.',
    category: 'Android Engineering / Offline-First',
    year: '2024',
    tags: ['Android SDK', 'Java', 'XML', 'SQLite', 'Offline Local Storage'],
    role: 'Lead Android Engineer & Architect',
    featuredAward: '2ND PLACE — DISTRICT LEVEL HACKATHON',
    featuredAwardYear: '2024',
    highlights: [
      'Engineered an offline-first SQLite database schema supporting 200+ student profiles with atomic transactions.',
      'Designed modular UI workflows in native XML and Java Activities with custom batch-attendance toggling.',
      'Created custom CSV and tabular export pipelines for faculty auditing without requiring internet connectivity.',
      'Won 2nd Place at a competitive multi-college District Hackathon under stringent time and feature constraints.'
    ],
    architectureOverview: 'Clean Layered Architecture with Local SQLite Persistence Provider, Repository Pattern, and UI Activity View Binding.',
    metrics: [
      { label: 'Student Records', value: '200+' },
      { label: 'Network Dependency', value: '0% (Offline)' },
      { label: 'Hackathon Rank', value: '2nd Place' },
      { label: 'Team Size', value: '3 Engineers' }
    ],
    githubUrl: 'https://github.com/svm-codes-fs/presentplus',
    liveUrl: 'https://github.com/svm-codes-fs/presentplus',
    visualType: 'presentplus'
  },
  {
    id: 'loanlens',
    number: '02',
    title: 'LOANLENS',
    subtitle: 'Explainable Loan Approval Prediction System',
    tagline: 'End-to-end ML pipeline with Explainable AI (XAI) for auditable credit risk assessment.',
    description: 'Designed and built a full machine learning pipeline in Python (scikit-learn) and Flask to evaluate loan approval outcomes. Integrated an Explainable AI (XAI) layer with feature attribution scoring to provide transparent, auditable decision reasoning for non-technical credit officers and applicants.',
    category: 'Machine Learning & Web Engineering',
    year: '2024',
    tags: ['Python', 'scikit-learn', 'Flask', 'REST APIs', 'Explainable AI', 'Predictive Modeling'],
    role: 'ML & Backend Engineer',
    highlights: [
      'Engineered feature preprocessing, imputing, and risk-weighting pipelines on financial datasets with high class imbalance.',
      'Trained and evaluated ensemble classifiers achieving high precision on loan default and approval thresholds.',
      'Implemented explainability layer generating interpretable feature attribution factors for each individual prediction.',
      'Built a responsive multi-step Flask REST interface enabling real-time applicant risk profiling.'
    ],
    architectureOverview: 'Python Flask REST API + scikit-learn Model Pipeline with JSON Feature Vectorization & Auditable Inference Engine.',
    metrics: [
      { label: 'Domain', value: 'FinTech / ML' },
      { label: 'Inference Latency', value: '<45ms' },
      { label: 'Decision Audit', value: '100% XAI' },
      { label: 'Framework', value: 'Flask + scikit' }
    ],
    githubUrl: 'https://github.com/svm-codes-fs/loanlens-ml',
    liveUrl: 'https://github.com/svm-codes-fs/loanlens-ml',
    visualType: 'loanlens'
  },
  {
    id: 'placement-management',
    number: '03',
    title: 'PLACEMENT ENGINE',
    subtitle: 'Campus Recruitment & Candidate Tracking System',
    tagline: 'Role-based campus hiring platform streamlining student eligibility, drives, and interview funnels.',
    description: 'Full-stack campus placement portal designed to coordinate student eligibility verification, company job listings, application status funnels, and recruitment analytics for institutional training and placement cells.',
    category: 'Full-Stack & Database Engineering',
    year: '2024',
    tags: ['React', 'Node.js', 'SQL', 'RESTful APIs', 'Role-Based Access'],
    role: 'Full-Stack Developer',
    highlights: [
      'Developed role-based authentication and access control tiers for Students, Placement Coordinators, and Company Recruiters.',
      'Designed normalized relational schema with indexing on student GPA, backlog counts, and skill tags for automated filtering.',
      'Implemented real-time drive notification pipeline and dynamic applicant status tracking board.'
    ],
    architectureOverview: 'Client-Server Architecture with JWT Auth, REST Endpoints, and Structured Relational Database Store.',
    metrics: [
      { label: 'Role Portals', value: '3 Distinct' },
      { label: 'Filter Speed', value: 'Instant' },
      { label: 'Data Model', value: 'Normalized SQL' },
      { label: 'Stack', value: 'React / Node' }
    ],
    githubUrl: 'https://github.com/svm-codes-fs/placement-system',
    liveUrl: 'https://github.com/svm-codes-fs/placement-system',
    visualType: 'placement'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    year: '2024',
    period: 'June 2024 — July 2024',
    role: 'Android Application Development Intern',
    company: 'Code Infosystem Pvt. Ltd.',
    locationType: 'On-site',
    description: 'Engineered and shipped production Android features using Java, XML, Activities, and Intents within a live client-facing software product.',
    achievements: [
      'Engineered and shipped production Android features using Java, XML, Activities, and Intents within a live software product, contributing to a real-world client-facing codebase.',
      'Integrated backend logic with modular UI workflows, improving code maintainability by an estimated 20% and reducing average debugging time across feature releases.',
      'Identified, triaged, and resolved 15+ runtime crashes through systematic debugging and unit testing, directly improving application stability and reliability.',
      'Collaborated daily with a cross-functional team using Git-based version control, gaining hands-on experience with branching strategies, pull requests, and code review workflows.'
    ],
    techStack: ['Java', 'Android SDK', 'XML', 'Android Studio', 'Git', 'Debugging']
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    number: '01',
    place: '02ND PLACE',
    title: 'DISTRICT LEVEL HACKATHON',
    context: 'MULTI-COLLEGE COMPETITIVE ENGINEERING HACKATHON',
    subcontext: 'PRESENTPLUS — ANDROID ATTENDANCE MANAGEMENT SYSTEM',
    year: '2024',
    description: 'Awarded 2nd Place out of competing multi-college software teams for designing, architecting, and live-pitching PresentPlus — an offline-first Android application replacing manual paper attendance for 200+ students.',
    tags: ['Hackathon', 'Android', '2nd Place', 'Rapid Prototyping']
  },
  {
    number: '02',
    place: 'CERTIFIED',
    title: 'AGENTIC AI ASSOCIATE',
    context: 'ORACLE UNIVERSITY FOUNDATIONS ASSOCIATE',
    subcontext: 'CREDENTIAL ID: 330498011AAI26OFA',
    year: '2026',
    description: 'Certified by Oracle University in foundational Agentic AI concepts, autonomous tool calling, multi-agent coordination, and predictive model integration.',
    tags: ['Oracle', 'Agentic AI', 'Certification', 'AI Systems']
  },
  {
    number: '03',
    place: 'SELECTED',
    title: 'B.E. COMPUTER ENGINEERING ADMISSION',
    context: 'THAPAR INSTITUTE OF ENGINEERING AND TECHNOLOGY',
    subcontext: 'PREMIER ENGINEERING INSTITUTION',
    year: '2025',
    description: 'Selected for B.E. (Computer Engineering) at Thapar Institute of Engineering and Technology (Patiala), one of India’s top-ranked private engineering universities.',
    tags: ['Thapar University', 'Computer Engineering', 'Undergraduate']
  }
];

export const EDUCATIONS: Education[] = [
  {
    period: '2025 — 2028 (Expected)',
    degree: 'Bachelor of Engineering — Computer Engineering',
    institution: 'Thapar Institute of Engineering and Technology',
    location: 'Patiala, Punjab, India',
    status: 'In Progress',
    details: 'Focus on Data Structures, Algorithms, Systems Architecture, Computer Networks, Operating Systems & Advanced Software Engineering.'
  },
  {
    period: '2022 — 2025',
    degree: 'Diploma in Computer Engineering',
    institution: 'Bajaj Chandrapur Polytechnic',
    location: 'India',
    status: 'Completed',
    details: 'Comprehensive foundations in Programming, Object-Oriented Design, Database Management, and Mobile Application Development. Capstone: PresentPlus.'
  }
];

export const WHAT_I_BUILD: BuildDomain[] = [
  {
    number: '01',
    title: 'ANDROID DEVELOPMENT',
    tagline: 'Native, reliable mobile experiences with offline resilience.',
    description: 'Building robust native Android applications utilizing Java/Kotlin, Android SDK, Activities/Intents architecture, SQLite local persistence, and intuitive XML layouts that withstand network drops and edge cases.',
    capabilities: ['Native Android SDK', 'Offline-First SQLite Architecture', 'Modular Activity Workflows', 'Crash Debugging & Profiling']
  },
  {
    number: '02',
    title: 'FULL-STACK DEVELOPMENT',
    tagline: 'End-to-end web architectures with modern client & server execution.',
    description: 'Engineering responsive client applications in React paired with high-efficiency RESTful backends, state synchronization, role-based workflows, and clean modular codebases.',
    capabilities: ['React & TypeScript', 'State Management & Component Architecture', 'Tailwind CSS Systems', 'Full Lifecycle Delivery']
  },
  {
    number: '03',
    title: 'MACHINE LEARNING & AI',
    tagline: 'Predictive modeling with transparency and explainability.',
    description: 'Developing data preprocessing pipelines, scikit-learn classification models, feature attribution scoring (XAI), and agentic autonomous tool-calling integrations.',
    capabilities: ['scikit-learn Pipelines', 'Explainable AI (XAI)', 'Agentic AI Workflows', 'Model Evaluation & Tuning']
  },
  {
    number: '04',
    title: 'BACKEND & API DEVELOPMENT',
    tagline: 'Lightweight, deterministic services and secure data routing.',
    description: 'Designing REST API endpoints in Python Flask and Node.js with structured request validation, clean error handling, JSON serialization, and cross-platform clients.',
    capabilities: ['Flask & Node.js REST APIs', 'Request Routing & Middleware', 'JSON Serialization', 'Error Boundary Logic']
  },
  {
    number: '05',
    title: 'DATABASE DESIGN',
    tagline: 'Structured schemas with ACID safety and optimized querying.',
    description: 'Crafting relational schemas in SQLite and MySQL, establishing referential integrity, indexes, efficient queries, and local caching strategies.',
    capabilities: ['SQLite & MySQL Schemas', 'Relational Normalization', 'Index Optimization', 'Offline Persistence Layers']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'LANGUAGES',
    skills: [
      { name: 'Java', level: 'Core / Android', highlight: true },
      { name: 'Python', level: 'ML & Backend', highlight: true },
      { name: 'C++', level: 'DSA & Systems', highlight: true },
      { name: 'JavaScript', level: 'ES6+' },
      { name: 'TypeScript', level: 'Type-Safe Web' },
      { name: 'SQL', level: 'Relational DBs', highlight: true }
    ]
  },
  {
    category: 'MOBILE & FRONTEND',
    skills: [
      { name: 'Android SDK', level: 'Native Mobile', highlight: true },
      { name: 'XML Layouts', level: 'UI Workflows' },
      { name: 'React', level: 'Modern Frontend', highlight: true },
      { name: 'Tailwind CSS', level: 'Design Systems' },
      { name: 'HTML5 / CSS3', level: 'Web Standards' },
      { name: 'Vite', level: 'Build Tooling' }
    ]
  },
  {
    category: 'BACKEND & DATA',
    skills: [
      { name: 'Flask', level: 'Python APIs', highlight: true },
      { name: 'Node.js', level: 'Runtime' },
      { name: 'REST APIs', level: 'Design & Integration', highlight: true },
      { name: 'SQLite', level: 'Local Persistence', highlight: true },
      { name: 'MySQL', level: 'Relational Store' },
      { name: 'scikit-learn', level: 'ML Pipelines', highlight: true }
    ]
  },
  {
    category: 'TOOLS & PRACTICES',
    skills: [
      { name: 'Git & GitHub', level: 'Version Control', highlight: true },
      { name: 'Android Studio', level: 'IDE & Profiler', highlight: true },
      { name: 'VS Code', level: 'Development' },
      { name: 'Linux', level: 'Environment' },
      { name: 'Docker', level: 'Containers' },
      { name: 'DSA & OOP', level: 'Core Fundamentals', highlight: true }
    ]
  }
];
