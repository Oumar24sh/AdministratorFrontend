import { useField } from "remix-validated-form";
import {
  Checkbox as MuiCheckbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";
import { DatePicker } from "@mui/x-date-pickers-pro";

interface MyInputProps {
  name: string;
  label: string;
  helperText?: string;
  placeholder?: string;
  required?: boolean;
  value?: any;
}

interface MySelectProps extends MyInputProps {
  menuItems: any[];
  customLabelFunc?: any;
}

interface MyYearPickerProps extends MyInputProps {}

interface MyCheckboxProps extends MyInputProps {}

export const Input = ({
  name,
  label,
  helperText,
  placeholder,
  required,
}: MyInputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <TextField
      name={name}
      size="small"
      error={!!error}
      label={label}
      fullWidth
      required={required || false}
      placeholder={placeholder}
      helperText={error ? error : helperText}
      {...getInputProps({ id: name })}
    />
  );
};
export const InputNumber = ({
  name,
  label,
  helperText,
  placeholder,
  required,
}: MyInputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <TextField
      name={name}
      size="small"
      error={!!error}
      label={label}
      fullWidth
      required={required || false}
      placeholder={placeholder}
      type="number"
      inputProps={{
        step: "any",
        type: "number",
        inputMode: "numeric",
        pattern: "[0-9]*",
        min: 0.1,
      }}
      helperText={error ? error : helperText}
      {...getInputProps({ id: name })}
    />
  );
};

export const Checkbox = ({
  name,
  label,
  helperText,
  placeholder,
  required,
  menuItems,
  value,
  ...otherProps
}: MyCheckboxProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MuiCheckbox
            {...getInputProps({ type: "checkbox", value })}
            {...otherProps}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

export const YearPicker = ({
  name,
  label,
  helperText,
  placeholder,
  required,
  menuItems,
  value,
  shouldDisableYear,
  defaultValue,
  ...otherProps
}: MyYearPickerProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <DatePicker
      size={"small"}
      label={label}
      format={"MM-YYYY"}
      openTo="month"
      error={!!error}
      views={["month","year"]}
      helperText={error ? error : helperText}
      shouldDisableYear={shouldDisableYear}
      slotProps={{
        textField: {
          ...getInputProps({ id: name }),
        },
      }}
    />
  );
};

export const Select = ({
  name,
  label,
  helperText,
  placeholder,
  required,
  menuItems,
  customLabelFunc,
}: MySelectProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <TextField
      name={name}
      size="small"
      error={!!error}
      label={label}
      fullWidth
      required={required || false}
      placeholder={placeholder}
      helperText={error ? error : helperText}
      select
      {...getInputProps({ id: name })}
    >
      {menuItems.map((item) => (
        <MenuItem key={item.id} value={item.id}>
          {!customLabelFunc ? item?.label : customLabelFunc(item)}
        </MenuItem>
      ))}
    </TextField>
  );
};
