// Student.ts

// Định nghĩa lớp Student
class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    toString(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

// Mảng chứa tất cả học sinh
let allStudents: Student[] = [];

// Định nghĩa lớp Classroom
class Classroom {
    private students: Student[] = [];

    // In ra danh sách học sinh trong lớp
    showStudents(): void {
        console.log("Danh sách học sinh trong lớp:");
        if (this.students.length === 0) {
            console.log("  (Trống)");
        } else {
            this.students.forEach((s) => console.log("  " + s.toString()));
        }
    }

    // Thêm học sinh vào trong lớp
    addStudent(student: Student): void {
        this.students.push(student);
    }

    // Lọc học sinh theo id
    filterStudent(id: number): Student | undefined {
        return this.students.find((s) => s.getId() === id);
    }

    // Thêm học sinh từ allStudents vào lớp, đồng thời xóa khỏi allStudents
    addStudentInClass(id: number): void {
        const index = allStudents.findIndex((s) => s.getId() === id);
        if (index !== -1) {
            const student = allStudents[index];
            this.addStudent(student);
            allStudents.splice(index, 1); // xóa khỏi allStudents
        } else {
            console.log(`Không tìm thấy học sinh với id: ${id}`);
        }
    }
}

// ----------------- DEMO -----------------

// Tạo 6 thực thể học sinh
const s1 = new Student(1, "An");
const s2 = new Student(2, "Bình");
const s3 = new Student(3, "Chi");
const s4 = new Student(4, "Dũng");
const s5 = new Student(5, "Hà");
const s6 = new Student(6, "Lan");

// Đưa vào mảng allStudents
allStudents = [s1, s2, s3, s4, s5, s6];

// Tạo 2 lớp học
const classA = new Classroom();
const classB = new Classroom();

// Mỗi lớp nhận 3 học sinh
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);

// In danh sách học sinh trong 2 lớp
console.log("=== Lớp A ===");
classA.showStudents();

console.log("\n=== Lớp B ===");
classB.showStudents();

console.log("\n=== allStudents còn lại ===");
console.log(allStudents); // sẽ rỗng
