import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";

export const validator = withZod(z.object({
    plotStatusId: z.string().min(1,"Plot Status is required"),
    id: z.string(),
    approverId: z.string().min(1,"Approver is required"),

}));
