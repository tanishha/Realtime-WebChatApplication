/* eslint-disable jsx-a11y/img-redundant-alt */
import { useContext, useEffect, useState } from 'react'
import { makeStyles, Box, Typography } from "@material-ui/core";

import { UserContext } from '../../Context/UserProvider';
import { AccountContext } from "../../Context/AccountProvider";
import { setConversation, getConversation  } from '../httpClient';
const useStyles = makeStyles({
    component: {
        height: 40,
        display: 'flex',
        padding: '13px 0',
        cursor: 'pointer'
    },
    displayPicture: {
        width: 50,
        height: 50,
        objectFit: 'cover',
        borderRadius: '50%',
        padding: '0 14px'
    },
    container: {
        display: 'flex'
    },
    timestamp: {
        fontSize: 12,
        marginLeft: 'auto',
        color: '#00000099',
        marginRight: 20
    },
    text: {
        display: 'block',
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 14
    }
})
function Conversation({user}) {
    const style = useStyles();
    const { account }  = useContext(AccountContext);
    const { setPerson } = useContext(UserContext);

    const getUser = async () => {
        setPerson(user);  //stores information of user
        await setConversation({ senderId: account.googleId,receiverId:user.googleId});
    }
    return (
        <Box className={style.component} 
        onClick={() => getUser()}
        >
            <Box>
                <img src={user.imageUrl} alt="display picture" className={style.displayPicture} />
            </Box>
            <Box style={{width: '100%'}}>
                <Box className={style.container}>
                    <Typography>{user.name}</Typography>
                    {/* <Typography className={style.timestamp}>
                        {getTime(new Date(message.timestamp).getHours())}:{getTime(new Date(message.timestamp).getMinutes())}
                    </Typography>         */}
                </Box>
                <Box>
                    {/* <Typography className={style.text}>{message.text}</Typography> */}
                </Box>
            </Box>
        </Box>
    )
}

export default Conversation
