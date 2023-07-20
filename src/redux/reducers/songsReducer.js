import { SELECT_SONGS } from "../actions/actionTypes";

const INITiAIL_STATE = null;

const songsReducer = (state=INITiAIL_STATE, action) => {
    switch(action.type) {
        case SELECT_SONGS:
            return action.payload
        default:
            return state
    }

}

export default songsReducer;
