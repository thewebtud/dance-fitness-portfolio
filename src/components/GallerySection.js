import SectionHeader from './SectionHeader';

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
                        <div className="video-frame">
                            <iframe
                                src={video.embedUrl}
                                title={video.title}
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
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