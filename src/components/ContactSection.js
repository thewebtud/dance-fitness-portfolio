import SectionHeader from './SectionHeader';

function SocialIcon({ icon }) {
    switch (icon) {
        case 'instagram':
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4.25" />
                    <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
                </svg>
            );
        case 'twitter':
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 4.5h4.3l4.1 5.6 4.9-5.6H20l-6.4 7.3L20.5 20h-4.3l-4.5-6.1L6.4 20H4l6.5-7.5z" />
                </svg>
            );
        case 'youtube':
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 8.5a3 3 0 0 0-2.1-2.1C17 6 12 6 12 6s-5 0-6.9.4A3 3 0 0 0 3 8.5C2.6 10.4 2.6 12 2.6 12s0 1.6.4 3.5a3 3 0 0 0 2.1 2.1C7 18 12 18 12 18s5 0 6.9-.4a3 3 0 0 0 2.1-2.1c.4-1.9.4-3.5.4-3.5s0-1.6-.4-3.5Z" />
                    <path d="M10 9.3v5.4l4.8-2.7Z" fill="currentColor" stroke="none" />
                </svg>
            );
        case 'whatsapp':
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.1 4a7.9 7.9 0 0 0-6.8 11.9L4 20l4.2-1.1A7.9 7.9 0 1 0 12.1 4Z" />
                    <path d="M9.4 8.8c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2.1.4 0 .6l-.3.5c-.1.1-.2.3 0 .5.4.8 1.1 1.5 1.9 2 .2.1.4.1.5 0l.5-.6c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.3.6l-.2 1c-.1.3-.3.5-.5.6-.3.1-.7.2-1.1.1-.6-.1-1.6-.5-2.7-1.3-1.3-.9-2.3-2.1-2.8-3.1-.5-.9-.6-1.8-.4-2.3Z" fill="currentColor" stroke="none" />
                </svg>
            );
        default:
            return null;
    }
}

function ContactSection({ contactContent, socials }) {
    return (
        <section className="content-section contact-section" id="contact">
            <SectionHeader
                eyebrow={contactContent.eyebrow}
                title={contactContent.title}
                supportingText={contactContent.supportingText}
                split
            />

            <div className="contact-panel">
                <div className="contact-card contact-intro">
                    <p className="contact-kicker">{contactContent.kicker}</p>
                    <h3>{contactContent.cardTitle}</h3>
                    <p>
                        Email: {contactContent.email}
                        <br />
                        Phone: {contactContent.phone}
                    </p>
                </div>

                <div className="social-grid" aria-label="Social media links">
                    {socials.map((social) => (
                        <a
                            className="social-card"
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="social-card-top">
                                <span className="social-icon" aria-hidden="true">
                                    <SocialIcon icon={social.icon} />
                                </span>
                                <span className="social-name">{social.name}</span>
                            </div>
                            <span className="social-handle">{social.handle}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ContactSection;