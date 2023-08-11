import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Zapier",
  description: _package.description,
  installed: true,
  category: "automation",
  categories: ["automation"],
  logo: "icon.svg",
  publisher: "Takwim",
  slug: "zapier",
  title: "Zapier",
  type: "zapier_automation",
  url: "https://takwim.my",
  variant: "automation",
  email: "support@takwim.my",
  dirName: "zapier",
} as AppMeta;

export default metadata;
