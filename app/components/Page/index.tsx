import React, { FunctionComponent } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Paper,
} from "@mui/material";

interface OwnProps {
  children: React.ReactNode;
  title: string;
  action?: React.ReactNode;
  contentPadding?:string | number;
  contentSx?:any;
}

type Props = OwnProps;

const Page: FunctionComponent<Props> = (props) => {
  const { children, title, action,contentPadding = 2 ,contentSx} = props;
  return (
    <Card>
      <CardHeader sx={{px:'32px',pb:0}} title={title} action={action}></CardHeader>
      <CardContent sx={{p:contentPadding,...contentSx}}>{children}</CardContent>
    </Card>
  );
};

export default Page;
