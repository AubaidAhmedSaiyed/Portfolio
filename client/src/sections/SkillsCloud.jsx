import { skillGroups } from '../data/skills';
import { siteMeta } from '../data/siteData';

export default function SkillsCloud() {
  return (
    <section id="skills" className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#FFFFFF] text-[#0F172A] p-8 md:p-16 shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-white/50">
      
      {/* Soft Cloud Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#BAE6FD]/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E0E7FF]/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="font-mono text-[11px] tracking-widest uppercase text-[#0369A1] mb-4">
              02 — Core Capabilities
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A]">
              Tools & Technologies.
            </h2>
          </div>
          
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white max-w-sm">
            <div className="font-mono text-[10px] tracking-widest uppercase text-[#0EA5E9] mb-3">Currently Exploring</div>
            <div className="flex flex-wrap gap-2">
              {siteMeta.exploring.map(item => (
                <span key={item} className="bg-white text-[#0F172A] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm border border-[#E0F2FE]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillGroups.map((group, i) => (
            <div key={i} className="bg-white/50 backdrop-blur-xl border border-white rounded-[1.5rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:bg-white/80 transition-colors">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#0284C7] mb-6 border-b border-[#0EA5E9]/10 pb-4">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map(item => (
                  <li key={item} className="font-display text-sm font-semibold text-[#1E293B]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
