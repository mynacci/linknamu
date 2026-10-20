import { links, profile } from "@/data/profile";
import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-10 px-6 py-16 sm:py-24">
      <ProfileHeader profile={profile} />
      <LinkList links={links} />
      <footer className="mt-auto pt-8 text-xs tracking-wide text-stone-400">링크나무</footer>
    </main>
  );
}
