import { Student } from "../../schema";
import profile from "../../assets/profile.jpg";
import { QRCodeSVG } from "qrcode.react";
interface Props {
  student: Student;
}
const Card_2 = ({ student }: Props) => {
  return (
    <>
      <div className="w-1/2 bg-gray-300 grid gap-2 p-5">
        <h3 className="text-center font-bold text-4xl">Student ID Card 2</h3>
        <div className="grid grid-cols-3 gap-5">
          <div className="rounded-full overflow-hidden aspect-square border-8">
            <img
              src={profile}
              alt="Profile picture"
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-3">
            <p>
              Name:{" "}
              {`${student.firstName} ${student.middleName} ${student.lastName}`}
            </p>
            <p>Class: {student.class}</p>
            <p>Roll Number: {student.rollNumber}</p>
            <p>Allergies: {student.allergies}</p>
            <p>Rack Number: {student.rackNumber}</p>
            <p>Bus Route Number: {student.busRouteNumber}</p>
          </div>
          <div>
            <QRCodeSVG value={JSON.stringify(student)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card_2;
