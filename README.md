# Personal Portfolio Website

This is a modern, animated personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. It features smooth animations, a 3D space background, and a clean, responsive design. The site showcases your skills, projects, experience, and contact information.

## ✨ Features
- **React + TypeScript**: Strongly-typed, component-based architecture.
- **Vite**: Fast development server and optimized builds.
- **Tailwind CSS**: Utility-first CSS for rapid custom styling.
- **Framer Motion**: Smooth, interactive animations.
- **Three.js**: 3D animated space background.
- **Responsive Design**: Works great on all devices.
- **Contact Form**: Easily get in touch via a styled contact form.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or later recommended)
- npm or yarn

### Installation
```bash
git clone <your-repo-url>
cd project-bolt-sb1-oibhlq6g/project
npm install
```

### Development
Start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view the site.

### Build
To create a production build:
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🛠️ Project Structure
```
project/
├── src/
│   ├── components/         # Reusable components (SpaceBackground, CursorEffect, etc.)
│   ├── pages/              # Main pages (Home, Projects, Experience, Contact, etc.)
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Tailwind CSS and custom styles
├── public/                 # Static assets
├── package.json            # Project configuration and dependencies
├── tailwind.config.js      # Tailwind CSS config
├── vite.config.ts          # Vite config
└── README.md               # Project documentation
```

## ✏️ Customization
- Update your personal info, skills, and project details in the respective files under `src/pages/`.
- Change the theme or animations by editing Tailwind and Framer Motion settings.

## 🧩 Dependencies
- `react`, `react-dom`
- `framer-motion`
- `lucide-react`
- `three`, `@react-three/fiber`, `@react-three/drei`
- `react-router-dom`
- `tailwindcss`, `autoprefixer`, `postcss`

## 📦 Template
This project was bootstrapped with the `bolt-vite-react-ts` template.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

---

**Note:** If you see a "Send element" overlay in development, it's likely from a browser extension (e.g., React Developer Tools) and not part of this codebase.
