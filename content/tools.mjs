import { financeTools } from "./clusters/finance.mjs";
import { securityTools } from "./clusters/security.mjs";
import { relocationTools } from "./clusters/relocation.mjs";
import { webmasterTools } from "./clusters/webmaster.mjs";
import { commonTools } from "./clusters/common.mjs";

const extra = {
  finance: [],
  fitness: [],
  math: [],
  other: [],
  security: [],
  relocation: [],
  webmaster: []
};
for (const tool of commonTools) extra[tool.cluster].push(tool);

export const tools = [
  ...financeTools,
  ...extra.finance,
  ...extra.fitness,
  ...extra.math,
  ...extra.other,
  ...securityTools,
  ...relocationTools,
  ...webmasterTools
];
