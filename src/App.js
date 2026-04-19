import './App.css';

const highlights = [
  { value: '8+', label: 'Years teaching dance fitness' },
  { value: '40+', label: 'Monthly live sessions' },
  { value: '12k', label: 'Community across social platforms' },
];

const classes = [
  {
    title: 'Bolly Burn',
    schedule: 'Mon, Wed, Fri • 7:00 PM',
    description:
      'A high-energy Bollywood cardio format built for confidence, stamina, and stage-ready expressions.',
  },
  {
    title: 'Rhythm Reset',
    schedule: 'Tue, Thu • 6:30 AM',
    description:
      'An upbeat morning flow with light conditioning, mobility, and easy choreography for all levels.',
  },
  {
    title: 'Weekend Femme Flow',
    schedule: 'Sat • 11:00 AM',
    description:
      'Expressive choreography focused on musicality, posture, and graceful performance energy.',
  },
];

const photoMoments = [
  {
    title: 'Studio spotlight',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Live workshop energy',
    image:
      'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Community performance night',
    image:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Strength through movement',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
  },
];

const videos = [
  {
    title: 'Bollywood cardio teaser',
    duration: '01:12',
    embedUrl: 'https://www.youtube.com/embed/KVZ-P-ZI6W4?si=2wF1pclWk8iy5iPQ',
  },
  {
    title: 'Stage routine highlight',
    duration: '00:58',
    embedUrl: 'https://www.youtube.com/embed/gCcx85zbxz4?si=I5jM0P7A2fKec7w4',
  },
];

const testimonials = [
  {
    quote:
      'Sakshi makes every class feel like a celebration. I came for fitness and stayed for the confidence boost.',
    author: 'Rhea, working professional',
  },
  {
    quote:
      'The routines are beginner-friendly but still push you. It is the only workout I genuinely look forward to.',
    author: 'Nisha, college student',
  },
];

const socials = [
  {
    name: 'Instagram',
    handle: '@rhythm_with_sakshi',
    href: 'https://instagram.com/rhythm_with_sakshi',
  },
  {
    name: 'Twitter',
    handle: '@rhythmwsakshi',
    href: 'https://twitter.com/rhythmwsakshi',
  },
  {
    name: 'YouTube',
    handle: 'Rhythm With Sakshi',
    href: 'https://youtube.com/@rhythm_with_sakshi',
  },
  {
    name: 'WhatsApp',
    handle: '+91 98765 43210',
    href: 'https://wa.me/919876543210',
  },
];

function App() {
  return (
    <div className="app-shell">
      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Dance fitness portfolio</p>
          <h1>rhythm_with_sakshi</h1>
          <p className="hero-text">
            Sakshi blends expressive dance, cardio conditioning, and feminine stage energy into classes that feel equal parts workout and performance.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Book a trial class
            </a>
            <a className="secondary-button" href="#gallery">
              View media
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
          <div className="hero-panel-card">
            <p className="panel-label">Featured instructor</p>
            <h2>Sakshi, 28</h2>
            <p>
              Female dance fitness coach specializing in Bollywood cardio, expressive choreography, and energetic community sessions.
            </p>
            <ul className="feature-list">
              <li>Online and in-studio sessions</li>
              <li>Private choreography coaching</li>
              <li>Event performances and workshops</li>
            </ul>
          </div>
        </div>
      </section>

      <main>
        <section className="content-section classes-section" id="classes">
          <div className="section-heading">
            <p className="eyebrow">Signature classes</p>
            <h2>Programs built to make movement feel magnetic</h2>
          </div>
          <div className="class-grid">
            {classes.map((danceClass) => (
              <article className="class-card" key={danceClass.title}>
                <p className="class-schedule">{danceClass.schedule}</p>
                <h3>{danceClass.title}</h3>
                <p>{danceClass.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section gallery-section" id="gallery">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Photos and videos</p>
              <h2>Snapshots from classes, rehearsals, and stage moments</h2>
            </div>
            <p className="section-supporting-text">
              Dummy portfolio content can be replaced later with your own shoots, event stills, class reels, and social snippets.
            </p>
          </div>

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

        <section className="content-section testimonial-section" id="reviews">
          <div className="section-heading">
            <p className="eyebrow">Client love</p>
            <h2>What dancers say after joining the groove</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <blockquote className="testimonial-card" key={testimonial.author}>
                <p>“{testimonial.quote}”</p>
                <footer>{testimonial.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Contact and socials</p>
              <h2>Reach out for workshops, private sessions, and collaborations</h2>
            </div>
            <p className="section-supporting-text">
              Based in Mumbai and available for online bookings, studio classes, and event choreography inquiries.
            </p>
          </div>

          <div className="contact-panel">
            <div className="contact-card contact-intro">
              <p className="contact-kicker">Quick connect</p>
              <h3>Let&apos;s get you dancing</h3>
              <p>
                Email: hello@rhythmwithsakshi.com
                <br />
                Phone: +91 98765 43210
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
                  <span className="social-name">{social.name}</span>
                  <span className="social-handle">{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
