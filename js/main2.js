// @ts-check
/* eslint-disable */

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    // console.log(`${this.width * this.height}`);
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return (this.width * this.height) / 2;
    // console.log(`이것의 넓이는 ${this.width * this.height * 0.5} 입니다.`);
  }
}

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  getArea() {
    return 3.14 * this.radius ** 2;
    // console.log(`이것의 넓이는 ${this.radius * 3.14} 입니다.`);
  }
}

const shape = new Shape(5, 5);
const rectangle = new Rectangle(4, 4);
const triangle = new Triangle(4, 4);
const circle = new Circle(4, 4, 2);

console.log(
  shape.getArea(),
  rectangle.getArea(),
  triangle.getArea(),
  circle.getArea()
);
