import './App.css';
import ClassesSection from './components/ClassesSection';
import ContactSection from './components/ContactSection';
import GallerySection from './components/GallerySection';
import HeroSection from './components/HeroSection';
import ReelsSection from './components/ReelsSection';
import TestimonialsSection from './components/TestimonialsSection';
import {
  classes,
  contactContent,
  galleryContent,
  heroContent,
  highlights,
  instructorProfile,
  photoMoments,
  reels,
  reelsContent,
  socials,
  testimonialContent,
  testimonials,
  videos,
} from './data/siteContent';

function App() {
  return (
    <div className="app-shell">
      <HeroSection
        heroContent={heroContent}
        highlights={highlights}
        instructorProfile={instructorProfile}
      />

      <main>
        <ClassesSection classes={classes} />
        <GallerySection
          galleryContent={galleryContent}
          photoMoments={photoMoments}
          videos={videos}
        />
        <ReelsSection reelsContent={reelsContent} reels={reels} />
        <TestimonialsSection
          testimonialContent={testimonialContent}
          testimonials={testimonials}
        />
        <ContactSection contactContent={contactContent} socials={socials} />
      </main>
    </div>
  );
}

export default App;
