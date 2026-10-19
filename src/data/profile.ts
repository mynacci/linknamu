export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile: Profile = {
  name: "마이낫치",
  bio: "우주 최강 바이브코더",
  imageUrl: "/profile.svg",
};

// 링크 id는 클릭 수 집계 키로 사용되므로 한 번 정하면 바꾸지 않는다.
export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com" },
  { id: "blog", title: "Blog", url: "https://velog.io" },
];
