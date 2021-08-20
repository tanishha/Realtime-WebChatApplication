import { useState, useEffect, useContext, useRef } from "react";
import { Box, makeStyles, Divider } from "@material-ui/core";
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
});

function Friends({ text }) {
  const style = useStyles();
  const [users, setUsers] = useState([]);
  const { account } = useContext(AccountContext);

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
    </Box>
  );
}

export default Friends;
