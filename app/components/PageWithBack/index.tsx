import React, { FunctionComponent } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader, Divider,
  Grid,
} from "@mui/material";
import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router";

interface OwnProps {
  children: React.ReactNode;
  title: string;
  action?: React.ReactNode;
  contentPadding?: string | number;
  contentSx?:any;


}

type Props = OwnProps;

const FormPage: FunctionComponent<Props> = (props) => {
  const { children, title, action, contentPadding = 2,contentSx } = props;
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <Button
          size={"small"}
          onClick={() => navigate(-1)}
          startIcon={<MdChevronLeft />}
        >
          Back
        </Button>
      </Grid>
      <Grid item md={12}>
        <Card>
          <CardHeader
            sx={{ px: "32px" }}
            title={title}
            action={action}
          />
          <Divider/>
          <CardContent sx={{ p: contentPadding ,...contentSx}}>{children}</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FormPage;
