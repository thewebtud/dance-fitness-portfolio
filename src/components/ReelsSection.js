import { InstagramEmbed } from 'react-social-media-embed';
import SectionHeader from './SectionHeader';

function ReelsSection({ reelsContent, reels }) {
    return (
        <section className="content-section reels-section" id="reels">
            <SectionHeader
                eyebrow={reelsContent.eyebrow}
                title={reelsContent.title}
                supportingText={reelsContent.supportingText}
                split
            />

            <div className="reels-grid">
                {reels.map((reel) => (
                    <article className="reel-card" key={reel.url}>
                        <div className="reel-frame">
                            <InstagramEmbed
                                url={reel.url}
                                width="100%"
                                height={560}
                                captioned={false}
                            />
                        </div>
                        <div className="video-meta">
                            <h3>{reel.title}</h3>
                            <span>{reel.label}</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ReelsSection;