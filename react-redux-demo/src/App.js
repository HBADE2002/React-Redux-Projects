import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
// import CakeContainer from './components/CakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCream';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HooksCakeContainer></HooksCakeContainer>
      <HooksIceCreamContainer></HooksIceCreamContainer>
      {/* <IceCreamContainer></IceCreamContainer> */}
      {/* <CakeContainer></CakeContainer> */}
    </div>
    </Provider>
  );
}

export default App;
