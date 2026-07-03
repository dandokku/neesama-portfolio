import { useEffect, useRef } from 'react';

const About = () => {
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

  return (
    <section id="about" className="section">
      <div className="container reveal" ref={sectionRef}>
        <div className="about-grid">
          <div className="about-title">
            <h2>The<br />Story.</h2>
          </div>
          <div className="about-text">
            <p className="lead">
              What started as an interest quickly grew into a diverse portfolio—from managing the brand voice of a university department to scaling a beauty business's online presence.
            </p>
            <p>
              I'm a BSc Microbiology student at Veritas University of Abuja who discovered my true passion not in a lab, but in the dynamic world of social media and content strategy. I even built my own personal brand on TikTok from the ground up.
            </p>
            <p>
              I believe that great content isn't just about aesthetics; it's about storytelling, strategy, and understanding what makes an audience tick. Whether I'm editing a trending video, designing a promo flyer, or analyzing engagement metrics, my goal is always to create content that connects and converts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
