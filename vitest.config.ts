/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import { config } from "@dotenvx/dotenvx";

config();

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
  },
});
