import {SAVE_MENU} from "../constants/ActionTypes";

export function saveMenu(payload) {
    return {
        type: SAVE_MENU,
        payload: payload
    };
}