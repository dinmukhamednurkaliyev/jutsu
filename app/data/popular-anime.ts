import type { Anime } from "~/types/anime";

export const popularAnime: Anime[] = [
  {
    id: 1,
    title: "Клинок, рассекающий демонов",
    image: "/images/anime/demon-slayer.webp",
    rating: 8.7,
    to: "/anime/demon-slayer",
  },
  {
    id: 2,
    title: "Магическая битва",
    image: "/images/anime/jujutsu-kaisen.webp",
    rating: 8.5,
    to: "/anime/jujutsu-kaisen",
  },
  {
    id: 3,
    title: "Повседневная жизнь бессмертного короля",
    image: "/images/anime/immortal-king.webp",
    rating: 8.2,
    to: "/anime/immortal-king",
  },
];
