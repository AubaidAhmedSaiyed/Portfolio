import { siteMeta } from '../data/siteData';

export default function JourneyContact() {
  return (
    <>
      <div className="big">
        <span className="mono">Initiate</span>
        <h1 style={{ marginBottom: '24px' }}>Let's build <br className="hidden md:block"/><span className="g">something real.</span></h1>
        
        <a href={siteMeta.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
          GitHub ↗
        </a>
        <a href={siteMeta.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2">
          LinkedIn ↗
        </a>
        <a href={`mailto:${siteMeta.email}`} className="flex items-center gap-2">
          Email ↗
        </a>
      </div>
      <div>
        {/* RIGHT SIDE CAN HAVE THE VISUAL FLOW (API CONNECTION) IF DESIRED */}
        <div className="demo">
          <div className="dh">
             <div className="dots"><b></b><b></b><b></b></div>
             <span className="mono">POST /api/connect HTTP/2.0</span>
             <span className="badge">network</span>
          </div>
          <div className="db">
            <div className="flow">
               <div className="node"><span className="mono">Client</span><b>Connection</b></div>
               <div className="wire"></div>
               <div className="node core"><span className="mono">Server</span><b>Acknowledged</b></div>
               <div className="wire"></div>
               <div className="node"><span className="mono">Status</span><b>200 OK</b></div>
            </div>
            <div className="log mt-6">
               <div><span className="a">ALLOW</span><span>connect → new opportunity</span></div>
               <div><span className="a">ALLOW</span><span>dispatch → message</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
