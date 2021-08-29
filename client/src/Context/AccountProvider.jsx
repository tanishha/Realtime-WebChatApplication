import { createContext, useEffect, useRef, useState } from "react";
import { io } from 'socket.io-client';

const AccountContext = createContext();

function AccountProvider({ children }) {
  const socket = useRef();
  useEffect(() => {
    socket.current = io(process.env.REACT_APP_API);  //io connect 
}, [])

  const [account, setAccount] = useState();
  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
}

export { AccountProvider, AccountContext };
