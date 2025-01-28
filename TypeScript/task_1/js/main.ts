interface Teacher {
    readonly firstName: string; // to ensure they cannot be modified after creation.
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsofExperience?: number; // Optional property
    location: string;
    [key: string]: any; // Index signature allows additional properties with string keys
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);

// Task 2

interface Director extends Teacher {
    numberOfReports: number;
}

const director1: Director = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  console.log(director1);

// Task 3

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string) {
    if (!firstName || !lastName) {
       console.error('Data not found') 
       return ""; //return an empty string 
    }
    return `${firstName[0].toUpperCase()}. ${lastName}`;
};

interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return `Currently working`;
    }
    displayName(): string {
        return `${this.firstName}`
    }
}
