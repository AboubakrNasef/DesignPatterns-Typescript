export enum Shape {
  Circle,
  Rectangle,
  Triangle,
}
export class Point {
  public constructor(public x: number, public y: number) {}
}
export interface IShape {
  Center: Point;
}

export class Circle implements IShape {
  Center: Point;
  public constructor(public radius: number, center: Point) {
    this.Center = center;
  }
}

export class Rectangle implements IShape {
  public Center: Point;
  public constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {
    this.Center = new Point(x + width / 2, y + height / 2);
  }
}
export class Triangle implements IShape {
  Center: Point;
  public constructor(public p1: Point, public p2: Point, public p3: Point) {
    const centerX = (p1.x + p2.x + p3.x) / 3;
    const centerY = (p1.y + p2.y + p3.y) / 3;
    this.Center = new Point(centerX, centerY);
  }
}

export class SimpleShapesFactory {
  public static CreateShape(type: Shape) {
    switch (type) {
      case Shape.Circle:
        return new Circle(1, new Point(0, 0));
      case Shape.Rectangle:
        return new Rectangle(0, 0, 10, 10);
      case Shape.Triangle:
        return new Triangle(new Point(0, 0), new Point(3, 3), new Point(0, 3));
    }
  }
}
