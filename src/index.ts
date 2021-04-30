export const helloTo = (name?: string): string =>
  name ? `Hello ${name}` : 'Hello worl';

console.log(helloTo('Ramil'));
