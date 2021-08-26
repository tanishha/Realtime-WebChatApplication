import { Box, makeStyles } from "@material-ui/core";
import { useState, useEffect, useContext, useRef } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import { newMessages, getMessages } from "../httpClient";

import Footer from "./Footer";
const useStyles = makeStyles({
  wrapper: {
    backgroundImage: `url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"})`,
    backgroundSize: "50%",
  },
  footer: {
    height: "55px",
    background: "#ededed",
    width: "100%",
  },
  component: {
    height: "79vh",
    overflowY: "scroll",
  },
  container: {
    padding: "1px 80px",
  },
});

function Messages({ person, conversation }) {
  const style = useStyles();
  const [value, setValue] = useState();
  const { account } = useContext(AccountContext);

  const sendText = async (e) => {
    let code = e.keyCode || e.which; //to check which key is pressed
    if (!value) return;

    if (code === 13) {
      //enter key
      let message = {
        sender: account.googleId, //for UI
        conversationId: conversation._id,
        text: value,
      };

      // socket.current.emit('sendMessage', {
      //     senderId: account.googleId,
      //     receiverId,
      //     text: value
      // })

      await newMessages(message);

      setValue(""); //to clear input section
      //   setNewMessageFlag(prev => !prev);
    }
  };
  return (
    <Box className={style.wrapper}>
      <Box className={style.component}>
        {/* {
                    messages && messages.map(message => (
                        <Box className={style.container} ref={scrollRef}>
                            <Message message={message} />
                        </Box>
                    ))
                } */}
      </Box>
      <Footer sendText={sendText} value={value} setValue={setValue} />
    </Box>
  );
}

export default Messages;
