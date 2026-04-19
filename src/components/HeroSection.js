import sakshiDp from '../assets/sakshi_dp.jpg';

function HeroSection({ heroContent, highlights, instructorProfile }) {
    return (
        <section className="hero-section" id="home">
            <div className="hero-copy">
                <p className="eyebrow">{heroContent.eyebrow}</p>
                <h1>{heroContent.brandName}</h1>
                <p className="hero-text">{heroContent.description}</p>
                <div className="hero-actions">
                    <a className="primary-button" href={heroContent.primaryAction.href}>
                        {heroContent.primaryAction.label}
                    </a>
                    <a className="secondary-button" href={heroContent.secondaryAction.href}>
                        {heroContent.secondaryAction.label}
                    </a>
                </div>
                <div className="highlights-grid" aria-label="Business highlights">
                    {highlights.map((item) => (
                        <article className="highlight-card" key={item.label}>
                            <strong>{item.value}</strong>
                            <span>{item.label}</span>
                        </article>
                    ))}
                </div>
            </div>

            <div className="hero-panel">
                <div className="profile-badge" aria-label="Profile photo area">
                    <div className="profile-badge-ring">
                        <img
                            className="profile-badge-image"
                            src={sakshiDp}
                            alt={instructorProfile.profileImage.alt}
                        />
                    </div>
                    <span className="profile-badge-caption">Profile photo</span>
                </div>

                <div className="hero-panel-card">
                    <p className="panel-label">{instructorProfile.label}</p>
                    <h2>{instructorProfile.name}</h2>
                    <p>{instructorProfile.description}</p>
                    <ul className="feature-list">
                        {instructorProfile.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
