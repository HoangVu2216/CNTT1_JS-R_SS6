interface ChangeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor() {
        this.speed = 0;
    }

    speedUp(): void {
        this.speed += 10;
        console.log(`Tốc độ tăng lên: ${this.speed} km/h`);
    }

    slowDown(): void {
        if (this.speed > 0) {
            this.speed -= 10;
            if (this.speed < 0) this.speed = 0;
        }
        console.log(`Tốc độ giảm xuống: ${this.speed} km/h`);
    }

    stop(): void {
        this.speed = 0;
        console.log("Phương tiện đã dừng. Tốc độ: 0 km/h");
    }
}

// Demo
const car = new Vehicle();
car.speedUp();  // 10
car.speedUp();  // 20
car.slowDown(); // 10
car.stop();     // 0
