import { useEffect, useRef } from 'react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Core Expertise',
      skills: ['Social Media Management', 'Social Media Marketing', 'Content Creation', 'Content Strategy', 'Public Relations']
    },
    {
      title: 'Creative & Technical',
      skills: ['Graphic Design', 'Video Editing', 'Copywriting', 'Canva', 'CapCut']
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Storytelling', 'Community Management', 'Adaptability']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container reveal" ref={sectionRef}>
        <h2 className="mb-md">Expertise &<br/>Certifications.</h2>
        
        <div className="skills-wrapper">
          <div className="skills-content delay-1">
            {skillCategories.map((category, index) => (
              <div className="skills-category" key={index}>
                <h3>{category.title}</h3>
                <div className="skill-items">
                  {category.skills.map((skill, idx) => (
                    <span key={idx}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="skills-category mt-md">
              <h3>Qualifications</h3>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>
                ALX Africa — AI Career Essentials (2024)
              </p>
            </div>
          </div>

          <div className="skills-image delay-2">
            <img 
              src="/assets/certifications.jpeg" 
              alt="ALX Africa Certification" 
              className="cert-image" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
