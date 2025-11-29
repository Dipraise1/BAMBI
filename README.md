# BAMBI Memecoin Landing Page

A modern, heartwarming cryptocurrency memecoin landing page for BAMBI - "Born A Memecoin to Break the Internet"

## Features

- 🎨 Vibrant lime green (#00FF00) design with split-screen hero section
- 🐕 Iconic Bambi image (rescued dog with reindeer antlers and flower crown)
- 📖 Emotional rescue story section with before/after narrative
- 💰 Tokenomics and community section with donation counter
- 🖼️ Gallery carousel with before/after photos
- 🗺️ Roadmap with rescue-themed milestones
- ✨ Unique animations: heartbeat effect, paw cursor trail, floating elements
- 📱 Fully responsive mobile-first design
- 🎭 Retro meme aesthetic mixed with modern web design

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **TypeScript-ready** - Can be easily converted

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Move images to public folder:**
   ```bash
   mkdir -p public
   cp "IMAGE 2025-11-29 11:04:51.jpg" public/
   cp "IMAGE 2025-11-29 11:05:00.jpg" public/
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
bambi/
├── public/
│   ├── IMAGE 2025-11-29 11:04:51.jpg
│   └── IMAGE 2025-11-29 11:05:00.jpg
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── RescueStory.jsx
│   │   ├── Tokenomics.jsx
│   │   ├── Gallery.jsx
│   │   ├── Roadmap.jsx
│   │   ├── Footer.jsx
│   │   ├── FloatingElements.jsx
│   │   └── PawTrail.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Design Features

### Color Palette
- **Primary**: Neon/Lime Green (#00FF00)
- **Secondary**: White for text and accents
- **Accent**: Soft pink/coral (#FF6B9D, #FF7F7F) for CTAs
- **Background**: Gradient from bright green to darker teal

### Unique Features
- ✨ Heartbeat animation on hero image
- 🐾 Paw print cursor trail
- 💚 "Adopt Don't Shop" messaging throughout
- 💰 Rescue shelter donation counter (animated)
- 👥 Community-driven testimonials section
- 🎨 Repeating "BAMBI" text border pattern
- ⭐ Floating animated elements (paw prints, hearts, stars)
- 📍 California (CA) badge integrated into design

## Sections

1. **Hero Banner** - Split-screen with Bambi image and bold branding
2. **The Rescue Story** - Emotional narrative with transformation timeline
3. **Tokenomics/Community** - Token details, donation counter, testimonials
4. **Gallery** - Carousel with before/after photos
5. **Roadmap** - Rescue-themed milestones and phases
6. **Footer** - Social links and community information

## Customization

- Update social media links in `Footer.jsx`
- Modify tokenomics data in `Tokenomics.jsx`
- Adjust colors in `tailwind.config.js`
- Update roadmap milestones in `Roadmap.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for the BAMBI memecoin community.

---

**Built with ❤️ for rescue dogs everywhere** 🐾

# BAMBI
