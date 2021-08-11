import { useContext, useState } from "react";

import { Box, makeStyles } from "@material-ui/core";
import { Chat as MessageIcon } from "@material-ui/icons";
import { AccountContext } from "../../Context/AccountProvider";

import HeaderMenu from "./HeaderMenu";

const useStyles = makeStyles({
  header: {
    height: 35,
    background: "#ededed",
    display: "flex",
    padding: "10px 16px",
    alignItems: "center",
  },
  chatIcons: {
    marginLeft: "auto",
    "& > *": {
      //for both icon
      marginLeft: 2,
      padding: 8,
      color: "#919191",
    },
    "& :first-child": {
      //for message icon
      fontSize: 22,
      marginRight: 8,
      marginTop: 3,
    },
  },
  avatar: {
    height: 37,
    width: 37,
    borderRadius: "50%",
  },
});
function Header() {
  const style = useStyles();
  const { account } = useContext(AccountContext);

  return (
    <>
      <Box className={style.header}>
        <img
          src={account.imageUrl}
          className={style.avatar}
          // onClick={() => toggleDrawer()}
          alt="dp"
        />
        <Box className={style.chatIcons}>
          <MessageIcon />
          <HeaderMenu />
        </Box>
      </Box>
      {/* <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} /> */}
    </>
  );
}

export default Header;
