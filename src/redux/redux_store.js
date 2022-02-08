import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { tasks_reducer } from "./reducers/tasks_reducer";
import { filter_reducer } from "./reducers/filter_reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
  tasks: tasks_reducer,
  filter: filter_reducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;
