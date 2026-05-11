import React, { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    article?: boolean;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    canonicalUrl?: string;
    howToSteps?: { name: string; text: string; image?: string }[];
    breadcrumbs?: { name: string; url: string }[];
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = 'cavanhaque, barba, minoxidil, grooming masculino, estilo masculino',
    image = 'https://images.unsplash.com/photo-1553873165-1c220ab51c86?q=80&w=1200&auto=format&fit=crop',
    article = false,
    author = 'Carlos Barbudo',
    publishedTime,
    modifiedTime,
    canonicalUrl,
    howToSteps,
    breadcrumbs
}) => {
    useEffect(() => {
        // Update document title
        document.title = title;

        // Update or create meta tags
        const updateMetaTag = (name: string, content: string, property = false) => {
            const attribute = property ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Basic meta tags
        updateMetaTag('description', description);
        if (keywords) updateMetaTag('keywords', keywords);
        updateMetaTag('author', author);

        // Open Graph tags
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', image, true);
        updateMetaTag('og:type', article ? 'article' : 'website', true);

        if (canonicalUrl) {
            updateMetaTag('og:url', canonicalUrl, true);
        }

        // Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image', true);
        updateMetaTag('twitter:title', title, true);
        updateMetaTag('twitter:description', description, true);
        updateMetaTag('twitter:image', image, true);

        // Article specific tags
        if (article) {
            if (publishedTime) updateMetaTag('article:published_time', publishedTime, true);
            if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true);
            updateMetaTag('article:author', author, true);
        }

        // Update canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (canonicalUrl) {
            if (!canonical) {
                canonical = document.createElement('link');
                canonical.setAttribute('rel', 'canonical');
                document.head.appendChild(canonical);
            }
            canonical.setAttribute('href', canonicalUrl);
        }

        // Inject JSON-LD
        const scriptId = 'json-ld-schema';
        let script = document.getElementById(scriptId) as HTMLScriptElement;
        
        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }

        const schemas: any[] = [
            {
                "@context": "https://schema.org",
                "@type": article ? "Article" : "WebSite",
                "headline": title,
                "description": description,
                "image": image,
                "author": {
                    "@type": "Person",
                    "name": author,
                    "jobTitle": "Especialista em Grooming",
                    "url": "https://cavanhaque.com/quem-somos"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Cavanhaque",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://cavanhaque.com/favicon.svg"
                    }
                },
                "datePublished": publishedTime,
                "dateModified": modifiedTime || publishedTime
            }
        ];

        if (howToSteps) {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "HowTo",
                "name": title,
                "description": description,
                "step": howToSteps.map((step, index) => ({
                    "@type": "HowToStep",
                    "name": step.name,
                    "text": step.text,
                    "url": canonicalUrl ? `${canonicalUrl}#step-${index + 1}` : undefined,
                    "image": step.image
                }))
            });
        }

        if (breadcrumbs) {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbs.map((crumb, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": crumb.name,
                    "item": crumb.url
                }))
            });
        }

        script.text = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);

    }, [title, description, keywords, image, article, author, publishedTime, modifiedTime, canonicalUrl, howToSteps, breadcrumbs]);

    return null;
};

export default SEO;
