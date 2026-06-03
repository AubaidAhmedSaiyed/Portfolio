import SpotlightCard from './SpotlightCard';

const StatCard = ({ value, label }) => (
  <SpotlightCard className="rounded-xl border border-brand/15 bg-matte-elevated p-4 shadow-sm">
    <p className="text-xl font-bold tracking-tight text-brand-light">{value}</p>
    <p className="mt-1 text-[11px] text-zinc-500 font-medium uppercase tracking-wider">{label}</p>
  </SpotlightCard>
);

export default StatCard;
