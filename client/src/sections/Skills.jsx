import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="pt-24 pb-12 border-b border-themeBorder relative overflow-hidden">
      
      {/* Thin Line Wave Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-20">
        <svg viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full min-w-[1200px]">
          <path d="M0 200 C 300 0, 600 400, 900 200 C 1200 0, 1440 200, 1440 200" stroke="#0F172A" strokeWidth="3" className="text-themeAccent" />
          <path d="M0 250 C 400 50, 800 450, 1440 250" stroke="#0F172A" strokeWidth="1.5" className="text-themeAccent" />
          <path d="M0 150 C 500 350, 1000 -50, 1440 150" stroke="#0F172A" strokeWidth="2" className="text-themeAccent" />
        </svg>
      </div>
      
      <div className="relative z-10 flex justify-between items-baseline mb-16">
        <span className="font-serif text-4xl md:text-5xl font-bold text-themeInk tracking-tight">Skills & Coursework</span>
        <span className="font-mono text-[11px] text-themeMuted">02</span>
      </div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map(group => (
          <div key={group.title} className="bg-themeSurface border border-themeBorder rounded-2xl p-8 shadow-sm">
            <h3 className="font-serif text-[22px] font-bold text-themeInk mb-6">{group.title}</h3>
            <ul className="space-y-4">
              {group.items.map(item => (
                <li key={item} className="flex items-center gap-3 font-sans text-[16px] font-semibold text-themeInk">
                  <span className="w-1.5 h-1.5 rounded-full bg-themeAccent"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
