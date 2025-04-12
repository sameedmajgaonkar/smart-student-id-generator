import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "./ErrorMessage";
import { formSchema, Student as StudentData } from "../schema";
import { create } from "../services/localStorageService";
import { useNavigate } from "react-router";
import { v4 } from "uuid";
import axios from "axios";

const StudentForm = () => {
  const allergies = [
    // Food Allergies
    "Peanuts",
    "Tree nuts (almonds, walnuts, cashews, etc.)",
    "Milk",
    "Eggs",
    "Fish",
    "Shellfish",
    "Soy",
    "Wheat",
    "Gluten",
    "Sesame",
    "Mustard",
    "Celery",
    "Lupin",
    "Sulfites",
    "Corn",
    "Berries",
    "Citrus fruits",
    "Chocolate",
    "Garlic",
    "Onions",
    "Meat (beef, pork, chicken)",
    "Rice",
    "Oats",
    "Honey",
    "Food additives/preservatives",
    "Food colorings",
    "MSG (Monosodium glutamate)",
    "Aspartame",

    // Environmental Allergies
    "Pollen",
    "Grass",
    "Ragweed",
    "Trees",
    "Mold",
    "Dust mites",
    "Pet dander (cats)",
    "Pet dander (dogs)",
    "Pet dander (other animals)",
    "Feathers",
    "Insect stings/bites",
    "Latex",
    "Wool",
    "Cotton",
    "Formaldehyde",
    "Perfumes/fragrances",
    "Smoke",
    "Cigarette smoke",

    // Medication Allergies
    "Penicillin",
    "Antibiotics",
    "Aspirin",
    "NSAIDs (ibuprofen, naproxen)",
    "Sulfa drugs",
    "Local anesthetics",
    "Chemotherapy drugs",
    "Vaccines",
    "Insulin",
    "Anticonvulsants",

    // Chemical Allergies
    "Nickel",
    "Chromium",
    "Cobalt",
    "Preservatives",
    "Household cleaners",
    "Pesticides",
    "Paints/solvents",
    "Detergents",
    "Hair dye",
    "Cosmetics",
  ];
  const classes = [
    "I", // Class 1
    "II", // Class 2
    "III", // Class 3
    "IV", // Class 4
    "V", // Class 5
    "VI", // Class 6
    "VII", // Class 7
    "VIII", // Class 8
    "IX", // Class 9
    "X", // Class 10
  ];

  const divisions = ["A", "B", "C", "D"];

  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<StudentData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: v4(),
      profilePic: "",
      // firstName: "",
      // middleName: "",
      // lastName: "",
      // allergies: "",
      // busRouteNumber: 0,
      // division: "A",
      // class: "",
      // rackNumber: 0,
      // rollNumber: 0,
    },
  });
  const CLOUD_NAME = "duws98pmu";
  const UPLOAD_PRESET = "nextupload";

  const doSubmit = async (studentData: StudentData) => {
    if (!isValid) return;
    console.log(studentData);
    const formData = new FormData();
    formData.append("file", studentData.profilePic[0]);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("cloud_name", CLOUD_NAME);
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData
    );
    studentData.profilePic = response.data.secure_url;
    const student = create(studentData);
    navigate(`/${student.id}`);
  };

  return (
    <form
      className="border-2  border-gray-950 rounded-xl p-10 md:w-1/2 grid gap-4"
      onSubmit={handleSubmit(doSubmit)}
    >
      <h3 className="text-center font-bold text-4xl">Student ID Card Form</h3>
      <div className="form-group">
        <label htmlFor="profilePic">Upload Profile Picture</label>
        <input
          className="form-control"
          type="file"
          {...register("profilePic")}
        />
        <ErrorMessage errors={errors} name="profilePic" />
      </div>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          className="form-control"
          type="text"
          {...register("firstName")}
          placeholder="First Name"
        />
        <ErrorMessage errors={errors} name="firstName" />
      </div>
      <div className="form-group">
        <label htmlFor="middleName">Middle Name</label>
        <input
          className="form-control"
          type="text"
          {...register("middleName")}
          placeholder="Middle Name"
        />
        <ErrorMessage errors={errors} name="middleName" />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          className="form-control"
          type="text"
          {...register("lastName")}
          placeholder="Last Name"
        />
        <ErrorMessage errors={errors} name="lastName" />
      </div>
      <div className="form-group">
        <label htmlFor="rollNumber">Roll Number</label>
        <input
          className="form-control"
          type="number"
          {...register("rollNumber", { valueAsNumber: true })}
          placeholder="Roll Number"
        />
        <ErrorMessage errors={errors} name="rollNumber" />
      </div>
      <div className="form-group">
        <label htmlFor="class">Class</label>
        <select className="form-control" {...register("class")}>
          <option value="" selected hidden>
            Class
          </option>
          {classes.map((c, index) => (
            <option value={c} key={index}>
              {" "}
              {c}
            </option>
          ))}
        </select>
        <ErrorMessage errors={errors} name="class" />
      </div>
      <div className="form-group">
        <label htmlFor="division">Division</label>
        <select className="form-control" {...register("division")}>
          <option value="" selected hidden>
            Division
          </option>
          {divisions.map((division) => (
            <option value={division} key={division}>
              {division}
            </option>
          ))}
        </select>
        <ErrorMessage errors={errors} name="division" />
      </div>
      <div className="form-group">
        <label htmlFor="allergies">Allergies</label>
        <select className="form-control" {...register("allergies")}>
          <option value="" selected hidden>
            Any allergies?
          </option>
          <option value="None">None</option>
          {allergies.map((allergy) => (
            <option value={allergy} key={allergy}>
              {allergy}
            </option>
          ))}
        </select>
        <ErrorMessage errors={errors} name="allergies" />
      </div>
      <div className="form-group">
        <label htmlFor="rackNumber">Rack Number</label>
        <input
          className="form-control"
          type="number"
          {...register("rackNumber", { valueAsNumber: true })}
          placeholder="Rack Number"
        />
        <ErrorMessage errors={errors} name="rackNumber" />
      </div>
      <div className="form-group">
        <label htmlFor="busRouteNumer">Bus Route Number</label>
        <input
          className="form-control"
          type="number"
          {...register("busRouteNumber", { valueAsNumber: true })}
          placeholder="Bus Route Number"
        />
        <ErrorMessage errors={errors} name="busRouteNumber" />
      </div>
      <div className="form-group">
        <button className="py-3 rounded-md bg-green-400" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
