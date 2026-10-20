import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.imageUrl}
        alt={`${profile.name} 프로필 사진`}
        width={160}
        height={160}
        priority
        className="h-32 w-32 rounded-full object-cover ring-4 ring-white/90 shadow-[0_12px_32px_-8px_rgba(120,70,30,0.35)] sm:h-40 sm:w-40 dark:ring-stone-700/80"
      />
      <h1 className="mt-6 text-xl font-semibold tracking-tight sm:text-2xl">{profile.name}</h1>
      <p className="mt-2 text-sm text-stone-600 sm:text-base dark:text-stone-400">{profile.bio}</p>
    </header>
  );
}
