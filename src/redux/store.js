import songsReducer  from "./reducers/songsReducer";
import dataReducer from "./reducers/dataReducer";
import { createStore } from "redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    song: songsReducer,
    data: dataReducer
});

const store = createStore(rootReducer);

export default store;