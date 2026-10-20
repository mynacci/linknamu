import { connection } from "next/server";
import { getClickCounts } from "@/lib/clicks";

export default async function ClickCount({ linkId }: { linkId: string }) {
  // 클릭 수는 요청 시점의 값을 보여 줘야 하므로 프리렌더링에서 제외한다.
  await connection();
  const counts = await getClickCounts();
  const count = counts[linkId] ?? 0;

  return (
    <span className="shrink-0 text-xs text-stone-400 tabular-nums" aria-label={`클릭 ${count}회`}>
      {count.toLocaleString()}
    </span>
  );
}
