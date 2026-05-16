export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string
  achievements: string[]
}

export const experience: Experience[] = [
  {
    id: '1',
    company: 'New G Solution',
    position: 'Full-stack Developer',
    duration: 'Aug 2021 - Mar 2024',
    description: 'Led backend development of a comprehensive ERP system for trading and inventory management with multi-platform integrations.',
    achievements: [
      'Developed modular ERP system using Yii and Laravel frameworks with MariaDB',
      'Implemented integrations with Amazon, Back Market, MX Merchant, QuickBooks, and eBay APIs',
      'Analyzed and developed manufacturing and refurbishment modules for ERP system',
      'Optimized database performance and API response times',
    ],
  },
  {
    id: '2',
    company: 'TriView Electronics',
    position: 'Systems Engineer',
    duration: 'Feb 2019 - Dec 2021',
    description: 'Developed enterprise-level ERP systems and maintained critical server infrastructure.',
    achievements: [
      'Developed ERP system using PHP, Java, C# with MSSQL and MariaDB',
      'Monitored and maintained servers, databases, and networks',
      'Implemented automated backup and disaster recovery procedures',
    ],
  },
  {
    id: '3',
    company: 'ZANOBIA Ceramic',
    position: 'Technical Engineer',
    duration: 'Apr 2016 - Dec 2018',
    description: 'Provided technical support and infrastructure management for manufacturing operations.',
    achievements: [
      'Monitored servers and network infrastructure',
      'Managed surveillance camera systems',
      'Provided helpdesk support to 50+ staff members',
    ],
  },
]
