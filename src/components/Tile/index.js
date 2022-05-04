import "./style.css";
import { string, number } from "prop-types";
export default function Tile({ color, id, onDoubleClick}){
    return (
        <div className="tile" style={{ backgroundColor : color}} onDoubleClick={onDoubleClick}>

        </div>
    )
}

Tile.defaultProps = {
    color : "gray"
}

// validation prop type
Tile.propTypes = {
    color : string.isRequired,
    id: number.isRequired
}