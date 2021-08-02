import React from 'react'
import useStyles from "./styles"
import { AppBar, Toolbar, Box } from '@material-ui/core';

const HeaderComponent = () => {
    const style = useStyles();

    return (
        <div>
           <Box className={style.component}>
            <AppBar className={style.loginHeader }>
                <Toolbar>

                </Toolbar>
            </AppBar>
           
        </Box> 
        </div>
    )
}

export default HeaderComponent
