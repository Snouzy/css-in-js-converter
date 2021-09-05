export function removeMaj(input) {
  const withoutComma = input.replace(/,/g, ";");
  const withoutQuotes = withoutComma.replace(/["']/g, "");

  let result = "";

  for (let i = 0; i < withoutQuotes.length; i++) {
    const char = withoutQuotes.charAt(i);

    if (char === char.toUpperCase() && char.match(/[a-zA-Z]/i)) {
      result += `-${withoutQuotes.charAt(i).toLowerCase()}`
    } else {
      result += char;
    }
  }

  return result;
}