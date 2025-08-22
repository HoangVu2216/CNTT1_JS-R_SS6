// Job.ts

// Định nghĩa lớp abstract Job
abstract class Job {
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }

    // In ra loại công việc
    printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }

    // Phương thức abstract để tính lương
    abstract calculateSalary(): number;
}

// Lớp FulltimeJob kế thừa Job
class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }

    calculateSalary(): number {
        return 10_000_000; // lương fulltime mặc định
    }
}

// Lớp ParttimeJob kế thừa Job
class ParttimeJob extends Job {
    private workingHour: number;

    constructor(workingHour: number) {
        super("Parttime");
        this.workingHour = workingHour;
    }

    calculateSalary(): number {
        return this.workingHour * 30_000;
    }
}

// --- Test ---
const fulltime = new FulltimeJob();
const parttime = new ParttimeJob(120);

fulltime.printType();
console.log(`Lương: ${fulltime.calculateSalary().toLocaleString()} VND`);

parttime.printType();
console.log(`Lương: ${parttime.calculateSalary().toLocaleString()} VND`);
