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

student1.addGrade(90);
student1.addGrade(100);
student1.addGrade(87);
student1.addAttendance(true);
student1.addAttendance(true);
student1.addAttendance(false);
student1.addAttendance(true);
student1.changeCourse('History');

console.log(student1.getAverageGrade());
console.log(student1.getAverageAttendance());
console.log(student1.getLecturesAttended());
console.log(student1.getStudentInfo());


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

    // this.courses = courses || []; // Масив для зберігання курсів

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


/*
Створити конструктор Група, яка має список студентів і методи для додавання, видалення студентів,
а також одержання рейтингу студентів за відвідуваністю і успішністю.
*/

function Group() {
    this.students = [];

    // Додати студента до групи
    this.addStudent = function(student) {
        this.students.push(student);
    };

    // Видалити студента з групи
    this.removeStudent = function(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    };

    // Отримати рейтинг студентів за відвідуваність та успішність
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