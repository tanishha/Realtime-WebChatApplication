import React, { useContext } from "react";
import useStyles from "./styles";
import { AppBar, Toolbar, Box } from "@material-ui/core";
import LoginComponent from "../Login/login.component";
import { AccountContext } from "../../Context/AccountProvider";
const MainComponent = () => {
  const style = useStyles();
  const { account } = useContext(AccountContext);
  return (
    <div>
      <Box className={style.component}>
        <AppBar className={style.loginHeader}>
          <Toolbar></Toolbar>
        </AppBar>
        {account ? "Hello" : <LoginComponent />}
      </Box>
    </div>
  );
};

export default MainComponent;
