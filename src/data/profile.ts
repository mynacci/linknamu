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
  name: "김나폴",
  bio: "개발자 | 검색엔진, RAG 합니다",
  imageUrl: "https://placehold.co/320x320/orange/white.png",
};

// 링크 id는 클릭 수 집계 키로 사용되므로 한 번 정하면 바꾸지 않는다.
export const links: LinkItem[] = [
  { id: "github", title: "깃허브", url: "https://github.com/mynacci" },
  { id: "homepage", title: "홈페이지", url: "https://naplez.net" },
  { id: "email", title: "이메일", url: "mailto:lovelyaiko@naplez.net" },
];
