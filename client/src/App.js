import MainComponent from './Components/Main/main.component';
import { AccountProvider } from './Context/AccountProvider';

function App() {
  return (
    <div>
    <AccountProvider>
     <MainComponent/>
     </AccountProvider>
    </div>
  );
}

export default App;
