import React, { FunctionComponent } from "react";
import {Avatar, Box, Typography} from "@mui/material";
import { stringAvatar } from "~/utils";

interface OwnProps {
  name: string;
}

type Props = OwnProps;

const AvatarAndName: FunctionComponent<Props> = (props) => {
  const { name } = props;
  return (
    <Box sx={{display:'flex',alignItems:'center'}}>
      <Avatar
        sx={{
          bgcolor: (theme) => theme.palette.primary.main,
          width: 23,
          height: 23,
          fontSize: "0.8rem",
        }}
        variant={'square'}
        {...stringAvatar(name)}
      />
      <Typography sx={{ml:"10px"}}>{name}</Typography>
    </Box>
  );
};

export default AvatarAndName;
