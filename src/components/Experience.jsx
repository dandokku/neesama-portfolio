import { useEffect, useRef } from 'react';

const Experience = () => {
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

  const experiences = [
    {
      title: 'Director of Socials',
      company: 'Veritas University of Abuja (Microbiology Dept)',
      period: '2026 – Present',
      points: [
        'Spearheaded the department\'s online presence, shaping a professional yet engaging brand voice.',
        'Coordinated content strategy for departmental events and student engagement initiatives.',
        'Fostered community among students through consistent and relatable communication.'
      ]
    },
    {
      title: 'Social Media Manager',
      company: 'Shevon Beauty',
      period: 'Nov 2025 – Present',
      points: [
        'Developed and executed a comprehensive content calendar focusing on brand growth.',
        'Successfully increased average post views from 200 to 1,000+ views per post.',
        'Designed promotional flyers, price lists, and engaging visual assets.'
      ]
    },
    {
      title: 'Content Creator',
      company: 'Personal TikTok Brand',
      period: '2024 – Present',
      points: [
        'Built a personal brand from 90 to ~300 engaged followers using relatable storytelling.',
        'Created a viral video reaching 19.9K views through trend analysis and audience understanding.',
        'Continuously experimented with video editing styles and engagement tactics.'
      ]
    }
  ];

  return (
    <section id="experience" className="section section-dark">
      <div className="container reveal" ref={sectionRef}>
        <h2 className="text-center mb-md">Professional<br/>Experience.</h2>
        
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="exp-meta">
                <h3>{exp.title}</h3>
                <span>{exp.company} // {exp.period}</span>
              </div>
              <div className="exp-details">
                <ul>
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
