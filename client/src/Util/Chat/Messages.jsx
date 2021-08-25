import { Box, makeStyles } from '@material-ui/core';
import Footer from './Footer';
const useStyles = makeStyles({
    wrapper: {
        backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
        // height: 'calc(100% - 114px)',
        backgroundSize: '50%'
    },
    footer: {
        height: '55px',
        background: '#ededed',
        // position: 'absolute',
        width: '100%',
        // bottom: 0
    },
    component: {
        height: '79vh',
        overflowY: 'scroll'
    },
    container: {
        padding: '1px 80px'
    }
})


function Messages() {
    const style = useStyles();

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
            <Footer 
            // sendText={sendText} value={value} setValue={setValue} 

            />
        </Box>
    )
}

export default Messages
