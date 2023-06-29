import React, { FunctionComponent } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface OwnProps {}

type Props = OwnProps;

const Settings: FunctionComponent<Props> = (props) => {
  return (
    <Accordion
      // elevation={1}
      sx={{
        width: "100%",
        zIndex: 999,
          background:'rgba(255,255,255,0.9)',
        borderBottomLeftRadius: "0px !important",
        borderBottomRightRadius: "0px !important",
        borderTopLeftRadius: "0px !important",
        borderTopRightRadius: "16px !important",
        border: "1px solid rgba(0, 0, 0, .2)",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Settings;
