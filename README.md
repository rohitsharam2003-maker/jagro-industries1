# 🌿 Jagro Industries — Premium Agriculture E-Commerce

A modern, fully-responsive single-page e-commerce app for an agriculture business built with **React + Vite + Tailwind CSS**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
jagro-industries/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx            # Entry point
    ├── App.jsx             # Root component + section tracker
    ├── index.css           # Global styles + Tailwind directives
    ├── context/
    │   └── AppContext.jsx  # Dark mode, cart, search, toast state
    ├── hooks/
    │   └── useScrollReveal.js  # IntersectionObserver hook
    ├── data/
    │   └── products.js     # 20 products, testimonials, FAQs, services
    └── components/
        ├── Navbar.jsx       # Sticky navbar, dark mode, mobile menu
        ├── Hero.jsx         # Full-screen hero with animated background
        ├── Products.jsx     # Product grid with search, filter, sort
        ├── ProductCard.jsx  # Individual product card with cart action
        ├── About.jsx        # Company story, values, timeline
        ├── Services.jsx     # 6 service cards + CTA banner
        ├── Testimonials.jsx # Customer reviews + trust bar
        ├── FAQ.jsx          # Accordion FAQ
        ├── Newsletter.jsx   # Email subscription
        ├── Contact.jsx      # Contact form + info
        ├── Cart.jsx         # Slide-out cart sidebar
        ├── Footer.jsx       # Full footer with links
        ├── LoadingScreen.jsx# Animated loading screen
        └── Toast.jsx        # Toast notifications
```

## ✨ Features

- 🌙 **Dark / Light mode** — persisted to localStorage
- 🛒 **Cart sidebar** — add/remove/update quantity, GST + delivery calc
- 🔍 **Search + Category filters + Sort** — real-time filtering across 20 products
- 📱 **Fully mobile responsive** — works beautifully on all screen sizes
- 🎞 **Scroll animations** — fade-up, slide reveals on intersection
- 💬 **Testimonials** — real farmer stories
- ❓ **FAQ accordion**
- 📬 **Newsletter subscription**
- 📝 **Contact form** with validation
- ⏳ **Loading screen** with progress bar
- 🔔 **Toast notifications** for cart actions

## 🎨 Design System

| Token | Value |
|---|---|
| Primary | Forest green (`#166534`) |
| Accent | Earth amber (`#e07b1a`) |
| Background (dark) | `#052e16` |
| Heading font | Playfair Display |
| Body font | DM Sans |

## 📦 Dependencies

- `react` + `react-dom` 18
- `lucide-react` (icons)
- `tailwindcss` 3 + `autoprefixer`
- `vite` 5 + `@vitejs/plugin-react`
