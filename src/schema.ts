import { z } from "zod";
export const formSchema = z.object({
  id: z.string().optional(),
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." })
    .max(30, { message: "First name should not exceed 30 characters." }),
  middleName: z
    .string()
    .min(2, { message: "Middle name must be at least 2 characters." })
    .max(30, { message: "Middle name should not exceed 30 characters." }),
  lastName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." })
    .max(30, { message: "First name should not exceed 30 characters." }),
  rollNumber: z.number({
    invalid_type_error: "Roll Number is required",
  }),
  class: z.string().min(1, { message: "Class is required" }),
  division: z.enum(["A", "B", "C", "D"], {
    message: "Division is required",
  }),
  allergies: z.string(),
  rackNumber: z.number({ invalid_type_error: "Rack Number is required" }),
  busRouteNumber: z.number({
    invalid_type_error: "Bus Route Number is required",
  }),
});

export type StudentData = z.infer<typeof formSchema>;
