import { useEffect, useRef } from 'react';

const Portfolio = () => {
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

  const portfolioItems = [
    {
      id: 1,
      title: 'Shevon Beauty Growth Strategy',
      description: 'Scaled account from 200 to 1000+ views per post with strategic content calendar and high-quality visual assets.',
      image: '/assets/shevonbeauty.jpeg',
      gridClass: 'item-1'
    },
    {
      id: 2,
      title: 'Personal TikTok Brand',
      description: 'Grew following from 90 to 300+ and achieved a viral video with 19.9K views through relatable storytelling.',
      image: '/assets/personalaccountproof.jpeg',
      gridClass: 'item-2'
    },
    {
      id: 3,
      title: 'Promo Flyer Design',
      description: 'Engaging visual assets created to boost sales and brand awareness.',
      image: null,
      gridClass: 'item-3'
    },
    {
      id: 4,
      title: 'Departmental Communication',
      description: 'Shaping the brand voice for the Microbiology Dept, Veritas University.',
      image: '/assets/directorofsocial.jpeg',
      gridClass: 'item-4'
    }
  ];

  return (
    <section id="work" className="section" style={{ backgroundColor: 'var(--color-secondary-bg)' }}>
      <div className="container reveal" ref={sectionRef}>
        <h2 className="mb-md text-center">Selected<br/>Works.</h2>
        
        <div className="portfolio-gallery">
          {portfolioItems.map((item, index) => (
            <div className={`portfolio-item ${item.gridClass} delay-${(index % 3) + 1}`} key={item.id}>
              {item.image ? (
                <img src={item.image} alt={item.title} loading="lazy" />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#D9CBBF' }}>
                  <span style={{ color: 'var(--color-text)', opacity: 0.5, fontStyle: 'italic' }}>Image pending</span>
                </div>
              )}
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
