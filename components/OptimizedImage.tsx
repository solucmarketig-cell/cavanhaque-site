import React from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number; // Intrinsic width for aspect ratio
    height?: number; // Intrinsic height for aspect ratio
    priority?: boolean; // For above-the-fold images
    sizes?: string;
    style?: React.CSSProperties; // Add support for inline styles
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className = '',
    width,
    height,
    priority = false,
    sizes = '100vw',
    style
}) => {
    // Generate srcset for different sizes
    const generateSrcSet = (baseUrl: string) => {
        // Check if it's an Unsplash URL
        if (baseUrl.includes('unsplash.com')) {
            const widths = [400, 800, 1200, 1600, 2000];
            return widths
                .map(w => {
                    const url = baseUrl.includes('?')
                        ? `${baseUrl}&w=${w}`
                        : `${baseUrl}?w=${w}&auto=format&fit=crop`;
                    return `${url} ${w}w`;
                })
                .join(', ');
        }
        return undefined;
    };

    const srcSet = generateSrcSet(src);

    return (
        <img
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            className={className}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            fetchPriority={priority ? 'high' : 'auto'}
            style={style}
        />
    );
};

export default OptimizedImage;
