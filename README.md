# Haris Arslan Portfolio

Professional portfolio website for Haris Arslan, a Java Spring Boot and React Developer. The site highlights backend expertise, full-stack project work, technical skills, and contact details for freelance and remote opportunities.

## Tech Stack

- React.js
- TypeScript
- Tailwind CSS
- Vite
- ESLint

## Features

- Responsive dark theme for mobile, tablet, and desktop
- Sticky navbar with smooth scrolling and active section highlighting
- Professional hero, about, skills, projects, experience, contact, and footer sections
- Strong project cards with tech badges, feature lists, GitHub buttons, and live demo buttons
- Data-driven project and skill content for easy future updates
- Ready for Vercel deployment

## Project Sections

- Home
- About
- Skills
- Projects
- Contact

## Highlighted Projects

- Workmate: Full-stack workflow and task management application
- CareSync: Full-stack healthcare management system
- Fitness Application: Spring Boot backend service for fitness-related operations

Project data is stored in:

```text
src/data/portfolio.ts
```

## Folder Structure

```text
src/
  components/
    Badge.tsx
    ProjectCard.tsx
    SectionHeading.tsx
  data/
    portfolio.ts
  sections/
    About.tsx
    Contact.tsx
    Experience.tsx
    Footer.tsx
    Hero.tsx
    Navbar.tsx
    Projects.tsx
    Skills.tsx
  types/
    portfolio.ts
  App.tsx
  index.css
  main.tsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://127.0.0.1:5173
```

## Available Scripts

Run local development:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Updating Portfolio Content

Edit the main portfolio content in:

```text
src/data/portfolio.ts
```

You can update:

- Contact details
- Navigation items
- Skill groups
- Projects
- Live demo links
- GitHub repository links

## Deployment

This project is ready to deploy on Vercel.

Recommended Vercel settings:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Contact

- Name: Haris Arslan
- Title: Java Spring Boot & React Developer
- Phone: 03214816800
- Email: harisijaz278@gmail.com
