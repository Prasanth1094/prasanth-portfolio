# Portfolio Website - Prasanth

A modern, responsive portfolio website built with React, featuring beautiful gradients, smooth animations, and a sleek design.

## 🚀 Features

- **Modern Design**: C# Portfolio Full-Stack Application

A modern, responsive portfolio website showcasing 10+ years of UI development experience with React, Angular, HTML/CSS/JS, micro frontends, and modern web technologies.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful SVG icons
- **CSS3** - Modern CSS with gradients and glass morphism effects

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Joi** - Data validation
- **Nodemailer** - Email service

## 📁 Project Structure

```
portfolio-ui/
├── client/                 # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── styles/         # CSS styles
│   │   └── main.jsx        # Application entry point
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express.js backend API
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   ├── package.json
│   └── server.js           # Server entry point
├── shared/                 # Shared utilities and constants
│   ├── constants.js        # Shared constants
│   └── apiUtils.js         # API utility functions
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or cloud service)
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd portfolio-ui
```

### 2. Frontend Setup
```bash
cd client
npm install
```

### 3. Backend Setup
```bash
cd ../server
npm install
```

### 4. Environment Configuration

Create a `.env` file in the `server` directory:
```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your-secret-key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@example.com
```

## 🚦 Running the Application

### Development Mode

**Terminal 1 - Frontend:**
```bash
cd client
npm run dev
```
Frontend will be available at `http://localhost:5173`

**Terminal 2 - Backend:**
```bash
cd server
npm run dev
```
Backend API will be available at `http://localhost:3001`

### Production Mode

**Build Frontend:**
```bash
cd client
npm run build
```

**Start Backend:**
```bash
cd server
npm start
```

## 📋 Features

### Frontend Features
- 🎨 **Modern Design** - Clean, professional design with gradient backgrounds
- 📱 **Responsive Layout** - Mobile-first design that works on all devices
- ✨ **Smooth Animations** - Framer Motion powered animations and transitions
- 🔍 **Interactive Elements** - Hover effects, scroll animations, and micro-interactions
- 📊 **Skills Showcase** - Animated progress bars for technical skills
- 💼 **Experience Timeline** - Interactive work experience timeline
- 🚀 **Projects Gallery** - Filterable project showcase with live demos
- 📧 **Contact Form** - Functional contact form with validation

### Backend Features
- 🔗 **RESTful API** - Clean API endpoints for all data operations
- 💾 **MongoDB Integration** - Persistent data storage
- 📧 **Email Service** - Contact form email notifications
- 🛡️ **Data Validation** - Joi schema validation for all inputs
- 📊 **Admin Dashboard** - Analytics and content management
- 🔍 **Advanced Queries** - Filtering, pagination, and search capabilities

## 🌟 Key Components

### Frontend Components
- **Header** - Navigation with smooth scroll links
- **Hero** - Animated introduction with typing effect
- **About** - Personal introduction with career timeline
- **Skills** - Technical skills with animated progress indicators
- **Experience** - Professional experience timeline
- **Projects** - Portfolio project showcase with filtering
- **Contact** - Contact form with validation

### Backend Models
- **Contact** - Contact form submissions
- **Project** - Portfolio projects with metadata
- **Skill** - Technical skills and proficiency levels
- **Experience** - Work experience entries

## 🎯 API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions (admin)

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID
- `GET /api/projects?category=web` - Filter by category
- `GET /api/projects?featured=true` - Get featured projects

### Skills
- `GET /api/skills` - Get all skills

### Experience
- `GET /api/experience` - Get all experience
- `GET /api/experience/:id` - Get experience by ID

### Admin
- `GET /api/admin/dashboard` - Get dashboard analytics

## 🔧 Development Scripts

### Frontend (client/)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend (server/)
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any questions or feedback, please reach out through the contact form on the website or email directly.

---

**Built with ❤️ using React, Node.js, and modern web technologies**professional layout with gradient backgrounds and glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Built with Framer Motion for delightful user interactions
- **Interactive Components**: Engaging UI elements with hover effects and transitions
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **Accessibility**: Built with accessibility best practices in mind

