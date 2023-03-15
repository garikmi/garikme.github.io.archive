import { assert, expect, test } from "vitest";
import { formatDate, substractDate, currentYear, countWords } from "./helpers";

test("formatDate(date)", () => {
  expect(formatDate(new Date("2022-08-29"))).toEqual("August 29, 2022");
  expect(formatDate(new Date("2022-09-19"))).toEqual("September 19, 2022");
  expect(formatDate(new Date("2021-01-02"))).toEqual("January 2, 2021");
  expect(formatDate(new Date("2023-03-14"))).toEqual("March 14, 2023");
});

test("substractDate(a, b)", () => {
  expect(substractDate(new Date("2022-01-01"), new Date("2023-01-01"))).toEqual(31536000000);
});

test("currentYear()", () => {
  expect(currentYear()).toEqual("2023");
});

test("countWords(val)", () => {
  expect(countWords("")).toEqual(0);
  expect(countWords(" ")).toEqual(0);
  expect(countWords("   ")).toEqual(0);
  expect(countWords("    ")).toEqual(0);
  expect(countWords("Hello, world!")).toEqual(2);
  expect(countWords("one1 two2")).toEqual(2);
  expect(countWords("yes and no")).toEqual(3);
  expect(countWords("1 2 3 4")).toEqual(4);
});
