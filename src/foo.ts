export interface Foo {
  s: string;
  n: number;
}
export function logFoo(f: Foo) {
  console.log(f.s, f.n);
}