export interface Project {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  image: string
  p_image: string
  technologies: string[]
  challenges: string[]
  solutions: string[]
  results: string[]
  links: {
    live?: string
    github?: string
    portfolio?: string
  }
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'enterprise-erp-trading',
    title: 'Enterprise ERP System for Trading & Inventory',
    shortDescription: 'Advanced inventory management and procurement system',
    description: 'A comprehensive enterprise resource planning system designed for trading and inventory management with multi-platform integrations.',
    image: '/projects/erp-project.jpg',
    p_image: '/projects/erp-project.jpg',
    technologies: ['Yii', 'Laravel', 'JavaScript', 'Ajax', 'MySQL', 'Amazon API', 'eBay API'],
    challenges: [
      'Managing complex inventory workflows across multiple channels',
      'Real-time synchronization with multiple marketplace APIs',
      'Handling high-volume transactions and data processing',
    ],
    solutions: [
      'Implemented robust API integration layer for seamless platform connectivity',
      'Built efficient caching mechanisms for real-time inventory updates',
      'Designed scalable database architecture for multi-tenant operations',
    ],
    results: [
      'Reduced inventory processing time by 60%',
      'Enabled real-time sync across 4+ marketplace integrations',
      'Improved data accuracy to 99.8%',
    ],
    links: {
      portfolio: '#',
    },
    featured: true,
  },
  {
    id: '2',
    slug: 'b2b-ecommerce-erp',
    title: 'B2B eCommerce Platform (ERP-Integrated)',
    shortDescription: 'Integrated B2B marketplace with ERP connectivity',
    description: 'Custom B2B eCommerce platform with deep ERP integration, role-based dashboards, and secure payment processing.',
    image: '/projects/b2b-store.jpg',
    p_image: '/projects/b2b-project.jpg',
    technologies: ['Laravel', 'MySQL', 'JavaScript', 'Ajax', 'PayPal', 'MX Merchant'],
    challenges: [
      'Complex role-based permission system for different buyer types',
      'Secure payment processing and compliance requirements',
      'Real-time inventory synchronization with ERP backend',
    ],
    solutions: [
      'Implemented granular RBAC (Role-Based Access Control) system',
      'Integrated PCI-DSS compliant payment gateways',
      'Built automated inventory sync scheduler with error handling',
    ],
    results: [
      'Enabled 50+ business customers to place orders online',
      '100% payment processing reliability',
      'Reduced order processing time from days to minutes',
    ],
    links: {
      portfolio: '#',
    },
    featured: true,
  },
  {
    id: '3',
    slug: 'course-store-system',
    title: 'Course Store & Student Evaluation System',
    shortDescription: 'E-learning platform with gamification features',
    description: 'Comprehensive e-learning platform featuring course management, student evaluation, and gamification mechanics.',
    image: '/projects/course-system.jpg',
    p_image: '/projects/course-project.jpg',
    technologies: ['Laravel', 'Blade', 'MySQL', 'JavaScript', 'Tailwind CSS'],
    challenges: [
      'Real-time student progress tracking and analytics',
      'Gamification system design and implementation',
      'Responsive design for multiple device types',
    ],
    solutions: [
      'Built real-time progress tracking with WebSocket updates',
      'Designed comprehensive gamification system with achievements and leaderboards',
      'Implemented mobile-first responsive design',
    ],
    results: [
      'Supported 500+ concurrent learners',
      'Increased student engagement by 45% through gamification',
      '98% uptime in production',
    ],
    links: {
      portfolio: '#',
    },
    featured: true,
  },
  {
    id: '4',
    slug: 'clinic-management-app',
    title: 'Clinic Management Desktop Application',
    shortDescription: 'Windows-based clinic operations system',
    description: 'Desktop application for clinic operations including patient management, treatment logging, and financial accounting.',
    image: '/projects/clinic-desktop.jpg',
    p_image: '/projects/clinic-app.jpg',
    technologies: ['C#', '.NET', 'MySQL', 'Windows Forms'],
    challenges: [
      'Building intuitive UI for non-technical clinic staff',
      'HIPAA compliance for patient data',
      'Real-time reporting and analytics',
    ],
    solutions: [
      'Designed user-friendly Windows Forms interface',
      'Implemented encrypted patient data storage and access logging',
      'Built comprehensive reporting engine',
    ],
    results: [
      'Adopted by 3 clinics with 50+ staff members',
      'Reduced patient scheduling time by 70%',
      'Fully HIPAA compliant operations',
    ],
    links: {
      portfolio: '#',
    },
    featured: false,
  },
  {
    id: '5',
    slug: 'hematology-lab-system',
    title: 'Hematology Lab Management System',
    shortDescription: 'Medical lab test results and reporting system',
    description: 'Laboratory information system for managing test results, patient records, and generating formatted medical reports.',
    image: '/projects/hematology-system.jpg',
    p_image: '/projects/hematology-app.jpg',
    technologies: ['C#', '.NET', 'MySQL', 'Crystal Reports'],
    challenges: [
      'Accurate test result calculation and validation',
      'Complex report generation with medical formatting standards',
      'Maintaining data integrity for medical records',
    ],
    solutions: [
      'Implemented multi-level validation system for test results',
      'Integrated Crystal Reports for professional medical documents',
      'Built comprehensive audit trail for all data changes',
    ],
    results: [
      'Processing 1000+ tests monthly',
      'Generated 10,000+ compliant medical reports',
      '100% data accuracy in all results',
    ],
    links: {
      portfolio: '#',
    },
    featured: false,
  },
]
