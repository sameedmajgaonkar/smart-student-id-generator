import { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toPng } from "html-to-image";
import download from "downloadjs";
import profile from "../../assets/profile.jpg";
import { Student } from "../../schema";

const Card = ({ student }: { student: Student }) => {
  const ref = useRef(null);

  const handleDownload = () => {
    if (ref.current === null) return;
    toPng(ref.current).then((dataUrl) => download(dataUrl, "student_id.png"));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* ID Card */}
      <div
        ref={ref}
        className="w-full max-w-2xl bg-white rounded-xl overflow-hidden shadow-lg"
      >
        {/* Header */}
        <div className="bg-blue-600 text-white p-4">
          <h2 className="text-center font-bold text-3xl">
            STUDENT IDENTITY CARD
          </h2>
          <p className="text-center text-blue-100">Academic Year 2024-2025</p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-3 gap-6 p-6">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="rounded-full overflow-hidden border-4 border-blue-500 h-40 w-40 shadow-md">
              <img
                src={student.profilePic}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Student Details */}
          <div className="col-span-1 space-y-2">
            <div className="border-b border-gray-300 pb-1">
              <span className="text-gray-500 text-sm">Name</span>
              <p className="font-semibold">
                {`${student.firstName} ${student.middleName || ""} ${
                  student.lastName
                }`}
              </p>
            </div>

            <div className="border-b border-gray-300 pb-1">
              <span className="text-gray-500 text-sm">Class</span>
              <p className="font-semibold">{student.class}</p>
            </div>

            <div className="border-b border-gray-300 pb-1">
              <span className="text-gray-500 text-sm">Roll Number</span>
              <p className="font-semibold">{student.rollNumber}</p>
            </div>

            <div className="border-b border-gray-300 pb-1">
              <span className="text-gray-500 text-sm">Allergies</span>
              <p className="font-medium text-red-600">
                {student.allergies || "None"}
              </p>
            </div>

            <div className="border-b border-gray-300 pb-1">
              <span className="text-gray-500 text-sm">Rack Number</span>
              <p className="font-semibold">{student.rackNumber}</p>
            </div>

            <div>
              <span className="text-gray-500 text-sm">Bus Route</span>
              <p className="font-semibold">{student.busRouteNumber}</p>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center justify-center">
            <div className="border-4 border-gray-200 p-2 rounded-lg bg-white">
              <QRCodeSVG
                value={JSON.stringify(student)}
                size={120}
                bgColor={"#FFFFFF"}
                fgColor={"#000000"}
                level={"H"}
                includeMargin={false}
              />
            </div>
            <p className="text-xs text-center mt-2 text-gray-500">
              Scan for student info
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">Valid till: April 2026</p>
          </div>
          <div>
            <p className="text-sm">ID: {student.rollNumber}</p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg flex items-center transition duration-300"
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
        Download ID Card
      </button>
    </div>
  );
};

export default Card;
