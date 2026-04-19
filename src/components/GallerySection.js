import SectionHeader from './SectionHeader';
import { InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed';

function getVideoUrl(video) {
    return video.url || video.embedUrl;
}

function isInstagramUrl(url) {
    try {
        const parsedUrl = new URL(url);

        return parsedUrl.hostname.includes('instagram.com');
    } catch {
        return false;
    }
}

function renderVideoEmbed(video) {
    const url = getVideoUrl(video);

    if (!url) {
        return null;
    }

    if (isInstagramUrl(url)) {
        return (
            <InstagramEmbed
                url={url}
                width="100%"
                height={520}
                captioned={false}
            />
        );
    }

    return (
        <YouTubeEmbed
            url={url}
            width="100%"
            height={240}
        />
    );
}

function getYouTubeEmbedUrl(url) {
    try {
        const parsedUrl = new URL(url);

        if (parsedUrl.hostname.includes('youtube.com')) {
            if (parsedUrl.pathname.startsWith('/embed/')) {
                return url;
            }

            const videoId = parsedUrl.searchParams.get('v');

            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}`;
            }
        }

        if (parsedUrl.hostname === 'youtu.be') {
            const videoId = parsedUrl.pathname.slice(1);

            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}`;
            }
        }
    } catch {
        return url;
    }

    return url;
}

function GallerySection({ galleryContent, photoMoments, videos }) {
    return (
        <section className="content-section gallery-section" id="gallery">
            <SectionHeader
                eyebrow={galleryContent.eyebrow}
                title={galleryContent.title}
                supportingText={galleryContent.supportingText}
                split
            />

            <div className="photo-grid">
                {photoMoments.map((photo) => (
                    <article className="photo-card" key={photo.title}>
                        <img src={photo.image} alt={photo.title} />
                        <div className="photo-overlay">
                            <span>{photo.title}</span>
                        </div>
                    </article>
                ))}
            </div>

            <div className="video-grid">
                {videos.map((video) => (
                    <article className="video-card" key={video.title}>
                        <div className="video-frame video-embed-shell">
                            {renderVideoEmbed({
                                ...video,
                                url: isInstagramUrl(getVideoUrl(video)) ? getVideoUrl(video) : getYouTubeEmbedUrl(getVideoUrl(video)),
                            })}
                        </div>
                        <div className="video-meta">
                            <h3>{video.title}</h3>
                            <span>{video.duration}</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default GallerySection;