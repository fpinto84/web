import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// All language/page combinations to prerender
const routes = [
  { path: '', lang: 'es', page: 'home' },
  { path: 'es', lang: 'es', page: 'home' },
  { path: 'es/clases', lang: 'es', page: 'classes' },
  { path: 'es/dancehall', lang: 'es', page: 'dancehall' },
  { path: 'es/afrobeats', lang: 'es', page: 'afrobeats' },

  { path: 'ca', lang: 'ca', page: 'home' },
  { path: 'ca/clases', lang: 'ca', page: 'classes' },
  { path: 'ca/dancehall', lang: 'ca', page: 'dancehall' },
  { path: 'ca/afrobeats', lang: 'ca', page: 'afrobeats' },

  { path: 'en', lang: 'en', page: 'home' },
  { path: 'en/clases', lang: 'en', page: 'classes' },
  { path: 'en/dancehall', lang: 'en', page: 'dancehall' },
  { path: 'en/afrobeats', lang: 'en', page: 'afrobeats' },

  { path: 'fr', lang: 'fr', page: 'home' },
  { path: 'fr/clases', lang: 'fr', page: 'classes' },
  { path: 'fr/dancehall', lang: 'fr', page: 'dancehall' },
  { path: 'fr/afrobeats', lang: 'fr', page: 'afrobeats' },
];

// Metadata for each page in each language
const metadata = {
  es: {
    home: {
      title: 'FarRays Center - Escuela de Baile Urbano en Barcelona',
      description: 'Descubre las mejores clases de baile urbano en Barcelona. Dancehall, Afrobeats y más. Profesores experimentados y ambiente inclusivo.',
    },
    classes: {
      title: 'Clases de Baile - FarRays Center Barcelona',
      description: 'Clases de Dancehall, Afrobeats y baile urbano para todos los niveles. Horarios flexibles en Barcelona.',
    },
    dancehall: {
      title: 'Clases de Dancehall - FarRays Center Barcelona',
      description: 'Aprende Dancehall auténtico con los mejores profesores de Barcelona. Clases para principiantes y avanzados.',
    },
    afrobeats: {
      title: 'Clases de Afrobeats - FarRays Center Barcelona',
      description: 'Domina el Afrobeats con clases profesionales en Barcelona. Energía, ritmo y comunidad.',
    },
  },
  ca: {
    home: {
      title: 'FarRays Center - Escola de Ball Urbà a Barcelona',
      description: 'Descobreix les millors classes de ball urbà a Barcelona. Dancehall, Afrobeats i més. Professors experimentats i ambient inclusiu.',
    },
    classes: {
      title: 'Classes de Ball - FarRays Center Barcelona',
      description: 'Classes de Dancehall, Afrobeats i ball urbà per a tots els nivells. Horaris flexibles a Barcelona.',
    },
    dancehall: {
      title: 'Classes de Dancehall - FarRays Center Barcelona',
      description: 'Aprèn Dancehall autèntic amb els millors professors de Barcelona. Classes per a principiants i avançats.',
    },
    afrobeats: {
      title: 'Classes d\'Afrobeats - FarRays Center Barcelona',
      description: 'Domina l\'Afrobeats amb classes professionals a Barcelona. Energia, ritme i comunitat.',
    },
  },
  en: {
    home: {
      title: 'FarRays Center - Urban Dance School in Barcelona',
      description: 'Discover the best urban dance classes in Barcelona. Dancehall, Afrobeats and more. Experienced teachers and inclusive atmosphere.',
    },
    classes: {
      title: 'Dance Classes - FarRays Center Barcelona',
      description: 'Dancehall, Afrobeats and urban dance classes for all levels. Flexible schedules in Barcelona.',
    },
    dancehall: {
      title: 'Dancehall Classes - FarRays Center Barcelona',
      description: 'Learn authentic Dancehall with the best teachers in Barcelona. Classes for beginners and advanced.',
    },
    afrobeats: {
      title: 'Afrobeats Classes - FarRays Center Barcelona',
      description: 'Master Afrobeats with professional classes in Barcelona. Energy, rhythm and community.',
    },
  },
  fr: {
    home: {
      title: 'FarRays Center - École de Danse Urbaine à Barcelone',
      description: 'Découvrez les meilleurs cours de danse urbaine à Barcelone. Dancehall, Afrobeats et plus. Professeurs expérimentés et ambiance inclusive.',
    },
    classes: {
      title: 'Cours de Danse - FarRays Center Barcelone',
      description: 'Cours de Dancehall, Afrobeats et danse urbaine pour tous les niveaux. Horaires flexibles à Barcelone.',
    },
    dancehall: {
      title: 'Cours de Dancehall - FarRays Center Barcelone',
      description: 'Apprenez le Dancehall authentique avec les meilleurs professeurs de Barcelone. Cours pour débutants et avancés.',
    },
    afrobeats: {
      title: 'Cours d\'Afrobeats - FarRays Center Barcelone',
      description: 'Maîtrisez l\'Afrobeats avec des cours professionnels à Barcelone. Énergie, rythme et communauté.',
    },
  },
};

