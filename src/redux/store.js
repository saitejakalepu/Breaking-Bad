import { createStore } from "redux";

import { charReducer , inputReducer, loadingReducer} from "./reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({characters : charReducer , text : inputReducer , isLoading : loadingReducer })

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//store.subscribe(()=>{console.log(store.getState())});
export default store;