import { Student } from "../schema";

const STUDENTS_STORAGE_KEY = "STUDENTS_STORAGE_KEY";

function getAll(): Student[] {
  return JSON.parse(localStorage.getItem(STUDENTS_STORAGE_KEY) || "[]");
}

function get(id: string) {
  const students = getAll();
  const student = students.find((student) => student.id === id);
  if (!student) throw new Error("Student with the given ID was not found");
  return student;
}

function create(student: Student) {
  const students = getAll();
  students.push(student);
  localStorage.setItem(STUDENTS_STORAGE_KEY, JSON.stringify(students));
  return student;
}

export { create, get, getAll };
