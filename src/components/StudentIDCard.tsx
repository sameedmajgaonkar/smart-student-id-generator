import { useState } from "react";
import { Navigate, useParams } from "react-router";
import { get } from "../services/localStorageService";
import Card_1 from "./templates/Card_1";
import Card_2 from "./templates/Card_2";

const StudentIDCard = () => {
  const { id } = useParams();
  const [template, setTemplate] = useState(1);
  const student = get(id!);
  if (!student) return <Navigate to="/not-found" />;
  return (
    <>
      <div>
        <button onClick={() => setTemplate(1)}>Template 1</button>
        <button onClick={() => setTemplate(2)}>Template 2</button>
      </div>
      <div className="container">
        {template === 1 ? (
          <Card_1 student={student} />
        ) : (
          <Card_2 student={student} />
        )}
      </div>
    </>
  );
};

export default StudentIDCard;
