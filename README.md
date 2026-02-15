# Panto - Interior Design Landing Page

A modern, minimalist landing page built with Next.js and Tailwind CSS, showcasing furniture products and interior design services. This project is a pixel-perfect implementation of a Figma design, focusing on clean aesthetics, smooth interactions, and responsive layouts.

## 🚀 Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 3** - Utility-first CSS framework
- **Akar Icons** - Modern icon library for React
- **Gilroy Font** - Custom typography (Bold & Regular weights)
- **Next.js Image** - Optimized image loading

## ✨ Features

- **Responsive Design** - Desktop-optimized layout (mobile responsiveness planned)
- **Interactive Components** - Horizontal scrolling carousels for products and testimonials
- **Modern UI/UX** - Smooth transitions, hover effects, and animations
- **Semantic HTML** - Accessible and SEO-friendly structure
- **Custom Color Palette** - Consistent brand colors throughout
- **Type-Safe** - Full TypeScript implementation

## 📦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd panto-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the landing page.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
panto-landing-page/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation bar with scroll behavior
│   │   └── Footer.tsx      # Footer with links and social media
│   └── sections/
│       ├── Hero.tsx                    # Hero section with search
│       ├── WhyChooseUs.tsx             # Features section
│       ├── BestSellingProduct.tsx      # Product carousel
│       ├── ExperienceAndMaterials.tsx  # Split content sections
│       └── Testimonials.tsx            # Client reviews carousel
├── public/
│   ├── fonts/              # Gilroy font files
│   └── images/
│       ├── assets/         # Hero background and main assets
│       ├── products/       # Product images
│       ├── experiences/    # Experience & Materials images
│       ├── testimonials/   # Testimonial card backgrounds
│       └── figma/          # Design reference screenshots
└── tailwind.config.js      # Tailwind configuration with custom colors
```

## 🎨 Design Implementation

### Custom Fonts
- **Gilroy Bold** - Used for all headings (h1-h6)
- **Gilroy Regular** - Used for body text, paragraphs, and links
- Configured via `next/font/local` for optimal performance

### Color Palette
```js
primary: "#1E1E1E"      // Main text color (dark)
secondary: "#0D1B39"    // Secondary text color (navy)
accent: "#E58411"       // Orange accent color
accent-hover: "#d17810" // Hover state for accent
background: "#F5F5F5"   // Light gray background
```

### Layout Techniques
- **Decorative Layers** - Grey rectangles behind images for depth (Experience & Materials section)
- **Overlapping Elements** - Navigation arrows positioned over card edges
- **Horizontal Scrolling** - Interactive carousels for products and testimonials
- **Absolute Positioning** - Strategic use for floating elements and overlays
- **Gradient Overlays** - Dark overlay on hero background for text readability
- **Sticky Navigation** - Navbar with scroll-based background change

### Icons
- **Akar Icons** - Used throughout for search, shopping cart, arrows, stars, and social media
- Icon components: `Search`, `ShoppingBag`, `ChevronLeft`, `ChevronRight`, `Star`, `Plus`, `FacebookFill`, `TwitterFill`, `InstagramFill`


### Section-by-Section Development
1. **Setup** - Next.js project, Tailwind configuration, font loading
2. **Navbar** - Responsive navigation with transparent background
3. **Hero** - Full-screen hero with background image and search
4. **Why Choose Us** - Grid layout with feature cards
5. **Best Selling Product** - Product carousel with category tabs
6. **Experience & Materials** - Split layout with decorative image layers
7. **Testimonials** - Card carousel with user reviews
8. **Footer** - Multi-column footer with links and social media


## 📝 Notes

- Product images need to be added to `public/images/products/`
- Testimonial images (card-background2.png, card-background3.png, user2.png, user3.png) need to be exported from Figma
- Mobile responsive design is planned for future implementation
- Some interactive features (dropdown menus, form validation) are planned but not yet implemented

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Akar Icons](https://akaricons.com/)

## 📄 License

This project is a design implementation exercise. All design rights belong to the original designer.

---

**Built with ❤️ using Next.js and Tailwind CSS**
