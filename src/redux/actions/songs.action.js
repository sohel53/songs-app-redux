import { SELECT_SONGS } from "./actionTypes";

export const selectSongs = (song) => {
    return {
        type: SELECT_SONGS,
        payload: song
    }
}