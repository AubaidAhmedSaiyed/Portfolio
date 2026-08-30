import { siteMeta } from '../data/siteData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-title">
          Open to backend and AI internships — let's talk systems.
        </div>
        <a className="foot-email" href={`mailto:${siteMeta.email}`}>
          {siteMeta.email}
        </a>
        <div className="foot-row">
          <div className="foot-links">
            <a href={siteMeta.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={siteMeta.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={siteMeta.twitter} target="_blank" rel="noreferrer">X / Twitter</a>
            <a href={siteMeta.resume} target="_blank" rel="noreferrer">Résumé</a>
          </div>
          <div className="foot-note">
            {siteMeta.name}, {currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
