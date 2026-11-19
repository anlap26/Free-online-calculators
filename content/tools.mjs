import { financeTools } from "./clusters/finance.mjs";
import { securityTools } from "./clusters/security.mjs";
import { relocationTools } from "./clusters/relocation.mjs";
import { webmasterTools } from "./clusters/webmaster.mjs";

export const tools = [
  ...financeTools,
  ...securityTools,
  ...relocationTools,
  ...webmasterTools
];
