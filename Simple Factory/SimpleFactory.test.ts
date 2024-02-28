import {
  Circle,
  Point,
  Rectangle,
  Shape,
  SimpleShapesFactory,
  Triangle,
} from "./SimpleFactory";

it("Gets Circle with raduis 1", () => {
  const circle = SimpleShapesFactory.CreateShape(Shape.Circle);

  expect(circle).toBeInstanceOf(Circle);
  expect((<Circle>circle).radius).toBe(1);
  expect((<Circle>circle).Center.x).toBe(0);
  expect((<Circle>circle).Center.y).toBe(0);
});

it("Gets Rectangle with defaultValues", () => {
  const rectangle = SimpleShapesFactory.CreateShape(Shape.Rectangle);

  expect(rectangle).toBeInstanceOf(Rectangle);
  expect((<Rectangle>rectangle).x).toBe(0);
  expect((<Rectangle>rectangle).y).toBe(0);
  expect((<Rectangle>rectangle).width).toBe(10);
  expect((<Rectangle>rectangle).height).toBe(10);
  expect((<Rectangle>rectangle).Center.x).toBe(5);
  expect((<Rectangle>rectangle).Center.y).toBe(5);
});

it("Gets Triangle with defaultValues", () => {
  const triangle = SimpleShapesFactory.CreateShape(Shape.Triangle);

  expect(triangle).toBeInstanceOf(Triangle);
  expect((<Triangle>triangle).p1).toEqual(new Point(0, 0));
  expect((<Triangle>triangle).p2).toEqual(new Point(3, 3));
  expect((<Triangle>triangle).p3).toEqual(new Point(0, 3));
});
