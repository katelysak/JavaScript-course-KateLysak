/* Вам необхідно створити конструктор Студента, у якого мають бути властивості: ім'я,
прізвище, рік народження, оцінки, відвідуваність, курс. Кількість оцінок і відвіданих занять
залежить від курсу, на якому займається студент. Так само у Студента є методи: додати оцінку,
додати відвідування, отримати середню успішність, отримати середнє відвідування,
отримати кількість пройдених занять, змінити курс (мають оновитися дані про курс),
а також отримати всю інформацію про студента.
*/

function Student(firstName, lastName, birthYear, course) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = [];
    this.course = course;

    this.addGrade = function(grade) {
        this.grades.push(grade)
    }

    this.addAttendance = function(isPresent) {
        this.attendance.push(isPresent);
    };

    this.getAverageGrade = function() {
        if (this.grades.length === 0) return 0;
        const total = this.grades.reduce((acc, grade) => acc + grade, 0);
        const average = total / this.grades.length;
        const roundedGradeResult = parseFloat(average.toFixed(2));
        return roundedGradeResult;
    };

    this.getAverageAttendance = function() {
        if (this.attendance.length === 0) return 0;

        const presentCount = this.attendance.filter(isPresent => isPresent).length;
        const presentResult = (presentCount / this.attendance.length) * 100
        return presentResult;
    };

    this.getLecturesAttended = function() {
        return this.attendance.length;
    };

    this.changeCourse = function(newCourse) {
        this.course = newCourse;
    };

    this.getStudentInfo = function() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthYear: this.birthYear,
            course: this.course,
            grades: this.grades,
            attendance: this.attendance
        };
    };
}

const student1 = new Student('Kate', 'Lysak', 1998, 'Math');
const student2 = new Student('Anna', 'Smith', 1967, 'Wrighting');
const student4 = new Student('Piter', 'Piterson', 1976, 'Math');

student1.addGrade(90);
student1.addGrade(100);
student1.addGrade(87);
student1.addAttendance(true);
student1.addAttendance(true);
student1.addAttendance(false);
student1.addAttendance(true);
student1.changeCourse('History');

student2.addGrade(91);
student2.addAttendance(true);

console.log(student1.getAverageGrade());
console.log(student1.getAverageAttendance());
console.log(student1.getLecturesAttended());
console.log(student1.getStudentInfo());

console.log(student1);
console.log(student2);


/*
Додати Студенту можливість навчатися на кількох курсах з можливістю додавання і видалення курсу.
*/

function StudentV2(firstName, lastName, birthYear, courses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = [];
    this.courses = [];

    this.addGrade = function(grade) {
        this.grades.push(grade);
    };

    this.addAttendance = function(isPresent) {
        this.attendance.push(isPresent);
    };

    this.addCourse = function(course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
        }
    };

    this.removeCourse = function(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    };
}

const student3 = new StudentV2('Mike', 'Miller', 1987);

student3.addGrade(87);
student3.addGrade(91);
student3.addCourse('Art');
student3.addCourse('Singing');
student3.addAttendance(false);
student3.addAttendance(true);
student3.removeCourse('Art');
student3.removeCourse('Acting');    // this is egnored as we don't have this course

console.log(student3);

/*
Створити конструктор Група, яка має список студентів і методи для додавання, видалення студентів,
а також одержання рейтингу студентів за відвідуваністю і успішністю.
*/

function Group() {
    this.students = [];

    this.addStudent = function(student) {
        this.students.push(student);
    };

    this.removeStudent = function(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    };

    this.getStudentsRating = function() {
        return this.students.map(function(student) {
            return {
                firstName: student.firstName,
                lastName: student.lastName,
                attendance: student.getAverageAttendance(),
                averageGrade: student.getAverageGrade()
            };
        });
    };
}

const myGroup = new Group();

myGroup.addStudent(student4);
myGroup.addStudent(student1);
myGroup.addStudent(student2);
myGroup.removeStudent(student4);

console.log(myGroup.getStudentsRating());

console.log(myGroup);