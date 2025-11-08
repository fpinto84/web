import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Todas las rutas que necesitamos prerrenderizar
const routes = [
  { path: '', lang: 'es', page: 'home' },
  { path: 'es', lang: 'es', page: 'home' },
  { path: 'es/classes', lang: 'es', page: 'classes' },
  { path: 'es/dancehall', lang: 'es', page: 'dancehall' },
  { path: 'es/afrobeats', lang: 'es', page: 'afrobeats' },

  { path: 'ca', lang: 'ca', page: 'home' },
  { path: 'ca/classes', lang: 'ca', page: 'classes' },
  { path: 'ca/dancehall', lang: 'ca', page: 'dancehall' },
  { path: 'ca/afrobeats', lang: 'ca', page: 'afrobeats' },

  { path: 'en', lang: 'en', page: 'home' },
  { path: 'en/classes', lang: 'en', page: 'classes' },
  { path: 'en/dancehall', lang: 'en', page: 'dancehall' },
  { path: 'en/afrobeats', lang: 'en', page: 'afrobeats' },

  { path: 'fr', lang: 'fr', page: 'home' },
  { path: 'fr/classes', lang: 'fr', page: 'classes' },
  { path: 'fr/dancehall', lang: 'fr', page: 'dancehall' },
  { path: 'fr/afrobeats', lang: 'fr', page: 'afrobeats' },
];

// Metadata para cada página en cada idioma
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

// Contenido inicial básico para cada página (será reemplazado por React, pero los bots verán esto)
const initialContent = {
  es: {
    home: `
      <header class="relative z-10 flex items-center justify-between px-6 py-4 sm:px-12">
        <div class="text-2xl font-bold text-primary-accent holographic-text">FarRays Center</div>
        <nav class="hidden md:flex space-x-8 text-neutral/90 font-medium text-lg">
          <a href="/es" class="hover:text-primary-accent transition-colors">Inicio</a>
          <a href="/es/classes" class="hover:text-primary-accent transition-colors">Clases</a>
          <a href="/es/dancehall" class="hover:text-primary-accent transition-colors">Dancehall</a>
          <a href="/es/afrobeats" class="hover:text-primary-accent transition-colors">Afrobeats</a>
        </nav>
      </header>
      <main id="main-content" class="relative z-0 pt-20 pb-32 px-6 sm:px-12 text-center">
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-neutral mb-6 holographic-text">
          FarRays Center
        </h1>
        <p class="text-xl sm:text-2xl text-neutral/80 max-w-3xl mx-auto mb-12">
          Escuela de baile urbano en Barcelona. Aprende Dancehall, Afrobeats y más con los mejores profesores.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="/es/classes" class="bg-primary-accent text-neutral px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-primary-dark transition-all">
            Ver Clases
          </a>
        </div>
      </main>
    `,
    classes: `
      <header class="relative z-10 flex items-center justify-between px-6 py-4 sm:px-12">
        <div class="text-2xl font-bold text-primary-accent holographic-text">FarRays Center</div>
        <nav class="hidden md:flex space-x-8 text-neutral/90 font-medium text-lg">
          <a href="/es" class="hover:text-primary-accent transition-colors">Inicio</a>
          <a href="/es/classes" class="hover:text-primary-accent transition-colors">Clases</a>
          <a href="/es/dancehall" class="hover:text-primary-accent transition-colors">Dancehall</a>
          <a href="/es/afrobeats" class="hover:text-primary-accent transition-colors">Afrobeats</a>
        </nav>
      </header>
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
      <header class="relative z-10 flex items-center justify-between px-6 py-4 sm:px-12">
        <div class="text-2xl font-bold text-primary-accent holographic-text">FarRays Center</div>
        <nav class="hidden md:flex space-x-8 text-neutral/90 font-medium text-lg">
          <a href="/es" class="hover:text-primary-accent transition-colors">Inicio</a>
          <a href="/es/classes" class="hover:text-primary-accent transition-colors">Clases</a>
          <a href="/es/dancehall" class="hover:text-primary-accent transition-colors">Dancehall</a>
          <a href="/es/afrobeats" class="hover:text-primary-accent transition-colors">Afrobeats</a>
        </nav>
      </header>
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
      <header class="relative z-10 flex items-center justify-between px-6 py-4 sm:px-12">
        <div class="text-2xl font-bold text-primary-accent holographic-text">FarRays Center</div>
        <nav class="hidden md:flex space-x-8 text-neutral/90 font-medium text-lg">
          <a href="/es" class="hover:text-primary-accent transition-colors">Inicio</a>
          <a href="/es/classes" class="hover:text-primary-accent transition-colors">Clases</a>
          <a href="/es/dancehall" class="hover:text-primary-accent transition-colors">Dancehall</a>
          <a href="/es/afrobeats" class="hover:text-primary-accent transition-colors">Afrobeats</a>
        </nav>
      </header>
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
  // Para los otros idiomas, usamos traducciones simples
  ca: {
    home: `<main id="main-content"><h1 class="holographic-text">FarRays Center</h1><p>Escola de ball urbà a Barcelona. Aprèn Dancehall, Afrobeats i més amb els millors professors.</p></main>`,
    classes: `<main id="main-content"><h1 class="holographic-text">Les nostres Classes</h1><p>Classes de Dancehall, Afrobeats i ball urbà per a tots els nivells.</p></main>`,
    dancehall: `<main id="main-content"><h1 class="holographic-text">Classes de Dancehall</h1><p>Aprèn Dancehall autèntic de Jamaica.</p></main>`,
    afrobeats: `<main id="main-content"><h1 class="holographic-text">Classes d'Afrobeats</h1><p>Domina l'Afrobeats amb classes professionals.</p></main>`,
  },
  en: {
    home: `<main id="main-content"><h1 class="holographic-text">FarRays Center</h1><p>Urban dance school in Barcelona. Learn Dancehall, Afrobeats and more with the best teachers.</p></main>`,
    classes: `<main id="main-content"><h1 class="holographic-text">Our Classes</h1><p>Dancehall, Afrobeats and urban dance classes for all levels.</p></main>`,
    dancehall: `<main id="main-content"><h1 class="holographic-text">Dancehall Classes</h1><p>Learn authentic Dancehall from Jamaica.</p></main>`,
    afrobeats: `<main id="main-content"><h1 class="holographic-text">Afrobeats Classes</h1><p>Master Afrobeats with professional classes.</p></main>`,
  },
  fr: {
    home: `<main id="main-content"><h1 class="holographic-text">FarRays Center</h1><p>École de danse urbaine à Barcelone. Apprenez le Dancehall, l'Afrobeats et plus avec les meilleurs professeurs.</p></main>`,
    classes: `<main id="main-content"><h1 class="holographic-text">Nos Cours</h1><p>Cours de Dancehall, Afrobeats et danse urbaine pour tous les niveaux.</p></main>`,
    dancehall: `<main id="main-content"><h1 class="holographic-text">Cours de Dancehall</h1><p>Apprenez le Dancehall authentique de Jamaïque.</p></main>`,
    afrobeats: `<main id="main-content"><h1 class="holographic-text">Cours d'Afrobeats</h1><p>Maîtrisez l'Afrobeats avec des cours professionnels.</p></main>`,
  },
};

