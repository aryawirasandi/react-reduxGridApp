import { ADD_TILE, REMOVE_TILE } from "./constant"
export function addTile(color){
    return {
        type : ADD_TILE,
        color
    }
}

export function removeTile(id){
    return {
        type : REMOVE_TILE,
        id
    }
}

export function addTileWithChecking(color){
    return function(dispatch, getState){
        if(getState().grid.length < 5){
            dispatch(addTile(color));
        }
    }
}