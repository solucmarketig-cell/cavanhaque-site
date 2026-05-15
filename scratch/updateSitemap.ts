
import fs from 'fs';
import path from 'path';

// This is a scratch script to update the sitemap with all articles
const articles = [
  'corte-para-cabelo-cacheado',
  'cabelo-cacheado',
  'penteado-cabelo-cacheado',
  'corte-americano-cabelo-cacheado-feminino',
  'corte-para-cabelo-cacheado-tendencias',
  'afro-nudred-textura-definicao',
  'aprenda-fazer-cavanhaque-simples',
  'aprenda-fazer-cavanhaque-simples-eficaz',
  'asa-delta-mullet-brasileiro',
  'barba-balbo-estilo-homem-de-ferro',
  'barba-balbo-guia',
  'barba-bandholz-volume-maximo',
  'barba-branca-cuidados-estilo',
  'barba-carreira-impacto',
  'barba-chin-strap-faixa',
  'barba-corporativa-profissional',
  'barba-degrade-fade',
  'barba-ducktail-cauda-de-pato',
  'barba-espartana-maxilar',
  'barba-french-fork-garfo-frances',
  'barba-garibaldi-circular',
  'barba-grisalha-como-cuidar-e-estilizar',
  'barba-hulihee-estilo-vintage',
  'barba-imperial-realeza',
  'barba-italiana-estilo-sedutor',
  'barba-lenhador-guia-completo',
  'barba-lenhador-viking-estilo',
  'barba-mutton-chops-wolverine',
  'barba-old-dutch-holandes',
  'barba-para-cada-formato-de-rosto-visagismo',
  'barba-quadrada-short-boxed',
  'barba-stubble-por-fazer',
  'barba-van-dyke-classica',
  'barba-verdi-giuseppe',
  'barba-viking-trancada',
  'bigode-chevron-vintage',
  'bigode-chines-homens-guia',
  'bigode-ferradura-biker',
  'bigode-handlebar-guidao',
  'bigode-lapis-vintage',
  'botox-capilar-profissional-masculino-sem-formol',
  'bowl-cut-repaginado-moderno',
  'box-braids-masculina-afro',
  'burst-fade-moicano-discreto',
  'buzz-cut-design-risca-navalha',
  'cabelo-platinado-nevou-guia',
  'cabelos-cacheados-masculinos-guia-cortes',
  'cabelos-loiros-cacheados-masculino',
  'cabelos-loiros-curtos-masculino',
  'cabelos-loiros-dourados-masculino',
  'cabelos-loiros-escuros-masculino',
  'cabelos-loiros-masculinos-guia',
  'cabelos-loiros-mel-masculino',
  'cabelos-ruivos-acobreado-escuro-masculino',
  'cabelos-ruivos-masculinos-guia',
  'caspa-na-barba-dermatite-seborreica',
  'cavanhaque-ancora-imponente',
  'cavanhaque-estendido-hollywoodian',
  'cavanhaque-masculino',
  'cavanhaque-masculino-guia-completo',
  'como-corrigir-falhas',
  'como-cuidar-do-seu-cavanhaque',
  'como-encontrar-seu-estilo-de-barba',
  'como-fazer-barba-degrade-fade',
  'como-fazer-cavanhaque-bem-definido',
  'como-fazer-cavanhaque-sem-errar',
  'como-ter-barba-negra-intensa',
  'como-ter-um-cavanhaque-bonito',
  'corte-americano-taper-moderno',
  'corte-cesar-moderno-franja-curta',
  'corte-do-jaca-degrade-brasileiro',
  'corte-social-classico-corporativo',
  'dermatite-seborreica-couro-cabeludo-shampoo-tratamento',
  'dreadlocks-curtos-taper-fade',
  'estilo-de-barba-tendencias-2026',
  'flat-top-militar-afro',
  'french-crop-cesar-moderno',
  'fringe-fade-franja-masculina',
  'guia-definitivo-bigode',
  'guia-mestre-cavanhaque',
  'high-fade-degrade-alto',
  'implante-capilar-masculino-precos-resultados',
  'iv-league-haircut-executivo',
  'man-bun-undercut-estilo-samurai',
  'melhores-estilos-de-barba-curta',
  'melhores-oleos-2024',
  'minoxidil-funciona-verdade',
  'mitos-crescimento-barba-lamina-engrossa-fios',
  'modelos-de-barba-classicos-e-modernos',
  'moicano-disfarcado-fade',
  'origem-cavanhaque-cinema',
  'ozonioterapia-capilar-beneficios-crescimento',
  'penteado-infantil-cabelos-cacheados-estilos',
  'pompadour-moderno-fade-volume',
  'scumbag-fade-classico-retro',
  'side-swept-undercut-estilo',
  'slicked-back-undercut-classico',
  'soul-patch-mosca',
  'surfer-shag-longo-ondulado',
  'taper-fade-cabelo-ondulado-textura',
  'top-knot-coque-samurai',
  'transplante-capilar-antes-e-depois-resultados',
  'transplante-capilar-values-custos',
  'transplante-de-barba-fue-vale-a-pena',
  'visagismo-carecas-barbudos',
  'willian-bigode-estilo-e-legado',
  'wolf-cut-masculino-tendencia',
  'penteados-infantis-cabelo-cacheado',
  'penteado-cabelo-cacheado-infantil',
  'corte-para-cabelo-cacheado-masculino'
];

const baseUrl = 'https://cavanhaque.com';
const today = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/beard-styles</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/hair-styles</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;

articles.forEach(slug => {
  xml += `  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

xml += '</urlset>';

fs.writeFileSync('./public/sitemap.xml', xml);
console.log('Sitemap updated with ' + articles.length + ' articles.');