console.log('🚀 Starting prerendering process...\n');

// Leer el HTML base
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

  // Obtener metadata y contenido
  const meta = metadata[lang][page];
  const content = initialContent[lang][page];

  // Generar hreflang alternates
  const hreflangLinks = [
    `<link rel="alternate" hreflang="es" href="https://www.farrayscenter.com/es${page !== 'home' ? `/${page}` : ''}" />`,
    `<link rel="alternate" hreflang="ca" href="https://www.farrayscenter.com/ca${page !== 'home' ? `/${page}` : ''}" />`,
    `<link rel="alternate" hreflang="en" href="https://www.farrayscenter.com/en${page !== 'home' ? `/${page}` : ''}" />`,
    `<link rel="alternate" hreflang="fr" href="https://www.farrayscenter.com/fr${page !== 'home' ? `/${page}` : ''}" />`,
    `<link rel="alternate" hreflang="x-default" href="https://www.farrayscenter.com/es${page !== 'home' ? `/${page}` : ''}" />`,
  ].join('\n    ');

  const currentUrl = `https://www.farrayscenter.com/${routePath}`;

  // Crear HTML prerenderizado
  let html = baseHtml;

  // Actualizar lang
  html = html.replace('<html lang="en">', `<html lang="${lang}">`);

  // Inyectar metadata en el <head>
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
  </head>`);

  // Inyectar contenido inicial en <div id="root">
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"><div class="bg-black text-neutral antialiased font-sans overflow-x-hidden">${content}</div></div>`
  );

  // Determinar la ruta del archivo
  const filePath = routePath === ''
    ? path.join(distPath, 'index.html')
    : path.join(distPath, routePath, 'index.html');

  // Crear directorio si no existe
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Guardar archivo
  fs.writeFileSync(filePath, html);
  generatedCount++;

  console.log(`✅ Generated: /${routePath || '(root)'} → ${filePath}`);
});

console.log(`\n🎉 Prerendering complete! Generated ${generatedCount} pages.`);
console.log('\n📊 Summary:');
console.log(`   - Total pages: ${generatedCount}`);
console.log(`   - Languages: es, ca, en, fr (4)`);
console.log(`   - Pages per language: home, classes, dancehall, afrobeats (4)`);
console.log(`   - SEO: ✅ Metadata, ✅ hreflang, ✅ Canonical, ✅ Open Graph`);
console.log('\n🔍 Verify: Run "npm run preview" and view page source to see prerendered content\n');
