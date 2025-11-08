# Farray's International Dance Center - Web App MVP Roadmap & Architecture

**Project:** Farray's International Dance Center (FIDC) Official Homepage
**Status:** v1.2 - Afrobeats Page Added
**Date:** May 21, 2024

---

## 1. Overview & Project Goal

This document outlines the development roadmap, current features, and architectural decisions for the FIDC web application.

The primary goal is to create a world-class, futuristic, and multilingual website that reflects the premium quality and international prestige of Yunaisy Farray and her dance center. The web app serves as the main digital touchpoint for prospective students, providing information, showcasing the school's value, and driving enrollments.

---

## 2. What We've Done: Completed Features (v1.2)

The current version of the application is a complete, feature-rich static website with dynamic client-side interactions.

### Core Functionality & Architecture
- **✅ Modern Frontend Stack:** Built with **React 19** and **TypeScript** for a robust, scalable, and maintainable codebase.
- **✅ Component-Based Structure:** The application is modular, with functionality broken down into reusable components (e.g., `Header`, `Hero`, `Classes`, `Footer`).
- **✅ Multi-Page Application:** A simple but effective client-side navigation system manages four main views: `HomePage`, `DanceClassesPage`, a dedicated `DancehallPage`, and a new `AfrobeatsPage`, controlled by React state.
- **✅ Full Internationalization (i18n):** Complete multilingual support for **Spanish (es)**, **Catalan (ca)**, **English (en)**, and **French (fr)**. A custom `useI18n` hook provides seamless language switching and content management. The system intelligently detects the user's browser language and defaults to Spanish.
- **✅ Responsive First Design:** The UI is fully responsive and optimized for a flawless experience on mobile, tablet, and desktop devices, built using **Tailwind CSS**.

### Aesthetics & User Experience
- **✅ Ultimate Impact & Futuristic Design:**
  - A dominant, dark theme with a powerful color palette (`primary-dark`: #800020, `primary-accent`: #c82260).
  - Custom, smooth animations (`glow`, `pulse`, `fade-in-up`) create a dynamic and engaging user experience.
  - A unique `holographic-text` effect reinforces the futuristic theme.
  - Background videos and gradient overlays are used to create a sense of depth and energy.
- **✅ Performance-Aware Animations:** The `AnimateOnScroll` component ensures that animations are triggered only when elements enter the viewport, improving initial page load performance.
- **✅ Accessibility (A11y):**
  - Semantic HTML and ARIA attributes (`aria-label`, `aria-current`) are used to ensure the app is accessible to users with disabilities.
  - A `prefers-reduced-motion` media query is implemented to respect user preferences for minimal animations.

### Content & SEO
- **✅ Comprehensive Homepage Sections:** The homepage provides a complete overview of the dance center, including:
  - `Hero`: An impactful, animated introduction.
  - `Philosophy`: The school's core values.
  - `About Yunaisy Farray`: A detailed bio with an interactive infographic for the 'Método Farray®'.
  - `Classes`: A visual grid of all dance categories offered.
  - `Why FIDC`: Highlighting the key value propositions.
  - `Services`, `Teachers`, `Testimonials`, `InstagramFeed` (mock), `FinalCTA`, and `HowToGetHere` with an embedded map.
- **✅ Detailed Dance Classes Page:** A dedicated page with in-depth information, including substyles and proficiency levels for each dance discipline.
- **✅ Dedicated Dancehall Page:** An immersive page specifically for Dancehall, featuring detailed content about the style, class levels, a dedicated instructor, and unique testimonials.
- **✅ Dedicated Afrobeats Page:** An immersive page specifically for Afrobeats, featuring detailed content about the style, class levels, a dedicated instructor, and unique testimonials.
- **✅ Advanced SEO Strategy:**
  - Comprehensive SEO meta tags (title, description, Open Graph, Twitter Cards).
  - Multilingual support with `hreflang` tags to serve the correct language to users globally.
  - Rich **JSON-LD structured data** to enhance search engine results and establish E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
  - A `sitemap.xml` and `robots.txt` are included for optimal search engine crawling.

---

## 3. What's Working Now

- The entire website is functional as a static, informational portal.
- All navigation links, buttons, and language-switching functionalities are working correctly.
- All animations and visual effects render as designed across modern browsers.
- The responsive layout adapts seamlessly to all screen sizes.

---

## 4. Architectural Decisions

- **Frontend Framework: React 19 + TypeScript**
  - **Why:** React's component-based architecture is ideal for building a complex, maintainable UI. TypeScript adds static typing, which reduces bugs and improves developer experience, especially as the project scales.

- **Styling: Tailwind CSS**
  - **Why:** A utility-first CSS framework that allows for rapid, consistent, and responsive UI development directly within the markup. The theme is customized via a `tailwind.config` object in `index.html` for simplicity in this development environment.

- **Dependencies & Build Process: `importmap`**
  - **Why:** To keep the setup simple and avoid the need for a complex build tool like Webpack or Vite, dependencies (`react`, `react-dom`) are loaded directly from a CDN via an `importmap` in `index.html`. This is a modern browser feature that simplifies module resolution.

- **Internationalization (i18n): Custom React Context & Hook**
  - **Why:** Instead of adding a heavy external library, a lightweight, custom solution was built using React Context. This provides a clean `t('key')` API for translations, is highly performant, and keeps the dependency footprint minimal.

- **State Management: React Hooks (`useState`, `useEffect`)**
  - **Why:** For the current scope of the application, React's built-in state management is sufficient. The primary state is the current page (`'home'`, `'classes'`, `'dancehall'`, `'afrobeats'`) and the selected locale, both of which are managed in the root `App` component. This avoids the overhead of libraries like Redux or Zustand.

---

## 5. What We're Doing: Next Steps & Future Roadmap

With the MVP foundation in place, the following features are planned for future iterations:

- **Phase 1: Enhancing Interactivity**
  - **[In Progress] 3D Hero Section:** Implement the planned 3D animated background using a library like **React Three Fiber** to fulfill the "3D" and "futuristic" vision.
  - **[Planned] Live Instagram API:** Replace the current mock-up with a live feed by integrating the Instagram Basic Display API.
  - **[Planned] Functional Forms:** Implement functional forms for the "Free Trial" and "Enroll Now" CTAs, including data validation and submission to a backend endpoint or third-party service.

- **Phase 2: Dynamic Content Management**
  - **[Planned] Headless CMS Integration:** Decouple the content (class descriptions, teacher bios, testimonials) from the code by integrating a headless CMS (e.g., Strapi, Contentful). This will allow the FIDC team to update website content without developer intervention.
  - **[Planned] Dynamic Schedule & Pricing Page:** Create a page that fetches class schedules and pricing information from the CMS, allowing for real-time updates.

- **Phase 3: E-commerce & Community**
  - **[Planned] Online Booking System:** Integrate a full booking and payment system for classes and workshops.
  - **[Planned] Student Portal:** A login area for registered students to manage their classes, view exclusive content, and track their progress.
  - **[Planned] Blog/News Section:** A dynamic section for school news, events, and articles to improve SEO and community engagement.