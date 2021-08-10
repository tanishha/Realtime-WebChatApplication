import React from "react";
import useStyles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Box, Typography, Tooltip } from "@material-ui/core";
import { Dialog } from "@material-ui/core";
import { GoogleLogin } from 'react-google-login';

const stylePaper = {
  dialogPaper: {
    marginTop: "1%",
    height: "60%",
    width: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 0,
    boxShadow: "none",
    overflow: "hidden",
  },
};
const LoginComponent = ({ classes }) => {
  const style = useStyles();
  const url =
    "https://www.outsystems.com/Forge_BL/rest/ComponentThumbnail/GetURL_ComponentThumbnail?ProjectImageId=25044";

  return (
    <div>
      <Dialog
        open={true}
        classes={{ paper: classes.dialogPaper }}
        BackdropProps={{ style: { backgroundColor: "unset" } }}
      >
        <Box className={style.component}>
          <Box className={style.dialog}>
          <Tooltip
            title={<Typography color="inherit">Click Here</Typography>}
            arrow
          >
          <GoogleLogin      
   cookiePolicy={'single_host_origin'}
   theme={"dark"}
/>
</Tooltip>
            {/* <Typography className={style.title}>Sign in with Google</Typography> */}
          </Box>
          {/*  */}
            {/* <img src={url} alt="QR" className={style.img} /> */}
          {/*  */}
        </Box>
      </Dialog>
    </div>
  );
};

export default withStyles(stylePaper)(LoginComponent);
