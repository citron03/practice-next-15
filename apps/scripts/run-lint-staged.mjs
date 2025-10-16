#!/usr/bin/env node

import { $ } from "zx";

(async () => {
  try {
    await $`./node_modules/.bin/lint-staged`;
  } catch (error) {
    console.error("lint-staged failed:", error);
    process.exit(1);
  }
})();
