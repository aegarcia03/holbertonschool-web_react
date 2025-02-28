// Task 5
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;   
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;   
}

class Director implements DirectorInterface {

    workFromHome(): string {
        return `Working from home`;
    }
    getCoffeeBreak(): string {
        return `Getting a coffee break`;
    }
    workDirectorTasks(): string {
        return `Getting to director tasks`
    }
}


class Teacher implements TeacherInterface {

    workFromHome(): string {
        return `Working from home`;
    }
    getCoffeeBreak(): string {
        return `Getting a coffee break`;
    }
    workTeacherTasks(): string {
        return `Getting to director tasks`
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if(typeof salary === 'number' && salary < 500) {
    return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Task 6 

function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

// Task 7 
// Define the string literal type
type Subjects = "Math" | "History";

// Define the teachClass function
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else {
        return "Teaching History";
    }
}

console.log(teachClass("Math"));
console.log(teachClass("History"));