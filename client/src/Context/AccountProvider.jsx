import { createContext, useEffect, useRef, useState } from "react";

const AccountContext = createContext();

function AccountProvider({ children }) {
  const [account, setAccount] = useState();
  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
}

export { AccountProvider, AccountContext };
