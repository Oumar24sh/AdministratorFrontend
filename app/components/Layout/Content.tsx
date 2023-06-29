import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";
import { navbarHeightInPixels } from "~/utils/enum";

interface OwnProps {
  segments: any;
  children: any;
  open: boolean;
}

type Props = OwnProps;

const Content: FunctionComponent<Props> = (props) => {
  const { segments, children, open } = props;
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        pb: 1,
        pr: 2,
        marginTop: navbarHeightInPixels,
        minHeight: "calc(100vh - 80px)",
        maxWidth: open ? "calc(100vw - 230px)" : "calc(100vw - 65px)",
        transition: "all 200ms ease-in-out",

      }}
    >
      <Box
        sx={{
          background: "rgb(238, 242, 246)",
          p: segments.includes("map") ? 0 : 3,
          borderRadius: (theme) => theme.shape.borderRadius,
          minHeight: "calc(100vh - 80px)",
        }}
        // className={"content-background-pattern"}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Content;
