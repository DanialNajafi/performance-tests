import { assertEquals } from "@std/assert";
import {
  letterFrequency,
  letterFrequencyMap,
  letterFrequencyShift,
} from "./main.ts";

const text = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
takimata sanctus est Lorem ipsum dolor sit amet.`;

Deno.test("letter frequency", () => {
  const text = "abc AB a";
  const actual = letterFrequency(text);
  assertEquals(actual.length, 3);
  assertEquals(actual[0].letter, "a");
  assertEquals(actual[0].count, 3);
  assertEquals(actual[1].letter, "b");
  assertEquals(actual[1].count, 2);
  assertEquals(actual[2].letter, "c");
  assertEquals(actual[2].count, 1);
});

Deno.test("letter frequency map", () => {
  const text = "abc AB a";
  const actual = letterFrequencyMap(text);
  assertEquals(actual.length, 3);
  assertEquals(actual[0].letter, "a");
  assertEquals(actual[0].count, 3);
  assertEquals(actual[1].letter, "b");
  assertEquals(actual[1].count, 2);
  assertEquals(actual[2].letter, "c");
  assertEquals(actual[2].count, 1);
});

Deno.test("letter frequency shift", () => {
  const text = "abc AB a";
  const actual = letterFrequencyShift(text);
  assertEquals(actual.length, 3);
  assertEquals(actual[0].letter, "a");
  assertEquals(actual[0].count, 3);
  assertEquals(actual[1].letter, "b");
  assertEquals(actual[1].count, 2);
  assertEquals(actual[2].letter, "c");
  assertEquals(actual[2].count, 1);
});

Deno.bench("letter frequency", () => {
  const actual = letterFrequency(text);
  assertEquals(actual.length, 21);
});

Deno.bench("letter frequency map", () => {
  const actual = letterFrequencyMap(text);
  assertEquals(actual.length, 21);
});

Deno.bench("letter frequency shift", () => {
  const actual = letterFrequencyShift(text);
  assertEquals(actual.length, 21);
});
