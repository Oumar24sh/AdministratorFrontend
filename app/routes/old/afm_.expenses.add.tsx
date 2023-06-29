import React, { useState } from "react";
import FormPage from "~/components/PageWithBack";
import { json, LoaderFunction } from "@remix-run/server-runtime";
import { api } from "~/http";
import { useLoaderData } from "@remix-run/react";
import {
  Autocomplete,
  Button, FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { MdOutlineAdd, MdOutlineRemove } from "react-icons/md";
import { useFormik, Form, FieldArray, Formik, useFormikContext } from "formik";

export let loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const afmExpenses = await api.expenses.apiExpensesAfmGet();
  let expensesList: any = await api.expenses.apiExpensesGet();
  expensesList = expensesList.map((item) => ({
    label: item.displayName,
    id: item.id,
  }));

  // const ref: string = url.searchParams.get("ref") || ""
  // const use: string = url.searchParams.get("plotDestination") || ""
  // const status: string = url.searchParams.get("plotStatusName") || ""
  return json<any>({ afmExpenses, expensesList });
};
export default function ExpenseAdd() {
  const { afmExpenses, expensesList }: any = useLoaderData();
  // const [inputCount, setInputCount] = useState(afmExpenses.data.length);
  return (
    <FormPage title={"New AFM Expense"}>
      <form method="post">
        <Formik
          initialValues={{
            expenses: afmExpenses?.data,
          }}
        >
          {({ values, handleChange }) => (
            <FieldArray name="expenses">
              {({ insert, remove, push }) => (
                <Grid container spacing={2}>
                  <Grid item sx={{ height: 500, overflowY: "scroll" }}>
                    <Grid container spacing={2}>
                      {values.expenses.length > 0 &&
                        values.expenses.map((expense, index) => (
                          <Grid item md={12} key={index}>
                            <Stack
                              alignItems={"center"}
                              useFlexGap
                              direction={"row"}
                              spacing={2}
                            >
                              <FormControl sx={{width:400}}>
                                <InputLabel id="demo-simple-select-standard-label">
                                  Expense
                                </InputLabel>
                                <Select
                                  value={values.expenses[index].expenseId}
                                  label="Expense"
                                  onChange={handleChange}
                                  size={"small"}
                                  name={`expenses.${index}.expenseId`}
                                >
                                  {expensesList.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                      {item.label}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                              <TextField
                                name={`expenses.${index}.rate`}
                                value={values.expenses[index].rate}
                                onChange={handleChange}
                                size="small"
                                label="Rate"
                                type={"number"}
                                inputProps={{
                                  type: "number",
                                  inputMode: "numeric",
                                  pattern: "[0-9]*",
                                }}
                              />
                              <IconButton
                                color={"error"}
                                onClick={() => remove(index)}
                              >
                                <MdOutlineRemove />
                              </IconButton>
                            </Stack>
                          </Grid>
                        ))}
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Button
                      aria-label="Add another expense item"
                      onClick={() => push({ expenseId: "", rate: "" })}
                      startIcon={<MdOutlineAdd />}
                    >
                      Add new expense item
                    </Button>
                  </Grid>
                </Grid>
              )}
            </FieldArray>
          )}
        </Formik>
      </form>
    </FormPage>
  );
}
