/** Return a greeting with a sensible default for missing names. */
export function greeting(name = '') {
  const normalized = String(name).trim();
  return `Hello, ${normalized || 'world'}!`;
}
