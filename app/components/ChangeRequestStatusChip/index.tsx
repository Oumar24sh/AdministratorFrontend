import React, { FunctionComponent } from "react";
import { Chip } from "@mui/material";

interface OwnProps {
  statusRef?: any;
  value?: any;
}

type Props = OwnProps;

const ChangeRequestStatusChip: FunctionComponent<Props> = (props) => {
  const { statusRef, value } = props;
  switch (statusRef) {
    case "Pending":
      return <Chip size="small" label={value} />;
    case "Declined":
      return <Chip size="small" color={"error"} label={value} />;
    case "Approved":
      return <Chip size="small" color={'success'} label={value} />;
  }
};

export default ChangeRequestStatusChip;
