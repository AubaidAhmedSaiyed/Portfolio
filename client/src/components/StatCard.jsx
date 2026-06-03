import SpotlightCard from './SpotlightCard';

const StatCard = ({ value, label }) => (
  <SpotlightCard className="rounded-xl border border-white/[0.06] bg-matte-elevated p-4">
    <p className="text-xl font-medium tracking-tight text-zinc-100">{value}</p>
    <p className="mt-1 text-[11px] text-zinc-500">{label}</p>
  </SpotlightCard>
);

export default StatCard;
