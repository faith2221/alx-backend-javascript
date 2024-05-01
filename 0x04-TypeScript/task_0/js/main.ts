// Define the student Interface
interface Student {
  firstName: string,
  lastName: string,
  age: Number,
  location: string
}

//Create two student objects
const student1: Student = {
        firstName: "Edith",
	lastName: "Banda",
	age: 50,
	location: "Lilongwe"
}

const student2: Student = {
        firstName: "Augastine",
        lastName: "Lujaja",
        age: 55,
        location: "Kumasi"
}

//Create an array of students
const studentsList = [student1, student2];

const table = document.getElementById('studentTable') as HTMLTabkeElement;

//Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
