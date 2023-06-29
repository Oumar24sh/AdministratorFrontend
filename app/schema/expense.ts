import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";

export const validator = withZod(z.object({
  expenseConfigName: z.string({
    required_error: "Reference is required",
    invalid_type_error: "Reference must be a string",
  }).min(1,"Reference is required"),
  expenses: z.array(z.object({ expenseId: z.string().min(1,"Expense is required"), rate: z.string().min(1,"Rate is required") }))
  //   .array(z.object({ expenseId: z.any(), rate: z.any() }))
  //   .min(1,"At least one expense is required"),
}));
