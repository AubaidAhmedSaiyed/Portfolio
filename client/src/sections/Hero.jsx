export default function Hero() {
  return (
    <>
      <div>
        <span className="mono">Full-stack developer · Web & AI</span>
        <h1>Some problems are <br/><span className="g">worth sitting with.</span></h1>
        <h2 style={{ fontSize: '28px', color: 'var(--mut)' }}>Understanding them is where building begins.</h2>
        <p className="lead mt-6">
          Full-stack developer focused on web engineering, backend infrastructure, and AI/ML — building systems that scale without losing their human purpose.
        </p>
      </div>
      
      <div className="pw s-frame" id="pw">
        <div className="pt" id="pt">
          <img src="/photo.jpg" alt="Aubaid Ahmed" className="object-cover w-full h-full filter saturate-[0.9] contrast-[1.05] sepia-[0.16]" />
        </div>
        <div className="tag a"><span className="dot"></span>Open to opportunities</div>
        <div className="tag b mono">React · Node</div>
        <div className="cap"><b>Aubaid Ahmed</b><span className="mono">Full-stack developer</span></div>
      </div>
    </>
  );
}
