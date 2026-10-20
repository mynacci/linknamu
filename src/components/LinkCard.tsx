"use client";

import type { ReactNode } from "react";
import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  clickCount?: ReactNode;
};

function recordClick(linkId: string) {
  const body = JSON.stringify({ linkId });
  // 새 탭으로 이동하는 중에도 요청이 끊기지 않도록 sendBeacon을 우선 사용한다.
  if (navigator.sendBeacon?.("/api/clicks", new Blob([body], { type: "application/json" }))) {
    return;
  }
  fetch("/api/clicks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}

export default function LinkCard({ link, clickCount }: Props) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => recordClick(link.id)}
      className="flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl border border-white/70 bg-white/70 px-6 py-4 font-medium shadow-[0_2px_12px_-4px_rgba(120,70,30,0.15)] backdrop-blur-sm transition duration-200 hover:-translate-y-px hover:bg-white hover:shadow-[0_6px_20px_-6px_rgba(120,70,30,0.25)] active:translate-y-0 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      <span className="flex-1 text-center">{link.title}</span>
      {clickCount}
    </a>
  );
}
