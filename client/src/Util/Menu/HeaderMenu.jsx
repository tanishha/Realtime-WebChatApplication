import { useState, useContext } from "react";
import { GoogleLogout } from "react-google-login";

import { MoreVert } from "@material-ui/icons";
import { Menu, MenuItem, makeStyles } from "@material-ui/core";
import { AccountContext } from "../../Context/AccountProvider";
import DrawerComponent from "../../Components/Drawer/drawer.component";

const useStyle = makeStyles({
  menuItem: {
    fontSize: 14,
    padding: "15px 60px 5px 24px",
    color: "#4A4A4A",
  },
  logout: {
    border: "none!important",
    boxShadow: "none!important",
    "& > *": {
      padding: "0px!important",
    },
  },
});
function HeaderMenu() {
  const style = useStyle();

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(null);
  };
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const clientId = process.env.REACT_APP_GOOGLE_KEY;
  const { setAccount } = useContext(AccountContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    // setShowlogoutButton(false);
    // setShowloginButton(true);
    setAccount("");
    // setPerson({});
  };
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          className={style.menuItem}
          onClick={() => {
            handleClose();
            toggleDrawer()
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          className={style.menuItem}
          onClick={() => {
            handleClose();
          }}
        >
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSignoutSuccess}
            className={style.logout}
          ></GoogleLogout>
        </MenuItem>
      </Menu>
      <DrawerComponent
        open={openDrawer}
        setOpen={setOpenDrawer}
        // profile={true}
      />
    </>
  );
}

export default HeaderMenu;
