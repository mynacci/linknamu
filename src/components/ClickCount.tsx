import { connection } from "next/server";
import ClickCountView from "@/components/ClickCountView";
import { getClickCounts } from "@/lib/clicks";

export default async function ClickCount({ linkId }: { linkId: string }) {
  // 클릭 수는 요청 시점의 값을 보여 줘야 하므로 프리렌더링에서 제외한다.
  await connection();
  const counts = await getClickCounts();
  return <ClickCountView count={counts[linkId] ?? 0} />;
}
