import './App.css';
import ClassesSection from './components/ClassesSection';
import ContactSection from './components/ContactSection';
import GallerySection from './components/GallerySection';
import HeroSection from './components/HeroSection';
import TestimonialsSection from './components/TestimonialsSection';
import {
  classes,
  contactContent,
  galleryContent,
  heroContent,
  highlights,
  instructorProfile,
  photoMoments,
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
