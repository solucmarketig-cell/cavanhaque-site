import fs from 'fs';
import { fetchArticles } from '../services/contentService.ts';

async function updateSitemap() {
  const articles = await fetchArticles();
  const date = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Homepage -->
  <url>
    <loc>https://cavanhaque.com/</loc>
    <lastmod>${date}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Blog -->
  <url>
    <loc>https://cavanhaque.com/blog</loc>
    <lastmod>${date}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Páginas Principais -->
  <url><loc>https://cavanhaque.com/quem-somos</loc><lastmod>${date}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://cavanhaque.com/manifesto</loc><lastmod>${date}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://cavanhaque.com/estilos</loc><lastmod>${date}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://cavanhaque.com/cabelo</loc><lastmod>${date}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://cavanhaque.com/acessorios</loc><lastmod>${date}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://cavanhaque.com/kits</loc><lastmod>${date}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://cavanhaque.com/politica-de-privacidade</loc><lastmod>${date}</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://cavanhaque.com/termos-de-uso</loc><lastmod>${date}</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://cavanhaque.com/trocas-e-devolucoes</loc><lastmod>${date}</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://cavanhaque.com/faq</loc><lastmod>${date}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://cavanhaque.com/fale-conosco</loc><lastmod>${date}</lastmod><changefreq>monthly</changefreq><priority>0.5</priority></url>
  <url><loc>https://cavanhaque.com/rastreamento</loc><lastmod>${date}</lastmod><changefreq>monthly</changefreq><priority>0.4</priority></url>

  <!-- Artigos do Blog -->
${articles.map(article => `  <url>
    <loc>https://cavanhaque.com/blog/${article.slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${article.category === 'Barba' ? '0.9' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('./public/sitemap.xml', sitemap);
  console.log('Sitemap.xml atualizado com sucesso!');
}

updateSitemap();
