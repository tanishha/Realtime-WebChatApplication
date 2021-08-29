/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { Box, makeStyles, Divider, Typography } from "@material-ui/core";
import { AccountContext } from "../../Context/AccountProvider";
import Conversation from "./Conversation";

import { getUsers } from "../../Util/httpClient";
const useStyles = makeStyles({
  component: {
    overflow: "overlay", //for sroll property
    height: "81vh",
  },
  divider: {
    margin: "0 0 0 67px",
    backgroundColor: "#F2F2F2",
  },
  text: {
    display: "block",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 14,
    textAlign:'center',
    marginBottom:0
  },
});

function Friends({ text }) {
  const style = useStyles();
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const getData = async () => {
      let data = await getUsers();
      let fiteredData = data.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(fiteredData);
    };
    getData();
  }, [text]);
  useEffect(() => {
    //send user's info to backend
    socket.current.emit("addUser", account.googleId); //send
    socket.current.on("getUsers", (users) => {
      //fetch
      setActiveUsers(users);
    });
  }, [account]);
  return (
    <Box className={style.component}>
      {users &&
        users.map(
          (user, index) =>
            user.googleId !== account.googleId && (
              <>
                <Conversation user={user} />
                {users.length !== index + 1 && (
                  <Divider className={style.divider} />
                )}
              </>
            )
        )}
        <br/>
        <Typography className={style.text}>Refresh to add friends</Typography>
    </Box>
  );
}

export default Friends;
