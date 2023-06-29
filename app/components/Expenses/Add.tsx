//https://react-hook-form.com/advanced-usage#Workingwithvirtualizedlists
import React, { FunctionComponent, useRef, useState } from "react";
import {
  Button,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { MdAdd, MdClose, MdOutlineAdd } from "react-icons/md";
import FormPage from "~/components/PageWithBack";
import { LoadingButton } from "@mui/lab";
import { validator } from "~/schema/expense";
import { FieldArray, ValidatedForm } from "remix-validated-form";
import {
  Input,
  InputNumber,
  Select,
  Checkbox,
  YearPicker,
} from "~/components/Fields";
import dayjs, { Dayjs } from "dayjs";
import { useActionData } from "@remix-run/react";

interface OwnProps {
  expenses: any;
  expensesList: any;
  title: string;
  affRef?: string;
}

type Props = OwnProps;

const AddExpense: FunctionComponent<Props> = (props) => {
  const { expenses, expensesList, title, affRef } = props;

  const [initialValues]: any = useState({
    year: dayjs(),
    expenses: expenses?.data,
    check: false,
  });
  const isPastYear = (date: Dayjs) => date?.get("year") < dayjs().get("year");
  return (
    <FormPage title={title} contentSx={{ px: "32px" }}>
      <ValidatedForm
        validator={validator}
        method="post"
        defaultValues={initialValues}
        id="afm-expenses-form"
        noValidate
      >
        <Grid container spacing={2}>
          <Grid item>
            <YearPicker
              required
              name={"yearStart"}
              label={"Financial Year Start"}
              shouldDisableYear={isPastYear}
            />
          </Grid>
          <Grid item>
            <YearPicker
              required
              name={"yearEnd"}
              label={"Financial Year End"}
              shouldDisableYear={isPastYear}
            />
          </Grid>

          <Grid item md={12}>
            <FieldArray name="expenses">
              {(items, { push, remove }) => (
                <Grid container spacing={2}>
                  {items.map(({ defaultValue, key }, index) => (
                    <Grid item md={12} key={key}>
                      <Grid container spacing={2}>
                        <Grid item md={7}>
                          <Select
                            required
                            menuItems={expensesList}
                            name={`expenses[${index}].expenseId`}
                            label="Expense Category"
                          />
                        </Grid>
                        <Grid item md={2}>
                          <InputNumber
                            name={`expenses[${index}].rate`}
                            label="Rate"
                          />
                        </Grid>
                        <Grid item md={2}>
                          <IconButton
                            color={"error"}
                            onClick={() => remove(index)}
                          >
                            <MdClose />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                  <Grid item md={12}>
                    <Button
                      aria-label="Add another expense item"
                      startIcon={<MdOutlineAdd />}
                      onClick={() => {
                        push({ expenseId: "" });
                      }}
                    >
                      Add new expense category
                    </Button>
                  </Grid>
                </Grid>
              )}
            </FieldArray>
          </Grid>
          <Grid item md={12}>
            <LoadingButton
              color="success"
              variant={"contained"}
              type={"submit"}
            >
              Submit
            </LoadingButton>
          </Grid>
        </Grid>
      </ValidatedForm>
    </FormPage>
  );
};
export default AddExpense;
