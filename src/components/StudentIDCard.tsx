import { useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import { get } from "../services/localStorageService";
import Card_1 from "./templates/Card_1";
import Card_2 from "./templates/Card_2";

const StudentIDCard = () => {
  const { id } = useParams();
  const [template, setTemplate] = useState(1);
  const student = get(id!);

  if (!student) return <Navigate to="/not-found" />;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Student ID Card Generator
          </h1>
          <p className="text-lg text-gray-600">
            Choose a template and download your student ID card
          </p>
        </div>

        {/* Template Selection */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Select Template Style
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setTemplate(1)}
              className={`flex flex-col items-center p-4 border-2 rounded-lg transition ${
                template === 1
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              <div className="bg-blue-100 rounded-full p-3 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  />
                </svg>
              </div>
              <span className="font-medium">Professional Template</span>
              <span className="text-sm text-gray-500 mt-1">
                Clean and modern design
              </span>
            </button>

            <button
              onClick={() => setTemplate(2)}
              className={`flex flex-col items-center p-4 border-2 rounded-lg transition ${
                template === 2
                  ? "border-purple-500 bg-purple-50 text-purple-700"
                  : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
              }`}
            >
              <div className="bg-purple-100 rounded-full p-3 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <span className="font-medium">Premium Template</span>
              <span className="text-sm text-gray-500 mt-1">
                Elegant gradient design
              </span>
            </button>
          </div>
        </div>

        {/* Card Preview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Card Preview
          </h2>
          <div className="flex justify-center">
            {template === 1 ? (
              <Card_1 student={student} />
            ) : (
              <Card_2 student={student} />
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Students
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentIDCard;
