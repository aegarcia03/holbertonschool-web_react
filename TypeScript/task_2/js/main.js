var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Working from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to director tasks";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
// Task 6 
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
// Define the teachClass function
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else {
        return "Teaching History";
    }
}
console.log(teachClass("Math"));
console.log(teachClass("History"));
