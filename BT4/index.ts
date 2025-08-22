// Interface Geometry
interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

// Class Circle implements Geometry
class Circle implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Class Rectangle implements Geometry
class Rectangle implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Test
const circle = new Circle(5);
console.log("=== Circle ===");
console.log("Area:", circle.calculateArea().toFixed(2));
console.log("Perimeter:", circle.calculatePerimeter().toFixed(2));

const rectangle = new Rectangle(4, 6);
console.log("\n=== Rectangle ===");
console.log("Area:", rectangle.calculateArea());
console.log("Perimeter:", rectangle.calculatePerimeter());
