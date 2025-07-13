# TextTrace - Textile Dyeing Education Platform

A modern, responsive React application for teaching textile dyeing techniques built with Vite, React Router, and Tailwind CSS.

## 🎨 Features

- **Responsive Design**: Mobile-first responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between light and dark themes with localStorage persistence
- **React Router Navigation**: Smooth client-side routing between pages
- **Accessible UI**: ARIA labels, sufficient contrast ratios, and keyboard navigation
- **Modern Styling**: Beautiful UI with Tailwind CSS and custom color palette
- **Clean Architecture**: Well-organized component structure for maintainability

## 🎯 Pages & Routes

- **Home (`/`)**: Hero section with call-to-action and feature highlights
- **Recipes (`/recipes`)**: Grid layout with search/filter functionality for dyeing recipes
- **About (`/about`)**: Information about TextTrace and our mission
- **Contact (`/contact`)**: Contact form with validation (no backend required)

## 🎨 Design System

### Color Palette
- **Primary**: `#3D5A80` (Deep Blue)
- **Accent**: `#EA8346` (Warm Orange)

### Typography
- **Headings**: Poppins (weights: 400, 600, 700)
- **Body Text**: Open Sans (weights: 400, 500, 600)

### Background
- **Light Mode**: Subtle textile texture pattern (`texture_bg.svg`)
- **Dark Mode**: Solid dark background (`#111`)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd texttrace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your assets** (see Assets section below)

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
texttrace/
├── public/
│   ├── logo.svg              # Logo for navbar (replace with your logo)
│   ├── hero.jpg              # Hero section background image (you need to add this)
│   ├── texture_bg.svg        # Light mode background texture
│   └── hero.jpg.placeholder  # Reminder to add hero image
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar with theme toggle
│   │   └── Footer.jsx        # Footer with current year
│   ├── pages/
│   │   ├── Home.jsx          # Landing page with hero section
│   │   ├── Recipes.jsx       # Recipe grid with search/filter
│   │   ├── About.jsx         # About page content
│   │   └── Contact.jsx       # Contact form
│   ├── App.jsx               # Main app with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind CSS and custom styles
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## 🖼️ Required Assets

You need to provide these assets in the `public/` directory:

### 1. Hero Image (`public/hero.jpg`)
- **Purpose**: Full-width background for the hero section on the home page
- **Recommended size**: 1920x1080px or larger
- **Format**: JPG, PNG, or WebP
- **Content**: Beautiful textile/fabric dyeing scene, colorful fabrics, or dyeing process

### 2. Logo (`public/logo.svg`)
- **Purpose**: Brand logo displayed in the navbar
- **Current**: Placeholder SVG provided
- **Recommended**: Replace with your actual TextTrace logo
- **Format**: SVG (preferred) or PNG
- **Size**: Should work well at 32x32px

## 🛠️ Key Components

### Navbar
- Responsive navigation with mobile menu
- Logo and brand name
- Dark/light mode toggle with Lucide icons
- Active page highlighting

### ThemeToggle
- Integrated into Navbar
- Uses localStorage for persistence
- Smooth transitions between modes
- Accessible with proper ARIA labels

### Recipe Grid
- Responsive card layout
- Search functionality (placeholder)
- Category filtering (placeholder)
- Difficulty badges with color coding

### Contact Form
- Validates name, email, and message fields
- Shows success message after submission
- No backend required - logs to console
- Fully accessible with proper labels

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: '#3D5A80',  // Your primary color
  accent: '#EA8346',   // Your accent color
}
```

### Fonts
Update the Google Fonts import in `src/index.css` and the Tailwind config to change typography.

### Content
- Update page content in the respective page components
- Modify the recipe placeholder data in `src/pages/Recipes.jsx`
- Customize the About page content in `src/pages/About.jsx`

## 🌐 Deployment

### Build the project
```bash
npm run build
```

The `dist/` folder will contain the production-ready files that can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast color combinations
- Focus indicators
- Screen reader friendly

## 🔄 Future Enhancements

The application is designed to be easily extensible:

- Add a backend API for the contact form
- Implement user authentication
- Add recipe detail pages
- Integrate search functionality
- Add user-generated content features
- Implement recipe favorites/bookmarking

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**TextTrace** - Color your fabric with confidence! 🎨
