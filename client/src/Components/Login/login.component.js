/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import useStyles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Dialog } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { AccountContext } from "../../Context/AccountProvider";
import { addUser } from "../../Util/httpClient";
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
  const { account, setAccount } = useContext(AccountContext);
  const onLoginSuccess = async (res) => {
    setAccount(res.profileObj);
    await addUser(res.profileObj);
  };
  const onLoginFailure = () => {};
  const style = useStyles();
  const clientId = process.env.REACT_APP_GOOGLE_KEY;
  return (
    <div>
      <Dialog
        open={true}
        classes={{ paper: classes.dialogPaper }}
        BackdropProps={{ style: { backgroundColor: "unset" } }}
      >
        <Box className={style.component}>
          <Box className={style.dialog}>
            <GoogleLogin
              clientId={clientId}
              cookiePolicy={"single_host_origin"}
              theme={"dark"}
              isSignedIn={true}
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
            />
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default withStyles(stylePaper)(LoginComponent);
