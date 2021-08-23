import MainComponent from "./Components/Main/main.component";
import { AccountProvider } from "./Context/AccountProvider";
import { TemplateProvider } from "./Context/TemplateProvider";
import UserProvider from "./Context/UserProvider";

function App() {
  return (
    <div>
      <TemplateProvider>
        <UserProvider>
          <AccountProvider>
            <MainComponent />
          </AccountProvider>
        </UserProvider>
      </TemplateProvider>
    </div>
  );
}

export default App;
