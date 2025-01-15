interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  const teacher3: Teacher = {
    firstName: 'Said',
    fullTimeEmployee: false,
    lastName: 'Baidoo',
    location: 'Mombasa',
    contract: false,
  };
  
  console.log(teacher3);

  const director1: Directors = {
    firstName: 'Said',
    lastName: 'Baidoo',
    location: 'Mombasa',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  console.log(printTeacher("Said", "Baidoo"));
  
  interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  const student1 = new StudentClass("Modi", "Irah");
  console.log(student1.displayName());
  console.log(student1.workOnHomework());

  