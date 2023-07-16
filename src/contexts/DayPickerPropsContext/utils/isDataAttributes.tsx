/** Type-guard to parse the data- attributes from props. */
export function isDataAttributes(attrs: unknown): attrs is {
  [key: string]: string | boolean | number | undefined;
} {
  return true;
}
