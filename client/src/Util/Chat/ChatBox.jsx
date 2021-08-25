/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@material-ui/core';
import { useContext, useState, useEffect } from 'react';

import ChatHeader from './ChatHeader'
import Messages from './Messages'
import {UserContext} from "../../Context/UserProvider"
import { AccountContext } from '../../Context/AccountProvider';
import {getConversations} from "../httpClient"
function ChatBox() {
    const { person } = useContext(UserContext);
    const { account } = useContext(AccountContext);
    const [conversation, setConversation] = useState({});
    useEffect(() => {
      const getConversationDetails = async () => {
          let data = await getConversations({ senderId: account.googleId, receiverId: person.googleId });
          setConversation(data);
      }
      getConversationDetails();
  }, [person.googleId]);  //call when googleId changes

    return (
        <Box style={{height: '75%'}}>
          <ChatHeader person={person}/>
          <Messages person={person} conversation={conversation} />        </Box>
    )
}

export default ChatBox
