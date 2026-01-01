# Portfolio Website

A modern, interactive portfolio website showcasing my work as a developer. Built with React, TypeScript, and Three.js, featuring immersive 3D graphics, smooth animations, and a responsive design.

## ✨ Features

- **3D Interactive Background** - Powered by Three.js and React Three Fiber
- **Smooth Animations** - Framer Motion for fluid transitions and interactions
- **Responsive Design** - Fully responsive across all device sizes
- **Modern UI Components** - Built with shadcn/ui and Radix UI
- **Performance Optimized** - Fast loading times with Vite
- **SEO Friendly** - Optimized meta tags and semantic HTML

## 🛠️ Tech Stack

### Core
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### 3D Graphics
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Unstyled, accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Routing & State
- **React Router DOM** - Client-side routing
- **TanStack Query** - Data fetching and caching

### Other Libraries
- **Zod** - Schema validation
- **React Hook Form** - Form management
- **Sonner** - Toast notifications

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd aravind_portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
aravind_portfolio/
├── public/                 # Static assets
│   ├── profile-photo.jpg
│   └── ...
├── src/
│   ├── components/         # React components
│   │   ├── layout/        # Layout components (Navigation, Footer)
│   │   ├── sections/      # Page sections (Hero, About, Projects, etc.)
│   │   ├── three/         # Three.js components
│   │   └── ui/            # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Sections

The portfolio includes the following sections:

1. **Hero Section** - Introduction with 3D background
2. **About Section** - Personal information and values
3. **Skills Section** - Technical skills and expertise
4. **Projects Section** - Showcase of projects
5. **Experience Section** - Work experience and timeline
6. **Additional Info** - Additional information
7. **Contact Section** - Contact information and form

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

### Deploy Options

- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment with drag & drop
- **GitHub Pages** - Free hosting for static sites
- **Any static hosting service** - The build output is static files

## 🔧 Configuration

### Vite Configuration

The development server runs on port `8080` by default. You can modify this in `vite.config.ts`.

### Tailwind Configuration

Custom colors, fonts, and utilities can be configured in `tailwind.config.ts`.

## 📝 License

This project is private and proprietary.

## 👤 Author

**Kasoju Aravind**

- GitHub: [@aravind00771](https://github.com/aravind00771)
- LinkedIn: [aravindkasoju](https://linkedin.com/in/aravindkasoju)
- Email: kasojuaravind662@gmail.com

---

Built with ❤️ using React, TypeScript, and Three.js
