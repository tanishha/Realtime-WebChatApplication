import { createContext, useEffect, useRef, useState } from "react";

const AccountContext = createContext()

function AccountProvider({children}) {
    const[account,setAccount]=useState()
    console.log("check",account)
    return (
        <AccountContext.Provider value={{account, 
            setAccount,}}>
            {children}
        </AccountContext.Provider>
    )
}

export { AccountProvider, AccountContext };
