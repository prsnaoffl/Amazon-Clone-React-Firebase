import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './Components/StateProvider/StateProvider';
import reducer,{initialState} from './Components/StateProvider/Reducer';


ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>  {/*reducer is function,not a comp */}
    <App />
    </StateProvider>,
  document.getElementById('root')
);


