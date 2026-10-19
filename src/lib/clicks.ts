import { cache } from "react";
import { getClicksCollection } from "@/lib/mongodb";

// 한 요청 안에서 여러 카드가 호출해도 DB 조회는 한 번만 한다.
export const getClickCounts = cache(async (): Promise<Record<string, number>> => {
  try {
    const clicks = await getClicksCollection();
    if (!clicks) return {};
    const docs = await clicks.find().toArray();
    return Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return {};
  }
});

export async function incrementClick(linkId: string): Promise<boolean> {
  const clicks = await getClicksCollection();
  if (!clicks) return false;
  await clicks.updateOne({ _id: linkId }, { $inc: { count: 1 } }, { upsert: true });
  return true;
}
