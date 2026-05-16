export interface SocialLink {
  name: string
  url: string
  icon: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/humam-duibes',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:humam720@gmail.com',
    icon: 'mail',
  },
  {
    name: 'Phone',
    url: 'tel:+963937967058',
    icon: 'phone',
  },
  {
    name: 'WhatsApp',
    url: 'https://api.whatsapp.com/send/?phone=%2B963937967058',
    icon: 'whatsapp',
  },
]
