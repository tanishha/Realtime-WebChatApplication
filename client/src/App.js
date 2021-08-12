import MainComponent from "./Components/Main/main.component";
import { AccountProvider } from "./Context/AccountProvider";
import {TemplateProvider} from "./Context/TemplateProvider";

function App() {
  return (
    <div>
      <TemplateProvider>
        <AccountProvider>
          <MainComponent />
        </AccountProvider>
      </TemplateProvider>
    </div>
  );
}

export default App;
