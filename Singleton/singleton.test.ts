import { Singleton } from "./singleton";

describe("Singleton module", () => {
  test("same instance form Singleton", () => {
    let instance1 = Singleton.Instance;
    let instance2 = Singleton.Instance;

    expect(instance1).toBe(instance2);
  });
});
