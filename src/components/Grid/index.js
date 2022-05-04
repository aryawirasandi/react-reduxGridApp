import AddTileButton  from "../AddTileButton";
import { useDispatch, useSelector } from "react-redux";
import Tile from "../Tile/index";
import { addTileWithChecking, removeTile } from "../../features/Grid/actions"
const colors = ['red', 'blue', 'pink', 'yellow', 'gray'];
export default function Grid(){
    let gridTiles = useSelector(state => state.grid);
    let dispatch  = useDispatch();
    return(
        <div>
          <div style={{ maxWidth: 400, overflow: "hidden"}}>
            {
                gridTiles.map((tile, i) => {
                    return <Tile {...tile} key={i} onDoubleClick={_ => dispatch(removeTile(tile.id))} />
                })
            }
          </div>  
          <div>
            {
                colors.map((color, i) => {
                    return <AddTileButton  color={color} onClick={_ => dispatch(addTileWithChecking(color))} key={i}></AddTileButton>
                })
            }     
          </div>     
        </div>
    )
}