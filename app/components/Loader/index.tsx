import { useNavigation } from "@remix-run/react";
import { Backdrop, CircularProgress} from "@mui/material";

function GlobalLoading() {
  const transition = useNavigation();
  const idle = transition.state === "idle";
  const active = !idle;
  return (
      <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 500 }}
          open={active}
      >
          <CircularProgress color="inherit" />
      </Backdrop>
    // <Box
    //   role="progressbar"
    //   aria-valuetext={active ? "Loading" : undefined}
    //   aria-hidden={!active}
    //   sx={{
    //     zIndex: 1202,
    //     position: "fixed",
    //     left: 0,
    //     top: 0,
    //     width: "100%",
    //     pointerEvents: "none",
    //   }}
    // >
    //   <LinearProgress variant="determinate" sx={{height:"3px"}} value={active ? 0 : 100} />
    // </Box>
  );
}

export { GlobalLoading };
