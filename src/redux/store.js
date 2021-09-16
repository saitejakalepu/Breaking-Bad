import { createStore } from "redux";

import { reducer} from "./reducer";
//import { combineReducers } from "redux";

//const allReducers = combineReducers({characters : charReducer })

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//store.subscribe(()=>{console.log(store.getState())});
export default store;