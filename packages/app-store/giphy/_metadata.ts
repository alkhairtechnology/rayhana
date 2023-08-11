import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Giphy",
  description: _package.description,
  installed: true,
  categories: ["other"],
  logo: "icon.svg",
  publisher: "Takwim",
  slug: "giphy",
  title: "Giphy",
  type: "giphy_other",
  url: "https://takwim.my",
  variant: "other",
  extendsFeature: "EventType",
  email: "Support@takwim.my",
  dirName: "giphy",
} as AppMeta;

export default metadata;
