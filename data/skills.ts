export interface Skill {
  category: string
  items: {
    name: string
    proficiency: number // 0-100
  }[]
}

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'PHP', proficiency: 90 },
      { name: 'JavaScript', proficiency: 85 },
      { name: 'Java', proficiency: 80 },
      { name: 'C++', proficiency: 85 },
      { name: 'C#', proficiency: 80 },
      { name: 'Python', proficiency: 75 },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', proficiency: 90 },
      { name: 'SQL', proficiency: 90 },
      { name: 'MariaDB', proficiency: 85 },
      { name: 'MSSQL', proficiency: 80 },
      { name: 'MongoDB', proficiency: 60 },
    ],
  },
  {
    category: 'Frameworks & Tools',
    items: [
      { name: 'Yii Framework', proficiency: 90 },
      { name: 'Laravel', proficiency: 85 },
      { name: 'Node.js', proficiency: 65 },
      { name: 'Git', proficiency: 85 },
      { name: 'SAGE X3', proficiency: 80 },
      { name: 'ASP.NET', proficiency: 65 },
    ],
  },
  {
    category: 'APIs & Integration',
    items: [
      { name: 'Amazon API Integration', proficiency: 85 },
      { name: 'eBay API Integration', proficiency: 85 }, 
      { name: 'PayPal Integration', proficiency: 85 }, 
      { name: 'MX Merchant Integration', proficiency: 80 }, 
      { name: 'QuickBooks Integration', proficiency: 75 }, 
      { name: 'RESTful APIs', proficiency: 85 },
    ],
  }, 
  { 
    category: 'Specializations', 
    items: [
      { name: 'ERP System Development', proficiency: 90 }, 
      { name: 'E-commerce Integration', proficiency: 85 }, 
      { name: 'Database Design & Optimization', proficiency: 85 }, 
      { name: 'Requirements Analysis', proficiency: 80 }, 
      { name: 'System Architecture', proficiency: 85 },
    ], 
  },
]