// Basic prerendered content for each page (bots will see this)
const initialContent = {
  es: {
    home: `
      <header class="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
          <div class="text-2xl font-bold text-primary-accent holographic-text">FarRays Center</div>
          <nav class="hidden md:flex space-x-8 text-neutral/90 font-medium text-lg">
            <a href="/es" class="hover:text-primary-accent transition-colors">Inicio</a>
            <a href="/es/clases" class="hover:text-primary-accent transition-colors">Clases</a>
            <a href="/es/dancehall" class="hover:text-primary-accent transition-colors">Dancehall</a>
            <a href="/es/afrobeats" class="hover:text-primary-accent transition-colors">Afrobeats</a>
          </nav>
        </div>
      </header>
      <main id="main-content" class="relative z-0 pt-20 pb-32 px-6 sm:px-12 text-center">
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-neutral mb-6 holographic-text">
          FarRays Center
        </h1>
        <p class="text-xl sm:text-2xl text-neutral/80 max-w-3xl mx-auto mb-12">
          Escuela de baile urbano en Barcelona. Aprende Dancehall, Afrobeats y más con los mejores profesores.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="/es/clases" class="bg-primary-accent text-neutral px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-primary-dark transition-all">
            Ver Clases
          </a>
        </div>
      </main>
    `,
    classes: `
      <main id="main-content" class="relative z-0 pt-20 pb-32 px-6 sm:px-12">
        <h1 class="text-4xl sm:text-5xl font-bold text-neutral mb-8 text-center holographic-text">
          Nuestras Clases
        </h1>
        <p class="text-lg text-neutral/80 max-w-3xl mx-auto mb-12 text-center">
          Clases de Dancehall, Afrobeats y baile urbano para todos los niveles. Profesores experimentados y ambiente inclusivo.
        </p>
      </main>
    `,
    dancehall: `
      <main id="main-content" class="relative z-0 pt-20 pb-32 px-6 sm:px-12">
        <h1 class="text-4xl sm:text-5xl font-bold text-neutral mb-8 text-center holographic-text">
          Clases de Dancehall
        </h1>
        <p class="text-lg text-neutral/80 max-w-3xl mx-auto mb-12 text-center">
          Aprende Dancehall auténtico de Jamaica. Ritmo, energía y comunidad.
        </p>
      </main>
    `,
    afrobeats: `
      <main id="main-content" class="relative z-0 pt-20 pb-32 px-6 sm:px-12">
        <h1 class="text-4xl sm:text-5xl font-bold text-neutral mb-8 text-center holographic-text">
          Clases de Afrobeats
        </h1>
        <p class="text-lg text-neutral/80 max-w-3xl mx-auto mb-12 text-center">
          Domina el Afrobeats con clases profesionales. Energía africana, ritmos modernos.
        </p>
      </main>
    `,
  },
  // Simplified content for other languages
  ca: {
    home: `<main id="main-content"><h1 class="holographic-text text-5xl font-extrabold">FarRays Center</h1><p class="text-xl">Escola de ball urbà a Barcelona. Aprèn Dancehall, Afrobeats i més.</p></main>`,
    classes: `<main id="main-content"><h1 class="holographic-text text-4xl font-bold">Les nostres Classes</h1><p>Classes de Dancehall, Afrobeats i ball urbà per a tots els nivells.</p></main>`,
    dancehall: `<main id="main-content"><h1 class="holographic-text text-4xl font-bold">Classes de Dancehall</h1><p>Aprèn Dancehall autèntic de Jamaica.</p></main>`,
    afrobeats: `<main id="main-content"><h1 class="holographic-text text-4xl font-bold">Classes d'Afrobeats</h1><p>Domina l'Afrobeats amb classes professionals.</p></main>`,
  },
  en: {
    home: `<main id="main-content"><h1 class="holographic-text text-5xl font-extrabold">FarRays Center</h1><p class="text-xl">Urban dance school in Barcelona. Learn Dancehall, Afrobeats and more.</p></main>`,
    classes: `<main id="main-content"><h1 class="holographic-text text-4xl font-bold">Our Classes</h1><p>Dancehall, Afrobeats and urban dance classes for all levels.</p></main>`,
    dancehall: `<main id="main-content"><h1 class="holographic-text text-4xl font-bold">Dancehall Classes</h1><p>Learn authentic Dancehall from Jamaica.</p></main>`,
    afrobeats: `<main id="main-content"><h1 class="holographic-text text-4xl font-bold">Afrobeats Classes</h1><p>Master Afrobeats with professional classes.</p></main>`,
  },
  fr: {
    home: `<main id="main-content"><h1 class="holographic-text text-5xl font-extrabold">FarRays Center</h1><p class="text-xl">École de danse urbaine à Barcelone. Apprenez le Dancehall, l'Afrobeats et plus.</p></main>`,
    classes: `<main id="main-content"><h1 class="holographic-text text-4xl font-bold">Nos Cours</h1><p>Cours de Dancehall, Afrobeats et danse urbaine pour tous les niveaux.</p></main>`,
    dancehall: `<main id="main-content"><h1 class="holographic-text text-4xl font-bold">Cours de Dancehall</h1><p>Apprenez le Dancehall authentique de Jamaïque.</p></main>`,
    afrobeats: `<main id="main-content"><h1 class="holographic-text text-4xl font-bold">Cours d'Afrobeats</h1><p>Maîtrisez l'Afrobeats avec des cours professionnels.</p></main>`,
  },
};

