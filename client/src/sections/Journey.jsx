const journeyItems = [
  {
    year: '2025',
    title: '1st Place, GCET Hackathon',
    desc: 'Led a team to design a scalable solution for civic complaint reporting and municipal transparency.'
  },
  {
    year: '2025',
    title: 'Hacktoberfest Contributor',
    desc: 'Debugged async state issues in React, improved UI responsiveness, built data-extraction scripts.'
  },
  {
    year: '2026',
    title: 'Social Summer of Code',
    desc: 'Built a file ingestion system and an OCR → Vision → Tagging → Indexing worker pipeline in TypeScript.'
  },
  {
    year: '2025–Now',
    title: 'Personal & Academic Projects',
    desc: 'RESTful APIs, role-based auth, and Python ML services integrated into Node.js backends.'
  }
];

const Journey = () => {
  return (
    <section id="journey">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-title">Journey</span>
          <span className="sec-count">04</span>
        </div>
        
        {journeyItems.map((item, i) => (
          <div className="journey-row" key={i}>
            <div className="j-year">{item.year}</div>
            <div>
              <div className="j-title">{item.title}</div>
              <div className="j-desc">{item.desc}</div>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Journey;
