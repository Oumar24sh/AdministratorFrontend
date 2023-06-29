import * as React from "react";
import AnimationIcon from "@mui/icons-material/Animation";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ThreePIcon from "@mui/icons-material/ThreeP";
import { GrMap } from "react-icons/gr";
import { FaRoad } from "react-icons/fa";
import {MdDashboard, MdLandscape, MdPublishedWithChanges} from "react-icons/md";

export const userList = [
  {
    header: "Main Menu",
    permission: [{ key: "MAIN_MENU", operation: "read" }],
    children: [
      {
        name: "Dashboard",
        // additionalText:'Analytics & Overview',
        icon: <MdDashboard color={"rgba(0, 0, 0, 0.54)"} size={20} />,
        route: "/",
        disabled: false,
      },
      {
        name: "Map Overview",
        additionalText: "(Coming Soon)",
        icon: <GrMap color={"rgba(0, 0, 0, 0.54)"} size={20} />,
        route: "/map",
        disabled: false,
        permission: [{ key: "MAP", operation: "read" }],
      },
      {
        name: "AFM",
        icon: <FaRoad color={"rgba(0, 0, 0, 0.54)"} size={20} />,
        route: "/afm/expenses",
        // additionalText:'Afm Shared Spaces & Expenses',
        disabled: false,
        permission: [{ key: "AFM", operation: "read" }],
      },
      {
        name: "AFF",
        icon: <MdLandscape color={"rgba(0, 0, 0, 0.54)"} size={20} />,
        // additionalText:'Aff Plots, Shared Spaces & Expenses',
        route: "/aff",
        disabled: false,
        permission: [{ key: "AFF", operation: "read" }],
      },
      {
        name: "Simulation",
        route: "#",
        additionalText: "(Coming Soon)",
        disabled: true,
        icon: <AnimationIcon size={20} />,
        permission: [{ key: "SIMULATION", operation: "read" }],
      },
    ],
  },
  {
    header: "Admin",
    permission: [{ key: "ADMIN_MENU", operation: "read" }],

    children: [
      {
        name: "Change Requests",
        icon: <MdPublishedWithChanges size={20} />,
        additionalText: "(Coming Soon)",
        route: "/changerequests",
        disabled: false,
        permission: [{ key: "CHANGE_REQUEST", operation: "read" }],
      },
      {
        name: "Users",
        icon: <SupervisedUserCircleIcon size={20} />,
        additionalText: "(Coming Soon)",
        route: "/users",
        disabled: false,
        permission: [{ key: "USER", operation: "read" }],
      },
      {
        name: "Parameters",
        icon: <SettingsIcon size={20} />,
        additionalText: "(Coming Soon)",
        route: "/parameters",
        disabled: false,
        permission: [{ key: "PARAMETER", operation: "read" }],
      },
      {
        name: "User Activity",
        icon: <ThreePIcon size={20} />,
        additionalText: "(Coming Soon)",
        route: "/activity",
        disabled: false,
        permission: [{ key: "ACTIVITY", operation: "read" }],
      },
    ],
  },
];

