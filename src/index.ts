export const helloTo = (name?: string) =>
  name ? `Hello ${name}` : 'Hello world';

console.log(helloTo());
