export default function ClickCountView({ count }: { count: number }) {
  return (
    <span className="shrink-0 text-xs text-stone-400 tabular-nums" aria-label={`클릭 ${count}회`}>
      {count.toLocaleString()}회
    </span>
  );
}
