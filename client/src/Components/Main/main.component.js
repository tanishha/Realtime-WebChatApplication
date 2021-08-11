import React, { useContext } from "react";
import useStyles from "./styles";
import { AppBar, Box } from "@material-ui/core";
import LoginComponent from "../Login/login.component";
import { AccountContext } from "../../Context/AccountProvider";
import ChatComponent from "../Chat/chat.component";
const MainComponent = () => {
  const style = useStyles();
  const { account } = useContext(AccountContext);
  return (
    <div>
      <Box className={style.component}>
        <AppBar className={account ? style.header : style.loginHeader}></AppBar>
        {account ? <ChatComponent /> : <LoginComponent />}
      </Box>
    </div>
  );
};

export default MainComponent;
