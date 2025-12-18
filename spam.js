const spamWords = [
  "ai",
  "bitcoin",
  "bonus",
  "buy",
  "cash",
  "chance",
  "charges",
  "cloud",
  "confidential",
  "congratulations",
  "data-driven",
  "dollar",
  "expires",
  "exclusive",
  "fast",
  "fee",
  "friend",
  "gain",
  "hidden",
  "income",
  "immediately",
  "limited",
  "lottery",
  "marketing",
  "money",
  "now",
  "order",
  "password",
  "price",
  "quick",
  "risk",
  "ultra",
  "urgent",
  "viagra",
  "weight",
  "winner",
  "xxx",
  "zero",
];

export function classify(message) {
  const words = message.split(" ");
  const nWords = words.length;
  let suspiciousWords = 0;
  for (const w of words) {
    const pattern = new RegExp(/([a-z]+)/, "i");
    const lettersOnly = w.match(pattern);
    if (lettersOnly === null) {
      continue;
    }
    const match = lettersOnly[0];
    if (spamWords.includes(match.toLowerCase())) {
      suspiciousWords++;
    }
  }
  return suspiciousWords / nWords;
}
