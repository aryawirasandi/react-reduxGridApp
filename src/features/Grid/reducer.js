import { ADD_TILE, REMOVE_TILE } from "./constant"
const initialState = [];

function reducer(state = initialState, action){
    switch(action.type){
        case ADD_TILE:
            const nextId = state.length + 1;
            return [...state, {id : nextId, color : action.color}]
        case REMOVE_TILE:
            return state.filter(color => color.id !== action.id);
        default:
            return state;
    }
}

export default reducer;