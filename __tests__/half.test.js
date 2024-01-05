// @ts-check

import { test, expect } from "@jest/globals";
import { getNumb } from "../src/index.js";

test("getNumb", () => {
  expect(getNumb(2, 2)).toBe(2);
});
