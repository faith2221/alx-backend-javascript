/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />

export const cpp: Subject.Cpp = new Subjects.Cpp();
export const java: Subject.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
};

console.log("C++");
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("React");
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
