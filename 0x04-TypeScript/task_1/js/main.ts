interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  const teacher3: Teacher = {
    firstName: 'Said',
    fullTimeEmployee: false,
    lastName: 'Baidoo',
    location: 'Mombasa',
    contract: false,
  };
  
  console.log(teacher3);

