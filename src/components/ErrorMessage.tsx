import { ErrorMessage as Message } from "@hookform/error-message";
import { FieldErrors } from "react-hook-form";

interface Props {
  errors: FieldErrors;
  name: string;
}
const ErrorMessage = ({ errors, name }: Props) => {
  return (
    <Message
      errors={errors}
      name={name}
      render={({ message }) => <p className="text-red-400">{message}</p>}
    />
  );
};

export default ErrorMessage;
