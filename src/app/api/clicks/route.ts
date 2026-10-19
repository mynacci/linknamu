import { links } from "@/data/profile";
import { incrementClick } from "@/lib/clicks";

const linkIds = new Set(links.map((link) => link.id));

export async function POST(request: Request) {
  let linkId: unknown;
  try {
    ({ linkId } = await request.json());
  } catch {
    return Response.json({ error: "잘못된 요청 본문" }, { status: 400 });
  }

  if (typeof linkId !== "string" || !linkIds.has(linkId)) {
    return Response.json({ error: "알 수 없는 링크" }, { status: 400 });
  }

  try {
    const recorded = await incrementClick(linkId);
    if (!recorded) {
      return Response.json({ error: "MONGODB_URI가 설정되지 않음" }, { status: 503 });
    }
    return Response.json({ ok: true });
  } catch (error) {
    console.error("클릭 수 기록 실패:", error);
    return Response.json({ error: "클릭 수 기록 실패" }, { status: 500 });
  }
}
