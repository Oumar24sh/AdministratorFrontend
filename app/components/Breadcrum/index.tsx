import React, { FunctionComponent } from "react";
import Typography from "@mui/material/Typography";
import { Breadcrumbs, Link } from "@mui/material";
import { useLocation } from "@remix-run/react";
import {affNames, BreadcrumMap} from "~/utils/enum";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
interface OwnProps {}

type Props = OwnProps;

const Breadcrum: FunctionComponent<Props> = (props) => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);
  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
        sx={{
          // marginBottom: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          sx={{ display: "flex", alignItems: "center" }}
          key={"path"}
          underline="hover"
          color="primary"
          href={"/"}
        >
          <HomeIcon fontSize={"small"} />
        </Link>
        {segments.map((segment, index) => {
          const path = `/${segments.slice(0, index + 1).join("/")}`;
          const isLastSegment = index === segments.length - 1;
          return isLastSegment || segment === "edit" ? (
            <Typography key={path} color="text.primary" variant={"subtitle1"}>
              {BreadcrumMap[segment] || affNames[segment]|| segment.toUpperCase()}
            </Typography>
          ) : (
            <Link key={path} underline="hover" color="inherit" href={path}>
              <Typography color="text.secondary" variant={"subtitle1"}>
                {BreadcrumMap[segment] ||affNames[segment] ||segment.toUpperCase()}
              </Typography>
            </Link>
          );
        })}
      </Breadcrumbs>
    </>
  );
};

export default Breadcrum;
