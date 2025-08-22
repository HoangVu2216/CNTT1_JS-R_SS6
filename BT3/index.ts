// Lớp trừu tượng
abstract class Shape {
    // Abstract method: không có phần thân
    abstract calculateArea(): number;

    // Method thường: có phần thân
    describe(): void {
        console.log("Đây là một hình học.");
    }
}

// Lớp con: bắt buộc phải override calculateArea()
class Circle extends Shape {
    constructor(public radius: number) { super(); }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) { super(); }

    calculateArea(): number {
        return this.width * this.height;
    }
}

// Sử dụng
const circle = new Circle(5);
const rect = new Rectangle(4, 6);

circle.describe(); // method thường
console.log("Diện tích hình tròn:", circle.calculateArea()); // abstract method implement
console.log("Diện tích hình chữ nhật:", rect.calculateArea());
