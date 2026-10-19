import { links, profile } from "@/data/profile";
import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-8 px-4 py-12 sm:py-16">
      <ProfileHeader profile={profile} />
      <LinkList links={links} />
      <footer className="mt-auto pt-8 text-xs text-zinc-400">링크나무</footer>
    </main>
  );
}
