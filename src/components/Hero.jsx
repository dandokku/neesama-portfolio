import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container reveal" ref={heroRef}>
        <div className="hero-grid">
          <div className="hero-content">
            <h1>
              <span>Nene.</span>
              Social Media Manager & Strategist
            </h1>
            <p className="hero-tagline delay-1 reveal visible">
              I help brands find their authentic voice, build engaged communities, and turn casual scrolling into genuine connection.
            </p>
            <div className="delay-2 reveal visible">
              <a href="#contact" className="btn">Let's Work Together</a>
            </div>
          </div>
          
          <div className="hero-image-container delay-3 reveal visible">
            <div className="hero-image-wrapper">
              <img src="/assets/picture.jpeg" alt="Nene Chukwuemeka-Eke" className="hero-image" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
