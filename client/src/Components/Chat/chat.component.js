import React, { useContext } from "react";
import useStyles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Dialog, Box  } from "@material-ui/core";
const stylePaper = {
  dialogPaper: {
    height: "95%",
    width: "91%",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 0,
    boxShadow: "none",
    overflow: "hidden",
  },
};
function ChatComponent({ classes }) {
  const style = useStyles();

  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
 <Box className={style.component}>
                <Box className={style.leftComponent}>
                    {/* <Menu/> */}
                    Hi
                </Box>
                <Box className={style.rightComponent}>
                    {/* {
                        Object.keys(person).length  ? <ChatBox/> : <EmptyChat />
                    } */}
                    Hello
                </Box>
            </Box>
    </Dialog>
  );
}

export default withStyles(stylePaper)(ChatComponent);
