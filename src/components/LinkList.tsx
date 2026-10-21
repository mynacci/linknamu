import { Suspense } from "react";
import type { LinkItem } from "@/data/profile";
import ClickCount from "@/components/ClickCount";
import ClickCountView from "@/components/ClickCountView";
import LinkCard from "@/components/LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <ul className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            clickCount={
              <Suspense fallback={<ClickCountView count={0} />}>
                <ClickCount linkId={link.id} />
              </Suspense>
            }
          />
        </li>
      ))}
    </ul>
  );
}
