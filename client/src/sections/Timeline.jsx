import SectionHeading from '../components/SectionHeading';
import TimelineYear from '../components/TimelineYear';
import SectionDivider from '../components/SectionDivider';
import { journeyTimeline } from '../data/timeline';

const Timeline = () => {
  return (
    <section id="journey" className="section-panel relative">
      <SectionDivider />
      <div className="layout-wide mt-8">
        <SectionHeading
          wide
          eyebrow="Journey"
          title="A calm timeline of learning and building."
          description="From Python fundamentals to production systems, open source, and product-focused engineering."
        />
        <div className="relative mt-4 w-full">
          <div
            className="pointer-events-none absolute left-[4.5rem] top-0 hidden h-full w-px lg:left-[11rem] lg:block"
            style={{
              background:
                'linear-gradient(180deg, rgba(26,61,47,0.35), rgba(26,61,47,0.05) 95%)',
            }}
            aria-hidden
          />
          <div className="w-full space-y-2">
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
