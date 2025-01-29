namespace Subjects {
    export class Subject {
        // Attribute to store a teacher (type: Teacher interface)
        teacher: Teacher;

        // Setter method to update the teacher attribute
        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}