console.log('🚀 Starting prerendering process...\n');

// Read base HTML
const distPath = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('❌ Error: dist/index.html not found. Run "npm run build" first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

let generatedCount = 0;

routes.forEach(route => {
  const { path: routePath, lang, page } = route;

  // Get metadata and content
  const meta = metadata[lang][page];
  const content = initialContent[lang][page];

  // Generate hreflang alternates
  const pagePath = page === 'home' ? '' : (page === 'classes' ? 'clases' : page);
  const hreflangLinks = [
    `<link rel="alternate" hreflang="es" href="https://www.farrayscenter.com/es${pagePath ? `/${pagePath}` : ''}" />`,
    `<link rel="alternate" hreflang="ca" href="https://www.farrayscenter.com/ca${pagePath ? `/${pagePath}` : ''}" />`,
    `<link rel="alternate" hreflang="en" href="https://www.farrayscenter.com/en${pagePath ? `/${pagePath}` : ''}" />`,
    `<link rel="alternate" hreflang="fr" href="https://www.farrayscenter.com/fr${pagePath ? `/${pagePath}` : ''}" />`,
    `<link rel="alternate" hreflang="x-default" href="https://www.farrayscenter.com/es${pagePath ? `/${pagePath}` : ''}" />`,
  ].join('\n    ');

  const currentUrl = `https://www.farrayscenter.com/${routePath}`;

  // Locale persistence script - runs before React mounts
  const localeScript = `
    <script>
      // Set locale before React hydration
      (function() {
        const locale = '${lang}';
        localStorage.setItem('fidc_preferred_locale', locale);
        const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = 'fidc_locale=' + locale + '; expires=' + expires + '; path=/; SameSite=Lax';
        document.documentElement.lang = locale;
      })();
    </script>
  `;

  // Create prerendered HTML
  let html = baseHtml;

  // Update lang attribute
  html = html.replace(/<html([^>]*)lang="[^"]*"/, `<html$1lang="${lang}"`);
  html = html.replace(/<html(?![^>]*lang=)/, `<html lang="${lang}"`);

  // Remove existing SEO meta tags to prevent duplicates
  // Remove title tags (after the first one from charset/viewport section)
  html = html.replace(/<title>.*?<\/title>/g, '');
  // Remove description meta tags
  html = html.replace(/<meta\s+name="description"[^>]*>/gi, '');
  // Remove canonical links
  html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, '');
  // Remove hreflang links
  html = html.replace(/<link\s+rel="alternate"\s+hreflang="[^"]*"[^>]*>/gi, '');
  // Remove Open Graph tags
  html = html.replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, '');
  // Remove Twitter Card tags
  html = html.replace(/<meta\s+(?:name|property)="twitter:[^"]*"[^>]*>/gi, '');

  // Inject metadata in <head>
  html = html.replace('</head>', `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="${currentUrl}" />
    ${hreflangLinks}

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${currentUrl}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="https://www.farrayscenter.com/images/og-${page}.jpg" />
    <meta property="og:locale" content="${lang}_ES" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${currentUrl}" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="https://www.farrayscenter.com/images/og-${page}.jpg" />

    ${localeScript}
  </head>`);

  // Inject prerendered content in <div id="root">
  // Use data-prerendered to mark for hydration compatibility
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root" data-prerendered="true"></div><!--${content}-->`
  );

  // Determine file path
  const filePath = routePath === ''
    ? path.join(distPath, 'index.html')
    : path.join(distPath, routePath, 'index.html');

  // Create directory if it doesn't exist
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Save file
  fs.writeFileSync(filePath, html);
  generatedCount++;

  console.log(`✅ Generated: /${routePath || '(root)'} [${lang}] → ${filePath}`);
});

console.log(`\n🎉 Prerendering complete! Generated ${generatedCount} pages.`);
console.log('\n📊 Summary:');
console.log(`   - Total pages: ${generatedCount}`);
console.log(`   - Languages: es, ca, en, fr (4)`);
console.log(`   - Pages per language: home, clases, dancehall, afrobeats (4)`);
console.log(`   - SEO: ✅ Metadata, ✅ hreflang, ✅ Canonical, ✅ Open Graph`);
console.log(`   - Locale: ✅ Pre-set via localStorage + cookie before React hydration`);
console.log('\n🔍 Verify: Run "npm run preview" and view page source to see prerendered content\n');
