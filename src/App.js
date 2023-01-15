import './App.css';
import Main from './Components/MainCollection/Main';
import reducer,  {initialState}  from "./dataLayer/reducer/reducer";
import { StateProvider } from "./dataLayer/StateProvider/stateProvider";

function App() {
  return (
  
    <StateProvider initialState={initialState} reducer={reducer}>
   <Main />
  </StateProvider>
  );
}

export default App;
