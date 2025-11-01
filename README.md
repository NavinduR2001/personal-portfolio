# 🚀 Personal Portfolio

A modern, responsive portfolio website built with React and Framer Motion, featuring smooth animations, interactive UI elements, and a beautiful gradient design.

**Portfolio :** [www.navinduramanayaka.me]

![Portfolio Banner](./source/src/assets/home%20image.png)

## ✨ Features

- 🎨 **Modern Design** - Clean and professional UI with gradient effects
- 🌊 **Smooth Animations** - Powered by Framer Motion for fluid transitions
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🎯 **Interactive Navigation** - Active section highlighting on scroll
- 💫 **Animated Loader** - Circular progress loader with logo animation
- 🎪 **Tech Bubbles** - Floating technology icons background
- 🎭 **Section-based Layout** - Home, About, Skills, Projects, Certificates, Contact
- ⚡ **Fast Performance** - Built with Vite for optimal loading speed

## 🖼️ Screenshots

### Home Section
![Home Section](./source/src/assets/home%20image.png)

### About Section
![About Section](./source/src/assets/about%20ss.png)

### Skills Section
![Skills Section](./source/src/assets/skills%20ss.png)

### Portfolio Section
![Projects Section](./source/src/assets//portfolio%20section%20ss.png)

### Certificate Section
![Certificate Section](./source/src/assets/Certification%20section%20ss.png)

### Contact Section
![Contact Section](./source/src/assets/get%20in%20touch%20ss.png)


## 🛠️ Built With

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: SCSS/Sass
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Language**: JavaScript (ES6+)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/personal-portfolio.git
```

2. Navigate to the project directory
```bash
cd personal-portfolio/source
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and visit
```
http://localhost:5173
```

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The build files will be generated in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
personal-portfolio/
├── source/
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/            # Images, fonts, and asset imports
│   │   │   └── assets.jsx
│   │   ├── components/        # Reusable components
│   │   │   ├── Loader/
│   │   │   │   ├── Loader.jsx
│   │   │   │   └── Loader.scss
│   │   │   ├── navbar/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Navbar.scss
│   │   │   └── responive design/
│   │   │       ├── Responsive.jsx
│   │   │       └── Responsive.scss
│   │   ├── sections/          # Page sections
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Certificate.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx            # Main app component
│   │   ├── App.scss           # Global styles
│   │   ├── main.jsx           # Entry point
│   │   └── index.css          # Base CSS
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🎨 Customization

### Changing Colors

The primary color scheme can be modified in the SCSS files:

```scss
// Main gradient colors
$primary-purple: #9F2AFF;
$secondary-purple: #6a00ff;

// Update these variables across:
// - App.scss
// - Navbar.scss
// - Loader.scss
```

### Adding/Removing Sections

1. Create a new component in `src/sections/`
2. Import it in `App.jsx`
3. Add the section with a unique ID:

```jsx
<section id="your-section"><YourSection /></section>
```

4. Update the navbar navigation array in `Navbar.jsx`

### Tech Stack Bubbles

Modify the tech bubbles in `App.jsx`:

```javascript
const techBubbles = [
  { icon: <YourIcon />, color: '#HexColor' },
  // Add more technologies
]
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- 📱 Mobile: < 480px
- 📱 Tablet: 481px - 768px
- 💻 Desktop: > 768px

## ⚡ Performance Features

- ✅ Lazy loading components
- ✅ Optimized images
- ✅ Code splitting
- ✅ Minimal dependencies
- ✅ Fast page loads with Vite
- ✅ Smooth 60fps animations

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**

- GitHub: [@NavinduR2001](https://github.com/NavinduR2001)
- LinkedIn: [Navindu Ramanayaka](www.linkedin.com/in/navindu-ramanayaka-125082303)
- Portfolio: [navinduramanayaka.me](www.navinduramanayaka.me)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)
- [SCSS](https://sass-lang.com/)

## 📈 Project Status

🚧 **Active Development** - Regular updates and improvements

---

⭐ **If you like this project, please give it a star!** ⭐

Made with ❤️ and React
