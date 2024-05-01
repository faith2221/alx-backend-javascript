// Teacher Interface
interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	location: string;
	yearsOfExperience?: number;
	[propName: string]: any;
};

//Directors Interface
interface Directors extends Teacher {
	numberOfReports: number;
}

//Create Teacher
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

//Create Director
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberofReports: 17,
};

console.log(teacher1);

//Writing Class
interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
  firstName: string;
  lastName: string;
}

class StudentClass implements StudentClassInterface {
	firstName: string,
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working':
	}

	displayName(): string {
		return this.firstName;
	}
}
