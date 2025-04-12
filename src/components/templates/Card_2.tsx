import download from "downloadjs";
import { toPng } from "html-to-image";
import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";
import { Student } from "../../schema";

const Card_2 = ({ student }: { student: Student }) => {
  const ref = useRef(null);

  const handleDownload = () => {
    if (ref.current === null) return;
    toPng(ref.current).then((dataUrl) =>
      download(dataUrl, "premium_student_id.png")
    );
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      {/* ID Card */}
      <div
        ref={ref}
        className="w-full max-w-2xl bg-gradient-to-br from-indigo-900 to-purple-800 rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Header with school logo/name */}
        <div className="relative">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 p-6 text-center">
            <h2 className="text-white font-bold text-3xl tracking-wider">
              ACADEMY OF EXCELLENCE
            </h2>
            <div className="h-1 w-32 bg-yellow-400 mx-auto my-2"></div>
            <p className="text-yellow-200 uppercase tracking-widest text-sm font-medium">
              Student Identification
            </p>
          </div>
        </div>

        {/* Content area with curved top */}
        <div className="bg-white pt-16 pb-8 px-8 relative rounded-t-3xl mt-4">
          {/* Profile Image - Overlapping the curved edge */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="p-1 bg-white rounded-full">
              <div className="rounded-full overflow-hidden border-4 border-yellow-400 h-24 w-24 shadow-lg">
                <img
                  src={student.profilePic}
                  alt="Student"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Student Name */}
          <div className="text-center mb-6">
            <h3 className="font-bold text-2xl text-gray-800">
              {`${student.firstName} ${student.middleName || ""} ${
                student.lastName
              }`}
            </h3>
            <div className="inline-flex items-center justify-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mt-2">
              Student ID: {student.rollNumber}
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex items-center">
              <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Class</p>
                <p className="font-semibold text-gray-800">{student.class}</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-red-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Allergies</p>
                <p className="font-semibold text-red-600">
                  {student.allergies || "None"}
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Rack Number</p>
                <p className="font-semibold text-gray-800">
                  {student.rackNumber}
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Bus Route</p>
                <p className="font-semibold text-gray-800">
                  {student.busRouteNumber}
                </p>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center justify-center mt-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-3 rounded-xl shadow-md">
              <QRCodeSVG
                value={JSON.stringify(student)}
                size={100}
                bgColor={"#FFFFFF"}
                fgColor={"#312E81"}
                level={"H"}
                includeMargin={false}
              />
            </div>
            <p className="text-xs text-center mt-2 text-gray-500">
              Scan for complete student details
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 text-white text-center text-sm">
          <p>Valid for Academic Year 2024-2025</p>
          <p className="text-yellow-200 text-xs mt-1">
            If found, please return to Academy of Excellence
          </p>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center transition duration-300 transform hover:scale-105"
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
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download Premium ID Card
      </button>
    </div>
  );
};

export default Card_2;
