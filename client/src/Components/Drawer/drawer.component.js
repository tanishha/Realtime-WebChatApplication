import useStyles from "./styles";
import { Drawer, Box, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

function DrawerComponent({ open, setOpen }) {
  const style = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer open={open} onClose={handleClose}>
      <Box className={style.header}>
        <ArrowBack onClick={() => setOpen(false)} />
        <Typography>Profile</Typography>
      </Box>
      <Box className={style.component}>{/* { profile && <Profile /> } */}</Box>{" "}
    </Drawer>
  );
}

export default DrawerComponent;
