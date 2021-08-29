/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Box, makeStyles } from "@material-ui/core";
import { useState, useEffect, useContext, useRef } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import { newMessages, getMessages } from "../httpClient";
import Message from "./Message";

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
    overflowY: "scroll", //scroll on overflow
  },
  container: {
    padding: "1px 80px",
  },
});

function Messages({ person, conversation }) {
  const style = useStyles();
  const [value, setValue] = useState();
  const {
    account,
    socket,
    newMessageFlag,
    setNewMessageFlag,
    getMessageFlag,
    setgetMessageFlag,
  } = useContext(AccountContext);
  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
    setgetMessageFlag((prev) => !prev);
  }, []);

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    };
    getMessageDetails();
  }, [conversation?._id, person._id, newMessageFlag, getMessageFlag]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  const receiverId = conversation?.members?.find(
    (member) => member !== account.googleId //to distinguish between sender and receiver use find
  );

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.sender) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);
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

      socket.current.emit("sendMessage", {
        senderId: account.googleId,
        receiverId,
        text: value,
      });

      await newMessages(message);

      setValue(""); //to clear input section
      setNewMessageFlag((prev) => !prev); //negate the previous value
    }
  };
  return (
    <Box className={style.wrapper}>
      <Box className={style.component}>
        {messages &&
          messages.map((message) => (
            <Box className={style.container} ref={scrollRef}>
              <Message message={message} />
            </Box>
          ))}
      </Box>
      <Footer sendText={sendText} value={value} setValue={setValue} />
    </Box>
  );
}

export default Messages;
