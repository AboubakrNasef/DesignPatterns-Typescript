import { Singleton } from "./singleton";

test("same instance from Singleton", () => {
  let instance1 = Singleton.Instance;
  let instance2 = Singleton.Instance;

  expect(instance1).toBe(instance2);
});
