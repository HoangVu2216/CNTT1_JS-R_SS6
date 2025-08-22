abstract class Shape {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    abstract getSize(): void;
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    getSize(): void {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
}

// Demo
const rect = new Rectangle("Rectangle", 10, 20);
console.log("Name:", rect.getName());
rect.getSize();
