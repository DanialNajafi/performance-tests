import { classify } from "./spam.js";
import { assertAlmostEquals } from "@std/assert/almost-equals";

Deno.test("spam classification", () => {
  const message = `Dear best friend, I hope you are well!
    You might be interested in our new AI startup that puts Bitcoin in the Cloud.
    You certainly don't want to miss out your exclusive chance to buy our stock.
    This offer is ultra urgent, so be quick! It expires tomorrow, so act immediately!
    This once in a lifetime chance comes without any risk.
    Kind regards,
    Sleazy Phoney Baloney. PhD.
    PS: Buy Viagra now!`;
  assertAlmostEquals(classify(message), 0.18478260869565216);
});

Deno.bench("spam classification benchmark", () => {
  const message = `Dear best friend, I hope you are well!
    You might be interested in our new AI startup that puts Bitcoin in the Cloud.
    You certainly don't want to miss out your exclusive chance to buy our stock.
    This offer is ultra urgent, so be quick! It expires tomorrow, so act immediately!
    This once in a lifetime chance comes without any risk.
    Kind regards,
    Sleazy Phoney Baloney. PhD.
    PS: Buy Viagra now!`;
  classify(message);
});