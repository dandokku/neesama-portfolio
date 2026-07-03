import { useEffect, useRef } from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="section section-dark contact-section">
      <div className="container reveal" ref={sectionRef}>
        <h2>Let's build<br/>something together.</h2>
        <p style={{ color: 'rgba(250, 250, 248, 0.7)', maxWidth: '600px', margin: '2rem auto 4rem', fontSize: '1.2rem' }}>
          Whether you need a full social media strategy, engaging content creation, or just want to chat about the latest trends.
        </p>

        <div className="contact-links delay-1">
          <a href="mailto:Chukwuemekaekenene@gmail.com" className="contact-link">
            <Mail size={32} />
            Email Me
          </a>
          
          <a href="https://wa.me/YOUR_PHONE_NUMBER_HERE" className="contact-link" target="_blank" rel="noopener noreferrer">
            <Phone size={32} />
            WhatsApp
          </a>
          
          <a href="https://linkedin.com/in/YOUR_LINKEDIN_URL_HERE" className="contact-link" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            LinkedIn
          </a>
        </div>

        <div className="footer-bottom delay-2">
          <p>&copy; {currentYear} Nene Chukwuemeka-Eke.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
