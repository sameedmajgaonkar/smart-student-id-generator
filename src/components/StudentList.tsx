import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { Student } from "../schema";
import { getAll } from "../services/localStorageService";
import ErrorMessage from "./ErrorMessage";

const StudentList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [students, setStudents] = useState<Student[]>();
  useEffect(() => {
    setStudents(getAll());
  }, []);

  if (!students)
    return (
      <p className="text-center py-10 text-gray-500">
        No students in the database
      </p>
    );

  const classes = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

  const doSubmit = (data: any) => {
    const filteredStudents = getAll().filter(
      (student) =>
        student.rollNumber === Number(data.rollNumber) &&
        student.class === data.class
    );
    setStudents(filteredStudents);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Student Directory
      </h2>

      <form
        className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm"
        onSubmit={handleSubmit(doSubmit)}
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Search Students
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label
              htmlFor="rollNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Roll Number
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="number"
              {...register("rollNumber", { valueAsNumber: true })}
              placeholder="Enter roll number"
            />
            <ErrorMessage errors={errors} name="rollNumber" />
          </div>
          <div className="form-group">
            <label
              htmlFor="class"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Class
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              {...register("class")}
            >
              <option value="" selected hidden>
                Select class
              </option>
              {classes.map((c, index) => (
                <option value={c} key={index}>
                  Class {c}
                </option>
              ))}
            </select>
            <ErrorMessage errors={errors} name="class" />
          </div>
        </div>
        <div className="mt-4">
          <button
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Student List
        </h3>
        {students.length === 0 ? (
          <p className="text-center py-6 text-gray-500">
            No matching students found
          </p>
        ) : (
          <ul className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
            {students.map((student) => (
              <li
                key={student.id}
                className="p-4 hover:bg-gray-50 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium text-gray-800">
                    {`${student.firstName} ${student.middleName} ${student.lastName}`}
                  </p>
                  <p className="text-sm text-gray-500">
                    Roll No: {student.rollNumber} | Class: {student.class}
                  </p>
                </div>
                <div>
                  <Link
                    to={student.id}
                    className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StudentList;
