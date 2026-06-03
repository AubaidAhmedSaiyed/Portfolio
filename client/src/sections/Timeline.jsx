import SectionHeading from '../components/SectionHeading';
import TimelineYear from '../components/TimelineYear';
import SectionDivider from '../components/SectionDivider';
import { journeyTimeline } from '../data/timeline';

const Timeline = () => {
  return (
    <section id="journey" className="section-panel">
      <SectionDivider />
      <div className="layout-wide">
        <SectionHeading
          eyebrow="Journey"
          title="How my path as a developer has unfolded."
          description="A chronological look at learning, building, and growing through real projects."
        />
        <div className="relative mt-2 w-full">
          <div
            className="pointer-events-none absolute left-[4.5rem] top-0 hidden h-full w-px lg:left-[10rem] lg:block"
            style={{
              background:
                'linear-gradient(180deg, rgba(61,111,212,0.35), rgba(255,255,255,0.04) 90%)',
            }}
            aria-hidden
          />
          <div className="w-full">
            {journeyTimeline.map((block, index) => (
              <TimelineYear
                key={block.year}
                block={block}
                index={index}
                isLast={index === journeyTimeline.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
