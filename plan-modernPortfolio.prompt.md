# Plan: Modern Creative Portfolio with Static Site Generator

**TL;DR:** Migrate from vanilla HTML/CSS/JS to **Next.js 13+ with static export** for better performance, easier animations, and component reusability. Add dark mode toggle, interactive project showcases, smooth animations (Framer Motion), and a modern creative design with artistic gradients and microinteractions. Deploy to Netlify/Vercel for automatic deployments. Your 5 existing projects will get dedicated case-study-style pages with tech stack highlights.

**Why Next.js over Gatsby?** Next.js gives you faster development iteration, better TypeScript support, easier image optimization, and the power to add dynamic features (contact form backend) later without major restructuring.

---

## Steps

### Phase 1: Setup & Architecture (parallel independent)
1. **Create Next.js 13+ project** with TypeScript and App Router
   - Install dependencies: `next`, `react`, `typescript`, `tailwindcss`, `framer-motion`
   - Configure TypeScript and ESLint

2. **Design system & theming**
   - Create `theme.config.ts` with design tokens (colors, fonts, spacing)
   - Implement dark mode context using `next-themes` (avoids white flash on load)
   - Define CSS-in-JS or Tailwind variants for creative gradients and artistic colors

3. **Component library structure**
   - Establish `/components` folder: `Navigation`, `Hero`, `ProjectCard`, `SkillBar`, `ContactForm`, `DarkModeToggle`
   - Create reusable layout components for sections

### Phase 2: Content & Data Layer
4. **Migrate & structure content**
   - Create `/data/projects.ts` with detailed project objects (title, description, tech stack, URL, images, case study links)
   - Create `/data/skills.ts` and `/data/experience.ts` (currently missing from old portfolio)
   - Create `/data/social.ts` for links

5. **Set up image optimization**
   - Use Next.js `<Image>` component for all project thumbnails
   - Optimize SVGs for icons and decorative elements

### Phase 3: Pages & Sections (can parallelize)
6. **Home page layout** with sections:
   - Navigation (with dark mode toggle)
   - Hero section with creative animated background or gradient
   - About section
   - Skills section with animated progress bars (Framer Motion)
   - Experience timeline
   - Projects grid with interactive cards
   - Contact section + email capture form

7. **Project detail pages** (`/projects/[slug]`) 
   - Individual case study pages for each of your 5 projects
   - Include: problem statement, solution, tech stack, screenshots, links, lessons learned
   - Internal navigation between projects

8. **Contact/Lead capture**
   - Contact form with validation (e.g., `react-hook-form`)
   - Newsletter signup (integrate with email service: Mailchimp, SendGrid, or Resend)
   - Form submission handling (serverless function or API route)

### Phase 4: Interactivity & Animation
9. **Add Framer Motion animations**
   - Entrance animations for sections (fade-in, slide-up on scroll)
   - Hover effects on project cards (lift, overlay, expand tech stack)
   - Parallax scrolling or gradient shifts
   - Loading animations for images
   - Microinteractions on buttons and links

10. **Dark mode implementation**
    - Dark/light theme toggle in navigation
    - Persistent user preference (localStorage)
    - Smooth color transitions

11. **Performance optimizations**
    - Lazy-load below-fold sections
    - Use `next/dynamic` for heavy components
    - Image size optimization

### Phase 5: Deployment & Polish
12. **Prepare for static export**
    - Add `output: 'export'` in `next.config.js`
    - Test all routes build correctly

13. **Deploy to Netlify/Vercel**
    - Connect GitHub repo to Netlify/Vercel
    - Auto-deploy on push to main branch
    - Configure custom domain (if you have one)

14. **Final polish**
    - SEO metadata (Open Graph, structured data)
    - RSS feed (optional blog extension)
    - 404 page
    - Accessibility audit (WCAG)
    - Performance audit (Lighthouse)

---

## Projects to Showcase

1. **Enterprise ERP System for Trading & Inventory**
   - Tech: Yii, Laravel, JavaScript, Ajax, MySQL
   - Integrations: Amazon, eBay, Back Market, MX Merchant, QuickBooks
   - Focus: Complex inventory, procurement, accounting workflows

2. **B2B eCommerce Platform (ERP-Integrated)**
   - Tech: Laravel, MySQL, JavaScript, Ajax, PayPal, MX Merchant
   - Features: Inventory sync, role-based dashboards, secure payments

3. **Course Store & Student Evaluation System**
   - Tech: Laravel, Blade, MySQL, JavaScript, Tailwind CSS
   - Features: E-learning, gamification, real-time evaluation

4. **Clinic Management Desktop Application**
   - Tech: C#, .NET, MySQL, Windows Forms
   - Features: Patient management, treatment logging, accounting

5. **Hematology Lab Management System**
   - Tech: C#, .NET, MySQL, Crystal Reports
   - Features: Test results, patient links, formatted medical reports

---

## Technology Stack
- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS + Framer Motion for animations
- **Dark mode**: `next-themes`
- **Forms**: `react-hook-form` + form validation
- **Hosting**: Netlify or Vercel
- **Version control**: GitHub (for auto-deployment)

---

## Verification Checklist
1. **Build & deploy test**: `npm run build` succeeds, exports static `out/` folder
2. **Dark mode**: Toggle works, persists on reload, no white flash on page load
3. **Animations**: Smooth on 60fps, test on mobile (Lighthouse performance > 90)
4. **Projects showcase**: Each project card is interactive, detail pages load smoothly
5. **Contact form**: Submits data, success/error messages display
6. **SEO**: Meta tags render, Open Graph images appear in social shares
7. **Mobile**: Responsive on all breakpoints, hamburger menu works, images scale correctly

---

## Scope
- ✅ **Included**: Dark mode, animations (Framer Motion), project showcases, lead capture (email form), creative artistic design
- ✅ **Included**: Static export (no server needed), Netlify/Vercel deployment
- ✅ **Included**: Reuse 5 current projects, keep your expertise focus (Laravel + C#/.NET)
- ❌ **Excluded**: Blog feature (can add later), server-side rendering (keeping static for performance)
- ❌ **Excluded**: Real backend (serverless functions only for form handling)

---

## Next Steps
1. Confirm repo name and location
2. Initialize Next.js 13+ project
3. Set up component structure
4. Migrate content from old portfolio
5. Build sections iteratively
6. Test and deploy
