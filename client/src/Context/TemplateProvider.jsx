import React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles'
const TemplateContext = React.createContext(null);

const TemplateProvider = ({ children }) => {
    const theme = createTheme({
        overrides: {
            MuiDrawer: {
                paperAnchorLeft: {
                    left: 62,
                    top: 17,
                    height: '95%',
                    width: '28%',
                    boxShadow: 'none'
                }
            }
        }
    });

    return (
        <TemplateContext.Provider value>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    );
}

export { TemplateProvider, TemplateContext };
