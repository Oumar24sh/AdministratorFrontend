import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";
import dayjs, {Dayjs} from "dayjs";

export const validator = withZod(
  z.object({
    yearStart: z.any(),
    yearEnd: z.any(),
    expenses: z.array(
      z.object({
        expenseId: z.string().min(1, "Expense is required"),
        rate: z.string().min(1, "Rate is required"),
      })
    ),
  })
);
