import type { NavigationItem } from "~/types/navigation";

export const headerNavigationItems: NavigationItem[] = [
  {
    label: "Все аниме",
    to: "/",
  },
  {
    label: "Фильмы",
    to: "/movies",
  },
  {
    label: "TV-сериалы",
    to: "/tv-series",
  },
  {
    label: "OVA",
    to: "/ova",
  },
  {
    label: "ONA",
    to: "/ona",
  },
  {
    label: "ТОП-100",
    to: "/top-100",
  },
  {
    label: "Онгоинги",
    to: "/ongoing",
  },
  {
    label: "Анонсы",
    to: "/announcements",
  },
  {
    label: "Расписание",
    to: "/schedule",
  },
  {
    label: "Рандом",
    to: "/random",
  },
];
