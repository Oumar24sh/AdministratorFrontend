import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";

export const validator = withZod(z.object({
    firstName: z.string().min(1,"First Name is required"),
    lastName: z.string().min(1,"Last Name is required"),
    userName: z.string().min(1,"UserName is required"),
    email: z.string().email().min(1,"Email is required"),
    roleId: z.string().min(1,"Role is required"),

}));
