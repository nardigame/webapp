export const helloTo = (name?: string): string =>
  name ? `Hello ${name}` : 'Hello world';

console.log(helloTo());
