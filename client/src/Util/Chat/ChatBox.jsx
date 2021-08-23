import { Box } from '@material-ui/core';
import { useContext, useState, useEffect } from 'react';

import ChatHeader from './ChatHeader'
import Messages from './Messages'
import {UserContext} from "../../Context/UserProvider"
import { AccountContext } from '../../Context/AccountProvider';

function ChatBox() {
    const { person, setPerson } = useContext(UserContext);
    const { account } = useContext(AccountContext);

    return (
        <Box style={{height: '75%'}}>
          <ChatHeader person={person}/>
          <Messages/>  
        </Box>
    )
}

export default ChatBox