## 🛠️ Technologies Used

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: CSS3 with CSS Variables, Flexbox, and Grid
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Intersection Observer**: React Intersection Observer for scroll animations

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with mobile menu
│   ├── Hero.jsx            # Hero section with animated intro
│   ├── About.jsx           # About section with timeline
│   ├── Skills.jsx          # Skills section with progress bars
│   ├── Experience.jsx      # Work experience timeline
│   ├── Projects.jsx        # Projects showcase with modal
│   ├── Contact.jsx         # Contact form and information
│   └── *.css              # Component-specific styles
├── App.jsx                 # Main app component
├── App.css                 # Global app styles
├── index.css              # Global CSS variables and utilities
└── main.jsx               # App entry point
```

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: Purple to Blue (`#667eea` to `#764ba2`)
- **Secondary Gradient**: Pink to Red (`#f093fb` to `#f5576c`)
- **Accent Gradient**: Blue to Cyan (`#4facfe` to `#00f2fe`)
- **Dark Theme**: Deep blue-gray backgrounds for elegance

### Animations
- Smooth page scrolling
- Intersection Observer triggered animations
- Hover effects and micro-interactions
- Staggered animations for content reveal
- Floating elements and gradient orbs

### Components
- **Glass Morphism Cards**: Translucent cards with backdrop blur
- **Animated Progress Bars**: Skill level indicators with smooth fills
- **Interactive Project Cards**: Hover effects with overlay buttons
- **Timeline Components**: Professional experience display
- **Contact Form**: Functional form with validation and status feedback

## 💼 Portfolio Sections

### 1. Hero Section
- Professional introduction
- Key statistics (10+ years experience, 50+ projects)
- Call-to-action buttons
- Animated code block visualization

### 2. About Section
- Personal introduction and journey
- Career timeline from 2014 to present
- Key strengths and highlights
- Professional philosophy

### 3. Skills Section
- Technical skills organized by category:
  - Frontend Technologies (React, Angular, JavaScript, TypeScript)
  - Backend & Tools (Node.js, Python, MongoDB, Git)
  - Testing & Quality (Jest, Karma/Jasmine, SonarQube)
  - Architecture & Design (Micro Frontends, Design Systems)
- Tools and technologies showcase
- Visual progress indicators

### 4. Experience Section
- Detailed work history with 4 positions
- Key achievements and impact metrics
- Technology stacks used
- Interactive timeline design

### 5. Projects Section
- Featured projects with detailed information
- Project filtering by technology
- Modal popup with full project details
- Live demo and GitHub links
- Real project statistics

### 6. Contact Section
- Contact form with validation
- Professional contact information
- Social media links
- Availability status
- Response time indicators

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

```bash
npm run build
```

The build folder will contain the optimized production files.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Mobile**: 480px and below
- **Tablet**: 768px and below  
- **Desktop**: 1024px and above
- **Large Desktop**: 1200px and above

## ⚡ Performance Features

- **Lazy Loading**: Images and components load when needed
- **Code Splitting**: Optimized bundle sizes
- **CSS Optimization**: Efficient CSS with variables
- **Image Optimization**: Properly sized images with WebP support
- **Smooth Animations**: Hardware-accelerated CSS transforms

## 🎯 Customization

### Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

### Content
Update personal information in each component:
- `Hero.jsx`: Name, title, and introduction
- `About.jsx`: Personal story and journey
- `Skills.jsx`: Technical skills and proficiency levels
- `Experience.jsx`: Work history and achievements
- `Projects.jsx`: Portfolio projects and details
- `Contact.jsx`: Contact information and social links

### Animations
Modify animation settings in component files using Framer Motion variants.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

- **Email**: prasanth.dev@email.com
- **LinkedIn**: [linkedin.com/in/prasanth](https://linkedin.com/in/prasanth)
- **GitHub**: [github.com/prasanth](https://github.com/prasanth)

---

Made with ❤️ by Prasanth+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
