# 🚀 Portfolio — Setup & Editing Guide

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # production build → /dist
```

---

## ✏️ How to Edit Your Portfolio

**All content lives in one file: `src/data.js`**

You never need to touch any component file to update content.

### Change personal info
```js
// src/data.js
export const personal = {
  name: "Your Name",
  title: "Your Title",
  ...
};
```

### Add a new project (copy & paste)
```js
{
  id: 5,                          // increment id
  title: "My New Project",
  description: "What it does.",
  techStack: ["React", "Python"],
  features: ["Feature 1", "Feature 2"],
  github: "https://github.com/yourrepo",
  live: "",                        // leave empty string if no live demo
  featured: false,
},
```

### Add a new skill category
```js
{ category: "DevOps", items: ["Docker", "Kubernetes", "CI/CD"] },
```

### Add a new job
```js
{
  id: 3,
  role: "Software Engineer Intern",
  company: "NewCo",
  location: "Remote",
  period: "Summer 2025",
  bullets: ["Did X", "Built Y", "Improved Z by 50%"],
},
```

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── data.js              ← 🔑 EDIT THIS FILE ONLY
│   ├── styles.css           ← Design tokens & global styles
│   ├── App.jsx              ← Root layout
│   ├── main.jsx             ← Entry point
│   └── components/
│       ├── Navbar.jsx
│       ├── HeroSection.jsx
│       ├── AboutSection.jsx
│       ├── SkillsSection.jsx
│       ├── ProjectsSection.jsx
│       ├── ProjectCard.jsx
│       ├── ExperienceSection.jsx
│       ├── EducationSection.jsx
│       └── ContactSection.jsx
├── public/
│   └── resume.pdf           ← Drop your resume here
├── index.html
├── package.json
└── vite.config.js
```

---

## 🌐 Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo → click Deploy
4. Done — auto-redeploys on every `git push`

---

## 🎨 Customise Colors

Open `src/styles.css` and edit the `:root` block:

```css
:root {
  --bg:      #0b0f1a;   /* page background */
  --accent:  #6ee7b7;   /* mint green — change to your brand color */
  --accent2: #38bdf8;   /* sky blue — used in hero gradient */
}
```
