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
        className="h-32 w-32 rounded-full object-cover ring-4 ring-white shadow-md sm:h-40 sm:w-40 dark:ring-zinc-800"
      />
      <h1 className="mt-4 text-xl font-bold sm:text-2xl">{profile.name}</h1>
      <p className="mt-1 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">{profile.bio}</p>
    </header>
  );
}
