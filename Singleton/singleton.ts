export class Singleton {
  private static _default: Singleton;

  private constructor() {}

  public static get Instance(): Singleton {
    if (!this._default) {
      this._default = new Singleton();
    }
    return this._default;
  }
}
