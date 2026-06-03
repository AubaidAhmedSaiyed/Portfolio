import { forwardRef, useRef } from 'react';

const SpotlightCard = forwardRef(({ children, className = '', as: Tag = 'div', ...props }, forwardedRef) => {
  const innerRef = useRef(null);
  const ref = forwardedRef || innerRef;

  const handleMove = (e) => {
    const el = ref?.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  return (
    <Tag ref={ref} onMouseMove={handleMove} className={`spotlight-card ${className}`} {...props}>
      {children}
    </Tag>
  );
});

SpotlightCard.displayName = 'SpotlightCard';

export default SpotlightCard;
